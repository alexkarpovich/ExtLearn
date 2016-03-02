Ext.define('Learn.view.skill.form.SkillForm', {
	extend: 'Ext.form.Panel',
	xtype: 'skill-form',
	url: 'skill',

	layout: 'anchor',
    defaults: {
        anchor: '100%'
    },
    bodyPadding: 5,

    requires: [
    	'Learn.view.skill.SkillFormController',
    ],

    controller: 'skill.form',

	items: [{
		xtype: 'textfield',
		name: 'name',
		fieldLabel: 'Name'
	}, {
		xtype: 'textareafield',
		name: 'description',
		fieldLabel: 'Description'
	}],

	buttons: [{
		text: 'Create',
		formBind: true, 
		handler: function() {
			var skillForm = this.up('skill-form').getForm();
			var skillStore = Ext.data.StoreManager.lookup('skill');

			if (skillForm.isValid()) {
				console.log(skillForm.getFieldValues());

				skillStore.add(skillForm.getFieldValues());
				skillStore.save();

				this.up('skill-creation-window').hide();
			}
		}
	}, {
		text: 'Cancel',
		handler: function() {
			this.up('skill-creation-window').hide();
		}
	}]	
});