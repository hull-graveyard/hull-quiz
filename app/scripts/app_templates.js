this["Hull"] = this["Hull"] || {};
this["Hull"]["templates"] = this["Hull"]["templates"] || {};

this["Hull"]["templates"]["games/background/main"] = function (Handlebars,depth0,helpers,partials,data) {
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
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
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
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.quiz)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <p class=\"hull-quiz__description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.quiz)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n  </div>\n\n  <div class=\"hull-pager\">\n    <div class=\"hull-pager__content\">\n      ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.loggedIn), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
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
  else { stack1 = (depth0 && depth0.question); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.question) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      <div class=\"hull-pager\">\n        <div class=\"hull-pager__content\">\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.previous), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n          ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.next), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      </div>\n\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n          <h4 class=\"hull-quiz__question__name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n          <h5 class=\"hull-quiz__question__description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h5>\n          <ol class=\"hull-quiz__question__anwsers\">\n              ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data};
  if (stack1 = helpers.answers) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.answers); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.answers) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </ol>\n        ";
  return buffer;
  }
function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n              <li>\n                <div class=\"hull-btn\" data-hull-action=\"answerAndNext\"\n                    data-hull-answer-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"\n                    data-hull-question-id=\""
    + escapeExpression(((stack1 = (depth1 && depth1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.quiz)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n    <p class=\"hull-quiz__description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.quiz)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n  </div>\n\n  <div class=\"hull-quiz__current hull-quiz__current--"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.current)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <div class=\"hull-quiz__current__header\">\n        <h4 class=\"hull-quiz__current__title\">\n          <strong>Question "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.current)),stack1 == null || stack1 === false ? stack1 : stack1.indexDisplayable)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong> <span>of "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.quiz)),stack1 == null || stack1 === false ? stack1 : stack1.questions)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n        </h4>\n      </div>\n\n    ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack2 = helpers.current) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.current); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
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
  else { stack1 = (depth0 && depth0.score); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> points !</p>\n      <p class=\"hull-quiz__result__timing\">It took <strong>";
  if (stack1 = helpers.timing) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.timing); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong> seconds to answer !</p>\n    ";
  return buffer;
  }

  buffer += "<div class=\"hull-quiz hull-quiz--result\">\n  <div class=\"hull-quiz__header\">\n    <h1 class=\"hull-quiz__title\">Bravo</h1>\n  </div>\n\n  <div class=\"hull-quiz__result\">\n    ";
  stack2 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.data)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1)),blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </div>\n\n  <div class=\"hull-pager\">\n    <div class=\"hull-pager__content\">\n      <button class=\"hull-btn\" data-hull-action=\"share\" data-hull-provider=\"twitter\" data-hull-text=\"I just scored "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " in "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.data)),stack1 == null || stack1 === false ? stack1 : stack1.timing)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " sec on Quiz: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.result)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
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
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.picture)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"hull-media__img\">\n     <div class=\"hull-media__body\">\n       <h1 class=\"hull-identity__name\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n       <p class=\"hull-identity__description\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.me)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n       <hr class=\"hull-rule\">\n        <button data-hull-action=\"logout\" class=\"hull-btn\">Logout</button>\n     </div>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n  ";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.authServices); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.authServices) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n \n  ";
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.noop,data:data};
  if (stack1 = helpers.authServices) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.authServices); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
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
  buffer += escapeExpression(((stack1 = helpers.classify || (depth0 && depth0.classify)),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "classify", depth0, options)))
    + "\n    </button>\n  </div>\n  ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.debug), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "\n    No Auth Services configured, please add at least one in the admin.\n  ";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.loggedIn), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  };