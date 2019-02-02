import React from "react";
import axios from "axios";
import SingleStudent from "./SingleStudent";

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    // console.log("fetching");
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log(this.state.students, "student list****");
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            {this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td onClick={() => console.log("hello")}>Details</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
