# Advanced HackCamp Angular

### Todos Part 1

- Implement the search
- Implement the detail page
- Lets implement the AuthGuard. (`auth.guard.ts`).
  The AuthGuard should check if the user's information has been saved into the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Implementation of our own \*ngIf

##### Todos Part 2

- [] List all computers
- [] Search computers by their brand and model
- [] Implement the detail page

##### Architecture/Module

Lets break our application into isolated modules. We're going to create these modules:

- AuthModule
- BookModule
- ComputerModule
- CoreModule
- ShareModule

Lets discuss first what should be added into each module then refactor our application to reflect our choices.
