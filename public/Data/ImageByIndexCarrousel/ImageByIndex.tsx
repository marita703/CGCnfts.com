import image1 from "@/public/Images/ImagesForCarrousel/Slide1.jpg";
import image2 from "@/public/Images/ImagesForCarrousel/Slide2.jpg";
import image3 from "@/public/Images/ImagesForCarrousel/Slide3.jpg";
import image4 from "@/public/Images/ImagesForCarrousel/Slide4.jpg";
import image5 from "@/public/Images/ImagesForCarrousel/Slide5.jpg";
import image6 from "@/public/Images/ImagesForCarrousel/Slide6.jpg";
import { StaticImageData } from "next/image";

export const images: string | StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];

const imageByIndex = (index: number): string | StaticImageData =>
  images[index % images.length];

export default imageByIndex;
