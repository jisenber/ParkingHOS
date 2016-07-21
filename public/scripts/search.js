(function(module){

  var Search = {};

  Search.all = [];

  Search.populateFilters = function() {
    $('#blogData article').each(function() {
      var val = $(this).find('.stateUrl').attr('value').toUpperCase();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#searchState option[value="' + val + '"]').length === 0) {
        $('#searchState').append(optionTag);
      }
    });
  };

  Search.statePlate = function(){
    $('#searchBtn').on('click', function(e){
      e.preventDefault();
      var carArr = [];
      if ($('#searchState').val() && $('#searchPlate').val()){
        var state = $('#searchState').val().toUpperCase();
        var plate = $('#searchPlate').val().toUpperCase();
        $('#searchResults').empty();
        Cars.all.forEach(function(instance, i) {
          if (state === Cars.all[i].lic_state && plate === Cars.all[i].lic_plate) {
            $('#searchResults').append('<img src = "' + Cars.all[i].img_url + '">' + '<br>');
          }
        });
      }
    });
  };

  Search.clearSearch = function() {
    $('#searchResults').empty();
  };

  module.Search = Search;

})(window);
