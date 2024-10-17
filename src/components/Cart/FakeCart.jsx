import { useState } from "react";

const FakeCart = ({ item, numOfItems, dele }) => {
    const [deleAnimation, edeleAnimation] = useState(false);
    return (
        <div className="flex flex-row flex-wrap overflow-hidden relative border-solid border-2 border-sky-500 rounded-md dark:text-white">
            <div
                className="relative z-10 flex justify-between items-center w-full h-28 rounded-md cxs:flex-col cxs:h-fit csm:flex-col csm:h-fit bg-white duration-300 dark:bg-backcolor"
                style={{
                    transform:
                        deleAnimation == item.code
                            ? "translateX(-100%)"
                            : "translateX(0)",
                }}>
                <div className="flex flex-col justify-start items-center gap-5 w-1/3 h-full cxs:justify-evenly cxs:w-full cxs:gap-0 cxs:h-32 csm:justify-evenly csm:w-full csm:gap-0 csm:h-32">
                    <span className="w-full text-center size-5 font-bold font-Inria cxs:w-fit csm:w-fit">
                        Product
                    </span>
                    <div className="flex justify-start items-center gap-2 cxs:w-4/6 cxs:flex-row-reverse cxs:justify-evenly csm:w-4/6 csm:flex-row-reverse csm:justify-evenly">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="size-16"
                        />
                        <span className="text-xl">{item.name}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-8 w-1/5 h-full cxs:justify-evenly cxs:w-full cxs:gap-0 cxs:h-20 csm:justify-evenly csm:w-full csm:gap-0 csm:h-20">
                    <span className="w-full text-center size-5 font-bold font-Inria cxs:w-fit csm:w-fit">
                        Price
                    </span>
                    <span className="text-xl">{item.price}</span>
                </div>
                <div className="flex flex-col justify-start items-center gap-6 w-1/5 h-full cxs:justify-evenly cxs:w-full cxs:gap-0 cxs:h-20 csm:justify-evenly csm:w-full csm:gap-0 csm:h-20">
                    <span className="w-full text-center size-5 font-bold font-Inria cxs:w-fit csm:w-fit">
                        Quantity
                    </span>
                    <div className="flex justify-evenly items-center w-full ">
                        <button
                            className="size-10 rounded-md bg-gray-200 dark:bg-maincolor dark:text-black"
                            onClick={() => {
                                numOfItems(item.code, "-");
                            }}>
                            -
                        </button>
                        <span className="text-xl">{item.count}</span>
                        <button
                            className="size-10 rounded-md bg-gray-200 dark:bg-maincolor dark:text-black"
                            onClick={() => numOfItems(item.code, "+")}>
                            +
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center gap-8 w-1/5 h-full cxs:justify-evenly cxs:w-full cxs:gap-0 cxs:h-20 cxs:mb-4 csm:justify-evenly csm:w-full csm:gap-0 csm:h-20 csm:mb-4">
                    <span className="w-full text-center size-5 font-bold font-Inria cxs:w-fit csm:w-fit">
                        Total
                    </span>
                    <span className="text-xl">{item.count * item.price}</span>
                </div>
                <div>
                    <button
                        className="flex justify-center items-center size-8 bg-gray-200 rounded-l-full cxs:rounded-t-full cxs:rounded-b-none csm:rounded-t-full csm:rounded-b-none dark:bg-maincolor dark:text-black"
                        onClick={() => {
                            edeleAnimation(item.code);
                            setTimeout(() => {
                                dele(item.code);
                            }, 500);
                        }}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            class="w-5 h-5"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex justify-end items-center absolute w-full h-28 bg-red-500 rounded-md csm:h-full cxs:h-full ">
                <svg
                    className="size-10 mr-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M20.5001 6H3.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"></path>{" "}
                        <path
                            d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"></path>{" "}
                        <path
                            d="M9.5 11L10 16"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"></path>{" "}
                        <path
                            d="M14.5 11L14 16"
                            stroke="#1C274C"
                            stroke-width="1.5"
                            stroke-linecap="round"></path>{" "}
                        <path
                            d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                            stroke="#1C274C"
                            stroke-width="1.5"></path>{" "}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default FakeCart;
