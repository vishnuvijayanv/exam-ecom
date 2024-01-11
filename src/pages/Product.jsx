import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteProduct, getAllProduct } from '../services/allAPI';
function Product() {
    const [products ,setProducts] = useState({})
    const [search ,setSearch] = useState("")
console.log(search);
    const getAllProducts =async()=>{
        const result = await getAllProduct()
        console.log(result);
        setProducts(result.data)
       
    }
    console.log(products);
    useEffect(()=>{
        getAllProducts()
    },[])


    if (products.productCategory == search) {
        console.log(products.filter(item=>item.productCategory.toLowerCase().includes(search.toLowerCase())));
        
    }



    
    

    const handleDelete = async(id)=>{
        const result = await deleteProduct(id)
        console.log(result);
        if (result.status>=200&& result.status<=299) {
            alert("product Deleted successfully")
          getAllProduct()
            
        }
        else{
            alert("please try again")
        }

    }


    

    
  return (
    <div>
        <div className="row">
            <div className="col-lg-2 flex-column p-5 "  style={{height:'720px',backgroundColor:'green'}}>
                <Link to={'/'} className='mb-5' style={{textDecoration:'none',color:'black'}}><h4 className='d-flex '><i class="fa-solid fa-bars me-3"></i>Dashboard</h4></Link>

                <Link to={'/products'}  style={{textDecoration:'none',color:'white'}}><h4 className='d-flex mt-4'><i class="fa-brands fa-product-hunt me-3"></i>ProductList</h4></Link>

            </div>
            <div className="col-lg-8 ms-5 mt-5">
               
               <div className='row'>
                    <h2 className='text-warning'>Products List</h2>
                    <input type="text" className='form-control mb-4' onChange={(e)=>setSearch(e.target.value)} placeholder='search Category'/>
                    <div>
                    <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Product  Name</th>
              <th>Category</th>
              <th>image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Delete</th>
    
            </tr>
          </thead>
          <tbody>
            {
                products?.length>0?
                products.map((item)=>(
                    <tr>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>{item.productCategory}</td>
              <td><img src={item.productImage} alt=""  width={"100px"} height={"75px"}/></td>
              <td>{item.productDescription}</td>
    
              <td>{item.price}</td>
    
              <td className='text-danger'><button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
            </tr>
                )):
                <p>Nothing to display</p>
            }
          </tbody>
        </Table>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Product