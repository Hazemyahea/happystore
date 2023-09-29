import { useContext, useEffect, useReducer } from "react"
import { Link, useNavigate } from "react-router-dom"
import useFetch from "./useFetch"
import { useState } from "react"
import Product from "./Product"
import { useProducts } from "./ProductsProvider"
function Products() {
   const {state} = useProducts()
   let navigate = useNavigate();
   
    return(
        <>
            <div className="container text-center mt-5">
                <div className="row">
                {state.loading ? (
                            <div className="justify-content-center">
                            <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          </div>
                        ) : state.error ? (
                            <p className="alert alert-danger">{state.error}</p>
                        ) : (
                            state.products.map((product) => (
                            <div className="col mt-3" >
                                  <div className="card cursor" style={{width: "18rem"}} onClick={()=>navigate(`product/${product.id}`)}>
                                    <img src={product.image} className="img-thumbnail image" alt={product.title} />
                                    <div className="card-body">
                                    <h5 className="card-title">{product.title.slice(0,20)}</h5>
                                    <p className="card-text">{product.description.slice(0,100)}</p>
                                    <p className="card-text">{product.price}</p>
                                    <Link className="btn btn-success" to={`product/${product.id}`}>Go To Page</Link>
                                    </div>
                                </div>
                            </div>
                            ))
                        )}
                  
                </div>
            </div>
        </>
    )
}

export default Products

