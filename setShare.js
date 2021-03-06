(function ($) {
	'use strict';
	
	$.setShareLoad = function(a){
		if (a == []._) a = ['t','g','p'];
		if(a.pop){
			for (var i = a.length; i--;){
				if(a[i] == 'g') $.getScript("https://apis.google.com/js/plusone.js");
				if(a[i] == 'p') $.getScript("http://assets.pinterest.com/js/pinit.js");
				if(a[i] == 't') $.getScript("http://platform.twitter.com/widgets.js");
			}
		}
	};
	
    $.fn.setShare = function (o) {
		var o = $.extend({
				url: window.location.href || null,
				description: $('meta[name="Description"]').attr('content') || $('meta[name="description"]').attr('content') || null,
				image: null,
				action: 'html',
				facebook: true,
				twitter: true,
				google: true,
				pinterest: true
			}, o),
			a = o.url,
			b = o.description,
			c = o.image,
			d = o.action,
			e = '',
			l = [];
			
		if (d == 'replace') d = 'html';
		if (c == null && a.match(/jpg|jpeg|gif|png/g) !== null) c = a;
		
		if (o.facebook) e +=	'<div class="face-div"><iframe src="http://www.facebook.com/plugins/like.php?href=' + encodeURIComponent(a) + '&width=77&layout=button&action=like&show_faces=true&share=false&height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:77px; height:21px;" allowTransparency="true"></iframe></div>';
		if(o.twitter) l.push('t'), e +='<div class="twitter-div"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + a + '" data-text="' + b + '" data-lang="es" data-count="none" target="_blank">Twittear</a></div>';
		if(o.google) l.push('g'), e +=	'<div class="google-div"><div class="g-plusone" data-size="tall" data-annotation="none" data-href="' + a + '"></div></div>';
		if(o.pinterest) l.push('p'), e +=	'<div class="pinit-div"><a data-pin-config="none" href="//pinterest.com/pin/create/button/?url=' + a + '&media=' + c + '&description=' + b + '" data-pin-do="buttonPin" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>';
		
		setTimeout(function () {$.setShareLoad(l);}, 200);
		
		return this.each(function () {
			$(this)[d](e);
		});
	};
	
})(jQuery);