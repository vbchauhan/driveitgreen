Ext.define('DriveItGreen.view.Main', {
    extend: 'Ext.tab.Panel',
            xtype: 'main',
            requires: ['Ext.TitleBar'],
            config: {
                tabBarPosition: 'bottom',
                fullscreen: 'true',
				
				//Abc
                items: [ //Main Begins here...
                { //Nav Panel - 1 : ROUTE 
                    title: 'Route', //title used in navigation button
                    xtype: 'route', //import pre-defined view from route.js
                    iconCls: 'home', //icon to be shown in navigation
                    //cls: 'home',
                },

                { //Nav Panel - 2 : G-Score
                    title: 'G-Score',
                    xtype: 'gscore', //import view defined in gscore.js
                    iconCls: 'star',
                    //displayField: 'title',

                },

                { //Nav Panel - 3 : Social //comments
                    xtype: 'nestedlist',
                    title: 'Social',
                    iconCls: 'user',
                    displayField: 'title',


                    store: {
                        type: 'tree',

                        fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                            name: 'leaf',
                            defaultValue: true
                        }],

                        root: {
                            leaf: false
                        },

                        proxy: {
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                            reader: {
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },
                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },

                { //Nav Panel - 4 : Setup
                    title: 'Setup',
                    iconCls: 'settings',
                    xtype: 'formpanel',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [{
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        height: 285,
                        items: [{
                            xtype: 'textfield',
                            label: 'Name'
                        }, {
                            xtype: 'emailfield',
                            label: 'Email'
                        }, {
                            xtype: 'textareafield',
                            label: 'Message'
                        }]
                    }, {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                        handler: function() {
                            this.up('formpanel').submit();
                        }
                    }

                    ] //Main ends here...

                }]
            }

});
