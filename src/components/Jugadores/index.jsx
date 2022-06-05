import { connect } from 'react-redux';
import Jugador from './Jugador';
import { JugadoresSection } from './style';

const Jugadores = ({jugadores}) =>{
    return(
        <JugadoresSection>
            <h2>Jugadores</h2>
            <div className="container-jugadores">
                {jugadores.map( (j, i)=>(
                    <Jugador key={i} name={j.name} photo={j.photo}  player={j}/>   
                ))}
            </div>
        </JugadoresSection>
    )
}

const mapStateToProps = (state) =>{
    return{
        jugadores: state.jugadores
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);