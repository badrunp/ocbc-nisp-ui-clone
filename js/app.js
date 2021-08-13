var app = {
    handleNavbar: function () {
        return {
            isDropdown: false,
            isIndividu: false,
            isUkm: false,
            isKoprasi: false,
            isSyariah: false,
            isTentang: false,
            isKarir: false,
            isDelayed: true,
            isMenuItems: true,
            isMenuSearch: false,
            width: window.innerWidth,
            isLogo: true,
            isOpenMobileMenu: false,
            handleOpen: function (name) {
                this.isIndividu = false;
                this.isUkm = false;
                this.isKoprasi = false;
                this.isSyariah = false;
                this.isTentang = false;
                this.isKarir = false;
                if (name == 'individu') {
                    this.isIndividu = true
                } else if (name == 'ukm') {
                    this.isUkm = true;
                } else if (name == 'koprasi') {
                    this.isKoprasi = true;
                } else if (name == 'syariah') {
                    this.isSyariah = true;
                } else if (name == 'tentang') {
                    this.isTentang = true;
                } else if (name == 'karir') {
                    this.isKarir = true;
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
            handleSearchOpen: function(){
                this.isMenuSearch = true;
                this.isMenuItems = false; 
                if(this.width < 1280){
                    this.isLogo = false
                }else{
                    this.isLogo = true
                }
            },
            handleSearchClose: function(){
                this.isMenuSearch = false;
                this.isMenuItems = true;
                this.isLogo = true;
            },
            handleResize: function(){
                this.width = window.innerWidth;
                if(window.innerWidth > 1280){
                    this.isLogo = true;
                }else{
                    if(this.isMenuSearch == true){
                        this.isLogo = false;
                    }else{
                        this.isLogo = true;
                    }
                }
                if(window.innerWidth > 1280){
                    this.isOpenMobileMenu = false;
                }
            },
            handleToggleMobileMenu: function(){
                this.isOpenMobileMenu = !this.isOpenMobileMenu;
            },
            handleToggleMobileMenuClose: function(){
                this.isOpenMobileMenu = false;
            },
        }
    },
    handleCarousel: function(){
        return {
            isCarouselOpen: -1,
            loop: function(){
                setInterval(() => this.isCarouselOpen = (this.isCarouselOpen + 1) % 3, 6000);
            },
            init: function(){
                if(this.isCarouselOpen == -1){
                    setTimeout(()=> this.isCarouselOpen = 0)
                }
                
                this.loop();
                
            }
        }
    },
    init: function () {
        this.handleNavbar()
        this.handleCarousel()
    }
}

app.init();