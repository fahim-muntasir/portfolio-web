import React from "react";
import allPortfolioInfo from "../portfolioInfo.json";
import classes from "../styles/Portfolio.module.css";
import sClasses from "../styles/SinglePortfolio.module.css";
import CreateBy from "./CreateBy";
import SinglePortfolio from "./SinglePortfolio";

export default function Portfolios() {
  return (
    <div className="container">
      <div className={classes.pageDicription}>
        <h2>
          Here are some of the projects I've worked on before. Every website and
          web application is my own creation.
        </h2>
      </div>
      <div className={classes.allPortfolio}>
        {allPortfolioInfo.map((aPortfolio) => (
          <SinglePortfolio
            discription={aPortfolio.portfolionDiscription}
            title={aPortfolio.portfolioTitle}
            liveLink={aPortfolio.liveLink}
            // githubLink={aPortfolio.githubLink}
            portfolioImages={aPortfolio.portfolioImages}
          >
            {aPortfolio.useLanguage.map((element) => (
              <CreateBy
                icon={`${sClasses[element.split(".")[0].toLowerCase()]}`}
                tech={element}
              />
            ))}
          </SinglePortfolio>
        ))}
      </div>
    </div>
  );
}
