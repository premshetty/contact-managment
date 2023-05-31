"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Table = () => {
    const [inputValues, setInputValues] = useState([]);

    // Function to delete a contact
    const deleteContactHandler = (contactId) => {
        const updatedContacts = inputValues.filter((contact) => contact.uuid !== contactId);
        setInputValues(updatedContacts);
        localStorage.setItem('inputValues', JSON.stringify(updatedContacts));
    };

    // Function to retrieve and update input values from local storage
    const refreshTable = () => {
        const storedValues = localStorage.getItem('inputValues');
        const existingValues = storedValues ? JSON.parse(storedValues) : [];
        setInputValues(existingValues);
    };

    // Initial loading of input values from local storage
    useEffect(() => {
        refreshTable();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            First  name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {inputValues.map(({ firstName, lastName, isActive, uuid }) => {
                        return <tr key={uuid} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">{firstName}</td>
                            <td className="px-6 py-4">{lastName}</td>
                            <td className="px-6 py-4">{isActive ? "Active" : 'InActive'}</td>

                            <td class="px-6 py-4">
                                <div class="flex items-center space-x-4">
                                    <Link href={`/add-contact?id=${uuid}`} class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium  text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Edit">
                                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                        </svg></Link>
                                    <button onClick={() => deleteContactHandler(uuid)} class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium  text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10" type="button" aria-label="Delete">
                                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                        </svg></button></div></td>
                        </tr>

                    })
                    }

                </tbody>
            </table>
        </div>

    )
}

export default Table