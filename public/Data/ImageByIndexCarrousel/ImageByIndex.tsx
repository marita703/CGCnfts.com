import image1 from "@/public/Images/ImagesForCarrousel/1.png";
import image2 from "@/public/Images/ImagesForCarrousel/2.png";
import image3 from "@/public/Images/ImagesForCarrousel/3.png";
import image4 from "@/public/Images/ImagesForCarrousel/4.png";
import image5 from "@/public/Images/ImagesForCarrousel/6.png";

import { StaticImageData } from "next/image";

export const images: string | StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const imageByIndex = (index: number): string | StaticImageData =>
  images[index % images.length];

export default imageByIndex;
