import { connect } from "react-redux"

const Titulares = ({titulares}) =>{
    return(
        <section>
            <h2>Titulares</h2>
            <div className="cancha">
                {
                    titulares.map( (j, i) =>(
                        <article key={i} className="titulares">
                            <img src={j.photo} alt={j.name} />
                            <p>{j.name}</p>
                            <button>x</button>
                        </article>
                    ))
                }
            </div>
        </section>
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