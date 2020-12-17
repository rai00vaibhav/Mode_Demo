import {LIST_DATA} from '../Types';
import axios from 'axios';

export const getListData = (list) => {
    return {
        type: LIST_DATA,
        payload: list
    }
};
export function getList() {
    return async function (dispatch, getState){
        const response  = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        dispatch(getListData(response.data));
    }
}