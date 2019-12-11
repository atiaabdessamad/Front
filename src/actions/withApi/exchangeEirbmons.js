import { ERROR_OCCURS } from '../../constants/action-types';
import generateExchangeEirbmon from '../../middleWare/generateExchangeEirbmon';
import { LOAD_EIRBMON_SUCCESS } from '../../constants/action-types';

export default function checkInitAccount(data) {
    return (dispatch, getState, api) => api.post(generateExchangeEirbmon(), data)
        .then((res) => {
           
            return Promise.resolve(res);
        })
        .catch((err) => {
            dispatch({
                type: ERROR_OCCURS,
                payload: err,
            });
            return Promise.reject(err);
        });
}
