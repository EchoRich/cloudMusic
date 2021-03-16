import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionTypes from  './store/actionCreators'
import Slider  from  '../../components/slider'
import RecommendList from '../../components/list'
import Scroll from '../../components/scroll'
import {Content} from './style'
 function Recommend  (props) {

  const  {bannerList,  recommendList}  = props
  const  {getBannerDataDispatch, getRecommendDataDispatch}  = props
   const bannerListJs  = bannerList?bannerList.toJS():  []
  const recommendListJs  = recommendList?recommendList.toJS() : []

  useEffect(() => {
   getBannerDataDispatch()
   getRecommendDataDispatch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Content>
      <Scroll className="list">
      <div>
        <Slider bannerList={bannerListJs}></Slider>
      <RecommendList recommendList={recommendListJs}/>
      </div>
      </Scroll>
      </Content>
    </div>
  )
}
//  映射全局的 state到props组件中去 
const mapStateToProps  = state => ({
  bannerList:   state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend',  'recommendList'])
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