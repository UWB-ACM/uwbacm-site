#!/bin/bash
# Build script for Travis CI
# based on https://savaslabs.com/2016/10/25/deploy-jekyll-with-travis.html

# !!! THIS MAY BE DESTRUCTIVE IF RUN IN YOUR DEV ENVIRONMENT !!!

echo "Running Travis CI build script."

# prevent people from making stupid mistakes
if [ $TRAVIS == "true" ]
then
    set -e
    npm install
    gulp
else
    echo "This script should not be run outside of Travis CI!"
fi