import React from "react";
import "./sitemap.css";
import mainImg from "../../assest/sitemap/Group 1000004830.png";
const SitemapComponent = () => {
    return (
        <div className="container">
            <div className="sitemap-head text-center">
                <img src={mainImg} width={'100%'} alt="" />
            </div>
            <div className="links-boxes ">
                <div className="sitemaps mx-auto">
                    <div className="link-box">
                        <ul>
                            <li className="active">Homepage</li>
                            <li> <a href="/">Vsple</a></li>
                            <li> <a href="/about-us">About Us</a></li>
                            <li> <a href="/our-mission">Our Mission</a></li>
                            {/* <li> <a href="/notfound">Meet VspleClan</a></li> */}
                            {/* <li> <a href="/notfound">Experts In</a></li> */}
                            <li> <a href="/what's-next">What's Next</a></li>
                        </ul>
                    </div>
                    <div className="link-box">
                        <ul>
                            <li className="active">Services</li>
                            <li> <a href="/mobile-app-development-services">Mobile App Development</a></li>
                            <li><a href="/software-development-services">Software Development</a></li>
                            <li> <a href="/website-development-services">Website development</a></li>
                            <li><a href="/game-development-services">Game Development</a></li>
                            <li> <a href="/ui-ux-designing-services">UI / UX Designing</a></li>
                            {/* <li><a href="/notfound">Devops</a>Devops</li> */}
                            <li><a href="/quality-assurance-services">Quality Assurance</a></li>
                        </ul>
                    </div>
                    <div className="link-box">
                        <ul>
                            <li className="active">Hire To Talents</li>
                            <li><a href="/hire-mobile-application-developers">Mobile App Developers</a></li>
                            <li><a href="/hire-wearable-application-developers">Wearable App Developers</a></li>
                            <li><a href="/hire-software-developers">Software Developers</a></li>
                            <li><a href="/hire-web-developers">Website Developers</a></li>
                            {/* <li><a href="/notfound">E-Commerce Developers</a></li>
                            <li><a href="/notfound">Game Developers</a></li>
                            <li><a href="/notfound">UI / UX designers</a></li>
                            <li><a href="/notfound">Full Stack Developers</a></li>
                            <li><a href="/notfound">Project Manager</a></li>
                            <li><a href="/notfound">Devops</a></li> */}
                            <li><a href="/hire-quality-assurance-analyst">Quality Analyst</a></li>
                            {/* <li><a href="/notfound">Complete Team</a></li> */}
                        </ul>
                    </div>
                    <div className="link-bo">
                        <div className="internal-link-box p-5">
                            <ul>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="internal-link-box">
                            <ul>
                                <li className="active">Join Us</li>
                                <li><a href="/our-mission">Our Mission</a></li>
                                {/* <li> <a href="/notfound">Meet VspleClan</a></li>
                            <li> <a href="/notfound">Experts In</a></li> */}
                                <li> <a href="/what's-next">What's Next</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="link-box">
                        <ul>
                            <li className="active">Side Menu</li>
                            <li><a href="/our-portfolio">Portfolios</a></li>
                            {/* <li><a href="/notfound">Wall of Love</a></li>
                            <li><a href="/notfound">Business Consultant</a></li> */}
                            <li><a href="/faqs">FAQs</a></li>
                            <li><a href="/policies">Policies</a></li>
                            {/* <li><a href="/notfound">Blogs</a></li> */}
                            <li><a href="/site-map">Sitemap</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SitemapComponent;
