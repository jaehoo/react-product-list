import { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap/';
import Location from './Location';
import Form from 'react-bootstrap/Form';

export default function Formulario(props) {

    const [query, setQuery] = useState("");
    // const [category, setCategory] = useState("");
    const [categories]=useState(props.categories());

    function handleClick() {
        // console.log(query);
        props.filterByTitle(query);
    };

    function handleSelect(value){
        // console.log("selected:"+value);
        props.filterByCategory(value);
    }

    return (


        <div id='formulario'>
            <Location />
            <h2 id="catálogo">Catálogo</h2>

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Buscar</Card.Title>
                                <input type='text' id='filtro' placeholder="Texto a buscar" value={query} onChange={e => setQuery(e.target.value)} />
                                <br />
                                <Button id='buscador' variant="primary" onClick={handleClick} >Buscar</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title>Filtrar</Card.Title>
                            <Card.Body>
                                <Form.Select aria-label="Default select example" id='selector'  onChange={e=> handleSelect(e.target.value)}>
                                    <option>All</option>
                                    {categories.map((item, index) => (
                                        <option value={item} key={index}>{item}</option>
                                        
                                    ))}
                                    
                                </Form.Select>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}