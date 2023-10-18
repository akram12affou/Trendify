
import Carousel from 'react-bootstrap/Carousel';
import {getAllProducts} from '../../lib/getAllProduct'
import {randomThreeProducts} from '../../lib/randomThreeProducts'
async function HomeCarousel() {
   const firstThreeProduct = randomThreeProducts(await getAllProducts())
   console.log(firstThreeProduct)
      
  return ( 
    <>
      {/* {JSON.stringify(firstThreeProduct)} */}
      {/* <Carousel.Item >
        <Carousel.Caption> 
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    
    </>
  );
}
export default HomeCarousel;