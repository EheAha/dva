import React, { Component } from 'react'
import { SearchBar, Tag } from 'antd-mobile';
import TopHead from 'components/head/header'
require('css/search.less');

class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: '美食',
            isShowTag: 'block',
            isShowSearchList: 'none'
        }
        this.submitText = this.submitText.bind(this);
    }

    // componentDidMount() {
    //     this.autoFocusInst.focus();
    // }
    // onChange= (value) => {
    //     this.setState({ value });
    // };
    // clear = () => {
    //     this.setState({ value: '' });
    // };
    // handleClick = () => {
    //     this.manualFocusInst.focus();
    // }

    //点击enter键进行搜索
    submitText(value) {
        this.setState({
            isShowTag: 'none',
            isShowSearchList: 'block'
        }, () => {
            console.log(this.state.isShowSearchList, this.state.isShowTag)
        })
        console.log(value)
    }

    render() {
        const { isShowTag, isShowSearchList } = this.state;
        return (
            <div>
                <div className='search_header'>
                    <TopHead address='/homePage'></TopHead>
                    <div>
                        <SearchBar
                            placeholder="Search"
                            maxLength={8}
                            // value={this.state.value}
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
                        <Tag selected>Selected</Tag>
                        <Tag selected>Selected</Tag>
                        <Tag selected>Selected</Tag>
                        <Tag selected>Selected</Tag>
                        <Tag selected>Selected</Tag>
                    </div>
                </div>
                <div style={{ "display": isShowSearchList }}>
                    <div>搜索电影列表</div>
                </div>
            </div>
        )
    }
}

export default Search