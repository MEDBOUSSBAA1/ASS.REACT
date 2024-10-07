import React from 'react'
import './Footer.css'
import positionmaps from './images/positionmaps.png'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import mailfoo from './images/mailfoo.png'
import positionfoo from './images/positionfoo.png'
import phonefoo from './images/phonfoo.png'
export default function Footer() {
    const url='https://www.google.com/maps/place/%D8%AD%D9%8A+%D8%AA%D9%83%D8%B1%D9%83%D9%88%D8%B3%D8%AA%E2%80%AD/@30.5345514,-7.9331857,19z/data=!4m6!3m5!1s0xdb085332c931eb9:0x736e1990f60a9b99!8m2!3d30.534727!4d-7.9314262!16s%2Fg%2F11srbnn0ng?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D'
  return (
        <footer className='footerG'>
            <div className='div1'>
                <h3>اتصل بنا</h3>
                <ul >
                    <li><Link>الرئيسية</Link></li>
                    <li><Link>حولنا</Link></li>
                    <li><Link>اشتري</Link></li>
                </ul>
            </div>
            <div className='div2'>
            <h3>اتصل بنا</h3>
                <ul>
                    <li>
                    <Link>الرئيسية</Link>
                    </li>
                    <li><Link>حولنا</Link></li>
                    <li><Link>منتوجتنا</Link></li>
                </ul>
            </div>
            <div className='divp'>
                <p>Nos Position</p>
            <a href={url}>
                    <img src={positionmaps} alt="Position Map"/>
                </a>
            </div>
            <div>
                <h3>اتصل بنا</h3>
                <ul className='ulIMG'>
                    <li>
                        <p> <img src={mailfoo}  alt=""/>    البريد الاليكتروني</p>
                    </li>
                    <li>
                        <p><img src={positionfoo}  alt=""/>العنوان</p>
                    </li>
                    <li>
                         <p><img src={phonefoo} alt=""/> <strong>0689637828</strong></p>
                    </li>
                </ul>
            </div>
        </footer>
  )
}
