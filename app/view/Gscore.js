Ext.define('DriveItGreen.view.Gscore',{
	extend: 'Ext.Panel',
	xtype: 'gscore', //define short-name 
	config: {
		layout: 'vbox', //layout of child items to be displayed - vbox => vertical stack of panels
		items: [{
			xtype: 'panel', //Horizontal container for g-scores display
			flex: 1, //height proportion
			layout: 'hbox', // hbox => arrange child items side-by-side
			cls: 'border-bottom-black',
			items: [{
				xtype: 'panel', //Vertical container for Current G-Score
				flex: 1, //width proportion
				//html: 'G-scores',
				cls: 'border-right-black',
				//layout: 'hbox',
				style: 'background-color: rgb(169, 255, 193);',
				items: [{
					xtype: 'label',
					//label: 'Gscore',
					id: 'gscore',
					name: 'gscore',
					html: '0',
					listeners: {
                    	//var me = this;
                    	painted: function () {
                    	      console.log(Ext.getCmp('gscore').getHtml());
                    	      var gscore = 1;
                    	      Ext.getCmp('gscore').setHtml('Hello');
/*                    	      var task = Ext.create('Ext.util.DelayedTask', {
                    	    	     fn: function() {
                    	    	    	 Ext.getCmp('gscore').setHtml(gscore);
                    	    	     }
                    	    	});
                    	    	
*/                    	      
                    	      var task = Ext.create('Ext.util.DelayedTask', function() {
                    	    	  gscore++;  
                    	    	  Ext.getCmp('gscore').setHtml(gscore);
                    	    	  console.log(Ext.getCmp('gscore').getHtml());
                    	    	  task.delay(1000);
                    	      });
                    	      //task.delay(1000);
                    	      while (gscore<1980) {
                    	    	  gscore++;
                    	    	  setTimeout(function() {
                        	    	  Ext.getCmp('gscore').setHtml(gscore);
                        	    	  console.log(Ext.getCmp('gscore').getHtml());
                        	    	}, 500);
                        	        
                    	      }
                    	      
                    	      
                    	 }
                    }
				}]
			}, {
				xtype: 'panel', //Horizontal container for Expected G-score
				flex: 1, //Width proportion
				html: 'Expected G-Score',
				style: 'background-color: rgb(255, 190, 169)',
			}]
		}, {
			xtype: 'panel', //container for directions
			flex: 1,
			layout: 'hbox', // hbox => arrange child items side-by-side
			cls: 'border-bottom-black',
			items: [{
				xtype: 'panel', //Vertical container for Direction Arrow
				flex: 1, //width proportion
				html: 'Directional Arrow',
				cls: 'border-right-black',
				style: 'background-color: rgb(129, 204, 240);',
			}, {
				xtype: 'panel', //Horizontal container for Driving Instructions
				flex: 3, //Width proportion
				html: 'Driving Instructions',
				style: 'background-color: rgb(173, 240, 129)',
			}]
		}, {
			xtype: 'panel', //container for navigation display
			flex: 4,
			html: 'Navigations',
			style: 'background-color: rgb(255, 227, 169);',
		}]
	}
	          
	
	
});

