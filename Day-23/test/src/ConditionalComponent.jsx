import React, { useState } from 'react'

const ConditionalComponent = () => {
    const [role  , setRole] = useState("VENDOR");
  return (
    <div>
        {role === "ADMIN"  ? "Hello Admin , you have the full control of application" : role === "USER" ? "Hello User , you have some control of application" : role === "VENDOR" ? "Hello Vendor , You have vendor control" : "Invalid Role , Please Login Again"}
    </div>
  )
}

export default ConditionalComponent