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
    return state
}

export default createStore(reducerEntrenador)