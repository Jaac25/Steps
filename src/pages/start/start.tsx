import { Button } from "../../components/Button/Button";
import { Container } from "../../components/container/Container";
import "./style.css"

export const Start = () => {
    return (
        <Container size={100}>
            <Button text="BIENVENIDO" disabled={false} to="/dataClient" onClick={() => {}}></Button>
        </Container>
    )
}