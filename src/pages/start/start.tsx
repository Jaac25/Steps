import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import { Input } from "../../components/Input/Input";
import { Resume } from "../../components/Resume/Resume";
import { store } from "../../layers/store";
import "./style.css"

export const Start = ({}) => {
    const {nextStep} = store(state => state)
    
    return (
        <Container size={100}>
            <Button text="BIENVENIDO" disabled={false} to="/dataClient" onClick={() => nextStep()}></Button>
        </Container>
    )
}