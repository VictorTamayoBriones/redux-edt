import { connect } from "react-redux"
import { CardJugador } from "./style"

const Jugador = ({name, photo, player,addToTitulares})=>{
    return(
        <CardJugador>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <div className="actions">
                <button onClick={ ()=> addToTitulares(player) } >Titular</button>
                <button>Suplente</button>
            </div>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugador);