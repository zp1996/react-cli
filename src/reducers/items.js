import { PUSH_ITEM, POP_ITEM } from 'Constants/actions';

const initialState = [ 'HTML', 'CSS', 'JavaScript' ];

const items = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_ITEM:
            state.push(action.item);
            return state;
        case POP_ITEM:
            state.pop();
            return state;
        default:
            return state;
    }
};

export default items;
