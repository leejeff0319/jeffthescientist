Jeff-The-Scientist.com (.ai)

9/27
Started brainstorming my website ideas on a note on my phone
Sketched the main idea of the idea on a piece of paper
Started researching web development

9/29
Started Meta's Front-end developer course on coursera
Learned that HTML provides structure, CSS provides style, and Javascript provides interaction
I want to create a web application with a lot of interactive features, so I will need to use a lot of Javascript for clouds, sun/moon, slide feature, fade feature, etc.

9/30
Started learning the basics of HTML
Started learning the basics of CSS
Researched some websites from freecss.com
Found an example of the menu bar I wanted to make in the “John Doe” Template

10/2
Learned about Bootstrap and Tailwind for CSS
Bootstrap is used for more traditional, structured format while Tailwind is used for web applications with more unique and personalized features
I have decided to go with Tailwind CSS for my personal project for the reasons described above
I learned about Next.js from Youtube videos
I will use it because it uses server-side rendering, which in turn enhances the initial page loading screen. This improves SEO and user experience
10/3
Delve deeper into web application development using Next.js
In app folder, there is layout.tsx
This is global, so anything that should be on every page goes here
Such as the navbar and footer
Page.tsx
Is the homepage layout of the website
Globals.css
Contains global css style of the entire application
Every single route inherits it
Decided that I will be making a Single page application for smoother animations and faster loading time

10/4
Started my project by following the examples of a YouTube video. 
https://www.youtube.com/watch?v=pUNSHPyVryU 
I was watching another video, but they weren’t using Tailwind and TypeScript like I was, so I changed to a video that is.
Found out that he doesn’t go over how to create the css files
Referred to another video instead, on creating a nav bar using tailwind
https://www.youtube.com/watch?v=pfaSUYaSgRo
Decided that I was not understanding, and it may be too early to start. I will continue with my Front-end dev course by Meta on Coursera
less
10/5
Started learning the Javascript portion of the lesson
Functional programming vs. Object Oriented Programming
Program Paradigms
Using javascript in browser
DOM Manipulation
Event handling
Maybe I can use this to program the hover and slide/fade functions in my web app
Finished Javascript lessons
Learned how to test code using Jesting
Expect(...) to be(...)
Animations
https://www.youtube.com/watch?v=95YLHDzsg8A 
Started making website
Add pictures/screenshots
Will reorganize the Resume section
Will redesign the whole website layout again

10/6
Added animation to background
Added new linear gradient background from day to night
Couldn’t figure out how to use one button to combine all the functions.
Maybe I'll code the sky as one component instead of as two!

10/7
Linked animations to a single button through child and parent components
Ended up being pretty okay, I don’t why I couldn’t figure it out yesterday for 3 hours. 
It only took me 20 minutes in the morning to figure it out
Added:
Sun & animation
Moon  & animation
Extended the linear gradient pattern to the navbar
Badge Animation
Role animation
Debugged some of the animation bugs
Started using Git as a way to back up my projects in case they go bad

10/8
Added grass, stars, and clouds & animations for each
Learned to work with ReactIcons SVG
Added social media links with it
Fixed/redid resume section and background color change

10/9
Resume added

10/10
Finished filling out resume sections
Added animation to Skills section
Researched about adding cartoon animations on website
Metademolabs.com?
Use svg for animate?
Undraw: https://undraw.co/search
Search “Researcher”
Use “hire” maybe?
LottieFiles !
https://www.youtube.com/watch?v=L08gUpqwLSE 
Animation
Me as a research scientist
Gray hoodie, blue jeans, white lab coat
Holding flasks
Hover cursor → wave hi
Click cursor → drop flasks and break
Switch to night
Take off lab coat and flasks
Put on hoodie + headphones
While sitting down on a chair coming in from the ground + desk coming in from right
Typing animation - repeat
Found out what I want to do is probably close to what is called the “flat design” art style
Link to Animation Journey page

