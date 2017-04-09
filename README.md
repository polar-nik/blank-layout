# blank-layout
This is small template to quick start in layout creating.


## What technologies using?
HTML, CSS3 + SASS (scss), jQuery

## What Plugins included?
- [Slick slider v1.6.0](http://kenwheeler.github.io/slick/)
- [fancybox 3.0](http://fancyapps.com/fancybox/3/)


## How to use slick plugin?
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

For more documentation please visit official site.

## How to use fancybox plugin?
It's more simple, that using slick slider :)
```html
<a data-fancybox="gallery" href="big_image.jpg"><img src="small_image.jpg"></a>
```

For more documentation please visit official site.


# In this version:

### updates:
- Refused from using Griddle, now only Bootstrap4 grid;
- Added aligment utils to Bootstrap;
- Updated fancybox-2 to version fancybox-3.

### bugfixes:
- Finded loosed fancybox styles file;
- Import utils styles file.

### other things:
- reorganized fonts dir.
