import './cursos.css'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cursos(curso) {
  
  return (
    <section id="cursos">
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={curso.image} />
        <Card.Body>
          <Card.Title>{curso.curso}</Card.Title>
          <Card.Text>
          {curso.descricao}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>Material: {curso.material} </b></ListGroup.Item>
          <ListGroup.Item><b>Duração: {curso.duracao} </b></ListGroup.Item>
          <ListGroup.Item><b>Investimento: {curso.investimento} </b></ListGroup.Item>
        </ListGroup>
      </Card>
    </section>
  );
}

export default Cursos;
