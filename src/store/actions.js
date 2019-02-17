import axios from '../axios-counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const incrementCounter = () => {
    return dispatch => {
        dispatch({type: INCREMENT});
        dispatch(saveCounter());
    };
};

export const decrementCounter = () => {
	return dispatch => {
		dispatch({type: DECREMENT});
		dispatch(saveCounter());
	}
};

export const addCounter = amount => {
	return dispatch => {
		dispatch({type: ADD, amount});
		dispatch(saveCounter());
	}
};

export const subtractCounter = amount => {
	return dispatch => {
		dispatch({type: SUBTRACT, amount});
		dispatch(saveCounter());
	}
};

export const fetchCounterRequest = () => {
    return {type: FETCH_COUNTER_REQUEST}
};

export const fetchCounterSuccess = counter => {
    return {type: FETCH_COUNTER_SUCCESS, counter}
};

export const fetchCounterError = () => {
    return {type: FETCH_COUNTER_ERROR}
};

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get('counter.json').then(response => {
            dispatch(fetchCounterSuccess(response.data));
        }, error => {
            dispatch(fetchCounterError());
        });
    }
};


export const saveCounter = () => {
    return (dispatch, getState) => {
        const state = getState();
        axios.put('counter.json', state.counter);
    }
};