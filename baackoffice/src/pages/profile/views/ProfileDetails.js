import React, { useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../router/Router";

function ProfileDetails() {
  const { user, setUser } = useContext(UserContext);
  const navigate=useNavigate()
  return (
    <div className=" gradient-custom-2 shadow p-3 mb-5 bg-white rounded"style={{backgroundImage: 'https://i.pinimg.com/474x/8e/7f/5a/8e7f5aed3e84cac36d41cfd5d3bbd4da.jpg'}}>
    <MDBContainer className="py-5 h-90">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="9" xl="7">
          <MDBCard>
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src={user.imageUrl}
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5">{user.userName}</MDBTypography>
                <MDBCardText>{user.country}</MDBCardText>
              </div>
            </div>
            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="">
              <MDBBtn onClick={()=>navigate("edit")} outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                  Edit profile
                </MDBBtn>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                  <MDBCardText className="font-italic mb-1">Job: {user.job}</MDBCardText>
                  <MDBCardText className="font-italic mb-1">Email: {user.mail}</MDBCardText>
                </div>
              </div>
              
            
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
  )
}

export default ProfileDetails

