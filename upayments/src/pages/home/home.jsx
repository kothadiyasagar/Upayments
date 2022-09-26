import React, { Fragment, useEffect, useState } from "react";

import { HeartSwitch } from "@anatoliygatt/heart-switch";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  receiveTodos,
  daleteTodos,
  requestTodos,
} from "../../actions/ProductAction";

import "../../pages/home/home.css";
import MapProduct from "../../componet/MapProduct";
import { Navigate, useNavigate } from "react-router-dom";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpbmVzaGJoYWlrb3RoYWRpeWE1MDRAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL2tvdGhhZGl5YXNhZ2FyIiwiaWF0IjoxNjY0MDAxNTEwLCJleHAiOjE2NjQ0MzM1MTB9.j0MzuKov8yCWWBUQ-QYHZPW5xv_JVV2rmZypWhSW8vk";
export const API = axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api/products",
});
const APIC = axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api/categories",
});
API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${token}`;

  return req;
});
APIC.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${token}`;

  return req;
});

function Home() {
  const navigate = useNavigate();
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [productData, setproductData] = useState([]);
  const [filter, setfilters] = useState([]);
  const categoryOpts = filter?.map((category, index) => (
    <option key={`cat-option-${index}`} value={category.name}>
      {category.name}
    </option>
  ));


  const onChange = (e) => {
    let datafilter = e.target.value;
    if (!datafilter) {
      getData();
    } else {
      const data = productData.filter(function (elem, index) {
        return elem.category === datafilter;
      });

      setproductData([...data]);
    }
  };

  const getDelete = (id) => {
    const data = productData.filter(function (elem, index) {
      return elem._id.toString() != id.toString();
    });
    dispatch(daleteTodos(data));
    setproductData([...data]);
  };

  const getData = async () => {
    let data = await API.get("");

    dispatch(receiveTodos(data.data.products));
    setproductData([...data.data.products]);
  };
  const getCategory = async () => {
    let data = await APIC.get("");

    setfilters([...data.data.categories]);

  };

  useEffect(() => {
    dispatch(requestTodos());
    getData();
    getCategory();
  }, []);

  return (
    <>
      <div className="maindiv">
        <div className=" flex justify-center  grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 mt-10 mb-10">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <from>
                <select
                  onChange={(e) => {
                    onChange(e);
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
                  <option value="">filter by Category</option>
                  {categoryOpts}
                </select>
              </from>
            </div>
          </div>
          <button
            onClick={() => navigate("/product/create")}
            class=" w-20.5 h-10  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Create Product
          </button>
          <button
            onClick={() => navigate("/productfavorites")}
            class="  w-20.5 h-10  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Favorite
          </button>
        </div>
        {product.product.loading ? (
          "loading...."
        ) : (
          <div id="mapdata">
            {productData.map(function (elem, index) {
              return (
                <>
                  <MapProduct
                    key={elem._id}
                    elem={elem}
                    productData={productData}
                    setproductData={setproductData}
                    getDelete={(elem_id) => {
                      getDelete(elem_id);
                    }}
                  />
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
