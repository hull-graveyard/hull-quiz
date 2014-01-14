Hull.component({
  templates : ['quiz-selector'],
  refreshEvents: ['hull.admin.quiz.refresh'],
  datasources : {
     quizzes: {
      path: 'app/achievements',
      params: {
        where: {
          _type: 'Quiz'
        }
      }
    }
  },

  initialize : function() {
    var self = this;
    this.sandbox.on('quiz.refresh', function(quizId) {
      self.options.quizId = quizId;
      self.render();
    }.bind(this));
  },

  actions : {
    selectQuiz : function(event, action) {
      var quizId = action.data.quizId;
      this.sandbox.emit('hull.quiz.admin.view', quizId);
    }
  }
});
