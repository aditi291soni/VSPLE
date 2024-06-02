import "./home.css";
import React, { useState, useEffect, useRef } from "react";
import "./home1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from "react-bootstrap/Carousel";
// import serviceImg from "../assest/icons/vsple_website_design_4/Group 830.png";
import premiumIcon from "../assest/icons/premium.png";
import premiumIcon2 from "../assest/main-icons/office 1 (1).png";
import support from "../assest/icons/support 1.png";
import success from "../assest/icons/success 1.png";
import rating from "../assest/icons/rating 1.png";
import main2 from "../assest/Group 1260.png";
import laptop from "../assest/icons/Group 350.png";
import tech from "../assest/icons/technology 1.png";
import inst from "../assest/icons/Group 630.png";
import first from "../assest/icons/vsple_website_design_4/Group 833.png";
import second from "../assest/icons/vsple_website_design_4/Group 834.png";
import third from "../assest/icons/vsple_website_design_4/Group 832.png";
import fourth from "../assest/main-icons/vsple_industries_img/Group 1485.png";
import fifth from "../assest/main-icons/vsple_industries_img/Group 1487.png";
import sixth from "../assest/main-icons/vsple_industries_img/Group 1488.png";
import seventh from "../assest/main-icons/vsple_industries_img/Group 1489.png";
import eight from "../assest/main-icons/vsple_industries_img/Group 1490.png";
import nine from "../assest/main-icons/vsple_industries_img/Group 1491.png";
import ten from "../assest/main-icons/vsple_industries_img/Group 1492.png";
import eleven from "../assest/main-icons/vsple_industries_img/Group 1493.png";
import twelve from "../assest/main-icons/vsple_industries_img/Group 1494.png";
import thirdteen from "../assest/main-icons/vsple_industries_img/Group 1495.png";
import fourteen from "../assest/main-icons/vsple_industries_img/Group 1496.png";
import fifteen from "../assest/main-icons/vsple_industries_img/Group 1497.png";
import sixteen from "../assest/main-icons/vsple_industries_img/Group 1498.png";
import carousel2 from "../assest/Group 1087 (1).png";
import carousel3 from "../assest/Group 549.png";
import smile from "../assest/icons/vsple_website_design_5/happy 1.png";
import review from "../assest/icons/vsple_website_design_5/review 2.png";
import smile2 from "../assest/icons/vsple_website_design_5/happy 2.png";
import like from "../assest/icons/vsple_website_design_5/like (1) 1.png";
import like1 from "../assest/icons/vsple_website_design_5/like 1.png";
import like2 from "../assest/icons/vsple_website_design_5/like 2.png";
import health from "../assest/main-icons/Group 1000004855.png";
import left from "../assest/left.png";
import right from "../assest/right.png";
import secondCont from "../assest/main-icons/Group 1000001890 (1).png";
import appleicon from "../assest/main-icons/Group 342.png";
import androidicon from "../assest/main-icons/Group 340.png";
import youtubeicon from "../assest/main-icons/Group 1000004856.png";
import linkedinicon from "../assest/main-icons/Group 1000004855 (1).png";
import twittericon from "../assest/main-icons/Group 1000005158.png";
import appleicons from "../assest/main-icons/Group 1000005157.png";
import realState from "../assest/main-icons/Group 1000005171.png";
import ooredo from "../assest/main-icons/Ooredoo logo white@3x  1 (2).png";
import calvaryLogo from "../assest/main-icons/Group 1000004560.png";
import tradeTips from "../assest/main-icons/Group 1000004561.png";
import unbound from "../assest/main-icons/Group 1000004579 (1).png";
import trademarkC from "../assest/web-icons/global-icon/Screenshot_at_Feb_01_15-49-19-removebg-preview 1 (1).png";
import salestrip from "../assest/web-icons/global-icon/Group 1000005596 (1).png";
import breckW from "../assest/web-icons/global-icon/Group 1000005597 (1).png";
import hobbyst from "../assest/web-icons/global-icon/Group 1000005603.png";
import qrScape from "../assest/web-icons/global-icon/Group 1000005604.png";
import Accomplished from "../assest/web-icons/global-icon/project (1) 2.png";
import chatie from "../assest/main-icons/Group 1000004566.png";
import tnumber from "../assest/main-icons/white@3x 1.png";
import jupieter from "../assest/main-icons/LOGO PNG@3x 1.png";
import industriesicon from "../assest/main-icons/office 1.png";
import swifticons from "../assest/main-icons/Group 1000005189.png";
import angularicons from "../assest/main-icons/Group 1000005186.png";
import objcicons from "../assest/main-icons/Group 1000005183.png";
import phpicons from "../assest/main-icons/Group 1000005193.png";
import group5190 from "../assest/main-icons/Group 1000005190.png";
import group5192 from "../assest/main-icons/Group 1000005192.png";
import group5204 from "../assest/main-icons/Group 1000005204.png";
import group5188 from "../assest/main-icons/Group 1000005188.png";
import avatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 1.png";
import selectedAvatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 2.png";
// import health from "../../assest/main-icons/Group 1000004855.png";
// import realState from "../../assest/main-icons/Group 1000005570 (1).png";
import eLearning from "../assest/main-icons/Group 1000005571.png";
import sports from "../assest/main-icons/Group 1000005572.png";
import bank from "../assest/main-icons/Group 1000004874.png";
import dating from "../assest/main-icons/Group 1000005573.png";
import logistic from "../assest/main-icons/Group 1000005574.png";
import fintech from "../assest/main-icons/Group 1000005575.png";
// import "./style.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HoComponent = () => {
  const [animate, setAnimate] = useState(false);
  const [expandedImg, setExpandedImg] = useState(first);
  // useEffect(() => {
  //   const canvas = document.querySelector("#homie>canvas");
  //   const context = canvas.getContext("2d");

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   window.addEventListener("resize", function () {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //     render();
  //   });

  //   function files(index) {
  //     var data = `https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/00.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/01.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/02.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/03.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/04.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/05.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/06.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/07.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/08.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/09.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/10.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/11.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/12.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/13.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/14.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/15.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/16.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/17.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/18.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/19.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/20.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/21.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/22.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/23.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/24.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/25.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/26.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/27.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/28.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/29.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/30.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/31.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/32.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/33.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/34.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/35.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/36.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/37.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/38.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/39.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/40.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/41.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/42.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/43.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/44.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/45.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/46.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/47.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/48.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/49.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/50.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/51.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/52.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/53.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/54.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/55.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/56.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/57.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/58.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/59.png
  //     https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/60.png`;
  //     return data.split("\n")[index].trim(); // Trim to remove any leading/trailing spaces
  //   }

  //   const frameCount = 61;

  //   const images = [];
  //   const imageSeq = {
  //     frame: 0
  //   };

  //   for (let i = 0; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = files(i);
  //     images.push(img);
  //   }

  //   // Handle image loading
  //   let loadedImages = 0;
  //   const onLoadHandler = () => {
  //     loadedImages++;
  //     if (loadedImages === frameCount) {
  //       // All images are loaded, render the first image
  //       render();
  //     }
  //   };

  //   images.forEach((img) => {
  //     img.onload = onLoadHandler;
  //     img.onerror = onLoadHandler; // Handle loading errors as well
  //   });

  //   gsap.to(imageSeq, {
  //     frame: frameCount - 1,
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //       scrub: 1.8,
  //       pin: true,
  //       trigger: "#homie",
  //     },
  //     onUpdate: render
  //   });

  //   function render() {
  //     scaleImage(images[imageSeq.frame], context);
  //   }

  //   function scaleImage(img, ctx) {
  //     var canvas = ctx.canvas;
  //     var hRatio = canvas.width / img.width;
  //     var vRatio = canvas.height / img.height;
  //     var ratio = Math.max(hRatio, vRatio);
  //     var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //     var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.drawImage(
  //       img,
  //       0,
  //       0,
  //       img.width,
  //       img.height,
  //       centerShift_x,
  //       centerShift_y,
  //       img.width * ratio,
  //       img.height * ratio
  //     );
  //   }

  //   gsap.to("#homie canvas", {
  //     // scale: 0.8,
  //     scrollTrigger: {
  //       scrub: 1.2,
  //       trigger: "#homie",
  //       start: "bottom 100%",
  //       // markers:true,
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: "#homie",
  //     pin: true,
  //     start: "bottom 100%",
  //   });
  // }, []);
  const [selectedClient, setSelectedClient] = useState(1);

  // const canvasRef = useRef(null);
  // const frameCount = 148;
  // const contextRef = useRef(null);

  // const currentFrame = (index) =>
  //   `https://mega.io/wp-content/themes/megapages/assets/animated-hero/bgimg-xl/${(
  //     index + 1
  //   )
  //     .toString()
  //     .padStart(2, "0")}.png`;

  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //   }
  // };

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   contextRef.current = canvas.getContext("2d");
  //   const img = new Image();
  //   img.src = currentFrame(1);

  //   canvas.width = 1158;
  //   canvas.height = 770;

  //   img.onload = function () {
  //     contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  //     contextRef.current.drawImage(img, 0, 0);
  //   };
  //   const updateImage = (index) => {
  //     img.src = currentFrame(index);
  //     contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  //     contextRef.current.drawImage(img, 0, 0);
  //   };
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const maxScrollTop =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const frameIndex = Math.min(
  //       frameCount - 1,
  //       Math.ceil(scrollFraction * frameCount)
  //     );

  //     requestAnimationFrame(() => updateImage(frameIndex + 1));
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   preloadImages();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const carouselImages = [carousel3 , carousel2, third ,first , serviceImg , ]
  // const carouselImages = [
  //   second,
  //   serviceImg,
  //   first,
  //   third,
  //   carousel2,
  //   carousel3,
  // ];
  // const [serviceImg2, setServiceImg2] = useState(carouselImages[0]);
  // const [index, setIndex] = useState(0);

  // const fadeInImage = () => {
  //   const internalImg = document.querySelector(".internal-img img");
  //   internalImg.classList.add("fade-in");
  //   setTimeout(() => {
  //     internalImg.classList.remove("fade-in");
  //   }, 1000);
  // };

  // const changeImage = () => {
  //   setIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  //   fadeInImage();
  // };

  // useEffect(() => {
  //   const interval = setInterval(changeImage, 8500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   setServiceImg2(carouselImages[index]);
  // }, [index]);
  const clients = [
    {
      id: 1,
      name: "Max V.",
      description:
        "Vivek is efficient and available, highly recommend him! Vivek did a great job and completed the work really quickly & efficiently! Great communication, great work.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 2,
      name: "Aniket M.",
      description:
        "I have been working with Vsple for 5 years and they never let me down in terms of delivery and quality of the project. Great understanding of requirements and strong technical knowledge is the key to their success.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 3,
      name: "Balraj S.",
      description:
        "Great Job! Vsple delivered the work as always with quality and timely. Highly recommend and look forward to working on more projects in the future.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 4,
      name: "Dipesh G.",
      description:
        "Vivek has a strong understanding of current development best practices. He is particularly skilled with iOS Development and has been a valuable addition to our team! I would gladly recommend Vivek and team for all development projects!",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 5,
      name: "Anurag A.",
      description:
        "Vsple has great experience with iOS and built several applications that are loved by all users. Their technical expertise is great. They also has very positive attitude and gets the work done really well. I recommend Vsple highly and would love to be associated always.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 6,
      name: "Enrico B.",
      description:
        "It was a pleasure to work with Vsple, and no doubts: I will make my next project with them. They are answered in short time and give good proposal to  solve problems.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 7,
      name: "Thomas M.",
      description:
        "Everything was perfect! Highly recommended!. The UX looks amazing and my client loves it. Communication was easy and efficient - all the changes were done quickly and to our full satisfaction.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },
    {
      id: 8,
      name: "Max V.",
      description:
        "Vivek is efficient and available, highly recommend him! Vivek did a great job and completed the work really quickly & efficiently! Great communication, great work.",
      avatar: avatar,
      selectedAvatar: selectedAvatar,
    },

    // Add more clients here if needed
  ];
  // useEffect(() => {
  //   setserviceImg(carousel3);
  //   const fadeInImage = () => {
  //     const internalImg = document.querySelector(".internal-img img");
  //     internalImg.classList.add("fade-in");
  //     setTimeout(() => {
  //       internalImg.classList.remove("fade-in");
  //     }, 3000);
  //   };
  //   fadeInImage();
  // }, []);
  const handleAvatarClick = (clientId) => {
    const internalImg = document.querySelector(".testimonial img");
    internalImg.classList.add("active"); 
    setSelectedClient(clientId);
    setAnimate(true);
  };
  // const handleImageClick = (imageUrl) => {
  //   setExpandedImg(imageUrl);
  // };
  useEffect(() => {
    if (animate) {
      const animationTimer = setTimeout(() => {
        setAnimate(false);
      }, 1000);

      return () => clearTimeout(animationTimer);
    }
  }, [animate]);
  // const handleServiceImageClick = (Url) => {
  //   setIndex(Url);
  //   const internalImg = document.querySelector(".internal-img img");
  //   internalImg.classList.add("fade-in");
  //   setTimeout(() => {
  //     internalImg.classList.remove("fade-in");
  //   }, 1000);
  // };
  const handleImageClick = (img) => {
    setExpandedImg(img);
  };

  const handleSliderChange = (e) => {
    const index = parseInt(e.target.value);
    const rangeValueElem = document.querySelector(".input-range");
    rangeValueElem.style.top = 16 * index + "px";
    switch (index) {
      case 0:
        setExpandedImg(first);
        break;
      case 1:
        setExpandedImg(second);
        break;
      case 2:
        setExpandedImg(third);
        break;
      case 3:
        setExpandedImg(fourth);
        break;
      case 4:
        setExpandedImg(fifth);
        break;
      case 5:
        setExpandedImg(sixth);
        break;
      case 6:
        setExpandedImg(seventh);
        break;
      case 7:
        setExpandedImg(eight);
        break;
      case 8:
        setExpandedImg(nine);
        break;
      // case 9:
      //   setExpandedImg(ten);
      //   break;
      // case 10:
      //   setExpandedImg(eleven);
      //   break;
      // case 11:
      //   setExpandedImg(twelve);
      //   break;
      // case 12:
      //   setExpandedImg(thirdteen);
      //   break;
      // case 13:
      //   setExpandedImg(fourteen);
      //   break;
      // case 14:
      //   setExpandedImg(fifteen);
      //   break;
      // case 15:
      //   setExpandedImg(sixteen);
      //   break;
      default:
        break;
    }
    document
      .querySelector(".side-img")
      .scrollTo(
        0,
        document.querySelector(".side-img img").offsetHeight * index
      );
  };

  const getImageIndex = (img) => {
    switch (img) {
      case first:
        return 0;
      case second:
        return 1;
      case third:
        return 2;
      case fourth:
        return 3;
      case fifth:
        return 4;
      case sixth:
        return 5;
      case seventh:
        return 6;
      case eight:
        return 7;
      case nine:
        return 8;
      case ten:
        return 9;
      case eleven:
        return 10;
      case twelve:
        return 11;
      case thirdteen:
        return 12;
      case fourteen:
        return 13;
      case fifteen:
        return 14;
      case sixteen:
        return 15;
      default:
        return 0;
    }
  };

  const scrollAreaRef = useRef(null);
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };
  const handleScroll = () => {
    const images = scrollAreaRef.current.querySelectorAll("img");
    let currentVisibleImages = [];
    images.forEach((image) => {
      if (isInViewport(image)) {
        currentVisibleImages.push(image.src);
      }
    });
    let imgIndex = 0;
    if (currentVisibleImages.length) {
      if (currentVisibleImages.length >= 3) {
        imgIndex = currentVisibleImages.length - 3;
      } else if (currentVisibleImages.length >= 2) {
        imgIndex = currentVisibleImages.length - 2;
      } else {
        imgIndex = currentVisibleImages.length - 1;
      }
      handleImageClick(
        "/static" +
          currentVisibleImages[imgIndex]
            .split("/static")[1]
            .replaceAll("%20", " ")
      );
    }
  };

  useEffect(() => {
    scrollAreaRef.current.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);
  return (
    <>
      {/* <div id='homie'>
        <canvas />
      </div> */}
      <div className="home h-head container-fluid">
        <div className="carousel-home web-model h-100vh">
          <div className="h-100vh">
            <Carousel>
              <Carousel.Item>
                <div className="main-content container mh-fix">
                  <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6 col-sm-12 d-flex justify-content-center">
                      <img src={main2} width={"75%"} alt="" />
                    </div>
                    <div className="col-md-12 col-lg-5 col-sm-12">
                      <div className="main-text">
                        <h2 className="my-3">Vivid Splended</h2>
                        <p>
                          We strives to create IT solutions that are not only
                          visually captivating but also surpass clients'
                          expectations in terms of excellence, quality, and
                          innovation.
                        </p>
                        <p>
                          Our intention to stand out in the industry by offering
                          vibrant and remarkable digital experiences that leave
                          a lasting positive impression on our clients. We
                          strives to create IT solutions that are not only
                          visually captivating but also surpass clients'
                          expectations in terms of excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              {/* <Carousel.Item>
              <div className="row align-items-center mh-fix">
                <div className="col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="main-text2">
                    <h2 className="mb-3">
                      Top-Notch <br /> Mobile Apps
                    </h2>
                    <p>
                      Ready to transform your business with a powerful mobile
                      app? Our team of experts is here to guide you through the
                      process and turn your vision into a reality. Let's create
                      an exceptional mobile experience for your users and drive
                      your business growth together.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 ">
                  <img src={carousel2} width={"100%"} alt="" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="row align-items-center "
                style={{ marginTop: "180px" }}
              >
                <div className=" col-md-12 col-lg-6 d-flex justify-content-center">
                  <div className="main-text2">
                    <h2 className="mb-4">
                      Embrace The <br /> Digital Future
                    </h2>
                    <p>
                      Collaborate with us and open the door to endless
                      opportunities. Experience the splendor of our innovative
                      solutions, backed by our unwavering commitment to
                      delivering excellence. Join us on this transformative
                      journey and embrace the digital future with Vsple.
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex justify-content-start">
                  <img src={carousel3} width={"80%"} alt="" />
                </div>
              </div>
            </Carousel.Item> */}
            </Carousel>
          </div>
        </div>
        <div className="mobile-model">
          <div className="main-content container">
            <div
              className="row align-items-center"
              // style={{ marginTop: "10%" }}
            >
              <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center my-5">
                <img src={main2} width={"90%"} alt="" />
              </div>
              <div className="col-sm-12 col-lg-6 col-md-6">
                <div className="main-text w-100">
                  <h2>VIVID SPLENDID</h2>
                  <p>
                    We strives to create IT solutions that are not only visually
                    captivating but also surpass clients' expectations in terms
                    of excellence, quality, and innovation. Our intention to
                    stand out in the industry by offering vibrant and remarkable
                    digital experiences that leave a lasting positive impression
                    on our clients. We strives to create IT solutions that are
                    not only visually captivating but also surpass clients'
                    expectations in terms of excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-journey d-flex justify-content-center text-center hidden">
          <div className="p-journey">
            {/* <span>Trusted Us</span> */}
            <h5>Businesses Who Trusted Us</h5>
            <p>
              We're committed to delivering tailored solutions and exceptional
              service to each and every client, helping them achieve their goals
              and thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="slider-div hidden">
          <div className="sliderS-wearable container-fluid">
            <div className="slide-trackN-wearable">
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={ooredo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={calvaryLogo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tradeTips} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={chatie} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tnumber} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={jupieter} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable">
                  <img src={trademarkC} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={unbound} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable">
                  <img src={salestrip} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable p-4">
                <div className="service-box-slider-wearable">
                  <img src={breckW} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable p-4">
                <div className="service-box-slider-wearable">
                  <img src={qrScape} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable p-4">
                <div className="service-box-slider-wearable">
                  <img src={hobbyst} width={"100%"} alt="" />
                </div>
              </div>

              {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={ooredo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={calvaryLogo} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tradeTips} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={chatie} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={tnumber} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={jupieter} width={"100%"} alt="" />
                </div>
              </div>
              <div className="slideN-wearable">
                <div className="service-box-slider-wearable p-4">
                  <img src={unbound} width={"100%"} alt="" />
                </div>
              </div>
              {/* <div className="slideN-wearable">
              <div className="service-box-slider-wearable p-4">
                <img src={sf} width={"100%"} alt="" />
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <div className="services-section container">
          <div className="row">
            <div className="col-md-6 co-lg-6 col-12 mt-5">
              <div id="h0" className="service-box">
                <img
                  src={premiumIcon}
                  alt="premium"
                  width={"30vmax"}
                  className="icon-premium mb-1"
                />
                <span className="service-name d-block my-2">
                  Premium Service
                </span>
                <h5 className="">
                  Mobile App
                  <br />
                  Development
                </h5>
                <p className="service-para mt-2">
                  Partner with VSPLE to unlock the potential of extraordinary
                  mobile app experiences across iOS, Watches, Android and Hybrid
                  platforms. Contact us today to witness the transformation of
                  your app idea into a premium, user-centric reality. Let's
                  create mobile app solutions that elevate your business and
                  captivate your users!
                </p>
                <div className="w-100 my-4">
                  <img src={appleicon} width={"15%"} alt="" />
                  <img
                    src={androidicon}
                    className="ms-3"
                    width={"15%"}
                    alt=""
                  />
                </div>
                <div className="getin-button text-center mt-4 web-model">
                  <div className="see-button">
                    <a href="/mobile-app-development-services">
                      View All &nbsp;
                    </a>
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
            <div className="col-md-6 col-lg-6 col-12 text-end ">
              <img src={secondCont} width={"85%"} alt="" />
            </div>
          </div>
        </div>
        <div className="grid-container web-model mb-5 ">
          <div className="ico-4">
            <a target="blank" href="https://twitter.com/VspleTech">
              <img src={twittericon} width={"30%"} alt="" />
            </a>
          </div>
          {/* hN */}
          <div className="grid" style={{ maxWidth: "79%" }}>
            {/* <div id="hN" className="item"></div>
            <div id="hN" className="item"></div>
            <div id="hN" className="item"></div>
            <div id="hNN" className="item"></div>
            <div id="hNN" className="item"></div>
            <div id="hNN" className="item"></div>
            <div id="hNN" className="item"></div>
            <div id="hNN" className="item"></div>
            <div id="hNN" className="item"></div> */}
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
          <div className="ico-1">
            <a
              target="blank"
              href="https://www.youtube.com/@vspletechnologiespvt.ltd.3913/featured"
            >
              <img src={youtubeicon} width={"70%"} alt="" />
            </a>
          </div>
          <div className="ico-2">
            <a
              target="blank"
              href="https://www.linkedin.com/company/vsple-technologies"
            >
              <img src={linkedinicon} width={"30%"} alt="Linkedin Icon" />
            </a>
          </div>
          <div className="ico-3">
            <a target="blank" href="https://www.instagram.com/vsple/">
              <img src={inst} width={"100%"} alt="instagram icon" />
            </a>
          </div>
        </div>
        <div className="grid-container mobile-model m-0 my-5">
          <div className="grid">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>

        <div className="indus-button text-center ">
          <div className="see-button">
            <a href="/our-portfolio">See More &nbsp;</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2vmax"
              height="2vmax"
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

        <div className="container industries mt-5 web-model">
          <div className="row">
            <div className="col-md-8 col-sm-12 col-lg-6">
              <div className="box shadow">
                <div className="row">
                  <div className="col-8 me-0 pe-0">
                    <div className="main-img">
                      <img
                        id="expandedImg"
                        width={"100%"}
                        height={500}
                        objectfit={"cover"}
                        alt=""
                        src={expandedImg}
                      />
                    </div>
                  </div>
                  <div className="col-1 m-0 p-0 d-flex align-items-center justify-content-center">
                    <div className="range-slider position-relative">
                      <input
                        className="input-range"
                        orient="vertical"
                        type="range"
                        value={getImageIndex(expandedImg)}
                        onChange={handleSliderChange}
                        min="0"
                        max="15"
                        id="myRange"
                      />
                      {/* <span className="range-value"></span> */}
                    </div>
                  </div>
                  <div className="col-3 text-center">
                    <div className="">
                      <div
                        className="side-img showcase-scroll-area"
                        ref={scrollAreaRef}
                      >
                        <div>
                          <img
                            src={first}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(first)}
                            style={{ opacity: expandedImg === first ? 1 : 0.4 }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={second}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(second)}
                            style={{
                              opacity: expandedImg === second ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={third}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(third)}
                            style={{ opacity: expandedImg === third ? 1 : 0.4 }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={fourth}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(fourth)}
                            style={{
                              opacity: expandedImg === fourth ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={fifth}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(fifth)}
                            style={{
                              opacity: expandedImg === fifth ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={sixth}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(sixth)}
                            style={{
                              opacity: expandedImg === sixth ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={seventh}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(seventh)}
                            style={{
                              opacity: expandedImg === seventh ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={eight}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(eight)}
                            style={{
                              opacity: expandedImg === eight ? 1 : 0.4,
                            }}
                          />
                        </div>
                        {/* <div className="mt-3">
                          <img
                            src={nine}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(nine)}
                            style={{
                              opacity: expandedImg === nine ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={ten}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(ten)}
                            style={{
                              opacity: expandedImg === ten ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={eleven}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(eleven)}
                            style={{
                              opacity: expandedImg === eleven ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={twelve}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(twelve)}
                            style={{
                              opacity: expandedImg === twelve ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={thirdteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(thirdteen)}
                            style={{
                              opacity: expandedImg === thirdteen ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={fourteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(fourteen)}
                            style={{
                              opacity: expandedImg === fourteen ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={fifteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(fifteen)}
                            style={{
                              opacity: expandedImg === fifteen ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={sixteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(sixteen)}
                            style={{
                              opacity: expandedImg === sixteen ? 1 : 0.4,
                            }}
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={sixteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(sixteen)}
                            
                          />
                        </div>
                        <div className="mt-3">
                          <img
                            src={sixteen}
                            width="90%"
                            alt=""
                            srcSet=""
                            onClick={() => handleImageClick(sixteen)}
                          
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-6 d-flex align-items-center justify-content-center">
              <div className="service-box ">
                <img
                  width={"7%"}
                  src={premiumIcon2}
                  alt="premium"
                  className="icon-premium mb-1"
                />
                <span className="service-name d-block mt-1 mb-1">
                  Industries
                </span>
                <h5 className="service-title">
                  Digital <br /> Transformation
                </h5>
                <p className="service-para mt-2">
                  We pride ourselves on being a leading IT company that serves a
                  diverse range of industries. We understand that each industry
                  has unique challenges and requirements, and we are committed
                  to delivering tailored digital solutions that drive growth,
                  efficiency, and innovation. Our expertise spans across various
                  sectors, allowing us to provide comprehensive IT services.
                </p>
                <div className="getin-button text-center mt-4">
                  <div className="see-button">
                    <a href="/industries">View All &nbsp;</a>
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
        <div className="container industries mobile-model">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 d-flex align-items-center justify-content-center">
              <div className="service-box w-100">
                <img
                  src={industriesicon}
                  alt="premium"
                  className="icon-premium mb-1"
                  width={"4%"}
                />
                <span className="service-name d-block mt-1 mb-2">
                  Industries
                </span>
                <h5 className="service-title">
                  Digital <br /> Transformation
                </h5>
                <p className="service-para mt-2">
                  We pride ourselves on being a leading IT company that serves a
                  diverse range of industries. We understand that each industry
                  has unique challenges and requirements, and we are committed
                  to delivering tailored digital solutions that drive growth,
                  efficiency, and innovation. Our expertise spans across various
                  sectors, allowing us to provide comprehensive IT services.
                </p>
                <div className="main-text-service mobile-model mobile-swiper">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2000,
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
                      <div className="flex-box pt-4 pb-2">
                        <a href="/healthcare-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={health} width={"50%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Health & Care</span>
                              <p>
                                Revolutionizing Healthcare: Innovating Solutions
                                for a Healthier Tomorrow
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/sport-fitness-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={sports} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Sports & Fitness</span>
                              <p>
                                Fueling Excellence: Transforming Sports &
                                Fitness through Innovation
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/banking-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={bank} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Banking</span>
                              <p>
                                Revolutionizing Banking: Fusing Technology with
                                Financial Excellence
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/datdating-technology-solutionsing">
                          <div className="row">
                            <div className="col-3">
                              <img src={dating} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Dating</span>
                              <p>
                                Connecting Hearts, Innovating Futures:
                                Redefining Dating Dynamics
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/fintech-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={fintech} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Fintech</span>
                              <p>
                                Transforming Finance, Uniting Technology: Our
                                Fintech Footprint
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/transportation-logistics-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={logistic} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Logistics</span>
                              <p>
                                Revolutionizing Logistics: Innovating Pathways
                                to Seamless Operations
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/real-estate-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={realState} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>Real Estate</span>
                              <p>
                                Building Tomorrow's Real Estate Solutions Today
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="flex-box pt-4 pb-2">
                        <a href="/e-learning-technology-solutions">
                          <div className="row">
                            <div className="col-3">
                              <img src={eLearning} width={"75%"} alt="" />
                            </div>
                            <div className="col-8 text-start ms-2">
                              <span>E-Learning</span>
                              <p>
                                Transforming Education: Pioneering Solutions for
                                E-Learning Evolution
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="indus-button my-5 text-center ">
                  <div className="see-button">
                    <a href="/industries">See More &nbsp;</a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2vmax"
                      height="2vmax"
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
        <div className="flop-card-animation text-center web-model">
          <div className="row ">
            <div className="col-md-3 col-sm-12 col-lg-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="inner-img">
                      <img src={support} alt="Avatar" />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="inner-content">
                      <h1>30+</h1>
                      <p>
                        Total <br /> Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="inner-img">
                      <img src={success} alt="Avatar" />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="inner-content">
                      <h1>100%</h1>
                      <p>
                        Projects <br /> Delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="inner-img">
                      <img src={Accomplished} alt="Avatar" />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="inner-content">
                      <h1>100+</h1>
                      <p>
                        Accomplished <br /> Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="inner-img">
                      <img src={rating} alt="Avatar" />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="inner-content">
                      <h1>100%</h1>
                      <p>
                        Satisfied <br /> Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bub-animation container web-model">
          <div className="tech-container d-flex ">
            <div className="technology-box row">
              <div className="col-md-5 align-items-right">
                <img src={tech} alt="premium" className="icon-premium mb-1" />
                <span className="service-name d-block my-1 ">Technologies</span>
                <span className="service-title">
                  Unleashing the <br /> Potential
                </span>
                <p className="service-para mt-2">
                  Your trusted partner in harnessing the power of cutting-edge
                  technologies. Our diverse expertise in a wide range of
                  technologies enables us to deliver innovative solutions that
                  drive business growth and transformation. Explore our
                  comprehensive technology offerings and embark on a digital
                  journey that propels your business to new heights.
                </p>
              </div>
              <div className="col-md-7 parent-container ">
                <div className="bub-anim">
                  <div id="background-wrap">
                    <div className="bubble x1">
                      <img src={appleicons} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x2">
                      <img src={swifticons} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x3">
                      <img src={angularicons} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x4">
                      <img src={objcicons} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x5">
                      <img src={phpicons} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x6">
                      <img src={group5190} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x7">
                      <img src={group5192} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x8">
                      <img src={group5204} alt="" width={"100%"} />
                    </div>
                    <div className="bubble x9">
                      <img src={group5188} alt="" width={"100%"} />
                    </div>
                  </div>
                  <img className="lap" src={laptop} width={300} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bub-animation container mobile-model">
          <div className="tech-container d-flex ">
            <div className="technology-box row">
              <div className="col-12 align-items-right">
                <img
                  src={tech}
                  alt="premium"
                  width={"4%"}
                  className="icon-premium mb-1"
                />
                <span className="service-name d-block ">Technologies</span>
                <span className="service-title">
                  Unleashing the <br /> Potential
                </span>
                <p className="service-para mt-2">
                  Your trusteds partner in harnessing the power of cutting-edge
                  technologies. Our diverse expertise in a wide range of
                  technologies enables us to deliver innovative solutions that
                  drive business growth and transformation. Explore our
                  comprehensive technology offerings and embark on a digital
                  journey that propels your business to new heights.
                </p>
              </div>
              {/* <div className="slider-div">
                <div className="sliderS-wearable container-fluid">
                  <div className="slide-trackN-wearable">
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={ooredo} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={calvaryLogo} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={tradeTips} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={chatie} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={tnumber} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={jupieter} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={unbound} width={"100%"} alt="" />
                      </div>
                    </div>
             
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={ooredo} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={calvaryLogo} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={tradeTips} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={chatie} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={tnumber} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={jupieter} width={"100%"} alt="" />
                      </div>
                    </div>
                    <div className="slideN-wearable">
                      <div className="service-box-slider-wearable p-4">
                        <img src={unbound} width={"100%"} alt="" />
                      </div>
                    </div>
             
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="get-in-touch mt-5 ">
          <div className="row container my-5 hidden ">
            <div className="col-md-8 col-sm-12 col-lg-8">
              <p style={{ textAlign: "start" }}>
                Whether you're embarking on a new project or seeking
                collaboration. <br />
                <span className="inner-join">
                  Let's join forces to create something exceptional!
                </span>
              </p>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 text-right web-model">
              <div className="getin-button-in text-center">
                <div className="see-button">
                  <a href="/contact-us">
                    Get In Touch &nbsp;
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
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-lg-4 mobile-model">
              <div className="getin-button-in text-center">
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
        <div className="web-model testimonial mt-5">
          <div className="avatars">
            {clients.map((client) => (
              <img
                key={client.id}
                src={
                  selectedClient === client.id
                    ? client.avatar
                    : client.selectedAvatar
                }
                alt=""
                onClick={() => handleAvatarClick(client.id)}
                className={selectedClient === client.id ? "selected" : ""}
              />
              
            ))}
            <img src={smile} alt="" />
            <img src={smile2} alt="" />
            <img src={like} alt="" />
            <img src={like1} alt="" />
            <img src={like2} alt="" />
            {/* <img src={like2} alt="" />
          <img src={smile2} alt="" /> */}
          </div>
          <div className="testimonial-text text-center">
            <img width={25} src={review} alt="" />

            <h2 className="slide-i">Testimonial</h2>
            {selectedClient !== null && (
              <>
                <h5 className={animate ? "slide-in" : ""}>
                  {clients[selectedClient - 1].name}
                  {/* {clients.name.charAt(0)} */}
                </h5>
                <p className={` ${animate ? "slide-in" : ""}`}>
                  <img src={left} alt="" className="mb-4" />
                  {clients[selectedClient - 1].description}
                  <img src={right} alt="" />
                </p>
              </>
            )}
          </div>
        </div>
        <div className="mobile-model mobile-swiper container">
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
              <div className="testimonial-about mt-5">
                {/* <img src={mlogo} alt=''/> */}
                <div className="imgnstars">
                  <div className="img d-flex">
                    <div className="cname ms-3 text-center">
                      <span className="client">Anurag A.</span>
                      <br />
                      <span className="client-D">Founder & CEO</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  Vsple has great experience with iOS and built several
                  applications that are loved by all users. Their technical
                  expertise is great. They also has very positive attitude ...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-about mt-5">
                <div className="imgnstars">
                  <div className="img d-flex">
                    {/* <img src={mask} width={"30%"} alt="" /> */}
                    <div className="cname ms-3 text-center">
                      <span className="client">Max V.</span>
                      <br />
                      <span className="client-D">Founder & CEO</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  Vivek is efficient and available, highly recommend him! Vivek
                  did a great job and completed the work really quickly &
                  efficiently! Great communication, great work.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-about mt-5">
                <div className="imgnstars">
                  <div className="img d-flex">
                    {/* <img src={mask} width={"30%"} alt="" /> */}
                    <div className="cname ms-3 text-center">
                      <span className="client">Aniket M.</span>
                      <br />
                      <span className="client-D">Founder & CEO</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  I have been working with Vsple for 5 years and they never let
                  me down in terms of delivery and quality of the project. Great
                  understanding of requirements and strong tec...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-about mt-5">
                <div className="imgnstars">
                  <div className="img d-flex">
                    {/* <img src={mask} width={"30%"} alt="" /> */}
                    <div className="cname ms-3 text-center">
                      <span className="client">Balraj S.</span>
                      <br />
                      <span className="client-D">Founder & CEO</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  Great Job! Vsple delivered the work as always with quality and
                  timely. Highly recommend and look forward to working on more
                  projects in the future.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-about mt-5">
                <div className="imgnstars">
                  <div className="img d-flex">
                    {/* <img src={mask} width={"30%"} alt="" /> */}
                    <div className="cname ms-3 text-center">
                      <span className="client">Dipesh G.</span>
                      <br />
                      <span className="client-D">Founder & CEO</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  Vivek has a strong understanding of current development best
                  practices. He is particularly skilled with iOS Development and
                  has been a valuable addition to our team! I w...
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-about mt-5">
                <div className="imgnstars">
                  <div className="img d-flex">
                    {/* <img src={mask} width={"30%"} alt="" /> */}
                    <div className="cname ms-3 text-center">
                      <span className="client">Bax</span>
                      <br />
                      <span className="client-D">Founder</span>
                    </div>
                  </div>
                  {/* <div className="star mt-2">
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star checked ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                    <span className="fa fa-star ms-2"></span>
                  </div> */}
                </div>
                <p className="text-light">
                  Honestly, whoever sees this, you will be seriously lucky to
                  work with Vivek and his team at Vsple. I've never worked with
                  a project manager and team so absolutely dedica...
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HoComponent;
