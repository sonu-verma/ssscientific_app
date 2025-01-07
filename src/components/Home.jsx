import { useEffect } from "react";
const Home = () => {
    
    const partners = [
        '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'
    ];

    const loadSlider = () =>  {
    
        if (window.$().flexslider) {
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

        if (window.$().owlCarousel) {
            window.$('.owl-carousel').each(function () {
                var $carousel = window.$(this);
                $carousel.find('> *').each(function (i) {
                    window.$(this).attr('data-index', i);
                });
                var data = $carousel.data();

                var loop = data.loop ? data.loop : false,
                    margin = (data.margin || data.margin === 0) ? data.margin : 30,
                    nav = data.nav ? data.nav : false,
                    navPrev = data.navPrev ? data.navPrev : '<i class="fas fa-chevron-left"></i>',
                    navNext = data.navNext ? data.navNext : '<i class="fas fa-chevron-right"></i>',
                    dots = data.dots ? data.dots : false,
                    themeClass = data.themeclass ? data.themeclass : 'owl-theme',
                    center = data.center ? data.center : false,
                    items = data.items ? data.items : 4,
                    autoplay = data.autoplay ? data.autoplay : false,
                    responsiveXs = data.responsiveXs ? data.responsiveXs : 1,
                    responsiveSm = data.responsiveSm ? data.responsiveSm : 2,
                    responsiveMd = data.responsiveMd ? data.responsiveMd : 3,
                    responsiveLg = data.responsiveLg ? data.responsiveLg : 4,
                    draggable = (data.draggable === false) ? data.draggable : true,
                    syncedClass = (data.syncedClass) ? data.syncedClass : false,
                    filters = data.filters ? data.filters : false;

                if (filters) {
                    $carousel.after($carousel.clone().addClass('owl-carousel-filter-cloned'));
                    window.$(filters).on('click', 'a', function (e) {
                        //processing filter link
                        e.preventDefault();
                        if (window.$(this).hasClass('selected')) {
                            return;
                        }
                        var filterValue = window.$(this).attr('data-filter');
                        window.$(this).siblings().removeClass('selected active');
                        window.$(this).addClass('selected active');

                        //removing old items
                        for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                            $carousel.trigger('remove.owl.carousel', [1]);
                        }


                        //adding new items
                        var $filteredItems = window.$($carousel.next().find(' > ' + filterValue).clone());
                        $filteredItems.each(function () {
                            $carousel.trigger('add.owl.carousel', window.$(this));
                            window.$(this).addClass('scaleAppear');
                        });

                        $carousel.trigger('refresh.owl.carousel');

                        //reinit prettyPhoto in filtered OWL carousel
                        if (window.$().prettyPhoto) {
                            $carousel.find("a[data-gal^='prettyPhoto']").prettyPhoto({
                                hook: 'data-gal',
                                theme: 'facebook' /* light_rounded / dark_rounded / light_square / dark_square / facebook / pp_default*/
                            });
                        }
                    });

                } //filters

                $carousel.owlCarousel({
                    loop: loop,
                    margin: margin,
                    nav: nav,
                    autoplay: autoplay,
                    dots: dots,
                    themeClass: themeClass,
                    center: center,
                    navText: [navPrev, navNext],
                    mouseDrag: draggable,
                    touchDrag: draggable,
                    items: items,
                    responsive: {
                        0: {
                            items: responsiveXs
                        },
                        767: {
                            items: responsiveSm
                        },
                        992: {
                            items: responsiveMd
                        },
                        1200: {
                            items: responsiveLg
                        }
                    },
                })
                    .addClass(themeClass);
                if (center) {
                    $carousel.addClass('owl-center');
                }

                $window.on('resize', function () {
                    $carousel.trigger('refresh.owl.carousel');
                });

                //topline two synced carousels
                if ($carousel.hasClass('owl-news-slider-items') && syncedClass) {
                    $carousel.on('changed.owl.carousel', function (e) {
                        var indexTo = loop ? e.item.index + 1 : e.item.index;
                        window.$(syncedClass).trigger('to.owl.carousel', [indexTo]);
                    })
                }


            });


        } //eof owl-carousel

        // window.$('.owl-carousel.sync1').each(function () {
        //     var $owl1 = window.$(this);
        //     var $owl2 = window.$('.owl-carousel.sync2');

        //     $owl1.on('click', '.owl-item', function() {
        //       var carousel = $owl2.data('owl.carousel');
        //       carousel.to(carousel.relative(window.$(this).index()-1));
        //     });

        //     $owl1.on('change.owl.carousel', function (event) {
        //         if (event.namespace && event.property.name === 'position') {
        //             var target = event.relatedTarget.relative(event.property.value, true);
        //             $owl2.owlCarousel('to', target, 300, true);
        //         }
        //     });

        // });

    }

    useEffect( () => {
        loadSlider()
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

                        <div className="col-xl-4 col-sm-6 business news">

                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/01.jpg" alt="img" />

                            </div>
                            <div className="item-content">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/01.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>
                                <h6>
                                <a href="gallery-single.html">Lorem ipsum dolor sit</a>
                                </h6>

                            </div>
                            </div>

                        </div>

                        <div className="col-xl-4 col-sm-6 innovations corporate">
                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/02.jpg" alt="img" />
                            </div>
                            <div className="item-content ">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/02.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>
                                <h6>
                                <a href="gallery-single.html">Amet consetetur sadipscing</a>
                                </h6>
                            </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 entertainment news innovations">
                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/03.jpg" alt="img" />

                            </div>
                            <div className="item-content ">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/03.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>

                                <h6>
                                <a href="gallery-single.html">Elitr sed diam nonumy</a>
                                </h6>
                            </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 business entertainment">
                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/04.jpg" alt="img" />

                            </div>
                            <div className="item-content ">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/04.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>
                                <h6>
                                <a href="gallery-single.html">Tempor invidunt ut</a>
                                </h6>
                            </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 innovations corporate">
                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/05.jpg" alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/05.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>

                                <h6>
                                <a href="gallery-single.html">Labore et dolore magna</a>
                                </h6>
                            </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 entertainment news corporate">
                            <div className="vertical-item item-gallery content-absolute text-center ds">
                            <div className="item-media">
                                <img src="assets/images/gallery/full/06.jpg" alt="img" />
                            </div>
                            <div className="item-content">
                                <div className="links-wrap">
                                <a className="link-zoom photoswipe-link" title="" href="images/gallery/full/06.jpg"></a>
                                <a className="link-anchor" title="" href="gallery-single.html"></a>
                                </div>

                                <h6>
                                <a href="gallery-single.html">Aliquyam erat sed diam</a>
                                </h6>
                            </div>
                            </div>
                        </div>


                        </div>
                        <div className="mt--30"></div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="ls s-py-xl-160 s-py-lg-130 s-py-md-90 s-py-60 text-sm-left text-center c-gutter-60">
                <div className="container">
                    <h2 className="special-heading text-center">
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
                        {partners.map((image, index) => (
                        <div className="col-lg-4 col-sm-6" key={index}>
                            <a href="#!">
                            <div className="bordered text-center p-xl-50 p-20 rounded">
                                <img
                                src={`assets/images/partners/${image}`}
                                alt={`Partner ${index + 1}`}
                                />
                            </div>
                            </a>
                        </div>
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