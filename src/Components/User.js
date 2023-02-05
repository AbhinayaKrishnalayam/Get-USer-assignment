import React from "react";

const User = (props) => {
  return (
    <div>
      <div className="flex h-72 w-64 flex-col rounded-xl shadow-lg hover:scale-105 transition">
        <div className="flex w-full h-24 rounded-t-xl bg-blue-500 "></div>

        <div className="flex justify-center ">
          <img
            alt="profile"
            src={props.userData.avatar}
            className="flex w-20 h-20 -mt-10 rounded-full outline outline-white"
          ></img>
        </div>

        <div className="bg-white">
          <div className="flex justify-center space-x-2 text-lg font-bold mt-2 ">
            <h6>{props.userData.first_name}</h6>

            <h6>{props.userData.last_name}</h6>
          </div>

          <div className="flex w-full justify-center items-center space-x-2 mt-5">
            <span className="h-fit pt-0.5">
              <img src={require("./Email.svg").default} alt="" />
            </span>
            <span className="h-fit">{props.userData.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
