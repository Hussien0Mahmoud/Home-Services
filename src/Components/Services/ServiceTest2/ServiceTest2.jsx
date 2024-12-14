import { FaWrench, FaBroom } from "react-icons/fa";
import img1 from '../../../assets/Home/Services-Section/plumbing-work.svg'
const services = [
    {
      id: 1,
      image: img1 ,
      title: "عاملة منزلية بالشهر",
      description:
        "التعريف بخدمة تسليك الصرف الصحي وهي عبارة عن الخدمة الخاصة بفتح انسداد مواسير الصرف الصحي في…",
      icon: <FaWrench className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      image: img1,
      title: "تسليك الصرف الصحي",
      description:
        "عاملة منزلية بالشهر تم تدريبها بكفاءة عالية لتساعدكِ على القيام بأعمال البيت كما يجب، قد تعتبر…",
      icon: <FaWrench className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      image: img1,
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
    {
      id: 4,
      image: img1,
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
    {
      id: 5,
      image: img1,
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
    {
      id: 6,
      image: img1,
      title: "تركيب و صيانة الاجهزة المنزلية",
      description:
        "التعريف بخدمة تركيب و صيانة الاجهزة المنزلية إن الهدف الأساسي من خدمة تركيب و صيانة الأجهزة…",
      icon: <FaWrench className="text-yellow-400 text-3xl" />,
    },
  ];

export default function ServiceTest2() {
  return (
    <section className="py-10" id="services">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Our Services
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {/* Service 1 */}
      {services.map((service)=>(
        <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[30%]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-700 text-base">{service.description}</p>
        </div>
      </div>
      ))}
      
      {/* Additional Services */}
      {/* Add more services as needed, maintaining the same structure */}
    </div>
  </div>
</section>

  )
}



