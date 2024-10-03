import BannerCompra from "@/components/produto/BannerCompra"
import InformacoesProduto from "@/components/produto/InformacoesProduto"
import ProdutoNaoEmcontrado from "@/components/produto/ProdutoNaoEmcontrado"
import TituloProduto from "@/components/produto/TituloProduto"
import Pagina from "@/components/template/Pagina"
import { Produtos } from "@/core"



export default function PaginaProduto(props: any) {

    const id = +props.params.id
    const  produto = Produtos.find((produto) => produto.id === id)

    return produto ? (
        <Pagina>          
            
        <div className="flex flex-col gap-20 container py-10">
           <div className="flex flex-col gap-10">
                <TituloProduto produto={produto}/>
                <InformacoesProduto produto={produto}/>
                <BannerCompra produto={produto}/>

            </div>
           
        </div>
        
        </Pagina>

    ): (
        <Pagina>
            <ProdutoNaoEmcontrado/>
        </Pagina>
    )
}