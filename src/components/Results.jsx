import '../stylying/results.css';

function ResultsPage() {
  return (
    <div>
      <div className='showcase-wrapper'>
        <div className='image-center'>
          <img className='primary-banner-img' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749120789/lqty9orhcrntyfhrhfny.png" />
        </div>

        <div className='image-center'>
          <img className='secondary-banner-img' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749023473/p0gyinjijn9bjyzgfiip.png" />
        </div>

        <div className='highlight-container'>
          <img className="highlight-img" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749624797/kifduv1bctckuvnhvs3z.png" />
        </div>

        <div>
          <div className='heading-wrapper'>
            <h1 className="section-heading">Voices from 2025 Achievers</h1>
          </div>

          <div className='media-container'>
            {[
              "https://res.cloudinary.com/dpzpn3dkw/video/upload/w_1600,f_auto,q_auto/v1749190791/zrrft8m3t0xzreg74gfq.mp4",
              "https://res.cloudinary.com/dpzpn3dkw/video/upload/w_1600,f_auto,q_auto/v1749190633/kwizrkvh3fixomniapbg.mp4",
              "https://res.cloudinary.com/dpzpn3dkw/video/upload/w_1600,f_auto,q_auto/v1749190791/zrrft8m3t0xzreg74gfq.mp4"
            ].map((src, index) => (
              <div className="video-box" key={index}>
                <video className="video-element" autoPlay muted loop playsInline controls>
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          <div className='image-block'>
            <img className='image-wide' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1748870427/lpld6cm50rzgjbw9jjrb.png" />
          </div>

          <div className='image-block top-margin-large'>
            <img className='image-wide' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749023702/xwrlmyhrumzsmey8s6rb.png" />
          </div>

          <div>
            <div className='image-heading-center'>
              <h1 className='section-heading-alt'>JEE Results Across Years</h1>
            </div>

            <div className='image-center'>
              <img className='image-wide' src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1749024828/viwnvb0zpgxrxlgluthc.png" />
            </div>
          </div>

          <div className='button-row'>
            <button className='result-button'>View JEE 2023 Results</button>
            <button className='result-button'>View JEE 2022 Results</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;
