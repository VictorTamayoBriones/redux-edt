import { connect } from "react-redux"
import { CardJugador } from "./style"

const Jugador = ({name, photo, player, addToTitulares, addToSuplentes, colocado, removePlayer})=>{
    return(
        <CardJugador>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            
            { colocado ? <button className="delete" onClick={ ()=> removePlayer(player) } >x</button> : 
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
    },
    removePlayer(j){
        dispatch({
            type: "REMOVE_PLAYER",
            j
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);