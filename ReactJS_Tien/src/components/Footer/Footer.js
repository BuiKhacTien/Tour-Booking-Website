import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> LIÊN HỆ CÔNG TY gì</h2>
                        <a>Địa chỉ:</a>
                        <a href='tel:0987976998'>SĐT: 0987976998</a>
                        <a href='mailto:phutruong456321@gmail.com'>error@gmail.com</a>
                        <a>Giờ làm việc:</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2> TRONG NƯỚC</h2>
                        <a>Hạ Long</a>
                        <a>Đà Lạt</a>
                        <a>An Giang</a>
                        <a>Quảng Ninh</a>
                        <a>Hutech</a>
                    </div>
                    {/*                   
                </div>
                <div className='footer-link-wrapper'> */}
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> NGOÀI NƯỚC</h2>
                        <a>Nga</a>
                        <a>U Cà</a>
                        <a>Mỹ</a>
                        <a>Tàu khựa</a>
                        <a>Triều tiên</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2> THÔNG TIN</h2>
                        <a>How it works</a>
                        <a>How it works</a>
                        <a>How it works</a>
                        <Link to='/contact'>Liên hệ</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img className="img-logo" src="https://htweb.vn/wp-content/uploads/2019/12/Travel-nen-xanh.jpg"></img>ERRO
                        </Link>
                    </div>
                    <small className='website-rights'>TGP # 2022</small>
                    <div className='social-icons'>
                        <a href='https://www.facebook.com/phu.truong.9615566' className='social-icon-link facebook' target="_blank"
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </a>

                        <a href='https://discord.gg/xEcEgp78zU' className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                        <a className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                        <a className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer