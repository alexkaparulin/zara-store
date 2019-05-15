import {combineReducers} from 'redux';
import SelectedItemReducer from '../Item.reducer'

const rootReducer  = combineReducers({
    selectedItem: SelectedItemReducer
})

export default rootReducer;