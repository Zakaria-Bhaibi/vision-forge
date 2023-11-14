
function App() {
  

  return (
    <>
      {/*Hero Section */}
      <section id="hero">
        {/*Hero Container */}
        <div id="container" className="container  mx-auto px-6 py-12">
          {/*Nav/Logo Container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/*Logo */}
            <img src="logo.png" alt=""/>
            {/*Menu */}
            <div className="hidden h-10 font-alata md:flex md:space-x-8">
              <div className="group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Carrers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
              <div className="group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50 ">
                </div>
              </div>
            </div>
          </nav>
          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-x-0 md:text-6xl">
            Impressive Experiences That Deliver
          </div>
        </div>
      </section>
      {/*Feature section */}
      <section id="feature">
        {/*Feature container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          {/*Image */}
          <img src="/desktop/image-interactive.jpg" alt="" />
          {/*Text container */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
              The leader In interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et nobis fuga, ducimus quam maiores autem quae, debitis doloremque reprehenderit quo optio necessitatibus. Ullam esse voluptatibus, nam excepturi consectetur aliquid?
            </p>
          </div>
        </div>
      </section>
      {/*Creations section */}
      <section id="creations">
        {/*Main Container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/*Container Header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl"> Our creations</h2>
            <button className="hidden btn md:block">
              See All
            </button>
          </div>
          {/*Items container 1*/}
          <div className="item-container">
            {/*Item 1 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-deep-earth.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-deep-earth.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>Deep Earth</h5>
            </div>
            {/*Item 2 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-night-arcade.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-night-arcade.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>Night Arcade</h5>
            </div>
            {/*Item 3 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-soccer-team.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-soccer-team.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>Soccer Team VR</h5>
            </div>
            {/*Item 4 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-grid.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-grid.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>The grid</h5>
            </div>
          </div>
          {/*Items container 2 */}
          <div className="item-container mt-10">
            {/*Item 1 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-from-above.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-from-above.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>From Above vr</h5>
            </div>
            {/*Item 2 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-pocket-borealis.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-pocket-borealis.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>Pocket borealis</h5>
            </div>
            {/*Item 3 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-curiosity.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-curiosity.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>The curiosity</h5>
            </div>
            {/*Item 4 */}
            <div className="group item">
              {/*Desktop image */}
              <img src="/desktop/image-fisheye.jpg" alt="" className="hidden w-full duration-200 md:block group-hover:scale-110" />
              {/*Moble image */}
              <img src="/mobile/image-fisheye.jpg" alt="" className="w-full md:hidden" />
              {/*Item Gradient */}
              <div className="item-gradient"></div>
              {/*Item Text */}
              <h5>Make it fisheye</h5>
            </div>
          </div>
          {/*Bottom button container */}
            <div className="flex justify-center mt-10 md:hidden">
              <button className="btn w-full md:hidden">See All</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default App
