# tableColumnFreeze.js

Freezes columns in a table.

## Usage
1. Ensure your markup is as follows (class names are incidental):
```
<div id="freeze-me">
  <table>
    ...
  </table>
</div>
```

2. Include **tableColumnFreeze.js** in your project.
3. Initialise the tables which you want to have frozen columns on:
```
var freezer = new TableColumnFreeze(document.getElementById('freeze-me'));
```

Check out **[the example](https://charliehawker.github.io/tableColumnFreeze.js/example.html)** ([source](https://github.com/CharlieHawker/tableColumnFreeze.js/blob/master/example.html)) for a fuller example.

## Notes / Gotchas
* The column freezing is done based on columns which use the `th` element instead of a `td` (inside the `tbody`).
* It fixes the column width / cell height based on initial values (so if your data changes you may need to re-initialise it).
* Set a `background-color` on your rows to ensure the other columns aren't visible as they scroll behind the frozen ones.
* Box-sizing might cause you issues depending on your CSS.
* Borders can look a bit shonky too as `border-collapse` isn't a thing once they aren't block level elements anymore.

## Credits
Initial concept based on this [excellent StackOverflow answer](http://stackoverflow.com/questions/1312236/how-do-i-create-an-html-table-with-fixed-frozen-left-column-and-scrollable-body) by [@EamonNerbonne](https://github.com/EamonNerbonne).
