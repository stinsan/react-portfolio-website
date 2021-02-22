import React from 'react';
import SectionTitle from '../section_title/section_title';
import './projects.css';
import Thumbnail from './thumbnail/thumbnail';

// Thumbnails
import SortingVisualizerGif from '../../assets/thumbnails/sorting-gif.gif';
import BirdsHateBombsGif from '../../assets/thumbnails/bhb-gif.gif';
import GlassesVisualizerGif from '../../assets/thumbnails/glasses-vis-gif.gif';
import GeneticAlgorithmsGif from '../../assets/thumbnails/drone-ga-gif.gif';
import SimpleLinearRegressionGif from '../../assets/thumbnails/stats-project-gif.gif';
import QuadraticSieveGif from '../../assets/thumbnails/qs-gif.gif';
import TourGuideRobotGif from '../../assets/thumbnails/tour-guide-robot-gif.gif';
import MazetrixGif from '../../assets/thumbnails/mazetrix-gif.gif';
import AntiHateSpeechGif from '../../assets/thumbnails/anti-hate-speech-gif.gif';
import SupervisedLearningGif from '../../assets/thumbnails/supervised-learning-gif.gif';

// Documents
import HonorsThesisDocument from '../../assets/documents/HonorsThesis.pdf';
import QSPresentationDocument from '../../assets/documents/QSPresentation.pdf';
import TourGuideRobotDocument from '../../assets/documents/RoboticsPoster.pdf';
import SupervisedLearningDocument from '../../assets/documents/SLReport.pdf';

const sortingVisualizer = {
  name: 'Sorting Algorithm Visualizer using Randomized Images',
  description: "This is a tool used to help visualize various sorting algorithms \
    ranging from bubblesort to quicksort. It takes an image as input, randomizes \
    the pixel columns of the image, then resorts it back to the original form. \
    A video showing the internal process of the sorting algorithm is then output \
    at the end.",
  gif: SortingVisualizerGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/sorting-randomized-images',
    }
  ]
}


const birdsHateBombs = {
  name: 'Birds Hate Bombs',
  description: "This is an infinite runner game made using the Unity game engine \
    where the player controls a flying bird while collecting gems and avoiding \
    levitating bombs. This was also my submission to the 2019 \
    Game Jam hosted by the University of Oklahoma Game Developer's Association.",
  gif: BirdsHateBombsGif,
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


const glassesVisualizer = {
  name: 'Glasses Visualizer',
  description: "This is a program designed to simulate levels of visual \
    acuity and colorblindness implemented using Python and Pygame. Features include \
    simulating nearsightedness, farsightedness, and three types of colorblindness \
    (tritanopia, protanopia, and total colorblindness). This was my final project \
    for my Computer Graphics course taken in Spring 2020.",
  gif: GlassesVisualizerGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/glasses-visualizer',
    }
  ]
}


const droneGeneticAlgorithms = {
  name: 'Genetic Algorithms with Simulated Drones',
  description: "This project was an exercise on genetic algorithms for my \
    Artificial Intelligence course taken in Spring 2020. The evolutionary goal \
    was to create an agent that can collect as many points as possible in a set \
    period of time by navigating to different circles in the simulation. While \
    doing so, the drone must also avoid various static and dynamic obstacles to \
    prevent itself from taking any damage.",
  gif: GeneticAlgorithmsGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/cs4013-drone',
    }
  ]
}

const simpleLinearRegression = {
  name: 'An Application of Simple Linear Regression',
  description: "This project is a statistical analysis of data I collected while playing the popular \
    video game Fortnite. More specifically, I used simple linear \
    regression to analyze the damage dealt to opponents versus the number of \
    eliminations per game in order to determine whether or not there was a linear \
    relationship between those two in-game statistics. I used R to perform the \
    statistical tests and to make my conclusion. This was my final project for my \
    Applied Statistics course taken in Spring 2019.",
  gif: SimpleLinearRegressionGif,
  icons: ['fab fa-r-project'],
  links: [
    {
      name: 'View Document',
      href: '/assets/stats-project.html',
    }
  ]
}

