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
        throw new Error (
            "Show does not exist"
        )
    }

    return data;
}

export async function UpdateShow(id, showFields){

    const {data, error} = await supabase.from('TV_Show')
        .update(showFields).eq("id", id ).select();

    if(error){
        console.error("Error while updating show: ", error.message);
        throw new Error('Error during update', error.message);
    }

    return data;
}

export async function FilterShowsAlphabetically(){
    const {data, error} = await supabase.from('TV_Show')
        .select('id, show_name').order('show_name', {ascending: true});
    if(error){
        throw new Error("Error while sorting shows in ascending order");
    }

    return data;
}

export async function FilterStreamingService(platform) {
    const {data: filter_by_service, error: service_error} = await supabase.from('TV_Show')
        .select('id, show_name, streaming_service').eq('streaming_service', platform );
    if(service_error){
        throw new Error("Error while filtering shows");
    }

    return filter_by_service;
}

export async function FilterSeriesWatched(){
    const {data: filter_by_series_completed, error: completed_error} = await supabase.from('TV_Show')
        .select('id, show_name').eq('series_completed', true)

    if(completed_error) {
        throw new Error('Error while filtering shows by series_completed');
    }
    return filter_by_series_completed;
}

export async function FetchStreamingService(){
    const {data, error} = await supabase.from('TV_Show')
        .select('streaming_service');

    if(error){
        throw new Error("Error while fetching streaming service names");
    }

    return [...new Set(
        data.map(show => show.streaming_service))];
}