import { SUCCESS_OCCURS, ERROR_OCCURS } from '../../constants/action-types';

export default function login(link, user) {
    return (dispatch, getState, api) => api.post(link, user)
        .then((res) => {
            if ('false' === res.check_user) {
                const err = 'userDoesntExist';

                throw err;
            }

            if ('false' === res.check_password) {
                const err = 'errorPassword';

                throw err;
            }

            if (res.token) {
                sessionStorage.setItem('token', res.token);
                sessionStorage.setItem('name', res.name);
                sessionStorage.setItem('email', res.email);

                dispatch({
                    type: SUCCESS_OCCURS,
                    payload: 'connected',
                });

                return Promise.resolve();
            } else {
                const err = 404;

                throw err;
            }
        })
        .catch((err) => {
            dispatch({
                type: ERROR_OCCURS,
                payload: err,
            });

            return Promise.reject(err);
        });
}