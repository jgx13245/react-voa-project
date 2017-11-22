import React,{Component} from 'react'
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
import {view as commonWrapper} from '../components/commonWrapper/'
import {headTop as HeadTop} from '../components/commonWrapper/'
import {view as index} from '../pages/index/'
import {detail as detail} from '../pages/detail'
import {view as list} from '../pages/list/'
import './app.css'
import { Provider } from 'react-redux';
import store from './store'
import './swiper.css'
//版本不同，显示不出来browserHistory，需要下载 react-router@3.0.5
export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
            <div className="all">
                <HeadTop/>
                <div className="wrapper">
                <Router history={browserHistory}>
                    <Route path="/" component={commonWrapper}>
                            <IndexRoute component={index}></IndexRoute>
                            <Route path="detail/:id" component={detail}></Route>
                            <Route path="list/:id" component={list}></Route>
                    </Route>
                </Router>
                </div>
            </div>    
            </Provider>
        )
    }
}
















































// import React,{ Component } from 'react'
// import store from './store'

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state=store.getState();
//     this.handleOnkeyup=this.handleOnkeyup.bind(this)
//     store.subscribe(this.handleStoreChange.bind(this))
//   }
//   handleStoreChange() {
//     this.setState(store.getState());
//     console.log(this.state);
//   }
//   render() {
//     return (
//       <div>
//           <input onKeyUp={this.handleOnkeyup}/>
//           <ul>
//             {
//               this.state.item.map((m,index)=>{
//                   return <li key={m.key}>{m.value}</li>
//               })
//             }
//           </ul>

//       </div>
//     )

//   }
//   handleOnkeyup(e) {
//     if(e.keyCode ===13){
//       const action ={
//         type:"ADD_ITEM",
//         value:e.target.value
//       }
//       store.dispatch(action)
//     }
//   }

// }