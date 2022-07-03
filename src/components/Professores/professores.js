import './professores.css'
import Card from "react-bootstrap/Card";

function Professores(professor) {
  
  return (
    <section id="professores">
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={professor.image} />
        <Card.Body>
          <Card.Title>{professor.instagran}</Card.Title>
          <Card.Text>
          {professor.descricao}
          </Card.Text>
        </Card.Body>
 
      </Card>
    </section>
  );
}

export default Professores;
