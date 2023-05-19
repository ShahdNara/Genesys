import HomePage from "./containers/Homepage";
import WebFont from "webfontloader";
import StarfieldAnimation from 'react-starfield-animation'

WebFont.load({
  google: {
    families: ['Roboto:300,400,700', 'sans-serif']
  },
  custom: {
    families: ['My Font', 'My Other Font:n4,i4,n7'],
    urls: ['/fonts.css']
  }
});


function App() {
  return (
    <div>
      <StarfieldAnimation
                numParticles={10}
                style={{
                    position: 'absolute',
                    zIndex: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
      /> 
      <HomePage/>
    </div>
  );
}

export default App