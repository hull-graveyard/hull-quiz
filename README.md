# About this project

This project is built on the Hull platform, with Hull's Components which are based on [Aura](github.com/aurajs/aura) and [Backbone.js](https://github.com/documentcloud/backbone).

[Read all about components in the Docs](http://hull.io/docs/components): They're not mandatory but help a lot if you're not using a client framework and want to keep things simple.

# Hull Quiz

This is demo a entirely built with Hull and no server code. It's using the [Achievements API](http://hull.io/docs/api/#endpoint-achievements-achievements) to expose a complete Quiz. The game is to guess a brand's name based on its color.

[Play Hull's Quiz (http://hull.github.io/hull-quiz)](http://hull.github.io/hull-quiz)

The following features are demoed in this app:

* Social Login with Twitter
* Playing a Quiz game, and getting a Badge as a reward
* Editing/Adding questions to a Quiz
* Sharing a score on Twitter

## Dependencies

This app requires:

* jQuery 1.8+

Note that it does not require Backbone or Underscore since the complete version of Hull packages a selection of useful libraries such as:

* Backbone
* Underscore
* Aura
* Handlebars.js
* Require.js
* Moment

## How it works

### Install and configure Hull
Starts by installing the Hull.js library in your page and initializing Hull:

```html
<script src="https://d3f5pyioow99x0.cloudfront.net/0.7.12/hull.js"></script>
<script type="text/javascript">
Hull.init({
  appId: "512633779e3903afd4000020",
  orgUrl: 'http://hull-demos.hullapp.io',
  debug: true
}, function(hull){});
</script>
```

### Add a component to the page
We use Hull's Components to inject features into the page where you add custom data attributes as HTML tags.

If you look at `index.html`, you'll find:

```html
<!-- Background Component -->
<div data-hull-component="games/background"></div>
<!-- Quiz Component -->
<div data-hull-component="games/quiz" data-hull-id="5130a76ed4384e508f000009"></div>
```

These two tags will be replaced by Hull components: The `data-hull-component` attribute, tells Hull where to look for these components in your app .

You can find those in the `aura_components` directory, relative to the current file.

Hull components are based on [Aura components](http://aurajs.com/getting-started/), which in turn are based on [Backbone Views](http://backbonejs.org/#View). You get all the features of these frameworks packaged and configured from the start.


### Pass options to components

The `data-hull-id` attribute is an option that's passed to the Quiz component and later used to fetch the correct Quiz from Hull's Backend:

In `aura_components/games/quiz/main.js`

```js
datasources: {
    //Fetch data for the Quiz and the User's badge if any before rendering the Quiz view.
    quiz: function() {
      return this.quiz || this.api(this.id);
    },
    badge: function() {
      return this.badge || this.api('me/badges/' + this.id);
    }
},
```


### Connecting two components

The `quiz` component emits event through the `sandox` object. The `background` component subscribes to these events and reacts accordingly, updating the body's CSS:

In `aura_components/games/quiz/main.js`
```js
afterRender: function(data) {
    //Emit a named even whenever we re-render the Quiz (which happens when a question is answered for example), and bundle the current data object
    this.sandbox.emit('hull.quiz.' + this.id, data);
},
```

In `aura_components/games/background/main.js`
```js
//In the initialize function, subscribe to quiz events and update the body's CSS accordingly
this.sandbox.on('hull.quiz.**', function(data){
  if(data.current){
    // Change background color
    var color = (data.current.question) ? data.current.question.description : '' 
    $body.css({ backgroundColor: color});
  }
}.bind(this));
```

### Templating

Components use Templates which are described in the `main.js` file and placed in the same directory. The `quiz` component uses the following ones:

```js
templates: [
    'intro',
    'question',
    'answer',
    'finished',
    'result'
]
```

Meaning, it will use the following files:

```shell
app/aura_components/games/quiz/intro.hbs
app/aura_components/games/quiz/question.hbs
app/aura_components/games/quiz/answer.hbs
app/aura_components/games/quiz/finished.hbs
app/aura_components/games/quiz/result.hbs
```

By default, the template it renders is the first one in the list: `intro.hbs`. The others can be used from the component with subsequent calls to `this.render('result', {optional_object_with_data})` or as a partial inside another template: `{{> games/quiz/result}}`

### Accessing Data in templates

Templates have access to the values of an object that's built before they're rendered.

In the Quiz for example, it contains several entries, among which:

```js
{
    me      :"Current user",
    app     :"Current App",
    org     :"Current Organization",
    options :"Options passed as data attributes to the component wrapper",
    quiz    :"Datasource defined earlier",
    badge   :"Datasource defined earlier",
    isAdmin :"Boolean flag telling the Admin status of the current user",
    loggedIn:"Object containing the current user's identities or 'false'"
}
```

This data is available to the template so you can build your markup accordingly.

### Building a Dashboard

The way you access admin and report data in Hull is the same you use to build Apps: Using the API, raw or with components.

To keep things clean, we added another **component source** to the `Hull.init()` call in `admin/index.html`

```js
Hull.init({
  appId: "512633779e3903afd4000020",
  orgUrl: 'http://hull-demos.hullapp.io',
  debug: true,
  sources: {
    admin: "/aura_components/admin"
  }
}, function(hull){});
```

This way, we can just write

```html
<div data-hull-component="main@admin"></div>
```

and Hull will fetch the component from `/aura_components/admin/main`

In the `aura_components/admin` folder you'll find the components we use to  access admin data. These will only work if you're logged in as an Administrator on [Hull's Dashboard](http://accounts.hullapp.io) or have been promoted to Admin by another administrator, in which case you can login with your twitter account.

Here are how they look like:

![Users](/imgs/users.png "Users")
![Quizzes](/imgs/quizzes.png "Quizzes")
![Stats](/imgs/stats.png "Stats")

## Running the app

The app runs without dependencies, but you can use a few Node libraries to serve it. We configured a set of [Grunt](http://gruntjs.com) tasks with [Livereload](http://livereload.com)

### To run the app locally, run:

    grunt

That is, after you've installed grunt with

    npm install

## Deployment

If you forked the app from Github, you can publish it to Github Pages easily:

    grunt gh-pages
