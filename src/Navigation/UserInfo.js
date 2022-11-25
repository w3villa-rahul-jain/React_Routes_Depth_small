import React from "react";
import "./UserInfo.scss";
import User from "./UserApi";



export default function UserInfo() {
  return (
    <div>
        <div className="user-grid">
        {User.map((u) => (
            <div className="user-container">
                <h3>{u.username}</h3>
                <h3>{u.profile}</h3>
                <p>{u.about}</p>
            </div>
      ))}       
        </div>
    </div>
  );
}



