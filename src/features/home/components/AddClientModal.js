// AddClientModal.js

import React, { useState } from 'react';

const AddClientModal = ({ isOpen, onClose, onAddClient }) => {
    const [clientData, setClientData] = useState({
        name: '',
        number: '',
        price: '',
        purchase: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAddClient = () => {
        // Add client validation logic here if needed
        onAddClient(clientData);
        setClientData({
            name: '',
            number: '',
            price: '',
            purchase: '',
            description: '',
        });
        onClose();
    };

    return (
        <div
            style={{
                display: isOpen ? 'block' : 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            }}
        >
            {/* Overlay */}
            <div style={styles.overlay}></div>

            {/* Modal Content */}
            <div style={styles.modalContent}>
                <span
                    style={styles.close}
                    onClick={onClose}
                >
                    &times;
                </span>
                <h2 style={styles.modalTitle}>Ajouter Client</h2>
                <form>
                    <label style={styles.label}>
                        Client Name:
                        <input
                            type='text'
                            name='name'
                            value={clientData.name}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Client Number:
                        <input
                            type='text'
                            name='number'
                            value={clientData.number}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Client Price:
                        <input
                            type='text'
                            name='price'
                            value={clientData.price}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Client Purchase:
                        <input
                            type='text'
                            name='purchase'
                            value={clientData.purchase}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Description:
                        <textarea
                            name='description'
                            value={clientData.description}
                            onChange={handleChange}
                            style={styles.textarea}
                        ></textarea>
                    </label>
                    <button
                        type='button'
                        onClick={handleAddClient}
                        style={styles.addButton}
                    >
                        Add Client
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    },
    modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        width : '40%'
    },
    close: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '20px',
        cursor: 'pointer',
    },
    modalTitle: {
        color: '#333',
        fontSize: '1.5rem',
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        margin: '10px 0',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    textarea: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        minHeight: '80px',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default AddClientModal;
