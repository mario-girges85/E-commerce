import { useState } from "react";

const FakeCart = ({ item, numOfItems, dele }) => {
    const [deleAnimation, edeleAnimation] = useState(false);
    return (
        <div
            className="flex flex-row flex-wrap overflow-hidden relative border-solid border-2 border-sky-500 rounded-md duration-500 ease-in-out"
            style={{
                transform:
                    deleAnimation == item.code
                        ? "translateX(-100%)"
                        : "translateX(0)",
            }}>
            <div
                className="relative z-10 flex justify-between items-center w-full h-28 rounded-md cxs:flex-col cxs:h-fit csm:flex-col csm:h-fit bg-white duration-100 ease-in-out"
                style={{
                    transform:
                        deleAnimation == item.code
                            ? "translateX(-100%)"
                            : "translateX(0)",
                }}>
                <div className="flex flex-col justify-start items-center gap-5 w-1/5 h-full cxs:justify-evenly cxs:w-full cxs:gap-0 cxs:h-32 csm:justify-evenly csm:w-full csm:gap-0 csm:h-32">
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
                            className="size-10 rounded-md bg-gray-200"
                            onClick={() => {
                                numOfItems(item.code, "-");
                            }}>
                            -
                        </button>
                        <span className="text-xl">{item.count}</span>
                        <button
                            className="size-10 rounded-md bg-gray-200"
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
                        className="flex justify-center items-center size-8 bg-gray-200 rounded-l-full cxs:rounded-t-full cxs:rounded-b-none csm:rounded-t-full csm:rounded-b-none"
                        onClick={() => {
                            edeleAnimation(item.code);
                            setTimeout(() => {
                                dele(item.code);
                            }, 200);
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
            <div className=" absolute w-full h-28 bg-red-500 rounded-md csm:h-full cxs:h-full"></div>
        </div>
    );
};

export default FakeCart;
