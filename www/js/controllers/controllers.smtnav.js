angular.module('starter.controllers.smtnav', [])
.controller('NavCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.showMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
})

.controller('TestingCtrl', function ($scope, $state, $stateParams) {
        
    })

.controller('SettingsCtrl', function ($scope, $state, $stateParams) {
    console.log("$state: " + $state);
    console.log("$stateParams: " + $stateParams);
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    //$state.transitionTo('settings');
    $scope.$on('$ionicView.enter', function () {
        // Code you want executed every time view is opened
        console.log('SettingsCtrl $ionicView.enter')
    });

    $scope.$on('$ionicView.beforeLeave', function () {
        // Code you want executed every time view is about to open
        console.log('SettingsCtrl $ionicView.beforeLeave')
    })
});