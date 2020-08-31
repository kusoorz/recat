import { lazy } from 'react'

const exact = true

const routes = [{
    name: 'index',
    path: '/',
    exact,
    component: lazy(() => import('./index/index'))
}, {
    name: 'toast',
    path: '/toast',
    exact,
    component: lazy(() => import('./toast/index'))
}, {
    name: 'dialog',
    path: '/dialog',
    exact,
    component: lazy(() => import('./dialog/index'))
}, {
    name: 'loading',
    path: '/loading',
    exact,
    component: lazy(() => import('./loading/index'))
}]

export default routes