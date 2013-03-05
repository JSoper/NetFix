
Ext.define
( 'NetFix.view.ListView' ,
	{	extend : 'Ext.view.View' ,
		xtype : 'netfixlistview' ,
		requires : [ 'NetFix.MovieData' ] ,
		config :
		{	title : 'NetFix.view.ListView.title' ,
			layout :	'panel' ,
			// store : Ext.create( 'NetFix.store.NetFlixDataStore' ) ,
			tpl : Ext.create( 'Ext.XTemplate',
					'<tpl for=".">' ,
						'<div class="recordCls">' ,
							'{#}) <b>{title}</b> = {averageRating}, {length/60} mins, by {director}' ,
							'</br>' ,
						'</div>' ,
					'</tpl>'
					) ,
			itemSelector : 'div.recordCls' ,
			data : NetFix.MovieData.data
		}
	}
)

/*	// An experiment putting an HTML table into ExtJS
	// tpl : requires autoEl : 'table' in order to work
	autoEl : 'table' ,
	tpl : Ext.create( 'Ext.XTemplate',
					'<tpl for=".">' ,
						// BELOW DOES NOT WORK WITH IE9
						// There does not seem to be a nextSibling property in IE elements
						'<tr class="record">' ,
							'<th>{title}</th>' ,
							'<td bgcolor=red>{averageRating}</td>' ,
							'<td>{director}</td>' ,
						'</tr>' ,
					'</tpl>'
					) ,
*/
