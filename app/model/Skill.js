Ext.define('Learn.model.Skill', {
	extend: 'Ext.data.Model',

	idProperty: '_id',

	fields: [
		{name: '_id', type: 'string'},
		{name: 'name', type: 'string'},
		{name: 'description', type: 'string'}
	],

	proxy: {
		type: 'ajax',
		reader: {
			type: 'json',
			rootProperty: 'items'
		},
		writer: {
			type: 'json'
		},
		api: {
			create  : '/skill/add',
		    read    : '/skill',
		    update  : '/skill/update',
		    destroy : '/skill/delete'
		}
	}
});