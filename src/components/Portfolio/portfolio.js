import Carousel from "react-bootstrap/Carousel";
import "./portfolio.css";

function Portfolio(portfolio) {
  return (
    <section id={portfolio.id}>
      {/* <Carousel>
        <Carousel.Item> */}
          <img
            className="d-block w-100"
            src= {portfolio.image}
            alt= {portfolio.id}
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        {/* </Carousel.Item>
      </Carousel> */}
    </section>
  );
}

export default Portfolio;
