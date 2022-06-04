import { connect } from 'react-redux';

const Jugadores = ({jugadores}) =>{
    return(
        <section>
            <h2>Jugadores</h2>
            <div className="container-jugadores">
                {jugadores.map( j=>(
                    <article>
                        <img src={j.photo} alt={j.name} />
                        <h3>{j.name}</h3>
                        <div className="actions">
                            <button>Titular</button>
                            <button>Suplente</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
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