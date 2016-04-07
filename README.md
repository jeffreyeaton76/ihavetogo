# ihavetogo
An app for rating public restrooms.

## Tech Used
+ Ruby on Rails
+ AngularJS
+ Google Maps API
+ JBuilder

## Approach Taken
For the initial sprint, the team was divided into specialties: front-end design, front-end angular, back-end rails, and api research. Each day the team reconvened to establish roles for the next sprint. In this way we were able to tackle a large number of issues without too many merge conflicts. When we encountered a challenge that one person was struggling with, we would pair to share brains and overcome the issue.

## Unsolved Problems
* Back button on main page sometimes takes user to a new toilet page instead of the index page. Why?
* Everything works properly until we add 12 items to the database. Then the map no longer adds markers or even loads. Why?

## Goals
### Bronze:
+ Users can find a toilet based on location on a map.
- Users can add a new toilet based on an address.
+ Toilets have a location, accessibility status, cleanliness rating, overall rating, wait time, and description
+ Cleanliness ratings are represented with stars (1-3)
- Overall ratings are represented with stars (1-5)
+ New and Show pages are shown on a separate page
- Include a disclaimer that we have no responsibility for toilets or reviews
- Put our contact info on site so fans can tell us how awesome we are and employers can hire us.

### Silver
- Users can comment on a toilet
- Toilets will also have a cost attribute
+ Rating for cleanliness is represented in toilets
- Rating for overall is represented in TBD
- New and Show pages load as a single page under main template

### Gold
- In a user comment, the user can also add a cleanliness rating and an overall rating
- Users can search for toilets based on rating
- Users can search for toilets based on accessibility
