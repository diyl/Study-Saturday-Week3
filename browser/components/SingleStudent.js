import React from "react";

const SingleStudent = props => {
  // const { tests } = props;
  // const { subject, grade } = tests;

  return (
    <div id="single-test">
      <table>
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

module.exports = SingleStudent;
