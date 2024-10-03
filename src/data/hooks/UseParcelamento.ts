import { CalcularParcelamento } from "@/core"


export default function UseParcelamento(valor: number, quantidade: number) {

    const parcelamento = new CalcularParcelamento().executar(valor, quantidade)

    return parcelamento

    
}