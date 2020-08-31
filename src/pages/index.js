import { lazy } from 'react'

const routes = [{
    name: 'index',
    path: '/',
    component: lazy(() => import('./index/index'))
}]

export default routes