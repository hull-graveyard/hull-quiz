Hull.component({
  templates: ['empty', 'users', 'quiz', 'stats'],
  refreshEvents: ['model.hull.me.change'],
  events: {
    'click .new-quiz': '_toNewQuiz'
  },
  initialize: function () {
    this.sandbox.on('hull.quiz.admin.section.*', function (name) {
      this.render(name);
    }, this);
  },
  _toNewQuiz: function () {
    this.sandbox.emit('hull.quiz.admin.new_quiz');
  }
});
