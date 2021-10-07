import {
    getCenter,
    addCenter as addCenterFromApi,
    updateCenter as updateCenterFromApi,
    deleteCenter as deleteCenterFromApi,
} from "../../services/center.service";


export const FETCH_CENTERS = "FETCH_CENTERS";
export const ADD_CENTER = "ADD_CENTER";
export const UPDATE_CENTER = "UPDATE_CENTER";
export const DELETE_CENTER = "DELETE_CENTER";


export const fetchCenters= () => (dispatch) => {


    
    return getCenter().then(
        (result) => {
            if (result) {

                dispatch({
                    type: FETCH_CENTERS,
                    payload: result,
                });
            }
        }

    );

};

export const addCenter = (center_name) => {

    return async dispatch => {
        const newCenter= await addCenterFromApi(center_name)

        newCenter === false ?
            (
                console.log("center name exist")

            )
            :
            (
                dispatch({ type: ADD_CENTER, payload: newCenter })

            )

        return newCenter


    }

};


export const updateCenter = (values) => {

    return async dispatch => {
        const updateCenter = await updateCenterFromApi(values)

        updateCenter === false ?
            (
                console.log("Error in update center")

            )
            :
            (
                dispatch({ type: UPDATE_CENTER, payload: updateCenter })

            )

        return updateCenter;

    }

};

export const deleteCenter = (center_id) => (dispatch) => {

    return deleteCenterFromApi(center_id).then(
        (result) => {
            if (result) {

                dispatch({
                    type: DELETE_CENTER,
                    payload: result,
                });
            }
        }

    );

};
