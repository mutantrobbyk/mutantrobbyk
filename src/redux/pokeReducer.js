const initialState = {
    pokemon: [],
    onePokemon: []
}
const GET_POKEMON = 'GET_POKEMON'

export function getPokemon(arr){
    return{
        type: GET_POKEMON,
        payload: arr
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_POKEMON:
            
            return {...state, pokemon: payload}
        default:
            return state
    }
}