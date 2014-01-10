/**
 *
 * Create and edit quizzes.
 *
 * @name Quiz
 * @template {admin} The main template. It shows the list of your quizzes or the form to edit a quiz.
 * @template {list}  Show the list of your quizzes and a form to add new quizzes.
 * @template {form}  Show the form to edit a quiz.
 * @datasource {quizzes} The collection of all the quizzes available in the application.
 * @example <div data-hull-component="admin/quiz@hull"></div>
 */
Hull.component({
  templates: ['admin', 'form'],

  datasources: {
    achievements: {
      path: 'app/achievements',
      params: {
        where: {
          _type: 'Quiz'
        }
      }
    }
  },

  events: {
    'submit form': 'submitQuiz'
  },

  actions: {
    selectQuiz: function(event, action) {
      var Model = this.sandbox.mvc.Model;

      var quiz;
      if (action.data.quizId != null) {
        quiz = this.data.achievements.get(action.data.quizId);
      } else {
        quiz = new Model();
      }

      if (this.currentQuiz) {
        this.stopListening(this.currentQuiz);
      }

      if (quiz) {
        this.currentQuiz = quiz;

        var self = this;
        this.listenTo(this.currentQuiz, 'change', function() {
          self.render();
        });

        this.render();
      }
    },

    addQuestion: function() {
      this.changeForm();

      var questions = this.currentQuiz.get('questions') || [];

      var last = questions[questions.length - 1];
      var count = last ? last.answers.length : 3;

      questions.push(this.generateQuestion(count));
      this.currentQuiz.set('questions', questions);

      this.currentQuiz.trigger('change');
    },

    addAnswer: function(event, action) {
      this.changeForm();

      var question = this.currentQuiz.get('questions')[action.data.questionIndex];
      question.answers = question.answers || [];
      question.answers.push(this.generateAnswer(action.data.questionIndex));

      this.currentQuiz.trigger('change');
    },

    deleteQuiz: function(event, action) {
      var self = this;

      if (confirm('Are you sure ?')) {
        this.api(this.currentQuiz.get('id'), 'delete').then(function () {
          var quiz = self.currentQuiz;
          self.currentQuiz = null;
        });
      }

      this.sandbox.emit('quiz.refresh');
      this.render();
    },

    duplicateQuiz: function(event, action) {
      this.changeForm();

      var Model = this.sandbox.mvc.Model;

      var params = this.sandbox.dom.getFormData(this.$form);
      params.name += ' (Duplicated)';
      var quiz = new Model(params);
      this.currentQuiz = quiz;

      var self = this;
      this.listenTo(this.currentQuiz, 'change', function() { self.render(); });

      this.render();
    },

    deleteQuestion: function(event, action) {
      this.changeForm();

      var questions = this.sandbox.util._.reject(this.currentQuiz.get('questions'), function(q, i) {
        return i == action.data.questionIndex;
      });

      this.currentQuiz.set('questions', questions);
    },

    deleteAnswer: function(event, action) {
      this.changeForm();

      var question = this.currentQuiz.get('questions')[action.data.questionIndex];
      var answers = this.sandbox.util._.reject(question.answers, function(a, i) {
        return i == action.data.answerIndex;
      });
      question.answers = answers;

      this.currentQuiz.trigger('change');
    }
  },

  changeForm: function() {
    var params = this.sandbox.dom.getFormData(this.$form);
    this.currentQuiz.set(params);

    return params;
  },

  submitQuiz: function(e) {
    e.preventDefault();

    var self = this,
      params = this.changeForm();
    var request;
    if (this.currentQuiz.isNew()) {
      params.type = 'quiz';
      request = this.api('app/achievements', params, 'post');
    } else {
      request = this.api(this.currentQuiz.id, params, 'put');
    }

    request.then(function() {
      self.render();
      self.sandbox.emit('quiz.refresh');

      alert('Your quiz has been updated.');
    });
  },

  beforeRender: function(data) {
    if (!this.currentQuiz) {
      var Model = this.sandbox.mvc.Model;
      var quiz;
      if (data.options.quizId) {
        quiz = this.data.achievements.get(data.options.quizId);
      } else {
        quiz = new Model();
        quiz.set('questions', [this.generateQuestion(), this.generateQuestion()]);
      }
      this.currentQuiz = quiz;

      var self = this;
      if (this.currentQuiz) {
        this.currentQuiz.on('change', function() {
          self.render();
        });
      }
    }
    var _ = this.sandbox.util._;

    if (this.currentQuiz) {
      data.quiz = this.currentQuiz.toJSON();
      _.each(data.quiz.questions, function(q, i) {
        q.index = i + 1;

        _.each(q.answers, function(a) {
          a.questionIndex = i;
        });
      });

      data.quiz.isNew = this.currentQuiz.isNew();
      if (!data.quiz.isNew) {
        data.embedCode = '<div data-hull-component="games/quiz@hull" data-hull-id="' + data.quiz.id + '"></div>';
      }
    }
  },

  afterRender: function(data) {
    if (data.quiz && data.quiz.id) {
      this.$find('[data-hull-quiz-id="' + data.quiz.id + '"]').addClass('active');
    }

    this.$form = this.$('.js-hull-quiz-form');
  },

  generateQuestion: function(answersCount) {
    var answers = [];
    for (var j = 0; j < (answersCount || 3); j += 1) {
      answers.push(this.generateAnswer());
    }
    return {
      ref: this.generateRef('q'),
      answers: answers
    };
  },

  generateAnswer: function(index) {
    return {
      ref: this.generateRef('a'),
      questionIndex: index
    };
  },

  generateRef: function(prefix) {
    return prefix + '-' + this.sandbox.util._.uniqueId() + (new Date().getTime());
  }
});
