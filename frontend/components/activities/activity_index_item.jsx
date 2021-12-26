import React from "react";
import { Link } from "react-router-dom";

const ActivityIndexItem = (props) =>  {
  const { activity } = props;
 
// </strong> <small>@johnsmith</small> <small>31m</small>
    return (

        <div className="box"> 
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="" alt="Image"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{activity.user}</strong> completed a {activity.distance} mi. {activity.activity_type} activity
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="like">
                                <span className="icon is-small">
                                    <i className="far fa-heart" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a className="level-item" aria-label="reply">
                                <span className="icon is-small">
                                    <i className="fa-solid fa-comment" aria-hidden="true"></i>
                                </span>
                            </a>
                
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )
}


export default ActivityIndexItem;