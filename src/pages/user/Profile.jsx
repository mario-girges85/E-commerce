import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Input, Radio, Spinner } from "@material-tailwind/react";
// images
import maleImage from "../images/man-user-circle-icon.svg";
import femaleImage from "../images/woman-user-circle-icon.svg";
// React Icons
import { FaRegUser, FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Profile = () => {
  const [userData, eUserData] = useState();
  const [arrived, earrived] = useState(false);
  const [showInfo, eShowInfo] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL_USERS}/${localStorage.id}`,
    })
      .then(({ data }) => {
        eUserData(data);
        earrived(true);
      })
      .catch(({ message }) => console.log(message));
  }, []);

  return (
    <div className="dark:bg-gray-900 py-5">
      {localStorage.id != undefined && userData != undefined && arrived ? (
        <div className="flex flex-col items-center gap-3">
          <div>
            <img
              className="size-40 my-5"
              src={userData.gender == "male" ? maleImage : femaleImage}
              alt="UserImage"
            />
          </div>
          <div className="flex flex-col gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
            <Input
              label={<span className="dark:text-white">First Name</span>}
              value={userData.firstname}
              icon={<FaRegUser className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Last Name</span>}
              value={userData.lastname}
              icon={<FaRegUser className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">E-mail</span>}
              value={userData.email}
              type={showInfo ? "text" : "password"}
              icon={<MdEmail className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Password</span>}
              value={userData.password}
              type={showInfo ? "text" : "password"}
              icon={
                <RiLockPasswordFill className="size-4 dark:text-blue-400" />
              }
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Birthday</span>}
              value={userData.birthday}
              type={showInfo ? "text" : "password"}
              icon={<FaBirthdayCake className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <div className="flex justify-evenly items-center">
              <span className="dark:text-blue-400">Gender :</span>
              <Radio
                name="type"
                label={<span className="dark:text-white">Male</span>}
                readOnly
                checked={userData.gender == "male" ? true : false}
                className="dark:bg-white"
                color="blue"
              />
              <Radio
                name="type"
                label={<span className="dark:text-white">Female</span>}
                readOnly
                checked={userData.gender == "female" ? true : false}
                className="dark:bg-white"
                color="blue"
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
            <Button
              onClick={() => {
                eShowInfo(!showInfo);
              }}
              className="w-28 px-0"
              color="green"
            >
              Show Info
            </Button>
            <Link to="/editprofile">
              <Button className="w-28 px-0 dark:text-maincolor dark:bg-backcolor">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      ) : localStorage.id != undefined && userData == undefined && !arrived ? (
        <div className="flex justify-center items-start h-svh">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-svh">
          <div>Please sign in First</div>
          <Link to="/login">
            <Button>Go To Log in</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
