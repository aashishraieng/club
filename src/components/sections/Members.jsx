
function Member(props)   {
    return (
        <div className="card" id="member-card">
            <img src={props.src} className="card-img-top" style={{borderRadius: '50%',aspectRatio: 1}} />
            <div class="card-body" style={{textAlign: 'center',padding:'1em'}}>
              <h4>{props.title}</h4>
              <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
}

export default function Members()   {
    return (
     <div className="members-container" >
        <div className="image-grid-container">
            <h1>Our Members</h1>
            <div className="grid">
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            <Member src={"/ashsish.jpg"} title={"Ashish Rai"} description={"Hello this is me!"} />
            </div>
        </div>
     </div>
    );
}