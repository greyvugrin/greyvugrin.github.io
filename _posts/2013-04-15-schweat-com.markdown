---
layout: post
title:  "Schweat.com"
date:   2013-04-15
tags: [development, heroku, ajax, php]
categories: [development]
images:
- /development/schweat-home-search.jpeg
- /development/schweat-my-workouts.jpeg
- /development/schweat-workout.jpeg
- /development/schweat-psql.png
---

Schweat is a Heroku web app that seeks to organize various exercises, and serve as a quick reference during a workout session at the gym. All exercises in the database have a YouTube ID, which allows the user to load and view the associated video.

Users can search and add exercises to their Workouts (in a cart-like fashion, with AJAX) on the homepage. From there the Workout can be saved and added to the database once the user has signed up (via a unique link sent through [SendGrid][sendgrid]{:target="_blank"}'s email API).

This project involved: Database Design, Front and Back End Development, and UI Design.

You can try it out [here](http://www.schweat.com){:target="_blank"}.

[sendgrid]: http://sendgrid.com
