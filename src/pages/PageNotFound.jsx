import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate()
    return(
        <p className="alert alert-warning p-3 text-center">Sorry this page Not Found 📛
        <hr></hr>
        <button onClick={()=>navigate(-1)} className="btn btn-outline-primary">back 👈</button>
        </p>
    )
}

export default PageNotFound