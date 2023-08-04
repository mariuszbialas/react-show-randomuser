import React, {useState} from 'react';

import Dialog from "../Dialog/Dialog";
import CenteredModal from "../Modal/CenteredModal";

import Button from 'react-bootstrap/Button';

const ShowOneUser = props => {
    const [modalShow, setModalShow] = useState(false)
    const user = props.user

    if(modalShow) return <CenteredModal show={modalShow} data={user} onHide={() => setModalShow(false)}/>

    return (
        <li>
            <Dialog>
                <div className="d-flex align-items-center p-3">
                    <div>
                        <img
                            src={user.picture.medium}
                            className="rounded-circle border-2 border-info"/>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-baseline ms-4 flex-grow-1">
                        <h5
                            className={`mb - 0 ${user.gender === 'female' ? 'female' : 'male'}`}
                        >
                            {user.name.last}, {user.name.first}
                        </h5>
                        <p className="mb-0">{user.login.username}</p>

                    </div>

                    <div className="text-info w-25">
                        <Button
                            variant="info"
                            onClick={() => setModalShow(true)}
                        >
                            <i className="bi bi-arrow-right-square"></i>
                        </Button>
                    </div>

                </div>
            </Dialog>
        </li>
    );
};

export default ShowOneUser;