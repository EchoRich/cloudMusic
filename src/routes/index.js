import React from  'react'
import {Redirect} from  'react-router-dom'
import Home from   '../application/Recommend'
import Recommend from '../application/Recommend'
import Singer from  '../application/Singer'
import Rank from '../application/Rank'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path:  '/',
    component: Home,
    indexRoute: {
      component: Singer
    },
    routes: [
      // {
      //   path:  '/',
      //   exact: true,
      //   render:  () => (
      //     <Redirect to={'/recommend'}/>
      //   )
      // },
      {
        path: '/recommend',
        component: Recommend,

      },
      {
        path:  '/singer',
        component: Singer
      },
      {
        path: '/rank',
        component:  Rank
      }

    ]
  }
]