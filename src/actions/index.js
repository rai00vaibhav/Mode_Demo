import {LIST_DATA,SELECT_ITEM} from '../Types';
import axios from 'axios';

export const getListData = (list) => {
    return {
        type: LIST_DATA,
        payload: list
    }
};
export const selectItemList = (list) => {
    return {
        type: SELECT_ITEM,
        payload: list
    }
};
function setSelectedList(list) {
    list.forEach(element => {
        element.selected = false;
    });
}
export function getList() {
    return async function (dispatch, getState){
        const response  = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        setSelectedList(response.data);
        dispatch(getListData(response.data));
    }
}