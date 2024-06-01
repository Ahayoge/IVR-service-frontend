import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoPost = props => {
  return props.childCount > 1 ? (
    <li
      className="service-ivr-item flex span-12"
      style={{
        position: "relative",
      }}>
      <video className="service-ivr-item-bg" autoPlay muted loop>
        <source src={`${props.data.videoURL}`} type="video/mp4" />
      </video>

      <div className="service-text">
        <h3 className="service-title ivr-list-title">{props.data.textSimple}</h3>
      </div>
    </li>
  ) : (
    <Link
      to={`/ivr-list/${props.childId}`}
      state={{ id: props.childId, name: props.data.textSimple }}>
      <li
        style={{
          position: "relative",
        }}
        className="service-ivr-item flex span-12">
        {!props.isLoading && (
          <video className="service-ivr-item-bg" autoPlay muted loop>
            <source src={`${props.data.videoURL}`} type="video/mp4" />
          </video>
        )}
        <div className="service-text">
          <h3 className="service-title ivr-list-title">{props.data.textSimple}</h3>
        </div>
      </li>
    </Link>
  );
};

export default VideoPost;
