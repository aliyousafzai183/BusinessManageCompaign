import React from "react";
import { View } from 'react-native';
import {RadioButtonStyle as styles} from '../../styles/components';

const RadioButton = ({ selected }) => {
    return (
        <View
            style={styles.main}
        >
            {selected ? (
                <View
                    style={styles.radio}
                />
            ) : null}
        </View>
    );
};

export default RadioButton;