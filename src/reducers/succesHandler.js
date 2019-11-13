const initObj = {
    timeStamp: undefined,
    success: undefined,
    successMessage: undefined,
};

const successTab = {
    200: 'Done',
    201: 'Successfuly Created',
};

export default function successHandler(state, action) {
    switch (action.type) {
        case 'SUCCESS_OCCURS': {
            return { ...state,
                ...initObj,
                timeStamp: new Date(),
                success: action.payload,
                successMessage: successTab[action.payload] ? successTab[action.payload] : 'Done' };
        }
        default: {
            // send back default datas for state
            return { ...state, ...initObj };
        }
    }
}
