import SearchbarView from "./views/searchbarView.js";
import {
    API_URL
} from "./config.js";
import {
    AJAX
} from "./helpers.js";

const createIPInfoObject = function (data) {
    const IPInfo = {
        ip: data.ip,
        

    }
}

export const createQueryUrl = function () {
    const queryIP = SearchbarView.getQuery();
    const url = `${API_URL}=${queryIP}`;
    console.log(url);
    return url;
}

export const loadQueryIp = async function () {
    try {
        const url = createQueryUrl();
        console.log(url);
        const data = await AJAX(url)
        console.log(data);
    } catch (err) {
        console.error(err.message)
        alert('Invalid IP adress. Please try again')
        throw err
    }
}

export const loadUserIp = async function() {
    try {
        const data = await AJAX(API_URL)
        console.log(data);
        return data;
    } catch(err) {
        console.error(err.message);
        throw(err);
    }    
}

const addSearchbarHandler = function () {
    const btn = document.querySelector('.searchbar--input_btn');
}