import React, {useState, useContext, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {GlobalContext} from '../context/globalstate';

export const EditEmployee = (route) => {
    let history = useHistory();
    const {employees, editEmployee} = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({
        id: null,
        name: '',
        designation: '',
        location: '',
    });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selected = employees.find(
            (emp) => emp.id === parseInt(employeeId, 2),
        );
        setSeletedUser(selected);
    }, [currentUserId, employees]);

    const onSubmit = (e) => {
        e.preventDefault();
        editEmployee(selectedUser);
        history.push('/');
    };

    const handleOnChange = (userKey, value) =>
        setSeletedUser({...selectedUser, [userKey]: value});

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>;
    }

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">Name of employee</label>
                        <input
                            value={selectedUser.name}
                            onChange={(e) =>
                                handleOnChange('name', e.target.value)
                            }
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            value={selectedUser.location}
                            onChange={(e) =>
                                handleOnChange('location', e.target.value)
                            }
                            type="text"
                            placeholder="Enter location"
                        />
                    </div>
                    <div>
                        <label htmlFor="designation">Designation</label>
                        <input
                            value={selectedUser.designation}
                            onChange={(e) =>
                                handleOnChange('designation', e.target.value)
                            }
                            type="text"
                            placeholder="Enter designation"
                        />
                    </div>
                    <div>
                        <button>Edit Employee</button>
                    </div>
                    <div>
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    );
};
