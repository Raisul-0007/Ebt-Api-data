import { useContext, useState } from 'react'
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
const Product = () => {
    let info = useContext(ApiData)
    let [ipt, setIpt] = useState("")
    let [show,setShow] = useState([])
    
    let handletodo = (e)=>{
      setIpt(e.target.value)
    }
    let handleDelete = (e,index)=>{
      e.preventDefault()
      let newArray = [...show]
      newArray.splice(index,1)
      setShow(newArray)
    }
    
  return (
    <div>
      <div className="">
        <div className="flex">
          <input onChange={handletodo} className='bg-blue-300' type="text" />
          <button onClick={() => setShow([...show, ipt])}>Create</button>
        </div>
        <div className="flex gap-4">
          <div className="">
            <ul>
              {show.map((item, index) =>{
                return <li className='flex gap-5 py-2' key={index}>
                  {item} 
                  <button className='py-1 rounded-xl px-2 bg-blue-400' onClick={handleDelete}>delete</button>
                </li>
              })}
              
            </ul>
          </div>
        </div>

      </div>
        <div className="flex flex-wrap">
        {info.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className='lg:w-1/3 w-1/2 p-1 lg:p-3 relative'>
            <div >
            <div className="">
                <img className='w-[100%]' src={item.thumbnail} alt="" />
              <div className="font-dm lg:text-[16px] text-[12px] bg-[#262626] py-1 lg:px-3 px-1 absolute lg:top-[15px] lg:left-[15px] top-[5px] left-[5px] text-[#FFFFFF]">
              {item.discountPercentage}%
              </div>
            </div>
            <div className=" py-5">
              <div className="flex justify-between">
                <h3 className='font-dm lg:text-[16px] text-[12px]'>{item.title}</h3>
                <h2 className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>${item.price}</h2>
              </div>
              <div className="py-3">
                <p className='font-dm lg:text-[16px] text-[12px] text-[#767676]'>{item.category}</p>
              </div>
            </div>
          </div>
            </Link>
          ))}
          </div> 
    </div>
  )
}

export default Product
