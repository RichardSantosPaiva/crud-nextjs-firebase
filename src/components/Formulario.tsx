import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                  texto="Código"
                  somenteLeitura
                   valor={id}
                   className="mb-5"
                />
            ): false}
            <Entrada
                 texto="nome" 
                 valor={nome}
                 valorMudou={setNome}
                 className="mb-5"
            />
            <Entrada 
                texto="idade"  
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
            />
            <div  className="flex justify-end mt-3">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                  {id ? "Alterar" : 'Salvar'} 
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}