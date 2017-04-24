import { PUSH_ITEM, POP_ITEM } from 'Constants/actions';

export const popItem = () => ({
    type: POP_ITEM
});

export const pushItem = item => ({
    type: PUSH_ITEM,
    item
});
