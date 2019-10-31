import React from 'react'
import Helmet from 'react-helmet'

import { Card } from 'react-bootstrap'
import Layout from '../components/layout'

import thumb01 from '../assets/images/thumbs/kinder.jpg'
import thumb02 from '../assets/images/thumbs/elementary.jpg'
import thumb03 from '../assets/images/thumbs/junior_high.jpg'
import thumb04 from '../assets/images/thumbs/high.jpg'
import thumb05 from '../assets/images/thumbs/university.jpg'

class ABOUT extends React.Component {

    render() {
        const siteTitle = "ShunyaEndoh - ABOUT"
        const siteDescription = "This is About me!"

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
                                初めまして、遠藤 駿也と申します。
                            </h2>
                        </header>
                        <p>
                            私は現在22歳で、出身地は東京です。<br /> 私はプログラミングにどっぷりハマっています。<br /> 最近特にGatsby.jsに興味があり、アウトプットの一環としてこのサイトを作りました。<br />もし、私に少しでも興味を持って頂けたなら詳細をみてください。
                        </p>
                        <p>
                            おっと、もうクリックしてくれたみたいですね。
                        </p>
                        <ul className="actions">
                        </ul>
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2>
                                人生だいたいこんな感じ
                            </h2>
                        </header>
                        <div className="row">
                            <div className="col-12 card-center">
                                <Card border="success" style={{ width: '75%' }} className="text-center mx-auto">
                                    <Card.Header>出生</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’97 12/15</Card.Title>
                                    <Card.Text>
                                        3200gの元気な男の子として東京-西東京市に誕生
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>幼稚園</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’01 4/1</Card.Title>
                                    <Card.Text>
                                        当時はとても大人しい子だったそうで、よく兄弟に泣かされていた。サッカークラブで当時の監督に指名されたセンターバックというポジションを12年間続けることになる。
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right ml-3 d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb01} height="250" className="mt-3"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-5 card-left mr-4 d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb02} height="250" className="mt-4"/>
                                </div>
                            </div>
                            <div className="col-sm-6 card-right ml-4 ml-lg-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>小学校</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’03 4/1</Card.Title>
                                    <Card.Text>
                                        サッカークラブに入って市の選抜に選ばれる。学校ではパソコン部に所属。広報委員会では新聞のレイアウトを担当していた。"ニコニコ動画"をみている時にプログラミングというものを知る。メモ帳を使ってアラートを出したり双六を作って遊んでいた。
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>中学校</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’09 4/1</Card.Title>
                                    <Card.Text>
                                        サッカー部に入部しキャプテンを任される。中学生という多感な時期のチームメイトを纏めあげるのに苦労する。個人では東京の選抜まで躍進。この頃はプログラミングについては忘れていたが、元来インドアなのでオフの日はサッカーというよりもむしろオンラインゲームだった。
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb03} height="250" className="mt-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-5 card-left mr-4 d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb04} height="250" className="mt-4"/>
                                </div>
                            </div>
                            <div className="col-sm-6 card-right ml-4 ml-lg-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>高校</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’12 4/1</Card.Title>
                                    <Card.Text>
                                        何か新しいこと+苦手なことを始めたい一心でダンス同好会を作る会に入会する。この会は歴史が浅いため会員数が60人近くいるのに関わらず、部活はおろか同好会にすら上げてもらえなかった。そのため日々からダンスの練習はもちろん、挨拶回りや制服の第一ボタンを閉めるなどを徹底してその結果同好会まであげることが出来た。
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 card-left ml-3">
                                <Card border="success" style={{ width: '100%' }} className="text-center mx-auto">
                                    <Card.Header>大学</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’15 4/1</Card.Title>
                                    <Card.Text>
                                        大学一年でC言語に触れる。はじめこそワクワクして取り組んでいたが、実態は数学クイズのようなものでつまらなかった。今考えるとあの時C言語に触れていたおかげでLinuxコマンド、プログラミングに対しての耐性、アルゴリズム等大切なものを学んだ気がする。サークルはダンスサークルでジャンル副リーダーを任される。        
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-5 card-right d-sm-inline d-none">
                                <div className="container">
                                    <img src={thumb05} height="250" className="mt-4"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="border-right col-6 ml-3" style={{ height: '5rem' }}></div>
                        </div>
                        <div className="row">
                            <div className="col-12 card-center">
                                <Card border="success" style={{ width: '75%' }} className="text-center mx-auto">
                                    <Card.Header>現在</Card.Header>
                                    <Card.Body>
                                    <Card.Title>’19 8/5</Card.Title>
                                    <Card.Text>
                                        大学を一年休学し、セブ島にエンジニア+語学留学。
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }
}

export default ABOUT