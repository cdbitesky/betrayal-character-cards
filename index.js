window.APP = window.angular.module('main', []).controller('MainCtrl', function($scope) {
  $scope.characters = {
    "Brandon Jaspers": {
      colorClass: "green",
      traits: [
        {name: "Speed",  values: [0,3,4,4,4,5,6,7,8], start: 3},
        {name: "Might",  values: [0,2,3,3,4,5,6,6,7], start: 4},
        {name: "Sanity", values: [0,3,3,3,4,5,6,7,8], start: 4},
        {name: "Knowl",  values: [0,1,3,3,5,5,6,6,7], start: 3},
      ],
    },
    "Darrin \"Flash\" Williams": {
      colorClass: "red",
      traits: [
        {name: "Speed",  values: [0,4,4,4,5,6,7,7,8], start: 5},
        {name: "Might",  values: [0,2,3,3,4,5,6,6,7], start: 3},
        {name: "Sanity", values: [0,1,2,3,4,5,5,5,7], start: 3},
        {name: "Knowl",  values: [0,2,3,3,4,5,5,5,7], start: 3},
      ],
    },
    "Father Rhinehardt": {
      colorClass: "white",
      traits: [
        {name: "Speed",  values: [0,2,3,3,4,5,6,7,7], start: 3},
        {name: "Might",  values: [0,1,2,2,4,4,5,5,7], start: 3},
        {name: "Sanity", values: [0,3,4,5,5,6,7,7,8], start: 5},
        {name: "Knowl",  values: [0,1,3,3,4,5,6,6,8], start: 4},
      ],
    },
    "Heather Granville": {
      colorClass: "purple",
      traits: [
        {name: "Speed",  values: [0,3,3,4,5,6,6,7,8], start: 3},
        {name: "Might",  values: [0,3,3,3,4,5,6,7,8], start: 3},
        {name: "Sanity", values: [0,3,3,3,4,5,6,6,6], start: 3},
        {name: "Knowl",  values: [0,2,3,3,4,5,6,7,8], start: 5},
      ],
    },
    "Jenny LeClerc": {
      colorClass: "purple",
      traits: [
        {name: "Speed",  values: [0,2,3,4,4,4,5,6,8], start: 4},
        {name: "Might",  values: [0,3,4,4,4,4,5,6,8], start: 3},
        {name: "Sanity", values: [0,1,1,2,4,4,4,5,6], start: 5},
        {name: "Knowl",  values: [0,2,3,3,4,4,5,6,8], start: 3},
      ],
    },
    "Madame Zostra": {
      colorClass: "blue",
      traits: [
        {name: "Speed",  values: [0,2,3,3,5,5,6,6,7], start: 3},
        {name: "Might",  values: [0,2,3,3,4,5,5,5,6], start: 4},
        {name: "Sanity", values: [0,4,4,4,5,6,7,8,8], start: 3},
        {name: "Knowl",  values: [0,1,3,4,4,4,5,6,6], start: 4},
      ],
    },
    "Missy Dubourde": {
      colorClass: "yellow",
      traits: [
        {name: "Speed",  values: [0,3,4,5,6,6,6,7,7], start: 3},
        {name: "Might",  values: [0,2,3,3,3,4,5,6,7], start: 4},
        {name: "Sanity", values: [0,1,2,3,4,5,5,6,7], start: 3},
        {name: "Knowl",  values: [0,2,3,4,4,5,6,6,6], start: 4},
      ],
    },
    "Ox Bellows": {
      colorClass: "red",
      traits: [
        {name: "Speed",  values: [0,2,2,2,3,4,5,5,6], start: 5},
        {name: "Might",  values: [0,4,5,5,6,6,7,8,8], start: 3},
        {name: "Sanity", values: [0,2,2,3,4,5,5,6,7], start: 3},
        {name: "Knowl",  values: [0,2,2,3,3,5,5,6,6], start: 3},
      ],
    },
    "Peter Akimoto": {
      colorClass: "green",
      traits: [
        {name: "Speed",  values: [0,3,3,3,4,6,6,7,7], start: 4},
        {name: "Might",  values: [0,2,3,3,4,5,5,6,8], start: 3},
        {name: "Sanity", values: [0,3,4,4,4,5,6,6,7], start: 4},
        {name: "Knowl",  values: [0,3,4,4,5,6,7,7,8], start: 3},
      ],
    },
    "Professor Longfellow": {
      colorClass: "white",
      traits: [
        {name: "Speed",  values: [0,2,2,4,4,5,5,6,6], start: 4},
        {name: "Might",  values: [0,1,2,3,4,5,5,6,6], start: 3},
        {name: "Sanity", values: [0,1,3,3,4,5,5,6,7], start: 3},
        {name: "Knowl",  values: [0,4,5,5,5,5,6,7,8], start: 5},
      ],
    },
    "Vivian Lopez": {
      colorClass: "blue",
      traits: [
        {name: "Speed",  values: [0,3,4,4,4,4,6,7,8], start: 4},
        {name: "Might",  values: [0,2,2,2,4,4,5,6,6], start: 3},
        {name: "Sanity", values: [0,4,4,4,5,6,7,8,8], start: 3},
        {name: "Knowl",  values: [0,4,5,5,5,5,6,6,7], start: 4},
      ],
    },
    "Zoe Ingstrom": {
      colorClass: "yellow",
      traits: [
        {name: "Speed",  values: [0,4,4,4,4,5,6,8,8], start: 4},
        {name: "Might",  values: [0,2,2,3,3,4,4,6,7], start: 4},
        {name: "Sanity", values: [0,3,4,5,5,6,6,7,8], start: 3},
        {name: "Knowl",  values: [0,1,2,3,4,4,5,5,5], start: 3},
      ],
    },
  };
  $scope.current = {
    character: "",
    health: [],
  };
  loadState();

  // for iteration purposes
  $scope.traitIndexes = [0,1,2,3];
  // backwards so that they grow upward
  $scope.healthValues = [8,7,6,5,4,3,2,1,0];

  $scope.$watch("current.character", function(newValue, oldValue) {
    if (newValue === oldValue) return;
    if ($scope.current.character) {
      // a character is selected
      if ($scope.current.health.length === 0 || oldValue) {
        // either initializing from blank data, or we just switched away from a character
        for (var t = 0; t < $scope.traitIndexes.length; t++) {
          $scope.current.health[t] = $scope.character().traits[t].start;
        }
      }
    } else {
      // no character selected
      $scope.current.health = [];
    }
    saveState();
  });

  $scope.character = function() {
    return $scope.characters[$scope.current.character] || {};
  };
  $scope.traitTable = function() {
    return $scope.character().traits || [];
  };
  $scope.modifyHealth = function(t, delta) {
    var healths = $scope.current.health;
    var value = healths[t];
    if (value == null) value = $scope.character().traits[t].start;
    healths[t] = clamp(value + delta, 0, $scope.healthValues.length - 1);
    saveState();
  };
  $scope.cellClass = function(t, h) {
    if (!$scope.current.character) return "";
    var styles = [];
    if ($scope.traitTable()[t].start === h) styles.push("starting");
    if ($scope.current.health[t] === h) styles.push("current");
    return styles.join(" ");
  };
  function saveState() {
    localStorage.betrayalState = window.angular.toJson($scope.current);
  }
  function loadState() {
    var cachedState = localStorage.betrayalState;
    if (cachedState) $scope.current = window.angular.fromJson(cachedState);
  }

  function clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
  }
});

