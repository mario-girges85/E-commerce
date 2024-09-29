import React from "react";

const FakeCart = ({ i }) => {
    return (
        <div>
            <div className="flex justify-around items-center w-11/12 h-9 m-auto my-4 rounded-lg ">
                <span className="w-16 text-center">{i.name}</span>
                <span className="w-16 text-center">{i.price}</span>
                <span className="flex justify-around w-[100px] text-center">
                    <button className="w-6 text-red-400 text-3xl rounded-sm">
                        -
                    </button>
                    <span className="flex justify-center items-center text-xl">
                        {i.count}
                    </span>
                    <button className="w-6 text-green-400 text-3xl rounded-sm">
                        +
                    </button>
                </span>
                <div className="w-16">
                    <button className="w-6 text-red-600 text-2xl rounded-full">
                        x
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default FakeCart;
