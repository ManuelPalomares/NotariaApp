Ext.define('NotariaApp.view.formularios.GrillaPruebaController',{
     extend: 'Ext.app.ViewController',
     alias: 'controller.grillaCtrl',
     
    cargarFormulario:function(grilla,registro){
         var formulario = Ext.getCmp('x_formularioPrueba');
         formulario.getForm().setValues(registro.data);
     }
});