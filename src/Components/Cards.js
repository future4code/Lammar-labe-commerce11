import React, {useState} from "react";
import imagemChip from '../img/chip.png'
import { Container, ButtonEfetuarPagamento, DivCartaoApresentacao, DivCheckout, DivDados, DivDadosDoUsuario, DivLabelValidade, DivMeuCartao, DivNomeBandeira, DivNumeroCartao, DivValidade, DivValidadeCVV, InputCheckout, InputCVV, LabelCvv, Select, SelectMes } from '../Styled'
export default function Card(){
    const [inputName, setInputName]=useState("Nome do titular")
    const [inputNumber, setInputNumber]=useState("0000")
    const [inputNumberDois, setInputNumberDois]=useState("0000")
    const [inputNumberTres, setInputNumberTres]=useState("0000")
    const [inputNumberQuatro, setInputNumberQuatro]=useState("0000")
    const [inputCvv, setInputCvv]=useState("CVV")
    const [inputMes, setInputMes]=useState("Mês")
    const [inputAno, setInputAno]=useState("Ano")


    const handleInputName=(event)=>{
        setInputName(event.target.value);
    }
    const handleInputNumber=(event)=>{
        setInputNumber(event.target.value);
    }
    const handleInputNumberDois=(event)=>{
        setInputNumberDois(event.target.value);
    }
    const handleInputNumberTres=(event)=>{
        setInputNumberTres(event.target.value);
    }
    const handleInputNumberQuatro=(event)=>{
        setInputNumberQuatro(event.target.value);
    }
    const handleInputCvv=(event)=>{
        setInputCvv(event.target.value);
    }
    const handleInputMes=(event)=>{
        setInputMes(event.target.value);
    }
    const handleInputAno=(event)=>{
        setInputAno(event.target.value);
    }

    return(
        <Container>
            <DivCheckout>
                <h2>CHECKOUT SEGURO</h2>
                <DivMeuCartao>
                    <DivNomeBandeira>
                        <img src={imagemChip} alt="bandeira visa"/>
                        <span>{inputName}</span>
                    </DivNomeBandeira>

                    <DivCartaoApresentacao>
                        <span>{inputNumber}</span>
                        <span>{inputNumberDois}</span>
                        <span>{inputNumberTres}</span>
                        <span>{inputNumberQuatro}</span>
                    </DivCartaoApresentacao>

                    <DivValidadeCVV>
                        <DivLabelValidade>
                            <label>VALIDADE</label>
                            <DivValidade>
                                <span>{inputMes}</span>
                                <span>/</span>
                                <span>{inputAno}</span>
                            </DivValidade>
                        </DivLabelValidade>

                        <LabelCvv>
                            <label>CVV</label>
                            <span>{inputCvv}</span>
                        </LabelCvv>
                    </DivValidadeCVV>

                </DivMeuCartao>
                <DivDadosDoUsuario>
                    <span>Insira os dados do seu cartão:</span>

                    <DivDados>

                        <InputCheckout name="Nome" onChange={handleInputName} placeholder={inputName}></InputCheckout>

                        <DivNumeroCartao>
                            <InputCheckout type ="text" maxLength={4} name="Número" onChange={handleInputNumber} placeholder={inputNumber}></InputCheckout>
                            <InputCheckout type ="text" maxLength={4} name="Número" onChange={handleInputNumberDois} placeholder={inputNumberDois}></InputCheckout>
                            <InputCheckout type ="text" maxLength={4} name="Número" onChange={handleInputNumberTres} placeholder={inputNumberTres}></InputCheckout>
                            <InputCheckout type ="text" maxLength={4} name="Número" onChange={handleInputNumberQuatro} placeholder={inputNumberQuatro}></InputCheckout>
                        </DivNumeroCartao>
        
                        <div>
                            <SelectMes onChange={handleInputMes} id ="mês">
                                <option>Mês</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </SelectMes>
                            <Select onChange={handleInputAno} id="ano"> 
                                <option>Ano</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                            </Select>
                
                            <InputCVV type="text" maxLength={3} name="CVV" onChange={handleInputCvv} placeholder={inputCvv}></InputCVV>
                            
                        </div>

                        <ButtonEfetuarPagamento>Efetuar pagamento</ButtonEfetuarPagamento>


                    </DivDados>

                </DivDadosDoUsuario>
            </DivCheckout>
        </Container>
    )
}