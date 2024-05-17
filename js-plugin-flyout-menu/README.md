# Flyout menu plugin (jQuery)

This jQuery plugin creates a dynamic dropdown menu.  Although it's not bloated with options, it is a great little plugin to learn from when building something custom with jQuery.

## Usage / Installation

Usage of this flyout menu plugin entails the usual process:

1. create the HTML markup
2. add the JavaScript / jQuery refs
3. initialize the plugin with any available options
4. style the markup with CSS as desired.

### HTML

The HTML markup for the flyout menu must have a containing parent element, which can use any ID or class for initialization. The menu markup utilizes nested unordered list elements with "menu" classes with child list item elements as shown below:

```html
<div id="nav">
	<ul class="primary_menu list-inline clearfix">
		<li>
			<ul class="menu">
				<li><a href="#" title="Parent link #1">Parent link #1</a>
					<ul class="menu">
						<li><a href="#" title="Link #1">Link #1</a></li>
						<li><a href="#" title="Link #2">Link #2</a></li>
						<li><a href="#" title="Link #3">Link #3</a></li>
						<li><a href="#" title="Link #4">Link #4</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<ul class="menu">
				<li><a href="#" title="Parent link #2">Parent link #2</a>
					<ul class="menu">
						<li><a href="#" title="Link #1">Link #1</a></li>
						<li><a href="#" title="Link #2">Link #2</a></li>
						<li><a href="#" title="Link #3">Link #3</a></li>
						<li><a href="#" title="Link #4">Link #4</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li>
			<ul class="menu">
				<li><a href="#" title="Parent link #3">Parent link #3</a>
					<ul class="menu">
						<li><a href="#" title="Link #1">Link #1</a></li>
						<li><a href="#" title="Link #2">Link #2</a></li>
						<li><a href="#" title="Link #3">Link #3</a></li>
						<li><a href="#" title="Link #4">Link #4</a></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
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
<script src="js/js-plugin-flyout-menu.js"></script>
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
		$( '#my_parent_id' ).flyout_menu( );
	});
})( jQuery );
</script>
```

### Style the plugin with CSS
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://demo.dockstreetmedia.com/carousel/css/main.css.  Some of the demos also have some styling for the carousels, which can be seen here: http://demo.dockstreetmedia.com/carousel/css/carousel.css.

You can modify or add your own CSS to match your own preferences.

<strong>NOTE</strong>: the CSS should work for all modern browsers (Chrome, Firefox, Safari, etc.) and Internet Explorer 8 and later.  IE 7 and older, things fall apart.  However, if you are still using IE 7, then I'm sorry, but that's your fault.

## Demos

The demos index can be viewed here:

* http://demo.dockstreetmedia.com/carousel/index.html.  

View the source to see how each carousel was initialized and styled.

## Learn / Adopt / Fork
The entirety of the plugin is included in this repository, including the demo section.  You can easily view all of the code in order to learn more about it.  I try to use clear commenting to explain the code.

Also, feel free to adopt and adapt to make it your own.  If you like, fork it and send over a pull request.  Add or solve existing issues.  It is open-source, after all.
