
import {Produto} from "@/core"
import Link from "next/link"

export default interface ProdutoItemProps {
    produto: Produto
}

export  function ProdutoItem(props: ProdutoItemProps) {

    const {produto} = props

    return <Link
    
    href={`/produto/${props.produto.id}`}
    className="flex flex-col bg-violet-dark border border-zinc-500"
    
    >{produto.nome}
  
    
    </Link>  

    
}