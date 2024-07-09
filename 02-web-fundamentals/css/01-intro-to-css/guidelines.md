# Some general guidelines to be thinking about for CSS:
1) Let the size of containers be determined by their content. (avoid setting height and width on containers)
2) Let the positions of content be determined by their containers. (use paddings and flex properties rather than a lot of margins when possible)
3) Use padding to push children inside, use margin to push siblings away.
4) Avoid empty divs, or divs with only a single thing inside them as much as possible. If there's only one element in your div, reconsider the div.
5) Avoid using position and float as much as possible (only use when an element doesn't fall in line with the normal flow of the site)
6) Text elements (h1-h6 p, a, etc.) should only contain text, and not other elements.
7) Use classes for styles that appear in multiple places (avoid having a bunch of classes that are only used once)
8) If you have the same css properties in multiple classes or ids, you should pull them out into their own class instead
9) Start positioning from the biggest containers first, and work your way inwards.
10) Avoid making extra classes for elements.
11) Don't choose elements based on their default css properties, but for their semantic purpose. ( don't use an h2 just because the text is bold, use h1-6 tags if they are actually describing a section of content )