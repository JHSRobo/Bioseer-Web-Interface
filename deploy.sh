#!/usr/bin/env bash

GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO:-$(node -p -e "require('./package.json').repository.url")}

sudo rm -R .git
git init

git config --global user.name "Travis CI"
git config --global user.email "github@travis-ci.org"

git add .
git commit -a -m "Deploy to GitHub Pages"

git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
