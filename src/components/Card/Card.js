import Stars from "../../assests/stars.svg";
// import { ReactComponent as Stars } from '../../assests/singleStar.svg'
import { useNavigate } from "react-router-dom";
export const Card = ({ item }) => {
  const { images, restaurant_name, rating, restaurant_mode, ...rest } = item;

  const navigate = useNavigate();

  const { restaurant_avg_rating } = rating;

  const handleClick = () => {
    navigate("/details", { state: item });
  };

  return (
    <div className="border-2 border-red-50 max-w-sm px-4 py-4 shadow-lg mb-8">
      <div className="max-w-sm rounded overflow-hidden" onClick={handleClick}>
        <div>
          <img
            class="w-full"
            src={images[0].url}
            alt="Sunset in the mountains"
          />
        </div>

        <div class=" py-4 ">
          <div className="mb-4">
            <p className="font-bold text-xl mb-2  ">Lazy Bear</p>
            <p className="text-sm text-gray-500">
              Cake pastry,Pastas, Connaught place,New delhi
            </p>
          </div>

          <div className="  flex flex-col justify-between">
            <div>
              {/* <Stars style={{color:'#FFC833'}}/> */}
              <img src={Stars} />
            </div>
            <p className="taxt-btnColor font-bold text-xl">$200</p>
          </div>
        </div>
      </div>
    </div>
  );
};
