---
layout: post
title:  "MVMT Watches"
date:   2015-08-20
tags: [development, Shopify, JavaScript, liquid]
categories: [development]
thumbnail: "/images/development/mvmt-chrono.gif"
---

MVMT Watches is a leading watch brand based in LA. Throughout the majority of my career at Brand Value Accelerator I've been intimately involved with the optimization (through Optimizely) and development of [their Shopify store](http://mvmtwatches.com){:target="_blank"} as the project's main developer.

The combination of high online traffic and MVMT's willingness to experiment with new technologies makes their site a fertile learning environment. From landing pages to a complex promotional discount system, I have worked both internally and directly with the client to provide the most elegant solutions to enhance their e-commerce experience.

Below are some of my contributions to the project.

## Product Filtering

![An animated GIF of the filtering and sorting at work.](/images/development/mvmt-filtering.gif "Instant filtering and sorting - no reload!")

This feature allows users to sort and filter products in a collection instantly, without relying on Shopify's native functionality (which reloads the page each time).

First, all the product info is retrieved via an AJAX call to a JSON endpoint and stored in a variable. From there events are bound to the UI that either filter or sort the initial product data, and render the result in the grid using a JS template that's populated with each item's info. 

*The filter function is based on product tags:*
{% highlight javascript %}
var filterProducts = function(tagArray) {
	filtered = [];
	$.each(allProducts.products, function() {
		var me = $(this)[0];
		var missing_tag = false;

		var tagCheck = function() {
			$.each(tagArray, function(index, value) {
				var targetTag = index+'_'+value;
				if (me.tags.indexOf(targetTag) < 0) {
					missing_tag = true;
				}
			});
		};
		tagCheck();
		if (!missing_tag) {
			filtered.push(me);
		}
		return;
	});
};
{% endhighlight %}

## SVG Watch Animation

![An GIF of the watch fading in and its hands moving.](/images/development/mvmt-chrono.gif)

For the chrono product launch landing page, I animated an SVG of a watch to 'build' as the page is scrolled down, and rotated the hands so they tick proportionally. This was accomplished by editing the SVG's XML layout to group each element together, and using animateTransform elements to move the hands directly in the markup. 

*The seconds hand group and animateTransform element:*
{% highlight html %}
<g id="seconds-hand-wrapper" transform="rotate(400.5 223.6 223.6)">
	<animateTransform attributeName="transform" attributeType="XML" type="rotate" from="84 223.6 223.6" to="444 223.6 223.6" dur="60s" repeatCount="indefinite"></animateTransform>
	<g>
		<circle fill="#FFFFFF" cx="223.6" cy="223.6" r="5"></circle>
		<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="223.6" y1="230.1" x2="223.6" y2="110.4"></line>
	</g>
	<circle fill="none" cx="223.6" cy="223.6" r="140"></circle>
</g>
{% endhighlight %}

## Mobile Menu

![An GIF of the menu animation.](/images/development/mvmt-menu.gif)