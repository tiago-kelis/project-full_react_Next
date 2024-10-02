/* eslint-disable @typescript-eslint/no-unused-vars */

import Link from "next/link"
import Logo from "../shared/Logo"
import IconCarrinho from "../shared/IconCarrinho"



export default function Header() {

    // const {qtdeItens} = useCarrinho()
    const qtdeItens = 0
    
    return (

        <div className="flex flex-col h-20" 

        style={{
            background: 'linear-gradient(90deg, #14002d 0%, #1d131f)'
        }}
        
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <Link href="/checkout/carrinhp">
                        <IconCarrinho qtdeItens={qtdeItens}/>
                    </Link>

                </div>
            </div>           

        </div>

    )
}