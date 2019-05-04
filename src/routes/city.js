import React, { Component } from 'react'
import { withRouter } from 'dva/router'
import row from 'images/icon-back_0981eb2.png'
import axios from 'axios'
import 'css/city.less'

class City extends Component {
    constructor() {
        super();
        this.state = {
           hotCity:[],
           allCities:{}
        }
        this.pickIt = this.pickIt.bind(this);
        this.cityBack = this.cityBack.bind(this);
    }

    componentDidMount() {
        this.loadCityData();
    }
    
    //加载城市数据
    async loadCityData(){
        const cityPinker = await axios.get('/mock/cityPinker').then((res) => {
            return res.data
        })
        if(cityPinker.status===200){
            this.setState({
                hotCity:cityPinker.data.hotCities,
                allCities:cityPinker.data.cities
            })
        }
    }

    pickIt(name){
        console.log(name);
    }

    cityBack(){
        this.props.history.goBack();
    }

    render() {
        const { allCities, hotCity } = this.state;
        return (
            <div className='cityPinkerWrap'>
                <div className='cityPinkerHead'>
                    <span onClick={this.cityBack}>
                        <img src={row} alt=''/>    
                    </span>  
                    <span>城市选择</span>
                </div>
                <div style={{'height':'630px','overflow':'scroll'}}>
                    <div>
                        <section>
                            <div ref="hot" className="city-title">
                                热门城市
                            </div>
                            <div className="city-list">
                                {
                                    hotCity.length!==0?hotCity.map((item,index)=>{
                                        return (
                                            <div className="city-item" onClick={()=>{this.pickIt(item.name)}} key={item.id}>{item.name}</div>
                                        )
                                    }) : ''
                                }
                            </div>
                        </section>
                        <section>
                            {
                                Object.getOwnPropertyNames(allCities).length!==0?Object.keys(allCities).map((item,index)=>{
                                    return (
                                        <div key={index}>
                                            <div className="city-title city-title-letter">{item}</div>
                                            <div className="city-list city-list-block clearfix">
                                                {
                                                    allCities[item].map((itemValues,i)=>{
                                                            return(
                                                                <div className="city-item-hang" onClick={()=>{this.pickIt(itemValues.name)}} key={i}>{itemValues.name}</div>
                                                            )         
                                                    })
                                                }
                                            </div >
                                        </div>
                                    )
                                }):''
                            }
                        </section >
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(City)