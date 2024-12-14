import firstSliderImage from './KSE_0797.jpg';
import '../components/Components.css';

const ExampleCarouselImage = ({ text }) => {
    return (
      <div className='center-flex'>
        <img src={firstSliderImage} alt={text} style={{ width: '100%' }}  />
      </div>
    );
  };

export default ExampleCarouselImage;