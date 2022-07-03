import React, { Component } from "react";
import Modal from "../../components/Modal";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';
// const urls = ["todos/", "guardians/", "roles/", "adresses/", "students/"];
const url = "guardians/";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        nome: "",
        email: "",
        cpf: "",
        rg: "",
        telefone: "",
        Data_de_nascimento: "",
      
        // completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get(`/api/${url}`)
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    console.log("aqui", item);
    this.toggle();

    if (item.id) {
      // console.log("pasoou aqui aaaa", item.id)
      axios
        .put(`/api/${url}${item.id}/`, item)
        .then((res) => this.refreshList());

      return;
    }
    axios.post(`/api/${url}`, item).then((res) => this.refreshList());
    // console.log("Object.keys", Object.keys(item.id))
  };

  handleDelete = (item) => {
    axios.delete(`/api/${url}${item.id}/`).then((res) => this.refreshList());
    // console.log("Object.keys", Object.keys(item.id))
  };

  createItem = () => {
    const item = {
      nome: "",
      email: "",
      cpf: "",
      rg: "",
      telefone: "",
      Data_de_nascimento: "",
    };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
    console.log("passou aqui bb");
  };

  renderTabList = () => {
    return <div className="nav nav-tabs"></div>;
  };

  renderItems = () => {
    const newItems = this.state.todoList;

    return newItems.map((item, index) => (
      <table>
        <tbody
          key={uuidv4()}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <td
            className={`todo-title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.name}
          >
            <td>{item[Object.keys(item)[1]]}</td>
          </td>
          <td>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => this.editItem(item)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(item)}
            >
              Deletar
            </button>
          </td>
        </tbody>
      </table>
    ));
  };

  render() {
    return (
      <>
        <main className="container">
          <h1 className="text-black text-uppercase text-center my-4">
            Professores
          </h1>
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <div className="mb-4">
                  <button className="btn btn-primary" onClick={this.createItem}>
                    Adicionar Professores
                  </button>
                </div>
                {this.renderTabList()}
                <ul className="list-group list-group-flush border-top-0">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
              onSave={this.handleSubmit}
            />
          ) : null}
        </main>
      </>
    );
  }
}

export default App;
