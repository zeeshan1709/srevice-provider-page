import React from 'react';
import './ServiceProvider.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ServiceCard = () => {
  return (
    <div>
     <div className='service'>
     <div className='servicebtn'>
        <button>Services</button>
      </div>
      <div className='servicebtn1'>
        <button>Top AC service Provider</button>
      </div>
      <button className='sort'>Sort by: Relevance</button>
     </div>
     <center><b><u>AC Service Providers</u></b></center>
      <div className="service-card">
      <div className="header">
        <img src='' alt="Arjun Ravat" className="profile-pic" />
        <div className="info">
          <h2>Arjun Ravat</h2>
          <p>Indian Ac Services</p>
        </div>
      </div>
      <div className="content">
        <h3>Service Flow</h3>
        <ul>
          <li>Pre-service checks</li>
          <li>Jacket for mess-free service</li>
          <li>Indoor unit Foam-jet cleaning</li>
          <li>Outdoor unit Powerjet cleaning</li>
          <li>Final checks & clean-up</li>
          <li>Personal energy saving report</li>
        </ul>
      </div>
      <div className="images">
        <img src='https://img.freepik.com/premium-photo/technician-repair-air-conditioner_41969-25555.jpg' alt="Service step 1" />
        <img src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg' alt="Service step 2" />
        <img src='https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg' alt="Service step 3" />
        <img src='https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=' alt="Service step 4" />
        <img src='https://i.pinimg.com/originals/93/52/90/9352908fd23a8cd86f4990e5b1529d3d.jpg' alt="Service step 5" />
      </div>
      <div className="footer">
      <div className="help-text">
        <p >We are here</p>
        <span> to help you...</span>
        </div>
        <div className="rating">
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" />
    </Stack>
        </div>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
    <div className="service-card">
      <div className="header">
        <img src='' alt="Arjun Ravat" className="profile-pic" />
        <div className="info">
          <h2>Arjun Ravat</h2>
          <p>Indian Ac Services</p>
        </div>
      </div>
      <div className="content">
        <h3>Service Flow</h3>
        <ul>
          <li>Pre-service checks</li>
          <li>Jacket for mess-free service</li>
          <li>Indoor unit Foam-jet cleaning</li>
          <li>Outdoor unit Powerjet cleaning</li>
          <li>Final checks & clean-up</li>
          <li>Personal energy saving report</li>
        </ul>
      </div>
      <div className="images">
        <img src='https://img.freepik.com/premium-photo/technician-repair-air-conditioner_41969-25555.jpg' alt="Service step 1" />
        <img src='https://i.pinimg.com/originals/93/52/90/9352908fd23a8cd86f4990e5b1529d3d.jpg' alt="Service step 2" />
        <img src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg' alt="Service step 3" />
        <img src='https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=' alt="Service step 4" />
        <img src='https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg' alt="Service step 5" />
      </div>
      <div className="footer">
      <div className="help-text">
        <p >We are here</p>
        <span> to help you...</span>
        </div>
        <div className="rating">
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" />
    </Stack>
        </div>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
    <div className="service-card">
      <div className="header">
        <img src='' alt="Arjun Ravat" className="profile-pic" />
        <div className="info">
          <h2>Arjun Ravat</h2>
          <p>Indian Ac Services</p>
        </div>
      </div>
      <div className="content">
        <h3>Service Flow</h3>
        <ul>
          <li>Pre-service checks</li>
          <li>Jacket for mess-free service</li>
          <li>Indoor unit Foam-jet cleaning</li>
          <li>Outdoor unit Powerjet cleaning</li>
          <li>Final checks & clean-up</li>
          <li>Personal energy saving report</li>
        </ul>
      </div>
      <div className="images">
        <img src='https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg' alt="Service step 1" />
        <img src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg' alt="Service step 2" />
        <img src='https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=' alt="Service step 3" />
        <img src='https://i.pinimg.com/originals/93/52/90/9352908fd23a8cd86f4990e5b1529d3d.jpg' alt="Service step 4" />
        <img src='https://img.freepik.com/premium-photo/technician-repair-air-conditioner_41969-25555.jpg' alt="Service step 5" />
      </div>
      <div className="footer">
      <div className="help-text">
        <p >We are here</p>
        <span> to help you...</span>
        </div>
        <div className="rating">
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" />
    </Stack>
        </div>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
    <div className="service-card">
      <div className="header">
        <img src='' alt="Arjun Ravat" className="profile-pic" />
        <div className="info">
          <h2>Arjun Ravat</h2>
          <p>Indian Ac Services</p>
        </div>
      </div>
      <div className="content">
        <h3>Service Flow</h3>
        <ul>
          <li>Pre-service checks</li>
          <li>Jacket for mess-free service</li>
          <li>Indoor unit Foam-jet cleaning</li>
          <li>Outdoor unit Powerjet cleaning</li>
          <li>Final checks & clean-up</li>
          <li>Personal energy saving report</li>
        </ul>
      </div>
      <div className="images">
        <img src='https://i.pinimg.com/originals/93/52/90/9352908fd23a8cd86f4990e5b1529d3d.jpg' alt="Service step 1" />
        <img src='https://img.freepik.com/free-photo/checking-conditioner_1098-17787.jpg' alt="Service step 2" />
        <img src='https://img.freepik.com/premium-photo/technician-repair-air-conditioner_41969-25555.jpg' alt="Service step 3" />
        <img src='https://img.freepik.com/premium-photo/male-technician-overalls-blue-cap-repairs-air-conditioner-wall_353017-470.jpg' alt="Service step 4" />
        <img src='https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=' alt="Service step 5" />
      </div>
      <div className="footer">
        <div className="help-text">
        <p >We are here</p>
        <span> to help you...</span>
        </div>
        <div className="rating">
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" />
    </Stack>
        </div>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
    </div>
  );
}

export default ServiceCard;
