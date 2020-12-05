import {MOVIES_LIST} from '../Types';
import axios from 'axios';


// export const moviesList = async (customerGuid) => {
//     return await axios({
//         url: this.getAPIbaseUrl() + 'customer/' + customerGuid + '/flows',
//         method: 'get',
//         headers: this.getRequestHeaders()
//     })
// }
export const getMovieList = (list) => {
    return {
        type: MOVIES_LIST,
        payload: list
    }
};
export function moviesList() {
    return async function (dispatch, getState){
        const response  = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response);
        dispatch(getMovieList(response.data));
    }
}