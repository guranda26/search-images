import React from "react";
import ImageModalProps from "../interface/image.modal";

const ImageModal: React.FC<ImageModalProps> = ({ image, stats, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image.urls.full} alt={image.alt_description} />
        <div className="image-stats">
          <p>
            <span>Downloads:</span> {stats.downloads}
          </p>
          <p>
            <span>Views:</span> {stats.views}
          </p>
          <p>
            <span>Likes:</span> {stats.likes}
          </p>
        </div>
        <button onClick={onClose} className="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
