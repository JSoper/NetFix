Ext.define( 'NetFix.view.Viewport' ,
{	extend: 'Ext.container.Viewport' ,
	requires: [ 'NetFix.view.ListView' , 'NetFix.view.GridView' , 'NetFix.view.SampleXmlGrid' ,
					'Ext.toolbar.TextItem', 'Ext.tab.Panel' ] ,
	config:
	{	title: 'NetFix.view.Viewport.title' ,
		layout:	'border' ,
		items:
		[	{	xtype: 'toolbar' ,
				region: 'north' ,
				items:
				[	{	text: 'Button 1' } ,
					{	xtype: 'tbfill'	} ,
					{	xtype: 'tbtext' ,
						text: 'NetFix Main Toolbar'
					} ,
					{	xtype: 'tbfill'	} ,
					{	text: 'Button 2' }
				]
			} ,
			{	xtype: 'tabpanel' ,
				region: 'center' ,
				items:
				[	{	title : 'Sample XML Grid' ,
					 	items : { xtype : 'samplexmlgrid' }
					} ,
					{	title : 'Grid' ,
					 	items : { xtype : 'netfixgridview' }
					} ,
					{	title : 'Listing' ,
					 	items : { xtype : 'netfixlistview' }
						/* dockedItems :
						[	{	xtype : 'pagingtoolbar',
								dock : 'top',
								// store : 'NetFlixDataStore' ,
								data : movieData ,
								displayInfo : true ,
								pageSize : 10
							}
						] ,*/
					} ,
					{	title : 'Tree' ,
					 	html : 'TAB 3 HTML'
					}
				]
			}
		]
	}

/*
	constructor: function Main$constructor (config)
	{	this.initConfig(config);
		return this.callParent( arguments )
	},
*//*
	initComponent: function Main$initComponent ()
	{	//Ext.apply( this, this.layoutObject )
		console.log( this.getTitle() )
		this.callParent( arguments )
	}*/
})
