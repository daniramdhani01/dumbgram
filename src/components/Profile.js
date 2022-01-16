import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
//icons
import edit from '../assets/icons/edit.svg'
import home from '../assets/icons/home.svg'
import compass from '../assets/icons/compass.svg'
import logout from '../assets/icons/logout.svg'
//image
import lisa from '../assets/lisa.png'

function Profile() {
    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <h1 className='title-dg text-start'>DumbGram</h1>
                <div className="d-flex justify-content-end">
                    <img src={edit} alt="" />
                </div>
                <img src={lisa} alt="" className='' style={{ borderRadius: '1000px', width:125 }} />
                <h2>Lisa</h2>
                <div className="">@lalalisa_m</div>
                <Row>
                    <Col>
                        Post
                    </Col>
                    <Col>
                        Follower
                    </Col>
                    <Col>
                        Following
                    </Col>
                </Row>
                <Row>
                    <Col>
                        200
                    </Col>
                    <Col>
                        5.1 M
                    </Col>
                    <Col>
                        1
                    </Col>
                </Row>
                Rapper in Black Pink, Brand Ambasador Penshoppe
                <hr />
                <Row className='text-start mb-3'>
                    <Col>
                        <Link to='/feed' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={home} alt="" className='me-3' />Feed
                        </Link>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Col>
                        <Link to='/explore' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={compass} alt="" className='me-3' />Explore
                        </Link>
                    </Col>
                </Row>
                <hr />
                <Row className='text-start'>
                    <Col>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={logout} alt="" className='me-3' />Logout
                        </Link>
                    </Col>
                </Row>
                <hr />
            </div>
        </>
    )
}

export default Profile