import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react";
import Logo from "../shared/Logo";


export default function Footer() {
    return (
      <footer className="flex flex-col bg-black/30 text-zinc-500 mt-10">

        <div className="h-px bg-gradient-to-r from-violet-600/20 to-violet-600/80 via-violet-600/20"></div>

        <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center">
                    <Logo/>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2"></span>
                        <span className="text-sm">Nossa História</span>
                        <span className="text-sm">Políticas de Privacidade</span>
                        <span className="text-sm">Termos de Uso</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl text-zinc-500 p-2">Contato</span>
                        <span className="text-sm">suport@gam3r.store</span>
                        <div className="text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500"/>
                            <span>Whatssap</span>
                        </div>
                    </div>

                </div>
                <div className="flex  flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2">
                        <IconBrandYoutube size={28} stroke={1}/>
                        <IconBrandInstagram size={28} stroke={1}/>
                        <IconBrandFacebook size={28} stroke={1}/>
                        <IconBrandLinkedin size={28} stroke={1}/>
                    </div>
                    <div className="flex flex-col md:flex-row text-sm text-gray-500">
                        <div className="">
                            <span>Feito com</span>
                            <span>❤️</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden md:inline-block"></span>
                        <span>&copy; Todos os diretos Resevados</span>

                    </div>

                </div>

            </div>

      </footer>
    )
}