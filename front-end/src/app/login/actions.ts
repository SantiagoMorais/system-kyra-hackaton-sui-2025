'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login({ wallet_address, password }: { wallet_address: string, password: string }) {
  const supabase = await createClient()

  const email = `${wallet_address}@suiet.wallet`;

  const data = {
    email,
    password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error.message);
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function logout() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error.message);
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup({ wallet_address, password }: { wallet_address: string, password: string }) {
  const supabase = await createClient();

  const email = `${wallet_address}@suiet.wallet`;

  const data = {
    email,
    password,
  }

  const { error: insertError } = await supabase.from("users").insert([{ wallet_address }]);

  if (insertError) {
    console.log(insertError.message);
    redirect('/error')
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log(error.message);
    redirect('/error')
  }
}