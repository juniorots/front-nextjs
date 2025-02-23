"use client";

import { useState, useRef } from "react";
import apiClima from '../components/api-clima';

export default function Tempo() {
    const [cidade, setCidade] = useState("");
    const [temperatura, setTemperatura] = useState("");
    const cidadeRef = useRef<HTMLInputElement>(null);

    async function tratarCidade() {
        if (!cidade) {
            alert("Cidade Obrigatório")
            return 
        } 
        try {
            const response = await apiClima(cidade);
            setTemperatura(`${response.main.temp} °C`);
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
    function limpar() {
        setCidade("");
        setTemperatura("");
        if (cidadeRef.current)
            cidadeRef.current.focus();
    }

    return (
        <div className="-mt-12 ml-4 flex flex-col gap-4 max-w-sm">
            <h1 className="text-xl font-bold">Clima & Tempo</h1>
            <input 
                name="cidade" 
                value={cidade}
                ref={cidadeRef}
                onChange={(e)=> setCidade(e.target.value)}
                placeholder="Digite a Cidade"
                className="p-2 border rounded"
            />
            <input 
                name="temperatura" 
                value={temperatura}
                readOnly
                placeholder="Temperatura"
                className="p-2 border rounded"
            />
            <span className="text-xs font-bold">
                NOTA: Demais campos omitidos devido ao contexto de POC...
            </span>
            <div className="acoes flex flex-row">
                <button 
                    onClick={() => tratarCidade()}
                    className="bg-green-500 text-white p-2 rounded"
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