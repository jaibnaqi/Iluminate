import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Index from './components';

const App = () => {
  // const [lat, setLat] = useState();
  // const [long, setLong] = useState();
  const [timing, setTiming] = useState(null);
  const [keys, setKeys] = useState([]);

  const onPageLoad = async (lat, long) => {
    try {
      var d = new Date();
      const data = await axios.get(`https://prayersapi.herokuapp.com/prayers?lat=${lat}&long=${long}`);
      setTiming(data.data.data[d.getDate() - 1].timings);
      setKeys(Object.keys(data.data.data[d.getDate() - 1].timings));
      console.log(data.data.data[d.getDate() - 1].timings);
      console.log("JSON: ", JSON.stringify(data.data.data[d.getDate() - 1].timings));
    } catch (error) {
      toast.error("Something Went Wrong.");
    }
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const showPosition = (position) => {
    // setLat(position.coords.latitude);
    // setLong(position.coords.longitude);
    onPageLoad(position.coords.latitude, position.coords.longitude);
  }
  const showItems = () => {
    for (const time in timing) {
      return <li><a href="#/" title>{time}</a>{timing[time]}</li>
    }
  }
  return (
    // <div className="container">
    //   <h1>Prayer Times</h1>
    //   <div className="row">
    //     <div className="col-sm-4">
    //       <div className="single category">
    //         <h3 className="side-title">Time</h3>
    //         <ul className="list-unstyled">
    //           {keys && keys.map(item => (
    //             <li><a href="#/" title>{item}</a>{timing[item]}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
                <p><a href="#" className="text-white py-3 px-4"></a></p>
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
            {keys && keys.map(item => (
              <div className="col-md-2">
                <div className="text-center p-4 item">
                  <h2 className="h5 text-uppercase">{item}</h2>
                  <p>{timing[item]}</p>
                </div>
              </div>
              // <li><a href="#/" title>{item}</a>{timing[item]}</li>
            ))}
          </div>
        </div>
      </div>
      <footer className="site-footer" style={{ backgroundImage: 'url("images/hero_1.jpg")' }}>
        <div className="container">
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright ©  All Rights Reserved | 2020
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
