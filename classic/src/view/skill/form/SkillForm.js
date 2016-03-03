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
	}, {
		xtype: 'hidden',
		name: 'skillid'
	}],


	buttons: [{
		text: 'Save',
		formBind: true,
		handler: function() {
			var skillForm = this.up('skill-form').getForm();
			var skillStore = Ext.data.StoreManager.lookup('skill');

			if (this.up('skill-creation-window').getIsEdit()) {
				skillStore.each(function(record, idx) {
					var val = record.get('_id');
					if (val == skillForm.findField('skillid').getValue()) {
						record.set('name', skillForm.findField('name').getValue());
						record.set('description', skillForm.findField('description').getValue());
						record.save();
					}
				});
				this.up('skill-creation-window').hide();
			} else {
				if (skillForm.isValid()) {
					skillStore.insert(0, Ext.create('Learn.model.Skill', skillForm.getFieldValues()));
					this.up('skill-creation-window').hide();
				}
			}
		}
	}, {
		text: 'Cancel',
		handler: function() {
			this.up('skill-creation-window').hide();
		}
	}]	
});