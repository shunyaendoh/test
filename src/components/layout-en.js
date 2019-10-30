import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header-en'

class TemplateEn extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
}

export default TemplateEn
