Ext.define('NotariaApp.store.MenuStore', {
    extend: 'Ext.data.TreeStore',
    requires: ['NotariaApp.controller.HostServer'],
    constructor: function (cfg) {

        var me = this;
        var host = Ext.create("NotariaApp.controller.HostServer").getHost();

        cfg = cfg || {};
        me.callParent([Ext.apply({
                proxy: {
                    type: 'ajax',
                    url: host+"php/menus/menu.php",
                    extraParams: {"accion": "CONSULTARMODULOS"},
                    reader: {
                        type: "json",
                        totalProperty: "totalRows",
                        rootProperty: "modulos"
                    }
                },
                autoLoad: true
            }, cfg)]);

    },
    root: {
        expanded: true,
        text: ''
    }
});