import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/se_1215" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/shunyaendoh1215" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.facebook.com/endoh.shunya.5" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="mailto:shunya.endoh@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://qiita.com/shunyaendoh" className="icon fa-search"><span className="label">Qiita</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; shunyaendoh1215</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
