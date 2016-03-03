Ext.define('Learn.store.Skill', {
	extend: 'Ext.data.Store',
	storeId: 'skill',
	alias: 'store.skill',
	idProperty: '_id',
	
	model: 'Learn.model.Skill',	

	autoLoad: true,
    autoSync: true,

    proxy: {
		type: 'ajax',
		reader: {
			type: 'json',
			rootProperty: 'data'
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