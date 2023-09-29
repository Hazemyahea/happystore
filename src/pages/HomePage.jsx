import Nav from "../Nav"
import Products from "../components/Products"
import useFetch from "../components/useFetch"
import { createContext } from "react"
function HomePage() {
  const ProductsContext = createContext()
  const state = useFetch('https://fakestoreapi.com/products')
    return(
        
        <>
            <Nav />
            <Products />
        </>
           
        
        
    )
}

export default HomePage