class MapView {
    constructor() {
        this._map;
        this._userData = {};
        this._userCoords = [];
        this._queryData - {};
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

    renderQueryMarker(queryData) {
        const markup = this._generateMarkerContent(false, queryData);

        const greenIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });

        L.marker([queryData.lat, queryData.lng], {icon: greenIcon}).addTo(this._map).bindPopup(markup).openPopup();
        this._map.setView([queryData.lat, queryData.lng], 13)

    }

    setViewToUserLocation(coords) {
        this._map.setView([coords.lat, coords.lng], 13);
    }
}


export default new MapView();

//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'



