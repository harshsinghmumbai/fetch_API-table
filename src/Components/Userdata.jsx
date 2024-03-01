const Userdata = ({ states }) => {
  //   console.log(states);
  return (
    <>
      {states.map((elm, i) => {
        const { id, name, username, email, website} = elm;
        const { street, city, zipcode } = elm.address;
        return (
          <tr key={i}>
            <td className="p-2 border-2 border-red-600">{id}</td>
            <td className="p-2 border-2 border-red-600">{name}</td>
            <td className="p-2 border-2 border-red-600">{username}</td>
            <td className="p-2 border-2 border-red-600">{email}</td>
            <td className="p-2 border-2 border-red-600">{website}</td>
            <td className="p-2 border-2 border-red-600">
              {street},{city},{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Userdata;
