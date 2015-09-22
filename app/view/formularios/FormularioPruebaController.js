Ext.define('NotariaApp.view.formularios.FormularioPruebaController',{
     extend: 'Ext.app.ViewController',
     alias: 'controller.formularioCtrl',
     
     fnGuardar : function(btn,e){
         var formularioPrueba = Ext.getCmp("x_formularioPrueba");
         
         formularioPrueba.getForm().submit({
             clientValidation: true,
             waitMsg : 'Enviando datos al servidor',
             params: {"accion": "GUARDAR"},
             url : 'http://localhost:81/NotariaAppPhp/php/formularioPrueba/formulario.php',
             
            success: function(form, action) {
                var formularioGrilla = Ext.getCmp("x_grillaPrueba");
                formularioGrilla.getStore().load();
            }
         });
     },
     
     fnModificar : function(btn,e){
         var formularioPrueba = Ext.getCmp("x_formularioPrueba");
         
         formularioPrueba.getForm().submit({
             clientValidation: true,
             waitMsg : 'Enviando datos al servidor',
             params: {"accion": "ACTUALIZAR"},
             url : 'http://localhost:81/NotariaAppPhp/php/formularioPrueba/formulario.php',
             
            success: function(form, action) {
                var formularioGrilla = Ext.getCmp("x_grillaPrueba");
                formularioGrilla.getStore().load();
            }
         });
     }
      
});