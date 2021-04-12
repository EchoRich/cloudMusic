import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionTypes from  './store/actionCreators'
import Slider  from  '../../components/slider'
import RecommendList from '../../components/list'
import Scroll from '../../baseUI/scroll'
import {forceCheck} from 'react-lazyload'
import {Content} from './style'
import Loading from  '../../baseUI/loading'
import {renderRoutes} from  'react-router-config'


 function Recommend  (props) {
 

  const  {bannerList,  recommendList, enterLoading}  = props
  const  {getBannerDataDispatch, getRecommendDataDispatch}  = props
   const bannerListJs  = bannerList?bannerList.toJS():  []
  const recommendListJs  = recommendList?recommendList.toJS() : []

  useEffect(() => {
    if(!bannerList.size){
   getBannerDataDispatch()
    }
    if(!RecommendList.size){
  getRecommendDataDispatch()
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Content>
      <Scroll className="list" onScroll={forceCheck}>
      <div>
        <Slider bannerList={bannerListJs}></Slider>
      <RecommendList recommendList={recommendListJs}/>
      </div>
      </Scroll>
      {enterLoading&&(<Loading/>)}
      {
            // 将目前所在的路由下一层子路由加以渲染 
         renderRoutes (props.route.routes) 
      }
      </Content>
    </div>
  
  )
}
//  映射全局的 state到props组件中去 
const mapStateToProps  = state => ({
  bannerList:   state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend',  'recommendList']),
  enterLoading:  state.getIn(['recommend','enterLoading'])
})
// 映射dispatch到props中去 
const  mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch(){
      dispatch(actionTypes.getBannerList())
    },
    getRecommendDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))