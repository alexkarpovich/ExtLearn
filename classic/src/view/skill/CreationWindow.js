Ext.define('Learn.view.skill.CreationWindow', {
	extend: 'Ext.window.Window',

	xtype: 'skill-creation-window',

	title: 'Create new skill',
	width: 500,
	height: 300,

	requires: [
		'Learn.view.skill.form.SkillForm'
	],

	layout: 'fit',

	items: [{
		xtype: 'skill-form'
	}]
});