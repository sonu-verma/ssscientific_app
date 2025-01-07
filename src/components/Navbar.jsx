import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="header_absolute">
                <header className="page_header_side header_slide header-special header_side_right ds">
                <div className="scrollbar-macosx">
                    <div className="side_header_inner">
                    <p className="text-right mb-0 close-wrapper"><a href="#">×</a></p>
                    <div className="widget widget_recent_posts">
                        <h3 className="widget-title">Our news</h3>
                        <ul className="list-unstyled">
                        <li className="media">
                            <article className="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                            <div className="item-content">
                                <div className="entry-header">
                                <div className="entry-meta">
                                    <div className="byline">
                                    <span className="date">
                                        <a href="blog-@@type.html" rel="bookmark">
                                        <time className="published entry-date" dateTime="2019-04-09T12:23:09+00:00">20.03.2019</time>
                                        </a>
                                    </span>
                                    <span className="author vcard">
                                        <a className="url fn n" href="blog-@@type.html" rel="author"><span>by</span> Admin</a>
                                    </span>
                                    </div>
                                </div>
                                <h4 className="entry-title">
                                    <a href="blog-single-@@type.html" rel="bookmark">
                                    Adipisicing elit sed do eiusmod
                                    </a>
                                </h4>
                            </div>
                            </div>
                            </article>
                        </li>
                        <li className="media">
                            <article className="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                            <div className="item-content">
                                <div className="entry-header">
                                <div className="entry-meta">
                                    <div className="byline">
                                    <span className="date">
                                        <a href="blog-@@type.html" rel="bookmark">
                                        <time className="published entry-date" dateTime="2019-04-09T12:23:09+00:00">20.03.2019</time>
                                        </a>
                                    </span>
                                    <span className="author vcard">
                                        <a className="url fn n" href="blog-@@type.html" rel="author"><span>by</span> Admin</a>
                                    </span>
                                    </div>
                                </div>
                                <h4 className="entry-title">
                                    <a href="blog-single-@@type.html" rel="bookmark">
                                    Adipisicing elit sed do eiusmod
                                    </a>
                                </h4>
                                </div>
                            </div>
                            </article>
                        </li>
                        <li className="media">
                            <article className="vertical-item  post type-post status-publish format-standard has-post-thumbnail">
                            <div className="item-content">
                                <div className="entry-header">
                                <div className="entry-meta">
                                    <div className="byline">
                                    <span className="date">
                                        <a href="blog-@@type.html" rel="bookmark">
                                        <time className="published entry-date" dateTime="2019-04-09T12:23:09+00:00">20.03.2019</time>
                                        </a>
                                    </span>
                                    <span className="author vcard">
                                        <a className="url fn n" href="blog-@@type.html" rel="author"><span>by</span> Admin</a>
                                    </span>
                                    </div>
                                </div>
                                <h4 className="entry-title">
                                    <a href="blog-single-@@type.html" rel="bookmark">
                                    Adipisicing elit sed do eiusmod
                                    </a>
                                </h4>
                                </div>
                            </div>
                            </article>
                        </li>
                        </ul>
                    </div>
                    <div className="widget widget_about">
                        <h3 className="widget-title">About</h3>
                        <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde.
                        </p>
                    </div>
                    <div className="widget widget_mailchimp">
                        <h3 className="widget-title">Newsletter</h3>
                    </div>
                    <div className="widget widget_social_icons">
                        <a href="#" className="fab fa-facebook-f rounded-icon bg-icon fs-16" title="facebook"></a>
                        <a href="#" className="fab fa-twitter rounded-icon bg-icon fs-16" title="telegram"></a>
                        <a href="#" className="fab fa-linkedin-in rounded-icon bg-icon fs-16" title="linkedin"></a>
                        <a href="#" className="fab fa-instagram rounded-icon bg-icon fs-16" title="instagram"></a>
                    </div>
                    </div>
                </div>
                </header>
                <header className="page_header header-1 ds bg-transparent s-py-xl-20 s-py-10 ">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-xl-3 col-md-4 col-12 text-center">
                        <a href="#" className="logo">
                        <img src="./assets/images/logo.png" alt="" />
                        <span className="d-flex flex-column">
                            <span className="logo-text color-darkgrey">SS Scientific</span>
                        
                        </span>
                        </a>
                    </div>
                    <div className="col-xl-6 col-1 text-center">
                    
                        <nav className="top-nav">
                        <ul className="nav sf-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        </nav>
                    
                    </div>
                    <div className="col-xl-3 col-md-7 col-12  d-flex justify-content-md-end">
                        <ul className="top-includes">
                        <li className="metaphone">
                            <a href="https://wa.me/919833241875" target="_blank">+91 98332 41875</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <span className="toggle_menu"><span>menu</span></span>
                </header>
            </div>
        </>
    );
}

export default Navbar;