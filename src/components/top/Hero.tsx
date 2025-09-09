
import '@/styles/pages/top/hero.scss';

export default function Hero() {
  return (
    <section className="u-hero sec-black relative w-full h-screen" data-header-color="#fff">
      <video
        className="u-video fixed inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
        poster="/images/top/img_hero.jpg" // ← 1フレーム目を画像にしておく
      >
        <source src="https://pana-n.jp/video/panan-01.mp4" type="video/mp4" />
        {/* <source src="/video/panan-0909.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="block md:hidden">
        <img
          className="u-video fixed inset-0 w-full h-full object-cover"
          src="https://pana-n.jp/video/panan-01.gif"
          alt="Hero Animation"
        />
      </div>

      <div className="u-overlay fixed inset-0 pointer-events-none"></div>
      <h1 className="u-hero-lead absolute shippori text-xl text-white lg:text-4xl">
        <span className="block">琉球の想いと癒しをあなたへ。</span>
        <span className='block pl-6 pt-2 lg:pl-16'>心のひだに触れ、魂をほぐす</span>
        <span className='block pl-12 pt-2 lg:pl-32'>元祖琉球マッサージ、パナ・ン。</span>
      </h1>
      <div className='u-scroll absolute bottom-24 left-1/2 -translate-x-1/2'>
        <p className='u-scroll-text garamond text-base text-white text-center'>scroll down</p>
      </div>
    </section>
  );
}
