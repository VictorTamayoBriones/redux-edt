import { connect } from "react-redux"
import Jugador from "../../../Jugadores/Jugador"
import { JugadoresSection } from "../../../Jugadores/style"

const Titulares = ({titulares}) =>{
    return(
        <JugadoresSection>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map( (j, i) =>(
                        <Jugador key={i} name={j.name} photo={j.photo} colocado={true} />
                    ))
                }
            </div>
        </JugadoresSection>
    )
}

const mapStateToProps = (state) =>{
    return{
        titulares: state.titulares
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Titulares)