import { connect } from "react-redux"
import { CardJugador } from "./style"

const Jugador = ({name, photo, player,addToTitulares, addToSuplentes, colocado})=>{
    return(
        <CardJugador>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            
            { colocado ? <button className="delete" >x</button> : 
            <div className="actions">
                <button onClick={ ()=> addToTitulares(player) } >Titular</button>
                <button onClick={ ()=> addToSuplentes(player) } >Suplente</button>
            </div>}
        </CardJugador>
    )
}

const mapStateToProps = (state) =>{
    return {}
}

const mapDispatchToProps = (dispatch) =>({
    addToTitulares(j){
        dispatch({
            type: "ADD_TO_TITULARES",
            j
        })
    },
    addToSuplentes(j){
        dispatch({
            type: "ADD_TO_SUPLENTES",
            j
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);