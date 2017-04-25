import { helloSaga } from 'Sagas/hello';
import watchPopItem from 'Sagas/item';
import { fork } from 'redux-saga/effects';

export default function *rootSaga() {
    yield fork(helloSaga);
    yield fork(watchPopItem);
}
