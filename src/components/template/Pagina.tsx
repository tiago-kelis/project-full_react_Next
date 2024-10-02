import Header from "./Header"
import Footer from "./Footer"



export interface PaginaProps {
    children: any
    className?: string
    notHeader?: boolean
    notFooter?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (

        <div className="flex flex-col min-h-screen" 
        style={{background: 'radial-gradient(50% 50% at 50% 50%, #2d0064' }}
        >
            <div className="flex-1 flex flex-col w-screen"
              style={{background: 'url("/")'}}
            >
                {!props.notHeader && <Header/>}
                
                <main className={`flex-1 flex flex-col ${props.className ?? ""}`}>
                    {props.children}
                </main>
                {!props.notFooter && <Footer/>}

            </div>

        </div>
    )
}