setShare.js
=================

A jQuery plugin to add social like buttons with one single call.

## Demo
http://masquerade-circus.net/myPlugins/setShare/

##How to use:
Call the plugin on the set of elements to add the like buttons. 
				
##Options:
```javascript
	$(selector).setShare(options);
	$('elem').setShare({
		url: string,
		description: string,
		image: string,
		action: 'append'||'prepend'||'after'||'before'||'replace'||'html',
		facebook: true||false,
		twitter: true||false,
		google: true||false,
		pinterest: true||false
	});
```
Defaults to window.location and description of the page set in the head tag, all 4 buttons and action 'replace'.

# Legal
Author & copyright (c) 2013: [Masquerade Circus](http://masquerade-circus.creaken.com)

Dual [MIT](http://opensource.org/licenses/MIT) & [GPLv2](http://opensource.org/licenses/GPL-2.0) license
