import { FaWrench, FaBroom } from "react-icons/fa";
import { Link } from 'react-router-dom';
import drainCleaning from '../../../assets/services/drain-cleaning.png' //  تسليك الصرف الصحي
import repairDevices from '../../../assets/services/repair-devices.jpg'// تركيب و صيانة الاجهزة المنزلية
import houseMadeMonth from '../../../assets/services/house-made.jpg' // عاملة منزلية بالشهر
import plumbing from '../../../assets/services/plumbing.jpg' //  السباكة
import houseMadeHour from '../../../assets/services/house-made-hour.jpg' //  عاملة منزلية بالساعة
import cleanliness from '../../../assets/services/cleanliness.jpg' // النظافة
import antiBug from '../../../assets/services/anti-bug.jpg' //  مكافحة الحشرات
import airConditioning from '../../../assets/services/air-conditioning.jpg' // التكييف
import electricity from '../../../assets/services/electricity.jpg' // الكهرباء
import sterlisation from '../../../assets/services/sterlisation.jpg' // التعقيم
import satelite from '../../../assets/services/satelite.jpg' // ساتلايت ورسيفر
import carpentry from '../../../assets/services/carpentry.jpg' //  نجارة و تركيب أثاث

const services = [
  {
    id: 1,
    image: drainCleaning ,
    title: "تسليك الصرف الصحي",
    description:
      "التعريف بخدمة تسليك الصرف الصحي وهي عبارة عن الخدمة الخاصة بفتح انسداد مواسير الصرف الصحي في…",
    icon: "FaWrench",
  },
  {
    id: 2,
    image: repairDevices,
    title: "تركيب و صيانة الاجهزة المنزلية",
    description:
      "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
    icon: <FaWrench className="text-blue-500 text-3xl" />,
  },
  {
    id: 3,
    image: houseMadeMonth,
    title: "عاملة منزلية بالشهر",
    description:
      "عاملة منزلية بالشهر تم تدريبها بكفاءة عالية لتساعدكِ على القيام بأعمال البيت كما يجب، قد تعتبر…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 4,
    image:plumbing ,
    title: " السباكة",
    description:
      "يقوم السبّاك من تطبيق بيتك بسباكة المنزل على قدر عالٍ من المسؤولية والكفاءة. حيث أن مهام…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 5,
    image: houseMadeHour,
    title: " عاملات نظافة بالساعة",
    description:
      "عاملات نظافة نسائية مدربة تساعدك بالقيام بأعمال البيت بأفضل طريقة. نعلم تمامًا سيدتي أن مهام المنزل…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 6,
    image: cleanliness,
    title: "النظافة ",
    description:
      "تشمل خدمة النظافة تنظيف كل من الأثاث وخزانات المياه وتلميع السيراميك بشكل احترافي لضمان راحة بالك. …",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 7,
    image:antiBug ,
    title: "مكافحة الحشرات والطيور ",
    description:
      "التعريف بخدمة مكافحة الحشرات والطيور تشمل خدمة مكافحة الحشرات والطيور كل من الأدوات والأساليب التي يستخدمها…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id:8,
    image:airConditioning ,
    title: "التكييف ",
    description:
      "صيانة وتنظيف وحدات التكييف الداخلية والخارجية وتعبئة الفريون والتأكد من عمل المكيف بكفاءة عالية. تفاصيل أخرى…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 9,
    image: electricity,
    title: " الكهرباء",
    description:
      "يقوم فني الكهرباء من تطبيق بيتك بتحديد ماهية المشكلة المتواجدة في المنزل أو المنشأة وبالتالي تقديم…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 10,
    image:sterlisation ,
    title: " التعقيم",
    description:
      "التعريف بخدمة التعقيم: تعد خدمة التعقيم أكثر الخدمات الضرورية والتي لا بد أن يحصل عليها أصحاب…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 11,
    image: satelite,
    title: " ساتلايت ورسيفر",
    description:
      "التعريف بخدمة ستالايت ورسيفر: فني ساتلايت ورسيفر من تطبيق بيتك يقوم بتركيب الدش وتصليحه وبرمجة الرسيفر…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  },
  {
    id: 12,
    image:carpentry ,
    title: "نجارة و تركيب أثاث ",
    description:
      "التعريف بخدمة نجارة وتركيب أثاث: تتضمن نجارة وتركيب أثاث المنزل أو المنشأة العديد من المهام التي…",
    icon: <FaWrench className="text-yellow-400 text-3xl" />,
  }
  
];


export default function ServicesSections() {
  return (
    <section className="py-10 " id="services">
    <div className="container mx-auto px-4 ">
    <h2 className="text-3xl  text-yellow-400 mb-3 text-center">
    لعملائنا الفخورين بهم
      </h2>
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
      كافة الخدمات
      </h2>
      <div className="flex flex-wrap justify-center gap-8 ">

        {services.map((service)=>(
          <div key={service.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden w-full md:w-[30%]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-base">{service.description}</p>
          </div>
          {/* <div className="text-center mb-5">
            <Link to="/serviceInfo" className="border-t-cyan-300"> عرض الخدمة </Link>
          </div> */}
          <div className="text-center mb-5">
  <Link
    to="/serviceInfo"
    className="inline-block px-6 py-3 bg-yellow-400 text-white font-semibold text-lg rounded-md border border-yellow-400  hover:bg-gray-400 hover:border-gray-400 transition-all"
  >
    عرض الخدمة
  </Link>
</div>

        </div>
        ))}
        
      </div>
    </div>
  </section>
  );
}
