pictomatic
==========

Small jQuery plugin to render pictographs using your favorite pictogram webfont (default to FontAwesome).

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


    