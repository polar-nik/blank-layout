# blank-layout
This is my small template to quick start in layout creating.


## What technologies using?
HTML, CSS3 + SASS (scss), Bootstrap4 (only grid!) jQuery, FontAwesome icons

## What Plugins included?
- [Slick slider v1.6.0](http://kenwheeler.github.io/slick/)
- [fancybox 3.0](http://fancyapps.com/fancybox/3/)

## Have you added anything else?
Yes, i do:
- Simple modal-windows functionality

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

## How to use modal windows?

Call link:

```html
<a href="#" data-modal-target="some_modal_identifier">Open modal window</a>
```

Next you need to add code like these somewhere in foot of site, but before the scripts loading place:

This layer must places **ONCE** in a page!
```html
<div id="modal-background"></div>
```
**Then add your modals as much as you need:**

```html
<div class="modal" data-modal-object="some_modal_identifier">
    <div class="modal-close"><i class="fa fa-fw fa-close"></i></div>
    <div class="modal-content">
        This is my modal window!
    </div>
</div>
```

# In this version:
### updates:
- Updated jquery-3.1.2 to jquery 3.2.0
- Added simple modal-windows functionality

### bugfixes:
- cleaned from some trash

# TODO:
- ajax-php sendmail form+script
- smth else..