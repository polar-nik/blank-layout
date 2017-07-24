# blank-layout
This is my personal small template to quick start in layout creating.

## What technologies using?
- HTML5 ([html5shiv](https://github.com/afarkas/html5shiv) included)
- CSS3 + SASS (scss)
- Bootstrap 4 (grid and some utils)
- jQuery
- [axios](https://www.npmjs.com/package/axios) (**Warning!** This script need to create simple `POST`/`GET` queries **only** if you are **not using jQuery**. On index page this script commented!)

## What Plugins included?
- [Slick slider v1.6.0](http://kenwheeler.github.io/slick/)
- [fancybox 3.0](http://fancyapps.com/fancybox/3/)
- [FontAwesome icons](http://fontawesome.io)

## Have you added anything else?
Not yet.

## How to use slick plugin?*
It's very simple:
```html
<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>

<script>
$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
</script>
```

## How to use fancybox plugin?*
It's more simple, that using slick slider :)
```html
<a data-fancybox="gallery" href="big_image.jpg"><img src="small_image.jpg"></a>
```

## How to use modal windows?

With this, we will again help fancybox plugin:

You have to place a DIV container into the content of the page:
```html
<a data-fancybox data-src="#hidden-content" href="javascript:;">
  Show modal window
</a>
```

And then simply create a link using `data-src` attribute that matches CSS id selector of the element you want to open (`#hidden-content` in this example):
```html
<div style="display: none;" id="hidden-content">
  <h2>Hello</h2>
  <p>World!</p>
</div>
```

## How to use axios?*
**axios** - Promise based HTTP client for the browser and node.js

Performing a `GET` request:
```javascript
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }
);
```
Performing a `POST` request:
```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }
);
```



# In this version:
### updates:
- added axios script;
- fancybox updated from 3.0.47 to 3.1.20.

### bugfixes:
- fixed html5shiv script;
- fixed visibility utilities scss file.

# TODO:
- ajax-php sendmail form+script
- smth else..

***

*\* For more documentation please visit official site.*
