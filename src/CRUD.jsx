import {supabase} from "./lib/supabaseClient.js";

export async function FetchShowName (){
    const {data, error} = await supabase.from("TV_Show")
        .select("id, show_name");

    if(error) {
        console.error("Error fetching name: " , error.message)
        throw error;
    }

    return data ?? [];
}

export async function FetchShow (){
    const {data, error} = await supabase.from('TV_Show')
        .select("*");

    if (error){
        console.error("Error fetching show: ", error.message)
        return [];
    }

    return data;
}

export async function SaveShow (details){
    const {data: {user}, error: user_error} = await supabase.auth.getUser();

    if(user_error){
        throw user_error;
    }

    if(!user){
        throw new Error("No user found")
    }

    const {data, error} = await supabase.from('TV_Show')
        .insert([{ ...details, user_id: user.id }])

    if(error){
         console.error("Error while saving show: ", error.message);
         return null;
     }

     return data;
}

export async function DeleteShow (showID){
    const {data, error} = await supabase.from("TV_Show")
        .delete().eq("id", showID).select();

    if(error){
        console.error("Error while deleting show: ", error.message);
        throw error;
    }

    if(!data || data.length === 0){
        throw new error (
            "Show does not exist"
        )
    }

    return data;
}

export async function UpdateShow(Name, UpdateField){
    const {data, error} = await supabase.from('TV_Show')
        .update(UpdateField).eq("show_name", name)

    if(error){
        console.error("Error while updating show: ", error.message);
        return null;
    }

    return data;
}