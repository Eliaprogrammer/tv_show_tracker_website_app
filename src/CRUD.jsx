import {supabase} from "./lib/supabaseClient.js";

export async function FetchShowName (){
    const {data, error} = await supabase.from('TV_Show').select('id, ShowName');

    if(error) {
        console.error("Error fetching name: " , error.message)
        return [];
    }

    return data;
}

export async function FetchShow (){
    const {data, error} = await supabase.from('TV_Show').select("*");

    if (error){
        console.error("Error fetching show: ", error.message)
        return [];
    }

    return data;
}

export async function SaveShow (details){
    const {data, error} = await supabase.from('TV_Show')
        .insert([details])

    if(error){
         console.error("Error while saving show: ", error.message);
         return null;
     }

     return data;
}

export async function DeleteShow (Name){
    const {data, error} = await supabase.from("TV_Show").delete().eq("ShowName", Name);

    if(error){
        console.error("Error while deleting show: ", error.message);
    }

    return data;
}

export async function UpdateShow(Name, UpdateField){
    const {data, error} = await supabase.from('TV_Show').update(UpdateField).eq("ShowName", name)

    if(error){
        console.error("Error while updating show: ", error.message);
        return null;
    }

    return data;
}