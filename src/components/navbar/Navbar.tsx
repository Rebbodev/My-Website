import './Navbar.scss'

function Navbar() {

    return (
        <div className='navbar'>
            <div className='navitems'>
                <div className='navtitle'>
                    <span className='title'><a href="#home">REBBO</a></span>
                </div>
                <div id='left' className='navoptions'>
                    <a href="#home">Home</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar