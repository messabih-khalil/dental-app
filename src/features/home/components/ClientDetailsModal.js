// ClientDetailsModal.js

import React, { useState, useEffect } from 'react';

const ClientDetailsModal = ({ isOpen, onClose, clientData, onAddPurchase }) => {
    const [newPurchase, setNewPurchase] = useState({
        purchasePrice: '',
        purchaseDate: '',
    });

    useEffect(() => {
        // Clear the new purchase fields when the modal opens
        setNewPurchase({
            purchasePrice: '',
            purchaseDate: '',
        });
    }, [isOpen]);

    const handleAddPurchase = () => {
        // Add purchase validation logic here if needed
        onAddPurchase(clientData, newPurchase);
        // Clear the new purchase fields after adding
        setNewPurchase({
            purchasePrice: '',
            purchaseDate: '',
        });
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
                <h2 style={styles.modalTitle}>
                    {clientData
                        ? `${clientData.name}'s Purchase Details`
                        : 'Client Purchase Details'}
                </h2>

                {/* Rest Price */}
                <div style={styles.restPrice}>
                    <strong>Rest Price:</strong>{' '}
                    {clientData ? clientData.rest : ''}
                </div>

                <table style={styles.purchaseTable}>
                    <thead style={styles.tableHeader}>
                        <tr>
                            <th style={styles.tableCell}>Purchase Price</th>
                            <th style={styles.tableCell}>Purchase Date</th>
                            <th style={styles.tableCell}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through clientData.purchases to render rows */}
                        {clientData &&
                            clientData.purchases.map((purchase, index) => (
                                <tr key={index}>
                                    <td style={styles.tableCell}>
                                        {purchase.purchasePrice}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {purchase.purchaseDate}
                                    </td>
                                    <td style={styles.tableCell}>
                                        <button
                                            style={styles.deleteButton}
                                            onClick={() =>
                                                handleDeletePurchase(index)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                {/* Add New Purchase Section */}
                <div style={styles.newPurchaseSection}>
                    <label style={styles.label}>
                        New Purchase Price:
                        <input
                            type='text'
                            name='purchasePrice'
                            value={newPurchase.purchasePrice}
                            onChange={(e) =>
                                setNewPurchase({
                                    ...newPurchase,
                                    purchasePrice: e.target.value,
                                })
                            }
                            style={styles.input}
                        />
                    </label>
                </div>

                {/* Add New Purchase Section */}
                <div style={styles.newPurchaseSection}>
                    {/* ... (other input fields) */}
                    <button
                        type='button'
                        onClick={handleAddPurchase}
                        style={styles.addButton}
                    >
                        Add Purchase
                    </button>
                </div>
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
        maxWidth: '600px',
        width: '80%',
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
    restPrice: {
        marginBottom: '20px',
    },
    purchaseTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        border: '1px solid #ddd',
    },
    newPurchaseSection: {
        marginTop: '20px',
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
    addButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    purchaseTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        border: '1px solid #ddd',
    },
    tableHeader: {
        background: '#f2f2f2',
    },
    tableCell: {
        padding: '15px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        fontSize: '14px',
    },
    deleteButton: {
        backgroundColor: '#FF5252',
        color: 'white',
        padding: '8px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginRight: '5px',
    },
};

export default ClientDetailsModal;
