(function(module){

  var Search = function(instance){
    this.state = instance.state;
    this.plate = instance.plate;
    this.zip = instance.zip;
  };

  Search.all = [];

  Search.form = function(){
    $('#searchForm').on('submit', function(e) {
    });
  };

  Search.state = function(){
    $('#searchBtn').on('submit', function(e){
      if ($('#searchState').val && $('#searchPlate').val){
        var state = $('#searchState').val;
        var plate = $('#searchPlate').val;
        $('#searchResults').hide();
        var result = $.grep(localStorage.invaders, function(n, index){
          console.log(state === localStorage.invaders.lic_state);
        });
        // $('#searchResults').find('li').val() === state;
        $('#searchResults').append(result);
      }
    // $('#blogData').find('li').val() === $('')

    });
  };

})(window);
