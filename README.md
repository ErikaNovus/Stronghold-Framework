#Stronghold Website Creation Framework
Maintained by Bill Chandler

##What is Stronghold?
Stronghold is an alternative framework for building websites. It gives the user/creator some default elements that can be used across any web project all of which can be customised in any way. Written using Jade and Stylus. Stronghold has a slightly different approach with the names of it's classes following along with the stronghold/castle theme.

##Why?
During my long (continual) struggle learning HTML to a good degree I got annoyed with fact that none of the Frameworks had everything I needed. I decided to create my own framework, using skeleton as a base plate to get my bearings, that uses a syntax I can understand and follow.
Unlike most other Frameworks I have written Stronghold in Jade and Stylus as these are the pre-processors I use on a daily basis. 

##What does Stronghold give me?
Currently:
- 12 column(rise) based grid system using containers(pod)
<<<<<<< HEAD
- Pleasing default colour scheme (editable in config)
=======
- Pleasing default colour scheme
>>>>>>> origin/master
- Ability to hide and show elements based on viewport size
- Utility classes to auto-float, make an element fill a container and round the corners of any element.
- Align text using 'tLeft', 'tRight', 'tCenter' and 'tJustify' classes.
- Some styling for basic HMTL5 elements
- Font-awesome icon font
- SoftElegance and monofur fonts which are 100% free for use and can be exchanged for any font
- Easily editable .styl config file with all variables (those using css will have to change the variables manually in the stylesheet)
- Normal and Minified CSS files

*See checklist for what's to come*

##What has gone into this project?
Normalize.css was included but due to the fact that I am using Stylus for this project I decided to include [Normalize.styl](https://github.com/bymathias/normalize.styl) created by bymathias. This is imported in the layout.styl file.
I decided to use Font Awesome in this project as it's my favourite of all the icon font's i've used before. This has been translated into stylus by raulghm in the project [Font-Awesome-Stylus](https://github.com/raulghm/Font-Awesome-Stylus)

###Checklist
+ ~~Grid~~
> ~~Make Grid Responsive~~
+ ~~Visible and Hidden elements~~
+ ~~Basic Colour scheme~~
+ Navigation
> Dropdowns
> Pagination
+ ~~Buttons~~
> Needs more button varieties!
+ ~~Carousels (Implement Slick)~~
+ ~~Utility Classes~~
+ Port to Sass
+ Port to LESS
+ More coming soon...

##What do I get in the download?
When cloning, or downloading, this project you will be given two folders: **src** and **dist**. The src folder contains all of the Stylus source files as well as the Gruntfile.js and package.json which can be used to get my development environment. 
For those that do not want to work with Stylus the dist folder contains the compiled html and css files which can be edited just as easily. Although, at this time, the css is quite messy and the Stylus code is much easier to read.

If you would like to work with the Jade and Stylus files but do not know how then try the links below:
+ [jade](http://webdesign.tutsplus.com/courses/top-speed-html-development-with-jade?utm_source=Tuts+&utm_medium=referral&utm_campaign=teaserpost-short&utm_content=CRS-20012&WT.mc_id=Tuts+_referral_teaserpost-short_CRS-20012)
+ [stylus](http://webdesign.tutsplus.com/courses/become-a-css-superhero-with-stylus)
+ [Grunt](http://webdesign.tutsplus.com/series/the-command-line-for-web-design--cms-777)


##Dependancies
|Dependancy|Description|
|----------|----|
|[Normalize.styl](https://github.com/bymathias/normalize.styl)|Add Normalize.css to Stylus sheets|
|[Font-Awesome-stylus](https://github.com/raulghm/Font-Awesome-Stylus)|Add font awesome using stylus|

