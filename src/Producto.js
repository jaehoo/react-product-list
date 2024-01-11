import { Card, Button } from 'react-bootstrap/';
import Location from './Location';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
import { useState } from 'react';


export default function Producto(props) {

    let {productId} = useParams();
    

    const producto = props.products[productId];
    const navigate = useNavigate();

    function handleClick(){
        
        props.handleLoad(true);
        navigate('/');
        props.handleLoad(false);
    }

    return (

        <div>
            <Header/>
            
            <Location />
            <Card>
                
                <Card.Body>
                    <Card.Title id='titulo'>{producto.title}</Card.Title>
                    <Card.Text className='prod_det_attr'>
                    
                        <img id="prod_detail_img" src={producto.images[0]}/>
                    
                    
                        <label>Descripción:</label>
                        <span>{producto.description}</span>
                        <br/>
                        <label>Precio:</label>
                        <span>{producto.price} $</span>
                        <br/>
                        <label>Raiting:</label>
                        <span>{producto.rating}</span>
                        <br/>
                        <label>Stock:</label>
                        <span>{producto.stock}</span>
                    

                    </Card.Text>
                    <Button id='volver' variant="primary" onClick={handleClick} >Volver</Button>{' '}
                </Card.Body>
            </Card>


        </div>

    );

}