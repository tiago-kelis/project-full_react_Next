import { Produto } from '@gam3r/core'
import Image from 'next/image'
import Especificacoes from './Especificacoes'

export interface InformacoesProdutoProps {
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props
    return produto ? (
        <div className="flex items-center bg-violet-dark rounded-xl p-10 max-w-5xl max-h-80 px-10 ">
            <div className="flex-1 relative flex justify-center h-72">
                <Image
                    src={produto.imagem!}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do Produto"
                />
            </div>
            <Especificacoes produto={produto!} />
        </div>
    ) : null
}
