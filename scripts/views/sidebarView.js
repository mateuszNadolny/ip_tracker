class SidebarView {

    constructor() {
        this._sidebar = document.querySelector('.sidebar');
        this._sidebarCloseBtn = document.querySelector('.sidebar--close_btn');
        this._sidebarOpenBtn = document.querySelector('.searchbar--sidebar_btn');
        this._sidebarTrackMeBtn = document.querySelector('.sidebar--track_user_btn');
        this._parentEl = document.querySelector('.sidebar--user_info');

        this._data = {};
    }

    renderSpinner() {
        const markup = `
            <img src="assets/spinner.png" class="spinner" alt="spinner">
        `
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    updateData(data) {
        this._data = data;
        console.log(this._data)
    }

    handleSidebarVisibility() {
        this._sidebarCloseBtn.addEventListener('click', this._toggleSidebar.bind(this));
        this._sidebarOpenBtn.addEventListener('click', this._toggleSidebar.bind(this));
        this._sidebarTrackMeBtn.addEventListener('click', this._toggleSidebarAfterTrackingUser.bind(this));
    }

    _toggleSidebar() {
        this._sidebar.classList.toggle('sidebar-visible');
    }

    _toggleSidebarAfterTrackingUser() {
        setTimeout(this._toggleSidebar.bind(this), 300);
    }

    renderSidebar(data) {
        const markup = this._generateSibedarMarkup(data);
        this._parentEl.innerHTML = '';
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    _generateSibedarMarkup(data) {
        const markup = `
            <p class="sidebar--user_info--label user-ip-label">YOUR IP</p>
            <p class="sidebar--user_info--desc user-ip-desc">${data.ip}</p>
            <p class="sidebar--user_info--label user-location-label">YOUR LOCATION</p>
            <p class="sidebar--user_info--desc user-location-desc">${data.locationCountry}, ${data.locationCity}</p>
            <p class="sidebar--user_info--label user-cords-label">YOUR LAT/LON</p>
            <p class="sidebar--user_info--desc user-cords-desc">${data.lat} / ${data.lng}</p>
            <p class="sidebar--user_info--label user-isp-label">YOUR ISP</p>
            <p class="sidebar--user_info--desc user-isp-desc">${data.isp}</p>
        `
        return markup;
    }

    addSidebarBtnHandler(handler) {
        this._sidebarTrackMeBtn.addEventListener('click', handler);
    }
}

export default new SidebarView();