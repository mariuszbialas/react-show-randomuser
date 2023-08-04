import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CenteredModal = (props) => {
  const user = props.data;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="ms-3">
            {user.name.last}, {user.name.first} ({user.login.username})
          </span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="d-flex justify-content-between align-items-center">
        <div className="ms-5">
          <img src={user.picture.large} className="rounded-circle" />
        </div>

        <div className="flex-grow-1 ms-5">
          <p>
            <i
              className={`bi bi-geo ms-2 ${
                user.gender === 'female' ? 'female' : 'male'
              }`}>
              {' '}
            </i>
            {user.location.street.name} {user.location.street.number},{' '}
            {user.location.postcode} {user.location.city},{' '}
            {user.location.country}
            <br />
          </p>
          <p>
            <i
              className={`bi bi-envelope-at ms-2 ${
                user.gender === 'female' ? 'female' : 'male'
              }`}>
              {' '}
            </i>
            {user.email}
          </p>
          <p>
            <i
              className={`bi bi-telephone ms-2 ${
                user.gender === 'female' ? 'female' : 'male'
              }`}>
              {' '}
            </i>
            {user.phone}, mobil: {user.cell}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CenteredModal;
