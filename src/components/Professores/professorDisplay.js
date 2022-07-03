import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Professores from "./professores";
import { professoresData } from "../data/professoresData";

const ProfessorDisplay = () => {
  const professor = professoresData;
  return (
    <>
      <h1>PROFESSORES</h1>
      <h2>
        Nossos professores são profissionais atuantes em suas áreas e aptos a
        ensinarem aos alunos as competências necessárias para que consigam
        desenvolver seus próprios projetos e com isso ampliarem seus horizontes
        na maneira de ver e pensar as artes visuais.
      </h2>

      <section id="professores">
        <Carousel variant="dark">
          {professor.map((professor) => (
            <Carousel.Item>
              <Professores {...professor} />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default ProfessorDisplay;
