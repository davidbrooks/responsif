# Responsif.js : A Solid Base For Pairing JavaScript and Responsive Web Design

## How Does it work?

All you have to do is include the script (and a CSS file). Seriously!

When the script fires, or the page resizes, the classes on the body tag switch to either .responsive_desktop, .responsive_mobile, or .responsive_tablet.

## What if I Want to Get Crazy?

No problem! Want to load something only for desktop users? Try this:

```
$(’document’).ready(function () {
    var state_test = responsive.run_test();
    if (state_test === ‘desktop’) {
    // Load that desktop stuff! 
    }
});
```

Or, let’s say you want to move the navigation around? Try this:

```
$(’document’).ready(function(){
    window.onresize = function () {
        if ($(’body’).is(’.responsive_desktop, .responsive_tablet’)) {
            // Move your navigation for desktop and tablet users
        } else {
            // Move your navigation for mobile users
        }
    };
});
```
