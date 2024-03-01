const Userdata = ({ states }) => {
  //   console.log(states);
  return (
    <>
      {states.map((elm, i) => {
        const { id, name, username, email, website, address } = elm;
        const { street, city, zipcode } = elm.address;
        return (
          <tr key={i}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{website}</td>
            <td>
              {street},{city},{zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Userdata;
