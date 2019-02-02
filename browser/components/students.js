import React, { Component } from "react";
import axios from "axios";

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  async componentDidMount() {
    const studentRes = await axios.get("/student");
    this.setState({ students: studentRes.data });
  }

  render() {
    const students = this.state.students;
    return (
      <div id="students">
        <h2>Name</h2>
        {students.map(student => (
          <div className="student" key={student.id}>
            <a>
              <h3>{student.fullName}</h3>
            </a>
          </div>
        ))}
      </div>
    );
  }
}
