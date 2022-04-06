import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../styles/SinglePortfolio.module.css";

export default function SinglePortfolio({
  children,
  discription,
  title,
  liveLink,
  // githubLink,
  portfolioImages,
}) {
  return (
    <div className={classes.singlePortfolio}>
      <div className={classes.portfolioImage}>
        <Carousel showThumbs={false} showIndicators={false}>
          {portfolioImages.map((img, index) => (
            <div key={Math.random() * index}>
              <img
                className="carouselPortfolioImg"
                src={img}
                alt="portfolio_image"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={classes.portfolioInfo}>
        <div className={classes.portfolioDic}>
          <h4>{title}</h4>
          <p>{discription}</p>
        </div>
        <div className={classes.createByAndView}>
          <div className={classes.useLanguage}>{children}</div>
        </div>
        <div className={classes.gitHubAndViewLink}>
          {/* <a target="_blank" href={githubLink} rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a> */}
          <a target="_blank" href={liveLink} rel="noreferrer">
            <img src="images/link.png" alt="link icon" /> Live View
          </a>
        </div>
      </div>
    </div>
  );
}
