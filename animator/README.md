# Soccer-Visor 0.2

![](soccer-visor-dashboard.png)

## Introduction

Animator is a animation tool to make research using football tracking data easier.

The current version of animator consists of two 5 major components.

**main**

- main.js
    main.js is where all the global variables (sorry!) are defined and where all the class instances are called. To add new pitch overlays and bars objects should be instantiated here.

**Drawables**

- pitchDrawables.js
    An animation/visualisation tool to show players on a responsive javascript canvas. An overlay can be added for visualisations to show areas or relations such as voronoi diagrams and delaunay triangulations.

- barDrawables.js
    Bars are individual canvases that are used to display time-series data. A seek bar is included by default to allow the user to manually change the time.

**render**

- render.js
    Soccer-Visor utilises the setInterval function to repeatedly draw to the canvases.

**Controls**

- controls.js
    Playback tools are just tools to used mainly to play and pause the animation. There are faster and slower buttons which are used to change the speed rate of the render function.

**Tools**

- tool.js
    Static functions that can be called by any object are put in here.

![](soccer-visor-overview.png)


