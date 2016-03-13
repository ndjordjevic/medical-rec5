'use strict';
angular.module('medicalRec5App', [
    'medicalRec5App.auth',
    'medicalRec5App.admin',
    'medicalRec5App.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
])
    .config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');
    $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map