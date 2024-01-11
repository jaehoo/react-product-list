import { Card, Button } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';


export default function NotFound(props) {

    const navigate = useNavigate();

    function handleClick() {
        props.handleLoad(true);
        navigate('/');
        props.handleLoad(false);
    }

    return <div >
        
        <Card id="info">

            <Card.Body>
                <Card.Title id='titulo'>404 not found</Card.Title>
                <Card.Text id='volver'>Ruta no encontrada</Card.Text>
                <Button id='volver' variant="primary" onClick={handleClick} >Volver</Button>{' '}
            </Card.Body>
        </Card>


    </div>
}