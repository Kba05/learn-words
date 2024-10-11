import Users from './Users.json'
import Words from './Words.json'
import { IMockFetchData, mockFetchAction } from '../types/types'
import { API_ACTIONS } from '../constants/constants'


export const fetchMock = (action:mockFetchAction,payload?:any)=>{
    const DATAS:Record<string,any> = {
        sign_in: Users,
        get_words: Words,
    }

    return new Promise((resolve)=>{
        const data:IMockFetchData = {
            data: null,
            error: false,
            errorText:''
        };
        if(action === API_ACTIONS.SIGN_IN){
            const { login, password } = payload
            const currUser = Users.find(el=>el.info.login === login && el.password === password)
            if(!currUser){
                data.error = true  
                data.errorText ='Wrong login or password'
            }
            if(currUser?.info){
                data.data = currUser.info
            }
            
        }else data.data = DATAS[action]
        
        
        resolve(data)
    })
}