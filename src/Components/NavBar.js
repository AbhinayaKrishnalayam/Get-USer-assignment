import React from "react";

const NavBar = (props) => {
  const onClickHandler = () => {
    props.callback();
  };

  return (
    <div className="flex h-20 px-10 justify-between items-center bg-gradient-to-br from-cyan-500 to-blue-500 ">
      <div className="text-xl">
        <h1 className="font-bold text-white">User Grid </h1>
      </div>
      <button
        onClick={onClickHandler}
        className="bg-gradient-to-l from-fuchsia-700 to-blue-500 text-white outline outline-1 hover:bg-gray-200 font-bold py-2 px-4 rounded-lg hover:scale-105 transform transition"
      >
        Get Users
      </button>
    </div>
  );
};

export default NavBar;
