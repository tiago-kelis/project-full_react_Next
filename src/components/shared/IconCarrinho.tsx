import { IconShoppingCart } from "@tabler/icons-react"


export interface IconeCarrinhoProps {
    qtdeItens?: number
}

export default function IconCarrinho(props: IconeCarrinhoProps) {
    return (
        <div className="flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative">
            <IconShoppingCart size={30} stroke={1.3}/>  
            <div className="absolute top-2 right-2 bg-pink-500 rounded-full text-white text-xs font-semibold">
                {props.qtdeItens ?? 0}
            </div>          
        </div>
    )
}