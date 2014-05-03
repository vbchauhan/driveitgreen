Ext.define('DriveItGreen.view.Route',{
	extend :'Ext.Panel',
	xtype : 'route',
	config: {
		items: [{ 
			xtype: 'toolbar',
			docked: 'top',
			items: [{
				xtype: 'spacer'
			}, {
				xtype: 'textfield',
				label: 'Start : ',
				width: '80%',
				labelWidth: '20%'
			}, {
				xtype: 'spacer'
			}]
		}, {
			xtype: 'toolbar',
			docked: 'top',
			items: [{
				xtype: 'spacer'
			}, {
				xtype: 'textfield',
				label: 'End : ',
				width: '80%',
				labelWidth: '20%'
			}, {
				xtype: 'spacer'
			}]

		}, {
			xtype: 'toolbar',
			docked: 'top',
			items: [{
				xtype: 'spacer'
			}, {
				xtype: 'button',
				text: 'Find Route',
				listeners: {
                    tap: function() {
                    	Ext.get('overlay').show();
                    	Ext.Function.defer( function() {
                    		Ext.get('overlay').hide();
                    	}, 1000);
                    	Ext.get('routeOptions').show();
                        this.parent.hide();
                        Ext.get('routeMap').show();
                        Ext.get('initMap').hide();
                    }
                }
			}, {
				xtype: 'spacer'
			}]
		}, {
			xtype: 'toolbar',
            id: 'routeOptions',
            hidden: true,
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Clear',
            }, {
                xtype: 'spacer'
            }, {
            	xtype: 'label',
                html: '1/3 Suggestions<br>266 Miles, 4hr 19 min',
                style: 'text-align: center ; font-size: 0.7em; ',
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: 'Start',
            }]
		}, {
			xtype: 'map',
			useCurrentLocation: true,
			id: 'initMap',
			width: '100%',
			height: '100%',
			html: 'Hello World!',
			mapOptions: {
				zoom: 14,
				panControl: false,
				zoomControl: false,
				streetViewControl: false,
			}
		},{
			xtype: 'panel',
            id: 'routeMap',
            hidden: true,
            height: '100%',
            width: '100%',
            layout: 'fit',
            items: [{
                xtype: 'image',
                src: 'resources/images/routemap.png',
                style: 'background-size: 100% 100%;',
            }]
		},{
			xtype: 'loadmask',
			id: 'overlay',
			hidden: true,
            message: 'Routing...',
            
        }]
	}
});

