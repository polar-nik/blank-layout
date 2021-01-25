# blank-layout

This is my personal small template to quick start in layout creating.

### Important!

*We switched to a new Fontawesome 5 (svg-with-js).*

__Old classes may not work!__

## What technologies using?
- HTML5
- CSS3 + SASS
- [Bootstrap 4.5.3](https://getbootstrap.com/docs/4.5/)
- [jQuery](https://jquery.com/) 3.2.1

## What Plugins included?
- [Slick slider v1.8.1](http://kenwheeler.github.io/slick/)
- [fancybox v3.5.7](http://fancyapps.com/fancybox/3/)
- [FontAwesome icons v5.0.6](http://fontawesome.com)
- [axios v0.18.0](https://www.npmjs.com/package/axios) (**Warning!** This script need to create simple `POST`/`GET` queries **only** if you are **not using jQuery**. On index page this script commented!)

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

## In 1.2.0 version:

**updates:**
- refused to use html5shiv (The 21st century is in the yard!);- fontawesome updated from 5.0.6 to 5.15.2;
- fancybox updated from 3.5.6 to 3.5.7;
- bootstrap updated from 4.3.1 to v4.5.3;
- remove all vendor css files. We put them in scss import!
- fontawesome now used by CSS.

***

*\* For more documentation please visit official site.*
