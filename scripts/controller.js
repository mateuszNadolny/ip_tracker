import SidebarView from "./views/sidebarView.js";
import SearchbarView from "./views/searchbarView.js";
import InfoCardView from "./views/infoCardView.js";
import * as model from "./model.js"
import MapView from "./views/mapView.js"

InfoCardView.renderInfoCard();

const userData = await model.loadUserIp();
const queryData = await model.loadQueryIp();


const controlSidebar = async function() {
    SidebarView.renderSpinner();
    SidebarView.renderSidebar(userData);
    SidebarView.handleSidebarVisibility();
    SidebarView.addSidebarBtnHandler(MapView.setViewToUserLocation);
}

const controlMap = async function() {
    MapView.getUserData(userData);
    MapView.renderMap();
}


const init = function () {
    controlMap();
    controlSidebar();
    SearchbarView.addSearchbarHandler(model.loadQueryIp);
}




init();