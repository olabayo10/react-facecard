import facebook from "../Images/facebook.png"
import x from "../Images/x-icon download.png"
import insta from "../Images/download.jpeg"
export function Footer() {
    return (
        <footer className="foot">
            <img src= {facebook} alt="uu"  height={20} className="face"/>
            <img src= {x} alt="ll" height={20} className="twitter"/>
            <img src= {insta} alt="kk" height={20} />
        </footer>
    )
}