import React from "react";
import picture from "./image/anonim.png";

const SingleComment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={picture} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span> Today 5:00 AM</span>
        </div>
        <div className="text">{props.comment}</div>
        <div class="actions">
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;