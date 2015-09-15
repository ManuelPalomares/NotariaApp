Ext.define('NotariaApp.view.formularios.FormularioPruebaController',{
     extend: 'Ext.app.ViewController',
     alias: 'controller.formularioCtrl',
     
     fnGuardar : function(btn,e){
         var formularioPrueba = Ext.getCmp("x_formularioPrueba");
         
         formularioPrueba.getForm().submit({
             clientValidation: true,
             waitMsg : 'Enviando datos al servidor',
             params: {"accion": "GUARDAR"},
             url : 'http://localhost/NotariaAppPhp/php/formularioPrueba/formulario.php'
         });
     }
      
});