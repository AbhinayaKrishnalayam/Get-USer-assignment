import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import User from "./Components/User";

function App() {
  const [data, setData] = useState(null);

  const fetchDetail = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1 ");
    const myData = await response.json();
    setData(myData);
  };

  const callback = () => {
    fetchDetail();
  };

  return (
    <div className="h-screen relative w-screen ">
      <div className="fixed left-0 right-0 top-0">
        <NavBar callback={callback} />
      </div>
      
      <div className="flex items-center justify-center py-10 px-10  h-full mt-20 ">
        {data == null ? (
          <div className="flex justify-center w-full h-full ">
            <p className="border px-5 py-5 rounded-xl mt-16 h-fit">
              Please click on Get User button to display user cards
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full justify-items-center w-full grow">
            {data.data.map((value) => (
              <User key={value.id} userData={value} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
