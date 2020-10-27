import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);


function LongText ({label, content='-'}) {
    const [isExpanded, setExpanded] = useState(false)
    
    

    return(
        <View style ={StyleSheet.line}>
            <Text style ={[styles.cell,
                styles.label,
                label.length > 8 ? styles.longLabel : null
            ]}>{label}</Text>
            <TouchableWithoutFeedback onPress = {() => {
                setExpanded({isExpanded:!isExpanded})
            }}>
                <View>
                <Text style = {[
                    styles.cell, 
                    styles.content,
                    isExpanded ? styles.expanded : styles.colapsed
                ]}>{content}</Text>
                </View>
            </TouchableWithoutFeedback>
            
            
        </View>
    );
} 

const styles = StyleSheet.create({
    line:{
       
       paddingTop: 3,
       paddingBottom: 3,
     

       
    },
    cell: {
       paddingLeft: 5,
       fontSize: 18,
       
    },
    label: {
        color: '#fff',
        fontWeight: 'bold',
        flex: 1,
        paddingBottom: 6,
        
    },
    content: {
        color: '#fff',
        fontSize: 14,
        flex: 3
    },
    longLabel: {
        fontSize: 16
    },
    colapsed: {
        maxHeight: 75
    },
    expanded: {
        flex: 1
    }
})

export default LongText;