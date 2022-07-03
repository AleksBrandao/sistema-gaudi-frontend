import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contato() {
  return (
  <section id="contato">
      <Form>
      <Form.Group controlId="formGridName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="name" placeholder="nome" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control placeholder="(00)90000-0000" />
        </Form.Group>
      </Row>

      <FloatingLabel controlId="floatingTextarea2" label="Mensagem">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '150px' }}
        />
      </FloatingLabel>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  </section>
  );
}

export default Contato;
