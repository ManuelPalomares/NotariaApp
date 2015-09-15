Ext.define('NotariaApp.view.formularios.FormularioPrueba', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularioPrueba',
    requires: [
        'Ext.form.field.Number',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'NotariaApp.view.formularios.FormularioPruebaController'
    ],
    controller: 'formularioCtrl',
    height: 250,
    width: 400,
    bodyPadding: 10,
    title: 'Categorias',
    id: 'x_formularioPrueba',
    items: [
        {
            xtype: 'numberfield',
            anchor: '100%',
            fieldLabel: 'Codigo',
            name: 'codigo',
            allowBlank: false,
            blankText: 'Este campo es requerido',
            maxLength: 15,
            maxLengthText: 'El maximo es 15 caracteres'
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Descirpcion',
            name: 'descripcion'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    id: 'x_guardar',
                    text: 'Guardar',
                    listeners: {
                        click: 'fnGuardar'
                    }
                }
            ]
        }
    ]

});
