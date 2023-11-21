// components/LogoContentCarousel.js
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoContentCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div >
      <div className="mx-auto max-w-5xl lg:text-center mb-5 pb-5">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
              <h2 className="mt-1 text-3xl text-gray-900 sm:text-4xl">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                gravida tincidunt lectus."
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                varius, arcu nibh feugiat enim, et fermentum orci nisi vel
                felis.{" "}
              </p>
            </div>
      <Slider {...carouselSettings}>
        {/* Slide 1 */}
        
        <div className="text-center p-8 mb-4">
          <img
            className="mx-auto mb-4"
            src="https://images.prismic.io/vueai/f18d025f-0df6-4116-aaf2-bec083ea2f8d_image+23.png?auto=compress%2Cformat&fit=max&w=256"
            alt="Logo 1"
            width={100}
            height={100}
          />
          {/* <h2 className="text-2xl font-semibold mb-2">Content 1</h2> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
        </div>

        {/* Slide 2 */}
        <div className="text-center p-8 mb-4" >
          <img
            className="mx-auto mb-4"
            src="https://images.prismic.io/vueai/61c50e48-fe3b-4345-b550-74f55a5c757e_585990234f6ae202fedf28cf+2.png?auto=compress%2Cformat&fit=max&w=256"
            alt="Logo 2"
            width={100}
            height={100}
          />
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
        </div>
 {/* Slide 3 */}
 <div className="text-center p-8 mb-4">
          <img
            className="mx-auto mb-4"
            src="https://images.prismic.io/vueai/5665dcd9-138f-4991-b522-8fae272f24ca_20602d43cc993811e5a6bd1886af4f33+2.png?auto=compress%2Cformat&fit=max&w=256"
            alt="Logo 2"
            width={100}
            height={100}
          />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
        </div>
         {/* Slide 4 */}
         <div className="text-center p-8 mb-4">
          <img
            className="mx-auto mb-4"
            src="https://images.prismic.io/vueai/61c50e48-fe3b-4345-b550-74f55a5c757e_585990234f6ae202fedf28cf+2.png?auto=compress%2Cformat&fit=max&w=256"
            alt="Logo 2"
            width={100}
            height={100}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
        </div>
         {/* Slide 5 */}
         <div className="text-center p-8 mb-4 ">
          <img
            className="mx-auto mb-4"
            src="https://images.prismic.io/vueai/f18d025f-0df6-4116-aaf2-bec083ea2f8d_image+23.png?auto=compress%2Cformat&fit=max&w=256"
            alt="Logo 2"
            width={100}
            height={100}
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default LogoContentCarousel;
