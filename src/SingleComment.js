import React from "react";
import picture from "./image/anonim.png";

const SingleComment = (hell) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={picture} alt="profile picture" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {hell.name}
        </a>
        <div className="metadata">
          <span>{hell.date}</span>
        </div>
        <div className="text">{hell.comment}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;