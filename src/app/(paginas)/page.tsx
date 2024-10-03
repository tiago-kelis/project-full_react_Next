
import { ProdutoItem } from "@/components/produto/ProdutoItem";
import Pagina from "@/components/template/Pagina";
import { Produtos } from "@/core";




export default function Home() {
  return (

    <Pagina>
       <div className="grid grid-cols-4 container gap-5 mt-10">
      
      {Produtos.map((produto) => (

      <ProdutoItem key={produto.id} produto={produto}/>

       ))}

</div>   

    </Pagina>

   
  )
}
