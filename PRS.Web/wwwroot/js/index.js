var index = {

  // properties

  // init
  init: function (settings) {
    index.config = {
      navlinks: $("#ul navbar-nav li btn"),
      container: $("<div class='container'></div>"),
      urlBase: "/foo.php?item="
    };

    // Allow overriding the default config
    $.extend(index.config, settings);

    index.setup();
  },


  // methods
  setup: function () {
    index.config.navlinks
      .click(index.highlightNav)
  },

  highlightNav: function () {
    var button = $(this);
    button.toggleclass('btn-adam');
  }

}