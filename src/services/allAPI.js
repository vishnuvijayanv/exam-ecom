import { baseurl } from "./baseurl"
import  {commonAPI}  from "./commonAPI"


//add product
export const addProductAPI = async(reqBody)=>{
 return await commonAPI('POST',`${baseurl}/products`,reqBody)
}

//view product

export const getAllProduct = async()=>{
    return await commonAPI('GET',`${baseurl}/products`,'')
 }

 //delete product

 
export const deleteProduct = async(id)=>{
    return await commonAPI('DELETE',`${baseurl}/products/${id}`,{})
 }


 //search 
 