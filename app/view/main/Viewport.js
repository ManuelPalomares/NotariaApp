Ext.define('NotariaApp.view.main.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit'
    ],
    layout: {
        type: 'border'
    },
    items: [{
            region: 'north',
            html: '<h1>Applicacion Notaria</h1>',
            items : [{
                    xtype : 'label',
                    id : 'x_labelNombreUsuario'
            }],
            height : 100
          
        },
        {
            region: 'west',
            width : 300,
            items :[{
                    xtype : 'menuPrincipal'
            }],
            collapsible: true
            
        },
        {
            region: 'center',
            xtype :'tabPanelPrincipal'
            
        },
        {
            region: 'south',
            html: '<h1></h1>',
            collapsible: true
        }]
});
