import React, { useState } from "react";

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="video-modal">
      <div className="modal-content">
        <span className="close text-danger" style={{fontWeight:'800'}} onClick={onClose}>
          &times; close
        </span>
        <iframe
          title="YouTube Video"
          width="500"
          height="400"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
