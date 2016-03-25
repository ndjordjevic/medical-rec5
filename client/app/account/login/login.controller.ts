'use strict';

class LoginController {
  private user;
  private errors;
  private submitted;
  private Auth;
  private $state;

  constructor(Auth, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('medicalRec5App')
  .controller('LoginController', LoginController);
