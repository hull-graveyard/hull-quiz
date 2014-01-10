#!/bin/bash
cd app;
git init;
git add -A;
git remote add origin "git@github.com:hull/hull-quiz.git"
git commit -m "Generated at $(date)"
git push -f origin master:gh-pages
rm -fr .git
