import React, {Component} from 'react'
import './style.css'

export default class headTop extends Component {
    render(){
        return(
            <div className="hotTop">
                <div className="topWrapper">
                    <ul className="t-left">
                        <li className="t-list">网站手机版</li>
                        <li className="t-list">|</li>
                        <li className="t-list">学英语请加手机号：djshdjshdjs</li>
                    </ul>
                    <ul className="t-right">
                        <li className="t-list"><input type="text"/></li>
                        <li className="t-list"><input  className="btn" type="button" value="搜索"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}