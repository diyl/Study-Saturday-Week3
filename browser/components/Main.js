import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";
import { HashRouter, Route } from "react-router-dom";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      report: {}
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
    // console.log(this.state.student);
    return (
      <div>
        <StudentList />
        <SingleStudent />
      </div>
    );
  }
}
