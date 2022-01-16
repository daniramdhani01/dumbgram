import { Container } from "react-bootstrap"
import FeedPeople from "../components/FeedPeople"
import ProfilePeopleComponent from "../components/ProfilePeopleComponent"

function ProfilePeople() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3">
                <ProfilePeopleComponent />
            </div>
            <div className="d-flex justify-content-center">
                <hr className="my-0 p-0" style={{ width: 1, height: '100%', minHeight:'100vh' }} />
            </div>
            <div className="col-9">
                <FeedPeople />
            </div>
        </Container>
    )
}

export default ProfilePeople