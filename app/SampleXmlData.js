
Ext.define
( 'NetFix.SampleXmlData' ,
	{	statics :
		{	data : '<catalog_titles>\
			  <number_of_results>1140</number_of_results>\
			  <start_index>0</start_index>\
			  <results_per_page>10</results_per_page>\
			  <catalog_title>\
			  <id>http://api.netflix.com/catalog/titles/movies/60021896</id>\
			  <title short="Star" regular="Star"></title>\
			  <box_art small="http://alien2.netflix.com/us/boxshots/tiny/60021896.jpg" medium="http://alien2.netflix.com/us/boxshots/small/60021896.jpg"></box_art>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/synopsis" rel="http://schemas.netflix.com/catalog/titles/synopsis" title="synopsis"></link>\
			  <release_year>2001</release_year>\
			  <category scheme="http://api.netflix.com/catalog/titles/mpaa_ratings" label="NR"></category>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/cast" rel="http://schemas.netflix.com/catalog/people.cast" title="cast"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/directors"	rel="http://schemas.netflix.com/catalog/people.directors" title="directors"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/format_availability" rel="http://schemas.netflix.com/catalog/titles/format_availability" title="formats"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/screen_formats" rel="http://schemas.netflix.com/catalog/titles/screen_formats" title="screen formats"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/languages_and_audio" rel="http://schemas.netflix.com/catalog/titles/languages_and_audio" title="languages and audio"></link>\
			  <average_rating>1.9</average_rating>\
			  <link href="http://api.netflix.com/catalog/titles/movies/60021896/similars" rel="http://schemas.netflix.com/catalog/titles.similars" title="similars"></link>\
			  <link href="http://www.netflix.com/Movie/Star/60021896" rel="alternate" title="webpage"></link>\
			  </catalog_title>\
			  <catalog_title>\
			  <id>http://api.netflix.com/catalog/titles/movies/17985448</id>\
			  <title short="Lone Star" regular="Lone Star"></title>\
			  <box_art small="http://alien2.netflix.com/us/boxshots/tiny/17985448.jpg" medium="http://alien2.netflix.com/us/boxshots/small/17985448.jpg" large=""></box_art>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/synopsis" rel="http://schemas.netflix.com/catalog/titles/synopsis" title="synopsis"></link>\
			  <release_year>1996</release_year>\
			  <category scheme="http://api.netflix.com/catalog/titles/mpaa_ratings" label="R"></category>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/cast" rel="http://schemas.netflix.com/catalog/people.cast" title="cast"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/directors" rel="http://schemas.netflix.com/catalog/people.directors" title="directors"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/awards" rel="http://schemas.netflix.com/catalog/titles/awards" title="awards"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/format_availability" rel="http://schemas.netflix.com/catalog/titles/format_availability" title="formats"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/screen_formats" rel="http://schemas.netflix.com/catalog/titles/screen_formats" title="screen formats"></link>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/languages_and_audio" rel="http://schemas.netflix.com/catalog/titles/languages_and_audio" title="languages and audio"></link>\
			  <average_rating>3.7</average_rating>\
			  <link href="http://api.netflix.com/catalog/titles/movies/17985448/similars" rel="http://schemas.netflix.com/catalog/titles.similars" title="similars"></link>\
			  <link href="http://www.netflix.com/Movie/Lone_Star/17985448" rel="alternate" title="webpage"></link>\
			  </catalog_title>\
			</catalog_titles>'
		}
	}
)

/* http://api.netflix.com/catalog/titles/movies/493387/languages_and_audio
	This XML file does not appear to have any style information associated with it. The document tree is shown below.
     <languages_and_audio>
      <language_audio_format>
      	<category scheme="http://api.netflix.com/categories/title_formats" label="DVD" term="DVD">
	      	<category scheme="http://api.netflix.com/categories/languages" label="French" term="French">
    	  		<category scheme="http://api.netflix.com/categories/audio" label=" Dolby Digital 2.0 Stereo" term=" Dolby Digital 2.0 Stereo"/>
      		</category>
      		<category scheme="http://api.netflix.com/categories/languages" label="English" term="English">
      			<category scheme="http://api.netflix.com/categories/audio" label=" Dolby Digital 2.0 Surround" term=" Dolby Digital 2.0 Surround"/>
      		</category>
      	</category>
      </language_audio_format>

      <language_audio_format>
      	<category scheme="http://api.netflix.com/categories/title_formats" label="Blu-ray" term="Blu-ray">
			<category scheme="http://api.netflix.com/categories/languages" label="French" term="French">
				<category scheme="http://api.netflix.com/categories/audio" label=" Dolby Digital 5.1" term=" Dolby Digital 5.1"/>
			</category>
			<category scheme="http://api.netflix.com/categories/languages" label="English" term="English">
				<category scheme="http://api.netflix.com/categories/audio" label=" Dolby Digital 2.0 Surround" term=" Dolby Digital 2.0 Surround"/>
				<category scheme="http://api.netflix.com/categories/audio" label=" DTS 5.1 HD" term=" DTS 5.1 HD"/>
				<category scheme="http://api.netflix.com/categories/audio" label=" DTS 5.1 Surround" term=" DTS 5.1 Surround"/>
			</category>
			<category scheme="http://api.netflix.com/categories/languages" label="Spanish (Neutral)" term="Spanish (Neutral)">
				<category scheme="http://api.netflix.com/categories/audio" label=" Dolby Digital 5.1" term=" Dolby Digital 5.1"/>
			</category>
      	</category>
     </language_audio_format>
   </languages_and_audio>
	*/
