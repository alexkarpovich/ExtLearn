Ext.define('Learn.store.Skill', {
	extend: 'Ext.data.Store',
	storeId: 'skill',
	alias: 'store.skill',
	
	model: 'Learn.model.Skill',	

	autoLoad: true
});