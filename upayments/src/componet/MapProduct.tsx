import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';

import { HeartSwitch } from '@anatoliygatt/heart-switch';
import {Navigate, useNavigate} from "react-router-dom";
import {like,likes} from "../../src/actions/ProductAction"

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

  interface Data {
    elem : Product
    getDelete : Function
    productData :Product[]
    setproductData : Function
  }
  interface Ids {
    id :[]
  }

const MapProduct = (props:Data) => {
  const navigate = useNavigate();
  const[fevoriteId, setFevoiteId] = useState<any>([])

  const id = useSelector((state:any) => state.product.id  );
  
  const   productId =useSelector((state:any) => state.product.productId  );
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();
  const {productData , setproductData, getDelete} = props
  const updateFavorite = ()=>{
    const updateId =  productId.find((like:string) => like ===props.elem._id);
    console.log(updateId,"43")
    if(updateId){
      setChecked(true)
    }


  }

  useEffect(()=>{
    updateFavorite()
  },[id])
  const updateId =  productId.find((like:string) => like ===props.elem._id);
  const  fevoriteProduvt = (event:any)=>{
   let appendId =event.target.checked

   if(appendId){
    let c : any= props.elem._id
    const apendIdData = productData.filter(function (elem,index){
      return elem._id.toString() == c.toString()
    })
      let d:any =  [...id,apendIdData]
      let pId = [...productId,c]
console.log(d)
   dispatch(likes(pId))
   dispatch(like(d))
   setChecked(true)
  //  console.log(id)
   console.log(productId,"producid56")
   }
   else {
    
    return
   }
    setChecked(event.target.checked);



     
   console.log(id)
  }

  return (
  <>
                 <div   className=" ml-7 w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
   
   <img  onClick={()=>{navigate(`/product/${props.elem._id}`)}} src={props.elem.avatar} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
   <div className="px-4 py-3 w-72">
     <span className="text-gray-400 mr-3 uppercase text-xs">{props.elem.name}</span>
    <p className="text-lg font-bold text-black truncate block capitalize">{props.elem.description.split(' ').splice(0, 10).join(' ')}...</p>
     <div className="flex items-center">
      <p className="text-lg font-semibold text-black cursor-auto my-3">${props.elem.price}</p>
      <del>
         <p className="text-sm text-gray-600 cursor-auto ml-2">${Number(props.elem.price)+200}</p>
       </del>
       { updateId ? 
       <div className="ml-auto">
       <HeartSwitch
size="sm"
inactiveTrackFillColor="#f59c9c"
inactiveTrackStrokeColor="#ee2222"
activeTrackFillColor="#d40606"
activeTrackStrokeColor="#b20808"
inactiveThumbColor="#ecfeff"
activeThumbColor="#ecfeff"
checked= {true}

 
/>
</div> : <div className="ml-auto">
                   <HeartSwitch
   size="sm"
   inactiveTrackFillColor="#f59c9c"
   inactiveTrackStrokeColor="#ee2222"
   activeTrackFillColor="#d40606"
   activeTrackStrokeColor="#b20808"
   inactiveThumbColor="#ecfeff"
   activeThumbColor="#ecfeff"
  checked={checked}
   onChange={(event:any) => {
    fevoriteProduvt(event)

   }} 
 />
       </div>}
       <div className="ml-auto">
        <img width="40px" style={{cursor:"pointer"}}   src ="https://cdn-icons-png.flaticon.com/512/166/166475.png"  onClick={()=>{getDelete(props.elem._id)}} />
       </div>
     </div>
   </div>

</div>
         </>
        )
   
 
  
}



export default MapProduct