# React Render Page from API

This is a demo to render page using JSON data from API

Visit [arisac.github.io/demo-rpfapi/](https://arisac.github.io/demo-rpfapi/) to see live demo

## See the Code

Code at [src/components/Posts.js](src/components/Posts.js)

Feel free to do whatever you want with this demo.

You can try to make the API address dynamic and start to make your own App.

## About Auto Deploy in this repo

[.github/workflows/publish.yaml](.github/workflows/publish.yaml)

This Action will deploy each commit to [arisac.github.io/demo-rpfapi/](https://arisac.github.io/demo-rpfapi/)

This Github Action script is using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) to to the job.

For repos forked from here you have to turn on yourself in your repo's `Actions Tab`.

Don't forget to change `homepage` url in [package.json](package.json) file.