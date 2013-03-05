
Ext.require( 'NetFix.MovieData' ,
	 function dummyDataStore$require$MovieData ()
	 {	Ext.define
		 ( 'NetFix.store.DummyDataStore' ,
			{	extend : 'Ext.data.Store' ,
				requires : [ 'NetFix.MovieData' ] ,
				storeId : 'dummyDataStore' ,
				data : NetFix.MovieData.data ,
				fields : [	'title' , 'averageRating' , 'length' , 'director' ,
								'genres' , 'thisMovieIs' ,
								'language' , 'subtitles' ] /////  ,
				// proxy : { type : 'memory' , reader : { type : 'json' } }
			}
		)
	}
)
