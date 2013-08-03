// Let the bottom div fill the page
var headerHeight = $('#header').height(),
  totalHeight = $(document).height();
$('#main').height(totalHeight - headerHeight);
