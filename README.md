pict-o-matic
============

Small jQuery plugin to render pictographs using your favorite pictogram webfont (default to FontAwesome).

Probably should be done without jQuery, but javascript is not my poison (usually I drink Python). Fork 
and send pull requests if you care.

Requirements
------------

 * jQuery
 * FontAwesome or similar
 
Usage
-----

    <div>
        <div id="chart" style="float:left"></div>
        <div style="padding: 5px; margin-left: 650px;">
            Population<br>
            <span style="font-size:32px;">85%</span>
        </div>
        <br clear="both">
    </div>
    <script type="text/javascript" src="js/pictomatic.js"></script>
    <script type="text/javascript">
        $('#chart').pictomatic(0.85, {width: 650});
    </script>

Result:

![example](/examples/chart.png)
    
    
Options/Defaults
----------------

  * gliph: `<span>&#xF183;</span>`
  * numGliphs: 10
  * fontSize: 0
  * width: 'auto'
  * bg1: 'rgba(207, 207, 207, 0.05)'
  * bg2: 'rgba(240, 0, 0, 0.05)'
  * fg1: 'rgb(207, 207, 207)'
  * fg2: 'rgb(240, 0, 0)'
  
Todo
----

Include some animation.

Caveats
-------

Don't work in older browsers. I don't care for IE bellow 10, nobody should. Fork 
and send pull requests if you please.
