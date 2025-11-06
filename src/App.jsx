import React from 'react'
import Product from './components/Product'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'

let router = createBrowserRouter(createRoutesFromElements(
 <Route>
  <Route path='/' element={<Product/>}/>
  <Route path='/product/:id' element={<ProductDetails/>}/>
 </Route>
))

const App = () => {
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
