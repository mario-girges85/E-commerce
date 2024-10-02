import axios from "axios";
import FakeCart from "../../components/Cart/FakeCart";
import { useEffect, useState } from "react";

const Cart = () => {
    const [apiData, editApiData] = useState([
        { count: 0, price: 0 },
        { count: 0, price: 0 },
    ]);
    const [apiempty, eapidempty] = useState(false);
    const getdata = () => {
        axios({
            method: "get",
            url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
        })
            .then(({ data }) => {
                editApiData(data.cart);
            })
            .then((cart) =>
                cart == [] ? eapidempty(false) : eapidempty(true)
            );
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
            url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
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
            url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
            data: {
                cart: newObj,
            },
        });
    };

    const total = () => {
        return apiData?.reduce((i, y) => i.count * i.price + y.count * y.price);
    };
    return (
        <div className="flex flex-col gap-5 w-full h-full select-none mt-8 ">
            {/* Title */}
            <div className="flex justify-center">
                <span>Shopping Cart</span>
            </div>
            {/* Parent of Product & Summary */}
            <div className="flex flex-row justify-between w-11/12 min-h-[100%] m-auto cxs:flex-col cxs:items-center csm:flex-col csm:items-center cmd:flex-col cmd:items-center ">
                <div className="flex flex-col w-full ">
                    <div
                        className="flex justify-around w-11/12 m-auto my-4 font-bold "
                        style={{
                            visibility: apiempty ? "visible" : "hidden",
                        }}>
                        <span className="w-16 text-center">Name</span>
                        <span className="w-16 text-center">Price</span>
                        <span className="w-[100px] text-center">Items</span>
                        <span className="w-16 text-center">Delete</span>
                        <span className="w-20 text-center">Total</span>
                    </div>
                    {apiempty ? (
                        apiData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <FakeCart
                                        item={item}
                                        numOfItems={numOfItems}
                                        dele={dele}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center mt-5">Cart is Empty</div>
                    )}
                </div>
                <div className=" flex flex-col items-center gap-5 w-[350px] h-[400px] m-5 p-3 rounded-md shadow-xl  cxs:w-11/12 csm:w-11/12 cmd:w-11/12">
                    <span className="my-3">Summary</span>
                    <hr className="w-11/12 text-black " />
                    <div className="flex justify-between w-11/12">
                        <span>Subtotal</span>
                        <span>{total()}</span>
                    </div>
                    <div className="flex justify-between w-11/12">
                        <span>Taxes</span>
                        <span>{total() * 0.1}</span>
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
