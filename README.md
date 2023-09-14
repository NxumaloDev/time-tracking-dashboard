# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Screenshot](<images/Screenshot 2023-09-13 223621.png>)

![Screenshot](<images/Screenshot 2023-09-13 223654.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Discovered a cool trick when selecting divs containing certain text, or in this case, ending with certain text. In this example, the selector selects all divs ending with the text 'ctn'.

```css
main section div[class*='ctn'] {
  ...
}
```

## Author

- Frontend Mentor - [@NxumaloDev](https://www.frontendmentor.io/profile/NxumaloDev)
- Instagram - [@sarcasm_emoji](https://www.instagram.com/sarcasm_emoji)

## Acknowledgments

- FrontEnd Mentor
- Stack Overflow
