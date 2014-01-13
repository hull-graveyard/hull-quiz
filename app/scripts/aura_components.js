/**
 *
 *
 */

Hull.component({

  type: 'Hull',

  require:["//dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js"],

  templates: ['main'],

  options:{
    eventCollection:'testing',
    analysisType:'sum',
    targetProperty:'value',
    timeFrame: 'this_week',
    interval: 'daily',
    timezone:'3600'
  },

  initialize: function(){
  },

  beforeRender: function(data){
  },

  afterRender: function(data){
    var self = this;
    var _ = this.sandbox.util._;
    var filters = {
      analysisType: data.options.analysisType,
      targetProperty: data.options.targetProperty
    };
    if (data.options.filter) {
      var splitFilter = data.options.filter.split(' ');
      var reduced = _.reduce(_.pluck(splitFilter, 'length'), function (a, b) {
        return a && b;
      });
      if (reduced) {
        filters.filters = [{
          property_name: splitFilter[0],
          operator: splitFilter[1],
          property_value: splitFilter[2]
        }];
      }
    }
    Keen.onChartsReady(function() {
      var metric = new Keen.Metric(data.options.eventCollection, filters);
      var conf = {};
      if (data.options.label) {
        conf.label = data.options.label
      }
      metric.draw(self.$el[0], conf);
    });
  },

  actions: {
  }

});




//--------


/**
 *
 *
 */

