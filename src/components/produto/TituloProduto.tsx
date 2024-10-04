import { Produto } from "@gam3r/core"


export interface TituloProdutoProps {
    produto: Produto
}

export default function TituloProduto(props: TituloProdutoProps) {

    const {produto} = props

    return (

        <div className="flex flex-col">
            <div className="text-2xl">{produto?.nome}</div>
            <div className="font-light text-zinc-500">{produto?.descricao}</div>

        </div>
        
    )
}