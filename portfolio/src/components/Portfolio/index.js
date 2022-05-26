import React from 'react';
import achordingly from '../../assets/1_achordingly.png';
import allhands from '../../assets/2_allhands.png';
import allhandsServer from '../../assets/3_allhands-server.png';
import mischmasch from '../../assets/mischmasch.png';
import teaparty from '../../assets/teaparty.png';
import gotlib from '../../assets/gotlib.png';
// import mischmasch from '../../assets/mischmasch.png';
function Portfolio() {
    return (
      <section>
        <a href="https://michaelpalumbo.github.io/achordingly" target="_blank"><img src={achordingly} alt="Achordingly" /></a>
        <h1>Achordingly</h1>
        <p>This app will allow the user to learn the most popular chord patterns in music. Useful for beginners who only know two or three chords.</p>
        <br></br>
        <a href="https://alicelab.world/msvr/" target="_blank"><img src={mischmasch} alt="Mischmasch" /></a>
        <h1>Mischmasch</h1>
        <p>Mischmasch is a room-scale VR environment that supports collaborative and performative patching of a virtual modular synthesizer.</p>
        <br></br>
        <a href="https://www.npmjs.com/package/allhands" target="_blank"><img src={allhands} alt="Allhands" /></a>
        <h1>Allhands</h1>
        <p>Allhands is a node module which facilitates sending musical controller data over the web, without needing to know the destination IP addresses of each person you are collaborating with. Simply install allhands as a global package, run it, and then use it to send/dreceive OSC data from your chosen application(s) (i.e. Ableton Live, Max/MSP, TouchDesigner, etc)</p>

        <br></br>
        <a href="https://github.com/michaelpalumbo/allhands-server" target="_blank"><img src={allhandsServer} alt=" Server" /></a>
        <h1>Allhands Server</h1>
        <p>In this self-hosted version of allhands, one person in your group will be running the server node on their own machine, and the rest of the group collaborators will need to connect to that server. This page provides installation and usage instructions, as well as how to configure a router to allow this to work.</p>

        <br></br>

        <a href="https://github.com/worldmaking/teaparty" target="_blank"><img src={teaparty} alt="Teaparty Signalling Server" /></a>
        <h1>Teaparty Signalling Server</h1>
        <p>Teaparty is a signalling server for brokering connections between Mischmasch users. Currently running as a heroku app instance.</p>

        <br></br>
        <a href="https://github.com/worldmaking/gotlib" target="_blank"><img src={gotlib} alt="Graph Operational Transform Library (gotlib)" /></a>
        <h1>Graph Operational Transform Library (gotlib)</h1>
        <p>The Graph Operational Transform Library is a real-time versioning system, based off the operational transform for documents, but instead used for graph structures. Mischmasch uses gotlib.</p>

        <br></br>
      </section>
      
    );
  }
  export default Portfolio;