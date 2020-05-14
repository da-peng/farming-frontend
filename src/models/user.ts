import {fakeAccountLogin} from '@/services/login'
import { Effect, Reducer,history } from 'umi';
import {setStorage} from '@/utils/storage'

export interface StateType{
    // status?: number
    errorMsg: string 
    // loading?: string
}



export interface LoginModelType {
    namespace: 'user';
    state: StateType;
    effects: {
        login: Effect;
        logout: Effect;
        // register: Effect;
    };
    reducers: {
        changeLoginStatus: Reducer<StateType>;
      // 启用 immer 之后
      // changeLoginStatus: ImmerReducer<IndexModelState>;
    };
}
  

const Model:LoginModelType = {
    namespace : 'user',
    state : {
        errorMsg: '',
    },
    reducers: {
        changeLoginStatus(state, action){
            return {
                ...state,
                ...action.payload,
              };
        }
    },
    effects:{
        *login({payload},{call,put}){
            try{
                const response = yield call(fakeAccountLogin, payload);
                const {data} = response
                if (data.statuscode==20000){
                    setStorage('uid',data.UserId)
                }else{
                    yield put({
                        type:'changeLoginStatus',
                        payload:{errorMsg:data.message}
                    })
                }
            }catch (error){

            }
            
        },

        *logout({payload},{call,put}){
        if (window.location.pathname !== '/user/login') {
            history.replace({
                pathname: '/user/login',
            });
             }
        }

    },
}

export default Model