import React , {useEffect} from  'react'
import {connect} from  'react-redux'
import {getRankList} from  './store'
import {filterIndex} from '../../api/utils'
import Scroll from  '../../baseUI/scroll'
import  {Container, List, ListItem, SongList} from './style'
import {renderRoutes} from  'react-router-config'
//映射全局的state到props组件上去 
const mapStateToProps  = (state) => {console.log(333, state.getIn(['rank',  'rankList']))
return {
  rankList: state.getIn(['rank',  'rankList']),
  loading: state.getIn(['rank',  'loading'])
}}
 // 映射dispatch 到props
 
 const mapDispatchToProps  =  (dispatch) => {
   return  {
     getRankListDispatch  () {
       dispatch(getRankList())
     }
   }
 }

 function Rank  (props) {
   const  {rankList: list, loading}= props
   const  {getRankListDispatch}= props
   let rankList  = list?list.toJS(): []
   let globalStartIndex= filterIndex(rankList)
   let officialList  =   rankList.slice(0, globalStartIndex)
   const globalList = rankList.slice(globalStartIndex)

   useEffect(() => {
     getRankListDispatch()
   },  [getRankListDispatch])
   const displayStyle  =   loading?{display:  'none'}:  {display:  ''}
   const enterDetail  = (name) => {}
   const renderRankList  = (list, global) => {
     return (
       <List globalRank={global}>
          {
            list.map(item => {
              return  (
                <ListItem key={item.coverImgId} tracks={item.tracks} onClick={() => enterDetail (item.name)}>
                    <div className="img_wrapper">
                        <img src={item.coverImgUrl} alt=""/>
                      <div className="decorate"></div>
                      <span className="update_frequency">{
                        item.updateFrequency
                      }</span>
                    </div>
                    {renderSongList(item.tracks)}
                  </ListItem>
              )
            })
          }
       </List>

     )
   }
   const renderSongList  = (list) => {
     return list.length?(
       <SongList>
         {
           list.map((item, index) => {
             return (
               <li key={index}>{index+1}. {item.first}-{item.second}</li>
             )
           })
         }
         </SongList>
     ): null
   }
  return (
    <Container>
      <Scroll>
        <div>
          <h1 className="official" style={displayStyle}>
            官方榜
          </h1>
          {renderRankList(officialList)}
          <h1 className="global" style={displayStyle}>全球榜</h1>
           {renderRankList(globalList, true)}
        </div>
      </Scroll>
      {renderRoutes(props.route.routes)}
    </Container>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Rank))