Ext.define('MiniDashboard.view.dashboard.Dashboard', {
    extend: 'Ext.dashboard.Dashboard',

    requires: [
        'MiniDashboard.view.dashboard.parts.InventoryChart',
        "MiniDashboard.view.dashboard.parts.LoremPanel",
        'MiniDashboard.view.dashboard.parts.LineChart'
    ],

    xtype: 'home-dashboard',

    defaultContent: [{
        type: 'inventorychart',
        columnIndex: 0,
        height: 200,
        width: 200
    }, {
        type: 'inventorychart',
        columnIndex: 1,
        height: 200,
        width: 200,
    },{
        type:'lorempanel1',
        columnIndex: 0,
    },{
        type: 'linechartType',
        columnIndex: 1,

    }],

    config: {
        parts: {
            'inventorychart': 'inventorychart',
            'lorempanel1':'lorempanel',
            'linechartType':'linechart'

        }
    }
});