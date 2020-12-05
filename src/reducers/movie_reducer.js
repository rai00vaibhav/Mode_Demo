import {MOVIES_LIST} from '../Types';  //To trace the error in the naming action types

export default function(state=null, action){
    switch (action.type) {
        case MOVIES_LIST:
            return action.payload
    
        default:
            return state
    }
}