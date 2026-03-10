import { useParams } from "react-router-dom";

import produtos from '../../data/produtos.json';

const ProdutoDetalhe = () =>{

    

    const { id } = useParams();

    const produto = produtos.find((p) => p.id === Number(id));

    if(!produto){
        return(
            <>
                <main className="flex-1 container mx-auto p-6">
                    <div className="grid grid-cols-1 gap-6">
                    
                        <h2 className="text-2xl font-semibold mb-2">Produto não encontrado</h2>
                    
                    </div>
                </main>
            </>
        )
    }
    return(
        <>
            <main className="flex-1 container mx-auto p-6">
                <div className="grid grid-cols-1 gap-6">
                
                    <h2 className="text-2xl font-semibold mb-2">{ produto.nome }</h2>
                    <p className="text-2xl font-light mb-2">{ produto.descricao }</p>
                
                </div>
            </main>
        </>
    )
}
export default ProdutoDetalhe;