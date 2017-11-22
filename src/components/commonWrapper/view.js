import React, {Component} from 'react'
import './style.css'
import axios from 'axios'
import {Link} from 'react-router'


export default class commonWrapper extends Component{
    constructor(props) {
        super(props);
            this.state={
                list:[]
            }
            this.handleGetHeaderDataSucc=this.handleGetHeaderDataSucc.bind(this)
    }

    render() {
        const list = this.state.list.map((item,index)=>{
            return <li key={item.id} className="header-item"><Link to={item.url} className="tiao">{item.title}</Link></li>
        })
        return (
            <div>
                
                <div className="header">
                  <Link to='/'>  <img ait="logo" className="header-logo" src={require('../../statics/images/logo.png')} /></Link>
                    <ul className="header-list">
                          {list}
					</ul>
                </div>
                <div className="nav">
                    <div className="nav-left">
                        <h2 className="nav-title">常速英语</h2>
                        <ul className="nav-detail">
                            <li  className="nav-list">音频</li>
                            <li  className="nav-list">视频</li>
                            <li  className="nav-list">翻译</li>
                        </ul>
                    </div>
                    <div className="nav-center">
                    <h2 className="nav-title">慢速英语（中级）</h2>
                        <ul className="nav-detail">
                            <li  className="nav-list">科技报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">科技报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">科技报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">科技报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">词汇报答</li>
                            <li  className="nav-list">科技报答</li>
                           
                        </ul>

                    </div>
                    <div className="nav-right">
                    <h2 className="nav-title">英语教学（初级）</h2>
                        <ul className="nav-detail">
                        <li  className="nav-list">流行美语</li>
                        <li  className="nav-list">美语三级跳</li>
                        <li  className="nav-list">词汇报答</li>
                        <li  className="nav-list">美国习惯用语</li>
                        <li  className="nav-list">双鱼新闻</li>
                        <li  className="nav-list">英语训练</li>
                        <li  className="nav-list">体育美语</li>
                        <li  className="nav-list">商务礼节</li>
                        <li  className="nav-list">词汇报答</li>
                        <li  className="nav-list">科技报答</li>
                        <li  className="nav-list">词汇报答</li>
                        <li  className="nav-list">词汇报答</li>
                        <li  className="nav-list">科技报答</li>
                        </ul>
                    
                    </div>


                </div>
                <div className="hotSign">
                        <h4 className="hot-title">热门标签:</h4>
                        <div  className="hot-list">Voa在线英语</div>
                        <div  className="hot-list">Voa在线听</div>
                        <div  className="hot-list">美国英语</div>

                </div>


                <div>
					{this.props.children}
				</div>
            </div>
        )
    }
    componentDidMount() {
		axios.get('/api/header.json').then(this.handleGetHeaderDataSucc);
	}

	handleGetHeaderDataSucc(response) {
      
        const {list} = response.data.data;
		this.setState({
			list: list
		})
	}
}

