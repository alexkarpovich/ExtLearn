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
		{text: 'Id', dataIndex: '_id'},
		{text: 'Name', dataIndex: 'name', flex: 1},
		{text: 'Description', dataIndex: 'description', flex: 1}
	],

	listeners: {
		'render': function(panel) {
			panel.body.on('dblclick', function() {
				var window = Ext.create('Learn.view.skill.CreationWindow', {isEdit: true, title: 'Update Skill'});
				window.show();
				var form = window.down('skill-form').getForm();
				form.findField('skillid').setValue(panel.selection.id);
				form.findField('name').setValue(panel.selection.data.name);
				form.findField('description').setValue(panel.selection.data.description);
			});
		}
	}
});