import { useState } from "react"
import { store } from "../../layers/store"
import { Button } from "../Button/Button"
import { Container } from "../container/Container"
import "./style.css"

export const Resume = ({}) => {
    const {names, email, address, floor, zone, step} = store(state => state)
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="resume">
                <div>
                    <div className="row whiteFont">
                        <h4>Nombre:</h4>
                        <p>{names === "" ? "NE" : names}</p>    
                    </div>
                    <div className="row whiteFont">
                        <h4>Email:</h4>
                        <p>{email === "" ? "NE" : email}</p>  
                    </div>
                    <div className="row whiteFont">
                        <h4>Dirección:</h4>
                        <p>{address === "" ? "NE" : address}</p>    
                    </div>
                    <div className="row whiteFont">
                        <h4>Piso:</h4>
                        <p>{floor === -1 ? "NE": floor}</p>    
                    </div>
                    <div className="row whiteFont">
                        <h4>Zona:</h4>
                        <p>{zone === "" ? "NE" : zone}</p>    
                    </div>
                    <div className="row steps purple">
                        <h4>{`Paso`}</h4>
                        <h4 className="step">{step+1}</h4>
                        <h4>{`de 6`}</h4>
                    </div>
                </div>
            </div>
            <div className="btn__collapsed">
                <button className="resumen-collapsed" onClick={() => setShowModal(true)}>
                    Resumen
                </button>
            </div>
            {
                showModal && (
                    <div className="sizeModal">
                        <div className="modal">
                            <div className="row whiteFont">
                                <h4>Nombre:</h4>
                                <p>{names === "" ? "NE" : names}</p>    
                            </div>
                            <div className="row whiteFont">
                                <h4>Email:</h4>
                                <p>{email === "" ? "NE" : email}</p>  
                            </div>
                            <div className="row whiteFont">
                                <h4>Dirección:</h4>
                                <p>{address === "" ? "NE" : address}</p>    
                            </div>
                            <div className="row whiteFont">
                                <h4>Piso:</h4>
                                <p>{floor === -1 ? "NE": floor}</p>    
                            </div>
                            <div className="row whiteFont">
                                <h4>Zona:</h4>
                                <p>{zone === "" ? "NE" : zone}</p>    
                            </div>
                            <div className="row steps purple">
                                <h4>{`Paso`}</h4>
                                <h4 className="step">{step+1}</h4>
                                <h4>{`de 6`}</h4>
                            </div>
                            <div className="row">
                                <button className="btn red" onClick={() => setShowModal(false)}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}