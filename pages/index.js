import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import headerImg1 from '../public/images/header-dimond1.svg'
import headerImg2 from '../public/images/header-dimond2.svg'
import headerImg3 from '../public/images/header-dimond3.svg'
import mobileImg from '../public/images/iPhone 14 Pro.svg'
import Footer from '@/components/Footer/Footer'


export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className={`${styles.headerWrapper}`}>
          <div className={`container ${styles.headerInnerWrapper}`}>
            <div className={styles.innerContent}>
              <h2>Welcome to <span className={styles.boldContent}>SalesStrike!</span> </h2>
              <p>Reap the benefits of selling on the world’s #1 eCommerce marketplace <span className='clr-org'>Amazon</span> without the hassles </p>
              <Button title="Sign Up" />
            </div>
            <div className={styles.dimondImgWrapper}>
              <Image src={headerImg1} className={`${styles.dimondImg} ${styles.dimond1}`} alt="dimond-img1" />
              <Image src={headerImg2} className={`${styles.dimondImg} ${styles.dimond2}`} alt="dimond-img2" />
              <Image src={headerImg3} className={`${styles.dimondImg} ${styles.dimond3}`} alt="dimond-img3" />
            </div>
          </div>
        </div>
        <div className={`${styles.headerMiddleWrapper}`}>
          <div className={` ${styles.middleContent} container`}>
            <div className="row">
              <div className={`${styles.videoContainer} col-12 col-lg-6`}>
                <div className={styles.videoPlayer}>
                  <video
                    controls
                    autoplay
                    loop
                    muted
                    autoPlay
                    className={styles.videobox}
                  >
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" />
                  </video>
                </div>
              </div>
              <div className={`${styles.middleContentRight}  col-12 col-lg-6`}>
                <div className={styles.innerContentRight}>
                  <h2>What We Do</h2>
                  <h4>Fulfilling your <span className='clr-org'>dream.</span></h4>
                  <p> I’m sure you’ve seen a lot of products online you wish you could have profited from, yet you don’t know how to source inventory, create an Amazon store, or fulfill orders.<span className='clr-org'> What if anyone could do it? </span></p>
                  <p> SalesStrike is a platform that allows you to spin up a personalized Amazon Store. You choose the products from our marketplace and we take care of the rest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottomWrapper}>
          <div className={`${styles.bottonInner} container`}>
            <div className={` ${styles.middleContent} row align-items-center`}>
              <div className={`${styles.middleContentRight} col-12 col-md-12 order-2 order-lg-1  col-lg-6`}>
                <div className={styles.innerContentRight}>
                  <h2 className={styles.bottomTitle}>Our Innovative Technology</h2>
                  <h4>Advanced <span className='clr-org'>Solutions</span></h4>
                  <p>At SalesStrike, we developed a system that brings you a solution; not another problem. </p>
                  <p>
                    We designed a system that solves all the hassles of being an online seller. Utilizing our platform, you get top notch product info, fulfillment and warehouse services. marketing and brand algorithms and so much more for free
                  </p>
                </div>
              </div>
              <div className='col-12 col-md-12 col-lg-6 order-1 order-lg-2 '>
                <Image src={mobileImg} alt="mobile-img" className={styles.imgItem} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerUpper}>
          <div className={`${styles.footerUpperInner} container ${styles.customContainer}`}>
            <h3 className={`text-white mb-0`}>Join the club!</h3>
            <div className={styles.inputField}>
              <input type="text" placeholder='Enter your e-mail address' id={styles.footerField} />
              <Button title="Sign Up" className={styles.homeFooterBtn} innerBtn={styles.innerBtn} />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
