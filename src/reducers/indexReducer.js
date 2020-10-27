import { LOAD_INDEX, RESET_INDEX } from '../actions';

export default function indexReducer (state = null, action){
    switch (action.type){
        case RESET_INDEX:
            state = action.data;
            return state;
        case LOAD_INDEX:
            state = action.data;
            return state;
        default:
            return state;
    }
}