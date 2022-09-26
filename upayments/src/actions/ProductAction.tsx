import {ProductActionTypes}  from "../../src/actions/action"

import { PRODUCT_REQUEST, PRODUCT_LIKES , PRODUCT_SUCCESS,PRODUCT_LIKE,PRODUCT_DELETE } from "./action"


interface Product {
    _id :  string
    name:string
    avatar: string
    description: string
    price: number
    category: string
    developerEmail: string
    createdAt: string
    updatedAt: string
    __v: number
  }

  interface Id  {
    id : Array<any>
  }

 export const requestTodos = (): ProductActionTypes => ({
    type: PRODUCT_REQUEST,
    loading: true,
    product: [],
    id :[],
    productId : []
  });
 export const receiveTodos = (product: Product[]): ProductActionTypes => ({
    type:  PRODUCT_SUCCESS,
    loading: false,
    product: product,
    id:[],
    productId : []

  });
 export const daleteTodos = (product: Product[]): ProductActionTypes => ({
    type: PRODUCT_DELETE ,
    loading: false,
    product: product,
    id:[],
    productId : []
  
 
  });

export  const like = (id:any):ProductActionTypes => ({
    type:  PRODUCT_LIKE,
    loading: false,
    product: [],
    id:id,
    productId : []
  })

  export  const likes = (productId:any):ProductActionTypes => ({
    type:  PRODUCT_LIKES,
    loading: false,
    product: [],
    id:[],
    productId : productId
  })