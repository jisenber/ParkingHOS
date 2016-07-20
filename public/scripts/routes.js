(function() {
  page('/', index.renderHomePage, Cars.getData);
  page('/post', index.renderPostPage, index.renderUploadButton, Filters.populatePostModel);
  page('/search', index.renderSearchPage, Search.clearSearch);
  page('/leaderboard', index.renderLeaderPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
