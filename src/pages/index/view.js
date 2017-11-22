import React,{Component} from 'react'
import './style.css'
import axios from 'axios'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {getActionIndex, getActionIndexFoot} from './actionCreator'
import {view as Clock} from './components/canvas/'
import {view as Echarts} from './components/echarts/'
class index extends Component {
   
    render() {
        //已经将方法 数据 映射到 props上了
        const list = this.props.list.map((item,value)=>{
            return ( 
                <li className="index-item" key={item.id}>
              <Link to={item.link}>  <span>[{item.title}]</span> {item.content} <span>({item.time})</span></Link>
                </li>
            )
        })
        const list1 = this.props.list1.map((item,value)=>{
            return ( 
                <li className="friendLink-li" key={item.id}>
                    {item.content}
                </li>
            )
        })



        return (
         <div>
            <div className="index-content">
                <h3 className="index-title">VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听</h3>
                <ul className="index-list">
                   {list}
                   <Clock/>
                  <Echarts/>
                  
                  
                </ul>
            </div>
            <ul className="friendLink">
                <h2 className="friendLink-h2">友情链接</h2>
               {list1}

            </ul>
            <div className="foot">
                <p className="foot-p1">本网站由 EasyVOA 开发上线 © 2011-2014 手机版EasyVOA</p>
                <p className="foot-p1">网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>

            </div> 
        </div> 
        )
    }
    componentDidMount() {
        this.getIndexInfo();
    }
    getIndexInfo() {
        axios.get('api/index.json').then(this.props.handleGetIndexInfo.bind(this))
       
    }
   

}
    const mapStateToProps =(state) =>({
        //---------------为啥子啊？--------------
        list : state.index.Index.list,
        list1: state.index.Index.list1
    })

    const mapDispatchToProps=(dispatch)=>({
        handleGetIndexInfo: (response)=> {
            const {list} =response.data.data;
            console.log(list);
           const list1 = response.data.data.list1;
           console.log(list1);
             dispatch(getActionIndex(list));
             dispatch(getActionIndexFoot(list1));
        }
    })

    export default connect(mapStateToProps,mapDispatchToProps)(index)