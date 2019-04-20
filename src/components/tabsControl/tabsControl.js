import React, { Component } from 'react'
import styles from './style.less'

class TabsControl extends Component {

    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    check_tittle_index(index) {
        return index === this.state.currentIndex ? styles.Tab_tittle_active : styles.Tab_tittle;
    }

    check_item_index(index) {
        return index === this.state.currentIndex ? styles.Tab_item_show : styles.Tab_item;
    }

    render() {
        let _this = this;
        return (
            <div className={styles.barsContain_wrap}>
                {/*动态生成Tab导航*/}
                <div className={styles.Tab_tittle_wrap}>
                    {React.Children.map(this.props.children, (element, index) => {
                        return (
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div 
                                onClick={() => { 
                                    this.setState({ 
                                        currentIndex: index 
                                    },()=>{
                                        console.log(this.state.currentIndex)
                                    }) 
                                }} 
                                className={this.check_tittle_index(index)}
                            >
                                {element.props.name}
                            </div>
                        );
                    })}
                </div>
                {/*Tab内容区域*/}
                <div className={styles.Tab_item_wrap}>
                    {React.Children.map(this.props.children, (element, index) => {
                        return (
                            <div className={this.check_item_index(index)}>{element}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TabsControl