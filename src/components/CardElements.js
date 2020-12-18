import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CardTitle = ({ link, children }) => (
  <h2 className="card__title">
    <Link to={link}>{children}</Link>
  </h2>
);

const CardTag = ({ link, children }) => (
  <div className="card__tag">
    <Link to={link}>{children}</Link>
  </div>
);
const ProgressBar = ({ color, completed, total }) => {
  const percent = Number(((completed / total) * 100).toFixed(0));
  return (
    <div className="progress-bar__container">
      <div
        className="progress-bar__progress"
        style={{ width: `${percent}%`, background: `${color}` }}
      ></div>
    </div>
  );
};
const CardStatus = ({ children, color }) => (
  <div className="card__status">
    <span className={`card__status--container`}> {children} </span>
  </div>
);

const CardFavBtn = ({ children, onClick }) => (
  <button className="fav-btn" onClick={onClick}>
    {children}
  </button>
);

CardTitle.propTypes = {
  link: propTypes.string,
  children: propTypes.node,
};

CardTag.propTypes = {
  link: propTypes.string,
  children: propTypes.node,
};

ProgressBar.propTypes = {
  completed: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  color: propTypes.string,
};

CardStatus.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
};

CardFavBtn.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};

export { CardTitle, CardTag, CardStatus, CardFavBtn, ProgressBar };
