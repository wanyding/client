import React from "react";
import BlogList from "../containers/BlogList"
const AuthPage = props => {
    const u_id = props.match.params.id;
    return(
        <div className="author-page">
            <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-8">
                    <BlogList author u_id={u_id} {...props}/>
                </div>
                <div className="col-sm-2">
                </div>
            </div>
        </div>
    );
}

export default AuthPage;


