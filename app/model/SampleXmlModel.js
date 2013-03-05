Ext.define
(	'NetFix.model.SampleXmlModel' ,
	{	extend: 'Ext.data.Model' ,
		fields:
		[	{	name : 'title' , mapping : 'title@regular' , type : 'string' } ,
			{	name : 'average_rating' } ,
			{	name : 'release_year' , type : 'int' } ,
			{	name : 'runtime' } ,
			{	name : 'id' }
		]
	}
)

// <title short="Star" regular="Star"></title>
// http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.Field-cfg-mapping

/*
http://stackoverflow.com/questions/11121218/reading-xml-in-id-key-value-value-attribute-format

It's not very well-documented, but the mappings for your fields can be any
expression accepted by Ext.dom.Query. So where you'd normally have a simple mapping of "title"
to select a child tag named "title", you can include a more complex selector.
In this case, you want to select the "value" attribute of "column" tags
whose ID attributes match the field name you're looking for,
so in your model or store, you can define your fields like so:

fields: [
    { name: 'title', mapping: 'column[id=title]@value' },
    { name: 'director', mapping: 'column[id=director]@value' },
    { name: 'year', mapping: 'column[id=year]@value' }
],*/
