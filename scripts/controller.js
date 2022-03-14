import SidebarView from "./views/sidebarView.js";
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

// const controlMap = async function() {
//     const userData = await model.loadUserIp();
//     const queryData = await model.loadQueryIp();
//     MapView.getUserData(userData);
//     MapView.getQueryData(queryData);
//     MapView.renderMap();
// }


const init = function () {
    // controlMap();
    controlSidebar();
    InfoCardView.renderInfoCard();
    SearchbarView.addSearchbarHandler(model.loadQueryIp);
}



init();