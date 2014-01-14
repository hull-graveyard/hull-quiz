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
        conf.label = data.options.label;
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


/*global window:true */
Hull.component({

  defaultPanel: "users",

  templates: ['empty', 'not_admin', 'intro', 'users', 'new_quiz', 'stats'],
  refreshEvents: ['model.hull.me.change'],
  initialize: function () {
    "use strict";
    this.firstRun = true;
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
      if (action.data.quizId !== null) {
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
      All: { action: 'resetFilter', isActive: this.query.approved === null },
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
