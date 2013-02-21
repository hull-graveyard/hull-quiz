// This widget listens to all events from the quiz
// to set the proper background color

/*global Hull:true */
Hull.widget("background", {

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

