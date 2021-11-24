# Frontend Challenge

Goal of this project is to browse TV Shows based on the rating and Genre. Users will be able to search tv shows & see the detail of the shows.

## Project Demo 

[View demo video](https://vimeo.com/649638350)

[Link to the page](https://fe-telemaze.netlify.app/)

[Online IDE](https://github1s.com/abhinandhand/tele-maze)


 ## Technology used
 * Angular 12
 * NgRx Pattern
 * RxJs
 * Pure CSS & SCSS
 
Eventough I prefer to use Vue-Nuxt framework for personal projects, I choose Angular here, because last few months have been working full time on Angular. I felt, it would be much easier & faster to build as the code syntax is ready on my mind. My ultimate focus was here to build a scalable, maintainable & high performance application.


### To Run on local machine

* Considering node js & Angular 12 CLI is already installed the machine

* Clone the repository ```https://github.com/abhinandhand/tele-maze.git```

* cd in to the project ```cd tele-maze```

* Build the project ```npm install```

* To run the Angular application ```ng serve```

* To run unit test ```ng test --coverage```


## Website pages

Website has 3 pages namely, Dashboard, Detail & Search page. Each of the page are lazy loaded on demand. 
* ### Dashboard (Home) page
  * This page is where all the popular Tv Shows are displayed based on Genre
  * The shows in each genere are ordered based on the rating. Top rated shows are shown in the left
  * Shows are displayed horizontally & can be scrolled with the use of Navigation button on desktop. 
  * On mobile screen view navigation buttons are hidden & can be easily scrolled used touch swipe  
  * Business logic for all the sorting & filtering is done using NgRx Selector ```tv-shows.selector```
  
 ![Desktop](https://i.ibb.co/80Y0pLV/1.png) 

 * ### Detail Page
   * Detailed view of a show can be viewed on clicking the individual card either in dashboard / search page.
   * The url of this page includes unique id of the show as a path param, so that these pages can be accesed directly 
  
 ![Detail Page](https://i.ibb.co/4dFp20G/3.png)
 
 * ### Search Page
   * User can search for shows in the search box present in the header
   * Search term is inluded as query param in the url
   * Search results are ordered based on the relevancy score
   * On click of individual show, user are navigated to the detail page
  
 ![Search page](https://i.ibb.co/R7vM8sL/4.png)

 ## Project architecture
 
    |-- app
      |-- pages
           |-- dashboard
                |-- action, effects
                |-- components
      |-- shared module
           |-- ui-components
           |-- pipes, directives
           |-- services, utils
      |-- store                        
           |-- tv-shows
           |-- settings
           |-- loader
      |-- styles
      	   |-- abstract
	           |-- config, mixing, functions, variable
	       |-- base 
	           |-- animations, typography, base	    

 

 
 ## Application features 
 
  * ### Scalable, Maintainable & Resusable project structure 
    * Feature modules with clear seperation of concern
    * Shared module for reusable ui components like buttons, header, directives, services
    * Followed SCSS architecture
    * Used SCSS mixins for manging media query with ease
    * Leverage typescript functionalities like interfaces, enums, utils
 
 
  * ### Implemented NgRx Pattern for managing the data flow within the application
    * Created NgRx feature states for centrally managing backend data, loading decider & Device settings
    * Whole idea was to keep the components lightweight
    * Tv Show data is saved in Entity format
    * Used Entity Adapter for managing collections
    * Created Selectors for retreving & filtering the data from the store
    * Device information is saved in store for easier access 
    
    
  
 ![NgRxState](https://i.ibb.co/VBxyB7d/5.png)
 

  * ### Handled negative scenarios 
    * Display relevant error messages
    * Generic component for displaying Error
    * During network error, added the retry of the API
    * Display fall back image whenever there is no posters for the shows
    * Created a resuable Image fall back directive 
  
 ![Error](https://i.ibb.co/wsgKHm6/7.png)


 ![ImageFallBack](https://i.ibb.co/xYmNVH7/6.png)
 
   * ### Taken care of aplication performance 
     * Minimised the initial load bundle size by loading modules on demand
     * Lightweight components 
     * Application heavy lifting is done through NgRx Effects & Selectors
     * Async pipe is used wherever possible for subscribing to the observables in template 
     * Took benefit of router events for retreiving the page data from the backend, API is invoked well before the component initialisation
     * For avoiding some transient network error, api call is retried for 3 times
     * Images are downloaded lazily instead of loading all the images at once
     * Device based image loading is implemented. On mobile devices low resolution images is loaded 

    * ### Reusable components/code
      * <genre-list> -> For displaying the all the shows in the Genre
      * <show-card>  -> Represents the individual show within the <genre-list>
      * <search-field> -> Input field 
      * <error-###> -> Error components
      * Image fall back directive
      * Image lazy load directive
      * Create mocks & stubs for mocking the data for unit test
  
  *  ### Code coverage
    
![Unittest](https://i.ibb.co/1rcxVM4/8.png)
     
  ## Improvement points
   * Complete the unit tests for NgRX effects
   * Add hover effect on cards to display more information of the show
   * Write E2E unit tests with protractor
   * Manage the font-size of the website better
    
 
