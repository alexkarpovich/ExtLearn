Ext.define('Learn.view.skill.SkillController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.skill',

	requires: [
		'Learn.view.skill.CreationWindow'
	],

	onClickCreateSkill: function() {
		var window = Ext.create('Learn.view.skill.CreationWindow');
		window.show();
	},

	onClickRemoveSkill: function() {	
		var skillGrid = this.view.down('skill-list')
		var selection = skillGrid.getSelectionModel().getSelection()[0];

		skillGrid.store.remove(selection);
	}
});