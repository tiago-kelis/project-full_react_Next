import { IconDevicesPcOff } from "@tabler/icons-react"
import Link from "next/link"


export interface ProdutoNaoEmcontradoProps {
    semBotaVoltar?: boolean
}

export default function ProdutoNaoEmcontrado(props: ProdutoNaoEmcontradoProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <IconDevicesPcOff size={180} stroke={0.5}/>
            <span className="text-violet-300 font-light">Produto não encontrado</span>

            {!props.semBotaVoltar && (
                <Link href="/" className="button bg-violet-300 text-white mt-5">
                    Voltar               
                
                </Link>
            )

            }

        </div>
    )
}