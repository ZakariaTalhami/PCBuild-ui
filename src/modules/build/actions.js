import Axios from "axios";
import { GET_PART_LIST, SWITCH_PART_SELECTION, ADD_PART, LOADING_PARTS } from "./actionTypes";


export const getPartList= (part) => dispatch => {
    dispatch({
        type: LOADING_PARTS
    })
    Axios
        .get(`parts/${part}`)
        .then( res => {
            console.log(res);
            dispatch({
                type: GET_PART_LIST,
                payload: res.data
            });
        })
        .catch( error => {
            console.log(error);
        })
}

export const switchPartSelection = (selection) => (dispatch) => {
    dispatch({
        type: SWITCH_PART_SELECTION,
        payload: selection
    });
    dispatch(getPartList(selection));
};

export const addPart = (selection) => ({
    type: ADD_PART,
    payload: selection
});