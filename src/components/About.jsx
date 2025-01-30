import { Link } from "react-router-dom"
import Breadcrumb from "./Breadcrumb"

const About = () => {
    return (
        <>
            <Breadcrumb title="About Us"/>
			<section className="ls s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-3 text-center">
							<h2 className="special-heading text-center">
								<span className="text-capitalize">
									welcome!
								</span>
							</h2>
							<div className="divider-30"></div>
							<Link  className="btn btn-gradient big-btn"  to="/contact">Contact Us</Link>
						</div>
						<div className="col-12 col-lg-8 text-center">
							<div className="divider-35 hidden-above-lg"></div>
							<div className="divider--5"></div>
							<p className="excerpt">
								SS Scientific
							</p>
							<p>
								SS Scientific based in Mumbai has its focus on Petroleum and Petrochemical Industries. We are the distributor for NORMALAB FRANCE SAS, manufacturer of Petroleum testing instruments and glassware. Our main objective is to provide Quality and Reliable services to our customers.
							</p>
						</div>
						{/* <div className="col-12 col-lg-3 text-sm-left text-center">
							<div className="divider-35 hidden-above-lg"></div>
							<div className="signature">
								 <div className="signature-image">
									<img src="images/team/testimonial2.jpg" alt="" />
								</div>
								 <div className="signature-content">
									<span>Diana T. Davis</span>
									<img src="images/signature.png" alt="" />
								</div> 
							</div>
						</div> */}
					</div>
				</div>
			</section>
        </>
    )
}

export default About