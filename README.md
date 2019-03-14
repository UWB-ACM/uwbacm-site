# uwbacm-site [![Build Status](https://travis-ci.com/UWB-ACM/uwbacm-site.svg?branch=master)](https://travis-ci.com/UWB-ACM/uwbacm-site)
Homepage website for the University of Washington Bothell chapter of the Assocation for Computing Machinery.

## How to build SASS

We are using SASS instead of normal CSS for this website.
If you are testing locally, the VSCode plugin [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) can compile everything
in real time for you.

## Travis CI

I've set up Travis CI to build and deploy the website to the `gh-pages` branch when changes are
pushed to the `master` branch.
The logs for this can be found by clicking the build status badge.
The script for this can be found in `.travis.yml`.