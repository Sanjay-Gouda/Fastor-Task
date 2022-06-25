import { useLocation, useNavigate } from "react-router-dom";
import Stars from "../../assests/stars.svg";

export const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const { state } = location;
  console.log(state);
  const { images } = state;

  const handleClick = () => {
    navigate("/imageScreen", { state: { url: images[0].url } });
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div>
          <img
            src={images[0].url}
            onClick={handleClick}
            className="w-full"
            style={{ height: 400 }}
          />

          <div className="mt-5">
            <div className="mb-4">
              <p className="font-bold text-xl mb-2  ">Lazy Bear</p>
              <p className="text-lg text-gray-500">
                Cake pastry,Pastas, Connaught place,New delhi
              </p>

              <div className=" mt-4  flex flex-col justify-between">
                <div>
                  {/* <Stars style={{color:'#FFC833'}}/> */}
                  <img src={Stars} />
                </div>
                <p className="taxt-btnColor font-bold text-xl">$200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
