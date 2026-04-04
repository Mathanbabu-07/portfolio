const ProfileImage = ({ src, alt }) => {
  return (
    <div className="profile-container flex-col">
      <div className="profile-glow" />
      <div className="profile-ring">
        <img src={src} alt={alt} className="profile-img" />
      </div>
      {/* SIT Student Badge */}
      <div className="sit-badge">
        <span className="sit-badge-dot" />
        SIT Student
      </div>
    </div>
  )
}

export default ProfileImage
