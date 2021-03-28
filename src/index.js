import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const usersData = [
  { name: "Sarah", comment: "Its Amazing", date:"Today 5:00 AM" },
  { name: "Jack", comment: "Thats Good", date:"Today 6:00 AM"  },
  { name: "Robert", comment: "Awsome....!", date:"Today 7:00 AM"  },
];

const Data = () => {
  return usersData.map((element, index) => {
    return (
      <UserCard>
        <SingleComment key={element.name} name={element.name} comment={element.comment} date={element.date}/>
      </UserCard>
    );
  });
};

const App = () => {
  return (
    <div className="ui comments">
      <Data />

      <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">Just one second</div>
          <p>We're fetching that content for you.</p>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
