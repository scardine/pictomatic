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

  * gliph: `&#xF183;`  
    icon code. Unfortunately FontAwesome doesn't use the ligatures trick, so you have to inspect 
    the CSS.
  * numGliphs: 10  
    number of icons in the bar.
  * fontSize: 0
    zero means "auto" (calculated using numGlips and width if possible, else the parents default)
  * width: 'auto'  
    numGlips * fontSize
  * bg1: 'rgba(207, 207, 207, 0.05)'
  * fg1: 'rgb(207, 207, 207)'  
    colors of the background icons (gray foreground, 5% opacity background)
  * bg2: 'rgba(240, 0, 0, 0.05)'
  * fg2: 'rgb(240, 0, 0)'  
    colors of the foreground icons (dark red foreground, 5% opacity background)
  
Todo
----

Include some animation.

Caveats
-------

 * Probably doesn't work for older browsers. I don't care for IE bellow 10, feel free to send pull 
   requests if you care.
 * English is not my native language, I may sound rude or iliterate.
