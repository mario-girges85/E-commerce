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
//
import { useForm } from "react-hook-form";

const Profile = () => {
    const [userData, eUserData] = useState();
    const [fixedUserData, eFixedUserData] = useState();
    const [arrived, earrived] = useState(false);
    const [showInfo, eShowInfo] = useState(false);
    const [editMode, eEditMode] = useState(false);
    const [valid, eValid] = useState(false);

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    const postData = () => {
        axios({
            method: "patch",
            url: `${import.meta.env.VITE_API_URL_USERS}/${localStorage.id}`,
            data: userData,
        }).then(() => eValid(false));
    };

    useEffect(() => {
        axios({
            method: "get",
            url: `${import.meta.env.VITE_API_URL_USERS}/${localStorage.id}`,
        })
            .then(({ data }) => {
                eUserData(data);
                eFixedUserData(data);
                earrived(true);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    }, []);

    return (
        <div className="dark:bg-gray-900 py-5">
            {localStorage.id != undefined &&
            userData != undefined &&
            arrived ? (
                <div className="flex flex-col items-center gap-3">
                    <div>
                        <img
                            className="size-40 my-5"
                            src={
                                userData.gender == "male"
                                    ? maleImage
                                    : femaleImage
                            }
                            alt="UserImage"
                        />
                    </div>
                    {/* inputs */}
                    <div className="flex flex-col gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
                        <Input
                            label={
                                <span className="dark:text-white">
                                    First Name
                                </span>
                            }
                            value={userData.firstname}
                            onChange={(e) =>
                                eUserData({
                                    ...userData,
                                    firstname: e.target.value,
                                })
                            }
                            icon={
                                <FaRegUser className="size-4 dark:text-blue-400" />
                            }
                            readOnly={!editMode}
                            className="dark:text-blue-400 focus:border-blue-400"
                        />
                        <Input
                            label={
                                <span className="dark:text-white">
                                    Last Name
                                </span>
                            }
                            value={userData.lastname}
                            onChange={(e) =>
                                eUserData({
                                    ...userData,
                                    lastname: e.target.value,
                                })
                            }
                            icon={
                                <FaRegUser className="size-4 dark:text-blue-400" />
                            }
                            readOnly={!editMode}
                            className="dark:text-blue-400 focus:dark:border-blue-400"
                        />
                        <Input
                            label={
                                <span className="dark:text-white">E-mail</span>
                            }
                            value={userData.email}
                            onChange={(e) =>
                                eUserData({
                                    ...userData,
                                    email: e.target.value,
                                })
                            }
                            type={showInfo ? "text" : "password"}
                            icon={
                                <MdEmail className="size-4 dark:text-blue-400" />
                            }
                            readOnly={!editMode}
                            className="dark:text-blue-400 focus:dark:border-blue-400"
                        />
                        <Input
                            label={
                                <span className="dark:text-white">
                                    Password
                                </span>
                            }
                            value={userData.password}
                            onChange={(e) =>
                                eUserData({
                                    ...userData,
                                    password: e.target.value,
                                })
                            }
                            type={showInfo ? "text" : "password"}
                            icon={
                                <RiLockPasswordFill className="size-4 dark:text-blue-400" />
                            }
                            readOnly={!editMode}
                            className="dark:text-blue-400 focus:dark:border-blue-400"
                        />
                        <Input
                            label={
                                <span className="dark:text-white">
                                    Birthday
                                </span>
                            }
                            value={userData.birthday}
                            onChange={(e) =>
                                eUserData({
                                    ...userData,
                                    birthday: e.target.value,
                                })
                            }
                            type={showInfo ? "text" : "password"}
                            icon={
                                <FaBirthdayCake className="size-4 dark:text-blue-400" />
                            }
                            readOnly={!editMode}
                            className="dark:text-blue-400 focus:dark:border-blue-400"
                        />
                        {/* Gender */}
                        <div className="relative flex justify-evenly items-center">
                            <div
                                className={`absolute z-40 w-full h-full ${
                                    !editMode ? "block" : "hidden"
                                }`}></div>
                            <span className="dark:text-blue-400">Gender :</span>
                            <Radio
                                name="type"
                                label={
                                    <span className="dark:text-white">
                                        Male
                                    </span>
                                }
                                defaultChecked={
                                    userData.gender == "male" ? true : false
                                }
                                onChange={(e) =>
                                    eUserData({
                                        ...userData,
                                        gender: "male",
                                    })
                                }
                                className="dark:bg-white"
                                color="blue"
                            />
                            <Radio
                                name="type"
                                label={
                                    <span className="dark:text-white">
                                        Female
                                    </span>
                                }
                                defaultChecked={
                                    userData.gender == "female" ? true : false
                                }
                                onChange={(e) =>
                                    eUserData({
                                        ...userData,
                                        gender: "female",
                                    })
                                }
                                className="dark:bg-white"
                                color="blue"
                            />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex cxs:flex-col justify-evenly items-center cxs:gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
                        <Button
                            onClick={() => eShowInfo(!showInfo)}
                            color="green"
                            className="w-28 px-0 cxs:w-1/2">
                            Show Info
                        </Button>
                        <Button
                            onClick={() => {
                                editMode && valid ? postData() : "";
                                eEditMode(!editMode);
                            }}
                            color={editMode ? "green" : "black"}
                            className="w-28 px-0 cxs:w-1/2 dark:bg-blue-400">
                            {editMode ? "Confirm" : "Edit Profile"}
                        </Button>
                        <Button
                            onClick={() => {
                                eEditMode(!editMode);
                                eUserData(fixedUserData);
                            }}
                            className={`w-28 px-0 bg-red-500 cxs:w-1/2 ${
                                editMode ? "block" : "hidden"
                            }`}>
                            Cancel
                        </Button>
                    </div>
                </div>
            ) : localStorage.id != undefined &&
              userData == undefined &&
              !arrived ? (
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
