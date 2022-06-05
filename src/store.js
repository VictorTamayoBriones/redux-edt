import { createStore } from 'redux';

const INITIAL_STATE = {
    jugadores: [
        {
            name: "Juan",
            photo: "https://i.ytimg.com/vi/EH_bIrfviW4/hqdefault.jpg"
        },{
            name: "Pedro",
            photo: "https://i.ytimg.com/vi/EH_bIrfviW4/hqdefault.jpg"
        },{
            name: "Jose",
            photo: "https://i.ytimg.com/vi/EH_bIrfviW4/hqdefault.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = INITIAL_STATE, action) =>{

    if(action.type === "ADD_TO_TITULARES"){
        return{
            ...state,
            titulares: state.titulares.concat(action.j),
            jugadores: state.jugadores.filter( j => j.name !== action.j.name)
        }
    }

    if( action.type === "ADD_TO_SUPLENTES" ){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.j),
            jugadores: state.jugadores.filter( j => j.name !== action.j.name )
        }
    }

    if( action.type === "REMOVE_PLAYER" ){
        return{
            ...state,
            jugadores: state.jugadores.concat(action.j),
            titulares: state.titulares.filter( j => j.name !== action.j.name ),
            suplentes: state.suplentes.filter( j => j.name !== action.j.name )
        }
    }

    return state
}

export default createStore(reducerEntrenador)