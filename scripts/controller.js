import SidebarView from "./views/sidebarView.js";
import MapView from "./views/mapView.js";
import SearchbarView from "./views/searchbarView.js";
import InfoCardView from "./views/infoCardView.js";
import * as model from "./model.js"


const init = function () {
    InfoCardView.renderInfoCard();
    SidebarView.handleSidebarVisibility();
    SidebarView.renderSidebar();
    SidebarView.addSidebarBtnHandler(model.loadUserIp);
    MapView.renderMap();
    SearchbarView.addSearchbarHandler(model.loadQueryIp);
}

init();