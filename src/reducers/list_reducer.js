import {LIST_DATA,SELECT_ITEM} from '../Types';  //To trace the error in the naming action types
const defaultState = {
    data:[],
    selectedItems:[]
}

export default function(state=defaultState, action){
    switch (action.type) {
        case LIST_DATA:
            return {...state,data:action.payload};
            
        
        case SELECT_ITEM : {
            const index = state.data.findIndex(item => item.id == action.payload.id);
            let newArray = [...state.data];
            newArray[index].selected = !newArray[index].selected;
            const localSelectedItem = newArray.filter(element => element.selected);
            return {
                ...state,
                data:newArray,
                selectedItems: localSelectedItem
            }
        }
    
        default:
            return state
    }
}