import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

export default function PickerUI(props) {

    return (
        <RNPickerSelect
            //placeholder={placeholder}
            onValueChange={(value) => props.onChange(value)}
            items={props.moedas}
        />
    );
}