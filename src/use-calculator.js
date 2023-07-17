import { useState } from 'react';
  export const useCalculator = () =>{// hook은 use로 시작되어야 한다.
  const [Input, setInput] = useState(0); // 2 ->14-> null
  const [currentOperator, setCurrentOperator] = useState(null);// + ->null
  const [result, setResult] =  useState(null);// 12 ->14
  const [tempInput,setTempinput] = useState(null);// 2
  const [tempOperator,setTempOperator] = useState(null); //+
  const [isClickedOperator,setClickedOperator] = useState(false);
  const [isClickedEqual,setClickedEqual] = useState(false);
  const hasInput =  !!Input;// 어떤값을 boolean값으로 변환하기 위해서는 !!를 사용한다.

const onPressNum = (num) =>{
  if (currentOperator && isClickedOperator) {
    setResult(Input);
    setInput(num);
    setClickedOperator(false);
  }
  else{
  const newInput = Number(`${Input}${num}`)
  setInput(newInput);
  }
  
}
const onPressReset = ()=>{
  if (hasInput) {
    setInput(0);
  }
  else{
    setInput(0);
    setCurrentOperator(null);
    setResult(null);
    setTempinput(null);
    setTempinput(null);
  }
  
  

}
const OnOperator =(operator)=>{
  if (operator!=='=') {
    setClickedEqual(false)
    setCurrentOperator(operator);
    setClickedOperator(true);
  }
  else{
    let finalresult =  result;
    const finalInput = isClickedEqual ? tempInput:Input;
    const finalOperator = isClickedEqual ? tempOperator:currentOperator;
    switch (finalOperator) {
      case '+':
        finalresult =result +finalInput;
        break;
      case '-':
        finalresult =result -finalInput;
        break;
      case '*':
        finalresult =result -finalInput;
        break;      
      case '/':
        finalresult =result /finalInput;
        break;
      default:
        break;
    }
    setResult(finalresult);
    setInput(finalresult);
    setTempinput(finalInput);
    setCurrentOperator(null);
    setClickedEqual(true);
    setTempOperator(finalOperator);
  }
}
 return {
  Input,
  currentOperator,
  result,
  tempInput,
  tempOperator,
  hasInput,
  onPressNum,
  onPressReset,
  OnOperator
  

 };
}
