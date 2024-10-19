
import Slider from "react-slick";

const  Cover = () => {
  const images = [
    "https://www.177milkstreet.com/assets/site/Recipes/Pakistani-Chicken-Biryani-FB.jpg",
    "https://photo-cdn2.icons8.com/Zne3f_d33j-OFyDAx4ZU0mJaYc5cJp4rqnxzSkS1bgI/rs:fit:1611:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8xYjMyZjYzNDgz/YTE0MTMzODI1ZDky/Y2YzYzdiZWEwYS5q/cGc.jpg",
    "https://photo-cdn2.icons8.com/Knksa09xJpancqtEYxNp-mf84yW6CqLPM0raL4L0xSY/rs:fit:1490:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8wODEyYTVlMWIx/ZmU0NDkzOTFjODc2/NTA0NDUzYzFjMy5q/cGc.jpg",
    "https://photo-cdn2.icons8.com/zgtL_R1tgjzMseGzluLp-hYrcZR8HX7vzC-dKuHTVXI/rs:fit:1072:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNC82YzQzZWE2/NS0xZTdjLTRhYTUt/YTFjZS1iYWFjMmY4/N2Y3Y2MuanBn.jpg",
    
  ];

  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,      // Infinite loop
    speed: 500,          // Animation speed
    slidesToShow: 1,     // Number of slides to show at once
    slidesToScroll: 1,   // Number of slides to scroll at once
    autoplay: true,      // Automatically cycle through slides
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
    pauseOnHover: true,  // Pause on hover
  };

  return (
    <div  className="min-w-full mx-auto h-auto mb-6 rounded-lg ">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Carousel ${index}`}
               className="w-full rounded-lg h-[600px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cover;
