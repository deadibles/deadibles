import { Button } from 'reactstrap';
import { FaArrowCircleUp } from 'react-icons/fa';


const backToTop = () => {

    const scrollToTop = () => {
    window.scrollTo( {
        top: '0',
        behavior: 'smooth',
    })
    }
    
    return (
      <div className='topContainer'>
        <Button className='topButton' onClick={scrollToTop}>
            <p className='topText'><FaArrowCircleUp /></p>
        </Button>
      </div>
    );
};

export default backToTop;