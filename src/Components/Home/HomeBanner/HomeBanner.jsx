
import header1 from '../../../assets/Home/header1.jpg'
import header2 from '../../../assets/Home/header2.jpg'
import header3 from '../../../assets/Home/header3.jpg'
import header4 from '../../../assets/Home/header4.jpg'
import header5 from '../../../assets/Home/header5.jpg'
import header6 from '../../../assets/Home/header6.jpg'
import header7 from '../../../assets/Home/1220.jpg'
export default function HomeBanner() {
  return (
    <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <img src={header7} className="w-full h-full " alt="Header Image" />
        {/* <video className="min-w-full min-h-full absolute object-cover"
            src="https://videocdn.cdnpk.net/videos/6f674991-0ac3-4d0f-8570-8d55e40a22f4/horizontal/previews/clear/large.mp4?token=exp=1733752424~hmac=374e36ce60fd482a455badc3b1c48789bd1391fffe9bf0e2ffcce362a1084a9c"
            type="video/mp4" autoPlay muted loop></video> */}

    </div>
    <div className="video-content space-y-2 z-10">
        <h1 className=" text-6xl font-bold mb-7 text-black">  أهلا بك في<span className="text-yellow-500" >  بيتــك </span>
        </h1>
        <h3 className="font-light text-4xl  text-black hover:text-yellow-600 leading-relaxed">  
        نحن هنا لنقدم لك أفضل الخدمات المنزلية في أي وقت.<br/> من التنظيف والصيانة إلى إصلاح الأجهزة، وكل شيء في ما بينهما.
                      </h3>
    </div>
</section>

    </>
  )
}


// <div className='bg-test'>Banner</div>
