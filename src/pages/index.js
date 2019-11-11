import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Post from '../components/Post'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Work from '../components/Work'


const siteTitle = "ShunyaEndoh - HOME"
const siteDescription = "This is Home page!"

export default ({ data }) => {

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                    <meta name="keywords" content="gatsby, gatsbyjs blog, shunyaendoh, shunya endo" />
                    <meta name="robots" content="index,follow"></meta>
                </Helmet>

                <div id="main">
                <section id="one">
                        <header className="major">
                            <h2>
                                初めまして、遠藤 駿也と申します。
                            </h2>
                        </header>
                        <p>
                            私は現在22歳で、出身地は東京です。<br /> 私はプログラミングにどっぷりハマっています。<br /> 最近特にGatsby.jsに興味があり、アウトプットの一環としてこのサイトを作りました。<br />もし、私に少しでも興味を持って頂けたなら下のボタンをクリックして詳細をみてください。
                        </p>
                        <ul className="actions">
                            <li><Link to="/about" className="button">詳細</Link></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>ブログ</h2>
                        <div className="row" style={{ overflow: 'scroll', height: '20.2rem'}}>
                        {data.allMarkdownRemark.nodes.map((node) => (
                        <Post image={node.frontmatter.image} title={node.frontmatter.title} excerpt={node.excerpt} readMore={node.fields.slug} />
                        ))}
                        </div>
                    </section>

                    <section id="three">
                        <h2>ワーク</h2>
                        <div className="row" style={{ overflow: 'scroll', height: '15.2rem' }}>
                            <Work link="https://vue-slack-prod-da6b0.web.app/" image="https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg" title="リアルタイムチャット (Vue.js)"/>
                            <Work link="https://ideathon-village.herokuapp.com/" image="https://xzxzyzyz.com/img/feature/laravel-57-released.png" title="マッチングサービス (Laravel)"/>
                            <Work link="https://shunyaendoh1215.github.io/Portfolio-vue/" image="https://miro.medium.com/max/3920/1*Vc0m5dS9SlhieEbR6n8wFg.jpeg" title="ポートフォリオ (Vue.js)"/>
                            <Work link="/" image="https://secure.meetupstatic.com/photos/event/5/d/4/d/600_478883885.jpeg" title="ブログ兼自己紹介 (Gatsby.js)"/>
                            <Work link="https://shunyaendoh-com.netlify.com/" image="http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464" title="自己紹介ページ (HTML)"/>
                            <Work link="https://55web-a-shunyaendoh.netlify.com/" image="http://d2ln1xbi067hum.cloudfront.net/course_offerings/logos/000/003/047/original/maxresdefault.jpg?1455609464" title="席順+自己紹介ページ (HTML)"/>
                        </div>
                    </section>

                    <section id="four">
                        <h2>コンタクト</h2>
                        <p>気軽に連絡してください。</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="お名前" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="メールアドレス" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="メッセージ" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="送信" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        東京都-西東京市
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