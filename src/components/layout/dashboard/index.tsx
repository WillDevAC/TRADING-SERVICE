import React from "react";

import {
  Main,
  ContainerDashboard,
  TitleDashboard,
  TitleDashboardContent,
  ContentIcon,
} from "./styles";

import HeaderDashboard from "../../dashboard/header";
import Aside from "../../dashboard/aside";

import { IoMdArrowBack } from "react-icons/io";

interface Props {
  title: string;
  isBackButton?: boolean;
  urlBackButton?: string;
}

import Link from "next/link";

const dashboard: React.FC<Props> = ({
  children,
  title,
  isBackButton,
  urlBackButton,
}) => {
  return (
    <>
      <HeaderDashboard />
      <Aside />
      <Main>
        <ContainerDashboard>
          <TitleDashboardContent>
            {isBackButton && (
              <Link href={urlBackButton}>
                <ContentIcon>
                  <IoMdArrowBack />
                </ContentIcon>
              </Link>
            )}
            <TitleDashboard>{title}</TitleDashboard>
          </TitleDashboardContent>
          {children}
        </ContainerDashboard>
      </Main>
    </>
  );
};
export default dashboard;
