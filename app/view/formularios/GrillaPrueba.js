Ext.define('NotariaApp.view.formularios.GrillaPrueba', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.grillaViewPrueba',

    requires: [
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'NotariaApp.view.formularios.GrillaPruebaController'
        //'NotariaApp.store.GrillaStorePrueba' no es necesario ya esta en aplications
    ],
    controller: 'grillaCtrl',
    bodyPadding: 10,
    id: 'x_grillaPrueba',
    title: 'Grilla',
    store : 'NotariaApp.store.GrillaStorePrueba',
    listeners:{
        itemClick:'cargarFormulario'
    },

    columns: [
        {
            dataIndex: 'codigo',
            text: 'Codigo'
        },
        {
            dataIndex: 'descripcion',
            text: 'Descripcion'
        },
        {
            dataIndex: 'fecha',
            text: 'Fecha'
        },
        {
            dataIndex: 'valor',
            text: 'Valor'
        }
    ]
});