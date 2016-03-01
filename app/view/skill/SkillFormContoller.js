Ext.define('Learn.view.skill.SkillFormController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.skill.form',

	onCreateSkill: function () {
		console.log('onCreateSkill', this.view.down('form').getForm());
	},

	onCancelCreation: function() {
		this.hide();
	}
});