Ext.require
( 'NetFix.store.SampleXmlDataStore' ,
	 function SampleXmlGrid$require$SampleXmlDataStore ()
	 {	Ext.define
		( 'NetFix.view.SampleXmlGrid' ,
			{	extend: 'Ext.grid.Panel' ,
				xtype: 'samplexmlgrid' ,
				requires : [ 'NetFix.store.SampleXmlDataStore' ] ,
				config:
				{	title: 'NetFix.view.SampleGridView.title' ,
					columns:
					[	{ 	header : 'Title' ,
							dataIndex : 'title' ,
							flex : 4
						} ,
						{ 	header : 'Rating' ,
							dataIndex : 'average_rating' ,
							xtype : 'numbercolumn' ,
							flex : 1
						} ,
						{	header : 'Release Year' ,
							dataIndex : 'release_year' ,
							flex : 1
						}
					] ,
					store : Ext.create( 'NetFix.store.SampleXmlDataStore' )

					/*stackValues : function GridView$stackValues ( array )
					{	var length = array.length
						var string = array[0]
						for ( var i = 1 ; i < length ; i++)
						{	string = string + '<br/>' + array[i] }
						return string
					}*/
				}
			}
		)
	}
)
