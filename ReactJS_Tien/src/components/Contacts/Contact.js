import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className='breadcrumb'>
                <div className='container'>
                    <ul className='breadcrumb-tree'>
                        <li className='return_home_'>
                            <Link to='/' className='return_home_link'>
                                Trang chủ
                            </Link>
                        </li>
                        <li className='active_'>
                            Liên hệ
                        </li>
                    </ul>
                </div>
            </div >
            <div className='container'>
                <div className='row' >
                    <div >
                        <label>Giới thiệu về ERROR</label>
                        <p>Đến với web đa cấp của chúng tôi</p>
                    </div>
                    <div>
                        <h4>Quý khách có nhu cầu liên lạc, trao đổi hoặc đóng góp ý kiến, vui lòng tham khảo các thông tin sau:</h4>
                        <ul className='LC'>
                            <li>
                                Liên lạc qua số điện thoại:<a className='ct_phone' href='tel:0987976998'>0987976998</a>
                            </li> 
                            <li>
                                Liên lạc qua số điện thoại:090909090
                            </li>
                            <li>
                                Liên lạc qua số điện thoại:090909090
                            </li>
                            <li>
                                Liên lạc qua số điện thoại:090909090
                            </li>
                            <li>
                                Liên lạc qua số điện thoại:090909090
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label>Địa chỉ ERROR</label>
                        <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7217950045006!2d106.56333541524124!3d10.832589461115589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b1bc8f3c3e5%3A0xf79498452a9e3066!2zQ2jhu6MgVsSpbmggTOG7mWMgQQ!5e0!3m2!1svi!2s!4v1647484099570!5m2!1svi!2s" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact