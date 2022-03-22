import SidebarView from "./views/sidebarView.js";
import SearchbarView from "./views/searchbarView.js";
import InfoCardView from "./views/infoCardView.js";
import * as model from "./model.js"
import MapView from "./views/mapView.js"

// CONTROLL INFO CARD
InfoCardView.renderInfoCard();

const userData = await model.loadUserIp();

// CONTROLL SEARCHBAR
SearchbarView.addSearchbarHandler(async function() {
    const queryData = await model.loadQueryIp();
    // MapView.getQueryData(queryData);
    MapView.renderQueryMarker(queryData);
});

// CONTROLL MAP
MapView.getUserData(userData);
MapView.renderMap();

// CONTROL SIDEBAR
SidebarView.renderSpinner();
SidebarView.renderSidebar(userData);
SidebarView.handleSidebarVisibility();
SidebarView.addSidebarBtnHandler(() => {
    MapView.setViewToUserLocation(userData)
});

