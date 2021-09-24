import React, {useState} from "react";
import axios from "axios";

function Orders() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    function getOrder() {
        axios.get("http://127.0.0.1:8081/d3d616e3-3cf0-4dca-ad1b-0d94e4675901", { crossdomain: true
        }).then(response => {
            setFirstname(response.data.firstname);
            setLastname(response.data.lastname);
        });
    }

    return (
        <div>
            <h2>Enter an Order</h2>
            First name: <input type = "text" name = "firstname"/>
            <br></br>
            Last name: <input type = "text" name = "lastname"/>
            <br></br>
            <button onClick={getOrder}>Submit</button>
            <h3>{"Order submitted for " + firstname + " " + lastname}</h3>
        </div>
    )
}export default Orders;