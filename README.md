# Motion Mind Fitness Journey or MMFJ !

<img src='client/public/assets/screenshots/logo.png' style='width:100%' />

The idea was to have a website usefull for people who mainly do crossfit but accessible to people who also do general sportsand wants to improve their mobility. There is no need of a certain level of fitness to use it.
I wanted to make it easier and more accessible mobility routine: mobility is very important for an elite athlete yesbut also for anyone. How much time do we pass sit down in a day?! Moving our muscles is very important to be able to stay healthy even  at 90 years old. 
The hardest part is to start and found a routine to do, here come MMFJ to help you!

## Breakdown of the App

### Navbar

<img src='client/public/assets/screenshots/navbar1.png' style='width:100%' />

There is 2 differents navbar set up depending if you are login or not. The first one when you are not login give you access to post-workout pages, pre-workout pages, sign up page, login page and the logo on the left will lead you back to homepage. 
Now when the user login, he will have access to more things: general mobility appear, the user name appear(leads to the user page) and log out appear. We don't have sign up or login.

<img src='client/public/assets/screenshots/navbar2.png' style='width:100%' />

### Homepage

There is 3 sections of the homepage.

The here section 

<img src='client/public/assets/screenshots/hero.png' style='width:100%' />

The about section

<img src='client/public/assets/screenshots/about.png' style='width:100%' />

And the features section 

<img src='client/public/assets/screenshots/features.png' style='width:100%' />

### Sign up 

For the sign up page we have a form. I do ask the country and the city. The idea will be in the future to use this information, maybe display the users pages like a 'facebook' and be able to interact with other crossfitters and meet in your city. The button will be disable until all info are field. We message will appear to let you know once your account has been created or if there is any errors. All info are store in the DB, the password for security reason is hash.

<img src='client/public/assets/screenshots/signUp.png' style='width:100%' />

### Login

For the login the user only need his email and password. The button will be disable until all info are field. We message will appear to let you know that the process to retrieve your info is happening. Once you are login, the website will navigate to your user page automatically and the navbar set up will change.

<img src='client/public/assets/screenshots/login.png' style='width:100%' />

### User page

In the user page there is 3 sections: 

The first one is an intro for the user

<img src='client/public/assets/screenshots/intro-userPage.png' style='width:100%' />

Then there is a section with all your current PRs(Personal Records) in different exercises. This is very important to know what is your PR to be able to adjust the weight of some workouts.

<img src='client/public/assets/screenshots/currentPRs.png' style='width:100%' />

Last section is to update your PRs. You can choose the exercise, put the weight in lb and choose a date. A message will let you know once your PR has been send to the DB and your current PR section will update automatically. 

<img src='client/public/assets/screenshots/update-PRs.png' style='width:100%' />

### Pre-Workout

We have the homepage that let you choose if you want to focus by body area or movements.

<img src='client/public/assets/screenshots/homepage-PreWorkout.png' style='width:100%' />

If you choose body area it leads you to a page with youtube video for some mobility routine. You can also filter the video to only see the ones that you are interested in. 

<img src='client/public/assets/screenshots/preWorkout-bodyArea.png' style='width:100%' />

If you choose movement it leads you to a page with youtube video for some mobility routine. You can also filter the video to only see the ones that you are interested in. 

<img src='client/public/assets/screenshots/preWorkout-movement.png' style='width:100%' />

### Post-Workout

We have the homepage that let you choose if you want to focus by body area or movements.

<img src='client/public/assets/screenshots/homepage-PostWorkout.png' style='width:100%' />

If you choose body area it leads you to a page with youtube video for some mobility routine. You can also filter the video to only see the ones that you are interested in. 

<img src='client/public/assets/screenshots/postWorkout-BodyArea.png' style='width:100%' />

If you choose movement it leads you to a page with youtube video for some mobility routine. You can also filter the video to only see the ones that you are interested in. 

<img src='client/public/assets/screenshots/postWorkout-Movement.png' style='width:100%' />

### General-Mobility

We have the homepage that let you choose if you want to do morning or night routine.

<img src='client/public/assets/screenshots/homepage-generalMobility.png' style='width:100%' />

If you choose morning it leads you to a page with 3 youtube video for some mobility routine, depending of how much time you have.

<img src='client/public/assets/screenshots/morning.png' style='width:100%' />

If you choose night it leads you to a page with 3 youtube video for some mobility routine, depending of how much time you have.

<img src='client/public/assets/screenshots/night.png' style='width:100%' />

### Footer

For the footer we can found the name of the owner and also click on the terms that will lead you to page with all legal informations.

<img src='client/public/assets/screenshots/footer.png' style='width:100%' />


I hope you enjoy your visit on MMJF, and that it's only the beginning of your mobility journey!!!


## For the coding part 

My main goal was to have a clean, organize and DRY code as possible. To use as much tools that i learned during the course. 
I did pass a lot of time on the responsivness of the website. I wanted to learn from the experience from the portfolio and be able to have fun with css.
For the API  used, i wish to could have used it more but for the purpose of the website i didn't needed to display more information than the video title.

There is a few more things i would like to work on. Like adding a section in the user page to display charts and see the improvement made in time on each exercises. And add also a goals list that will be store in the db. And i am sure i will found more things to add or try out with this website.