import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {cliente,
         clientes,
          novoCliente,
          selecionarCliente,
          salvarCliente,
           excluirCliente,
           tabelaVisivel,
           exibirTabela
        } = useClientes()

  return (
    <div
      className="
         flex justify-center items-center h-screen 
        bg-gradient-to-r from-purple-500 to-blue-600
         "
    >
        <Layout titulo="Cadastro Simples">
          {tabelaVisivel ? (
              <>
              <div className="flex justify-end">
                <Botao cor="blue" className="mb-4" 
                onClick={novoCliente}>
                  Novo Cliente
                </Botao>
              </div>

              <Tabela clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
            </>

          ): (
            <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
            />
          )}

        </Layout>
    </div>
  );
}
