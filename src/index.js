import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";

const usersData = [
  { name: "Sarah", comment: "Its Amazing" },
  { name: "Jack", comment: "Its Amazing" },
  { name: "Robert", comment: "Its Amazing" },
];

const App = () => {
  return (
    <div className="ui comments">
      <SingleComment name="Sarah" comment="Its Amazing"/>
      <SingleComment name="Jack" comment="Thats Good"/>
      <SingleComment name="Robert" comment="Awsome"/>

      <div class="ui icon message">
        <i class="notched circle loading icon"></i>
        <div class="content">
          <div class="header">Just one second</div>
          <p>We're fetching that content for you.</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
