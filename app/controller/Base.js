Ext.define('Learn.controller.Base', {
	extend: 'Ext.app.Controller',

	views: [
		'Learn.view.main.Main'
	],

	refs: [{
		ref: 'main',
		selector: '[xtype=app-main]'
	}],
	
	addContentToCenterRegion: function(config) {
        var view = this.getMain(),
            center = view.down('#center'),
            cmp = center.down('[xtype=' + config.xtype + ']');

        if( !cmp ) {
            center.removeAll();
            cmp = center.add(config);
        }

        return cmp;
    }
});