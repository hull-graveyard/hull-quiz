this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["admin/admin"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "\n\n<a href=\"#\" data-hull-action=\"resetUserBadges\">Reset your badges</a>\n\n";
  };

this["Hull"]["templates"]["admin/keen/number/main"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Keen Count\n";
  };

this["Hull"]["templates"]["admin/keen/root/main"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n      <a data-hull-action=\"reset\" class=\"btn ben-default\" href=\"#\">See global stats</a>\n    ";
  }

  buffer += "<div class=\"tabbable\">\n  <div class=\"row pull-right\">\n    <div class=\"span12\">\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n  <ul class=\"nav nav-pills\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#count\">Totals</a></li>\n    <li><a data-toggle=\"tab\" href=\"#series\">Unique</a></li>\n  </ul>\n  <div class=\"tab-content\">\n    <div id=\"count\" class=\"active tab-pane\">\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Visitors: </h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='init'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Visitors'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='init'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Visitors'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Games started: </h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='hull.quiz.start'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games started'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='hull.quiz.start'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games started'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Games completed: </h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='hull.achieve'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games completed'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='hull.achieve'\n            data-hull-analysis-type='count'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games completed'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Shares</h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div class=\"span4 span-offset-4\">\n            <div\n              data-hull-component='keen/number@admin'\n              data-hull-event-collection='hull.share.complete'\n              data-hull-analysis-type='count_unique'\n              data-hull-target-property='distinct_id'\n              data-hull-label='Number of shares'\n              data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n              ></div>\n          </div>\n        </div>\n        <div class=\"span7\">\n          <div class=\"span4 span-offset-4\">\n            <div\n              data-hull-component='keen/series@admin'\n              data-hull-event-collection='hull.share.complete'\n              data-hull-analysis-type='count_unique'\n              data-hull-target-property='distinct_id'\n              data-hull-label='Number of shares'\n              data-hull-timeframe='this_month'\n              data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n              ></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"series\" class=\"tab-pane\">\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Visitors:</h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='init'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Visitors'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='init'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Visitors'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Games started:</h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='hull.quiz.start'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games started'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='hull.quiz.start'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games started'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Games completed:</h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='hull.achieve'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games completed'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='hull.achieve'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Games completed'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <h2>Shares:</h2>\n        </div>\n      </div>\n      <div class=\"row-fluid\">\n        <div class=\"span5\">\n          <div\n            data-hull-component='keen/number@admin'\n            data-hull-event-collection='hull.share.complete'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Shares'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n        <div class=\"span7\">\n          <div\n            data-hull-component='keen/series@admin'\n            data-hull-event-collection='hull.share.complete'\n            data-hull-analysis-type='count_unique'\n            data-hull-target-property='distinct_id'\n            data-hull-label='Shares'\n            data-hull-timeframe='this_month'\n            data-hull-filter='hull_app_id eq "
    + escapeExpression(((stack1 = ((stack1 = depth0.options),stack1 == null || stack1 === false ? stack1 : stack1.quizId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'\n            ></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/keen/root/no_keen"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"span12\">\n    <div class=\"alert alert-info\">\n      <h3>No keen.io serviced configure for your application.</h3>\n      <p>\n        Please go to\n        <a href=\"https://accounts.hullapp.io\">https://accounts.hullapp.io</a>\n        to add one.\n      </p>\n    </div>\n  </div>\n</div>\n";
  };

this["Hull"]["templates"]["admin/keen/series/main"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Keen Count\n";
  };

this["Hull"]["templates"]["admin/left/empty"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "&nbsp;\n";
  };

this["Hull"]["templates"]["admin/left/quiz"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h4>\n  Quizzes\n  <a class=\"new-quiz btn btn-default btn-small pull-right\" href=\"#\">+</a>\n</h4>\n<div data-hull-component=\"quiz/list@admin\"></div>\n";
  };

this["Hull"]["templates"]["admin/left/stats"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h4>\n  Quizzes\n</h4>\n<div data-hull-component=\"quiz/list@admin\"></div>\n";
  };

this["Hull"]["templates"]["admin/left/users"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div data-hull-component=\"users_list@admin\"></div>\n";
  };

this["Hull"]["templates"]["admin/main/empty"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "&nbsp;\n";
  };

this["Hull"]["templates"]["admin/main/intro"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "Welcome!\n";
  };

this["Hull"]["templates"]["admin/main/new_quiz"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-hull-component=\"quiz/new@admin\" data-hull-quiz-id=";
  if (stack1 = helpers.quizId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.quizId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "></div>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/main/not_admin"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n      <h3 class=\"text-error\">\n        You must be logged in as an administrator to view this page.\n      </h3>\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n      <p>You must be logged in as an administrator to view this page.</p>\n      <div data-hull-component=\"login/profile@hull\"></div>\n    ";
  }

  buffer += "<div class=\"row\">\n  <div class=\"span12 text-center\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/main/stats"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-hull-component=\"keen/root@admin\" data-hull-quiz-id=";
  if (stack1 = helpers.quizId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.quizId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/main/users"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-hull-component=\"user_profile@admin\" data-hull-id=\"";
  if (stack1 = helpers.userId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.userId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/quiz/list/quiz-selector"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"divider\"></li>\n    <li><a href=\"#\" data-hull-action=\"selectQuiz\" class=\"";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-hull-quiz-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n  ";
  return buffer;
  }

  buffer += "<ul class=\"nav nav-tabs nav-stacked\">\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.quizzes) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.quizzes; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.quizzes) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/quiz/new/admin"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = self.invokePartial(partials['quiz/new/form'], 'quiz/new/form', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <div class=\"span12\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.quiz, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/quiz/new/form"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"pull-right\">\n      <a class=\"btn\" data-hull-action=\"duplicateQuiz\">\n        Duplicate quiz\n      </a>\n\n      <a class=\"btn btn-danger\" data-hull-action=\"deleteQuiz\">\n        <i class=\"icon-trash\"></i>\n        Delete quiz\n      </a>\n    </div>\n  ";
  }

function program3(depth0,data) {
  
  
  return "\n    New Quiz\n  ";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    "
    + escapeExpression(((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n  ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <h6>Embed code</h6>\n  <pre class=\"code\">";
  if (stack1 = helpers.embedCode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.embedCode; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</pre>\n  <hr />\n";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n\n<form class=\"form js-hull-quiz-form\">\n  <fieldset>\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"input-block-level\" name=\"name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"Name\" required=\"true\">\n    <label for=\"description\">Description</label>\n    <textarea class=\"input-block-level\" name=\"description\" placeholder=\"Description for the quiz (optional)\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  </fieldset>\n\n  <ul class=\"unstyled\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.questions, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<hr />\n\n<a data-hull-action=\"addQuestion\" class=\"btn\">\n  <i class=\"icon-plus\"></i>\n  Add a Question\n</a>\n\n<hr />\n\n<input type=\"submit\" value=\"";
  stack1 = helpers['if'].call(depth0, depth0.isNew, {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"btn btn-large btn-primary btn-block\" />\n\n</form>\n";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>\n    <hr />\n\n    <h3>\n      <span class=\"pull-right\">\n        <a class=\"btn btn-danger\" data-hull-action=\"deleteQuestion\" data-hull-question-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n          <i class=\"icon-trash\"></i>\n          Delete question\n        </a>\n      </span>\n\n      Question ";
  if (stack2 = helpers.index) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.index; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n    </h3>\n\n    <input type=\"hidden\" class=\"input-block-level\" name=\"questions["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][ref]\" value=\"";
  if (stack2 = helpers.ref) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ref; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n    <label for=\"questions["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][name]\">Name</label>\n    <input type=\"text\" class=\"input-block-level\" name=\"questions["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][name]\" value=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"Type a Question...\" required=\"true\">\n    <label for=\"questions["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][description]\">Description</label>\n    <input type=\"text\" class=\"input-block-level\"\n    name=\"questions["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][description]\" value=\"";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"Description for the question (optional)\" required=\"true\">\n    <h5>Answers</h5>\n\n    <ul class=\"unstyled\">\n    ";
  stack2 = helpers.each.call(depth0, depth0.answers, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      <li>\n        <a data-hull-action=\"addAnswer\" data-hull-question-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn\">\n          <i class=\"icon-plus\"></i>\n          Add an Answer\n        </a>\n      </li>\n    </ul>\n  </li>\n  ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <li class=\"form-inline\">\n        <p>\n          <input type=\"hidden\" name=\"questions[";
  if (stack1 = helpers.questionIndex) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.questionIndex; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "][answers]["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][questionIndex]\" value=\"";
  if (stack2 = helpers.questionIndex) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.questionIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n          <input type=\"hidden\" name=\"questions[";
  if (stack2 = helpers.questionIndex) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.questionIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "][answers]["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][ref]\" value=\"";
  if (stack2 = helpers.ref) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ref; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n\n          <input type=\"text\" class=\"input-xxlarge\" name=\"questions[";
  if (stack2 = helpers.questionIndex) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.questionIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "][answers]["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][name]\" value=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"Type an Answer...\" required=\"true\">\n          <input type=\"text\" class=\"input-small\" name=\"questions[";
  if (stack2 = helpers.questionIndex) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.questionIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "][answers]["
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "][weight]\" value=\"";
  if (stack2 = helpers.weight) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.weight; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" placeholder=\"Points\" required=\"true\" pattern=\"\\d*\">\n          <a class=\"btn btn-danger\" data-hull-action=\"deleteAnswer\" data-hull-question-index=\"";
  if (stack2 = helpers.questionIndex) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.questionIndex; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-hull-answer-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <i class=\"icon-trash\"></i>\n          </a>\n        </p>\n      </li>\n    ";
  return buffer;
  }

function program13(depth0,data) {
  
  
  return "Create";
  }

function program15(depth0,data) {
  
  
  return "Save";
  }

  buffer += "<div class=\"page-header\">\n  ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.isNew), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  <h2>\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.isNew), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </h2>\n</div>\n\n";
  stack2 = helpers['if'].call(depth0, depth0.embedCode, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack2 = helpers.quiz) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.quiz; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.quiz) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/router/intro"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n      <li><a href=\"#users\">Users</a></li>\n      <li><a href=\"#quiz\">Quizz</a></li>\n      <li><a href=\"#stats\">Stats</a></li>\n      ";
  }

  buffer += "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <a class=\"brand\" href=\"#\">Quiz admin</a>\n    <ul class=\"nav\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0.isAdmin, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/user_profile/user_profile"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"row\">\n  <div class=\"span6\">\n  ";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(18, program18, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <div class=\"media user-header\">\n      ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.picture), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n      <div class='media-body'>\n        <h4 class='media-heading'>\n          "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          <small class=\"muted\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</small>\n        </h4>\n\n        <div class=\"admin-infos\">\n          <dl>\n            ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.identities), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </dl>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"row-fluid\">\n\n      <div class=\"cell-6\">\n\n        <div class=\"admin-infos admin-infos-permissions\">\n          <header>\n            <h5>Permissions</h5>\n          </header>\n          <dl>\n            <dt>Role:</dt>\n            <dd>\n              <div class=\"dropdown\">\n                  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.is_admin), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              </div>\n            </dd>\n          </dl>\n        </div>\n\n      </div>\n\n      <div class=\"cell-6 admin-infos\">\n          <header>\n            <h5>Stats</h5>\n          </header>\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.key_value || depth0.key_value),stack1 ? stack1.call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.stats), options) : helperMissing.call(depth0, "key_value", ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.stats), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n      </div>\n\n    </div>\n\n    ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.org),stack1 == null || stack1 === false ? stack1 : stack1['public']), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"pull-left\">\n          <img class='img-rounded' src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"50\" height=\"50\"/>\n        </div>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n              <dt>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanize || depth0.humanize),stack1 ? stack1.call(depth0, depth0.provider, options) : helperMissing.call(depth0, "humanize", depth0.provider, options)))
    + ":</dt>\n              <dd>";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " – Created ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow || depth0.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</dd>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  
  return "\n                    Admin\n                  ";
  }

function program9(depth0,data) {
  
  
  return "\n                    User\n                  ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n          <dl>\n            <dt>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanize || depth0.humanize),stack1 ? stack1.call(depth0, depth0.key, options) : helperMissing.call(depth0, "humanize", depth0.key, options)))
    + "</dt>\n            <dd>";
  if (stack2 = helpers.value) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.value; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</dd>\n          </dl>\n        ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <div class=\"admin-infos admin-infos-approve\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.approved), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "\n          <button class=\"btn btn-block\" data-hull-action=\"unapprove\">Unapprove</button>\n        ";
  }

function program16(depth0,data) {
  
  
  return "\n          <button class=\"btn btn-block\" data-hull-action=\"approve\">Approve</button>\n        ";
  }

function program18(depth0,data) {
  
  
  return "\n    <div class=\"admin-empty text-center\">\n      <div class=\"admin-empty-wrapper\">\n        <span class=\"admin-empty-icon\">&#9785;</span>\n        <h4>User not found</h4>\n      </div>\n    </div>\n  ";
  }

function program20(depth0,data) {
  
  
  return "\n  You need to be an administrator of the current app to view this component\n";
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <h3>Profiles</h3>\n      <div class=\"admin-infos\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.profiles), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n    ";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <header>\n            <h5>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</h5>\n          </header>\n          <dl>\n            ";
  stack2 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </dl>\n        ";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <dt>"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ":</dt>\n              <dd>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</dd>\n            ";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <h3>Badges</h3>\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data};
  if (stack1 = helpers.badges) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.badges; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.badges) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"admin-infos\">\n      <header>\n        <h5>\n          <small class=\"pull-right\">\n            <a class=\"btn-link\" data-hull-action=\"deleteBadge\" data-hull-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n              <i class=\"icon-trash\"></i> delete\n            </a>\n          </small>\n          [";
  if (stack1 = helpers.achievement_type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.achievement_type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "] ";
  if (stack1 = helpers.achievement_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.achievement_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        </h5>\n      </header>\n      <dl>\n        <dt>created_at:</dt>\n        <dd>";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.created_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n        <dt>updated_at:</dt>\n        <dd>";
  if (stack1 = helpers.updated_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.updated_at; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n        <dt>Score:</dt>\n        <dd>";
  if (stack1 = helpers.score) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.score; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n        <dt>Best Score:</dt>\n        <dd>";
  if (stack1 = helpers.best_score) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.best_score; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n        <dt># attempts:</dt>\n        <dd>"
    + escapeExpression(((stack1 = ((stack1 = depth0.stats),stack1 == null || stack1 === false ? stack1 : stack1.attempts)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</dd>\n      </dl>\n    </div>\n    ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  options = {hash:{},inverse:self.program(20, program20, data),fn:self.noop,data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n  <div class=\"span6\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0.userHasProfiles, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.badges, {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  </div>\n  </div>\n\n\n";
  return buffer;
  };

this["Hull"]["templates"]["admin/users_list/forbidden"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>You are not authorized to list users...</h1>\n";
  };

this["Hull"]["templates"]["admin/users_list/users_list"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n  ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.org),stack1 == null || stack1 === false ? stack1 : stack1['public']), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n  <form class=\"form form-search js-hull-users-search\">\n    <div class=\"input-append\">\n      <input type=\"text\" class=\"js-hull-users-search-query\" placeholder=\"Search by email\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.currentQuery),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <button type=\"submit\" class=\"btn\">Search</button>\n    </div>\n  </form>\n\n  ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.currentQuery),stack1 == null || stack1 === false ? stack1 : stack1.email), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n  <div class=\"btn-group pull-right\">\n    <a class=\"btn btn-small dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n      Sort by <span class=\"caret\"></span>\n    </a>\n    <ul class=\"dropdown-menu\">\n      <li><a href=\"#\" data-hull-action=\"sort\" data-hull-field=\"created_at\" data-hull-direction=\"desc\">Created At</a></li>\n      <li><a href=\"#\" data-hull-action=\"sort\" data-hull-field=\"name\">Name</a></li>\n      <li><a href=\"#\" data-hull-action=\"sort\" data-hull-field=\"email\">Email</a></li>\n      <li><a href=\"#\" data-hull-action=\"sort\" data-hull-field=\"stats.sign_in_count\" data-hull-direction=\"desc\">Sign In Count</a></li>\n    </ul>\n  </div>\n  <h5>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.app),stack1 == null || stack1 === false ? stack1 : stack1.stats)),stack1 == null || stack1 === false ? stack1 : stack1.users)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " users:</h5>\n  ";
  stack2 = helpers['if'].call(depth0, depth0.users, {hash:{},inverse:self.program(17, program17, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n  ";
  stack2 = helpers['if'].call(depth0, depth0.showPagination, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"btn-group pull-right users-filters\" data-toggle=\"buttons-radio\">\n      ";
  stack1 = helpers.each.call(depth0, depth0.filters, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button type=\"button\" class=\"btn btn-small ";
  stack1 = helpers['if'].call(depth0, depth0.isActive, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-hull-action=\"";
  if (stack1 = helpers.action) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.action; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "active";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <p><small>Result for: <strong>"
    + escapeExpression(((stack1 = ((stack1 = depth0.currentQuery),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>. <a href=\"#\" data-hull-action=\"resetSearch\">clear</a></small></p>\n  ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <ul class=\"nav nav-tabs nav-stacked list list-user\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.users, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n  ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <li>\n        <a href=\"#\" data-hull-action=\"selectUser\" data-hull-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"media\">\n              ";
  stack1 = helpers['if'].call(depth0, depth0.picture, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              <div class=\"media-body\">\n                <h5 class=\"media-heading\">\n                  <span class=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n                  ";
  stack1 = helpers['if'].call(depth0, depth0.email, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </h5>\n\n                <ul class=\"unstyled\">\n                  <li><strong>Created: </strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.fromNow || depth0.fromNow),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "fromNow", depth0.created_at, options)))
    + "</li>\n                  ";
  stack2 = helpers['if'].call(depth0, depth0.identities, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                  <li class=\"sign-in-count\"><strong>Sign in count: </strong>"
    + escapeExpression(((stack1 = ((stack1 = depth0.stats),stack1 == null || stack1 === false ? stack1 : stack1.sign_in_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n                </ul>\n\n              </div>\n            </div>\n            <i class=\"icon-chevron-right\"></i>\n          </a>\n      </li>\n    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"pull-left\">\n                  <img src=\"";
  if (stack1 = helpers.picture) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.picture; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"50\" height=\"50\"/>\n                </div>\n              ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " <small class=\"email\">";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</small> ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                    <li class=\"provider\"><strong>Provider: </strong>\n                      ";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack1 = helpers.identities) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.identities; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.identities) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </li>\n                  ";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n                        <i class=\"icon-";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.humanize || depth0.humanize),stack1 ? stack1.call(depth0, depth0.type, options) : helperMissing.call(depth0, "humanize", depth0.type, options)))
    + "\n                      ";
  return buffer;
  }

function program17(depth0,data) {
  
  
  return "\n    <p class=\"m2 muted text-center\">There is no user that match your criteria</p>\n  ";
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p>\n      ";
  stack1 = helpers['if'].call(depth0, depth0.showPreviousButton, {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.showNextButton, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </p>\n  ";
  return buffer;
  }
function program20(depth0,data) {
  
  
  return "\n        <button data-hull-action='previousPage' class=\"btn\">← Previous</button>\n      ";
  }

function program22(depth0,data) {
  
  
  return "\n        <button data-hull-action='nextPage' class=\"btn\">Next →</button>\n      ";
  }

function program24(depth0,data) {
  
  
  return "\n  You need to be an administrator of the current app to view this component\n";
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  options = {hash:{},inverse:self.program(24, program24, data),fn:self.noop,data:data};
  if (stack1 = helpers.isAdmin) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.isAdmin; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.isAdmin) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n";
  return buffer;
  };

this["Hull"]["templates"]["background/main"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " \n";
  };

this["Hull"]["templates"]["games/quiz/answer"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\"images/icons/";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n";
  return buffer;
  };

this["Hull"]["templates"]["games/quiz/finished"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"hull-quiz hull-quiz--finished\">\n  <div class=\"hull-quiz__header\">\n    <h1 class=\"hull-quiz__title\">Congratulations. You have finished the  quiz!</h1>\n  </div>\n\n  <div class=\"hull-pager\">\n    <div class=\"hull-pager__content\">\n      <button data-hull-action=\"submit\" class=\"hull-btn\">Submit</button>\n    </div>\n  </div>\n</div>\n";
  };

this["Hull"]["templates"]["games/quiz/intro"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n        <button data-hull-action=\"start\" class=\"hull-btn\">Start</button>\n      ";
  }

function program3(depth0,data) {
  
  
  return "\n          <div data-hull-widget=\"login/profile@hull\"></div>\n      ";
  }

  buffer += "<div class=\"hull-quiz hull-quiz--intro\">\n  <div class=\"hull-quiz__header\">\n    <h1 class=\"hull-quiz__title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <p class=\"hull-quiz__description\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n  </div>\n\n  <div class=\"hull-pager\">\n    <div class=\"hull-pager__content\">\n      ";
  stack2 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n  </div>\n\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["games/quiz/question"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n        ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.question) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.question; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.question) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <div class=\"hull-pager\">\n        <div class=\"hull-pager__content\">\n          ";
  stack1 = helpers['if'].call(depth0, depth0.previous, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n          ";
  stack1 = helpers['if'].call(depth0, depth0.next, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n          <h4 class=\"hull-quiz__question__name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n          <h5 class=\"hull-quiz__question__description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n          <ol class=\"hull-quiz__question__anwsers\">\n              ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data};
  if (stack1 = helpers.answers) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.answers; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.answers) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ol>\n        ";
  return buffer;
  }
function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n              <li>\n                <div class=\"hull-btn\" data-hull-action=\"answerAndNext\"\n                    data-hull-answer-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                    data-hull-question-id=\""
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                ";
  stack2 = self.invokePartial(partials['games/quiz/answer'], 'games/quiz/answer', depth0, helpers, partials, data);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </div>\n              </li>\n              ";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n            <button data-hull-action=\"previous\" class=\"hull-btn\">Previous</button>\n          ";
  }

function program7(depth0,data) {
  
  
  return "\n            <button data-hull-action=\"next\" class=\"hull-btn\">Next</button>\n          ";
  }

function program9(depth0,data) {
  
  
  return "\n            <button data-hull-action=\"submit\" class=\"hull-btn\">Submit</button>\n          ";
  }

  buffer += "<div class=\"hull-quiz hull-quiz__question\">\n\n  <div class=\"hull-quiz__header\">\n    <h1 class=\"hull-quiz__title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <p class=\"hull-quiz__description\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n  </div>\n\n  <div class=\"hull-quiz__current hull-quiz__current--"
    + escapeExpression(((stack1 = ((stack1 = depth0.current),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <div class=\"hull-quiz__current__header\">\n        <h4 class=\"hull-quiz__current__title\">\n          <strong>Question "
    + escapeExpression(((stack1 = ((stack1 = depth0.current),stack1 == null || stack1 === false ? stack1 : stack1.indexDisplayable)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> <span>of "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.quiz),stack1 == null || stack1 === false ? stack1 : stack1.questions)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </h4>\n      </div>\n\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.current) { stack2 = stack2.call(depth0, options); }
  else { stack2 = depth0.current; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if (!helpers.current) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["games/quiz/result"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p class=\"hull-quiz__result__score\">You Have <strong>";
  if (stack1 = helpers.score) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.score; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> points !</p>\n      <p class=\"hull-quiz__result__timing\">It took <strong>";
  if (stack1 = helpers.timing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.timing; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> seconds to answer !</p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"hull-quiz hull-quiz--result\">\n  <div class=\"hull-quiz__header\">\n    <h1 class=\"hull-quiz__title\">Bravo</h1>\n  </div>\n\n  <div class=\"hull-quiz__result\">\n    ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.result),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n\n  <div class=\"hull-pager\">\n    <div class=\"hull-pager__content\">\n      <button class=\"hull-btn\" data-hull-action=\"share\" data-hull-provider=\"twitter\" data-hull-text=\"I just scored "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.result),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " in "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.result),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.timing)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " sec on Quiz: "
    + escapeExpression(((stack1 = ((stack1 = depth0.result),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ". Can you beat me?\">Share your score on Twitter</button>\n      <small>or</small>\n      <span data-hull-action=\"start\">Try again</span>\n    </div>\n  </div>\n\n</div>\n";
  return buffer;
  };

this["Hull"]["templates"]["login/profile/profile"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"hull-media hull-identity\">\n     <img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"hull-media__img\">\n     <div class=\"hull-media__body\">\n       <h1 class=\"hull-identity__name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n       <p class=\"hull-identity__description\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.me),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n       <hr class=\"hull-rule\">\n        <button data-hull-action=\"logout\" class=\"hull-btn\">Logout</button>\n     </div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.authServices; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.authServices) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n \n  ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.authServices; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.authServices) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  <div class=\"hull-identity-disconnected\">\n    <button data-hull-action=\"login\" data-hull-provider=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" class=\"hull-btn\">\n      Sign In with ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.classify || depth0.classify),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "classify", depth0, options)))
    + "\n    </button>\n  </div>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.debug, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n    No Auth Services configured, please add at least one in the admin.\n  ";
  }

  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  };