import React from 'react'

function Users({users}) {
  return (
    <div>
      <div class="mb-4 w-24 text-center border-0 text text-[#40ccb3] rounded-[16px] bg-[#f2fcfa] justify-end">
        <div>
            <span>
                <span>
                    <span>{users} Users</span>
                </span>
            </span>
         </div>
        </div>

       
    </div>

    


  )
}

export default Users;
