import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {
    return (
        <Card >
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <strong>{video.title}</strong>
                </p>
                <p>{video.description}</p>
                {video.comments?.length > 0 ? <h5>Comments:</h5> : null}
                {video.comments?.map(function (userComment) {
                    return ([
                        <p key={userComment.id}>
                            <b>{userComment.userProfile.name}:</b> {userComment.message}
                        </p>
                    ]);
                })}
                <Link to={`/videos/${video.id}`}>
                    <strong>{video.title}</strong>
                </Link>
            </CardBody>
        </Card>
    );
};

export default Video;