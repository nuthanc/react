# Clone of twitch.tv
* Diagram Link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F13%2Fdiagrams.xml
* Diagram 07-foreward
* How twitch or Video Streaming works: Diagram 00-app
* Components involved:
    * Open Broadcaster Software(OBS): Software for recording and streaming video
    * Real Time Messaging Protocol(RTMP) server
    * Viewer's Browser
* Diagram 01-arch: Architecture
* Diagram 01-mockups:
    * Authentication system and Navigation between Pages
* Difference between twitch and our app: Diagram 08-twitch
* Diagram 08-auth: Auth rules
* App Challenges: Diagram 09-challenges
    * Navigation: React router
    * Authentication: Google oauth
    * Forms in Redux
    * CRUD opearation in React/Redux
    * Error handling

### Project setup
* mkdir streams 
* streams is gonna be the general name of our application
* npx create-react-app client