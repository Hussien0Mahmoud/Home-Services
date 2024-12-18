
import who1 from '../../assets/About/who1.jpg'
import who2 from '../../assets/About/who2.jpg'
import who3 from '../../assets/About/who4.jpg'

export default function AboutMission() {
  return (
    // <!-- about us -->
    // <!-- مهمتنا-->
<section className="bg-gray-100" id="aboutus">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">من نحن</h2>
                <p className="mt-4 text-gray-800 text-2xl">
                نحن منصة مبتكرة تهدف إلى تسهيل حياتك من خلال تقديم خدمات صيانة وإصلاح الأجهزة المنزلية بكفاءة واحترافية. نعلم أن الأعطال المفاجئة في الأجهزة المنزلية قد تكون مزعجة وتؤثر على روتين حياتك اليومي، لذلك قمنا بإنشاء منصة متكاملة تربطك بأفضل الفنيين المهرة في مختلف المجالات.</p>
                <p className="mt-2 text-gray-800 text-2xl">
                نتميز بكوننا حلقة وصل تجمع بين العملاء الذين يبحثون عن خدمات صيانة عالية الجودة والفنيين المحترفين الموثوقين الذين يملكون الخبرة والمهارة اللازمة لإنجاز المهام بسرعة وكفاءة. سواء كنت بحاجة إلى إصلاح الثلاجات، الغسالات، المكيفات، أو أي جهاز منزلي آخر، نحن هنا لتقديم الحلول المناسبة بأعلى معايير الجودة.
                </p>
            </div>
            <div className="mt-12 md:mt-0">
                <img src={who2} alt="About Us Image" className="object-cover rounded-lg shadow-md"/>

            </div>
        </div>
    </div>
</section>
  )
}