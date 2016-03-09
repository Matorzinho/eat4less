angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  // Form data for the signup modal
  $scope.signupData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Create the signup modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Triggered in the signup modal to close it
  $scope.closeSignup = function() {
    $scope.signupModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

  // Open the signup modal
  $scope.signup = function() {
    $scope.signupModal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  // Perform the login action when the user submits the login form
  $scope.doSignup = function() {
    console.log('Doing signup', $scope.signupData);
    $timeout(function() {
      $scope.closeSignup();
    }, 1000);
  };

  $scope.displayCustomer = true;
  $scope.displayRestaurant = false;
  
  $scope.showCustomer = function(){
    $scope.displayCustomer = true;
    $scope.displayRestaurant = false;
  };

  $scope.showRestaurant = function(){
    $scope.displayRestaurant = true;
    $scope.displayCustomer = false;
  };


})

  
.controller('HomeCtrl', function($scope) {
  $scope.restaurants = [
    { title: 'Two for one', id: 1 },
    { title: 'All day special', id: 2 },
    { title: 'The big meal', id: 3 },
    { title: 'Buy three get one free', id: 4 },
    { title: '50% off burguers', id: 5 },
    { title: 'Best deal', id: 6 }
  ];
})

.controller('RestaurantsCtrl', function($scope) {
  $scope.restaurants = [
    { title: 'Milano', id: 1 },
    { title: 'Star Pizza', id: 2 },
    { title: 'Mc Donalds', id: 3 },
    { title: 'Bobs', id: 4 },
    { title: 'Romayos', id: 5 },
    { title: 'Yan', id: 6 }
  ];
})

// .controller('PlaylistCtrl', function($scope, $stateParams) {});
