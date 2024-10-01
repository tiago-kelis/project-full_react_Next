import { Produtos } from "@/core"



export default function PaginaProduto(props: any) {

    const id = +props.params.id
    const  produto = Produtos.find((produto) => produto.id === id)

    return (

        <div>
            <h1>Produto: {produto?.nome}</h1>
        </div>

    )
}