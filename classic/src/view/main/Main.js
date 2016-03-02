/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Learn.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Learn.view.main.MainController',
        'Learn.view.main.MainModel',
        'Learn.view.skill.Skill'
    ],

    controller: 'main',
    viewModel: 'main',    
    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'panel',
            region: 'north',
            cls: 'titlebar',
            bind: {
                title: 'Nigger'
            }
        },
        {
            xtype: 'menu',
            region: 'west',
            floating: false,
            width: 250,
            split: true,
            vertical: true,
            items: [
                {
                    text: 'Home',
                    itemId: 'home',
                    glyph: 0xf00c,
                    listeners: {
                        click: 'onNavigationItemClick'
                    }
                },
                {
                    text: 'Skills',
                    itemId: 'skills',
                    glyph: 0xf0c0,
                    listeners: {
                        click: 'onNavigationItemClick'
                    }
                }
            ]
        },
        {
            region: 'center',
            xtype: 'container',
            layout: 'fit',
            itemId: 'center'
        }
    ]
});
