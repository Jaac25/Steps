import { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { store } from "../../layers/store";
import { useNavigate } from "react-router-dom";

import "./style.css"

export const Summary = ({}) => {
    const {names, email, address, floor, zone} = store(state => state)
    const navigate = useNavigate();

    useEffect(() => {
        if (floor === -1){
            navigate("/floor")
        }
        if (address === ""){
            navigate("/address")
        }
        if (email === ""){
            navigate("/email")
        }
        if (names === ""){
            navigate("/dataClient")
        }
    })

    return (
        <Container size={100}>
            <div className="summary">
                <h1>Resumen</h1>
                <div className="">
                    <div className="row">
                        <h4>Nombre:</h4>
                        <p>{names === "" ? "NE" : names}</p>    
                    </div>
                    <div className="row">
                        <h4>Email:</h4>
                        <p>{email === "" ? "NE" : email}</p>  
                    </div>
                    <div className="row">
                        <h4>Dirección:</h4>
                        <p>{address === "" ? "NE" : address}</p>    
                    </div>
                    <div className="row">
                        <h4>Piso:</h4>
                        <p>{floor === -1 ? "NE": floor}</p>    
                    </div>
                    <div className="row">
                        <h4>Zona:</h4>
                        <p>{zone === "" ? "NE" : zone}</p>    
                    </div>
                </div>
            </div>
        </Container>
    )
}
