import React, { Component } from 'react'
import { SearchBar, Tag } from 'antd-mobile'
import TopHead from 'components/head/header'
import axios from 'axios'
import maomi from 'images/maomi.png'
require('css/search.less')

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: '美食',
            isShowTag: 'block',
            isShowSearchList: 0,
            searchList: [],
            searchRecord: JSON.parse(localStorage.getItem('searchRecord'))
        }
        this.submitText = this.submitText.bind(this);
    }

    componentDidMount() {
        // this.autoFocusInst.focus();
        console.log(this.state.searchRecord)
        if(localStorage.getItem('searchRecord')===null){
            this.searchRecord={};
        }else{
            this.searchRecord=this.state.searchRecord
        }
    }

    //点击enter键进行搜索
    async submitText(value) {
        const searchList = await axios.get('/ajax/search?kw=' + value + '&cityId=10&stype=2').then((res) => { return res.data })
        this.searchRecord[value]=0;
        if (searchList !== undefined) {
            this.setState({
                isShowTag: 'none',
                isShowSearchList: 1
            })
        }

        if (searchList !== undefined && searchList.cinemas !== undefined) {
            this.setState({
                searchList: searchList.cinemas.list,
                searchRecord: this.searchRecord,
                isShowSearchList: 2
            }, () => {
                localStorage.setItem('searchRecord', JSON.stringify(this.state.searchRecord))
            })
        }
    }

    render() {
        const { isShowTag, isShowSearchList, searchList,searchRecord } = this.state;
        return (
            <div>
                <div className='search_header'>
                    <TopHead address='/homePage' headInfo='淘票'></TopHead>
                    <div>
                        <SearchBar
                            placeholder="搜影城"
                            maxLength={20}
                            onSubmit={this.submitText}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            showCancelButton={false}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className='search_record' style={{ "display": isShowTag }}>
                    <p className='title'>搜索记录</p>
                    <div className='record_tag'>
                    {
                        searchRecord!==null&&Object.keys(searchRecord).map((item,index)=>{
                            return(
                                <span key={index} onClick={this.submitText.bind(this,item)}>{item}</span>
                            )
                        })
                    }
                    </div>
                </div>
                <div style={{ "display": isShowSearchList===2?"block":"none", "height": "5.67rem", "overflow": "scroll" }}>
                    <div className="list">
                        {
                            searchList.length !== 0 && searchList.map((item) => {
                                return (
                                    <div className="cinema cell" key={item.id}>
                                        <div className="info">
                                            <p className="name-price">
                                                <span className="name one-line">{item.nm}</span>
                                                <span className="sell-price">
                                                    <span className="price">{item.sellPrice}</span>
                                                    元起
                                                </span>
                                            </p>
                                            <p className="address one-line">{item.addr}</p>
                                            <p className="feature-tags">
                                                <span>座</span>
                                                <span>杜比全景声厅</span>
                                                <span>改签</span>
                                                <span className="featrue">小吃</span>
                                                <span className="featrue">折扣卡</span>
                                            </p>
                                        </div>
                                        <div className="distance">{item.distance}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="no-result" style={{"display":isShowSearchList===1?"block":"none"}}>
                    <img src={maomi} alt=''/>
                    <p>没有找到相关影院</p>
                </div>
                </div>
                )
            }
        }
        
export default Search