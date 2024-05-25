import React, { useEffect, useState, useRef } from "react";
import "../../style/meetVsple.css";
import thirdImg from "../../assest/main-icons/IMG-20230503-WA0028.jpg";
import vi from "../../assest/main-icons/Untitled design.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoModal from "../viedioModal/viedioModal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const MeetVspleComponent = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    // Start the video when the component mounts
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const openModal1 = () => {
    setIsModalOpen1(true);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
  };
  const openModal4 = () => {
    setIsModalOpen4(true);
  };

  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
  };
  const closeModal4 = () => {
    setIsModalOpen4(false);
  };

  const videoUrl = "https://www.youtube.com/embed/ny0JxfE7mYY";
  return (
    <>
      <div className="top-gallery d-flex">
        <div className="first-slide">
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
        </div>
        <div className="second-slide">
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
        </div>
        <div className="third-slide">
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
        </div>
        <div className="fourth-slide">
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
          <video controls muted autoPlay loop ref={videoRef}>
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
              type="video/webm"
            />
          </video>
        </div>
        <div className="gradient"></div>
        <div className="background-shodow"></div>
      </div>
      <div>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="pplVideo">
                <div className="play_icon" tabIndex="0" onClick={openModal1}>
                  <img
                    alt="Disha Dave"
                    src={thirdImg}
                    className="video-thumbnail"
                  />
                  <i className="iButton fa fa-play-circle fa-3x"></i>
                </div>
                {isModalOpen1 && (
                  <VideoModal videoUrl={videoUrl} onClose={closeModal1} />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pplVideo">
                <div className="play_icon" tabIndex="0" onClick={openModal2}>
                  <img
                    alt="Disha Dave"
                    src={thirdImg}
                    className="video-thumbnail"
                  />
                  <i className="iButton fa fa-play-circle fa-3x"></i>
                </div>
                {isModalOpen2 && (
                  <VideoModal videoUrl={videoUrl} onClose={closeModal2} />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pplVideo">
                <div className="play_icon" tabIndex="0" onClick={openModal3}>
                  <img
                    alt="Disha Dave"
                    src={thirdImg}
                    className="video-thumbnail"
                  />
                  <i className="iButton fa fa-play-circle fa-3x"></i>
                </div>
                {isModalOpen3 && (
                  <VideoModal videoUrl={videoUrl} onClose={closeModal3} />
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pplVideo">
                <div className="play_icon" tabIndex="0" onClick={openModal4}>
                  <img
                    alt="Disha Dave"
                    src={thirdImg}
                    className="video-thumbnail"
                  />
                  <i className="iButton fa fa-play-circle fa-3x"></i>
                </div>
                {isModalOpen4 && (
                  <VideoModal videoUrl={videoUrl} onClose={closeModal4} />
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MeetVspleComponent;
