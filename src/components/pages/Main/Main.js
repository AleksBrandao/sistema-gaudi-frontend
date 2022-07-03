import React from "react";
import ProfessorDisplay from "../../Professores/professorDisplay";
import Contato from "../../Contato/contato";
import Localizacao from "../../Localizacao/localizacao";
import About from "../../About/about";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import CursoDisplay from "../../Cursos/cursosDisplay";
import PortfolioDisplay from "../../Portfolio/portfolioDisplay";


function Main() {
  return (
    <div>
        <title>Porfolio</title>
      <Header />
      <About />
      <CursoDisplay />
      <ProfessorDisplay />
      <PortfolioDisplay />
      <Contato />
      <Localizacao />
      <Footer />
       </div>
  );
}

export default Main;
