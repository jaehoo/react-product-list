import { Card, Button } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';

export default function Tarjeta(props) {

    const navigate = useNavigate();

    function handleClick(){
        const index= props.productId - 1;
        // console.log('index:' +index);
        navigate('/products/'+index);
    }
  

    return (
        <div className='unproducto' >
            <Card>
                <Card.Img variant="top" src={props.image} className='cardImg'/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary" onClick={handleClick} >Ver</Button>{' '}
                </Card.Body>
            </Card>
        </div>

    );

}