import React from "react";
import Button from '@mui/material/Button';
import  history from '../../util/history'
import { Link } from "react-router-dom";
class ActivityIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            commenting: false,
            comment: '',
            count: 0
        }
    }

    // changeToCommenting = (event) => {
    //     this.setState({commenting: true})

    // }

    // handleCommentChange = (e) => {
    //     const newComment = e.target.value
    //     this.setState({comment: newComment})    
    // }

    // incrementtMe = (e) => {

    //     let newCount = 1
    //     this.setState({count: newCount})

    //     if (this.state.count === newCount){
    //         this.setState({count: 0})
    //     }
    //     const likePayload = {
    //         count:  this.state.count,
    //         activityId: this.props.activity.id,
    //         userId: this.props.userId
    //     }

    //     this.props.createLike(likePayload)
    // }
  
    // submitComment = () => {
    //     const commentPayload = {
    //         body: this.state.comment,
    //         activityId: this.props.activity.id,
    //         userId: this.props.userId

    //     }
    
    //     this.props.createComment(commentPayload);
    //     this.setState({comment: ''})
    //     this.setState({commenting: false})

           
    // }


 render(){
 const { activity, userPhoto, createComment} = this.props;
 const { comments } = activity;
 const {commenting, comment} = this.state;
 console.log(comments)
    return (
        
        
    <div className="activityList">

        <div className="box margined"> 
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={userPhoto }alt="Image"></img>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
         <Link to={`activities/edit/${activity.id}`}>
                        <p>
                            <strong>{activity.user}</strong> completed a {activity.distance} mi. {activity.activity_type} activity
                        </p>
                                       </Link>                 
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item" aria-label="like">
                                {/* <button onClick={this.incrementtMe} className="likeButton"><i className="fas fa-heart"></i> Like {this.state.count}</button> */}
                            </a>
                            <a className="level-item" aria-label="reply">
                                    <button onClick={this.changeToCommenting} className="commentButton">Comment</button>  
                                   {commenting &&  <div className="commentBoxDiv">
                                        <textarea className="commentBox"
                                        onChange={this.handleCommentChange}
                                        value={comment}
                                        >


                                        </textarea>
                                      
                                             {/* <Button onClick={this.submitComment}    className="postComment"variant="contained">Post Comment</Button> */}
                                           
                                  
                                    </div>

                                    }
                            </a>
            
                        </div>
                    </nav>
                </div>
                <Link to={`activities/edit/${activity.id}`}>
                            <a className="level-item rightAngle" aria-label="reply">
                                <i className="fas fa-chevron-right"></i>
                                {/* <i className="fas fa-angle-right"></i> */}
                            </a>
                </Link>
            </article>
            {
                 comments.map((commentObj, index) => {
                     return (
                     <div className="renderComment" key={index}> 
                     <img className="renderCommentPic" src={userPhoto} alt="profilepic" width="50" height="60" />
                    <strong classname>  {activity.user} </strong><p className="renderCommentText"> {commentObj.body}</p>


                    </div>
                     )
                    
                } )
            }   
           
        </div>



    </div>
    )
 }

}


export default ActivityIndexItem;