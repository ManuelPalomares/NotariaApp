Ext.define('NotariaApp.view.main.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'formularioPrueba'
        
    }]
});
