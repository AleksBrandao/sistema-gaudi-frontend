import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Portfolio from "./portfolio";
import { portfolioData } from "../data/portfolioData";

const PortfolioDisplay = () => {
  const portfolio = portfolioData;
  return (
    <>
      <h1>Portfólio dos professores</h1>

      <section id="portfolio">
        <Carousel variant="dark">
          {portfolio.map((portfolio) => (
            <Carousel.Item>
              <Portfolio {...portfolio} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default PortfolioDisplay;
