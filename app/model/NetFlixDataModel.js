Ext.define( 'NetFlix.model.NetFlixDataModel',
	{	extend: 'Ext.data.Model',
		fields:
		[	{ name: 'title', type: 'string' } ,
			{ name: 'synopsis', type: 'string' } ,
			{ name: 'short synopsis', type: 'string' } ,
			{ name: 'languages and audio', type: 'string' } ,
			{ name: 'queue item', type: 'string' } ,
			{ name: 'cast', type: 'string' } ,
			{ name: 'directors', type: 'string' } ,
			{ name: 'person', type: 'string' } ,
			{ name: 'length', type: 'int' } // seconds
		]
	}
)
