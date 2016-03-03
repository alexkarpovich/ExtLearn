Ext.define('Learn.model.Skill', {
	extend: 'Ext.data.Model',

	idProperty: '_id',

	fields: [
		{name: '_id', type: 'string', useNull: true},
		{name: 'name', type: 'string'},
		{name: 'description', type: 'string'}
	]	
});