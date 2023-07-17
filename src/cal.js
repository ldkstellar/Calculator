import React from 'react';

import {View ,TouchableOpacity,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from "styled-components/native"// native 까지 import를 해줘야 한다.
import { useCalculator } from './use-calculator';

// Button type: 'reset' | 'operator' | 'num'
const oneBlockWidth = 80;
const Button = ({ text, onPress, flex, type,isSelected}) => {
    const backgroundColor  = type === 'reset'
        ? COLOR.RESET: type === 'operator' 
        ? COLOR.OPERATOR:type === 'num' 
        ? COLOR.NUM:'transparent'
    return (
     
    <TouchableOpacity
        
        onPress ={onPress} 
        style={{flex,backgroundColor,
        justifyContent:"center",
        alignItems:"center",
        height:50,
        width: oneBlockWidth * flex,
        borderWidth: isSelected? 1:0.2,
        borderColor:"black"}}>
      <Text style={{color:"white",fontSize:25}}>{text}</Text>  
    </TouchableOpacity>
  )
}

const COLOR = {
  RESULT: '#4e4c51',
  RESET: '#5f5e62',
  OPERATOR: '#f39c29',
  NUM: '#5c5674',
}

const ButtonContainer = styled.View`
flex-direction:row;
width:100%;
`;
const InputContainer = styled.View`
background-color:${COLOR.RESULT};
min-height: 50px;
justify-content: center;
align-items: flex-end;
padding:10px 5px;
`;

export default () => {
  // useState는 component 안에서 사용해야 한다.
  const { 
    Input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressReset,
    OnOperator
  } = useCalculator();//hook은 앞이use로 시작된다.

  return (  
    
    <View style={{flex:1,width:257,justifyContent:"center",}}>
      {__DEV__&&(
        <>
          <Text>input:{Input}</Text>
          <Text>currentOperator:{currentOperator}</Text>
          <Text>result:{result}</Text>
          <Text>tempInput:{tempInput}</Text>
          <Text>tempOperator:{tempOperator}</Text>        
        </>
      )}


      {/* 결과 */}
      <InputContainer>
        <Text style={{color:"white",fontSize:35,textAlign:"right"}}>{Input}</Text>
      </InputContainer>

      {/* [AC ~ /] */}
    <ButtonContainer> 
        <Button 
        type="reset"
        text={hasInput?'C':"AC"} 
        onPress={onPressReset}
        flex={3}/>

        <Button 
        type="operator"
        text="/" 
        onPress={()=> OnOperator('/')}
        isSelected={currentOperator=== '/'} 
        flex={1}/> 
    </ButtonContainer>       
            
      {/* [7 ~ x] */}
    <ButtonContainer>
      {[7,8,9].map((num,index) =>(// 맵함수를 활용하여 코드를 줄일 수 있다.
        <Button
        key={index} 
        type="num"
        text={`${num}`} 
        onPress={()=>onPressNum(num)}
        flex={1}/>
        ))}

        <Button 
        type="operator"
        text="*" 
        onPress={()=> OnOperator('*')}
        isSelected={currentOperator=== '*'} 
        flex={1}/>              
    </ButtonContainer>

    <ButtonContainer>
      {[4,5,6].map((num,index)=>(
        <Button
        key={index}
        type="num"
        text={`${num}`} 
        onPress={()=>onPressNum(num)}
        flex={1}/>))}

        <Button 
        type="operator"
        text="-" 
        onPress={()=> OnOperator('-')}
        isSelected={currentOperator=== '-'} 
        flex={1}/>              
        </ButtonContainer>    
    
    <ButtonContainer>
      {[1,2,3].map((num,index) =>(
        <Button
        key={index} 
        type="num"
        text={`${num}`} 
        onPress={()=>onPressNum(num)}
        flex={1}/>
        ))}

        <Button 
        type="operator"
        text="+"
        isSelected={currentOperator=== '+'} 
        onPress={()=> OnOperator('+')}
        flex={1}/>              
    </ButtonContainer>
       
    <ButtonContainer>
        <Button 
        type="num"
        text="0" 
        onPress={()=> onPressNum(0)}
        flex={3}/>

        <Button 
        type="operator"
        text="=" 
        onPress={()=> OnOperator('=')}
        flex={1}/>
    </ButtonContainer>     
</View>
  )
}