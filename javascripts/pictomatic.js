"use strict";

(function($) {
    var getDefaultFontSize = function(pa){
        pa = pa || document.body;
        var who = document.createElement('div');

        who.style.cssText='display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em';

        who.appendChild(document.createTextNode('M'));
        pa.appendChild(who);
        var fs = [who.offsetWidth, who.offsetHeight];
        pa.removeChild(who);
        return fs;
    };

    $.fn.pictomatic = function(value, options) {
        var defaults = {
            gliph: "<span>&#xF183;</span>",
            numGliphs: 10,
            fontSize: 0,
            width: 'auto',
            bg1: 'rgba(207, 207, 207, 0.05)',
            bg2: 'rgba(240, 0, 0, 0.05)',
            fg1: 'rgb(207, 207, 207)',
            fg2: 'rgb(240, 0, 0)'
        };

        if(typeof options == 'undefined') options = {};

        var el = this,
            width = options.width || defaults.width,
            numGliphs = options.numGliphs || defaults.numGliphs,
            gliph = options.gliph ? "<span>"+options.gliph+"</span>" : defaults.gliph,
            gliphs = Array(numGliphs + 1).join(gliph),
            fontSize = options.fontSize || defaults.fontSize,
            bg1 = options.bg1 || defaults.bg1,
            fg1 = options.bg1 || defaults.fg1,
            bg2 = options.bg2 || defaults.bg2,
            fg2 = options.bg2 || defaults.fg2;
        
        el.addClass('pictomatic').text('');

        var pictogram = jQuery('<div>'+gliphs+"</div>"),
            background = pictogram.clone().addClass('pictomatic-background'),
            foreground = pictogram.clone().addClass('pictomatic-foreground');

        background.css('color', fg1).css('background-color', bg1);
        foreground.css('color', fg2).css('background-color', bg2);
        el.append(background);
        el.append(foreground);

        var spanWidth;
        if(width == 'auto') {
            if(fontSize == 0) {
                fontSize = getDefaultFontSize(el.get(0))[1];
            }
            width = fontSize * numGliphs;
            spanWidth = width / numGliphs;
        } else {
            if(fontSize == 0) {
                fontSize = width / numGliphs;
            }
            spanWidth = width / numGliphs;
        }
        el.css('font-size', fontSize);
        el.append(foreground);
        el.css('min-width', width);
        background.width(width);
        el.find('span').width(spanWidth);

        el.width(width + el.css('padding-left')+el.css('padding-right')+el.css('margin-left')+el.css('margin-right'));
        foreground.width(width * value);
    };

    return this;
})(jQuery);
