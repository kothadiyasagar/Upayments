
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import "../../pages/home/home.css"
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
interface ProductData {
  elem : Product
}
const Favorite = () => {
  const id = useSelector((state:any) => state.product.id  );

  return (
 <>
  <div className=' m-10 text-center text-2xl text-blue-600 text-bold'> <h1>Favorite product</h1></div>
    { id && (<div  id='mapdatas'  >
        {
          id.map(function(elem:any  ,index:any){
          // console.log(elem,"m cffpd")
           return (
            <>
       
       <div   className=" ml-7 w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
   
   <img   src={elem[0].avatar} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
   <div className="px-4 py-3 w-72">
     <span className="text-gray-400 mr-3 uppercase text-xs">{elem[0].name}</span>
    <p className="text-lg font-bold text-black truncate block capitalize">{elem[0].description.split(' ').splice(0, 10).join(' ')}...</p>
     <div className="flex items-center">
      <p className="text-lg font-semibold text-black cursor-auto my-3">${elem[0].price}</p>
      <del>
         <p className="text-sm text-gray-600 cursor-auto ml-2">${Number(elem[0].price)+200}</p>
       </del>
 
       <div className="ml-auto">
        <img width="40px" style={{cursor:"pointer"}}   src ="https://cdn-icons-png.flaticon.com/512/166/166475.png"   />
       </div>
     </div>
   </div>

</div>
      
            </>
           )
         })
        }
       </div>) }
 </>
  )
}

export default Favorite