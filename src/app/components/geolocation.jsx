import React, { useState } from 'react'

export default function GeoLocation() {
    const[details,setDetails]=useState(null)
    const getUserLocationDetails = () => {
        fetch("https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8")
        .then(response => response.json())
        .then(data =>setData(data));


    }
  return (
    <div>
        
      
    </div>
  )
}
