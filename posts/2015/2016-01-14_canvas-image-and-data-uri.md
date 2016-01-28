Playing with canvas and images these days, I suggest to look further on what happens with [toDataUrl()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) Canvas javascript API method and why it may be useful to you too.

First, I let you read carefully :) what is a data URI (Uniform Resource Identifier).

**It allow content creators to embed small files inline in documents**. 

My interpretation is you can "serialize" external data and make it available as an inline browser resource.

## Data URI format specification

```bash
data:[<mediatype>][;base64],<data>
```

*M: mandatory*
*O: optional*

**<mediatype>** (M) MIME type string 'image/png', 'application/zip'... [details](https://fr.wikipedia.org/wiki/Type_MIME)

**<data>** (M) some urlchar or sequence of characters [details](http://tools.ietf.org/html/rfc2396)

**;base64** (O) encoded string

Extract from specification:

```bash
The <mediatype> is an Internet media type specification (with
optional parameters.) The appearance of ";base64" means that the data
is encoded as base64. Without ";base64", the data (as a sequence of
octets) is represented using ASCII encoding for octets inside the
range of safe URL characters and using the standard %xx hex encoding
of URLs for octets outside that range.  If <mediatype> is omitted, it
defaults to text/plain;charset=US-ASCII.  As a shorthand,
"text/plain" can be omitted but the charset parameter supplied.
```

[details](http://tools.ietf.org/html/rfc2397)

## Data URI image sample

Most of the time, we may use data URI for a representation of images content.

You can inspect the DOM and look on this image 'src' attribute 

![here](data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH hhx4dbgYKAAA7).

[or look at this link](data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH hhx4dbgYKAAA7)

Here is how this data URI looks like:

```bash
data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw AAAC8IyPqcvt3wCcD
kiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz ByTB10QgxOR0TqBQejhRNzOfkVJ+5
YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGd
kF8kjdfnycQZXZeYGejmJl ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOz
rcd3iq9uis F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH h
hx4dbgYKAAA7
```

Note that the <img> tag can use it as content for its 'src' attribute.

```javascript
<img src="data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP.." />
```

## Canvas API

I am sure you have already played with Canvas [API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) with your favourite [browser](https://www.google.fr/chrome/browser/desktop/)

Displaying an image on canvas is trivial and we will dive into a small example with an data URI for fun.

## Data URI to canvas

Steps consist simply in creating a Canvas context and displaying an Image object on it.

Image source attribute is not an URL but data URI content in this case and it works !

```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = 'data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAPywAAA...';

img.onload = function() {
  ctx.drawImage(img, 0, 0);
}
```

Full example [here](https://jsfiddle.net/darul75/w6hdtp24/)

## Canvas to data URI

We will use an existing image (jpeg, png...) and a canvas to compute a data URI, this canvas will not be displayed but used like a kind of clever buffer.

Note some limitations depending on image mime types [well](http://kangax.github.io/jstests/toDataUrl_mime_type_test/).

Canvas API has a very useful [**toDataURL(type, encoderOptions)**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) method that being call on canvas context will return a nice dataURI. The default type is image/png.

Let's create an Image first

```javascript
var img = new Image();
img.crossOrigin = 'anonymous';
img.src = 'https://fiddle.jshell.net/favicon.png';
```

Then when image is loaded do the stuff

```javascript
img.onload = function() {
  // use a canvas to get data URI for image
  var workerCanvas = document.createElement('canvas'),
  workerCtx = workerCanvas.getContext('2d');

  // init
  workerCanvas.width = this.width;
  workerCanvas.height = this.height;

  // fill canvas with image  
  workerCtx.drawImage(this, 0, 0);
  
  // get data URI for this image
  // call magical function
  var imgDataURI = workerCanvas.toDataURL();
  console.log(imgDataURI);

  // job done
```

You can now use this data URI and assign it to img tag or display it on another canvas, store it...

```javascript  
  var targetImg = document.getElementById("targetImg");
  var targetCanvas = document.getElementById("targetCanvas");
  var targetCanvasCtx = targetCanvas.getContext('2d');

  // assign it to target image tag  
  targetImg.src = imgDataURI;
  
  // assign it to target canvas tag  
  targetCanvasCtx.width = this.width;
  targetCanvasCtx.height = this.height;
  
  var tmpImg = new Image();
  tmpImg.src = imgDataURI;
  
  targetCanvasCtx.drawImage(tmpImg, 0, 0);
  
};
```

See it in action and play, inspect html DOM [here](https://jsfiddle.net/darul75/cdb7cjtr/)

## Warning cors is never far

Some of you may have that kind of nice error when using toDataURL() canvas method:

```bash
Uncaught SecurityError: Failed to execute 'toDataURL' on 
'HTMLCanvasElement': Tainted canvases may not be exported.
```

Triggered when you try to make a Cross-Origin Resource Sharing [CORS](http://www.html5rocks.com/en/tutorials/cors/)

Previous examples were fine if you are on same domain, otherwise read next to see an alternative.

Instead of calling it from an existing Image object on your DOM, we will use an XMLHttpRequest to get Image content as [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob).

Compatibility [check](http://caniuse.com/#search=XMLHttpRequest)

It works **fine with Chrome extension** but in other cases...not easy.

```javascript
function FetchImageAsBlob(url, cb) {  
  var req = createCORSRequest('GET', url);
  req.onload = function() {
    var img = new Image();
    img.onload = function() {
      URL.revokeObjectURL(this.src);
      cb(null, img);
    };
    img.src = URL.createObjectURL(req.response);
  };
  req.onerror = function(e) {
    cb(e);
  };  
  req.responseType = 'blob';
  req.send();
}
```

Code [here](https://jsfiddle.net/darul75/3m6sdeo9/), you can look at console and see error.

Small [gist](https://gist.github.com/darul75/385332713a3c1ce9bf1d)

## Conclusion

Data URI is a nice standard but with limitations for image like : size, types, browser compatibility...

You may also try using it for other kind a resource that image (xml, video, audio, zip...)

![Just for fun](/images/posts/canvas.jpg)

----------

Tags: *Javascript* *Canvas*
