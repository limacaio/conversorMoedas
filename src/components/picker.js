import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function PickerUI (){

    const [moedaSelecionada, setMoedaSelecionada] = useState();
    return (
         <Picker
             selectedValue={moedaSelecionada}
             onValueChange={(itemValue, itemIndex) =>setMoedaSelecionada(itemValue)}
         >
             <Picker.Item key={0} value={'USD'} label={'USD'} />
             <Picker.Item key={1} value={'EUR'} label={'EUR'} />
 
         </Picker>
    );
}