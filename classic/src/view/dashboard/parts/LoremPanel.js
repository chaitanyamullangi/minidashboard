Ext.define('MiniDashboard.view.dashboard.parts.LoremPanel', {
    requires: [
        'Ext.panel.Panel'
    ],
    extend: 'Ext.dashboard.Part',
    alias: 'part.lorempanel',

    viewTemplate: {
        layout: 'fit',
        title: 'LoremIpsum',
        // header: false,
        items: [{
            xtype: 'panel',
            title: 'PArt title',
            html: 'a hfakdjsfhkashf adfkasjfh afkasfjjkd fjdasfflfkdsfjafj dasfjhkaf sdfjkaf adfhjsdfh fkajshdfkahd' 
        }]
    }
});