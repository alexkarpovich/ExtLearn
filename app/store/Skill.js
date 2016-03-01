Ext.define('Learn.store.Skill', {
	extend: 'Ext.data.Store',
	storeId: 'skill',

	alias: 'store.skill',

	columns: [
		{name: 'id', type: 'integer'},
		{name: 'name', type: 'string'},
		{name: 'description', type: 'string'}
	],

	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: '/skill',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});