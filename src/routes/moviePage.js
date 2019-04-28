import React, { Component } from 'react';
import ShareHead from 'components/shareHead/shareHead'
import axios from 'axios';
import 'css/moviePage.less'

class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      selectText: '',
      selectCondition: {},
      cinameList: {}
    }
    this.select = this.select.bind(this);
    // this.handleArea = this.handleArea.bind(this);
    // this.handleBrand = this.handleBrand.bind(this);
    // this.handleServer = this.handleServer.bind(this);
    // this.handleSpacial = this.handleSpacial.bind(this);
  }

  async handleArea(id,e){
    const dataType = e.target.getAttribute('data-type');
    switch(dataType){
      case 'service': this.requestIdName = 'serviceId';
                      break;
      case 'hallType': this.requestIdName = 'hallType';
                      break;
      case 'brand': this.requestIdName = 'brandId';
                      break;
      case 'district': this.requestIdName = 'districtId';
                      break;
      default:
    }
    console.log(dataType,this.requestIdName)
    const chooseCinameList = await axios.get('/ajax/cinemaList?'+this.requestIdName+'='+id).then(res=>{return res.data});
    this.setState({
      cinameList: chooseCinameList,
      selectText:''
    })
  }

  componentDidMount() {
    this.getCinameList();
    this.getSelectCondition();
  }

  async getSelectCondition() {
    const selectCondition = await axios.get('/ajax/filterCinemas').then((res) => { return res.data });
    if (selectCondition !== undefined) {
      this.setState({
        selectCondition: selectCondition
      }, () => {
        console.log(this.state.selectCondition)
      })
    }
  }

  async getCinameList() {
    const cinameList = await axios.get('/ajax/cinemaList').then((res) => { return res.data })
    this.setState({
      cinameList: cinameList
    }, () => {
      console.log(this.state.cinameList)
    })
  }

  select(e) {
    this.setState({
      selectText: e.target.getAttribute("data-tab")
    })
  }

  render() {
    const { selectText, selectCondition, cinameList } = this.state;
    return (
      <div>
        <ShareHead></ShareHead>
        <div className="nav-wrap filter-nav-wrap">
          <div className="tab mb-line-b">
            <div className={selectText === '.region' ? 'item chosenTitle' : 'item'} data-tab=".region" onClick={this.select}>
              全城
              <span className="drop"></span>
            </div>
            <div className={selectText === '.brand' ? 'item chosenTitle' : 'item'} data-tab=".brand" onClick={this.select}>
              品牌
              <span className="drop"></span>
            </div>
            <div className={selectText === '.special' ? 'item chosenTitle' : 'item'} data-tab=".special" onClick={this.select}>
              特色
              <span className="drop"></span>
            </div>
          </div>
          <div className="close-tab" style={{ 'display': selectText !== '' ? 'block' : 'none' }}>
            <div className="tab-content">
              <div className="page special" style={{ "display": selectText === '.special' ? 'block' : 'none' }}>
                <div id="special-content" style={{ "height": "345px" }}>
                  <div className="item-title">特色功能</div>
                  <div className="item-list">
                    {
                      Object.getOwnPropertyNames(selectCondition).length !== 0 && selectCondition.service.subItems.map((item, index) => {
                        return (
                          <div 
                          className="item chosen"
                          data-type="service" 
                          key={item.id} 
                          onClick={
                            this.handleArea.bind(this,item.id)
                          }>{item.name}</div>
                        )
                      })
                    }
                  </div>
                  <div className="item-title">特殊厅</div>
                  <div className="item-list">
                    {
                      Object.getOwnPropertyNames(selectCondition).length !== 0 && selectCondition.hallType.subItems.map((item, index) => {
                        return (
                          <div 
                          className="item chosen" 
                          data-type="hallType" 
                          key={item.id}
                          onClick={
                            this.handleArea.bind(this,item.id)
                          }
                          >{item.name}</div>
                        )
                      })
                    }
                  </div>
                </div>
                <div id="special-btn">
                  <span className="btn" id="cancel-btn">重置</span>
                  <span className="btn" id="confirm-btn">确定</span>
                </div>
              </div>
              <div className="page brand" style={{ "display": selectText === '.brand' ? 'block' : 'none' }}>
                <div id="brand-content" style={{ 'height': '345px' }}>
                  {
                    Object.getOwnPropertyNames(selectCondition).length !== 0 && selectCondition.brand.subItems.map((item, index) => {
                      return (
                        <div 
                        className="item brand-list chosen" 
                        data-type="brand" 
                        key={item.id}
                        onClick={
                          this.handleArea.bind(this,item.id)
                        }>
                          <span className="brand-name" data-type="brand" >{item.name}</span>
                          <span className="brand-count" data-type="brand" >{item.count}</span>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className="page brand" style={{ "display": selectText === '.region' ? 'block' : 'none' }}>
                <div id="brand-content" style={{ 'height': ' 402.5px' }}>
                    {
                       Object.getOwnPropertyNames(selectCondition).length !== 0 && selectCondition.district.subItems.map((item,index)=>{
                         return(
                           <div 
                           className="brand-list item chosen" 
                           data-type="district" 
                           key={item.id}
                           onClick={
                            this.handleArea.bind(this,item.id)
                          }>
                            <span className="brand-name" data-type="district" >{item.name}</span>
                            <span className="brand-count" data-type="district" >{item.count}</span>
                          </div>
                         )
                       })
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cinema-list" data-cid="c_5ovvtlp2" style={{ 'marginBottom': '55px' }}>
          <div className="list-wrap" style={{ 'marginTop': 0, 'minHeight': '627px' }}>
            {
              Object.getOwnPropertyNames(cinameList).length !== 0 && cinameList.cinemas.map((item, index) => {
                return (
                  <div className="item mb-line-b" data-id="17158" data-bid="dp_wx_home_cinema_list" key={index}>
                    <div className="title-block box-flex middle">
                      <div className="title line-ellipsis">
                        <span>{item.nm}</span>
                        <span className="price-block">
                          <span className="price">{item.sellPrice}</span><span class="q">元起</span>
                        </span>
                      </div>
                      <div className="location-block box-flex">
                        <div className="flex line-ellipsis">{item.addr}</div>
                        <div className="distance">{item.distance}</div>
                      </div>
                      <div className="flex"></div>
                      <div className="label-block">
                        <div className="allowRefund">退</div>
                        <div className="endorse">改签</div>
                        <div className="snack">小吃</div>
                        <div className="vipTag">折扣卡</div>
                      </div>
                      <div className="discount-block">
                        <div>
                          <div className="discount-label normal card">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="" />
                          </div>
                          <div className="discount-label-text">{item.promotion.cardPromotionTag}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default MoviePage
