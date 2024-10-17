import axios from "axios";
import FakeCart from "../../components/Cart/FakeCart";
import { useEffect, useState } from "react";
import EmptyCartImage from "../images/Empty_Cart.svg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const Cart = () => {
  const [apiData, editApiData] = useState([]);
  const [arrived, earrived] = useState(false);
  const navigate = useNavigate();
  const goproducts = (path) => {
    navigate(path);
  };

  const getdata = () => {
    axios({
      method: "get",
      url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
    }).then(({ data }) => {
      editApiData(data.cart);
      earrived(true);
      return data.cart;
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const postData = (newcart) => {
    axios({
      method: "patch",
      url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
      data: {
        cart: newcart,
      },
    });
  };

  const numOfItems = (codeOfitem, sign) => {
    let temp = [...apiData];
    const newarray = temp.map((item) => {
      item.code == codeOfitem && sign == "+"
        ? (item.count += 1)
        : item.code == codeOfitem && sign == "-"
        ? item.count > 1
          ? (item.count -= 1)
          : item.count
        : item;
      return item;
    });
    editApiData(newarray);
    postData(newarray);
  };

  const dele = (codeOfitem) => {
    let temp = apiData;
    let newObj = temp.filter((item) => item.code != codeOfitem);
    editApiData(newObj);
    postData(newObj);
  };

  const total = () => {
    const total = apiData.reduce((item1, item2) => {
      return item1 + item2.price * item2.count;
    }, 0);
    return total;
  };
  return (
    <div className="flex flex-col gap-5 w-full h-fit py-5 select-none font-Inria dark:bg-backcolor">
      {/* Heding */}
      <div className="flex justify-center w-full">
        <span className="flex justify-center items-center w-fit size-12 mt-5 font-bold dark:text-maincolor">
          Shopping Cart
        </span>
      </div>
      {/* Parent */}
      <div className="flex flex-row justify-evenly w-full min-h-[100%] cxs:flex-col cxs:items-center csm:flex-col csm:items-center cmd:flex-col cmd:items-center clg:flex-col clg:items-center ">
        {/* Items */}
        <div className="flex flex-col items-center w-11/12 cxl:w-2/3 c2xl:w-2/3 gap-7 cxs:mb-5">
          {apiData.length == 0 && !arrived ? (
            <div className="flex justify-center items-start h-[500px]">
              <Spinner className="h-12 w-12" />
            </div>
          ) : apiData.length == 0 && arrived ? (
            <div className="flex flex-col items-center gap-5 w-[500px] my-5  cxs:w-[300px] cxs:h-[300px]">
              <img
                src={EmptyCartImage}
                alt="Empty Cart Image"
                className=" w-[300px] h-[300px]"
              />
              <span className="font-bold dark:text-maincolor">
                Cart is Feeling Light ?
              </span>
              <button
                onClick={() => {
                  goproducts("/products");
                }}
                className=" flex justify-center items-center w-1/2 h-10 text-center bg-black text-white rounded-lg text-sm cxs:py-[20px]"
              >
                Go Back to Products
              </button>
            </div>
          ) : apiData.length != 0 && arrived ? (
            apiData.map((item, index) => (
              <div key={index} className="w-full">
                <FakeCart item={item} numOfItems={numOfItems} dele={dele} />
              </div>
            ))
          ) : (
            ""
          )}
        </div>
        {/* Checkout */}
        <div
          className="sticky top-1/4 flex flex-col items-center gap-5 w-[350px] h-[400px] p-3 rounded-md shadow-xl cxs:w-11/12 csm:w-11/12 cmd:w-11/12 clg:w-11/12 cxl:w-[300px] dark:outline-white dark:outline cxs:my-5 csm:my-5 cmd:my-5 clg:my-5"
          style={{
            display: apiData.length != 0 && arrived ? "flex" : "none",
          }}
        >
          <span className=" my-3 font-extrabold dark:text-maincolor">
            Summary
          </span>
          <hr className="w-11/12 text-black " />
          <div className="flex justify-between w-11/12 dark:text-white">
            <span>Subtotal</span>
            <span>{total()}</span>
          </div>
          <div className="flex justify-between w-11/12 dark:text-white">
            <span>Taxes</span>
            <span>{total() * 0.1}</span>
          </div>
          <div className="flex justify-between w-11/12 dark:text-white">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <hr className="w-11/12 text-black " />
          <div className="flex justify-between w-11/12 my-2 dark:text-white">
            <span>Total</span>
            <span>{total() * 0.1 + total()}</span>
          </div>
          <div>
            <button className="w-full bg-black text-white py-3 px-20 rounded-lg text-sm dark:bg-maincolor dark:text-black">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
