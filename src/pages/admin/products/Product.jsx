import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Product = ({ product, deleteProduct }) => {
  const { id, name, price, category } = product;

  return (
    <tr key={id} className="border-b border-gray-200 text-center">
      <td className="py-3">{name}</td>
      <td className="py-3">{price}</td>
      <td className="py-3">{category}</td>
      <td className="px-4 py-3 flex flex-col lg:flex-row justify-center gap-y-1">
        <Link to={`/admin/dashboard/products/edit/${id}`}>
          <Button color="amber" className="mx-1">
            Edit
          </Button>
        </Link>
        <Link to={`/admin/dashboard/products/view/${id}`}>
          <Button color="blue" className="mx-1">
            View
          </Button>
        </Link>
        <Button color="red" onClick={() => deleteProduct(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Product;
