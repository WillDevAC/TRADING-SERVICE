import React, { useEffect, useState } from "react";
import { toast } from "react-nextjs-toast";
import Slider from "react-slick";
import { api } from "../../../services/api";
import Card from "../card";
import { settings } from "../../../utils/sliderConfig";
import { IDataSlide } from "../../../pages/home";
import dayjs from "dayjs";

interface SliderProps {}
const slider: React.FC<SliderProps> = (props) => {
  const [clock, setClock] = useState("");
  const [data, setData] = useState<IDataSlide[]>([
    {
      title_top: "Meu patrimonio ",
      title_bottom: "RENDIMENTOS DO DIA",
      value_top: "R$ 0.00",
      value_bottom: "0",
    },
    {
      title_top: "RENDIMENTO MENSAL",
      title_bottom: "ESTIMATIVAS MENSAL",
      value_top: "0",
      value_bottom: "0",
    },
    {
      title_top: "USUÁRIO",
      title_bottom: "CPF",
      value_top: "0",
      value_bottom: "0",
    },
  ]);
  const getInfo = async () => {
    const response = await api.get("/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (response.data?.rateRevenue == 0 || !!response.data?.rateRevenue) {
      const data0: IDataSlide[] = [
        {
          title_top: "Meu patrimonio ",
          title_bottom: "RENDIMENTOS DO DIA",
          value_top: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(response.data.patrimony),
          value_bottom: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(response.data.lastRevenue),
        },
        {
          title_top: "RENDIMENTO MENSAL",
          title_bottom: "ESTIMATIVAS MENSAL",
          value_top: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(response.data.monthReward),
          value_bottom: parseFloat(response.data.rateRevenue).toFixed(2) + "%",
        },
        {
          title_top: "USUÁRIO",
          title_bottom: "CPF",
          value_top: response.data.user.name,
          value_bottom: CPF(response.data.user.cpf),
        },
      ];
      setData(data0);
  
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
     
    }
  };
  useEffect(() => {
    if (typeof window != undefined) {
      getInfo();
    }
  }, [typeof window]);

  function CPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getHours()
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getHours = () => {
    var currentdate = new Date();
    const hours = currentdate.getHours();
    const min = currentdate.getMinutes();
    setClock(String(hours).padStart(2, '0') + ":" + String(min).padStart(2, '0') );
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((slider) => (
          <Card
            title_top={slider.title_top}
            title_bottom={slider.title_bottom}
            value_top={slider.value_top}
            value_bottom={slider.value_bottom}
          />
        ))}

        <Card
          title_top={"DATA DE HOJE"}
          title_bottom={"HORA ATUAL"}
          value_top={dayjs(new Date()).format("DD/MM/YYYY")}
          value_bottom={clock}
        />
      </Slider>
    </>
  );
};

export default slider;
