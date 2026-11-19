function AboutInfo(){
    return(
        <div className="about_abstract">

            <h1 className="about_header">About</h1>

            <h3 className="about_subheader">
                A semester-long project for my Open Source Web Technologies class.
            </h3>

            <div className="about_body">
                <p>In the class, we learned how to use different web frameworks to develop a
                    full stack application and deploy it publicly through Vercel

                </p>
                <p>
                    My application is inspired by my parents; they are constantly unaware of which
                    show, streaming service, episode, or season they are on. This app will allow
                    anyone to log in or create an account with an email and password to track
                    current and future shows they want to watch. Users can add, edit, delete, view,
                    and rate TV series in their account. People can also refer to this site when
                    recommending a series to family or friends or when they forget what shows they
                    have already watched.
                </p>

                <p>

                </p>
                When creating an account, you will have to authenticate that your email is real
                and active by clicking on the confirmation link in an email sent to you from
                Supabase. Once the confirmation is complete, you can start adding shows you are
                watching now and wish to watch by clicking on the “Add” heading. After each
                addition, deletion, or edit submission, the site will display a pop-up message to
                let you know whether there’s an error or the action was successful. If Successful,
                it will direct you to the dashboard for an overview. You will have access to a
                navbar with each action in the top right corner of the screen. On the top left,
                you will see a Menu where you can filter your shows alphabetically, by streaming
                service, or by shows watched. The dashboard will adjust the TV Show square tiles
                accordingly. Click Menu again to convert to the original display. Returning users
                must log in before attempting any action on their shows. To add a series, you will
                fill in a form with the show’s information and click Save. To update a series,
                select the show’s name from a dropdown menu; a form with pre-populated values
                appears where you can change any attribute, then confirm the action. Delete is
                similar to update, but without the extra form step.
            </div>
        </div>
    )
} export default AboutInfo;