import React from 'react';
import sadfrog from '../img/frog-crying-notFound.png'











export default function Error({error}) {
  return (
    <div>
      <div className="error-png">
        <img src={sadfrog} style={{width:'80%'}} alt="" />
      </div>
        <div class="alert alert-danger text-center" style={{width:'80%' , marginTop:"-9%"}} role="alert">
            {error}
        </div>
    </div>
  )
}
