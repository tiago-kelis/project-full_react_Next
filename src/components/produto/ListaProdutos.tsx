import { Produtos } from "@/core";
import { ProdutoItem } from "./ProdutoItem";
import ProdutoNaoEmcontrado from "./ProdutoNaoEmcontrado";


export default function ListaProdutos() {

    return Produtos.length < 0 ? (

        <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        
        ">
            {Produtos.map((produto) => (
                <ProdutoItem produto={produto} key={produto.id}/>
            ))}

        </div>


    ):(
        <ProdutoNaoEmcontrado semBotaVoltar/>
    )
}