10/11
Add JupyterNotebook & Kaggle notes to “Notes section”
Folders
Click takes you “inside” the folder
Or HeadTopics and under them is each topic
Must faster to navigate and easier to create
Should I upload notes onto Github or Kaggle?
Kaggle
More data sciencey platform
Some of my notes are already on Kaggle
Github
More generalized coding platform
More widely used
I am a data scientist who wants to get into deep learning, but using Github over Kaggle will not hurt
Most of all, I want to use this as an opportunity to get to know how to use Git & Github on a deeper level
Learned more about version control and Github
Revised/reviewed & added most of the github repository
https://github.com/leejeff0319/Notes/tree/main 
Cloned this repo to my PC
Moved my files using the “mv” command
Added, committed, and pushed to Github
“Git add .”
“Git commit -m “” “
“Git push -u origin main”

10/12
Add Sass and PostCSS
Module Bundler: Webpack?

10/13
Added footer
with feedback box submission
Still need to add the backend component of it
Added Hours
Research
Research hours
Pubs: 0
Posters: 0
Clinical hours
Coffees drank (pull data and estimate)
Nights spent
Data Science
Hours
Projects completed
Coffees drank (pull data and estimate)
Nights spent up
Estimated hours for everything except Clinical, which I have recorded data for


10/16
Added fade animations to rest of the page (resumes, hours, background)
Started designing the Certifications page with hero image
Debugged animations by adding a 1s delay in between button presses
Added “Download CV” Button
https://codepen.io/uzcho_/pen/jjRKaM 

10/18
Decided on a few fixes for the website’s responsiveness and uniformity
Will ditch links and just make it a single page application
No hero images for each section
Load different components when clicking on navbar
Added container for badge and download CV button to scale accordingly to screen sizes
Added Certifications page & certifications
Scroll animation (card flip)
Pop up like this when hovering
https://www.youtube.com/watch?v=DCRcFf39SYo 
https://codepen.io/kevinpowell/pen/jOXwVVB 
10/19
Fixed a lot of the scaling issues with different window sizes
Fixed the navbar overlapping on top of the Night component by getting rid of the “absolute” style in a div of Night component
Fixed moon and sun animations to work properly despite window size by setting their positions using “vw” in css and js

10/21
Debugged a lot of the scaling and animation issues from different window sizes/devices
Scaled the Role component to work on phone (screenshots on phone)
Cloned & copied all files to GitHub Repository

10/22
Added: 
Notes page
Portfolio page
About Me page
Added contents to Notes and About Me pages
Scaled Skills section based on window size

10/23
Added Website Documentation outline
Added Animation Journey outline
Redid Projects Page
https://www.youtube.com/watch?v=htGfnF1zN4g 

10/24
Added horizontal scroll to Projects Page
https://www.youtube.com/watch?v=3yfswsnD2sw 
Customized scroll bar to match those of Macbook Chromebook. I thinks this looks the cleanest
Added Projects page color scheme
Added HomePage scroll animation for WebDoc and AniDoc
https://developer.chrome.com/articles/scroll-driven-animations/ 

10/25
Added Lazy Loading
Caused loading problems of certain components
Improvement in initial loading time was not significant
REMOVED Lazy Loading
Optimized redundant code on handleButtonClick() function
Added metadata to layout.tsx

10/26
Replaced apostrophes
Replaced single quotes with double quotes
Lazy loaded my framer-motion animations
For some reason, the LCP time increased from 0.3 seconds to ~20 seconds per load
Lighthouse score decreased to 38 from 67.
Reverted changes back

10/27
Tried changes one by one, running LightHouse Score on every implementation
Replaced apostrophes
Lazy loaded my framer-motion animations
Found out that moving useAnimation() from Home to Sun and Moon components requires useEffect
Significantly lowers LH score
Has to do with not using useEffect for ‘window’ command
Moving PageLoader to its own component lowers performance to 48 from 70
Completed refactoring all elements that don’t lower my performance score

10/30
Debugged photos and text boxes of project cards

11/2
Added MNIST project to my website

11/05 - 11/27
Trip to Korea to spend time with father & family

2/1
Deployed on Vercel



