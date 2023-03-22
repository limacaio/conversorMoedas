import React from "react";
import axios from "axios";

// https://economia.awesomeapi.com.br/json/
//last/USD-BRL --> rota das requisições



const api = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/json'
});

export default api;