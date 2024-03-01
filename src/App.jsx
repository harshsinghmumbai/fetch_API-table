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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
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
