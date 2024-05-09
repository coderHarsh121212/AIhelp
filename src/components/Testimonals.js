import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      review:
        "Our customer service efficiency skyrocketed thanks to the AI Agent SaaS. We've witnessed a remarkable 40% decrease in call volume alongside a notable 20% boost in customer satisfaction.",
      author:
        "John Doe, VP of Customer Experience, Renowned Global Retail Brand",
      image: "https://th.bing.com/th/id/OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp?rs=1&pid=ImgDetMain",
    },
    {
      review:
        "Implementing the AI Agent SaaS has enabled us to magnify our sales conversations and generate a remarkable 30% increase in leads without expanding our workforce.",
      author: "Jane Smith, Sales Director, Prominent SaaS Firm",
      image: "https://th.bing.com/th/id/OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp?rs=1&pid=ImgDetMain",
    },
    {
      review:
        "The AI-driven insights provided by the platform have revolutionized our understanding of customer behavior and preferences, empowering us to refine our marketing strategies and fuel revenue growth.",
      author: "Mike Johnson, Chief Marketing Officer, Fortune 500 Corporation",
      image: "https://th.bing.com/th/id/OIP.Ck2Usj84bIh_SiI2QJ7b-QHaEp?rs=1&pid=ImgDetMain",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1, // Display two slides on medium-sized screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-blue-400 to-blue-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Our Testimonials
        </h2>
        <div className="relative px-6">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="min-h-72 p-6 rounded-md" key={index}>
                <TestimonialCard
                  review={testimonial.review}
                  author={testimonial.author}
                  image={testimonial.image}
                />
              </div>
            ))}
          </Slider>
          <CustomArrows goToNext={goToNext} goToPrev={goToPrev} />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ review, author, image }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
      <img
        src={image}
        alt={author}
        className="w-20 h-20 rounded-full mb-4 object-cover"
      />
      <p className="text-gray-800 text-lg text-center">{review}</p>
      <p className="text-gray-600 text-sm mt-4 text-center">{author}</p>
    </div>
  );
};

const CustomArrows = ({ goToNext, goToPrev }) => {
  return (
    <>
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer"
        onClick={goToPrev}
      >
        
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
        onClick={goToNext}
      >
        
      </div>
    </>
  );
};

export default TestimonialsSection;
