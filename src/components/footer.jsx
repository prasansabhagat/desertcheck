import React from 'react';

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer(){

    return <footer>
        <h6>Copyright © {year}</h6>
    </footer>
}

export default Footer;