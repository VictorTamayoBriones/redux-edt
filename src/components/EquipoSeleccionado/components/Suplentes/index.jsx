import { connect } from "react-redux"

const Suplentes = ({suplentes})=>{
    return(
        <section>
            <h2>Suplentes</h2>
            <div className="cancha">
                {
                    suplentes.map( (j, i) =>(
                        <article key={i} className="suplentes">
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
        suplentes: state.suplentes
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);