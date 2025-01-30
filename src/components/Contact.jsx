import { useState } from "react"
import Breadcrumb from "./Breadcrumb"
import { API_URL } from "../utils/constance";

const Contact = () => {

    const [contactFormData, setContactFormDate] = useState({
        name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContactForm = (e) => {
        const { name, value } = e.target;
            setContactFormDate((prev) => ({
                ...prev,
                [name]: value
            })
        )
    }

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        if(!contactFormData.name || !contactFormData.email || !contactFormData.phone_number){
            setErrorMessage("Please enter required fields")
            setSuccessMessage(null)
        }else{
            try{

                const response  = await fetch(`${API_URL}send-email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactFormData)
                })

                const json = await response.json();
                
                if (json.statusCode == 200) {
                    setSuccessMessage(json.message);
                    setContactFormDate({
                        name: "",
                        email: "",
                        phone_number: "",
                        subject: "",
                        message: ""
                    });
                  } else {
                    setErrorMessage(json.message);
                  }
            }catch(error){
                setErrorMessage(error.message)
                
            }
        }

        setTimeout(() => {
            setIsSubmitting(false)
            setErrorMessage(null)
            setSuccessMessage(null)
        }, 2500 );
    }


    return (
        <>
            <Breadcrumb title="Contact Us"/>
            <section className="ls  container-px-xl-0">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6 col-xl-7 ls ">
							<div className="special-column">
								<div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
								<h2 className="special-heading text-left">
									<span className="text-capitalize">
										Drop Us A Line
									</span>
								</h2>
								<div className="divider-line bg-maincolor"></div>
								<div className="fw-divider-space divider-25"></div>
								<p className="special-heading text-left">
									<span>
										Feel free to use the below contact form to reach out to us.
									</span>
								</p>
								<div className="divider-50 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<form className="contact-form" onSubmit={handleContactFormSubmit}>
									<div className="row c-mb-10 c-gutter-10">
										<div className="col-lg-6">
											<div className="form-group has-placeholder">
												<label htmlFor="name">Full Name <span className="required">*</span></label>
												<i className="fas fa-user"></i>
												<input
                                                    type="text"
                                                    aria-required="true"
                                                    size="30"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Full Name" 
                                                    value={contactFormData.name}   
                                                    onChange={handleContactForm} 
                                                />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group has-placeholder">
												<label htmlFor="email">Email address<span className="required">*</span></label>
												<i className="fas fa-envelope"></i>
												<input
                                                    type="email"
                                                    aria-required="true"
                                                    size="30"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    value={contactFormData.email}
                                                    onChange={handleContactForm}
                                                />
											</div>
										</div>
									</div>
									<div className="row c-mb-10 c-gutter-10">
										<div className="col-lg-6">
											<div className="form-group has-placeholder">
												<label htmlFor="phone_number">Phone Number <span className="required">*</span></label>
												<i className="fas fa-phone"></i>
												<input
                                                    type="text"
                                                    aria-required="true"
                                                    size="30"
                                                    name="phone_number"
                                                    id="phone_number"
                                                    className="form-control"
                                                    placeholder="Phone Number" 
                                                    value={contactFormData.phone_number}
                                                    onChange={handleContactForm}
                                                />
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group has-placeholder">
												<label htmlFor="subject">Subject <span className="required">*</span></label>
												<i className="fas fa-paperclip"></i>
												<input
                                                    type="text"
                                                    aria-required="true"
                                                    size="30"
                                                    name="subject"
                                                    id="subject"
                                                    className="form-control"
                                                    placeholder="Subject" 
                                                    value={contactFormData.subject}
                                                    onChange={handleContactForm}
                                                />
											</div>
										</div>
									</div>
									<div className="row c-mb-10 c-gutter-10">
										<div className="col-sm-12">
											<div className="form-group has-placeholder">
												<label htmlFor="message">Message</label>
												<i className="fas fa-edit"></i>
												<textarea aria-required="true"
                                                    rows="8"
                                                    cols="45"
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    placeholder="Your Message"
                                                    value={contactFormData.message}
                                                    onChange={handleContactForm}    
                                                />
											</div>
										</div>
									</div>
									<div className="row c-mb-10 c-gutter-10">
										<div className="col-sm-12 mb-0 mt-lg-50 mt-30">
											<div className="form-group">
												<input className="btn btn-gradient big-btn"
                                                    type="submit"
                                                    value="Send message" 
                                                    disabled={isSubmitting}
                                                />
											</div>
										</div>
									</div>
								</form>
								<div className="fw-divider-space">
                                    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                                </div>
							</div>
						</div>
						<div className="col-lg-6 col-xl-5 text-sm-left text-center ls ms" data-animation="scaleAppear">
							<div className="special-column2">
								<div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
								<div className="media text-center text-sm-left">
									<div className="icon-styled fs-60 color-main">
										<i className="ico ico-location"></i>
									</div>
									<div className="media-body">
										<h6 className="">
											Our Address
										</h6>
										<p className="">SS Scientific
											Jamal mansion, Dr. meisheri road,
											Dongri, Mumbai-400 009,
											Maharashtra, India</p>
									</div>
								</div>
								<div className="divider-50 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="divider-line bg-maincolor text-center"></div>
								<div className="divider-60 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="media text-center text-sm-left">
									<div className="icon-styled fs-60 color-main">
										<i className="ico ico-call"></i>
									</div>
									<div className="media-body">
										<h6 className="">
											Our Number
										</h6>
										<p className="">+91 98332 41875 <br />
											+91 98332 41875
										</p>
									</div>
								</div>
								<div className="divider-50 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="divider-line bg-maincolor text-center"></div>
								<div className="divider-60 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="media text-center text-sm-left">
									<div className="icon-styled fs-60 color-main">
										<i className="ico ico-email"></i>
									</div>
									<div className="media-body">
										<h6 className="">
											Our Email
										</h6>
										<p className="">sales@ssscientific.net</p>
									</div>
								</div>
								<div className="divider-50 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="divider-line bg-maincolor text-center"></div>
								<div className="divider-60 hidden-below-lg"></div>
								<div className="divider-30 hidden-above-lg"></div>
								<div className="fw-divider-space divider-xl-160 divider-lg-130 divider-md-90 divider-60"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default Contact