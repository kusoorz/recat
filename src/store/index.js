import { createStore, combineReducers } from 'redux'
import { toast } from './toast/reducers'
import { dialog } from './dialog/reducers'
import { loading } from './loading/reducers'
import { showToast } from './toast/actions'
import { showDialog } from './dialog/actions'
import { showLoading } from './loading/actions'

const store = createStore(
    combineReducers({
        toast,
        dialog,
        loading
    })
)

export { showToast, showDialog, showLoading }

export default store