import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addProductAPI } from '../services/allAPI';
function Dashboard() {

    const [productData,setProductData] = useState({
        productId:"",
        productName:"",
        productCategory:"",
        productImage:"",
        productDescription:"",
        price:""
    })

console.log(productData);

const handleClear =()=>{
    setProductData({
        productId:"",
        productName:"",
        productCategory:"",
        productImage:"",
        productDescription:"",
        price:""
    })
}


const  addPoduct = async()=>{
    const {productId,productName,productCategory,productImage,productDescription,price} = productData

    if (!productId || !productName || !productCategory || !productImage || !productDescription || !price) {
        alert("Please fill all Details")
        
    }
    else{
        const result =  await addProductAPI(productData)
        console.log(result);
        if (result.status>=200&& result.status<=299) {
            alert("product added successfully")
            handleClear()
            
        }
        else{
            alert("please try again")
        }
    }
}
  return (
    <div>
        
        <div className="row">
            <div className="col-lg-2 flex-column p-5 "  style={{height:'720px',backgroundColor:'green'}}>
                <Link to={'/'} className='mb-5' style={{textDecoration:'none',color:'white'}}><h4 className='d-flex '><i class="fa-solid fa-bars me-3"></i>Dashboard</h4></Link>

                <Link to={'/products'}  style={{textDecoration:'none',color:'black'}}><h4 className='d-flex mt-4'><i class="fa-brands fa-product-hunt me-3"></i>ProductList</h4></Link>

            </div>
           {/* <div ><h1 className='text-warning'>DashBoard</h1></div> */}
            <div className="col-lg-8 d-flex justify-content-center align-items-center">

                <div className='flex-column border shadow w-100 ms-5 p-5'>
                    <h3>Add Product Details</h3>
                    <input type="text" placeholder='Product ID' className='form-control w-100 mt-3' value={productData.productId} onChange={(e)=>setProductData({...productData,productId:e.target.value})}/>
                    <input type="text" placeholder='Name' className='form-control w-100 mt-3' value={productData.productName} onChange={(e)=>setProductData({...productData,productName:e.target.value})} />
                    <input type="text" placeholder='Category' className='form-control w-100 mt-3' value={productData.productCategory} onChange={(e)=>setProductData({...productData,productCategory:e.target.value})} />
                    <input type="text" placeholder='Image URL' className='form-control w-100 mt-3' value={productData.productImage} onChange={(e)=>setProductData({...productData,productImage:e.target.value})}/>
                    <input type="text" placeholder='Description' className='form-control w-100 mt-3' value={productData.productDescription} onChange={(e)=>setProductData({...productData,productDescription:e.target.value})}/>
                    <input type="text" placeholder='Price' className='form-control w-100 mt-3' value={productData.price} onChange={(e)=>setProductData({...productData,price:e.target.value})} />
                    <div className='d-flex p-3'>
                        <button className='btn bg-warning me-3' onClick={handleClear}>Cancel</button>
                        <button className='btn bg-success' onClick={addPoduct}>Add</button>
                    </div >




                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard