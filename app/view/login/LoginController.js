Ext.define('NotariaApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginController',
    
    login: function () {

        var host = Ext.create("NotariaApp.controller.HostServer").getHost();
        var formaLogin = Ext.getCmp("x_formLogin");

        formaLogin.getForm().submit({
            clientValidation: true,
            waitMsg: "Consultando",
            params: {"accion": "CONECTARSE"},
            url: host + "php/session/logaccess.php",
            success: function (form, action) {

                if (action.result.mensaje_error != undefined) {
                    Ext.Msg.alert('Mensaje', action.result.mensaje_error);
                    return;
                }

                var win = Ext.getCmp("x_ventanalogin");
                win.close();
                Ext.create("NotariaApp.view.main.Viewport");

            },
            failure: function (form, action) {
                Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
            }
        });

    }

});
