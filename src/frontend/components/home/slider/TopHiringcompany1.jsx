/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// Import Images
import {
  Company_logo_01,
  Company_logo_02,
  Company_logo_03,
  Company_logo_04,
  Company_logo_05,
  Company_logo_06,
  Review_01,
  Review_02,
  Review_03,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopHiringCompany1 = (props) => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const options = {
    loop: true,
    margin: 10,
    items: 1,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 3,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };

  return (
    <>
      {/* Review */}
      <section className="section top-company-two border-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header section-header-two text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Trusted By The <span>World’s Best</span>
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </div>

            <OwlCarousel className="owl-theme" {...options}>
              <div className="company-logos ">
                <img src={Company_logo_01} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_02} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_03} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_04} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_05} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_06} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_03} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_02} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* / Review */}
    </>
  );
};
export default TopHiringCompany1;
