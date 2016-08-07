---
layout: post
title:  "How to track Shopify revenue in Optimizely"
date:   2016-08-07
tags: [development, Shopify, JavaScript, liquid]
categories: [development]
thumbnail: "/images/development/Optimizely.png"
---

Recently, after following the standard Optimizely [revenue tracking guide for Shopify](https://help.optimizely.com/Integrate_Other_Platforms/Implementing_Optimizely_on_a_CMS_or_e-commerce_platform#Shopify){:target="_blank"}, our team noticed some supicious behavior in an experiment's revenue tracking.

After digging further the issue appeared to be with high order amounts in particular. It turns out that the example code given in the Optimizely guide will have unexpected behavior for orders of $1,000 dollars (or your currency) and over.

Here's the guide's code for reference (to be inserted into the Additional Scripts portion of your Shopify Checkout Settings):

{% highlight html %}
<!-- Optimizely Revenue Tracking Code -->
<script type="text/javascript">
var optimizely = optimizely || [];
var revenueInCents = {% raw %}{{ subtotal_price | money_without_currency }}{% endraw %} * 100;
window.optimizely.push(["trackEvent", "eventName", {"revenue": revenueInCents}]);
</script>

<script src="//cdn.optimizely.com/js/XXXXXXXXX.js"></script>
<!-- End Optimizely Revenue Tracking Code -->
{% endhighlight %}

This works fine in most cases, but if the order subtotal is $1,000 the liquid will output `1,000.00`, giving you the following:

{% highlight javascript %}
// Order subtotal is 1,000 dollars
var revenueInCents = 1,000.00 * 100;
{% endhighlight %}

In this scenario, revenueInCents is now equal to 0! Scary stuff. Instead of reporting 1k revenue for this user, 0 will be reported instead.

To solve this problem, use `{% raw %}{{ subtotal_price }}{% endraw %}` without the `money_without_currency` filter. This will output its value in cents already, so no need to multiply by 100 again.
The updated code looks like this:

{% highlight html %}
<!-- Optimizely Revenue Tracking Code -->
<script type="text/javascript">
var optimizely = optimizely || [];
var revenueInCents = {% raw %}{{ subtotal_price }}{% endraw %};
window.optimizely.push(["trackEvent", "eventName", {"revenue": revenueInCents}]);
</script>

<script src="//cdn.optimizely.com/js/XXXXXXXXX.js"></script>
<!-- End Optimizely Revenue Tracking Code -->
{% endhighlight %}

This will eliminate errors for high order amounts, and hopefully save you from headaches with results later down the line. I'll be in touch with the Optimizely team to highlight the issue, and will update here if their guide is fixed.