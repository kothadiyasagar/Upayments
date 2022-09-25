import { ProductActionTypes , PRODUCT_REQUEST, PRODUCT_CREATE , PRODUCT_SUCCESS,PRODUCT_LIKE,PRODUCT_DELETE} from "../actions/action"

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
   interface Id {
    id :string 
  }
   interface ProductState {
    loading : boolean;
    product : Product[]
    id : Id[]
   }

   const defaultState : ProductState = {
    loading : false ,
    product : [],
    id : []
   }

export  const productReducer = (

   
        state = defaultState,
        action: ProductActionTypes
      ): ProductState  =>{
        switch (action.type) {
            case  PRODUCT_REQUEST:
              return { ...state , loading:true };
            case PRODUCT_SUCCESS:
              return { ...state ,loading: false, product: action.product };
            case PRODUCT_LIKE:
              console.log("sagar",action.id)
              return {...state, loading: false ,id:action.id};
             case PRODUCT_DELETE:
                return  {...state ,product:action.product} 
            default:
              return state;
          }
        
      };