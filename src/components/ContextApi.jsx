import axios from 'axios'
import {createContext, useEffect, useState } from 'react'
const ApiData = createContext()
const ContextApi = ({children}) => {
    let [info,setInfo] = useState([])
    let getData = ()=>{
        axios.get("https://dummyjson.com/products")
        .then((e)=> {
            setInfo(e.data.products);
            
        })
    }
useEffect(()=>{
    getData()
},[])
  return (
    <div>
      <ApiData.Provider value={info}>{children}</ApiData.Provider>
    </div>
  )
}

export {ApiData,ContextApi}
