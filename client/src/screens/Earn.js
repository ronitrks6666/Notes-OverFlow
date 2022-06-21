import React, { useEffect } from 'react'
import Task from '../components/Task'
import { CampGetAction } from '../actions/aEarnAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'











export default function Earn() {

    const dispatch = useDispatch()
    const Camps = useSelector((state) => state.getAllCampReducer);
   
    const {camp , loading, error} = Camps
    // console.log(camp)
 

    useEffect(() => {
      dispatch(CampGetAction())
    }, [])

    const html = '<h1>hello </h1>'
    return (
        <div>
           
            <div className='task-container'>
                {loading ? (<Loading/> ): error ? (<Error/>) : (
                    camp.map((item)=>{
                       return <Task item={item} />
                    })
                ) }
                
            </div>
            
        </div>

    )
}
