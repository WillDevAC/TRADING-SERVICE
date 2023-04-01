import React, { useEffect, useState } from "react";
import Link from "next/link";

import Layout from "../../components/layout/home";
import Slider from "../../components/home/slider";
import Option from "../../components/home/option";
import { ContainerOptions, LinkBox } from "../../template/home/styles";

import Cards from "../../json/cards.json";
import { api } from "../../services/api";

interface IData {
  patrimony: number;
  lastRevenue: number;
  monthReward: number;
  rateRevenue: number;
  user: {
    id: string;
    email: string;
    name: string;
    cpf: string;
    rg: string;
    birthDate: string;
  };
}

export interface IDataSlide {
  title_top: string;
  title_bottom: string;
  value_top: string;
  value_bottom: string;
}
const HomePage: React.FC = () => {

  return (
    <>
      <Layout type="fixed">
        <Slider />

        <ContainerOptions>
          {Cards.map((card) => (
            <Link href={card.href}>
              <LinkBox>
                <Option
                  title={card.title}
                  icon={card.icon}
                  description={card.description}
                />
              </LinkBox>
            </Link>
          ))}
        </ContainerOptions>
      </Layout>
    </>
  );
};

export default HomePage;
