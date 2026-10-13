import {supabase} from '../lib/supabaseClient.js';

export async function SignUpUser ({
    full_name,
    email,
    password,
 }) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: full_name,
            },
        },
    });

    if(error) throw error;

    return data;
}

export async function SignInUser ({
    email,
    password,

    }){
    const {data, error} = await supabase.auth.signInWithPassword({
        email, password,
    })

    if(error) throw error;
    return data;
}

export async function ForgotPassword({email}){
    const redirectURL = import.meta.env.DEV ? "http://localhost:5173/new_password" :
        "https://tv-show-tracker-website-app.vercel.app/"

    const {data, error} = await supabase.auth.resetPasswordForEmail(
        email,
        {
            redirectTo: redirectURL,
    })

    if(error) throw error;

    return data;
}

export async function UpdatePassword({password}){
    const {data, error} = await supabase.auth.updateUser({
        password,
    });

    if (error) throw error;

    return data;
}

export async function SignOutUser(){
    const {error} = await supabase.auth.signOut({
        scope: "local"
    });
    if(error) throw error;
}