import {ADD, DECREMENT, FETCH_COUNTER_REQUEST, FETCH_COUNTER_SUCCESS, INCREMENT, SUBTRACT} from "./actions";

const initialState = {
    counter: 0,
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case ADD:
            return {
                ...state,
                counter: state.counter + action.amount
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.amount
            };
        case FETCH_COUNTER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_COUNTER_SUCCESS:
            return {
                ...state,
                loading: false,
                counter: action.counter
            };
        default:
            return state;
    }
};

export default reducer;