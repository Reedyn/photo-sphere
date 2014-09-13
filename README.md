Photosphere element for Web Components.
============

Web Component that turns an equirectangular 360°x180° image into a viewable photosphere

## Usage
```html
<head>
    <link href="photo-sphere.html" type="text/html">
</head>
<body>
    <photo-sphere src="photosphere.jpg"></photo-sphere>
</body>
```

## Todo

* [x] Get photosphere viewer using Three.js to work #1
* [ ] Stop script from preventing clicks anywhere else on page. Also rightclick should be enabled as usual. #2
* [ ] Make the script work on all `<photo-sphere>`-elements as opposed to the `photo-sphere` id. #3
* [ ] Wrap it up in a web component based on the VanillaJS template. #4
* [ ] Make it work for any number of photospheres on a page. #5