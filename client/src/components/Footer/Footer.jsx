import React from 'react';
import styles from './Footer.module.css';

function Footer(){
    return (
        <footer>
            <div className={styles.wrapper}>
                <ul className={styles.info}>
                <li><h2>Phim mới</h2></li>
                <li>Phim lẻ</li>
                <li>Phim chiếu rạp</li>
                <li>Phim kinh dị</li>
            </ul>
            <ul className={styles.info}>
                <li><h2>Phim lẻ</h2></li>
                <li>Phim kinh dị</li>
                <li>Phim viễn tưởng</li>
                <li>Phim hoạt hình</li>
            </ul>
            <ul className={styles.info}>
                <li><h2>Trợ giúp</h2></li>
                <li>Hỏi đáp</li>
                <li>Liên hệ</li>
                <li>Tin tức</li>
            </ul>
            <ul className={styles.info}>
                <li><h2>Thông tin</h2></li>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách riêng tư</li>
                <li>Khiếu nại bản quyền</li>
            </ul>
            </div>
            <div className={styles.credit}><h2>@dongreviewphim.net</h2></div>
        </footer>
    )
}

export default Footer;