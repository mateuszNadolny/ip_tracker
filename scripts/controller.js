import SidebarView from "./views/sidebarView.js";
import MapView from "./views/mapView.js";
import SearchbarView from "./views/searchbarView.js";


const init = function () {
    SidebarView.handleSidebarVisibility();
    SidebarView.renderSidebar();
    MapView.renderMap();
}

init();