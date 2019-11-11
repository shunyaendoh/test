import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Post from '../components/Post-en'
import { graphql } from 'gatsby'
import Layout from '../components/layout-en'
import Work from '../components/Work-en'


const siteTitle = "ShunyaEndoh - HOME"
const siteDescription = "This is Home page!"

export default ({ data }) => {

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>
                                Hi, There. This is Shunya Endoh.
                            </h2>
                        </header>
                        <p>
                            I'm a 22-year-old Japanese. From Tokyo-Japan.<br /> My interests are mainly about programming.<br /> Now, I'm into Gatsby.js. That's why I created this web site.<br />If you want to see the details about me, click the button below.
                        </p>
                        <ul className="actions">
                            <li><Link to="/about-en" className="button">More Info</Link></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Blog Posts ( Written in Japanese )</h2>
                        <div className="row" style={{ overflow: 'scroll', height: '20.2rem' }}>
                        {data.allMarkdownRemark.nodes.map((node) => (
                        <Post image={node.frontmatter.image} title={node.frontmatter.title} excerpt={node.excerpt} readMore={node.fields.slug} />
                        ))}
                        </div>
                    </section>

                    <section id="three">
                        <h2>Work</h2>
                        <div className="row" style={{ overflow: 'scroll', height: '15.2rem' }}>
                            <Work link="https://vue-slack-prod-da6b0.web.app/" image="https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg" title="Real time chat tool (Vue.js)"/>
                            <Work link="https://ideathon-village.herokuapp.com/" image="https://xzxzyzyz.com/img/feature/laravel-57-released.png" title="Matching service (Laravel)"/>
                            <Work link="https://shunyaendoh1215.github.io/Portfolio-vue/" image="https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg" title="Portfolio (Vue.js)"/>
                            <Work link="/" image="https://secure.meetupstatic.com/photos/event/5/d/4/d/600_478883885.jpeg" title="Portfolio + Blog (Gatsby.js)" />
                            <Work link="https://shunyaendoh-com.netlify.com/" image="http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464" title="Portfolio (HTML)" />
                            <Work link="https://55web-a-shunyaendoh.netlify.com/" image="http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464" title="Seat-list+Portfolio (HTML)"/>                            
                        </div>
                    </section>

                    <section id="four">
                        <h2>Get In Touch</h2>
                        <p>If you want to contact me, please feel free to send a message.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Tokyo,Nishi-Tokyo-shi
                                    </li>
                                    <li>
                                        <h3 className="icon fa-search"><span className="label">Qiita</span></h3>
                                        shunyaendoh
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:shunya.endoh@gmail.com">shunya.endoh@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }


export const query = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
        image
      }
      excerpt
      html
      fields {
        slug
      }
    }
  }
}
`