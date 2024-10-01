import axios from "axios";
import FakeCart from "../components/FakeCart.jsx";
import { useEffect, useState } from "react";

// Important
// Note : the code runs on the first user in api to make it daynamic
// i will need a prameter from APP.jsx to tell me who is signed in use & his ID
// Beshoy ^^

const Cart = () => {
    const [apiData, editApiData] = useState([]);

    const getdata = () => {
        axios({
            method: "get",
            url: "https://booming-odd-lark.glitch.me/users/1",
        }).then(({ data }) => {
            editApiData(data.cart);
        });
    };

    useEffect(() => {
        getdata();
    }, []);

    const numOfItems = (idOfitem, sign) => {
        let selectedItem = apiData[idOfitem - 1];
        sign == "-"
            ? selectedItem.count > 1
                ? (selectedItem.count -= 1)
                : selectedItem.count
            : (selectedItem.count += 1);
        let fullcart = [...apiData];
        fullcart[idOfitem - 1] = selectedItem;
        editApiData(fullcart);
        axios({
            method: "patch",
            url: "https://booming-odd-lark.glitch.me/users/1",
            data: {
                cart: fullcart,
            },
        });
    };

    const dele = (idOfitem) => {
        let temp = apiData;
        let newObj = temp.filter((item) => item.id != idOfitem);
        editApiData(newObj);
        axios({
            method: "patch",
            url: "https://booming-odd-lark.glitch.me/users/1",
            data: {
                cart: newObj,
            },
        });
    };

    return (
        <div className="flex flex-col gap-5 w-full h-full select-none">
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
                        <span className="w-16 text-center">Delete</span>
                        <span className="w-20 text-center">Total</span>
                    </div>
                    {apiData.map((item, index) => {
                        return (
                            <div key={index}>
                                <FakeCart
                                    item={item}
                                    numOfItems={numOfItems}
                                    dele={dele}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className=" flex flex-col items-center gap-5 w-[350px] h-[400px] m-5 p-3 rounded-md shadow-xl">
                    <span className="my-3">Summary</span>
                    <hr className="w-11/12 text-black " />
                    <div className="flex justify-between w-11/12">
                        <span>Subtotal</span>
                        <span>{}</span>
                    </div>
                    <div className="flex justify-between w-11/12">
                        <span>Taxes</span>
                        <span>0</span>
                    </div>
                    <div className="flex justify-between w-11/12">
                        <span>Shipping</span>
                        <span>FREE</span>
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
