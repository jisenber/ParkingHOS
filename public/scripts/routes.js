(function() {
  page('/', Cars.getData, index.renderHomePage);
  page('/postNew/post', index.renderPostPage, index.renderUploadButton, Filters.populatePostModel);
  page('/search', index.renderSearchPage, Search.clearSearch, Search.populateFilters);
  page('/leaderboard', index.renderLeaderPage);
  page('*', function() {
    console.log('not found');
  });
  page();
})();
