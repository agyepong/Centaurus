angular.module('starter.controllers.smtnav', [])
.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.showMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
})

.controller('SettingsCtrl', function ($scope, $state, $stateParams) {
    console.log("$state: " + $state);
    console.log("$stateParams: " + $stateParams);
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    //$state.transitionTo('settings');
});