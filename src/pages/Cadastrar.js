import React from 'react';
import { WebView } from 'react-native-webview';

export default function Cadastrar() {
    return <WebView style={{ flex: 1 }} source={{ uri: 'https://buscadev.herokuapp.com' }} />
}