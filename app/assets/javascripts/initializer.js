// Initializer

bindEvents = function() {
  $(".overlay").hide();
  $(".altai-center").altaiCenter();
  $(".altai-panel").altaiPanel({
    trim: 112
  });
  $(".altai-toggle").altaiToggle({
    effect: "fade",
    wrapper: false,
    close: false
  });
  var divHeight = $('.universal.main').innerHeight();
  $('.responsive-navigation').css('min-height', divHeight + 'px');
};

$(document).on( "turbolinks:load", function() {
  bindEvents();
  Turbolinks.clearCache();
});

$(window).resize(function() {
  $(".altai-panel").altaiPanel({
    trim: 112
  });
  var divHeight = $('.universal.main').innerHeight();
  $('.responsive-navigation').css('min-height', divHeight + 'px');
});

$(window).trigger('resize');
