### RTMP Server Setup
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F18%2Fdiagrams.xml
* Diagram 2-vid:
* mkdir rtmpserver and cd into it
* npm init
* Diagram 3-rtmp: https://github.com/illuspas/Node-Media-Server
* In the documentation usage, go for npm version
* npm install node-media-server
* Create index.js and copy the code from Github
* In package.json, replace test with start script
* npm start

### OBS installation
* Diagram 2-vid: Different ports
* 3 processes: 1 for client, 1 for api and the other for client
* Diagram 4-obs: Download from this link
* Start OBS on mac

### OBS Scene Setup
* Create a Scene in OBS by clicking on the + sign
* Scene allows to specify different sources of Video, Audio etc
* Click on Sources + sign and select Display Capture and OK
* Click OK for default Display and Crop
* Make sure the whole picture is in View by adjusting the Red bar
* Add Audio Source by clicking on + and select Audio Input Capture
* Select whatever Microphone you have as Device
* To check, Start and Stop Recording eventually creating a Video file