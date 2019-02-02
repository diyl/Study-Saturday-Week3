import React from "react";
import axios from "axios";

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
    console.log("fetching");
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
