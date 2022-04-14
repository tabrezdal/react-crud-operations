import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="footer m-auto">
            <footer id="sticky-footer" className="flex-shrink-0 py-2 bg-dark text-white-50" style={{bottom:0}}>
                <div className="container text-center">
                    <small>Copyright © Tabrez-TJCG</small>
                </div>
            </footer>
        </div>

    )
}

export default Footer