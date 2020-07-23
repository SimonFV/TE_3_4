
import React, { Component } from 'react';
import './App.css';

//const apiUrl = `http://localhost:3000`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      age: 0
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get all entities - GET

  }

  create(e) {
    // add entity - POST
    e.preventDefault();

  }

  update(e) {
    // update entity - PUT
    e.preventDefault();

  }

  delete(e) {
    // delete entity - DELETE
    e.preventDefault();

  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">Make An API Call in React</h1>
            <form className="d-flex flex-column">
              <legend className="text-center">Add-Update-Delete Friend</legend>
              <label htmlFor="name">
                Friend Name:
                  <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                  required
                />
              </label>
              <label htmlFor="notes">
                Friend notes:
                  <input
                  name="notes"
                  id="notes"
                  type="test"
                  className="form-control"
                  value={this.state.notes}
                  onChange={(e) => this.handleChange({ notes: e.target.value })}
                  required
                />
              </label>
              <label htmlFor="id">
                Friend ID:
                  <input
                  name="id"
                  id="id"
                  type="text"
                  className="form-control"
                  value={this.state.id}
                  onChange={(e) => this.handleChange({ id: e.target.value })}
                />
              </label>
              <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                Add
                </button>
              <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                Update
                </button>
              <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
                Delete
                </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;