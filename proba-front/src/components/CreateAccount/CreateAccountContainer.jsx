import { useContext, useState } from "react";
import { authorizationContext } from "../../services/authorization";
import Container from "../containers/container";
import CreateAccount from "./CreateAccount";

function CreateAccountContainer() {

    const { consent } = useContext(authorizationContext)

    const stateContainer = useState(false)
    const [ show, setShow] = stateContainer

    return(
        <>
        { ! consent &&
            <>
            <button onClick={ ()=>{ setShow(true) } } disabled={show}>Crear Conta de Usuario</button>
            <Container state={stateContainer}>
                <CreateAccount/>
            </Container>
            </>
        }

        </>
    )
}

export default CreateAccountContainer