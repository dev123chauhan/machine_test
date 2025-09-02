import howitworksImg from "../assets/howitworks.png";
export default function NotFound() {
  return (
    <div className="text-center featuresBanner secondaryColor mb-5">
         <h1 className="display-1 primaryColor fw-bold">404</h1>
         <h1 className="display-1 textColor fw-bold">Page not found</h1>
         <img src={howitworksImg} alt="" className="mb-5" />
         </div>
  );
}
