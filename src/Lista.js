import {  Row, Col } from 'react-bootstrap/';
import Tarjeta from './Tarjeta';

export default function Lista(props) {

    return (
        <div id="productosresultados">

            <Row xs={1} md={4} className="g-4">
                {props.products.map(item => (
                    <Col key={item.id}>
                        <Tarjeta title={item.title} description={item.description} image={item.images[0]} productId={item.id}/>
                    </Col>
                ))}

            </Row>

        </div>

    );

}