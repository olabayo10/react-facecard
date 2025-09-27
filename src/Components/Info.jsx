import yola from "../Images/yola.jpg"
import email from "../Images/email-icon.png"


function clickMe () {
    window.open("mailto: olabayo10@gmail.com")
}

export function Info () {
    return (
        <nav>
            <div className="imagex">
                <img src= {yola} alt="photo" width={200} height={150}/>
            </div>
            <div>
                <p className="name">Adebayo Dada</p>
                <div className="button-container">
                    <button className="button-white" onClick={clickMe}>
                        <img src= {email} alt="button icon" width={20} height={10}/>
                        <span> Email </span> 
                    </button>
                    <a href="https://www.linkedin.com/in/bayo-dada/"  className="button-blue">linkedIn</a>
                </div>
            </div>
        </nav>
    )
}