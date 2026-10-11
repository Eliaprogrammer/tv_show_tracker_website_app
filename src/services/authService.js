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

export async function RestorePassword ({email}){
    const {data, error} = await supabase.auth.resetPasswordForEmail(email,
        {
            redirectTo: '/new_password',
        })


    if (error) throw error;

    return data;

}

export async function ForgotPassword({secure_password}){
    const {data, error} = await supabase.auth.updateUser({
        password: secure_password,
    })

    if(error) throw error;

    return data;
}