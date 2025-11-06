import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    let productsId = useParams()
        let [product, setProduct] = useState([])

    let singleProduct = () => {
        axios.get(`https://dummyjson.com/products/${productsId.id}`).then((response) => {
            setProduct(response.data)
        })
    }


    useEffect(() => {
        singleProduct()
    }, [])
    return (
      <div>
        <div className="">
            <img className='w-1/4 mx-auto h-[300px]' src={product.thumbnail} alt="" />
            <h3 className='w-1/4 py-5 font-dm lg:text-[28px] text-[12px] mx-auto'>{product.title}</h3>
        </div>
        <div className=" font-dm lg:text-[24px] text-[12px] text-center">
            ${product.price}
        </div>
    </div>
  )
}

export default ProductDetails
