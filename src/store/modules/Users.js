import Immutable from 'immutable';
const ADD_USER = 'ADD_USER';

const initialState = Immutable.fromJS({
    list: []
});

const addUserAction = (user) => ({
    type: ADD_USER,
    value: user
});

export const actions = {
    addUserAction
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return state.update('list', list => list.push(action.value));
        default:
            return state;
    }
}

export default usersReducer;