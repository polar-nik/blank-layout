# blank-layout
This is my personal small template to quick start in layout creating.

### What technologies using?
- HTML5 ([html5shiv](https://github.com/afarkas/html5shiv) included)
- CSS3 + SASS (scss)
- Bootstrap 4
- jQuery
- [axios](https://www.npmjs.com/package/axios) (**Warning!** This script need to create simple `POST`/`GET` queries **only** if you are **not using jQuery**. On index page this script commented!)

### What Plugins included?
- [Slick slider v1.8.0](http://kenwheeler.github.io/slick/)
- [fancybox 3.1.25](http://fancyapps.com/fancybox/3/)
- [FontAwesome icons v 4.7.0](http://fontawesome.io)

### How to use slick plugin?*
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

### How to use fancybox plugin?*
It's more simple, that using slick slider :)
```html
<a data-fancybox="gallery" href="big_image.jpg"><img src="small_image.jpg"></a>
```

### If there's a modal window and how to use them?

This will help us a fancybox plugin:

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



## In 1.0.0-rc version:

**updates**:
- jquery updated to 3.2.1;
- fancybox updated from 3.1.20 to 3.1.25;
- slick updated from 1.6.0 to 1.8.0;
- we started use fully bootstrap 4.0.0-beta;
- added popper 1.12.6 (bootstrap requires)

***

*\* For more documentation please visit official site.*
