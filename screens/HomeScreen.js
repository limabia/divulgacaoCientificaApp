import React from 'react';
import {
    Text,
    View,
    Dimensions,
    ScrollView,
    Image,
} from 'react-native';
import homeStyle from '../assets/css/home.js';
import Layout from '../constants/Layout.js';
import { LineChart, Grid, XAxis } from 'react-native-svg-charts';
import Colors from "../constants/Colors";
import { Circle, G, Line, Rect} from 'react-native-svg';
const contentInsetXAxis = { top: 10, bottom: 10, left: 20, right: 20 };
const contentLineCharts = { top: 2, bottom: 2, right: 5, left: 5 };
const CustomGrid = ({ x, data}) => (
    <G>
        {
            data.map((_, index) => (
                <Line
                    key={ index }
                    y1={ '0%' }
                    y2={ '100%' }
                    x1={ x(index) }
                    x2={ x(index) }
                    stroke={ Colors.C3 }
                />
            ))
        }
    </G>
);
const data = [
    {
        value: 0,
        label: 'OUT',
    },
    {
        value: 10,
        label: 'NOV',
    },
    {
        value: 8,
        label: 'DEZ',
    },
    {
        value: 2,
        label: 'JAN',
    },
    {
        value: 30,
        label: 'FEV',
    },
    {
        value: 9,
        label: 'MAR',
    },
];
const dataTeste = [0,10,8,2,30,9];
const data2 = [
    {
        value: 5,
        label: 'OUT',
    },
    {
        value: 15,
        label: 'NOV',
    },
    {
        value: 4,
        label: 'DEZ',
    },
    {
        value: 10,
        label: 'JAN',
    },
    {
        value: 3,
        label: 'FEV',
    },
    {
        value: 9,
        label: 'MAR',
    },
    {
        value: 12,
        label: 'ABR',
    },
    {
        value: 3,
        label: 'MAI',
    },
];
const data3 = [
    {
        value: 10,
        label: 'OUT',
    },
    {
        value: 8,
        label: 'NOV',
    },
    {
        value: 7,
        label: 'DEZ',
    },
    {
        value: 14,
        label: 'JAN',
    },
    {
        value: 12,
        label: 'FEV',
    },
    {
        value: 10,
        label: 'MAR',
    },
    {
        value: 12,
        label: 'ABR',
    },
    {
        value: 11,
        label: 'MAI',
    },
];
const svgazul = { stroke: Colors.azul, strokeWidth: 3, paddingTop:30, paddingBottom: 30};
const svgEsmeralda = { stroke: Colors.esmeralda, strokeWidth: 3, paddingTop:30, paddingBottom: 30};
const svgVermelho = { stroke: Colors.vermelho, strokeWidth: 3, paddingTop:30, paddingBottom: 30};
export default class HomeScreen extends React.Component {

    render() {
        const Decorator = ({ x, y }) => {
            return dataTeste.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index)}
                    cy={ y(value)}
                    r={ 4 }
                    stroke={ Colors.azul }
                    fill={ Colors.azul }
                />
            ))
        }

        return (
            <ScrollView style={homeStyle.container}>
                <View style={[homeStyle.box, Layout.center, Layout.mb15]}>
                    <Image style={[homeStyle.logo, homeStyle.containerLogo]}
                           source={require('../assets/images/robot-dev.png')}/>
                </View>
                <View style={[homeStyle.boxChart, Layout.mb15]}>
                    <View style={[Layout.mb15, Layout.row]}>
                    <Text style={[homeStyle.textQuantidadeProcessos]}>45</Text>
                    <Text style={[homeStyle.textInformativo]}>Processos abertos</Text>
                    </View>
                    <LineChart
                        style={ { height: 130}}
                        data={data}
                        yAccessor={({ item }) => item.value}
                        contentInset={contentLineCharts}
                        svg={svgazul}
                    >
                        <CustomGrid belowChart={true}/>
                        {/*<Tooltip/>*/}
                        <Decorator/>
                    </LineChart>
                    <XAxis
                        spacingOuter={3}
                        spacingInner={0.01}
                        data={data}
                        yAccessor={({ index }) => index}
                        contentInset={contentInsetXAxis}
                        formatLabel={(_, index) => data[ index ].label}
                        svg={{fill: Colors.C3, fontSize: 11}}
                        style={Layout.XAxisMargin}
                    />
                </View>
                <View style={[homeStyle.boxChart, Layout.mb15]}>
                    <View style={[Layout.mb15, Layout.row]}>
                        <View>
                            <Text style={[homeStyle.textQuantidadeProcessos]}>45</Text>
                            <Text style={[homeStyle.textInformativo]}>Processos abertos</Text>
                        </View>
                        <View>
                            <Text style={[homeStyle.textQuantidadeProcessos]}>45</Text>
                            <Text style={[homeStyle.textInformativo]}>Processos abertos</Text>
                        </View>
                    </View>
                    <LineChart
                        style={ { height: 100}}
                        data={data3}
                        yAccessor={({ item }) => item.value}
                        contentInset={{ top: 4, bottom: 4 }}
                        svg={svgEsmeralda}
                    >
                        {/*<Tooltip/>*/}
                        <CustomGrid belowChart={true}/>
                    </LineChart>
                    <LineChart
                        style={[{ height: 100, marginTop: -100}]}
                        data={data2}
                        yAccessor={({ item }) => item.value}
                        contentInset={{ top: 2, bottom: 2 }}
                        svg={svgVermelho}
                    />
                    <XAxis
                        spacingOuter={3}
                        spacingInner={0.01}
                        data={data}
                        yAccessor={({ index }) => index}
                        contentInset={{ top: 10, bottom: 10, left: 20, right: 20 }}
                        formatLabel={(_, index) => data[ index ].label}
                        svg={{
                            fill: Colors.C3,
                            fontSize: 11,
                        }}
                        style={Layout.XAxisMargin}
                    />
                </View>
            </ScrollView>
        );
    }
}