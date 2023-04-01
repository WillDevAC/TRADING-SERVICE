import React, { useEffect, useState } from "react";

import Layout from "../../components/layout/home";
import Panel from "../../components/home/panel";
import Notification from "../../components/home/Notification";

import {
  GraySelect,
  BtnContainer,
  Option,
} from "../../template/buttons/secondary";

import { InputDate } from "../../template/inputs/default";

import {
  ExtractPagination,
  ExtractPaginationButtonPrev,
  PrevIcon,
  ExtractPaginationNumber,
  NextIcon,
} from "../../template/extract/styles";
import { toast } from "react-nextjs-toast";
import data from "../../json/extract.json";
import { api } from "../../services/api";
import dayjs from "dayjs";

interface IStatement {
  id: string;
  amount: number;
  oldAmount: number;
  createdAt: string;
  type: {
    id: string;
    description: string;
  };
}
interface ITypes {
  id: string;
  description: string;
}

const extract: React.FC = () => {
  const [types, setTypes] = useState<ITypes[] | null>(null);
  const [count, setCount] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [skip, setSkip] = useState(0);
  const [typeId, setTypeId] = useState<string>("");
  const [statement, setStatement] = useState<IStatement[]>([]);

  const getTypes = async () => {
    const response = await api.get("/statement/types", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@token"),
      },
    });
    if (!!response?.data) {
      setTypes(response.data);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  const getData = async () => {
    const response = await api.get(
      `/statement?typeId=${typeId}&take=5&skip=${skip}&date=${date}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      }
    );
    if (!!response?.data) {
      setStatement(response.data.data);
      setCount(response.data.count / 5);
    } else {
      toast.notify(response.data?.message, {
        title: "error",
      });
    }
  };

  useEffect(() => {
    if (typeof window != undefined) {
      getTypes();
    }
  }, [typeof window]);

  useEffect(() => {
    if (typeof window != undefined) {
      getData();
      console.log(typeId);
    }
  }, [typeof window, typeId, skip, date]);

  const tranlate = (e: string, isPlural?: boolean) => {
    if (e == "deposit") return String("Depósito" + (!!isPlural ? "s" : ""));
    if (e == "reward") return String("Rendimento" + (!!isPlural ? "s" : ""));
    if (e == "withdraw") return String("Saque" + (!!isPlural ? "s" : ""));
    return "";
  };
  return (
    <Layout type="default">
      <Panel titleHeader="Extrato" urlBackButton="/home">
        <BtnContainer>
          <GraySelect
            onClick={(e) => {
              setTypeId(e.target.value);
            }}
          >
            <Option value="" onClick={() => setTypeId("")} disabled>
              Filtrar
            </Option>
            <Option value={""}>Todos</Option>
            {!!types &&
              types?.map((res) => {
                return (
                  <Option key={res.id} value={res.id}>
                    {tranlate(res.description, true)}
                  </Option>
                );
              })}
          </GraySelect>

          <InputDate
            onSelect={(e) => {
              if(!!e.target.value){
                setDate(!!e.target.value ? dayjs(e.target.value, "YYYY-MM-DD").toDate().toDateString() : '')
              }
            }}
            type="date"
          ></InputDate>
        </BtnContainer>

        {!!statement &&
          statement?.map((item) => (
            <Notification
              key={item.id}
              Title={tranlate(item.type.description, false)}
              Image={"images/ellipsegreen.png"}
              Date={dayjs(item.createdAt).format("DD/MM/YYYY").toString()}
              Time={dayjs(item.createdAt).format("h:mm A").toString()}
              Value={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount - item.oldAmount)}
              amount={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount)}
            />
          ))}

        <ExtractPagination>
          <ExtractPaginationButtonPrev
            onClick={() => {
              if (skip >= 1) {
                setSkip(skip - 1);
              }
            }}
          >
            <PrevIcon />
          </ExtractPaginationButtonPrev>

          {count >= 2 && (
            <>
              <ExtractPaginationNumber>{skip + 1}</ExtractPaginationNumber>
              <ExtractPaginationNumber onClick={() => setSkip(count - 1)}>
                {count}
              </ExtractPaginationNumber>
            </>
          )}

          {count < 2 && (
            <>
              <ExtractPaginationNumber>1</ExtractPaginationNumber>
            </>
          )}

          <ExtractPaginationButtonPrev
            onClick={() => {
              if (skip < count - 1) {
                setSkip(skip + 1);
              }
            }}
          >
            <NextIcon />
          </ExtractPaginationButtonPrev>
        </ExtractPagination>
      </Panel>
    </Layout>
  );
};

export default extract;
