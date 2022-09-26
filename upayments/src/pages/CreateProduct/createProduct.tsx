import React, { useState } from "react";
import axios from "axios";
import { API } from "../../pages/home/home";
const CreateProduct = () => {
  const [create, setCreate] = useState({
    name: "",
    avatar: "",
    price: Number(),

    createdAt: new Date().toISOString(),
    category: "",
    description: "",
    developerEmail: "",
    __v: 0,
  });
  const [peoductCreate, setPeoductCreate] = useState({});
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmVzaGJoYWlrb3RoYWRpeWE1MDRAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2tvdGhhZGl5YXNhZ2FyIiwiaWF0IjoxNjY0MDAxNTEwLCJleHAiOjE2NjQ0MzM1MTB9.j0MzuKov8yCWWBUQ-QYHZPW5xv_JVV2rmZypWhSW8vk";
  const addData = async () => {
    setPeoductCreate({ ...peoductCreate, ...create });
  

    let data = await API.post("", create);
 
  };

  const handlechange = (e: any) => {
    setCreate({ ...create, [e.target.name]: e.target.value });

  };
  const handlesubmit = (e: any) => {
    e.preventDefault();

    addData();
  };

  return (
    <div
      style={{
        width: "auto",
        margin: "20px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <form
        onSubmit={(e) => {
          handlesubmit(e);
        }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-blue-500 font-bold">Creact Product</h1>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Avatar
          </label>
          <input
            onChange={(e) => {
              handlechange(e);
            }}
            name="avatar"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="avatarUrl"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            onChange={(e) => {
              handlechange(e);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            onChange={(e) => {
              handlechange(e);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="number"
            name="price"
            placeholder="price"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            name="category"
            onChange={(e) => {
              handlechange(e);
            }}
            className='form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example'
          >
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
            <option value="Furniture">Furniture</option>
            <option value="Hobby">Hobby</option>
          </select>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripition
          </label>
          <textarea
            onChange={(e) => {
              handlechange(e);
            }}
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Descripition"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            DeveloperEmail
          </label>
          <input
            onChange={(e) => {
              handlechange(e);
            }}
            name="developerEmail"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="developerEmail"
          />
        </div>
        <button
          type="submit"
          className="group relative w-50 flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
        >
          CreateProduct
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
