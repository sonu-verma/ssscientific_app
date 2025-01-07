const Breadcrumb = ({ title }) => {
    return (
        <>
        <section className="page_title ds s-parallax s-pb-xl-80  s-pb-lg-100  s-pb-md-90 s-pt-md-190 s-pt-180 s-pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>{title}</h1>
                        <div className="breadcrumb-wrap">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    {title}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Breadcrumb