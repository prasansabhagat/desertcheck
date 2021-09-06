import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Carousels extends Component {
    render() {
        return (
            <div>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:520, width:"100%" }}
      src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-6.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Creamberry Flavored E-Juice</h3>
      <p style={{color:"black"}}>This is a delicious blend of Strawberries and Cream. <br></br>This E-Juice has been formulated to taste just like the real thing.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      style={{height:520, width:"100%" }}
      src="https://pixnio.com/free-images/2019/04/26/2019-04-26-08-56-14.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Mini Muffins</h3>
      <p>Cake Crumbs Cupcakes with Chocolate Ganache without Cream</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      style={{height:520, width:"100%" }}
      src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>American Pancakes</h3>
      <p>American pancakes are made from a thick batter consisting of eggs, flour, milk, and baking powder. Additionally, fruit such as apples, strawberries, and blueberries can also be added to the batter, along with buttermilk or chocolate chips.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}