import React, { useState } from "react";
import "./gamedev.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import pic from "../../assest/main-icons/services/gameServices/Pic.png";
import pic2 from "../../assest/main-icons/services/gameServices/Group 1000005346.png";
import webdev from "../../assest/developer (1) 1.png";
import { Link } from "react-router-dom";
import FAQ from "../../components/Faq";
// import { carousel3 } from "../../common/images";
import sf from "../../assest/main-icons/Group 1000004981.png";
import group2315 from "../../assest/main-icons/services/gameServices/Game1.png";
import group5369 from "../../assest/web-icons/gamedev/Group 1000005588.png";
import apps from "../../assest/main-icons/services/gameServices/Group 1000002346.png";
import gameQa from "../../assest/main-icons/services/gameServices/Frame.png";
import craft from "../../assest/main-icons/services/gameServices/Frame (1).png";
import rec8419 from "../../assest/web-icons/gamedev/Group 1000002421.png";
import rec2422 from "../../assest/web-icons/gamedev/Group 1000002422.png";
import rec2423 from "../../assest/web-icons/gamedev/Group 1000002423.png";
import rec2424 from "../../assest/web-icons/gamedev/Group 1000002424.png";
import desktop from "../../assest/web-icons/gamedev/Group 1000005370.png";
import desktop2 from "../../assest/web-icons/gamedev/Frame (1).png";
import mobile from "../../assest/game-development/Group 1000005335.png";
import unity from "../../assest/game-development/Group 1000005650.png";
import sketch from "../../assest/game-development/Group 1000002451.png";
import prototyping from "../../assest/game-development/icons/Group 1000002450.png";
import animation from "../../assest/game-development/icons/Frame.png";
import artandgraphic from "../../assest/game-development/icons/Frame (2).png";
import music from "../../assest/game-development/icons/Group.png";
import userInterface from "../../assest/game-development/icons/Frame (3).png";
import unrealEngine from "../../assest/game-development/icons/Group 1000005651.png";
import html from "../../assest/game-development/icons/Group 1000005652.png";
import css from "../../assest/game-development/icons/Group 1000005653.png";
import swift from "../../assest/game-development/icons/Group 1000005654.png";
import native from "../../assest/game-development/icons/Group 1000005655.png";
import photoshop from "../../assest/game-development/icons/Group 1000005326.png";
import illustrator from "../../assest/game-development/icons/Group 1000005325.png";
import sketchxd from "../../assest/game-development/icons/Group 1000005321.png";
import adobexd from "../../assest/game-development/icons/Group 1000005322.png";
import figma from "../../assest/game-development/icons/Group 1000005323.png";
import blender from "../../assest/game-development/icons/Group 1000005656.png";
// import rec2424 from "../../assest/web-icons/gamedev/Group 1000002424.png";
import {
  premiumIcon,
  downarrow,
  uparrow,
  qadev,
  uiuxdev,
  websitedev,
  frame5, leader, technology, keyIcon
} from "../../common/images";

const GamedevComponent = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: (
        <div className="h-feature-list">
          
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Platform Versatility
          
          <img
            src={activeIndex === 0 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `We offer mobile app development for both iOS and Android platforms, ensuring your app reaches a broad audience. Whether you aim to target Apple enthusiasts or the Android user base, we have the expertise to create exceptional apps for both ecosystems.`,
    },
    {
      title: (
        <div className="h-feature-list">
          {/* <img src={hr24} width={30} alt="" />  */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User-Centric Design
          <img
            src={activeIndex === 1 ? uparrow : downarrow}
            width={15}
            height={10}
            alt=""
          />
        </div>
      ),
      content: `Our development process places a strong emphasis on user-centered design. We prioritize creating intuitive, engaging, and visually appealing interfaces that enhance the user experience. By understanding your target audience, we design apps that resonate with your users`,
    },
    // Add more items as needed
  ];
  const [faqs, setFaqs] = useState([
    {
      question: "Why should I choose Vsple Technologies Pvt. Ltd. for game app development?",
      answer:
        "We have expertise in developing a wide range of games, including casual games, puzzle games, action games, adventure games, simulation games, and more. Whether you're targeting mobile, PC, console, or VR platforms, we can bring your game idea to life.",
      open: true,
    },
    {
      question: "What types of games can Vsple Technologies Pvt. Ltd. develop?",
      answer:
        "A professional website is your digital storefront and often the first point of contact for potential customers. It provides credibility, builds trust, and allows you to reach a wider audience. Our website development service ensures that your online presence reflects your brand and helps you stand out in a competitive digital landscape.",
      open: false,
    },
    {
      question: "What technologies do you use for game app development?",
      answer:
        "We leverage cutting-edge technologies and industry-leading game engines like Unity, Unreal Engine, Cocos2d-x, and Phaser to develop visually stunning and feature-rich game apps. Our developers stay updated with the latest tools and techniques to ensure optimal performance and compatibility across platforms.",
      open: false,
    },
    {
      question: "Can I be involved in the game development process?",
      answer:
        "Absolutely! We believe in collaboration and transparency throughout the development process. You'll have the opportunity to provide feedback, review milestones, and stay involved in shaping your game app from concept to launch.",
      open: false,
    },
    {
      question: "How long does it take to develop a game app with Vsple Technologies Pvt. Ltd.?",
      answer:
        "The timeline for game app development depends on various factors such as the complexity of the game, features required, and platform compatibility. We work closely with you to establish realistic timelines and milestones, ensuring timely delivery without compromising on quality.",
      open: false,
    },
    {
      question: "Do you provide post-launch support and maintenance for game apps?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance services to ensure your game app remains optimized, bug-free, and up-to-date with evolving technology trends. Our dedicated support team is available to address any issues and implement updates as needed.",
      open: false,
    },
    {
      question: "How do you ensure the quality of game apps developed by Vsple Technologies Pvt. Ltd.?",
      answer:
        "Quality is our top priority. We conduct rigorous testing and quality assurance processes throughout the development lifecycle to ensure your game app meets the highest standards of performance, functionality, and user experience.",
      open: false,
    },
    {
      question: "Can Vsple Technologies Pvt. Ltd. help with marketing and promotion of game apps?",
      answer:
        "While our primary focus is on game development, we can provide guidance and recommendations for marketing and promotion strategies to help maximize the visibility and reach of your game app in the market.",
      open: false,
    },
  ]);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <div>
      <div className="container">
        <div className="hidden header row align-items-center">
          <div className=" col-md-6 col-lg-6 col-sm-12 d-flex justify-content-start align-items-center">
            <div className="main-text-service">
              <h2 className="">
                Game
                <br />
                Development
              </h2>
              <p>
                Unlock the world of limitless imagination with Vsple
                Technologies Pvt. Ltd.'s Game Development service. From
                captivating mobile adventures to immersive VR experiences and
                cross-platform wonders, we craft interactive worlds that
                redefine gaming. Elevate your entertainment with our innovative
                gaming solutions!
              </p>
              <img className="" src={apps} width={"90%"} alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={group2315} width={"100%"} alt="" />
          </div>
        </div>
        <div className="services-page hidden container mt-2 ">
          <img className="mb-2" src={webdev} width={20} alt="" />
          <br />
          <span className="mb-0">Introduction</span>
          <h5>
            End-to-End Game <br /> Development Solutions
          </h5>
        </div>
        <div className="container my-5">
          <div className="hidden gameparent mx-auto ">
            <div className="gameBox">
             
              <img src={rec8419} width={"100%"} alt="" />

              <h5>Mobile Game Development</h5>
              <p>
                Mobile game development involves creating captivating and
                interactive games for smartphones and tablets, catering to iOS,
                Android, or cross-platform markets. Our team specializes in
                crafting visually stunning, engaging gameplay experiences
                optimized for mobile devices. From puzzle games to multiplayer
                adventures, we leverage cutting-edge technologies to bring
                concepts to life while ensuring seamless performance and
                user-friendly interfaces.
              </p>
            </div>
            <div className="gameBox">
              <img src={rec2422} width={"100%"} alt="" />
              <h5>Desktop Game Development</h5>
              <p>
                Desktop game development focuses on creating immersive gaming
                experiences for computer systems, including Windows, Mac, and
                Linux platforms. We specialize in designing and developing
                high-quality games tailored for desktop users, ranging from
                single-player narratives to expansive multiplayer worlds. Our
                team utilizes advanced graphics, robust storytelling, and
                intuitive controls to deliver compelling gaming experiences on
                desktop platforms.
              </p>
            </div>
          </div>
          <div className="hidden gameparent  mx-auto ">
            <div className="gameBox">
              <img src={rec2424} width={"100%"} alt="" />
              <h5>Virtual Reality (VR) Game Development</h5>
              <p>
                VR game development involves building captivating and immersive
                gaming experiences for virtual reality headsets like Oculus
                Rift, HTC Vive, and others. We specialize in leveraging VR
                technology to create realistic, interactive worlds that
                transport players into extraordinary realms. From intense
                simulations to captivating adventures, our expertise in VR
                development ensures unparalleled immersion and engagement for
                players seeking truly immersive gaming experiences.
              </p>
            </div>
            <div className="gameBox">
              <img src={rec2423} width={"100%"} alt="" />
              <h5>Web-Based Game Development</h5>
              <p>
                Web-based game development focuses on creating entertaining and
                accessible games that users can enjoy directly through web
                browsers. Our team excels in crafting HTML5 games and
                browser-based experiences that leverage the power of web
                technologies. From casual games to complex multiplayer
                experiences, we combine innovative design with seamless web
                integration, ensuring compatibility across devices and
                hassle-free accessibility for players.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container key-feature-div hidden">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6 text-start">
            <img src={group5369} width={"80%"} alt="" />
          </div>
          {/* <div className="col-md-1 col-lg-1"></div> */}
          <div className=" key-text-div col-md-12 col-sm-12 col-lg-6 d-flex align-items-start justify-content-end">
            <div className="key-text">
              <img className="my-3" src={gameQa} width={'22'} alt='' />
              <h5>Game QA</h5>
              <span>Game Testing and Quality Assurance</span>
              <p>
                At Vsple Technologies Pvt. Ltd., we understand the critical role
                that testing and quality assurance play in delivering flawless
                gaming experiences. Our dedicated team specializes in
                comprehensive QA testing, bug fixing, and optimization services,
                ensuring your game meets the highest standards of performance
                and user satisfaction.
              </p>
              <div className="accordion">
                {accordionData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <div
                      className="accordion-title"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setActiveIndex(index === activeIndex ? null : index)
                      }
                    >
                      {item.title}
                    </div>
                    <div
                      className={`accordion-content ${index === activeIndex ? "active" : ""
                        }`}
                      style={{
                        maxHeight: index === activeIndex ? "140px" : "0",
                        display: "flex",
                      }}
                    >
                      {/* <vr
                        className="me-3"
                        style={{
                          height: "150px",
                          border: ".5px solid white",
                        }}
                      ></vr> */}
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center container">
        <div className="hidden p-journey">
          {/* <img src={frame5} width={"5%"} className="mb-1" alt="" />
          <br /> */}
          <span>Our Process</span>
          <h5>
            Game Development <br /> Lifecycle & Sustenance
          </h5>
          <p>
            At Vsple Technologies Pvt. Ltd., we understand the importance of
            sustainable revenue models for your games. We offer comprehensive
            game monetization strategies tailored to maximize your returns while
            ensuring an engaging user experience. Our commitment extends beyond
            the launch of your game. We provide comprehensive post-launch
            support and maintenance services to ensure your game continues to
            thrive in the competitive gaming landscape.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="hidden row">
          <div className="col-md-12 col-lg-6">
            <div className="sec-4-content p-0 w-95 ms-5">
              <h4>Game Monetization Strategies</h4>
              <p>
                At Vsple Technologies Pvt. Ltd., we understand that monetizing
                your game effectively is crucial. Our expertise lies in
                implementing diverse monetization strategies, including:
              </p>
              <h5>In-App Purchases Integration</h5>
              <p>
                Seamlessly integrate in-app purchase options within your games,
                allowing users to buy various items, upgrades, or additional
                content, enhancing their gaming experience.
              </p>
              <h5>Ads Integration</h5>
              <p>
                Implement strategic ad placements in your games, balancing
                revenue generation with a non-intrusive user experience,
                leveraging ads to boost monetization while maintaining player
                engagement.
              </p>
              <h5>Subscription Models</h5>
              <p>
                Design and integrate subscription-based models offering
                exclusive content or benefits, fostering a loyal player base and
                ensuring recurring revenue streams for your games.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="side-section text-end">
              <img src={desktop} width={"90%"} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="side-section text-start">
              <img src={desktop2} width={"90%"} alt="" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="sec-4-content p-0 w-95 ms-5">
              <h4>Post-Launch Support and Maintenance</h4>
              <p>
                At Vsple Technologies Pvt. Ltd., our commitment extends beyond
                the game's launch. We provide comprehensive post-launch support
                and maintenance services, including:
              </p>
              <h5>Updates and Patches</h5>
              <p>
                Continuously improve and enhance your games with regular updates
                and patches, ensuring a bug-free and optimized gaming experience
                for your players.
              </p>
              <h5>Ads Integration</h5>
              <p>
                Implement strategic ad placements in your games, balancing
                revenue generation with a non-intrusive user experience,
                leveraging ads to boost monetization while maintaining player
                engagement.
              </p>
              <h5>Technical Support for Game-related Issues</h5>
              <p>
                Our dedicated team offers timely and responsive technical
                support, addressing and resolving any game-related issues that
                your users may encounter, fostering a positive player experience
                and retention
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-journey d-flex justify-content-center text-center container">
        <div className="p-journey">
          <img src={craft} width={"25"} className="" alt="" />
          <br />
          <span>Crafting</span>
          <h5>
            Our Game Design <br /> Services
          </h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
      </div>
      <div className="container hidden text-center">
        <div className="row" style={{ transform: "scale(.8)" }}>
          <div className="col-md-12 col-lg-4 col-12">
            <div className="d-flex left">
              <div  >
                <img src={sketch} alt="sketch icon" width={'10%'} />
                <h5>Sketch Design</h5>
                <p>Transforming ideas into tangible concepts is where the magic begins. Our team sketches out comprehensive game designs, mapping the visual and structural elements to bring your vision to life.</p>
              </div>
              <div>
              <img src={userInterface} alt="sketch icon" width={'10%'} />
                <h5>User Interface</h5>
                <p>The user interface is the gateway to an immersive gaming experience. We craft intuitive and visually appealing interfaces that seamlessly integrate with gameplay, enhancing user engagement and accessibility.</p>
              </div>
              <div>
              <img src={prototyping} alt="sketch icon" width={'10%'} />
                <h5>Prototyping</h5>
                <p>Prototyping is the cornerstone of turning concepts into playable realities. We create functional prototypes that give life to your game ideas, allowing for early-stage testing and refinement. </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-12">
            <div className="-img" style={{ height: '800px' }}>
              <img src={mobile} alt="" width={'90%'} />
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-12">
            <div className="d-flex right">
              <div>
              <img src={artandgraphic} alt="sketch icon" width={'10%'} />
                <h5>Art and Graphics</h5>
                <p>Visual appeal is key to captivating players. Our artistic team meticulously crafts captivating visuals and stunning graphics that breathe life into your game.</p>
              </div>
              <div className="mt-5 mb-3">
              <img src={animation} alt="sketch icon" width={'10%'} />
                <h5>Animation</h5>
                <p>Animation adds depth and personality to the gaming world. Our animation specialists infuse movement, emotion, and dynamism into characters, environments, and special effects. From fluid character motions to captivating cinematic sequences</p>
              </div>
              <div className="mt-4">
              <img src={music} alt="sketch icon" width={'8%'} />
                <h5>Sound and Music</h5>
                <p>Immersive soundscapes and compelling music compositions enrich the gaming experience. We create bespoke audio elements that complement the gameplay, setting the mood, and enhancing the overall ambiance. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="miniportfolio container mt-5">
        <h5>Bytes to Brilliance: Software Development Portfolio</h5>
        <div className="parent">
          <div className="child1">
            <img src={pic} width={"100%"} alt="" />
            <div className="pt-4 px-3">
              <span>Crosso - TicTacToe</span>
              <p className="my-2">
                TicTacToe is played by two players on a grid of three-by-three, who alternately place the marks X (FIRE) and O (WATER) in one of the nine spaces in the grid. As there are no universal rules to who plays first. Players shortly discover the best play from both parties leading to a draw.
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/crosso-app-development">See More &nbsp;</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 37 37"
                    fill="none"
                  >
                    <circle cx="18.5" cy="18.5" r="18" stroke="#FAE29E" />
                    <path
                      d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                      fill="#FAE29E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="child1">
            <img src={pic2} width={"100%"} alt="" />
            <div className="pt-4 px-3">
              <span>Truda - Truth or Dare</span>
              <p className="my-2">
                Truth or Dare, an engaging iOS application designed to elevate gatherings with friends, family, and couples. Renowned as one of the most entertaining games, Truda injects lively fun into any social occasion. This classic party game infuses excitement, laughter, and memorable moments into every interaction, making it an indispensable addition to any celebration or get-together. With a range of intriguing truth and daring challenges, Truda guarantees hours of entertainment and bonding among players of all ages. Elevate your gatherings with Truda - the ultimate party companion!
              </p>
              <div className="getin-button text-center">
                <div className="see-button">
                  <a href="/truda-app-development">See More &nbsp;</a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 37 37"
                    fill="none"
                  >
                    <circle cx="18.5" cy="18.5" r="18" stroke="#FAE29E" />
                    <path
                      d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                      fill="#FAE29E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-page hidden container mt-5">
        <span className="mb-0">Tech Stack Development</span>
        <h5>
          Tech Stack that Empowers our Game <br /> Development
        </h5>
      </div>
      <div className="stack-box container">
        <div className=" stacks">
          <img src={unity} width={'100%'} alt="" />
          <img src={unrealEngine} width={'100%'} alt="" />
          <img src={html} width={'100%'} alt="" />
          <img src={css} width={'100%'} alt="" />
          <img src={swift} width={'100%'} alt="" />
          <img src={native} width={'100%'} alt="" />
        </div>
      </div>
      <div className="services-page hidden container mt-5">
        <span className="mb-0">Tool Stack Design</span>
        <h5>
          Graphic Tools
        </h5>
      </div>
      <div className="stack-box container">
        <div className="stacks">
          <img src={photoshop} width={'100%'} alt="" />
          <img src={illustrator} width={'100%'} alt="" />
          <img src={sketchxd} width={'100%'} alt="" />
          <img src={adobexd} width={'100%'} alt="" />
          <img src={figma} width={'100%'} alt="" />
          <img src={blender} width={'100%'} alt="" />
        </div>
      </div>
      <div className="get-in-touch mt-5 hidden">
        <div className="row container my-5 ">
          <div className="col-md-12 col-lg-8">
            <p style={{ textAlign: "left" }}>
            Ready to bring your game idea to life? 
              <br />
              <span className="inner-join">
              Connect with Vsple Technologies Pvt. Ltd. and level up your gaming project today!
              </span>
            </p>
          </div>
          <div className="col-md-0 col-lg-4">
            <div className="getin-button-in  -model">
              <div className="see-button">
                <a href="/contact-us">Get In Touch &nbsp;</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 37 37"
                  fill="none"
                >
                  <circle cx="18.5" cy="18.5" r="18" stroke="#FAE29E" />
                  <path
                    d="M19.9933 18.522C19.5878 18.8827 19.1938 19.2394 18.7997 19.5961C17.9581 20.3455 17.1203 21.099 16.2825 21.8524C16.1065 22.0088 16.007 22.1971 16.0338 22.4416C16.0606 22.6901 16.1868 22.8704 16.4125 22.9666C16.6421 23.0628 16.8563 23.0227 17.0438 22.8584C17.3537 22.5859 17.6635 22.3053 17.9696 22.0288C19.0714 21.0429 20.1693 20.053 21.2711 19.0671C21.4739 18.8827 21.6039 18.6663 21.5274 18.3857C21.4892 18.2495 21.4088 18.1052 21.3094 18.013C19.8786 16.7225 18.4478 15.4441 17.017 14.1616C16.7492 13.9211 16.3628 13.9532 16.1448 14.2297C15.919 14.5143 15.9611 14.895 16.2442 15.1515C17.4569 16.2416 18.6697 17.3277 19.8824 18.4178C19.9168 18.4499 19.9513 18.4819 19.9933 18.522Z"
                    fill="#FAE29E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-page my-5 container hidden web-model">
        <img src={premiumIcon} width={25} alt="" />
        <br />
        <span>Services</span>
        <h5 className="mb-0 ">Other Services</h5>
      </div>
      <div className="slider-div hidden web-model">
        <div className="sliderS container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div> 
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={75} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Mobile App Development
                </p>
                <p className="slider-title-p">
                  Assimilating Mobile App developed by our experts in your
                  business processes will reflect a pace at...
                </p>
                <a href="/mobile-app-development-services">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-div hidden mobile-model">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slideN ms-4 my-4">
              <div className="service-box-slider p-4">

                <p className="slider-title text-light">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
              
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slideN ms-4 mt-4">
              <div className="service-box-slider p-4">
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="sliderS container-fluid">
          <div className="slide-trackN">
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={qadev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Quality Assurance
                </p>
                <p className="slider-title-p">
                  At Vsple Technologies, quality is not a compromise it's a promise. Our dedicated QA experts meticulously...
                </p>
                <a href="/quality-assurance-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={sf} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Software Development
                </p>
                <p className="slider-title-p">
                  Assimilating Softwares developed by our experts in your
                  business processes will reflect a pace at each level.
                </p>
                <a href="/software-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={websitedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Website Development
                </p>
                <p className="slider-title-p">
                  Discover the art of impactful web presence with Vsple Technologies. Our expert web developers blend creativity...
                </p>
                <a href="/website-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={gamedev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  Game Development
                </p>
                <p className="slider-title-p">
                  Embark on a journey of immersive gaming experiences with Vsple Technologies. Our passionate team of developers and...
                </p>
                <a href="/game-development-services">Read More</a>
              </div>
            </div>
            <div className="slideN">
              <div className="service-box-slider p-4">
                <img src={uiuxdev} width={"22%"} alt="" />
                <p className="slider-title text-light p-0 m-0">
                  UI/UX Development
                </p>
                <p className="slider-title-p">
                  User experience is at the heart of everything we do. Vsple Technologies specializes in crafting intuitive, visually...
                </p>
                <a href="/ui-ux-designing-services">Read More</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default GamedevComponent;
