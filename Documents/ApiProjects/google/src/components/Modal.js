import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner scrollbar">
          <button className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
