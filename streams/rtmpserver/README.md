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

### Video Player Setup
* Diagram 3-rtmp: https://github.com/illuspas/Node-Media-Server
* Accessing the Live Stream in the above doc
* Using http-flv, take the via flv.js over http-flv code and turn it to React Code
* https://npmjs.com/package/flv.js
* In client directory, npm i flv.js

### Implementing FLV JS
* In StreamShow.js of client, import flv
* In render method's return, create a Video element
* In order to get reference, use refs and pass it to video element
* Also pass style props and controls

### Creating a FLV Player
* FLV downloads the video stream and converts into some kind of file that can be played in the HTML video player
* In StreamShow's componentDidMount, create flvplayer based on the Node-Media-Server documentation link
* https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv
* Diagram link: https://www.draw.io/#Uhttps%3A%2F%2Fraw.githubusercontent.com%2FStephenGrider%2Fredux-code%2Fmaster%2Fdiagrams%2F18%2Fdiagrams.xml
* Diagram 2-vid:
* From OBS doc link, settings->stream

