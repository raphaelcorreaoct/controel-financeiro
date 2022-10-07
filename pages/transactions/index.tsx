import { NextPage } from "next";
import React from "react";
import CurrencyCard from "../../components/Cards/CurrencyCard";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import TableRow from "../../components/Table/TableRow";
import withPrivatePage from "../../hook/usePrivatePage";
import { PrimaryButton } from "./../../components/Buttons/Buttons";

const MOCK = [
  {
    transactionName: "Mercado",
    category: "Alimentação",
    value: 100,
    id: "1",
  },
  {
    transactionName: "Mercado",
    category: "Alimentação",
    value: 100,
    id: "2",
  },
  {
    transactionName: "Mercado",
    category: "Alimentação",
    value: 100,
    id: "3",
  },
];

const Transactions: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Header />
      <main className="h-screen">
        <div className="container px-6 py-12 h-full m-auto">
          <div className="flex-col md:flex-row flex-row flex justify-between align-middle my-10 ">
            <CurrencyCard label="Saldo atual" value="R$ 1.000,00" />
            <CurrencyCard label="Receita" value="R$ 800,00" />
            <CurrencyCard label="Despesas" value="R$ 800,00" />
          </div>

          <div className="flex-row flex justify-between align-middle my-10">
            <PrimaryButton onClick={toggleModal}>
              Adicionar Transação
            </PrimaryButton>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Transação
                  </th>

                  <th scope="col" className="py-3 px-6">
                    Categoria
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Valor
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Editar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {MOCK.map((item, index) => (
                  <TableRow
                    {...item}
                    key={`${item.transactionName}__${index}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modal isOpen={modalIsOpen} toggleModal={toggleModal} />
      </main>
    </>
  );
};

export default withPrivatePage(Transactions);
