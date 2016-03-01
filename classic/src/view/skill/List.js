Ext.define('Learn.view.skill.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'skill-list',

	requires: [
		'Learn.view.skill.SkillModel',
		'Learn.store.Skill'
	],

	store: {
		type: 'skill'
	},

	columns: [
		{text: 'Id', dataIndex: 'id'},
		{text: 'Name', dataIndex: 'name', flex: 1},
		{text: 'Description', dataIndex: 'description', flex: 1}
	]
});