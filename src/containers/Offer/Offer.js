import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import axios from "axios";
import {useLocation } from "react-router";

export const Offers = () => {
  const url = "https://staging.fastor.in/v1/m/restaurant?city_id=118&&";

  const [data, setData] = useState();

  const location = useLocation();
  const{state}= location


  const getData = async () => {
    await axios({
      method: "get",
      url: url,
      data: {},
      headers: { Authorization: `Bearer ${state}` },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container flex flex-col mx-auto ">
      <div className="flex justify-between py-6  w-full ">
        <div>
          <h3 className="text-btnColor text-xl font-semibold ">
            Connaught place
          </h3>
        </div>
        <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div
        className="flex flex-wrap   flex-row justify-between"
   
      >
        
        {data?.map((item, ind) => {
          return <Card item={item} key={ind}  />;
        })}
      </div>
    </div>
  );
};
