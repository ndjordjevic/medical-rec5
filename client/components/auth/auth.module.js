'use strict';
angular.module('medicalRec5App.auth', [
    'medicalRec5App.constants',
    'medicalRec5App.util',
    'ngCookies',
    'ui.router'
])
    .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map