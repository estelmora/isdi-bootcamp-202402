import React, { useState, useEffect } from 'react';
import logic from '../logic';
import { logger } from '../utils';

function Navbar({ onUserLoggedOut }) {
    const [user, setUser] = useState(null);

    let token = sessionStorage.getItem('token');

    const handleLogoutClick = () => {
        try {
            logic.logoutUser();
        }
        catch (error) {
            logic.cleanUpLoggedInUserId();
        }
        finally {
            onUserLoggedOut();
        }
    }

    useEffect(() => {
        if (token) {
            logic.retrieveUser(token)
                .then(usuario => {
                    setUser(usuario);
                    logger.debug('Usuario cargado:', usuario);
                })
                .catch(error => {
                    logger.error('Error al recuperar usuario:', error);
                });
        } else {
            logger.debug('No token available, user not loaded');
        }

        return (() => {
            setUser(null)
        })
    }, [token]);

    return (
        <nav className="k">
            {user && (
                <div className="">
                    <p> Welcome, {user.name} !</p>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#" onClick={handleLogoutClick}>Close session</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
