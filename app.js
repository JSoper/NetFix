// 'Ext.window.MessageBox'

Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name : 'NetFix' ,
	requires : [ 'NetFix.MovieData' , 'NetFix.store.DummyDataStore' ] ,
	autoCreateViewport : true 
});

/*
Ext.application({
	name: 'NetFix',
	views: ['Viewport'],
	// stores : [ 'DummyDataStore'	 ] ,
	// autoCreateViewport : true ,
	launch: function NetfFix$Launch() {
		Ext.require('NetFix.MovieData');
		Ext.require('NetFix.SampleXmlData');
		Ext.require('NetFix.store.DummyDataStore');
		Ext.require('NetFix.store.SampleXmlDataStore');
		Ext.require('NetFix.view.Viewport', function NetFix$Launch$requireViewport() {
			console.log('Ext.Application Ext.require( "Viewport" )');
			Ext.create('NetFix.view.Viewport');
		});
	}
});*/
