class SearchbarView {
    constructor() {
        this._searchbar = document.querySelector('.searchbar--input_field');
        this._queryBtn = document.querySelector('.searchbar--input_btn');
    }

    getQuery() {
        let query = ''
        if (this._searchbar.value === '') {
            query = ''
        } else {
            query = this._searchbar.value;
        }
        this._clearField();
        return query;
    }

    _clearField() {
        this._searchbar.value = '';
    }

    addSearchbarHandler(handler) {
        this._queryBtn.addEventListener('click', handler);
    }
}

export default new SearchbarView();