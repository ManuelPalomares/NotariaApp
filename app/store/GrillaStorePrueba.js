Ext.define('NotariaApp.store.GrillaStorePrueba', {
    extend: 'Ext.data.Store',
    alias: 'store.grillaStorePrueba',
   requires: [
       'NotariaApp.model.GrillaPrueba'
   ],
   
    model: 'NotariaApp.model.GrillaPrueba',
    autoLoad : true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:81/NotariaAppPhp/php/formularioPrueba/formulario.php',
        extraParams: {"accion": "CONSULTAR"},
        reader: {
            type: 'json',
            rootProperty: "datos",
            totalProperty: "totalRows"
        }
    }
});