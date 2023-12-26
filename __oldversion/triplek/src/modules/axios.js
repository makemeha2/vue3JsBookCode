import { axios } from '@bundled-es-modules/axios'
import { ref } from 'vue'

export default () => {
    const communicating = ref(false);
    const BASE_URL = 'http://localhost:8000';
    const createURL = (url) => {
        return url.startsWith('http') ? url : BASE_URL + url;
    }

    const checkResult = (resp, onSuccess, onFailed) => {
        communicating.value = false;
        if(resp.status == 200 && resp.data.rsp == 'ok') {
            if(onSuccess) {
                onSuccess(resp.data);
            } else {
                if(onFailed) {
                    onFailed(resp.data);
                }
            }
        }
    }

    const axiosGet = async (url, onSuccess = null, onFailed = null) => {
        communicating.value = true;
        axios.get(createURL(url)).then(resp => {
            checkResult(resp, onSuccess, onFailed);
        });
    }

    const axiosPost = async (url, data, onSuccess = null, onFailed = null) => {
        communicating.value = true;
        axios.post(createURL(url), data).then(resp => {
            checkResult(resp, onSuccess, onFailed);
        });
    }

    const axiosPut = async (url, data, onSuccess = null, onFailed = null) => {
        communicating.value = true;
        axios.put(createURL(url), data).then(resp => {
            checkResult(resp, onSuccess, onFailed);
        });
    }

    return  {
        communicating,
        axiosGet,
        axiosPost,
        axiosPut
    }
}

/*
export default function() {

    const BASE_URL = 'http://localhost:8000'

    const axiosGet = (URL, onSuccess = null, onFailed = null) => {
        const final_URL = URL.startsWith('http') ? URL : BASE_URL + URL;
        axios.get(final_URL).then((resp) => {
            if(resp.status === 200 && resp.data.rsp === 'ok') {
                if(onSuccess) {
                    onSuccess(resp.data)
                }
            } else {
                if(onFailed) {
                    onFailed(resp.data)
                }
            }
        })
    }

    return { 
        axiosGet,
    }
}
*/