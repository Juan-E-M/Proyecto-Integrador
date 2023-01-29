import React from "react";
import { screen, render } from "@testing-library/react";
import { getBasketTotal } from "../reducer";
import {Modal1} from "../Components/Modals/Modal1";

const item = [
    {id: 4, nombre: 'Aspiradora de Mano', 
    img1: 'https://tramontinastorepe.vteximg.com.br/arquivos/…s/841962/42345060PNM001B.jpg?v=638004349681670000', 
    precio: 119, categoria: 'Hogar'},
    {id: 4, nombre: 'Aspiradora de Mano', 
    img1: 'https://tramontinastorepe.vteximg.com.br/arquivos/…s/841962/42345060PNM001B.jpg?v=638004349681670000', 
    precio: 100, categoria: 'Hogar'}
]

describe("Obtener el precio total",()=>{
    test("Obtener el total de productos",()=>{
        expect(getBasketTotal(item)).toBe(219)
    })
})

describe("No hay productos",()=>{
    test("Mensaje de cesta vacía",()=>{
        expect(getBasketTotal([])).toBe(console.log('Tu cesta está vacía'))
    })
})


























/*
const[{basket}, dispatch] =useStateValue();
const basket_operations =(a)=>{
    if (a == actionTypes.ADD_TO_BASKET){
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            item: {
                id:item.id,
                nombre: item.nombre,
                img1: item.img1,
                precio: parseFloat(item.precio),
                categoria:item.categoria,
                descripcion: item.descripcion
            }
        })
    }else if(a == actionTypes.REMOVE_ITEM){
        dispatch({
            type:actionTypes.REMOVE_ITEM,
            id: item.id
        })
    }else if (a == actionTypes.CLEAN_BASKET){
        dispatch({
            type:actionTypes.CLEAN_BASKET,
          })
    }else{

    }
}

const value = {id: 5, nombre: 'Aspiradora de Mano', 
img1: 'https://tramontinastorepe.vteximg.com.br/arquivos/…s/841962/42345060PNM001B.jpg?v=638004349681670000', 
precio: 100, categoria: 'Hogar'}
describe("Obtener el precio total",()=>{
    test("Obtener el total de productos",()=>{
        expect(reducer(item,"ADD_TO_BASKET" )).toBe(item)
    })
})

*/


