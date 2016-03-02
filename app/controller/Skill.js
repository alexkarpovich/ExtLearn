Ext.define('Learn.controller.Skill', {
	extend: 'Learn.controller.Base',

	views: [
		'Learn.view.skill.*'
	],

	init: function() {
		this.addRef([{
			ref: 'SkillList',
			selector: '[xtype=skill-list]'
		}]);

		this.callParent();
	},

	routes: {
		'skills': 'onSkills',
		'skills/:id': {
			action: 'onSkillDetail',
			before: 'onBeforeSkillDetail'
		}
	},

	onSkills: function() {
		this.addContentToCenterRegion({
			xtype: 'app-skill'
		});
	},

	onSkillDetail: function(id) {
		console.log('onSkillDetail', id);
	},	

	onBeforeSkillDetail: function(id, action) {
		console.log('onBeforeSkillDetail', this.getSkillList());
	}
});