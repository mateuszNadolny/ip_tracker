class SidebarView {

    constructor() {
        this._sidebar = document.querySelector('.sidebar');
        this._sidebarCloseBtn = document.querySelector('.sidebar--close_btn');
        this._sidebarOpenBtn = document.querySelector('.searchbar--sidebar_btn');
        this._sidebarTrackMeBtn = document.querySelector('.sidebar--track_user_btn');
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
}

export default new SidebarView();