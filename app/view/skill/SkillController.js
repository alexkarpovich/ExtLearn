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
		var skillGrid = this.view.down('skill-list');
		var selectedItem = skillGrid.selection.data;
		
		skillGrid.store.remove(selectedItem._id);
		skillGrid.store.save();
	}
});