import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import GreenAlert from "../components/GreenAlert"
import { useProducts } from "../components/ProductsProvider"
import RelatedProduct from "../components/RealtedProduct"
import useFetch from "../components/useFetch"
import Nav from "../Nav"
function ProductPage() {
    const [theid,setID] = useState()
    const [ShowGreen,setShowGreen] = useState(false)
    const [count, setCount] = useState(1);
    const {id} = useParams()
    useEffect(()=>{
        setID(id)
    },[id])
    const state = useFetch(`https://fakestoreapi.com/products/${id}`,theid)
    const {addToCart}  = useProducts()
   
    const producst = {
        id:id,
        title:state.products.title,
        description:state.products.description,
        price:state.products.price * count,
        image:state.products.image,
        count
      }
      const handleAddToCart = (producst) => {
        addToCart(producst);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setShowGreen(true)
            setTimeout(function() {
                setShowGreen(false)
            }, 2000);
      };
      function handleChange(event) {
        setCount(event.target.value)
      }
    return(
      <>
        {state.loading ? (
     <div className="justify-content-center">
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
   </div>
) : state.error ? (
    <p className="alert alert-danger">{state.error}</p>
) : (
    <>
          <Nav />
         {ShowGreen ? <div className="container pt-2">
            <GreenAlert>
                Product Added Succussfully ! 
            </GreenAlert>
         </div>:""}
<section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={state.products.image} alt="..." /></div>
            <div className="col-md-6">
                <div className="small mb-1">SKU: BST-498</div>
                <h1 className="display-5 fw-bolder">{state.products.title}</h1>
                <div className="fs-5 mb-5">
                    <span className="text-decoration-line-through">${state.products.price-10}</span>
                    <span>${state.products.price}</span>
                </div>
                <p className="lead">{state.products.description}</p>
                <div className="d-flex">
                    <input className="form-control text-center me-3" id="inputQuantity" type="num" style={{maxWidth: "3rem"}} onChange={handleChange} placeholder={1} />
                    <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={()=>handleAddToCart(producst)}>
                        <i className="bi-cart-fill me-1"></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
</>
 )}  
{state.products.category ? <RelatedProduct category={state.products.category} theid = {theid}/> : "Loading"}
 </>
    )
}


export default ProductPage