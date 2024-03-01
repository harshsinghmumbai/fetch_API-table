const Userdata = ({ states }) => {
  //   console.log(states);
  return (
    <>
      {states.map((elm, i) => {
        const { id, name, username, email, website} = elm;
        const { street, city, zipcode } = elm.address;
        return (
          <tr key={i} /* table row */>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>{id}</td>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>{name}</td>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>{username}</td>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>{email}</td>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>{website}</td>
            <td className="p-2 border-2 border-red-600" /* tbody row cell */>
              {street},{city},{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Userdata;
