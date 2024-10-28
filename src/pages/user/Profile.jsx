import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
  const api_users = import.meta.env.VITE_API_URL_USERS;
  const [data, setdata] = useState(null);

  const getuserdata = () => {
    axios.get(`${api_users}/${localStorage.id}`).then(({ data }) => {
      setdata(data);
    });
  };
  useEffect(() => {
    if (data == null) {
      getuserdata();
    }
    console.log(data);
  }, [data]);

  return <div></div>;
};

export default Profile;
