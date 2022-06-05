import { connect } from "react-redux"
import Jugador from "../../../Jugadores/Jugador"
import { JugadoresSection } from "../../../Jugadores/style"

const Suplentes = ({suplentes})=>{
    return(
        <JugadoresSection>
            <h2>Suplentes</h2>
            <div className="cancha">
                {
                    suplentes.map( (j, i) =>(
                        <Jugador key={i} name={j.name} photo={j.photo} colocado={true} />
                    ))
                }
            </div>
        </JugadoresSection>
    )
}

const mapStateToProps = (state) =>{
    return{
        suplentes: state.suplentes
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);