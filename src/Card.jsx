import profilePic from './assets/profile.jpeg'

function Card(){
    <div className="card">
        {/* <img src="https://avatars.githubusercontent.com/u/16682506?v=4" alt="profile picture"></img> */}
        <img src={profilePic} alt="profile picture"></img>
        <h2>sidcodeme Code</h2>
        <p>I make Youtube videos and make self Project</p>
    </div>
}

export default Card