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
