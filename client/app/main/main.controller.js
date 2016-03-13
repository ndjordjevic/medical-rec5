'use strict';
(function () {
    var MainController = (function () {
        function MainController($http, $scope, socket) {
            this.$http = $http;
            this.socket = socket;
            this.awesomeThings = [];
            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('thing');
            });
        }
        MainController.prototype.$onInit = function () {
            var _this = this;
            this.$http.get('/api/things').then(function (response) {
                _this.awesomeThings = response.data;
                _this.socket.syncUpdates('thing', _this.awesomeThings);
            });
        };
        MainController.prototype.addThing = function () {
            if (this.newThing) {
                this.$http.post('/api/things', { name: this.newThing });
                this.newThing = '';
            }
        };
        MainController.prototype.deleteThing = function (thing) {
            this.$http.delete('/api/things/' + thing._id);
        };
        return MainController;
    })();
    angular.module('medicalRec5App')
        .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    });
})();
//# sourceMappingURL=main.controller.js.map