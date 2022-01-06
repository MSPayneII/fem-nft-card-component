import React from "react";
import ethIcon from "../images/icon-ethereum.svg";
import clockIcon from "../images/icon-clock.svg";
import viewIcon from "../images/icon-view.svg";

const Project = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        const {
          id,
          name,
          info,
          eth,
          daysLeft,
          creatorAvatar,
          creatorName,
          image,
        } = project;

        return (
          <article key={id} className="projectCard">
            <div className="imgContainer">
              <img src={image} alt={name} className="cardImage" />
              <div className="overlay">
                <a href="/">
                  <img src={viewIcon} alt="icon" className="viewIcon" />
                </a>
              </div>
            </div>
            <h2 className="cardTitle">{name}</h2>
            <p className="cardInfo">{info}</p>

            <section className="details">
              <div className="ethContainer">
                <img
                  src={ethIcon}
                  alt="icon"
                  style={{
                    width: "0.6875rem",
                    height: "1.125rem",
                    marginRight: "0.50rem",
                  }}
                />
                <h3 className="ethDetail">{eth}</h3>
              </div>
              <div className="daysContainer">
                <img
                  src={clockIcon}
                  alt="icon"
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: "0.50rem",
                  }}
                />
                <p className="daysDetail">{daysLeft}</p>
              </div>
            </section>
            <div className="underline"></div>
            <section>
              <div className="creatorContainer">
                <img
                  src={creatorAvatar}
                  alt={creatorName}
                  className="creatorAvatar"
                />
                <p>
                  Creation of
                  <span className="creatorName"> {creatorName}</span>
                </p>
              </div>
            </section>
          </article>
        );
      })}
    </>
  );
};

export default Project;
