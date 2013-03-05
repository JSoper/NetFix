
Ext.define( 'NetFix.store.NetFlixDataStore' ,
	{	extend : 'Ext.data.Store' ,
		storeId : 'NetFlixDataStore' ,
		model: 'NetFlix.model.NetFlixDataModel' ,
		data:
		[	{ title : "Star Wars IV" } ,
			{ title : "Star Wars V" } ,
			{ title : "Faantasia"} ,
			{ title : "Romeo and Juliet"}
		]
	}
)
