import React, {useState} from "react";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      user: { id: 72, name: "John", email: "john@example.com" },
      order: { id: 31, title: "phone", price: 8900, quantity: 3 },
    },
    {
      id: 2,
      user: { id: 48, name: "John", email: "john@example.com" },
      order: { id: 8, title: "phone", price: 8900, quantity: 2 },
    },
  ]);

  return (
    <div className="container mx-auto p-4 my-5 md:p-6 lg:p-8 xl:p-10">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row md:justify-between items-center mb-8 mt-5 md:mb-10 md:mt-8 lg:mb-15">
        <h1 className="text-3xl font-bold text-center mb-5 md:mb-0">
          Orders Management
        </h1>
      </div>
        <table className="w-full mx-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 w-screen">
              <th className="py-3 w-1/6">Name</th>
              <th className="py-3 w-1/6">Email</th>
              <th className="py-3 w-1/6">Order</th>
              <th className="py-3 w-1/6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order key={order.id} order={order}/>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Orders;
