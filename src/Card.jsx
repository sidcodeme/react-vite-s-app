import profilePic from "./assets/profile.jpeg";

function Card() {
  return (
    <div className="card">
        {/* <img src="https://avatars.githubusercontent.com/u/16682506?v=4" alt="profile picture"></img> */}
        <img className="card-image" src={profilePic} alt="profile picture" />
        <h2 className="card-title">sidcodeme Code</h2>
        <p className="card-text">I make Youtube videos and make self Project</p>
    </div>
  );
}

export default Card;
