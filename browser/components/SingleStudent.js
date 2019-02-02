import React from "react";
import axios from "axios";

export default class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {
        testScore: []
      }
    };
  }

  async componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <div />;
  }
}
