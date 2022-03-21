import SidebarView from "./views/sidebarView.js";
import SearchbarView from "./views/searchbarView.js";
import InfoCardView from "./views/infoCardView.js";
import * as model from "./model.js"
import MapView from "./views/mapView.js"


InfoCardView.renderInfoCard();

const userData = await model.loadUserIp();
const queryData = await model.loadQueryIp();

MapView.getUserData(userData);
MapView.renderMap();


SidebarView.renderSpinner();
SidebarView.renderSidebar(userData);
SidebarView.handleSidebarVisibility();
SidebarView.addSidebarBtnHandler(MapView.setViewToUserLocation);


SearchbarView.addSearchbarHandler(model.loadQueryIp);