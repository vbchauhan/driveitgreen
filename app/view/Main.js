Ext.define('DriveItGreen.view.Main', {
    extend: 'Ext.tab.Panel',
            xtype: 'main',
            requires: ['Ext.TitleBar'],
            config: {
                tabBarPosition: 'bottom',
                fullscreen: 'true',

                items: [ //Main Begins here...
                { //Nav Panel - 1 : ROUTE 
                    title: 'Route', //Panel Title
                    xtype: 'route',
                    iconCls: 'home',
                    cls: 'home',
                },

                { //Nav Panel - 2 : G-Score
                    xtype: 'Gscore',
                    title: 'G-Score',
                    iconCls: 'star',
                    displayField: 'title',

                },

                { //Nav Panel - 3 : Social
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
