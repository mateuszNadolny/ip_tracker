import SidebarView from "./views/sidebarView.js";
import MapView from "./views/mapView.js";
import SearchbarView from "./views/searchbarView.js";
import InfoCardView from "./views/infoCardView.js";
import * as model from "./model.js"

const controlSidebar = async function() {
    SidebarView.renderSpinner();
    
    const data = await model.loadUserIp()
    SidebarView.renderSidebar(data);
    SidebarView.handleSidebarVisibility();
    SidebarView.addSidebarBtnHandler(model.loadUserIp);
}


const init = function () {
    controlSidebar();
    InfoCardView.renderInfoCard();
    MapView.renderMap();
    SearchbarView.addSearchbarHandler(model.loadQueryIp);
}



init();