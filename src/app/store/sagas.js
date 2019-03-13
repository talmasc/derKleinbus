import { take, put, select } from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';
import { history } from './history';

const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";

export function* taskCreationSaga() {
    while (true) {
        const {groupID} = yield take(mutations.REQUEST_TASK_CREATION);
        const ownderID = `U1`
        const taskID = uuid();
        yield put(mutations.createTask(taskID, groupID, ownderID));
        const { res } = yield axios.post(url + `/task/new`, {
            task: {
                id: taskID,
                group: groupID,
                owner: ownderID,
                isComplete: false,
                name: "New task"
            }
        });
    }
}

export function* taskModificationSaga() {
    while(true) {
        const task = yield take([
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_COMPLETE
        ]);
        axios.post(url + `/task/update`,{
            task:{
                id: task.taskID,
                group: task.groupID,
                name: task.name,
                isComplete: task.isComplete
            }
        });
    }
}

export function* userAuthenticationSaga() {
    while (true) {
        const { username, password } = yield take(mutations.REQUEST_AUTHENTICATE_USER);

        try {
            const { data } = yield axios.post(url + `/authenticate`, {username, password});
            if (!data) {
                throw new Error();
            }

            console.log("Authenticated!", data);

            yield put(mutations.setState(data.state));
            yield put(mutations.processAuthenticatedUser(mutations.AUTHENTICATED));

            history.push('/dashboard');

        } catch (e) {
            console.log("can't authenticate");
            yield put (mutations.processAuthenticatedUser(mutations.NOT_AUTHENTICATED));
        }
    }
}

