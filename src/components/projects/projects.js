import React from 'react';
import SectionTitle from '../section_title/section_title';
import './projects.css';
import Thumbnail from './thumbnail/thumbnail';

const project1 = {
  name: 'Sorting Algorithm Visualizer using Randomized Images',
  description: "This is a tool used to help visualize various sorting algorithms \
    ranging from bubblesort to quicksort. It takes an image as input, randomizes \
    the pixel columns of the image, then resorts it back to the original form. \
    A video showing the internal process of the sorting algorithm is then output \
    at the end.",
  gifPath: '/assets/sorting-gif.gif',
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/sorting-randomized-images',
    }
  ]
}

const project2 = {
  name: 'Birds Hate Bombs',
  description: "This is an infinite runner game made using the Unity game engine \
    where the player controls a flying bird while collecting gems and avoiding \
    levitating bombs. This was also my submission to the 2019 \
    Game Jam hosted by the University of Oklahoma Game Developer's Association.",
  gifPath: '/assets/bhb-gif.gif',
  icons: ['fab fa-unity'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/birds-hate-bombs',
    },
    {
      name: 'Play Game',
      href: 'https://simmer.io/@Stinsan/birds-hate-bombs',
    }
  ]
}

const project3 = {
  name: 'Glasses Visualizer',
  description: "This is a program designed to simulate levels of visual \
    acuity and colorblindness implemented using Python and Pygame. Features include \
    simulating nearsightedness, farsightedness, and three types of colorblindness \
    (tritanopia, protanopia, and total colorblindness). This was my final project \
    for my Computer Graphics course taken in Spring 2020.",
  gifPath: '/assets/glasses-vis-gif.gif',
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/glasses-visualizer',
    }
  ]
}

const project4 = {
  name: 'Genetic Algorithms with Simulated Drones',
  description: "This project was an exercise on genetic algorithms for my \
    Artificial Intelligence course taken in Spring 2020. The evolutionary goal \
    was to create an agent that can collect as many points as possible in a set \
    period of time by navigating to different circles in the simulation. While \
    doing so, the drone must also avoid various static and dynamic obstacles to \
    prevent itself from taking any damage.",
  gifPath: '/assets/drone-ga-gif.gif',
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/cs4013-drone',
    }
  ]
}

const project5 = {
  name: 'This Portfolio Website',
  description: "If you are seeing this, then you are already here!",
  gifPath: '/assets/portfolio-gif.gif',
  icons: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js-square', 'fab fa-react'],
  links: [
    {
      name: 'View Source',
      href: '/assets/stats-project.html',
    }
  ]
}

const project6 = {
  name: 'An Application of Simple Linear Regression',
  description: "This project is a statistical analysis of data I collected while playing the popular \
    video game Fortnite. More specifically, I used simple linear \
    regression to analyze the damage dealt to opponents versus the number of \
    eliminations per game in order to determine whether or not there was a linear \
    relationship between those two in-game statistics. I used R to perform the \
    statistical tests and to make my conclusion. This was my final project for my \
    Applied Statistics course taken in Spring 2019.",
  gifPath: '/assets/stats-project-gif.gif',
  icons: ['fab fa-r-project'],
  links: [
    {
      name: 'View Document',
      href: '/assets/stats-project.html',
    }
  ]
}

const project7 = {
  name: 'The Quadratic Sieve Integer Factorization Algorithm',
  description: "This was my Honors Research project done in conjunction with \
    Dr. Qi Cheng from the University of Oklahoma. This is a Python command line \
    program of my implementation of the quadratic sieve integer factorization \
    algorithm conceived by Carl Pomerance in 1981. ",
  gifPath: '/assets/qs-gif.gif',
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/quadratic-sieve',
    },
    {
      name: 'View Thesis',
      href: '',
    },
    {
      name: 'View Presentation',
      href: ''
    }
  ]
}



class Projects extends React.Component {
  render() {
    return (
      <div className='projects section-wrapper' id='projects'>
        <SectionTitle sectionName='projects' />
        <div className="projects-main-section">
          <div className="thumbnails-wrapper">
            <Thumbnail className="thumbnail" {...project1} />
            <Thumbnail className="thumbnail" {...project2} />
            <Thumbnail className="thumbnail" {...project3} />
            <Thumbnail className="thumbnail" {...project4} />
            <Thumbnail className="thumbnail" {...project5} />
            <Thumbnail className="thumbnail" {...project6} />
            <Thumbnail className="thumbnail" {...project7} />
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
