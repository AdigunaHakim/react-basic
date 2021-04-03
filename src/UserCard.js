import React from "react";

const UserCard = (props) => {
  console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.children.props.name} {' Wilshare'}</div>
        <div className="description">
            { props.children }
        </div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  );
};

export default UserCard;