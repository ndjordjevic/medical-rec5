'use strict';
var LoginController = (function () {
    function LoginController(Auth, $state) {
        this.user = {};
        this.errors = {};
        this.submitted = false;
        this.Auth = Auth;
        this.$state = $state;
    }
    LoginController.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.$valid) {
            this.Auth.login({
                email: this.user.email,
                password: this.user.password
            })
                .then(function () {
                // Logged in, redirect to home
                _this.$state.go('main');
            })
                .catch(function (err) {
                _this.errors.other = err.message;
            });
        }
    };
    return LoginController;
})();
angular.module('medicalRec5App')
    .controller('LoginController', LoginController);
//# sourceMappingURL=login.controller.js.map