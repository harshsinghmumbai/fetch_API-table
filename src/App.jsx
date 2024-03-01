import { useEffect, useState } from "react";
import Userdata from "./Components/Userdata";
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [state, setState] = useState([]);
  const fetch_user = async (url) => {
    try {
      const raw = await fetch(url);
      const data = await raw.json();
      if (data.length > 0) {
        setState(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetch_user(API);
  });
  return (
    <>
      <table className=" bg-yellow-100  ">
        <thead>
          <tr>
            <th className="border-2 bg-red-200 p-1" >ID</th>
            <th className="border-2 bg-red-200 p-1" >Name</th>
            <th className="border-2 bg-red-200 p-1" >UserName</th>
            <th className="border-2 bg-red-200 p-1" >Email</th>
            <th className="border-2 bg-red-200 p-1" >Website</th>
            <th className="border-2 bg-red-200 p-1" >Address</th>
          </tr>
        </thead>
        <tbody>
          <Userdata states={state} />
        </tbody>
      </table>
    </>
  );
};

export default App;
