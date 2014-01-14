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
