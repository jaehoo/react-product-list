import { Spinner } from 'react-bootstrap';

export default function Loading(props){

    return(
        <div id='loading'>
        <div className='spinner'>
          <Spinner animation="border" />
        </div>
      </div>
    );

}