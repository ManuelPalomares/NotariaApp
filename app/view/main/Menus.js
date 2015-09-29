Ext.define('NotariaApp.view.main.Menus', {
    extend: 'Ext.tree.TreePanel',
    requires: ['Ext.data.TreeStore',
        'Ext.selection.TreeModel',
        'Ext.tree.Column',
        'Ext.tree.NavigationModel', 
        'Ext.tree.View',
        'NotariaApp.view.main.MenusController'],
    alias: 'widget.menuPrincipal',
    controller : 'menuCtl',
    listeners : {
        itemclick : 'seleccionaOpcion'
    },
    title: 'Menu Principal',
    store : 'NotariaApp.store.MenuStore'
});
