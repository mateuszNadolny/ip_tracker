class MapView {
    constructor() {
        this._map;
        this._userData = {};
        this._userCoords = [];
    }

    getUserData(userData) {
        this._userData = userData;
        this._userCoords = [this._userData.lat, this._userData.lng];
    }

    renderMap() {
        this._map = L.map('map').setView(this._userCoords, 13);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(this._map);

        this._renderUserMarker(this._userCoords);
    }

    _generateMarkerContent(isUserData, data) {
        let prefix = 'USER';

        if (!isUserData) {
            prefix = 'SEARCHED'
        }

        const markup = `
            <div class="popup">
                <p class="searched-ip searched-popup-info"><span class="popup-span">${prefix} IP:</span> <br>${data.ip}</p>
                <p class="searched-location searched-popup-info"><span class="popup-span">LOCATION:</span> <br>${data.locationCountry}, ${data.locationCity}</p>
                <p class="searched-coords searched-popup-info"><span class="popup-span">LAT/LON:</span> <br>${data.lat} / ${data.lng}</p>
                <p class="searched-isp searched-popup-info"><span class="popup-span">ISP:</span> <br>${data.isp}</p>
            </div>
        `
        return markup;
    }

    _renderUserMarker(coords) {
        const markup = this._generateMarkerContent(true, this._userData);
        L.marker(coords).addTo(this._map)
        .bindPopup(markup)
        .openPopup();
    }

    setViewToUserLocation() {
        console.log(this._map);
        this._map.setView(this._userCoords);
    }

}


export default new MapView();



