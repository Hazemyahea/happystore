import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function RelatedProduct({category,theid}) {
    const [products,setProducts] = useState([])
    let navigate = useNavigate();
    function handler() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
           setProducts(data)
          } catch (error) {
            console.log(error)
          }
        };
    
        fetchData();
      }, [theid]);
      
    return(
        
            <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5 mt-5">
                <h2 className="fw-bolder mb-4">Related products</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.map((pro)=>{
                            return(
                                <div class="col mb-5">
                                    <div class="card">
        
                                        <img class="card-img-top image" src={pro.image} alt="..." />
                                        
                                        <div class="card-body p-4">
                                            <div class="text-center">
                                                
                                                <h5 class="fw-bolder">{pro.title.slice(0,20)}</h5>
                                                
                                                ${pro.price}
                                            </div>
                                        </div>
                                        
                                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <Link onClick={()=>handler()} className="btn btn-success text-center" to={`/product/${pro.id}`}>Go To Page</Link>
                                        </div>
                                    </div>
                                    </div>
                            )
                        })}
                    
                </div>
            </div>
        </section>
        
        
    )
}

export default RelatedProduct