Ext.define('NotariaApp.view.main.MenusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menuCtl',
    
    seleccionaOpcion: function (tree,record,item) {
        
        if(record.data.xtypealias !==undefined){
            
            var contenedorppal = Ext.getCmp("x_contenedorPrincipal");
            
            contenedorppal.add({
                xtype :record.data.xtypealias,
                title : record.data.text,
                closable  : true
            });
            
        }
       
    }

});
