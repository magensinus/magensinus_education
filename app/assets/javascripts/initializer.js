// Initializer

bindEvents = function() {
  $(".altai-center").altaiCenter();
  $(".altai-panel").altaiPanel({
    trim: 112
  });
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
  Turbolinks.clearCache();
});
