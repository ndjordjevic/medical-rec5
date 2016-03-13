'use strict';
var NavbarController = (function () {
    //end-non-standard
    function NavbarController(Auth) {
        //start-non-standard
        this.menu = [{
                'title': 'Home',
                'state': 'main'
            }];
        this.isCollapsed = true;
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }
    return NavbarController;
})();
angular.module('medicalRec5App')
    .controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map