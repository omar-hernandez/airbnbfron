import React, {Component} from 'react';
import PropiedadCard from './PropiedadCard/PropiedadCard';
import gql from 'graphql-tag';
import {Query} from 'react-apollo' ;


const GET_HOUSES = gql`
    query{
        allPropiedades{
            _id,
            nombre,
            descripcion_corta,
            fotos,
            precio,
            calificacion{
                estrellas
            }
        }

    }
`;

class PropiedadesList extends Component{

    constructor(props){
        super(props);
    }


    redirectDetail = (id) => (
        this.props.history.push(`/propiedad/${id}`)
    )

    renderHouses = () => (
        <Query query={GET_HOUSES}>
            { ({loading,error,data})=>{
                if(loading) return (<h4>Loading....</h4>);
                if(error) return (<h4>No hay casas</h4>);

                return(
                    <div className="row justify-content-center mt-5">
                        {data.allPropiedades.map((propiedad)=>(
                            <div className="col-md-3 col-lg-2">
                                <PropiedadCard propiedad={propiedad}
                                    redirect={this.redirectDetail}
                                />

                            </div>
                        ))}
                    </div>
                )
            }}

        </Query>
    )


    render(){
        return this.renderHouses();
    }


}

export default PropiedadesList;