# blank-layout

![Static Badge](https://badgen.net/static/stable/1.4.2)


This is small template to quick start in layout creating.

## What technologies using?
- HTML5
- CSS3 + SASS
- [Bootstrap v5.3.2](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [jQuery v3.7.1](https://jquery.com/)

## What Plugins included?
- [Swipper v11.0.4](https://swiperjs.com/get-started)
- [fancyapps/ui v5.0.28](https://fancyapps.com/docs/ui/installation/) (ex. fancybox)
- [FontAwesome icons v6.4.2](http://fontawesome.com)
- [axios v1.6.7](https://github.com/axios/axios) (**Warning!** This script need to create simple `POST`/`GET` queries **only** if you are **not using jQuery**. On example page this script commented!)

## How to use Swipper plugin?*
It's very simple:
```html
<!-- In addition to Swiper's CSS styles, we may need to add some custom styles to set Swiper size -->
<style>
    .swiper {
        width: 600px;
        height: 300px;
    }
</style>

<!-- Slider main container -->
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

<script>
$(document).ready(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
</script>
```

## How to use fancybox plugin?*
It's much easier than using swipper slider :)
```html
<a data-fancybox="gallery" href="big_image.jpg"><img src="small_image.jpg" alt="imagee"></a>
<script>Fancybox.bind("[data-fancybox]");</script>
```

### If there's a modal window and how to use them?

This will help us a fancybox plugin:

You have to place a `DIV` container into the content of the page:
```html
<a data-fancybox data-src="#hidden-content" href="javascript:;">
  Show modal window
</a>
```

Then simply create a link using `data-src` attribute that matches CSS id selector of the element you want to open (`#hidden-content` in this example):
```html
<div style="display: none;" id="hidden-content">
  <h2>Hello</h2>
  <p>World!</p>
</div>
```

And don't forget to initialize it!
```html
<script>
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
</script>
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

## In 1.4.2 version:

**updates:**
- preloader remover in `example.html` has been updated for smoother hiding

***

*\* For more documentation please visit official site.*
