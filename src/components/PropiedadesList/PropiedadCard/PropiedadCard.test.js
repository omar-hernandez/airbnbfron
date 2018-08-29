import React, {Component} from 'react';
import {shallow} from 'enzyme';

import PropiedadCard from './PropiedadCard';

describe("PropiedadCard",()=>{

    const propiedad = {
        nombre:"casa test",
        _id:"dfhdsjfhdsfakh",
        fotos:"https//hola.mx",
        precio:120,
        descripcion_corta:"holas",
        calificacion:[{estrellas:2},{estrellas:3}]
    }
    const component = shallow(<PropiedadCard propiedad={propiedad}/>)

    it("Debe renderear el nombre de la casa", ()=>{
        expect(component.find('h5.card-title').text()).toBe(propiedad.nombre)
    })

}) 