# Tabs plugin

This jQuery plugin creates a module to show and hide tabbed content.  Tabs are useful for displaying groups of content in a compact area.

## Usage / Installation

Usage of this tabs plugin entails the usual process:

1. create the HTML markup
2. add the JavaScript / jQuery refs
3. initialize the plugin with any available options
4. style the markup with CSS as desired.

### HTML

The HTML markup must have a containing parent element, which can use any ID or class for initialization.

The parent element must contain an element with a "controls" class and an element with a "targets" class.  

The "controls" element will contain as many "control" elements as desired, which will contain the tab title.  Each control element will trigger the visibility of its respective "target" element when clicked.

The "targets" element will contain the same number of "target" elements to match the number of "control" elements, and be displayed when the matching "control" element is clicked.

Optionally, an "active" class can be added to the "control" and "target" element that should be shown on page load.  Otherwise, the first slide will be visible.

An example of the tabs markup is shown below:

```html
<div id="my_tabs">
	<div class="controls">
		<a href="#" class="control active">Tab #1</a>
		<a href="#" class="control">Tab #2</a>
		<a href="#" class="control">Tab #3</a>
	</div>
	<div class="targets">
		<div class="target">
			<h2>Tab 1</h2>
			<p>
				Lorem ipsum dolor [...]
			</p>
		</div>
		<div class="target">
			<h2>Tab 2</h2>
			<p>
				Mauris ac metus [...]
			</p>
		</div>
		<div class="target">
			<h2>Tab 3</h2>
			<p>
				Ut viverra imperdiet [...]
			</p>
		</div>
	</div>
</div>
```

### JavaScript / jQuery
Since this plugin utilizes jQuery, we must call it before we can initialize the plugin.  Typically, jQuery will go in the <HEAD> of your HTML document.  You can use a self-hosted copy of it or use one of several CDN hosted versions.  

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- CDN-hosted -->
```

*- OR -*
```html
<script src="js/jquery-1.11.3.min.js"></script>
<!-- path to your JS folder -->
```
Anywhere under the jQuery ref, add the ref to the plugin.  This can be added in the `<HEAD>` section or anywhere in the `<BODY>` of the document.

```html
<script src="js/tabs.js"></script>
<!-- path to your JS folder -->
```

### Initialize the plugin
Initialize the plugin with the selector of the parent element.

```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my_tabs' ).tabs( );
	});
})( jQuery );
</script>
```

### Style the plugin with CSS
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://demo.dockstreetmedia.com/tabs/css/main.css.  Some of the demos also have some styling for the tabs, which can be seen here: http://demo.dockstreetmedia.com/tabs/css/tabs.css.

You can modify or add your own CSS to match your own preferences.

<strong>NOTE</strong>: the CSS should work for all modern browsers (Chrome, Firefox, Safari, etc.) and Internet Explorer 8 and later.  IE 7 and older, things fall apart.  However, if you are still using IE 7, then I'm sorry, but that's your fault.

## Demos

The demos index can be viewed here:

* http://demo.dockstreetmedia.com/tabs/index.html.  

View the source to see how each tab module was initialized and styled.  

## Learn / Adopt / Fork
The entirety of the plugin is included in this repository, including the demo section.  You can easily view all of the code in order to learn more about it.  I try to use clear commenting to explain the code.

Also, feel free to adopt and adapt to make it your own.  If you like, fork it and send over a pull request.  Add or solve existing issues.  It is open-source, after all.
