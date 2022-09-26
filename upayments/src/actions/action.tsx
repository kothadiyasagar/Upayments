export const PRODUCT_REQUEST = "PRODUCT_REQUEST";
export const PRODUCT_LIKES = "PRODUCT_LIKES";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_LIKE = "PRODUCT_LIKE";
export const PRODUCT_DELETE = "PRODUCT_DELETE "
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

  export interface Id {
    id :string
  }
interface ProductAsync {
    loading : boolean;
    product : Product[];
    id : Id[];
    productId : []

}


interface FetchProductRequest extends ProductAsync {
    type: typeof PRODUCT_REQUEST;
  }
  interface FetchProductSuccess extends ProductAsync {
    type: typeof PRODUCT_SUCCESS;
  }

  interface FetchProductLike extends ProductAsync {
    type: typeof PRODUCT_LIKE;
  }
  interface FetchProductLikes extends ProductAsync {
    type: typeof PRODUCT_LIKES;
  }
  
  interface FetchTProductDelete extends ProductAsync {
    type: typeof PRODUCT_DELETE;
  }
  
  
  export  type ProductActionTypes =
    | FetchProductRequest
    | FetchProductSuccess
    |  FetchTProductDelete
    |FetchProductLike
    |FetchProductLikes