"use client";

import { useState, useRef } from "react";

export default function Contato() {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [arquivo, setArquivo] = useState<File | null>(null);
    const nomeCompletoRef = useRef<HTMLInputElement>(null);

    function tratarForm(event: React.FormEvent) {
        event.preventDefault();
        console.log(`Dados >>>>`);
        console.log(`Nome Completo:  ${nomeCompleto}`);
        console.log(`Arquivo:  ${arquivo?.name}`);
    }

    function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            if (file.type !== "application/pdf") {
                alert("Somente PDF!")
                event.target.value = "";
                return;
            }
            setArquivo(file);
        }
    }

    function limpar() {
        setNomeCompleto("");
        setArquivo(null);
        if (nomeCompletoRef.current)
            nomeCompletoRef.current.focus();
    }

    return (
        <div className="-mt-12 ml-4 flex flex-col gap-4 max-w-sm">
            <h1 className="text-xl font-bold">Contato</h1>
            <form onSubmit={tratarForm}>
                <input 
                    name="nomeCompleto" 
                    value={nomeCompleto}
                    ref={nomeCompletoRef}
                    onChange={(e)=> setNomeCompleto(e.target.value)}
                    placeholder="Digite o Nome Completo"
                    className="p-2 border rounded"
                />
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFile}
                    className="p-2 border rounded mt-4"
                />
                <span className="text-xs font-bold mt-2 mb-5">
                    NOTA: Demais campos omitidos devido ao contexto de POC...
                </span>
                <div className="acoes flex flex-row">
                <button 
                    type="submit"
                    className="bg-yellow-500 text-white p-2 rounded"
                >
                    Cadastrar
                </button>
                <button
                    onClick={() => limpar()}
                    className="bg-gray-500 text-white p-2 rounded ml-5"
                >
                    Limpar
                </button>
            </div>
            </form>
        </div>
    );
}