const quadraticSieve = {
  name: 'The Quadratic Sieve Integer Factorization Algorithm',
  description: "This was my Honors Research project done in conjunction with \
    Dr. Qi Cheng from the University of Oklahoma. It is a Python command line \
    program of my own implementation of the quadratic sieve integer factorization \
    algorithm conceived by Carl Pomerance in 1981, which is able to find the \
    prime factors of a 21-digit number in less than 1 minute on my local machine.",
  gif: QuadraticSieveGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/quadratic-sieve',
    },
    {
      name: 'View Thesis',
      href: HonorsThesisDocument
    },
    {
      name: 'View Presentation',
      href: QSPresentationDocument
    }
  ]
}

const supervisedLearning = {
  name: 'Classifying Daily Activities Based on Inertial Sensor Data',
  description: "This project was an exercise on supervised machine learning \
  methods done for my Machine Learning course taken in Fall 2020. The goal was \
  to create an effective model to classify various activities based on data \
  gathered from sensors attached to human subjects. To do so, I implemented several \
  machine learning algorithms, such as k-nearest neighbors, decision trees, and \
  one-versus-all, from scratch without using any machine learning libraries.",
  gif: SupervisedLearningGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/daily-and-sports-activities-classifier',
    },
    {
      name: 'View Paper',
      href: SupervisedLearningDocument
    },
  ]
}

const tourGuideRobot = {
  name: 'A Simulated Tour Guide Robot',
  description: "This was the final project for my Robotics course taken in Fall 2020. \
    It is a simulated tour guide robot designed to intelligently \
    guide visitors to various tour highlights. To do so, the robot plans the most \
    efficient tour path, avoids static and dynamic obstacles, and actively \
    localizes itself as it traverses the environment. A combination of ROS, \
    RViz, Gazebo, and Python were utilized to implement the simulation.",
  gif: TourGuideRobotGif,
  icons: ['fab fa-python'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/tour-guide-robot',
    },
    {
      name: 'View Research Poster',
      href: TourGuideRobotDocument
    },
  ]
}

const mazetrix = {
  name: 'Mazetrix',
  description: "This was my team's submission to Hacklahoma 2020, a 24-hour \
  hackathon hosted by the University of Oklahoma. It is automatic maze generator \
  and solver created using HTML, CSS, and JavaScript. My role in the team was to \
  implement the backend graph data structures and to implement the maze generation \
  and path-finding algorithms.",
  gif: MazetrixGif,
  icons: ['fab fa-js-square', 'fab fa-html5', 'fab fa-css3-alt'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/stinsan/mazetrix',
    },
    {
      name: 'View Devpost',
      href: 'https://devpost.com/software/hacklahoma2020-sze1p3'
    },
  ]
}

const antiHateSpeech = {
  name: 'Anti-Hate Speech Google Chrome Plugin',
  description: "This was my team's submission to Hacklahoma 2021, a 24-hour \
  hackathon hosted by the University of Oklahoma. This project is a Google Chrome \
  plugin that blocks Tweets classified as hate speech by an NLP model created \
  using spaCy. The plugin parses Tweets from the Twitter webpage and sends the \
  text to a Flask backend server containing the NLP model for classification. \
  If the Tweet is classified as hate speech, it is blocked from the user's view.",
  gif: AntiHateSpeechGif,
  icons: ['fab fa-python', 'fab fa-js-square'],
  links: [
    {
      name: 'View Source',
      href: 'https://github.com/nemercer/Hacklahoma21',
    },
    {
      name: 'View Devpost',
      href: 'https://devpost.com/software/anti-hate-speech-plugin'
    },
  ]
}


class Projects extends React.Component {
  render() {
    return (
      <div className='projects section-wrapper' id='projects'>
        <SectionTitle sectionName='projects' />
        <div className="projects-main-section">
          <div className="thumbnails-wrapper">
            <Thumbnail className="thumbnail" {...sortingVisualizer} />
            <Thumbnail className="thumbnail" {...birdsHateBombs} />
            <Thumbnail className="thumbnail" {...glassesVisualizer} />
            <Thumbnail className="thumbnail" {...droneGeneticAlgorithms} />
            <Thumbnail className="thumbnail" {...simpleLinearRegression} />
            <Thumbnail className="thumbnail" {...quadraticSieve} />
            <Thumbnail className="thumbnail" {...supervisedLearning} />
            <Thumbnail className="thumbnail" {...tourGuideRobot} />
            <Thumbnail className="thumbnail" {...mazetrix} />
            <Thumbnail className="thumbnail" {...antiHateSpeech} />

          </div>
        </div>
      </div>
    )
  }
}

export default Projects
