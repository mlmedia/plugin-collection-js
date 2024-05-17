# Carousel plugin (jQuery)

This jQuery plugin is an infinite-scrolling carousel that works as a slideshow for images and content. Although it's not bloated with options, it is a great little plugin to learn from when building something custom with jQuery.

## Usage / Installation

Usage of this carousel plugin entails the usual process:

1. create the HTML markup
2. add the JavaScript / jQuery refs
3. initialize the plugin with any available options
4. style the markup with CSS as desired.

### HTML

The HTML markup must have a containing parent element, which can use any ID or class for initialization. The parent element must contain a single element with the "slide_window" class and optionally may contain the two elements with a "control" class and one of two compound "prev" and "next" classes. Any element can be used in the "control" elements, including "&lt;" / "&gt;" characters, special HTML characters such as `&#9658;` arrows, image graphics, or font icons, such as with <a href="http://fortawesome.github.io/Font-Awesome/icons/" title="Font Awesome icons" target="_blank">Font Awesome icons</a>.

The "slide_window" element can contain as many elements as desired with the "slide" class. These elements will contain all of the visible content per slide. Each slide can contain any type of markup and it will fit inside the "slide_window."

NOTE: The "slide" element height is not set dynamically with JavaScript, but instead must be set with CSS. This is intentional to allow a user to create more or less vertical space as desired to a slide (for example, to use a custom background image).

An example of the carousel markup is shown below:

```html
<div id="carousel" class="clearfix">
	<a href="#" class="control prev">&lt;&lt;&nbsp;Prev</a>&nbsp;&nbsp;
	<a href="#" class="control next">Next&nbsp;&gt;&gt;</a>
	<div class="slide_window clearfix">
		<div class="slide">
			<h3>Slide #1</h3>
			<img src="../images/sample_image_1.jpg" alt="" class="align_left" />
			Lorem ipsum dolor sit amet [...].
		</div>
		<div class="slide">
			<h3>Slide #2</h3>
			<img src="../images/sample_image_2.jpg" alt="" class="align_right" />
			Lorem ipsum dolor sit amet [...].
		</div>
		<div class="slide">
			<h3>Slide #3</h3>
			<img src="../images/sample_image_3.jpg" alt="" class="align_left" />
			Lorem ipsum dolor sit amet [...].
		</div>
	</div>
</div>
```

### JavaScript / jQuery
Since this plugin utilizes jQuery, we must call it before we can initialize the plugin. Typically, jQuery will go in the <HEAD> of your HTML document. You can use a self-hosted copy of it or use one of several CDN hosted versions.  

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- CDN-hosted -->
```

*- OR -*
```html
<script src="js/jquery-1.11.3.min.js"></script>
<!-- path to your JS folder -->
```
Anywhere under the jQuery ref, add the ref to the plugin. This can be added in the `<HEAD>` section or anywhere in the `<BODY>` of the document.

```html
<script src="js/carousel.js"></script>
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
		$( '#my_parent_id' ).carousel( );
	});
})( jQuery );
</script>
```

### Style the plugin with CSS
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://www.dockstreetmedia.com/demo/carousel/css/main.css. Some of the demos also have some styling for the carousels, which can be seen here: http://www.dockstreetmedia.com/demo/carousel/css/carousel.css.

You can modify or add your own CSS to match your own preferences.

<strong>NOTE</strong>: the CSS should work for all modern browsers (Chrome, Firefox, Safari, etc.) and Internet Explorer 8 and later. IE 7 and older, things fall apart.  However, if you are still using IE 7, then I'm sorry, but that's your fault.

## Demos 

The demos index can be viewed here:

* http://www.dockstreetmedia.com/demo/carousel/index.html.  

View the source to see how each carousel was initialized and styled.

## Learn / Adopt / Fork
The entirety of the plugin is included in this repository, including the demo section. You can easily view all of the code in order to learn more about it.  I try to use clear commenting to explain the code.

Also, feel free to adopt and adapt to make it your own.  If you like, fork it and send over a pull request. Add or solve existing issues.  It is open-source, after all.
