import {SELECTED_ITEM} from '../components/Item.action';


export default (state=[],action)=>{

    switch (action.type) {
        case SELECTED_ITEM:
            return  {...state};
        default:
        return state;
            
    }
}