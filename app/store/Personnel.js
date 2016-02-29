Ext.define('Learn.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/personnel',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
