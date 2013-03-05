
Ext.define
( 	'NetFix.view.GridView' ,
	{	extend: 'Ext.grid.Panel' ,
		xtype: 'netfixgridview' ,
		requires : [ 'NetFix.store.DummyDataStore' ] ,
		config:
		{	title: 'NetFix.view.GridView.title' ,
			// forceFit : true ,
			columns:
			[	{ 	header : 'Title' ,
					dataIndex : 'title' ,
					flex : 4
				} ,
				{ 	header : 'Rating' ,
					dataIndex : 'averageRating' ,
					xtype : 'numbercolumn' ,
					flex : 1
				} ,
				{ 	header : 'Length' ,
					dataIndex : 'length' ,
					renderer : function GridView$length$renderer ( value )
					{	return ( value / 60 ) + ' mins' } ,
					flex : 1.4
				} ,
				{ 	header : 'Director' ,
					dataIndex : 'director' ,
					flex : 2.5
				} ,
				{ 	header : 'Genres' ,
					dataIndex : 'genres' ,
					renderer : function GridView$genres$renderer ( value )
					{	return this.stackValues( value ) } ,
					flex : 3
				} ,
				{ 	header : 'Style' ,
					dataIndex : 'thisMovieIs' ,
					renderer : function GridView$thisMovieIs$renderer ( value )
					{	return this.stackValues( value ) } ,
					flex : 2
				} ,
				{ 	header : 'Languages' ,
					dataIndex : 'language' ,
					// xtype : 'templatecolumn' ,
					// tpl : '<tpl for=".">{[values[xindex-1]]}</tpl>' ,
					// Referencing Associated Model Data from a Template 4-47
					renderer : function GridView$language$renderer ( value )
					{	return this.stackValues( value ) } , //value[0] + '<br/>' + value[1] } ,
					flex : 2
				} ,
				{ 	header : 'Subtitles' ,
					dataIndex : 'subtitles' ,
					renderer : function GridView$subtitles$renderer ( value )
					{	return this.stackValues( value ) } ,
					flex : 2
				}
			] ,
			store : Ext.create( 'NetFix.store.DummyDataStore' ) ,

			stackValues : function GridView$stackValues ( array )
			{	var length = array.length
				var string = array[0]
				for ( var i = 1 ; i < length ; i++)
				{	string = string + '<br/>' + array[i] }
				return string
			}
		}
	}
)
