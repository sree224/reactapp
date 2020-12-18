import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "../styles/Card.scss";
import Modal from "react-modal";

const ModalCustomStyles = {
  content: {
    top: "0%",
    left: "0%",
    right: "auto",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(0%, 0%)",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    textAlign: "center",
    zIndex: "3",
    border: "none",
  },
};

//Modal.setAppElement(document.getElementById("app")); //despite still showing warning

export function Card({
  image,
  imageAlt,
  link = "#",
  videoUrl,
  children,
  ...rest
}) {
  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("modal closed ");
  };
  return (
    <div className={classNames("panel", "panel-default", "card")} {...rest}>
      <div onClick={openModal}>
        <Link to={link}>
          <div
            className="image__card"
            style={{ backgroundImage: `url('${image}')` }}
            alt={imageAlt}
          ></div>
        </Link>

        <div>
          <div className="panel-body card__text">{children}</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={ModalCustomStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button
          className="btn btn-primary float-left modal-close-btn"
          onClick={closeModal}
        >
          BACK
        </button>

        <div>
          <video
            className="video-container"
            controls
            autoplay=""
            name="media"
            data-video="0"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </Modal>
    </div>
  );
}
