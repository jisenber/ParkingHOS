(function(module) {

  var Post = {};

  Post.submitInvader = function() {
    $('#postForm').on('submit', function(e) {
      e.preventDefault();
      var ls = $('#stateField').val();
      var lp = $('#plateField').val();
      var ma = $('#makeField').val();
      var mo = $('#modelField').val();
      window.location.assign('/postNew' + '?lp=' + lp + '&ls=' + ls + '&ma=' + ma + '&mo=' + mo);
    });
  };
  module.Post = Post;
  Post.submitInvader();

})(window);
