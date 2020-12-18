import React from "react";
import { Card } from "./Card";
import "../styles/Cards.scss";
import classNames from "classnames";
import { CardTitle, CardTag } from "./CardElements";
import { Link } from "react-router-dom";

export const Cards = ({
  value = [],
  isGrey = false,
  title,
  filterText = "",
  alwaysShowTitle = false,
  viewAllLink,
  emptyText,
}) => {
  const filteredCards =
    filterText.length > 0
      ? value.filter((item) => {
          const itemValues = [item.title, item.subjectArea]
            .join("")
            .toLowerCase();
          return (
            itemValues.toLowerCase().indexOf(filterText.toLowerCase()) > -1
          );
        })
      : value;

  if (filteredCards.length === 0 && !alwaysShowTitle) {
    return false;
  }
  return (
    <>
      {title && (
        <div className="cards-section__header">
          <h2 className="cards-section__heading">{title}</h2>
          {viewAllLink && <Link to={viewAllLink}>View All</Link>}
        </div>
      )}

      <div
        className={classNames("row cards__container", { "row-grey": isGrey })}
      >
        {!Boolean(filteredCards.length) && (
          <span className="cards-section__empty">{emptyText}</span>
        )}

        {filteredCards.map((item) => {
          return (
            <div
              key={item.id}
              className="col-lg-4 col-sm-6 col-xs-12 card__container"
            >
              <Card
                image={item.image}
                imageAlt={item.alt}
                videoUrl={item.videoUrl}
                link=""
              >
                <CardTitle link={`/pathway/${item.slug}`}>
                  {item.title}
                </CardTitle>
                <CardTag link="#">{item.subjectArea}</CardTag>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
