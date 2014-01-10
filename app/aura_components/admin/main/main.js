Hull.component({

  defaultPanel: "users",

  templates: ['empty', 'not_admin', 'intro', 'users', 'new_quiz', 'stats'],
  refreshEvents: ['model.hull.me.change'],
  initialize: function () {
    this.firstRun = true;
    "use strict";
    this.sandbox.on('hull.quiz.admin.view', function (quizId) {
      var current = window.location.hash;
      if (current === '#stats') {
        this.render('stats', {quizId: quizId});
      } else {
        this.render('new_quiz', {quizId: quizId});
      }
    }, this);
    this.sandbox.on('hull.quiz.admin.new_quiz', function () {
      this.render('new_quiz');
    }, this);
    this.sandbox.on('hull.quiz.admin.section.*', function (section) {
      this.render(section === 'stats' ? 'stats' : 'empty');
    }, this);
    this.sandbox.on('hull.user.select', function (userId) {
      this.render('users', {
        userId: userId
      });
    }, this);
    if (!this.sandbox.isAdmin()) {
      this.template = 'not_admin';
    }
  },
  afterRender: function () {
    if (this.firstRun) {
      this.firstRun = false;
      this.sandbox.emit('hull.quiz.admin.section.' + this.defaultPanel, this.defaultPanel);
    }
  }
});
