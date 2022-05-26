import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const DataClient = ({}) => {
    const {names, setName, nextStep} = store(state => state)
    
    return (
        <Container size={100}>
            <div className="contain w-70">
                {names === "" && <h3 className="red">Llena los datos</h3>}
                <Input label={"Nombres y Apellidos"} onChange={(value) => setName(value)} type={"text"} />
                <Button 
                    text="Continuar" 
                    to="/email" 
                    onClick={() => nextStep()}
                    disabled={names === "" ? true:false}
                ></Button>
            </div>                
            <Resume/>
        </Container>
    )
}