
var hanldeNavbar = {
    handleMouse: function(){
        return {
            isDropdown: false,
            handleOpen: function(){
                this.isDropdown = true;
            },
            handleClose: function(){
                this.isDropdown = false;
            }
        }
    },
    init: function() {
        this.handleMouse()
    }
}

hanldeNavbar.init();