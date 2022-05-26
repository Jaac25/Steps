import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const Zone = ({}) => {
    const {zone, floor, setZone, nextStep} = store(state => state)

    const navigate = useNavigate()

    useEffect(() => {
        if (floor === -1){
            navigate("/floor")
        }
    })

    return (
        <Container size={100}>
            <div className="contain w-70">
                <h3 className="blue">Te ofrecemos estas zonas para tu familia</h3>
                <select value={zone} onChange={(e) => setZone(e.target.value)}>
                    <option value={""}>
                        Elige una zona
                    </option>
                    <option value={"Zona BBQ"}>
                        Zona BBQ
                    </option>
                    <option value={"Salón comunal"}>
                        Salón comunal
                    </option>
                    <option value={"Parque de juegos"}>
                        Parque de juegos
                    </option>
                </select>
                <Button 
                    text="Continuar" 
                    to="/resume" 
                    onClick={() => nextStep()}
                    disabled={false}
                ></Button>
            </div>                
            <Resume/>
        </Container>
    )
}