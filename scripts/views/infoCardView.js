class InfoCardView {
    constructor() {
        this._infoSection = document.querySelector('.info-section');
        this._infoSectionCard = document.querySelector('.info-section--card');
        this._infoSectionBtn = document.querySelector('.info-section--card_btn');

        this._appearenceCounter = JSON.parse(localStorage.getItem('_appeareneceCounter')) || 0;
    }

    _render() {
        if (this._appearenceCounter === 0) {
            this._infoSection.style.opacity = '1';
            this._infoSectionCard.classList.add('infoSectionCard-active');
                   
        } else {
            this._infoSection.style.opacity = '0';
            this._infoSection.style.display = 'none';
        }
    }

    _hideInfoSection() {
        this._infoSection.style.opacity = '0';
        setTimeout(this._removeInfoSection.bind(this), 300)
        this._appearenceCounter++;
        localStorage.setItem('_appeareneceCounter', JSON.stringify(this._appearenceCounter)); 
    }

    _removeInfoSection() {
        this._infoSection.style.display = 'none';
    }

    _addHandlerBtnHideSection() {
        this._infoSectionBtn.addEventListener('click', this._hideInfoSection.bind(this));
    }


    renderInfoCard() {
        this._render();
        this._addHandlerBtnHideSection();
        
    }
}

export default new InfoCardView();