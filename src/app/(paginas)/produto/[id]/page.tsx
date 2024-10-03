import ProdutoNaoEmcontrado from "@/components/produto/ProdutoNaoEmcontrado"
import Pagina from "@/components/template/Pagina"
import { Produtos } from "@/core"



export default function PaginaProduto(props: any) {

    const id = +props.params.id
    const  produto = Produtos.find((produto) => produto.id === id)

    return produto ? (
        <Pagina>
            
        <div>
            <h1>Produto: {produto?.nome}</h1>
        </div>
        
        </Pagina>

    ): (
        <Pagina>
            <ProdutoNaoEmcontrado/>
        </Pagina>
    )
}