class SearchbarView {
    constructor() {
        this._searchbar = document.querySelector('.searchbar--input_field');
    }

    getQuery() {
        let query = this._searchbar.value;
        console.log(query);
        this._clearField();
        return query;
    }

    _clearField() {
        this._searchbar.value = '';
    }
}

export default new SearchbarView();