Hull.component({

  type: 'Hull',

  // require:["//dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js"],

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




//--------


/**
 *
 *
 */

Hull.component({

  type: 'Hull',

  require:["//dc8na2hxrj29i.cloudfront.net/code/keen-2.1.0-min.js"],

  templates: ['main'],

  options:{
    eventCollection:'testing',
    analysisType:'count',
    targetProperty:'value',
    timeframe: 'this_week',
    interval: 'daily',
    timezone:'3600'
  },

  initialize: function(){
  },

  beforeRender: function(data){
  },

  afterRender: function(data){
    var self = this;
    var _ = this.sandbox.util._;
    var filters = {
      analysisType: data.options.analysisType,
      targetProperty: data.options.targetProperty,
      timeframe: data.options.timeframe,
      interval: data.options.interval
    };
    if (data.options.filter) {
      var splitFilter = data.options.filter.split(' ');
      var reduced = _.reduce(_.pluck(splitFilter, 'length'), function (a, b) {
        return a && b;
      });
      if (reduced) {
        filters.filters = [{
          property_name: splitFilter[0],
          operator: splitFilter[1],
          property_value: splitFilter[2]
        }];
      }
    }
    Keen.onChartsReady(function() {
      var series = new Keen.Series(data.options.eventCollection, filters);
      series.draw(self.$el[0]);
    });
  },

  actions: {
  }

});




//--------


Hull.component({
  templates: ['empty', 'users', 'quiz', 'stats'],
  refreshEvents: ['model.hull.me.change'],
  events: {
    'click .new-quiz': '_toNewQuiz',
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




//--------


Hull.component('admin', {
	templates : ['admin'],
	datasources : {

	},

	initialize : function() {

	},

	afterRender : function(data) {

	},
	actions : {

		resetUserBadges : function(event, action) {
			var self = this;
			var _ = this.sandbox.util._;

			this.api('me/badges').then(function(badges) {
				_.each(badges, function(badge) {
					console.warn('delete ', badge);
					self.api(badge.id, 'delete');
				});
			});

		}

	}
});




//--------


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




//--------


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




//--------


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




//--------


Hull.component({
  templates: ['intro'],
  refreshEvents: ['model.hull.me.change'],
  events: {
    'click .nav>li>a': 'changePage'
  },
  changePage: function (evt) {
    var dest = $(evt.currentTarget).attr('href').replace('#', '');
    this.sandbox.emit('hull.quiz.admin.section.' + dest, dest);
  }
});




//--------


/**
 *
 * Displays the profile of any user of your app.
 *
 * @name User Profile
 * @template {user_profile} Displays detailed informations about the selected user.
 * @param {String} id The id of the user you want to display
 * @example <div data-hull-component="admin/user_profile@hull"></div>
 *
 */
Hull.component({
  type: 'Hull',

  templates: [
    'user_profile'
  ],

  options:{
    id:'me'
  },

  datasources: {
    user: function() {
      if (this.options.id) { return this.api(this.options.id, { fields: 'user.profiles' }); }
    },
    badges: function() {
      if (this.options.id) {  return this.api(this.options.id + "/badges"); }
    }
  },

  initialize: function() {
    this.sandbox.on('hull.user.select', this.renderUser, this);
  },

  beforeRender: function(data){
    if (!data.user) { return; }

    data.userHasProfiles = !this.sandbox.util._.isEmpty(data.user.profiles);
  },

  actions: {
    promote: function(e, action) {
      this.promoteUser(action.data.role);
    },

    approve: function() {
      var self = this;
      this.api(this.data.user.id + '/approve', 'post').then(function() {
        self.render();
      });
    },

    unapprove: function() {
      var self = this;
      this.api(this.data.user.id + '/unapprove', 'post').then(function() {
        self.render();
      });
    },

    deleteBadge: function(e, action) {
      var self = this;
      if (confirm("Sure ?")) {
        this.api(action.data.id, 'delete', function(res) {
          self.render();
        });
      }
    }
  },

  renderUser: function(id) {
    var displayedUser = this.data.user;
    if (displayedUser && displayedUser.id === id) { return; }
    this.options.id = id;
    this.user = id;
    this.render();
  },

  promoteUser: function(role) {
    var method = role === 'admin' ? 'post' : 'delete';
    var self = this;
    this.api('admins/' + this.data.user.id, method).then(function() {
      self.render();
    });
  }
});




//--------


/**
 *
 * Displays the list of users of your app.
 *
 * Access to this component is limited to the administrators, you will need to be logged in to your admin on hullapp.io to access data.
 *
 * @name Users List
 * @template {users}     Displays the list of the users.
 * @template {forbidden} A message to be displayed when the credentials don't allow access to the data
 * @datasource {users} The list of users (Only readable by admins)
 * @example <div data-hull-component="admin/users_list@hull"></div>
 */

Hull.component({
  type: 'Hull',

  templates: ['users_list'],

  refreshEvents: ['model.hull.me.change'],

  renderError: function(err) {
    if (err.message.status === 401) {
      this.html('You are not authorized to list users');
    }
  },

  datasources: {
    users: 'users',
    app: 'app'
  },

  initialize: function() {
    this.query = {};
    this.currentQuery = {};
  },

  beforeRender: function(data){
    var datasource = this.datasources.users;

    data.showPagination = datasource.isPaginable();
    data.showNextButton = !datasource.isLast();
    data.showPreviousButton = !datasource.isFirst();

    data.currentQuery = this.currentQuery;

    data.filters = {
      All: { action: 'resetFilter', isActive: this.query.approved == null },
      Approved: { action: 'filterApproved', isActive: this.query.approved === true },
      Unapproved: { action: 'filterUnapproved', isActive: this.query.approved === false }
    };
  },

  afterRender: function() {
    var $searchForm = this.$('.js-hull-users-search');
    $searchForm.on('submit', this.sandbox.util._.bind(function(e) {
      e.preventDefault();
      this.search($searchForm.find('.js-hull-users-search-query').val());
    }, this));
  },

  actions: {
    nextPage: function() {
      var datasource = this.datasources.users;
      if (!datasource.isLast()) {
        datasource.next();
        this.render();
      }
    },

    previousPage: function() {
      var datasource = this.datasources.users;
      if (!datasource.isFirst()) {
        datasource.previous();
        this.render();
      }
    },

    selectUser: function(event, action) {
      this.sandbox.emit('hull.user.select', action.data.id);
    },

    sort: function(event, action) {
      this.sort(action.data.field, action.data.direction);
    },

    resetSearch: function() {
      delete this.query.email;
      this.filter();
    },

    resetFilter: function() {
      delete this.query.approved;
      this.filter();
    },

    filterApproved: function() {
      this.query.approved = true;
      this.filter();
    },

    filterUnapproved: function() {
      this.query.approved = false;
      this.filter();
    }
  },

  sort: function(field, direction) {
    this.datasources.users.sort(field, direction);
    this.render();
  },

  filter: function() {
    if(this.queryHasChanged()) {
      this.datasources.users.where(this.query);
      this.render();

      this.currentQuery = this.sandbox.util._.clone(this.query);
    }
  },

  queryHasChanged: function() {
    var _ = this.sandbox.util._;

    if (_.isEmpty(this.query) && _.isEmpty(this.currentQuery)) { return false; }
    if (_.size(this.query) !== _.size(this.currentQuery)) { return true; }

    return !this.sandbox.util._.every(this.query, function(v, k) {
      return this.currentQuery[k] === v;
    }, this);
  },

  search: function(email) {
    var query;
    if (!this.sandbox.util._.string.isBlank(email)) {
      this.query.email = email;
    } else {
      delete this.query.email;
    }

    this.filter();
  }
});




//--------


// This component listens to all events from the quiz
// to set the proper background color

/*global Hull:true , $:true*/
'use strict';
Hull.component({
  templates: [ 'main' ],
  initialize: function() {
    var $body = $('body');
    this.sandbox.on('hull.quiz.**', function(data){
      if(data.current){
        // Change background color
        $body.css({
          backgroundColor: (data.current.question) ? data.current.question.description : ''
        });
      }
    }.bind(this));

  }
});





//--------


/**
 *
 * A complete Quiz engine.
 *
 * A quiz is a game in which the player attempts to find the answer to questions from multiple possible answers.
 * To create a quiz, use the `admin/quiz` component in an admin page, which will let you create a new Quiz (which is a particular type of achievement).
 *
 * Then use this quiz's ID as a parameter for your component.
 *
 * @name Quiz
 * @param {String} id The id of the quiz you want to display
 * @template {intro}    Show the title and the description of the quiz. And secondarily the identity component if the user is not connected..
 * @template {question} Show a question and its answers.
 * @template {answer}   A partial template used in the `question` template. It shows the name and the description of the answer.
 * @template {finished} Say to the user that the quiz is finish.
 * @template {result}   Show to the user his score.
 * @datasource {quiz} A collection of all the questions and their possible answers.
 * @example <div data-hull-component="games/quiz@hull"  data-hull-id="5130a76ed4384e508f000009"></div>
 */

Hull.component({

  requiredOptions: ['id'],

  templates: [
    'intro',
    'question',
    'answer',
    'finished',
    'result'
  ],

  answers: {},

  datasources: {
    quiz: function() {
      return this.quiz || this.sandbox.data.api(this.id);
    },
    badge: function() {
      return this.badge || this.api('me/badges/' + this.id);
    }
  },

  trackingData: function() {
    var data = { type: 'quiz' };
    var quiz = this.data.quiz;
    if (quiz && quiz.get) { data.name = quiz.get('name'); }
    return data;
  },

  initialize: function() {
    this.sandbox.on('hull.model.' + this.id + '.change', function() {
      this.render();
    }.bind(this));
    this.sandbox.on('model.hull.me.change', function() {
      if(this.loggedIn()) {this.actions.start.apply(this); }
    }.bind(this));
    this.currentQuestionIndex = 0;
    this.answers = {};
  },

  beforeRender: function(data) {
    this.quiz   = data.quiz;
    this.badge  = data.badge || {};
    if (!this.isInitialized) { this.track('hull.quiz.init'); }
    if (!data.me || data.me.id != this.currentUserId) {
      this.template = "intro";
      this.reset();
      return data;
    }

    data.result             = this.getResult(data);

    if (this.started) {
      data.questions        = this.getQuestions(data);
      data.current          = this.getCurrent(data);
    }
    return data;
  },

  afterRender: function(data) {
    this.sandbox.emit('hull.quiz.' + this.id, data);
  },

  startQuiz: function() {
    this.reset();
    this.startedAt = new Date();
    this.started = true;
    this.render('question');
  },

  reset: function() {
    this.quiz = null;
    this.badge = null;
    this.started = false;
    this.submitted = false;
    this.answers = {};
    this.currentQuestionIndex = 0;
    this.currentUserId = this.api.model('me').id;
  },

  // TODO : Refactor this please !!!!
  getTemplate: function(tpl, data) {
    if (tpl) {
      return tpl;
    }
    if (!this.loggedIn()) {
      return "intro";
    } else if (this.submitted && data.badge && data.badge.id) {
      return "result";
    } else if (data.current) {
      if (data.current.question) {
        return "question";
      } else {
        return "finished";
      }
    } else if (data.badge) {
      return "result";
    }
    return "intro";
  },


  getCurrent: function(data) {
    this.currentQuestion = data.questions[this.currentQuestionIndex];
    return {
      index:            this.currentQuestionIndex,
      indexDisplayable: this.currentQuestionIndex+1,
      question:         this.currentQuestion,
      next:             data.questions[this.currentQuestionIndex + 1],
      previous:         data.questions[this.currentQuestionIndex - 1]
    };
  },

  getQuestions: function(data) {
    return data.quiz.questions;
  },

  getResult: function(data) {
    return data.badge;
  },


  actions: {

    login: function(e, params) {
      this.sandbox.login(params.data.provider, params.data).then(this.startQuiz.bind(this));
    },

    answer: function(e, params) {
      var opts = params.data;
      this.answers[opts.questionRef] = opts.answerRef;
      this.data.quiz.answers = this.answers;

      this.track('hull.quiz.progress', {
        quizId: this.id,
        questionRef: opts.questionRef,
        answerRef: opts.answerRef,
        questionIndex: this.currentQuestionIndex,
        questionsCount: this.data.quiz.questions.length
      });
    },

    answerAndNext: function() {
      this.actions.answer.apply(this, arguments);
      this.actions.next.apply(this);
    },

    start: function() {
      this.track("hull.quiz.start", { quizId: this.id });
      this.startQuiz();
    },

    next: function() {
      this.currentQuestionIndex += 1;
      this.render();
      return false;
    },

    previous: function() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex -= 1;
        this.render('question');
      }
      return false;
    },

    submit: function() {
      this.track("hull.quiz.submit", { quizId: this.id });
      var timing = 0;
      if (this.startedAt) {
        timing  = (new Date() - this.startedAt) / 1000;
      }

      var res  = this.api(this.id + "/achieve", 'post', {
        answers: this.answers,
        timing: timing
      });

      var self = this;
      res.done(function(badge) {
        if (badge) {
          self.submitted = true;
          self.badge = badge;
          self.render('result');
          self.track('hull.quiz.finish', { quizId: this.id, score: badge.data.score, timing: badge.data.timing });
        }
      });
      return false;
    },

    share: function (e, params) {
      var data = params.data;
      var currentUrl = document.URL, text = data.text;

      switch (data.provider){
        case 'facebook':
          // @TODO :-)
          break;
        case 'twitter':
          window.open('https://twitter.com/share?url='+currentUrl+'&text='+text);
          break;
      }
    }
  }

});
