import "./style.css"
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header className="container-fluid container-header">
            <div >
                <Link to="/" className='titulo'>ASTRONOMY PICTURE OF THE DAY</Link>
            </div>
        </header>
    )
}

export default Header;