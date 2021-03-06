Ext.define('NotariaApp.Application', {
    extend: 'Ext.app.Application',
    name: 'NotariaApp',
    stores: [
        'NotariaApp.store.MenuStore'
    ],
    views: [
        'NotariaApp.view.login.LoginForm',
        'NotariaApp.view.formularios.FormularioPrueba',
        'NotariaApp.view.main.Menus',
        'NotariaApp.view.main.TabContenedorPpal',
        'NotariaApp.view.formularios.FormularioFactura',
        'NotariaApp.view.reportes.ReporteFacturas'
    ],
    controllers: ['NotariaApp.controller.HostServer'],
    launch: function () {
        // TODO - Launch the application


        var host = Ext.create("NotariaApp.controller.HostServer").getHost();
        Ext.Ajax.request({
            url: host + "php/session/session.php",
            success: function (response) {
                var result = Ext.decode(response.responseText);
                //valida si el usuario no esta registrado
                if (result.message_error === "Usuario no registrado") {
                    var win = Ext.create("Ext.window.Window", {
                        width: 300,
                        id: "x_ventanalogin",
                        height: 200,
                        modal: true,
                        title: "Inicio de sesion",
                        resizable: false,
                        closable: false,
                        items: [{xtype: "x_loginForm"}]

                    });
                    win.show();
                    return;
                }

                Ext.create("NotariaApp.view.main.Viewport");

                Ext.getCmp("x_labelNombreUsuario").setText("Usuario : " + result.nombre);
            },
            failure: function (response) {
                alert('Error realizando su solicitud por favor comunicar con su administrador :' + response.status);
            }
        });

    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
        );
    }
});