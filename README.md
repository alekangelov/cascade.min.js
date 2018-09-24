# Cascade.min.JS
The easiest way to cascade css animations

## How to implement
Add the minified JS file so it works across all browsers. Make your css animation and declare the class and function inside of it and VOILA you're fucking done. It's as easy as one, two, three!

### Step 1:
`<script src="cascade.min.js"></script>`

### Step 2:
` <style>
        .div {
            --margin: 100px;
            --finalMargin: 40px;
            animation: fadeIn 0.5s ease-out forwards;
            margin-top: var(--margin);
        }

        @keyframes fadeIn {
            0% {
                margin-top: var(--margin);
                opacity: 0;
            }
            100% {
                margin: var(--finalMargin)
                opacity: 1;
            }
        }
</style>`

### Step 3:
`<script>
    let cascaded = document.querySelectorAll('.div');
    let obj = new Cascade(cascaded,0.1).cascade();
</script>`

check it out at [cascade.alekangelov.com](http://cascade.alekangelov.com)