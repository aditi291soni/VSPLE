import React, { useState } from 'react'
import smile from "../assest/icons/vsple_website_design_5/happy 1.png";
import review from "../assest/icons/vsple_website_design_5/review 2.png";
import avatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 1.png";
import selectedAvatar from "../assest/web-icons/global-icon/Screenshot_2024-02-01_at_5.16 2.png";
import smile2 from "../assest/icons/vsple_website_design_5/happy 2.png";
import like from "../assest/icons/vsple_website_design_5/like (1) 1.png";
import like1 from "../assest/icons/vsple_website_design_5/like 1.png";
import like2 from "../assest/icons/vsple_website_design_5/like 2.png";
import left from "../assest/left.png";
import right from "../assest/right.png";
const Testimonials = () => {
      const [animate, setAnimate] = useState(false);
      const [selectedClient, setSelectedClient] = useState(1);
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
          const handleAvatarClick = (clientId) => {
            const internalImg = document.querySelector(".testimonial div");
            internalImg.classList.add("active");
            setSelectedClient(clientId);
            setAnimate(true);
          };
      
  return (
    <div className="web-model testimonial mt-5">
      <div className="avatars">
        {clients.map((client) => (

          <div
            onClick={() => handleAvatarClick(client.id)}
            className={
              selectedClient === client.id
                ? "active selected d-flex align-items-center justify-content-center text-white"
                : " d-flex align-items-center justify-content-center text-white"
            }
          >
            {client.name[0]}
          </div>
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
  );
}

export default Testimonials