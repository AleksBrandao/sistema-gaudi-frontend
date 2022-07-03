import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Cursos from "./cursos";
import { cursosData } from "../data/cursosData";

const CursoDisplay = () => {
  const cursos = cursosData;
  return (
    <div>
      <h1>
        Confira nossos cursos e entre em contato para agendar uma aula teste
        gratuita!
      </h1>

      <div id="cursos">
        <Carousel variant="dark">
          {cursos.map((curso) => (
            <Carousel.Item>
              <Cursos {...curso} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CursoDisplay;
