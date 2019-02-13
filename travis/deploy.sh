#!/bin/bash
# Build script for Travis CI
# based on https://savaslabs.com/2016/10/25/deploy-jekyll-with-travis.html


# !!! THIS MAY BE DESTRUCTIVE IF RUN IN YOUR DEV ENVIRONMENT !!!

echo "Running Travis CI deploy script."

# prevent people from making stupid mistakes
if [ $TRAVIS == "true" ]
then
    set -e    
    # checkout gh-pages branch and remove all existing files
    # into the directory ../gh_pages
    git clone --branch gh-pages https://${GH_TOKEN}@github.com/Chris-Johnston/uwbacm-site.git ../gh_pages
    cd ../gh_pages
    rm -rf *

    # copy the built files from the original branch into the output
    cp -R ../uwbacm-site/* .
    cp ../uwbacm-site/.travis.yml .

    echo "Copied files."

    git config user.email ${GH_EMAIL}
    git config user.name "Travis CI / UWB-ACM"

    # commit this to the gh-pages branch
    git status
    git add -A .
    git commit -a -m "Travis #$TRAVIS_BUILD_NUMBER"
    git push origin gh-pages
    echo "Done."
else
    echo "This script should not be run outside of Travis CI!"
fi