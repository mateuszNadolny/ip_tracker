class SidebarView {

    constructor() {
        this._sidebar = document.querySelector('.sidebar');
        this._sidebarCloseBtn = document.querySelector('.sidebar--close_btn');
        this._sidebarOpenBtn = document.querySelector('.searchbar--sidebar_btn');
        this._sidebarTrackMeBtn = document.querySelector('.sidebar--track_user_btn');
        this._parentEl = document.querySelector('.sidebar--user_info');
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

    renderSidebar() {
        const markup = this._generateSibedarMarkup();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    _generateSibedarMarkup() {
        const markup = `
            <p class="sidebar--user_info--label user-ip-label">YOUR IP</p>
            <p class="sidebar--user_info--desc user-ip-desc">${'12.23.32'}</p>
            <p class="sidebar--user_info--label user-location-label">YOUR LOCATION</p>
            <p class="sidebar--user_info--desc user-location-desc">${'WARSAW, PL'}</p>
            <p class="sidebar--user_info--label user-cords-label">YOUR LAT/LON</p>
            <p class="sidebar--user_info--desc user-cords-desc">${'34.54 / 34.56'}</p>
            <p class="sidebar--user_info--label user-isp-label">YOUR ISP</p>
            <p class="sidebar--user_info--desc user-isp-desc">${'SpaceX Starlink'}</p>
        `
        return markup;
    }

    addSidebarBtnHandler(handler) {
        this._sidebarTrackMeBtn.addEventListener('click', handler);
    }
}

export default new SidebarView();