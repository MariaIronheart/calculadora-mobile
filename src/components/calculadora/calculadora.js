import react, { useState } from "react";
import { StyleSheet, TextInput, View , Text, TouchableOpacity} from "react-native";
import styles from "./style";


const Calculadora = () => {
//definindo as constantes
    const [input, setInput]=useState('0')
    const [value, setValue]= useState('')

//função dos operadores
    function handleInput(value) {
        if (value === 'C') {
            setInput('0');  
        } else {
            setInput(input === '0' ? value : input + value);
        }
    }
//aqui lida com os erros como os n divididos por 0 
    const handleCalculate = () => {
        try {
            const result = eval(input);
            setInput(Number.isFinite(result) ? result.toString() : 'Erro');
        } catch (error) {
            setInput('Erro');
        }
    }

//definindo os botões da calculadora e seus argumentos
    const layout = [
        [{inputValue: '7', style: styles.button, handler: handleInput },
        {inputValue: '8', style: styles.button, handler: handleInput },
        {inputValue: '9', style: styles.button, handler: handleInput },
        {inputValue: '/',  displayText: '÷',style: styles.operatorButton, handler: handleInput },
    ],
        [{inputValue: '4', style: styles.button, handler: handleInput },
        {inputValue: '5', style: styles.button, handler: handleInput },
        {inputValue: '6', style: styles.button, handler: handleInput },
        {inputValue: '*', displayText: '×',style: styles.operatorButton, handler: handleInput },
    ],
        [{inputValue: '1', style: styles.button, handler: handleInput },
        {inputValue: '2', style: styles.button, handler: handleInput },
        {inputValue: '3', style: styles.button, handler: handleInput },
        {inputValue: '-', style: styles.operatorButton, handler: handleInput },
    ],
        [{inputValue: '0', style: styles.button, handler: handleInput },
        {inputValue: '.', style: styles.button, handler: handleInput },
        {inputValue: 'C', style: styles.button, handler: handleInput },
        {inputValue: '+', style: styles.operatorButton, handler: handleInput },
        ],

        [{inputValue: '=', style:styles.calculateButton, handler: handleCalculate}
        ]//esse é o botão de calcular que filtra possiveis erros como feito no handleCalculate
    ];


    return (//organização dos botões na tela
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline={false} style={styles.input} editable={false}>
                    {input}
                </TextInput>
                </View>
                <View style={styles.buttonContainer}>
                    {layout.map(rows => (   
                        <View style={styles.row}>
                            {rows.map(row => (
                                <TouchableOpacity 
                                key={row.inputValue}
                                style={row.style}
                                onPress={ () => row.handler(row.inputValue)}>
                                    <Text style={styles.buttonText}>    
                                        {row.displayText ? row.displayText : row.inputValue}
                                    </Text>

                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>


        </View>
    );
}


export default Calculadora;