import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
interface UserData {
    firstName: string;
    lastName: string;
    isActive: boolean;
    uuid?: string;
}

interface ContactCardProps {
    isNewContact?: boolean;
    userData?: UserData | null;
}

const ContactCard: React.FC<ContactCardProps> = ({ isNewContact, userData }) => {
    const [inputValues, setInputValues] = useState<UserData>({
        firstName: isNewContact ? '' : userData?.firstName || '',
        lastName: isNewContact ? '' : userData?.lastName || '',
        isActive: isNewContact ? false : userData?.isActive || false,
    });
    useEffect(() => {
        setInputValues({
            firstName: userData?.firstName || '',
            lastName: userData?.lastName || '',
            isActive: userData?.isActive || false
        })
    }, [userData])


    console.log({ isNewContact, userData });
    const router = useRouter();

    const { firstName, isActive, lastName } = inputValues;

    const submitHandler = () => {
        // Retrieve existing stored input values from local storage
        const storedValues = localStorage.getItem('inputValues');

        // Parse retrieved value or initialize an empty array
        let existingValues: UserData[] = storedValues ? JSON.parse(storedValues) : [];

        // Generate UUID for the current input value
        const uuid = isNewContact ? uuidv4() : userData?.uuid;

        // Check if current input value already exists in the array
        const isValueExists = existingValues.some((value) => value.uuid === uuid);

        // If the value does not exist, update the existing value or add it to the array
        if (!isValueExists && isNewContact) {
            existingValues.push({ ...inputValues, uuid });
        }
        if (isValueExists && userData) {
            existingValues.filter((value) => {
                if (value.uuid === uuid) {
                    value["firstName"] = firstName;
                    value["lastName"] = lastName;
                    value["isActive"] = isActive;
                }
            });

        }

        // Store the updated array of unique input values back to local storage
        localStorage.setItem('inputValues', JSON.stringify(existingValues));

        console.log(inputValues);


    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === 'true'; // Convert string value to boolean
        setInputValues({ ...inputValues, isActive: value });
    };

    return (
        <div className="block max-w-full md:max-w-sm p-6 bg-white border relative pb-16 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl font-bold tracking-tight text-center mb-5 text-gray-900 whitespace-nowrap dark:text-white">
                {isNewContact ? 'Add Contact' : 'Edit Contact'}
            </h1>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 whitespace-nowrap dark:text-white">
                        First Name
                    </h5>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block flex-grow p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setInputValues({ ...inputValues, firstName: e.target.value })}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 whitespace-nowrap dark:text-white">
                        Last Name
                    </h5>
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block flex-grow p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => setInputValues({ ...inputValues, lastName: e.target.value })}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <h5 className="mb-2 text-base md:text-lg font-bold tracking-tight text-gray-900 whitespace-nowrap dark:text-white">
                        Status
                    </h5>
                    <div className="flex items-center ml-10">
                        <input
                            onChange={handleRadioChange}
                            id="active"
                            type="radio"
                            value="true"
                            name="status"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={isActive}
                        />
                        <label
                            htmlFor="active"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Active
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            onChange={handleRadioChange}
                            id="inactive"
                            type="radio"
                            value="false"
                            name="status"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={!isActive}
                        />
                        <label
                            htmlFor="inactive"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Inactive
                        </label>
                    </div>
                </div>
            </div>
            <button
                onClick={submitHandler}
                type="button"
                className="focus:outline-none absolute right-2 bottom-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                Save
            </button>
        </div>
    );
};

export default ContactCard;
