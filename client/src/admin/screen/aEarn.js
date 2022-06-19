import React, { useEffect } from 'react'
import AddCampForm from '../components/AddCampForm'
import Task from '../components/Task'
import { CampGetAction } from '../../actions/aEarnAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'











export default function AEarn() {

    const dispatch = useDispatch()
    const Camps = useSelector((state) => state.getAllCampReducer);
    const oneCamp = useSelector((state) => state.getOneCampReducer)
    const {campitem} = oneCamp
    const {camp , loading, error} = Camps
    // console.log(camp)
 

    console.log(campitem)
    useEffect(() => {
      dispatch(CampGetAction())
    }, [])

    const html = '<h1>hello </h1>'
    return (
        <div>
            <AddCampForm/>
            <div dangerouslySetInnerHTML={{ __html: html}}></div>
            <div className="task-popup">
                Popup to display form, steps , T&C 
            </div>
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
