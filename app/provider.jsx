"use client"
import { UserDetailContext } from '@/context/UserDetailContext';
import { supabase } from '@/services/supabaseClient'
import React, { useContext, useEffect, useState } from 'react'


function Provider({ children }) {

    const [user , setUser] = useState();

  useEffect(() => {
    const createUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) return;

      const { data: Users, error } = await supabase
        .from('Users')
        .select("*")
        .eq('email', user.email);

      if (Users?.length === 0) {
        const { data, error } = await supabase.from("Users")
          .insert([
            {
              name: user.user_metadata?.name,
              email: user.email, // ✅ fixed typo
              picture: user.user_metadata?.picture,
            }
          ]);

        console.log("New user inserted:", data);
        setUser(data);
      } else {
        console.log("User already exists:", Users);
      }

      setUser(Users[0]);
    };

    createUser();
  }, []);

  return (
      <UserDetailContext.Provider  value={{user , setUser}}>
        <div>
        {children}
        </div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUser = ()=>{
  const context= useContext(UserDetailContext);
  return context;
}
