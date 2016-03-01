Ext.define('Learn.view.skill.Skill', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-skill',

	requires: [
		'Learn.view.skill.List',
		'Learn.view.skill.SkillModel',
		'Learn.view.skill.SkillController'
	],

	model: 'skill',
	controller: 'skill',

	items: [{
        title: 'Skills',
        iconCls: 'fa-book',
        items: [{
            xtype: 'skill-list'
        }]
    }],

    tbar: [{
    	xtype: 'button',
    	text: 'Create',
    	handler: 'onClickCreateSkill'
    }, {
    	xtype: 'button',
    	text: 'Delete',
    	handler: 'onClickRemoveSkill'
    }]
});