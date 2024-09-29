import axios from "axios";
import FakeCart from "../../components/Cart/FakeCart";
import { useEffect, useState } from "react";
const Cart = () => {
    const [apiData, editApiData] = useState([]);
    const [apiState, editApiState] = useState(false);
    const getdata = () => {
        axios({
            method: "get",
            url: "https://booming-odd-lark.glitch.me/users",
        }).then(({ data }) => {
            editApiData(data[0].cart);
            editApiState(true);
        });
    };
    useEffect(() => {
        getdata();
    }, [apiState]);
    return (
        <div className="flex flex-col gap-5 w-full h-full mt-10 select-none">
            {/* Title */}
            <div className="flex justify-center">
                <span>Shopping Cart</span>
            </div>
            {/* Parent of Product & Summary */}
            <div className="flex flex-row justify-between w-11/12 min-h-[100%]: m-auto ">
                <div className="flex flex-col w-full ">
                    <div className="flex justify-around w-11/12 m-auto my-4  font-bold">
                        <span className="w-16 text-center">Name</span>
                        <span className="w-16 text-center">Price</span>
                        <span className="w-[100px] text-center">Items</span>
                        <span className="w-16 text-center"></span>
                    </div>
                    {apiData.map((i, index) => {
                        return (
                            <div key={index}>
                                <FakeCart i={i} />
                            </div>
                        );
                    })}
                </div>
                <div className=" flex flex-col items-center gap-5 w-[350px] h-[400px] m-5 p-3 rounded-md shadow-xl">
                    <span className="my-3">Summary</span>
                    <hr className="w-11/12 text-black " />
                    <div className="flex justify-between w-11/12">
                        <span>Subtotal</span>
                        <span>$20</span>
                    </div>
                    <div className="flex justify-between w-11/12">
                        <span>Taxes</span>
                        <span>$3</span>
                    </div>
                    <div className="flex justify-between w-11/12">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr className="w-11/12 text-black " />
                    <div className="flex justify-between w-11/12 my-2">
                        <span>Total</span>
                        <span>$23.0</span>
                    </div>
                    <div>
                        <button className="w-full bg-black text-white py-3 px-20 rounded-lg text-sm">
                            CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
