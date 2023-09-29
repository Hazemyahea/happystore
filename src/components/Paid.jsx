import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
function Paid() {
    let navigate = useNavigate();

    return(
        <>
        <Nav />
        <div className="container pt-5">
            <h2>Thank You</h2>
            <hr />
            <p className="lead">Thank you for your purchase. Your purchase was completed successfully</p>

        </div>
        </>
    )
}

export default Paid