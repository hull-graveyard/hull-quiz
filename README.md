
# About this project

This project is built on the Hull platform, with [Aura](github.com/aurajs/aura), [Backbone.js](https://github.com/documentcloud/backbone) and lots of other cool libraries.

**You don't need an account on Hull to use it locally, the App key is already present in this app.**

-----------------------
# Hullcolors

This is demo entirely done with Hull in which you need to guess all the brands based on their colors.

[View demo (http://hull.github.com/hullcolors)](http://hull.github.com/hullcolors)

* Login with Twitter
* Edit/Add questions
* Share your score on Twitter

Best of all, it has no server code and barely any Javascript.

The steps below are tailored for Mac environments :
Linux should mostly work the same.

## How it was done


1. We instantiated a new hull application using our [Grunt-init task](https://github.com/hull/grunt-init-hull).

        grunt-init hullcolors


2. After followed the instructions of the Grunt init task, we added a new HTML page to the project called ``edit.html`` and we declared inside a ``quiz_admin@hull`` widget to write our questions.

        <!-- Quiz Admin Widget -->
        <div data-hull-widget="quiz_admin@hull"></div>


3. Then we added the ``quiz@hull``widget inside the main HTML page.

        <!-- Quiz Widget -->
        <div data-hull-widget="quiz@hull" data-hull-id="512383795ef8755c63000001"></div>

4. As we wanted to show a logo instead of the name of the brand in each answer, we needed to override the original ``quiz_answer`` template.

    In order to do that we added the file ``quiz_answer.hbs`` in ``app/widgets/quiz/`` and we wrote the following code inside.

        <img src="images/icons/{{description}}">

5. As you notice in the demo, we change the background-color at each question.

    That's why we created a widget called ``background`` that you can find in ``app/widgets/background``.

    This widget listens to all events from the quiz to set the proper background color.

6. Afterwards, we did a bit of CSS to have an effective design. **And that's all!**


## Installing

First, clone this repository :

    git clone git://github.com/hull/hullcolors.git

Install [node.js](http://nodejs.org) (Only used for building the app, not needed for deployment)

Install [grunt-cli](https://github.com/gruntjs/grunt-cli) as a global module.
It's amazing so you should do it anyways.

    [sudo] npm install grunt-cli -g
    [sudo] npm install bower -g

then install grunt and it's modules in the project's folder.

    cd hullcolors/
    npm install
    bower install

## Running the app

### To run the app locally, run:

    grunt server

## Deployment

First create your heroku app if it's not done yet :

    heroku create your_amazing_app

Build your app for deployement, and commit the compiled version:

    grunt build
    cd dist
    git init
    git add dist
    git commit -m "Deployment build"

Deploy your app to heroku:

    git subtree push --prefix dist heroku master
    open http://your_amazing_app.herokuapp.com

