import React from 'react';

const index = () => {
    return (
        <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div> 
           <div className="slide-one-item home-slider owl-carousel">
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/hero_1.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade">
                                <span className="caption mb-3"><img src="https://ihsan.templines.org/wp-content/uploads/2020/04/alhumdx2.png" alt="Not Found" /></span>
                                <h1 className="mb-4"> “Keep your tongue wet with the remembrance of Allah.”</h1>
                                <p><a href="#" className="text-white py-3 px-4"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url(images/hero_2.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade">
                                <span className="caption mb-3"><img src="https://ihsan.templines.org/wp-content/uploads/2020/04/alhumdx2.png" alt="Not Found" /></span>
                                <h1 className="mb-4">O'Allah we belive that Only you can save us</h1>
                                <p><a href="#" className="text-white py-3 px-4">Only you can save us</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center mb-5 section-heading">
                            <h2 className="mb-5">Today’s Prayer Times</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="text-center p-4 item">
                                <h2 className="h5 text-uppercase">Fajr</h2>
                                <p>05:19 am</p>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
            <footer className="site-footer" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
                <div className="container">
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright ©  All Rights Reserved | This template is made with <i className="icon-heart text-primary" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default index;