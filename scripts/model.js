import SearchbarView from "./views/searchbarView.js";
import {
    API_URL
} from "./config.js";
import {
    AJAX
} from "./helpers.js";

const createIPInfoObject = async function (data) {
    const IPInfo = {
        ip: data.query,
        locationCountry: data.country,
        locationCity: data.city,
        lat: data.lat,
        lng: data.lon,
        isp: data.isp,
        isUserIP: true
    }
    return IPInfo;
}

export const createQueryUrl = function () {
    const queryIP = SearchbarView.getQuery();
    const url = `${API_URL}/${queryIP}`;
    return url;
}

export const loadQueryIp = async function () {
    try {
        const url = createQueryUrl();
        const data = await AJAX(url)
        const queryIP = createIPInfoObject(data);
        return queryIP;
    } catch (err) {
        console.error(err.message)
        alert('Invalid IP adress. Please try again')
        throw err
    }
}

export const loadUserIp = async function() {
    try {
        const data = await AJAX(API_URL)
        const userIP = await createIPInfoObject(data);
        return userIP;
    } catch(err) {
        console.error(err.message);
        throw(err);
    }    
}
