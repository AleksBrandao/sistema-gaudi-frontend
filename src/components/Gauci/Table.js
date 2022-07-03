// https://www.geeksforgeeks.org/how-to-build-an-html-table-using-reactjs-from-arrays/

import React, { Component } from "react";
import Modal from "../../components/Modal";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "students/";
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
        data_de_nascimento: "",
        endereço: "",
        professor: "",
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
    this.toggle();

    if (item.id) {
      axios.put(`/api/${url}${item.id}/`, item).then(this.refreshList());

      return;
    }
    axios.post(`/api/${url}`, item).then(this.refreshList());
  };

  handleDelete = (item) => {
    axios.delete(`/api/${url}${item.id}/`).then(this.refreshList());
  };

  createItem = () => {
    const item = {
      nome: "",
      email: "",
      cpf: "",
      rg: "",
      telefone: "",
      data_de_nascimento: "",
      endereço: "",
      professor: "",
    };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderTabList = () => {
    return <div className="nav nav-tabs"></div>;
  };

  renderItems = () => {
    const newItems = this.state.todoList;
    console.log("newItems", newItems);
    console.log("onye", Object.keys(newItems));
    console.log("entrie", Object.entries(newItems.values));

    return newItems.map((item, index) => (
      <table class="table">
        {index === 0 && (
        <thead>
          <tr>
            {Object.keys(item).map((_, index) => (
              <th scope="col">{Object.keys(item)[index]}</th>
            ))}
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>
          </tr>
        </thead>
        )}
        <tbody>
          <tr>
            {Object.keys(item).map((_, index) => (
              <td>{Object.entries(item)[index][1]}</td>
            ))}
            <td>
              {" "}
              <button
                className="btn btn-secondary mr-2"
                onClick={() => this.editItem(item)}
              >
                Editar
              </button>
            </td>
            <td>
              <>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(item)}
                >
                  Deletar
                </button>
              </>
            </td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              {Object.entries(item).map((i) => (
                <td>{i[1]}</td>
              ))}
            </div>

  
            <div>
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
            </div>
          </tr>
        </tbody> */}
        {/* <td>{item[Object.keys(item)[1]]}</td>
                          <td>{item[Object.keys(item)[2]]}</td> */}
        {/* <td>{Object.keys(item).length}</td> */}
      </table>
    ));
  };

  render() {
    return (
      <>
        <main className="container">
          <h1 className="text-black text-uppercase text-center my-4">
            Estudantes
          </h1>
          <div className="row">
            {/* <div className="col-md-6 col-sm-10 mx-auto p-0"> */}
            <div className="card p-3">
              {/* <div className="mb-4"> */}
              <button className="btn btn-primary" onClick={this.createItem}>
                Adicionar Estudantes
              </button>
              {/* </div> */}
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
            {/* </div> */}
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
