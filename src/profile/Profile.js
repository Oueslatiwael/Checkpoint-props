import React from "react";
import propTypes from "prop-types";

const Profile = (props) => {
  props.handleName();
  return (
    <div>
      <h3>{props.d.fullName}</h3>
      <h3>{props.d.bio}</h3>
      <h3>{props.d.Profession}</h3>
      {props.children}
    </div>
  );
};
Profile.defaultProps = {
  fullName: "Foulen",
  bio: "A short description",
  Profession: "Your profession",
};

Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  Profession: propTypes.string,
};

export default Profile;
