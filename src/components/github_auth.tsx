'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { createClient } from "@supabase/supabase-js" 



export function CardWithForm() {



  const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey)

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: 'repo user:email read:org', // this will help me to access more data from GH
        // redirectTo: `http://gulshankumarprasad.com`, 
      },
    });

    if (error) {
      console.error('Error during sign-in:', error);
    } else {
      console.log('GitHub OAuth data:', data);
      
      // const response = await fetch('https://api.github.com/user/repos', {
      //   headers: { Authorization: `token ${data?.accessToken}` }
      // });
      // const repositories = await response.json();
      // console.log('User repositories:', repositories);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log("Logged out");
  }

  const handleREPO = async () => {
  }
  
  


  return (
    <div className="flex items-center justify-center min-h-screen">
    <Card className="w-[250px] h-[150px]">
      <CardHeader>
        <CardTitle>Login with GitHub</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
        <Button onClick={signInWithGithub}>GitHub auth</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
    </div>
  )
  
}
