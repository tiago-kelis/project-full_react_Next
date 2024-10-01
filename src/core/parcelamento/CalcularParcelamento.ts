
import {QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL} from "../constants";
import Parcelamento from "./Parcelamento";

export default class CalcularParcelamento {

    executar (
        valor: number,
        qtdeParcela: number = QTDE_MAX_PARCELAS,
        taxaJuros: number = TAXA_JUROS_MENSAL
    ): Parcelamento {
        if(qtdeParcela < 2 || qtdeParcela > QTDE_MAX_PARCELAS) {

            throw new Error(`QUANTIDADE DE PARCELAS DEVE SER ENTRE 2 ${QTDE_MAX_PARCELAS}`);

        }

        const totalComJuros = this.calcularJurosCompostos(valor, taxaJuros, qtdeParcela)

        return {
            valorParcela: this.comDuasCasasDecimais(totalComJuros / qtdeParcela),
            valorTotal: this.comDuasCasasDecimais(totalComJuros),
            qtdeParcela,
            taxaJuros
        }
    }

    private calcularJurosCompostos(valorTotal: number, taxaMensal: number, qtdeParcela: number) {
        return valorTotal * Math.pow(1 + taxaMensal, qtdeParcela);
    }


    private comDuasCasasDecimais(valor: number): number {

        return Math.round(valor * 100) / 100;
        
    }

    

}