import { CalcularParcelamento } from "@gam3r/core"


export default function UseParcelamento(valor: number, quantidade: number) {

    const parcelamento = new CalcularParcelamento().executar(valor, quantidade)

    return parcelamento

    
}