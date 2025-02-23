"use client";

import { useState, useRef } from "react";
import apiCep from "../components/api-cep";

export default function Cep() {

    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const cepRef = useRef<HTMLInputElement>(null);

    async function tratarCep() {
        if (!cep) {
            alert("CEP Obrigatório")
            return 
        } 
        try {
            const response = await apiCep.get(`${cep}/json/`);
            setLogradouro(response.data.logradouro);
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
    function limpar() {
        setCep("");
        setLogradouro("");
        if (cepRef.current)
            cepRef.current.focus();
    }

    return (
        <div className="-mt-12 ml-4 flex flex-col gap-4 max-w-sm">
            <h1 className="text-xl font-bold">Consulta de CEP</h1>
            <input 
                name="cep" 
                value={cep}
                ref={cepRef}
                onChange={(e)=> setCep(e.target.value)}
                placeholder="Digite o CEP"
                className="p-2 border rounded"
            />
            <input 
                name="logradouro" 
                value={logradouro}
                readOnly
                placeholder="Logradouro"
                className="p-2 border rounded"
            />
            <span className="text-xs font-bold">
                NOTA: Demais campos omitidos devido ao contexto de POC...
            </span>
            <div className="acoes flex flex-row">
                <button 
                    onClick={() => tratarCep()}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Consultar
                </button>
                <button
                    onClick={() => limpar()}
                    className="bg-gray-500 text-white p-2 rounded ml-5"
                >
                    Limpar
                </button>
            </div>
        </div>
    );
}