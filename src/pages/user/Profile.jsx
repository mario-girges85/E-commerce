import React, { useEffect, useState } from "react";

const Profile = ({ userdata }) => {
  const [data, setdata] = useState();
  const getuserdata = () => {
    setdata(userdata);
  };
  useEffect(() => {
    if (data == undefined) {
      getuserdata();
    }
  }, [userdata]);
  console.log(data);

  return <div></div>;
};

export default Profile;
