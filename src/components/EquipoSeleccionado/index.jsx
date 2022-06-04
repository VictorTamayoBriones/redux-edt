import { Suplentes } from "./components/Suplentes"
import { Titulares } from "./components/Titulares"

export const EquipoSeleccionado = ()=>{
    return(
        <section>
            <Titulares/>
            <Suplentes/>
        </section>
    )
}