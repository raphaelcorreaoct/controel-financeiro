import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import CurrencyCard from "../../components/Cards/CurrencyCard";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import TableRow from "../../components/Table/TableRow";
import { DataTransactionType } from "../../dataTypes";
import { useAuth } from "../../hook/useAuth";
import withPrivatePage from "../../hook/usePrivatePage";
import { getTransactions } from "../../services/apiService";
import { PrimaryButton } from "./../../components/Buttons/Buttons";

const Transactions: NextPage<{
  transactionsList: DataTransactionType[];
}> = () => {
  const { user } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [transactionsList, setTransactionsList] = useState<
    DataTransactionType[]
  >([]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      getTransactions(user?.uid).then((res) => {
        // setTransactionsList(res);
      });
    }
  }, []);

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
                {transactionsList.map((item, index) => (
                  <TableRow
                    category={item.category}
                    transactionName={item.description}
                    value={item.money.value}
                    id={item.uid}
                    key={`${item.description}__${index}`}
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

/*
 * TODO: Add a function to get the transactions from the API and pass it to the component as props with server side rendering
 */
// export async function getStaticProps() {
//   const transactionsList = await getTransactions(
//     "NrjEwaJUSngg337w00gM77AEyR52"
//   );

//   return {
//     props: {
//       transactionsList: transactionsList || [],
//     },
//   };
// }

export default withPrivatePage(Transactions);
