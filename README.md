# eQuATIC
css styling eQuATIC report templates for UGent

Demo https://stanseel.github.io/eQuatic/

Most of the lay-out is done by using display:table / table-row / table-cell. This makes vertical centering more easy and flexible.  

* When there is only one box next to the gauge, please add class .singleitem to the element with class .tbl-row
* When there is no reference group row at the bottom, add rounded corners to gauge element and bottom adjacent element (add classes .rounded-bottomleft and .rounded-bottomright to the bottom elements with .tbl-cell properties)