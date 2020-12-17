import {LIST_DATA} from '../Types';  //To trace the error in the naming action types

export default function(state=null, action){
    switch (action.type) {
        case LIST_DATA:
            return action.payload
    
        default:
            return state
    }
}