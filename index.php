<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HullColors</title>

    <!-- Sets initial viewport load and disables zooming  -->
    <meta name="viewport" content="initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">

    <!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/apple-touch-icon-57x57.png">
    <link rel="icon" type="image/png" href="images/favicon.png">

    <link rel="stylesheet" href="./styles/main.css">

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="https://d3f5pyioow99x0.cloudfront.net/0.7.12/hull.js"></script>

    <!-- build:js application.js -->
    <script src="./scripts/templates.js"></script>
    <!-- endbuild -->

    <script type="text/javascript">
        Hull.init({
          appId: "512633779e3903afd4000020",
          orgUrl: 'http://hull-demos.hullapp.io'
        });
    </script>

  </head>
  <body>
    <!-- Github ribbon -->
    <a href="https://github.com/hull/hullcolors" class="github-ribbon">Fork me on GitHub</a>

    <div class="quiz-wrapper">
        <!-- Background Component -->
        <div data-hull-component="background"></div>
        <!-- Quiz Component -->
        <div data-hull-component="games/quiz" data-hull-id="5130a76ed4384e508f000009"></div>
    </div>

    <!-- Link to Hull -->
    <footer>
      <span>powered by </span><a href="http://hull.io" class="logo">hull</a>
    </footer>

  </body>
</html>