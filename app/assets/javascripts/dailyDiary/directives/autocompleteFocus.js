app.directive('autocompleteFocus', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      scope.$watch(attr.autocompleteFocus, function (n, o) {
        if (n != 0 && n) {
          //assume this is the input box of the autocomplete
          element[0].children[0].children[0].focus();
        }
      });
    }
  };
});