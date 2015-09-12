Ext.define('NotariaApp.view.login.LoginForm', {
    extend: 'Ext.form.Panel',
    alias: "widget.x_loginForm",
    id: "x_formLogin",
    requires: [
        'NotariaApp.view.login.LoginController',
    ],
    controller: 'loginController',
    autoScroll: true,
    bodyPadding: 10,
    items: [{
            xtype: "textfield",
            name: "usuario",
            fieldLabel: "Usuario",
            allowBlank: false
        }, {
            xtype: "textfield",
            name: "password",
            fieldLabel: "Password",
            allowBlank: false,
            inputType: "password"
        }
    ],
    bbar: ['->',{
            xtype: "button",
            id: "x_login",
            text: "Iniciar sesión",
            listeners: {
                click: 'login'
            }
        }]

});
