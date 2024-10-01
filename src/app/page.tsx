import { ProdutoItem } from "@/components/produto/ProdutoItem";
import { Produtos } from "@/core";



export default function Home() {
  return (
    <div className="grid grid-cols-4 container">

      {Produtos.map((produto) => (

           <ProdutoItem key={produto.id} produto={produto}/>

      ))}

    </div>
   
  );
}
