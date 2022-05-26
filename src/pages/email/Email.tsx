import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const Email = ({}) => {
    const {email, names, setEmail, nextStep} = store(state => state)
    const [isCorrectEmail,setIsCorrectEmail]= useState(false)

    const navigate = useNavigate()
    
    useEffect(() => {
        if (names === ""){
            navigate("/dataClient")
        }
    })

    const verifyEmail = (value: string) => {
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(value)) {
            setIsCorrectEmail(true)
            setEmail(value)
        } else {
            setIsCorrectEmail(false)
            setEmail("")
        }
    }

    return (
        <Container size={100}>
            <div className="contain w-70">
                {email === "" && <h3 className="red">Introduce un correo correcto</h3>}
                <Input label={"Email"} onChange={(value) => {verifyEmail(value)}} type={"email"} />
                <Button 
                    text="Continuar" 
                    to="/address" 
                    onClick={() => nextStep()}
                    disabled={!isCorrectEmail}
                ></Button>
            </div>                
            <Resume/>
        </Container>
    )
}