import React,{Component} from 'react'
import './style.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getAddListInfo} from './actionCreator'
import Swiper from 'swiper'


class  list  extends Component {
    render(){
        const  list = this.props.list.map((item,index)=>{
            return (
                <li key={item.id} className="studio_content_left_ul_li"><a href="javascript:void" className="studio_content_left_ul_li">{item.content}</a></li>
            )
        })
        return (
            <div>
                <div className="title-logo">
                    <div className="swperContent">
                        <div className="swiper-container" ref={(swiperMove)=>{this.swiperMove=swiperMove}}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide"><img src={require('../../statics/images/studio_logo.png')} alt="logo"/></div>
                                    <div className="swiper-slide"><img src={require('../../statics/images/studio_logo.png')} alt="logo"/></div>
                                    <div className="swiper-slide"><img src={require('../../statics/images/studio_logo.png')} alt="logo"/></div>
                                
                                </div>
                                
                                <div className="swiper-button-next" ref={(swiperPrev)=>{this.swiperPrev=swiperPrev}}></div>
                                <div className="swiper-button-prev" ref={(swiperNext)=>{this.swiperNext=swiperNext}}></div>
                        </div>
                        {/* <img src={require('../../statics/images/studio_logo.png')} alt="logo"/> */}
                    </div>
                   
                    <div className="swperContentBrother">
                    <img src={require('../../statics/images/studio_ad.gif')} alt="logo" className="right-pic"/>
                    </div>
                </div>
                <ul className="title-info">
                    <li className="title-item">大家说英语</li>
                    <li className="title-item">空中英语教师</li>
                    <li className="title-item">彭美惠英语</li>

                </ul>
                <div className="studio_content">
                    <div className="s-left">
                    <img src={require('../../statics/images/sc_title.png')} alt="logo" className="sc_img1"/>
                    <img src={require('../../statics/images/sc_cover1.jpg')} alt="logo" className="sc_cover"/>
                    <img src={require('../../statics/images/sc_cover2.jpg')} alt="logo" className="sc_cover"/>
                    <img src={require('../../statics/images/sc_cover2.jpg')} alt="logo" className="sc_cover"/>

                    <h2 className="studio_content_left">往期试听:</h2>
                   
                   
                    <ul className="studio_content_left_ul">
                       {list}
                    </ul>  
                    </div>


                    <div className="s-right">
                        <p className="studio_content_right_p">杂志展示:</p>
                        <img src={require('../../statics/images/sc_mag.png')} alt="logo" className="sc_cover_mag"/>
                        <p className="studio_content_right_class">《空中英语教室》</p>
                    </div>
                </div>
                <div className="foot">
                    <p className="foot-p1">本网站由 EasyVOA 开发上线 © 2011-2014 手机版EasyVOA</p>
                    <p className="foot-p1">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>

              </div> 
            </div>
        )
    }
    componentDidMount() {
        this.getListInfo();
        console.log(this.swiperMove);
        //var swiper = new Swiper(this.swiperMove);
        var swiper = new Swiper(this.swiperMove, {
            navigation: {
              nextEl: this.swiperPrev,
              prevEl: this.swiperNext
            },
          });
    }
    getListInfo(){
        
        axios.get('/api/listContent.json').then(this.props.handlgetListInfoSucc.bind(this))
        console.log(this);

    }
}
const mapStateToProps=(state)=>({
    list:state.list.list 
})

const mapDispatchToProps=(dispatch)=>({
    handlgetListInfoSucc(response) {
        const {list} = response.data.data;
        console.log(list)
        dispatch(getAddListInfo(list))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(list)