import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const Address = ({}) => {
    const {address,email, setAddress, nextStep} = store(state => state)

    const navigate = useNavigate()

    useEffect(() => {
        if (email === ""){
            navigate("/email")
        }
    })

    return (
        <Container size={100}>
            <div className="contain w-70">
                {address === "" && <h3 className="red">Introduce la dirección del apartamento</h3>}
                <Input label={"Dirección"} onChange={(value) => setAddress(value)} type={"text"} />
                <Button 
                    text="Continuar" 
                    to="/floor" 
                    onClick={() => nextStep()}
                    disabled={address === "" ? true:false}
                ></Button>
            </div>                
            <Resume/>
        </Container>
    )
}