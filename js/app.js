
var hanldeNavbar = {
    handleMouse: function () {
        return {
            isDropdown: false,
            isIndividu: false,
            isUkm: false,
            isKoprasi: false,
            isSyariah: false,
            isTentang: false,
            isKarir: false,
            isDelayed: true,
            handleOpen: function (name) {
                if (name == 'individu') {
                    this.isIndividu = true
                    this.isUkm = false;
                    this.isKoprasi = false;
                    this.isSyariah = false;
                    this.isTentang = false;
                    this.isKarir = false;
                } else if (name == 'ukm') {
                    this.isIndividu = false;
                    this.isUkm = true;
                    this.isKoprasi = false;
                    this.isSyariah = false;
                    this.isTentang = false;
                    this.isKarir = false;
                } else if (name == 'koprasi') {
                    this.isIndividu = false
                    this.isUkm = false;
                    this.isKoprasi = true;
                    this.isSyariah = false;
                    this.isTentang = false;
                    this.isKarir = false;
                } else if (name == 'syariah') {
                    this.isIndividu = false;
                    this.isUkm = false;
                    this.isKoprasi = false;
                    this.isSyariah = true;
                    this.isTentang = false;
                    this.isKarir = false;
                } else if (name == 'tentang') {
                    this.isIndividu = false;
                    this.isUkm = false;
                    this.isKoprasi = false;
                    this.isSyariah = false;
                    this.isTentang = true;
                    this.isKarir = false;
                } else if (name == 'karir') {
                    this.isKarir = true;
                    this.isIndividu = false;
                    this.isUkm = false;
                    this.isKoprasi = false;
                    this.isSyariah = false;
                    this.isTentang = false;
                }
            },
            handleOpen2: function () {
                this.isDropdown = true;
                this.isDelayed = true;
            },
            handleClose: function () {
                this.isDelayed = false;
                this.isDropdown = false;
                this.isIndividu = false;
                this.isUkm = false;
                this.isKoprasi = false;
                this.isSyariah = false;
                this.isTentang = false;
                this.isKarir = false;
                setTimeout(() => {
                    this.isDelayed = true;
                }, 1000)
            },
            isDelayedCheck: function(){
                return this.isDelayed == false
            }
        }
    },
    init: function () {
        this.handleMouse()
    }
}

hanldeNavbar.init();