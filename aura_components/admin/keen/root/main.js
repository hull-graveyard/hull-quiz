/**
 *
 *
 */

Hull.component({

  type: 'Hull',

  require:["//dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js"],

  templates: ['main', 'no_keen'],

  initialize: function(){
    var settings = Hull.config.services.settings.keenio;
    if (!settings) {
      this.template = 'no_keen';
    } else {
      window.Keen.configure(settings);
    }
  },

  actions: {
    reset: function () {
      this.options.quizId = undefined;
      this.render();
    }
  }

});
