// Initializer

bindEvents = function() {
  $(".altai-center").altaiCenter();
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
  Turbolinks.clearCache();
});
