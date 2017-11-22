import React,{Component} from 'react'
import './style.css'
import axios from 'axios'

export default class detail extends Component {
    constructor(props){
        super(props) ;
        this.state={
            title:"标题",
            content:"<p>内容加载中...</p>"
        }
        this.handleGetGedailInfo=this.handleGetGedailInfo.bind(this)
        this.handleAdvertime =  this.handleAdvertime.bind(this);
    }
    render() {
        return (
            <div className="tltlt-wrapper">
                <div className="detail-title">{this.state.title}</div>
                <div className="detail-content" >
                     <div className="detail-content-left" dangerouslySetInnerHTML={{__html:this.state.content}}>
                       
                     </div>
                    <div className="detail-content-right" ref={(leftBanner)=>{this.leftBanner=leftBanner}}>
                        <img className="detail-content-right-img" src={require('../../statics/images/5046482625689718385.jpg')} />
                        <h2 className="right-world"><span className="right-world-span">北京新东方<br/>专业留学<br/>规划</span></h2>
                        <span className="right-world-learn">针对性补习，短期</span>
                    </div> 

                </div>

            </div>
        )
    }
    handleAdvertime() {
      
        var scroll  =document.documentElement.scrollTop|| document.body.scrollTop;
        console.log(scroll);
        if(scroll>250){
            this.leftBanner.classList.add("prePosition")
            this.leftBanner.style.top=scroll-320+"px";
            this.leftBanner.style.right=0;
        }else{
            this.leftBanner.classList.add("nextPosition")
            this.leftBanner.style.top=0;
            this.leftBanner.style.right=0;
        }
    }
    componentDidMount() {
        this.getDetailInfo();
        window.addEventListener("scroll",this.handleAdvertime)
    }
    componentWillUnmount() {
        window.removeEventListener("scroll",this.handleAdvertime)
    }
    
    getDetailInfo() {
        const id=this.props.params.id;
        axios.get('/api/detail.json?id='+id).then(this.handleGetGedailInfo)
    }
    handleGetGedailInfo(response) {
        const {detail} =response.data.data;
       // console.log(detail);
        this.setState({
            title:detail.title,
            content:detail.content
        })
    }
   
 }
