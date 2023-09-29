import { createContext, useContext, useState } from "react"
import useFetch from "./useFetch"
const ProductsContext = createContext()

function ProductsProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    const addToCart = (product) => {
      setCartProducts([...cartProducts, product]);
    };
  
    const removeFromCart = (productId) => {
      setCartProducts(cartProducts.filter((product) => product.id !== productId));
    };
  
    const clearCart = () => {
      setCartProducts([]);
    };
  
  const state = useFetch('https://fakestoreapi.com/products')
    return(
        <ProductsContext.Provider value={{
            state:state,
            cartProducts,
            addToCart,
            removeFromCart,
            clearCart
            
        }}>
            {children}
        </ProductsContext.Provider>
        
    )
}

function useProducts() {
    const context = useContext(ProductsContext)
    return context
}

export {ProductsProvider,useProducts}