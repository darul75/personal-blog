//https://github.com/josefrichter/resize/blob/master/public/preprocess.js
// https://jsfiddle.net/Jan_Miksovsky/yy7Zs/
//https://stuk.github.io/jszip/documentation/examples.html
https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images

var init = {
	method: 'GET',
	mode: 'cors'
};

myRequest = new Request('https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', init);

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var blob = response;
  console.log(blob);

  var reader = new FileReader();

	reader.addEventListener("loadend", function() {
	   // reader.result contains the contents of blob as a typed array
	   console.log('end');
	   var buffer = reader.result;

	   // read first eight bytes
	   var data = new Uint8Array(buffer);
	   /*console.log(header);
	   console.log(buffer);
	   console.log(buffer.length);*/

	   var image = document.createElement('img');
	   image.style.position = "absolute";
	   image.style.right = "10px";
	   image.style.top = "10px";

	   var base64Data = btoa(String.fromCharCode.apply(null, data));
       image.src = 'data:image/png;base64,' + base64Data;
       document.getElementsByTagName('body')[0].appendChild(image);
	});

  //reader.readAsText(blob);
  //console.log(text);
  reader.readAsArrayBuffer(blob);
});

// CORS ISSUE
