import axios from "axios";
import FakeCart from "../../components/Cart/FakeCart";
import { useEffect, useState } from "react";
import EmptyCartImage from "../images/Empty_Cart.svg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [apiData, editApiData] = useState([
    { count: 0, price: 0 },
    { count: 0, price: 0 },
  ]);
  const [apiempty, eapidempty] = useState(false);

  const navigate = useNavigate();
  const goproducts = (path) => {
    navigate(path);
  };

  const getdata = () => {
    axios({
      method: "get",
      url: `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
    })
      .then(({ data }) => {
        editApiData(data.cart);
        return data.cart;
      })
      .then((cart) => {
        cart.length == 0 ? eapidempty(false) : eapidempty(true);
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
    const total = apiData.reduce((item1, item2) => {
      return item1 + item2.price * item2.count;
    }, 0);
    return total;
  };
  return (
    <div className="flex flex-col gap-5 w-full h-fit select-none my-8 font-Inria">
      <div className="flex justify-center w-full">
        <span className="flex justify-center items-center w-fit size-12 font-bold">
          Shopping Cart
        </span>
      </div>
      <div className="flex flex-row justify-evenly w-full min-h-[100%] cxs:flex-col cxs:items-center csm:flex-col csm:items-center cmd:flex-col cmd:items-center clg:flex-col clg:items-center ">
        <div className="flex flex-col items-center w-11/12 cxl:w-2/3 c2xl:w-2/3 gap-7 cxs:mb-5">
          {apiempty ? (
            apiData.map((item, index) => {
              return (
                <div key={index} className="w-full">
                  <FakeCart item={item} numOfItems={numOfItems} dele={dele} />
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center gap-5 w-[500px] my-5  cxs:w-[300px] cxs:h-[300px]">
              <img
                src={EmptyCartImage}
                alt="Empty Cart Image"
                className=" w-[300px] h-[300px]"
              />
              <span className="font-bold">Cart is Feeling Light ?</span>
              <button
                onClick={() => {
                  goproducts("/products");
                }}
                className=" flex justify-center items-center w-1/2 h-10 text-center bg-black text-white rounded-lg text-sm cxs:py-[20px]"
              >
                Go Back to Products
              </button>
            </div>
          )}
        </div>
        <div
          className=" flex flex-col items-center gap-5 w-[350px] h-[400px] p-3 rounded-md shadow-xl cxs:w-11/12 csm:w-11/12 cmd:w-11/12 clg:w-11/12 cxl:w-[300px]"
          style={{
            display: apiempty ? "flex" : "none",
          }}
        >
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
            <span>{total() * 0.1 + total()}</span>
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
