import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ width: '100%', height: '350px' }}  className='d-flex bg-black flex-column justify-content-center align-items-center'>
            <div className="footer-div d-flex justify-content-evenly flex-wrap w-100">
                <div className="website" style={{ width: '400px' }}>
                    <h4 className='text-white'> <img style={{width:'50px',height:'45px'}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c62197da-4508-4cf8-b207-79135ce6f44c/d92xhyl-5cbcd0a2-765d-4f86-bfcd-b9888668723e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M2MjE5N2RhLTQ1MDgtNGNmOC1iMjA3LTc5MTM1Y2U2ZjQ0Y1wvZDkyeGh5bC01Y2JjZDBhMi03NjVkLTRmODYtYmZjZC1iOTg4ODY2ODcyM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8qWKNReAj215qY7zN57glZfHhHr2wAxN6PT9JN-pBmQ" alt="" /> TEE-REX</h4>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident possimus libero iure rerum rem nihil</h6>
                    <h6>Code Licensed MIT ,dose CC BY 3.0</h6>
                    <p>Current Version v1.0.6</p>
                </div>
                <div className="links d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Page Home</Link>
                    <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
                </div>
                <div className="guides links d-flex flex-column">
                    <h4>Guides</h4>
                    <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
                    <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>Bootstrap</Link>
                    <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>
                </div>
                <div className="content">
                    <h4>Contact Us</h4>
                    <div className="sub d-flex" >
                        <input type="text" className='form-control border rounded' placeholder='Enter your Email Id' />
                        <button className='btn btn-dark ms-4 border rounded'><i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                    <div className='icon fs-4 d-flex justify-content-evenly mt-4'>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-envelope"></i></Link>
                        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></Link>
                        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></Link>
                        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></Link>
                        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></Link>
                        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></Link>
                    </div>
                </div>

            </div>
            < hr />
            <p style={{color:'yellow'}}>Copyright @ 2023 TEE-REX. Build with React</p>
        </div>
    )
}

export default Footer