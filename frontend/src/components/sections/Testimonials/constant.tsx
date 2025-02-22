import path from "path";
import { text } from "stream/consumers";

interface typeTestimonials{
  text:string;
  path:string
}
export const TESTIMONIALS :typeTestimonials[]= [
  {
    text:"After 10th",
    path:"/After10th"
  },
  {
    text:"After Intermediate",
    path:"/AfterInter"
  },
  {
    text:"Engineering",
    path:"/Engineering"
  },
  {
    text:"Degree",
    path:"/Degree"
  },
];
