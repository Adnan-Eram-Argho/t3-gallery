/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/f52f96a6-ba29-4b52-b08f-f3b48befa586-yd0xy2.PNG",
    "https://utfs.io/f/8fb72dab-0814-4bc0-828a-c3703d352200-8vlcc.PNG",
    "https://utfs.io/f/da1c6ef8-25aa-4ee6-a133-b1729227ef22-8vlci.PNG",
    "https://utfs.io/f/5d10e4d9-afb1-4adf-a5c0-3154ef1e4321-8vlcf.PNG"
]
const mockImages = mockUrls.map((url,index)=>({
  id:index+1 ,
  url
}))
export default function HomePage() {
 
  return (
    <main className="">
  <div className="flex flex-wrap gap-4">
{
 [...mockImages,...mockImages,...mockImages].map((image)=>(

      <div key={image.id} className="w-48">
        <img src={image.url} alt={`Image ${image.id}`} />
      </div>

  ))
}
  </div>
    </main>
  );
}
