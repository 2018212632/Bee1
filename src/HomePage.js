import React from 'react';
import ReactDOM from 'react-dom';
import "./swiper.min.css"
import Swiper from 'swiper'
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render(){
      return(
          <div>
          <header>
              <div id="back"></div>
              <div id="title"><h1>美团外卖</h1></div>
              <div id="set"></div>
          </header>
          <Carousel/>
          <Feature/>
          <Hot/>
          <Sale/>
          <Footer/>
          </div>
     )
    }
  }

  class Carousel extends HomePage {
    componentWillMount(){
    }
    componentDidMount(){
        new Swiper ('.swiper-container', {
            loop: true, 
            autoplay:{ 
                 delay: 4000,
                 disableOnInteraction: false,  
            },
            pagination: { 
                el: '.swiper-pagination'
            }
        })
            }
        render() {
                    return (
                <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src={require("./show.png")} alt=""/></div>
                    <div class="swiper-slide"><img src={require("./show.png")} alt=""/></div>
                    <div class="swiper-slide"><img src={require("./show.png")} alt=""/></div>
                    <div class="swiper-slide"><img src={require("./show.png")} alt=""/></div>
                    <div class="swiper-slide"><img src={require("./show.png")} alt=""/>5</div>
                </div>
                <div class="swiper-pagination">
                </div>
            </div>
        )
    }
  }

  class Feature extends HomePage {
    
    render(){
      return(
          <div id="feature">
              <div class="feature-app">
                  <div class="image1"></div>
                  <div class="image-title">水果配送</div>
              </div>
              <div class="feature-app">
                  <div class="image2"></div>
                  <div class="image-title">骑手页面</div>
              </div>
              <div class="feature-app">
                  <div class="image3"></div>
                  <div class="image-title">我的地址</div>
              </div>
              <div class="feature-app">
                  <div class="image4"></div>
                  <div class="image-title">待收货</div>
              </div>
          </div>
     )
    }
  }

  class Hot extends HomePage {
    render(){
      return(
          <div id="hot">
              <div id="hot-sale">热销榜</div>
              <div id="hot-des">详情</div>
              <div id="hot-in"></div>
          </div>
     )
    }
  }

  class Footer extends HomePage {
    render(){
      return(
          <div id="footer">
              <div id="home">
                  <div id="image5"></div>
                  <div class="image-title1">首页</div>
              </div>
              <div id="order">
                  <div id="image6"></div>
                  <div class="image-title1">订单</div>
              </div>
              <div id="sender">
                  <div id="image7"></div>
                  <div class="image-title1">我的</div>
              </div>
          </div>
     )
    }
  }

  class Sale extends HomePage {
    render(){
      return(
          <div id="sale">
          </div>
     )
    }
  }
  
ReactDOM.render(
    <HomePage />,
    document.getElementById('root')
  );