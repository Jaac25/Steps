import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const Floor = ({}) => {
    const {floor, address, setFloor, nextStep} = store(state => state)
    const [isValidFloor, changeIsValidFloor] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (address === ""){
            navigate("/address")
        }
    })

    const validateFloor = (value: string) => {
        if (!value.includes("e")){
            if (+value > 0 && +value <= 50){
                setFloor(+value)
                changeIsValidFloor(true)
            }else{
                changeIsValidFloor(false)
                setFloor(-1)
            }
        }
    }

    return (
        <Container size={100}>
            <div className="contain w-70">
                {floor === -1 && <h3 className="red">Introduce el número del piso de tu apartamento</h3>}
                <Input label={"N. Piso"} onChange={(value) => validateFloor(value)} type={"number"} />
                <Button 
                    text="Continuar" 
                    to="/zone" 
                    onClick={() => nextStep()}
                    disabled={!isValidFloor}
                ></Button>
            </div>                
            <Resume/>
        </Container>
    )
}