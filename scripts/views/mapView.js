class MapView {

    renderMap() {
        const map = L.map('map').setView([51.505, -0.09], 13);
        const icon = this._renderMarker(true);
        const markup = this._generatePopupContent(true);
      

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.popup().setContent('<p>Hello world!<br />This is a nice popup.</p>');

        L.marker([51.5, -0.09], {icon: icon}).addTo(map)
            .bindPopup(markup)
            // .openPopup();
    }

    _renderMarker(flag) {
        const icon = L.icon({
            iconUrl: `${flag? 'assets/icon.png' : 'assets/userIcon.png'}`,
            iconSize: [35, 35],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        return icon;
    }

    _generatePopupContent(flag) {
        const prefix = (flag? 'SEARCHED' : 'USER')
        
        const markup = `
        <div class="popup">
            <p class="searched-ip searched-popup-info"><span class="popup-span">${prefix} IP:</span> <br>${'123.32.12.32.3'}</p>
            <p class="searched-location searched-popup-info"><span class="popup-span">LOCATION:</span> <br>${'OSLO, NO'}</p>
            <p class="searched-coords searched-popup-info"><span class="popup-span">LAT/LON:</span> <br>${'52.23 / 32.25'}</p>
            <p class="searched-isp searched-popup-info"><span class="popup-span">ISP:</span> <br>${'UPC'}</p>
        </div>
        `

        return markup;
    }
}

export default new MapView();