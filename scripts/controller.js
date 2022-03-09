import SidebarView from "./views/sidebarView.js";
import MapView from "./views/mapView.js";


const init = function () {
    SidebarView.handleSidebarVisibility();
    MapView.renderMap();
}


init();