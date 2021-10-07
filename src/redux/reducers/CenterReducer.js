
import {
    FETCH_CENTERS,
    ADD_CENTER,
    DELETE_CENTER,
    UPDATE_CENTER,

} from '../actions/CenterAction';


const initialState = []

const CenterReducer = (state = initialState, action) => {

    switch (action.type) {


        case FETCH_CENTERS:

            return action.payload

        case ADD_CENTER:

            const newCenter = action.payload;
            return [...state, newCenter]

        case UPDATE_CENTER:

            const index = state.findIndex(center => center._id === action.payload._id)
            state[index] = action.payload
            return [...state]

        case DELETE_CENTER:

            const newCenters = state.filter(center => center._id !== action.payload._id)
            return newCenters
        default:

            return state

    };

};

export default CenterReducer;

