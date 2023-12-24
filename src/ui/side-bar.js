import React from 'react';

const SideBar = () => {
    return (
        <div style={styles.sideBar}>
            {/* Logo */}
            <p>Dn</p>
        </div>
    );
};

const styles = {
    sideBar: {
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#7BD3EA',
        width: '70px',
        left : 0
    },
};

export default SideBar;
