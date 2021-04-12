import React from  'react'
import {Redirect} from  'react-router-dom'
import Home from   '../application/Home'
import Recommend from '../application/Recommend'
import Singer from  '../application/Singer'
import Rank from '../application/Rank'
import Album from  '../application/Album'
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path:  '/',
    component: Home,
  indexRoute: {
      component: Singer
    },
    routes: [
      {
        path:  '/',
        exact: true,
        render:  () => (
          <Redirect to={'/recommend'}/>
        )
      },
      {
  path: "/recommend",
  component: Recommend,
  routes: [
    {
      path: "/recommend/:id",
      component: Album
    }
  ]
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