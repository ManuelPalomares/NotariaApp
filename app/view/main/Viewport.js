Ext.define('NotariaApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'panel',
        html : 'Hola mundo'
    }]
});
