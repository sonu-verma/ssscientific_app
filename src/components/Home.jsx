import { useEffect } from "react";
import { windowLoadInit, documentReadyInit } from '../../public/assets/js/main'
import { assetPath } from '../utils/constance'
import PortfolioCard from "./PortfolioCard";
import ClientCard from "./ClientCard";
const Home = () => {
    
    const partners = [
        {
            "image": "1.jpg",
            "title": "HP",
        },
        {
            "image": "2.jpg",
            "title": "Essar",
        },
        {
            "image": "3.jpg",
            "title": "Bharat Petroleum",
        },
        {
            "image": "4.jpg",
            "title": "castrol",
        },
        {
            "image": "5.jpg",
            "title": "NRL",
        },
        {
            "image": "6.jpg",
            "title": "Total",
        },
        {
            "image": "7.jpg",
            "title": "NTPC",
        },
        {
            "image": "8.jpg",
            "title": "ONGC",
        },
        {
            "image": "9.jpg",
            "title": "Indian oil",
        },
    ];


    const portfolios = [
        {
            "filterType":"business news", 
            "imageName":"01.jpg",
            "desc": "Test"
        },{
            "filterType":"innovations corporate", 
            "imageName":"02.jpg",
            "desc": "Test"
        },{
            "filterType":"entertainment news innovations", 
            "imageName":"03.jpg",
            "desc": "Test"
        },{
            "filterType":"business entertainment", 
            "imageName":"04.jpg",
            "desc": "Test"
        },{
            "filterType":"innovations corporate", 
            "imageName":"05.jpg",
            "desc": "Test"
        },{
            "filterType":"entertainment news corporate", 
            "imageName":"06.jpg",
            "desc": "Test"
        },
    ]

    const loadSlider = () =>  {
    
        var $introSlider = window.$(".page_slider .flexslider");
        $introSlider.each(function (index) {
            var $currentSlider = window.$(this);
            var data = $currentSlider.data();
            var nav = (data.nav !== 'undefined') ? data.nav : true;
            var dots = (data.dots !== 'undefined') ? data.dots : true;
            var speed = (data.speed !== 'undefined') ? data.speed : 7000;

            $currentSlider.flexslider({
                animation: "fade",
                pauseOnHover: true,
                useCSS: true,
                controlNav: dots,
                directionNav: nav,
                prevText: "",
                nextText: "",
                smoothHeight: false,
                slideshowSpeed: speed,
                animationSpeed: 600,
                start: function (slider) {
                    slider.find('.intro_layers').children().css({'visibility': 'hidden'});
                    slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
                        var self = $(this);
                        var animationClass = !self.data('animation') ? 'scaleAppear' : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, index * 250);
                    });
                    var current= window.$('li:has(.flex-active)').index('.flex-control-nav li')+1;

                    var length=window.$('.slides li').length;

                    window.$('.flex-control-nav li a.flex-active').html('<span class="span-active">'+ current + '/' + length + '</span>' );
                },
                after: function (slider) {
                    slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
                        var self = window.$(this);
                        var animationClass = !self.data('animation') ? 'scaleAppear' : self.data('animation');
                        setTimeout(function () {
                            self.addClass("animated " + animationClass);
                        }, index * 250);
                    });
                    //////////////////////////////////////////
                    var current= window.$('li:has(.flex-active)').index('.flex-control-nav li')+1;

                    var length=window.$('.slides li').length;

                    window.$('.flex-control-nav li a.flex-active').html('<span class="span-active">'+ current + '/' + length + '</span>' );
                },
                end: function (slider) {
                    slider.find('.intro_layers').children().each(function () {
                        var self = window.$(this);
                        var animationClass = !self.data('animation') ? 'scaleAppear' : self.data('animation');
                        self.removeClass('animated ' + animationClass).css({'visibility': 'hidden'});
                    });
                },

            })
        });

        window.$(".flexslider").each(function (index) {
            var $currentSlider = window.$(this);
            if ($currentSlider.find('.flex-active-slide').length) {
                return;
            }
            $currentSlider.flexslider({
                animation: "fade",
                useCSS: true,
                controlNav: true,
                directionNav: false,
                prevText: "",
                nextText: "",
                smoothHeight: false,
                slideshowSpeed: 5000,
                animationSpeed: 800,
            })
        });
    }

    useEffect( () => {
        windowLoadInit()
        documentReadyInit()
    }, []);
    
    return (
        
        <>
            <section className="page_slider">
                <div className="flexslider">
                <ul className="slides">
                    <li className="ds cover-image">
                        <img src="assets/images/slide01.jpg" alt="img" />
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="intro_layers_wrapper">
                                <div className="intro_layers">
                                    <div className="intro_layer">
                                    <h6 className="intro_before_featured_word">Providing for Today</h6>
                                    <h2 className="text-capitalize intro_featured_word">
                                        Vital Oil &
                                        Natural Gas
                                    </h2>
                                    </div>
                                </div> 
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </li>
                    <li className="ds cover-image">
                        <img src="assets/images/slide02.jpg" alt="img" />
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="intro_layers_wrapper">
                                <div className="intro_layers">
                                    <div className="intro_layer">
                                    <h6 className="intro_before_featured_word">Innovations</h6>
                                    <h2 className="text-capitalize intro_featured_word">
                                        Know How Solutions
                                    </h2>
                                    </div>
                                </div> 
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </li>
                    <li className="ds cover-image">
                        <img src="assets/images/slide03.jpg" alt="img" />
                        <div className="container-fluid">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="intro_layers_wrapper">
                                <div className="intro_layers">
                                    <div className="intro_layer">
                                    <h6 className="intro_before_featured_word">Industry</h6>
                                    <h2 className="text-capitalize intro_featured_word">
                                        Energy & Commodities
                                    </h2>
                                    </div>
                                </div> 
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </section>
            <section className="ls main-testimonial s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-lg-3 text-center">
                        <h2 className="special-heading text-center">
                        <span className="text-capitalize">
                            welcome!
                        </span>
                        </h2>
                        <div className="divider-30"></div>
                    </div>
                    <div className="col-12 col-lg-6 text-center">
                        <div className="divider-35 hidden-above-lg"></div>
                        <div className="divider--5"></div>
                        <p>
                        SS Scientific based in Mumbai has its focus on Petroleum and Petrochemical Industries. We are the distributor for NORMALAB FRANCE SAS, manufacturer of Petroleum testing instruments and glassware. Our main objective is to provide Quality and Reliable services to our customers.
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 text-sm-left text-center">
                        <div className="divider-35 hidden-above-lg"></div>
                        <div className="signature">
                        <div className="signature-image">
                            <img src="assets/images/team/Suresh Samla.jpeg" alt="" />
                        </div>
                        <div className="signature-content">
                            <span>Suresh Samala</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="ds s-overlay portfolio-section  s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-center">
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                        <h2 className="special-heading text-center">
                        <span className="text-capitalize">
                            Our Products
                        </span>
                        </h2>
                        <div className="divider-50 hidden-below-lg"></div>
                        <div className="divider-30 hidden-above-lg"></div>
                        <div className="row justify-content-center">
                        <div className="col-md-10 col-xl-8">
                            <div className="filters gallery-filters">
                            <a href="#" data-filter="*" className="active selected">show All</a>
                            <a href="#" data-filter=".corporate">Normalab France-sas</a>
                            <a href="#" data-filter=".business">Spectro, GmbH</a>
                            <a href="#" data-filter=".entertainment">ECH, GmbH</a>
                            <a href="#" data-filter=".innovations">Paragon Scientific, U.K.</a>
                            </div>
                        </div>
                        </div>
                        <div className="row isotope-wrapper portfolio masonry-layout c-mb-30" data-filters=".gallery-filters">
                            {
                                portfolios.map( (portfolio, index) => <PortfolioCard key={index} portfolio={portfolio} />  )
                            }
                        </div>
                        <div className="mt--30"></div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="ls text-sm-left text-center c-gutter-60">
                <div className="container">
                    <h2 className="special-heading text-center client_title">
                    <span className="text-capitalize">Our Clients</span>
                    </h2>
                    <div
                    className="col-12 col-lg-6"
                    style={{
                        maxWidth: 'fit-content',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                    >
                    <div className="divider-30 hidden-above-lg"></div>
                    <div className="row masonry-layout images-grid c-mb-30 c-gutter-30">
                        {partners.map((client, index) => (
                            <ClientCard client={client} key={index} />
                        ))}
                    </div>
                    <div className="mt--30"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home