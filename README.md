# blank-layout

This is my personal small template to quick start in layout creating.

## What technologies using?
- HTML5
- CSS3 + SASS
- [Bootstrap v5.1](https://getbootstrap.com/docs/5.1)
- [jQuery v3.6.0](https://jquery.com/)

## What Plugins included?
- [Slick slider v1.8.1](http://kenwheeler.github.io/slick/)
- [fancyapps ui v4.0.8](https://fancyapps.com/docs/ui/installation/) (ex. fancybox)
- [FontAwesome icons v5.15.4](http://fontawesome.com)
- [axios v0.24.0](https://github.com/axios/axios) (**Warning!** This script need to create simple `POST`/`GET` queries **only** if you are **not using jQuery**. On example page this script commented!)

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
    setting_name: 'setting-value'
  });
});
</script>
```

## How to use fancybox plugin?*
It's much easier than using slick slider :)
```html
<a data-fancybox="gallery" href="big_image.jpg"><img src="small_image.jpg"></a>
```

### If there's a modal window and how to use them?

This will help us a fancybox plugin:

You have to place a `DIV` container into the content of the page:
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

## In 1.3.0 version:

**new:**
- Added simple preloader
- Now you can choose what bootstrap css-parts you need in `/vendor/scss/_bootstrap.scss`

**updates:**
- axios updated to 0.24.0
- bootstrap updated to 5.1.3.
- fancybox updated to 4.0.8
- FontAwesome icons updated to v5.15.4
- jQuery updated to 3.6.0

***

*\* For more documentation please visit official site.*
