---
layout: post
title:  "Kinematics Part 1 Pen"
date:   2016-03-05
tags: [JavaScript, canvas, html5]
categories: [development]
thumbnail: "/images/development/kinematics.gif"
---

I was feeling the urge to try out generative art recently, and through many hours of researching tools / frameworks / tutorials, realized that I could hone my JS skills at the same time. This led me to the [Coding Math](https://www.youtube.com/channel/UCF6F8LdCSWlRwQm_hfA2bcQ){:target="_blank"} YouTube channel -- it has JS tutorials for anything from fractals to physics.

[Kinematics Part 1](https://www.youtube.com/watch?v=WHn2ouKKSfs){:target="_blank"} was a blast, I followed it closely and realized that the random numbers used for angles could be applied to color the line produced. A few Stack Overflow searches later, and I was able to feed the numbers into a color blend function (grabbed from [this post](http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors){:target="_blank"}).

*The resulting arm angle determines how which color the traced stroke is:*
{% highlight javascript %}
context2.strokeStyle = blendRGBColors(
	'rgb(17,211,188)',
	'rgb(255,179,123)',
	Math.sin(arm.angle)
);
{% endhighlight %}

For all the code, check out the [full pen here](http://codepen.io/greyvugrin/pen/LNGMeX){:target="_blank"}.

![An GIF of the arm tracing the line.](/images/development/kinematics.gif)