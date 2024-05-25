import React from "react";
import "./footer.css";
import footerlogo from "../assest/footerlogo.png";
import social from "../assest/icons/Group 408.png";
import fb from "../assest/main-icons/Group 371.png";
import link from "../assest/main-icons/Group 407.png";
import twitter from "../assest/social-icon/twitter.png";
import youtube from "../assest/main-icons/Group 370.png";
import insta from "../assest/main-icons/Group 368.png";
import DayNightToggle from "./DayNightToggle";

const FooterComponent = () => {
  return (
    <>
      <div className="footer mt-5 mx-2 footerWeb">
        <div className="row">
          <div className="col-2 text-end" >
            <img src={footerlogo} width={"80%"} alt="Footer Logo" />
          </div>
          <div className="col-10 text-left mt-1">
            <hr />
            <div className="copyright-text row mx-0 p-0">
              <div className="col-6 text-center">
                <p style={{ fontSize: "1.5rem !important", textAlign:'end' }}>
                  © 2024 Vsple. All rights reserved
                </p>
              </div>
              <div className="icons col-6 text-end" style={{marginTop:'-10px'}}>
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100067321699627"
                >
                  <img src={fb} width={"6%"} alt="" />
                </a>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/vsple-technologies"
                >
                  <img src={link} width={"6%"} alt="" />
                </a>
                <a target="blank" href="https://twitter.com/VspleTech">
                  <img src={twitter} width={"6%"} alt="" />
                </a>
                <a
                  target="blank"
                  href="https://www.youtube.com/@vspletechnologiespvt.ltd.3913/featured"
                >
                  <img src={youtube} width={"6%"} alt="" />
                </a>
                <a target="blank" href="https://www.instagram.com/vsple/">
                  <img src={insta} width={"6%"} alt="" />
                </a>
                {/* <img src={social} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
      <div className="col"></div>
      <div className="col-auto">
        <DayNightToggle />
      </div>
    </div> */}
      </div>
      <div className="footer mt-5 mx-5 footerMobile text-center">
        <hr />
        <div className="logo d-flex justify-content-center">
          <img src={footerlogo} width={"50%"} alt="Footer Logo" />
        </div>
        <div className="social-icon d-flex justify-content-center  mt-4">
          <a
            target="blank"
            href="https://www.facebook.com/profile.php?id=100067321699627"
          >
            <img src={fb} width={"60%"} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/company/30901253/admin/feed/posts/"
          >
            <img src={link} width={"60%"} alt="" />
          </a>
          <a target="blank" href="https://twitter.com/VspleTech">
            <img src={twitter} width={"60%"} alt="" />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/@vspletechnologiespvt.ltd.3913/featured"
          >
            <img src={youtube} width={"60%"} alt="" />
          </a>
          <a target="blank" href="https://www.instagram.com/vsple/">
            <img src={insta} width={"60%"} alt="" />
          </a>
          {/* <img src={social} alt="" /> */}
        </div>
        <div className="copyright-text text-center mt-4">
          <p>© 2023 Vsple. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
