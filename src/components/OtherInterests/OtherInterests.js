/*************** REACT IMPORTS ***************/
import {useAnimationContext} from '../../context/AnimationContext'

/*************** OTHER IMPORTS ***************/
import './OtherInterests.css'

/*************** COMPONENTS ***************/
function OtherInterests() {

  const { otherInterestsAnimation } = useAnimationContext()

  const anchorHandle = (e)=>{
    e.preventDefault()
  }

  return (
      <div className='main__other-interests-div' style={{animation:otherInterestsAnimation}}>
          <div className='main__other-interests-vp-div'>
            <h2 className='main__other-interests-vp-header'>Vocal Percussion</h2>
            <div className='main__other-interests-vp'>
              <h3 className='main__other-interests-vp-text'>
                Music, like for many people, has been an integral part of my day to day life. Beatboxing, for me, was one of those ways
                to be able to create music without needing any kind of instrument or device. Since I started learning
                to beatbox way back in 2010, the art has really evolved, and being able to watch the evolution
                has really been inspiring. If you are bored, feel free to checkout a couple of my youtube videos below.
              </h3>
            </div>
            <div className='main__other-interests-vp-videos'>
              <div className='main__other-interests-vp-video'>
                <iframe
                  className = 'main__other-interests-vp-youtube'
                  src="https://www.youtube.com/embed/9eXLuLgNfuA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className='main__other-interests-vp-video'>
                <iframe
                  className = 'main__other-interests-vp-youtube'
                  src="https://www.youtube.com/embed/3QYgCjSp5HE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className='main__other-interests-acapella-div'>
            <h2 className='main__other-interests-acapella-header'>Acapella</h2>
            <h3 className='main__other-interests-acapella-text'>
                Acapella was a natural hook for me, as it gave me the option to further explore both beatboxing and singing.
                Please checkout two groups, one I am currently in and one that I was previously in, below.
            </h3>
            <div className='main__other-interests-acapella'>
              <div className='main__other-interests-acapella-highkey'>
                <h2 className='main__other-interests-acapella-title'>
                  <a href='/other-interests' onClick={anchorHandle} target="_blank" rel="noreferrer" className='main__other-interests-acapella-anchor'>HighKey</a>
                  <a href='https://www.instagram.com/highkeyacappella/' className='main__anchor-icon'  target="_blank" rel="noreferrer">
                    <div className='main__icon-background'></div>
                    <img alt='' src={'/img/Instagram_Icon.png'} className='main__icon'></img>
                  </a>
                  <a href='https://www.facebook.com/highkeyacappella' className='main__anchor-icon'  target="_blank" rel="noreferrer">
                    <div className='main__icon-background'></div>
                    <img alt='' src={'/img/Facebook_Icon.png'} className='main__icon'></img>
                  </a>
                </h2>
                <h4 className='main__other-interests-acapella-text'>
                  Just a group of friends getting together to sing and have fun. Of course the
                  pandemic has put us on hiatus, but hopefully soon we'll be able to get back together and maybe make
                  a video or two. Checkout our social media above.
                </h4>
                <div className='main__other-interests-acapella-video'>
                  <img alt='' className='main__other-interests-acapella-highkey-img' src={'/img/Highkey.jpg'}></img>
                  </div>
              </div>
              <div className='main__other-interests-acapella-vibes'>
                <h2 className='main__other-interests-acapella-title'>
                  <a href='https://thegwvibes.com/' target="_blank" rel="noreferrer" className='main__other-interests-acapella-anchor'>GW Vibes</a>
                  <a href='https://www.youtube.com/user/TheGWVibes' className='main__anchor-icon'  target="_blank" rel="noreferrer">
                    <div className='main__icon-background'></div>
                    <img alt='' src={'/img/Youtube_Icon.png'} className='main__icon'></img>
                  </a>
                  <a href='https://www.instagram.com/gwvibes/' className='main__anchor-icon'  target="_blank" rel="noreferrer">
                  <div className='main__icon-background'></div>
                    <img alt='' src={'/img/Instagram_Icon.png'} className='main__icon'></img>
                  </a>
                  <a href='https://www.facebook.com/GWVibes' className='main__anchor-icon'  target="_blank" rel="noreferrer">
                  <div className='main__icon-background'></div>
                    <img alt='' src={'/img/Facebook_Icon.png'} className='main__icon'></img>
                  </a>
                </h2>
                <h4 className='main__other-interests-acapella-text'>
                  One of the best decisions of my college career was to join the GW Vibes. I've met lifelong friends
                  and got to experience music in a way I never had before. Checkout their social media above and one of my favorite videos
                  below.
                </h4>
                <div className='main__other-interests-acapella-video'>
                  <iframe
                    className = 'main__other-interests-acapella-youtube'
                    src="https://www.youtube.com/embed/xwD-lI4rYdk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}

/*************** EXPORT ***************/
export default OtherInterests;