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
        <thead /* table head top*/>
          <tr /* table row */>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>ID</th>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>Name</th>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>UserName</th>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>Email</th>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>Website</th>
            <th className="border-2 bg-red-200 p-1" /* table row cell */>Address</th>
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
