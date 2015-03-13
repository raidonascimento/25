

Ext.application({
    name: 'Users',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: [
        'Users.controller.Main'
    ],

    views: [
        'Main'
    ],



    launch: function() {
        // Destroy the #appLoadingIndicator element
      //  Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Users.view.Main'));
    }

    
});