import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { v4 as uuidv4 } from 'uuid';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };
    // console.log("e",e)
    // console.log(Object.keys(activeItem))
    // console.log("aqui")
    // console.log("active",activeItem)
    // console.log("value",value)

    this.setState({ activeItem });
   
  };
  render() {
    const { toggle, onSave } = this.props;

    // console.log(this.props)
    // console.log("aqui");
    // console.log(this.state)
    // console.log(Object.keys(this.state.activeItem)[0]);
    // console.log(Object.keys(this.state.activeItem)[1]);
    // console.log(Object.keys(this.state.activeItem)[2]);
    // console.log(Object.keys(this.state.activeItem)[4]);

    // console.log("tamanho", Object.keys(this.state.activeItem).length);
    // console.log("activeItem", this.state.activeItem); 
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Adicionar novo registro</ModalHeader>
        <ModalBody>
          <Form>
            {Object.entries(this.state.activeItem).map(([key, value]) => (
              <FormGroup>
                {/* <div key={key}>{value} {key}</div> */}
                <Label for="students-email">{key}</Label>

                <Input
                  type="text"
                  id={uuidv4()}
                  // id= "input"`${key}`
                  name={key}
                  value={value}
                  onChange={this.handleChange}
                  // placeholder="Digite o {value} da tarefa"
                  // defaultValue={this.state.activeItem.name}
                />
              </FormGroup>
            ))}

            {/* <FormGroup>
              <Label for="students-email">Email</Label>
              <Input
                type="text"
                id="students-email"
                name="email"
                value={this.state.activeItem.email}
                onChange={this.handleChange}
                placeholder="Digite a descrição da tarefa"
              />
            </FormGroup> */}

            {/* <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completado
              </Label>
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Salvar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
