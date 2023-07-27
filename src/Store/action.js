import ajax from "./ajax"
import { API } from "../apipaths"
import { FETCH_DATA, POST_DATA } from "./Constants";

export const getData = () => {
    return (dispatch) => {
        return ajax
            .get(API, {})
            .then((response) => {
                if (response && response.status === 200) {
                    return dispatch({
                        type: FETCH_DATA,
                        data: response.data
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    const response = {
                        status: error?.response?.status,
                        statusText: error?.response?.statusText,
                        data: null
                    };
                    return dispatch({
                        type: FETCH_DATA,
                        data: response
                    });
                }
                return 'error';
            });
    };
};

export const postData = () => {
    return (dispatch) => {
        return ajax
            .post(API, {})
            .then((response) => {
                if (response && response.status === 200) {
                    return dispatch({
                        type: POST_DATA,
                        data: response.data
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    const response = {
                        status: error?.response?.status,
                        statusText: error?.response?.statusText,
                        data: null
                    };
                    return dispatch({
                        type: POST_DATA,
                        data: response
                    });
                }
                return 'error';
            });
    };
};