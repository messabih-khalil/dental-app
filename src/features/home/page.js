import React, { useState } from 'react';
import './index.css';
import SideBar from '../../ui/side-bar';
import AddClientModal from './components/AddClientModal';
import ClientDetailsModal from './components/ClientDetailsModal';
import UpdateClientModal from './components/UpdateClientModal';
import Navbar from '../../ui/Navbar';

const Page = () => {
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const [clientData, setClientData] = useState([]);

    // Store client data here

    const initialClients = [
        {
            name: 'Client 1',
            number: '001',
            price: 100,
            purchase: 2,
            description: 'Lorem ipsum',
            createdAt: '2023-01-01',
            rest: 50,
            purchases: [
                { purchasePrice: 20, purchaseDate: '2023-01-15' },
                { purchasePrice: 30, purchaseDate: '2023-01-25' },
            ],
        },
        {
            name: 'Client 2',
            number: '002',
            price: 150,
            purchase: 3,
            description: 'Lorem ipsum',
            createdAt: '2023-02-01',
            rest: 80,
            purchases: [
                { purchasePrice: 40, purchaseDate: '2023-02-10' },
                { purchasePrice: 30, purchaseDate: '2023-02-20' },
            ],
        },
        // Add more client data as needed
    ];

    // Function to add a client to the clientData array
    const handleAddClient = (newClient) => {
        setClientData((prevData) => [...prevData, newClient]);
        setAddModalOpen(false);
    };

    function handleDelete(client) {
        // Implement delete logic here
        console.log('Delete client:', client);
    }

    // Function to open the details modal and set the selected client
    const handleOpenDetailsModal = (client) => {
        setSelectedClient(client);
        setDetailsModalOpen(true);
    };

    // Function to update a client in the clientData array
    const handleUpdateClient = (updatedClient) => {
        // Implement your update logic here
        console.log('Update client:', updatedClient);
        setUpdateModalOpen(false);
    };

    return (
        <div>
            {/* <SideBar /> */}

            {/* main */}
            <div style={styles.main}>
                <Navbar />
                <h1>Bonjour, 😁</h1>

                {/* Table */}
                <div style={styles.table}>
                    {/* Add Client Modal */}

                    <button
                        style={{...styles.updateButton , width : 'fit-content'}}
                        onClick={() => setAddModalOpen(true)}
                    >
                        Add Client
                    </button>

                    {/*  */}
                    <AddClientModal
                        isOpen={isAddModalOpen}
                        onClose={() => setAddModalOpen(false)}
                        onAddClient={handleAddClient}
                    />
                    {/* Update Client Modal */}
                    <UpdateClientModal
                        isOpen={isUpdateModalOpen}
                        onClose={() => setUpdateModalOpen(false)}
                        onUpdateClient={handleUpdateClient}
                        selectedClient={selectedClient}
                    />

                    {/* Client Details Modal */}
                    <ClientDetailsModal
                        isOpen={isDetailsModalOpen}
                        onClose={() => setDetailsModalOpen(false)}
                        clientData={selectedClient}
                        onAddPurchase={(client, newPurchase) => {
                            // Implement your logic to add a new purchase for the client
                            console.log('Add Purchase:', client, newPurchase);
                        }}
                    />

                    <table style={styles.clientTable}>
                        <thead style={styles.tableHeader}>
                            <tr>
                                <th style={styles.tableCell}>Client Name</th>
                                <th style={styles.tableCell}>Client Number</th>
                                <th style={styles.tableCell}>Client Price</th>
                                <th style={styles.tableCell}>
                                    Client Purchase
                                </th>
                                <th style={styles.tableCell}>Client Rest</th>
                                <th style={styles.tableCell}>Created At</th>
                                <th style={styles.tableCell}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialClients.map((client, index) => (
                                <tr key={index}>
                                    <td
                                        style={{
                                            ...styles.tableCell,
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            handleOpenDetailsModal(client)
                                        }
                                    >
                                        {client.name}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {client.number}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {client.price}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {client.purchase}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {client.rest}
                                    </td>
                                    <td style={styles.tableCell}>
                                        {client.createdAt}
                                    </td>
                                    <td
                                        style={{
                                            ...styles.tableCell,
                                            ...styles.actionButtons,
                                        }}
                                    >
                                        <button
                                            style={styles.updateButton}
                                            onClick={() => {
                                                setSelectedClient(client);
                                                setUpdateModalOpen(true);
                                            }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            style={styles.deleteButton}
                                            onClick={() => handleDelete(client)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

function buttonStyle(backgroundColor) {
    return {
        padding: '8px 12px',
        backgroundColor: backgroundColor,
        border: 'none',
        borderRadius: 5,
        color: 'white',
        cursor: 'pointer',
    };
}

const styles = {
    main: {
        padding: '30px',
    },
    btn: {
        padding: 10,
        backgroundColor: '#A1EEBD',
        border: 'none',
        borderRadius: 5,
        fontWeight: 'bold',
        cursor: 'pointer',
        marginBottom: 10,
    },
    table: {
        marginTop: 20,
        display : 'flex',
        alignItems : 'flex-end',
        flexDirection : 'column'
    },
    clientTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: 10,
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
        border: '1px solid #ddd',
    },
    tableHeader: {
        background: '#f2f2f2',
    },
    tableCell: {
        padding: '15px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        fontSize: 14,
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    updateButton: {
        ...buttonStyle('#4CAF50'),
    },
    deleteButton: {
        ...buttonStyle('#FF5252'),
    },
};

export default Page;
