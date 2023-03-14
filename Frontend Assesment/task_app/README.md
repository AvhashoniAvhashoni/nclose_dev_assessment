# Nclose Frontend Assessment (Angular)

Single page application that presents a list of tasks entered by a user

## Features

* Add new tasks to the list.
* Delete tasks from the list.
* Clear all tasks.
* Order task by drag and drop.
* Log the users public ip in the console.

## Start & End Date

* Start Date: 10/03/2023
* End Date: 14/03/2023

## Project Approach

* Friday 10/03/2023
    + Requirements gathering
* Saturday 11/03/2023
    + Analysis
* Sunday 12/03/2023
    + Implementation
    + Devevelopment
* Monday 13/03/2023
    + Devevelopment
    + Testing
* Tuseday 14/03/2023
    + Testing
    + Submission


## Project Stucture

    ├── ...
    ├── src
    │   ├── app
    │   |   ├── component
    │   │   |   ├── button
    │   │   │   |   ├── icon-button
    |   │   │   │   |   ├── icon-button.component.html
    |   │   │   │   |   ├── icon-button.component.scss
    |   │   │   │   |   ├── icon-button.component.spec.ts
    |   │   │   │   |   └── icon-button.component.ts
    │   │   │   |   └── raised-button
    |   │   │   │       ├── raised-button.component.html
    |   │   │   │       ├── raised-button.component.scss
    |   │   │   │       ├── raised-button.component.spec.ts
    |   │   │   │       └── raised-button.component.ts
    │   │   |   ├── header
    │   │   │   |   ├── header.component.html
    │   │   │   |   ├── header.component.scss
    │   │   │   |   ├── header.component.spec.ts
    │   │   │   |   └── header.component.ts
    │   │   |   └── text-field
    │   │   │   |   ├── icon-button
    |   │   │   │   |   ├── input-text-field.component.html
    |   │   │   │   |   ├── input-text-field.component.scss
    |   │   │   │   |   ├── input-text-field.component.spec.ts
    |   │   │   │   |   └── input-text-field.component.ts
    │   │   │   |   └── raised-button
    |   │   │   │       ├── output-text-field.component.html
    |   │   │   │       ├── output-text-field.component.scss
    |   │   │   │       ├── output-text-field.component.spec.ts
    |   │   │   │       └── output-text-field.component.ts
    │   |   ├── interface
    │   │   │   └── ip-interface.ts
    │   |   ├── module
    │   │   │   └── material.module.ts
    │   |   ├── page
    │   │   │   └── home
    │   │   │       ├── home.component.html
    │   │   │       ├── home.component.scss
    │   │   │       ├── home.component.spec.ts
    │   │   │       └── home.component.ts
    │   |   ├── service 
    │   │   │   └── ip
    │   │   │       ├── ip.service.spec.ts
    │   │   │       └── ip.service.ts
    │   |   ├── app-routing.module.ts
    │   |   ├── app.component.html
    │   |   ├── app.component.scss
    │   |   ├── app.component.spec.ts
    │   |   ├── app.component.ts
    │   │   └── app.module.ts
    │   ├── assets
    │   |   ├── logo
    │   │   │   └── nclose_logo.png
    │   │   └── .gitkeep
    │   ├── ...
    │   ├── index.html    
    │   ├── ...
    │   ├── styles.scss
    │   └── ...
    └── ...

## Angular Version
- Angular CLI: 13.3.10