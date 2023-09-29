import { useEffect, useReducer } from "react"

function useFetch(api,id) {
    const initialArg = {
        loading:true,
        error:'',
        products:{}
    }

    const reducer = (state,action)=>{
        switch (action.type) {
            case 'success':
                return{
                    loading:false,
                    products:action.payload,
                    error:''
                }
            case'error':
                return{
                    loading:false,
                    products:{},
                    error:"Something went wrong"
                }
            default:
                return state
        
        }
    }
    const [state, dispatch] = useReducer(reducer, initialArg)
    useEffect(function () {
        async function fetchData() {
            try {
              const response = await fetch(api);
              const data = await response.json();
              dispatch({type:'success',payload:data})
            } catch (error) {
              dispatch({type:'error'})
            }

          }
          fetchData()
    },[id])

    return state
}

export default useFetch