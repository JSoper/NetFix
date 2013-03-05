
Ext.require
( 'NetFix.SampleXmlData' ,
	 function SampleXmlDataStore$require$SampleXmlData ()
	 {	Ext.define
		( 'NetFix.store.SampleXmlDataStore' ,
			{	extend : 'Ext.data.Store' , // XmlStore
				storeId : 'sampleXmlDataStore' ,
				// requires : [ 'NetFix.SampleXmlData' ] ,
				// data : NetFix.SampleXmlData.data ,
				autoLoad : true , // ???
				model : 'NetFix.model.SampleXmlModel' ,
				// idProperty: 'IDSPENDINGCOMMITTEE',
				proxy :
				{	type : 'ajax' , // 'memory' ,
					url : '/NetFix/app/SampleData.xml' ,
					reader :
					{	type : 'xml' ,
						record : 'catalog_title' ,
						idProperty : 'id' ,
						root : 'catalog_titles'
			}	}	}
		)
	}
)
