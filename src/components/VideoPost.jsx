import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shrek from "../img/shrek.jpg"

const VideoPost = (props) => {
  return props.childCount > 1 ? (
    <li
      style={{
        position: "relative",
      }}
      className="service-ivr-item flex span-12 "
    >
      {props.isLoading && (
        <img src={shrek} className="service-ivr-item-bg" alt="Загрузка видео" />
      )}
      {!props.isLoading && (
        <video className="service-ivr-item-bg" autoPlay muted loop>
          <source src={`${props.data.videoURL}`} type="video/mp4" />
        </video>
      )}

      <div className="service-text">
        <h3 className="service-title ivr-list-title">
          {props.data.textSimple}
        </h3>
      </div>
    </li>
  ) : (
    <Link
      to={`/ivr-list/${props.childId}`}
      state={{ id: props.childId, name: props.data.textSimple }}
    >
      <li
        style={{
          position: "relative",
        }}
        className="service-ivr-item flex span-12"
      >
        {props.isLoading && (
          <img src={"placeholder-image.jpg"} alt="Загрузка видео" />
        )}
        {!props.isLoading && (
          <video className="service-ivr-item-bg" autoPlay muted loop>
            <source src={`${props.data.videoURL}`} type="video/mp4" />
          </video>
        )}
        <div className="service-text">
          <h3 className="service-title ivr-list-title">
            {props.data.textSimple}
          </h3>
        </div>
      </li>
    </Link>
  );
};

export default VideoPost;
