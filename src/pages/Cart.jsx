import { useEffect } from "react"
import { useContext, useState } from "react"
import { useProducts } from "../components/ProductsProvider"
import Nav from "../Nav"
import { useNavigate } from "react-router-dom"
function Cart() {
  const {cartProducts,removeFromCart,clearCart}  = useProducts()
  const [totalPrice, setTotalPrice] = useState(0);
  let navigate = useNavigate();
  useEffect(() => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, [cartProducts]);

  function FinalHandler() {
    if (cartProducts.length == 0) {
      alert('No Products in Cart !')
    }else{
      if (confirm("Are You Sure ?") == true) {
        clearCart()
        navigate('/paid')
      } 
    }
  }
    return(
        <>
        <Nav />
        
            <section className="h-100 h-custom" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">

            <div className="row">

              <div className="col-lg-7">
                <h5 className="mb-3">Continue shopping</h5>
                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    <p className="mb-0">You have {cartProducts.length} items in your cart</p>
                  </div>
                  
                </div>

                {cartProducts.map((product)=>{
                  return(
                  <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={product.image}
                            className="img-fluid rounded-3" alt="Shopping item" style={{width: "65px"}} />
                        </div>
                        <div className="ms-3">
                          <h5>{product.title.slice(0,20)}</h5>
                          <p className="small mb-0">{product.description.slice(0,20)}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{width: "50px"}}>
                          <h5 className="fw-normal mb-0">{product.count}</h5>
                        </div>
                        <div style={{width: "80px"}}>
                          <h5 className="mb-0">{product.price}</h5>
                        </div>
                        <div className="cursor" style={{width: "30px"}} onClick={()=>removeFromCart(product.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                        </div>
                        <a href="#!" style={{color: "#cecece"}}><i className="fas fa-trash-alt"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                )})}

              </div>

              <div className="col-lg-5">
              <h5 className="mb-3">Check out</h5>
                <hr />
                <h6 className="mt-3">Result : {totalPrice.toFixed(2)} $</h6>
                <div class="d-grid gap-2 mt-3">
                  <button onClick={()=>FinalHandler()} class="btn btn-success" type="button">Pay!</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}

export default Cart