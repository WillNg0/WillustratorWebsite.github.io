import pic from '/src/wlstrhouseimage.png';
import '/src/App.css'

export default function App() {
  return (
    <div className="poop">
      <div className="border">
        <h1>
          Willustrator
        </h1>
      <p>
      Illustrator’s purpose is to make design and creativity more intuitive and simple for the average Joe. Willustrator’s philosophy is that it is simple enough for anyone to use,
      regardless of age and experience. 
      </p>
      <a href="https://github.com/WillNg0/Willustrator" target="_blank" rel="noopener noreferrer">
        <button>GitHub Repository</button>
      </a>
      </div>
      <div className="example">
        <p>Example</p>
        <img src={pic} style={{width: '600px', height: '350px'}}/>
      </div>
      <div className="slideshow">
        <p>Slideshow</p>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRm94r7PVHANuK8X7XhMtXFQ3aH0uL_TxAF1UgkS2QeEZsqIa_gBg7n2MKaRQ6cmGn3t66CAyyfSK0I/pubembed?start=false&loop=false&delayms=3000" 
        frameborder="0" width="780" height="420" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>  
    </div>
  )
}