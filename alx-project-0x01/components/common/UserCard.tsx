import React from "react";
import Link from 'next/link';

import { UserProps } from "@/interfaces";
const UserCard: React.FC<UserProps> = (
    { name, username, email, phone, website, address, company }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">    
        <h2 className="text-2xl font-bold mb-2">{name} ({username})</h2>
        <p className="text-gray-600 mb-1"><strong>Email:</strong> {email}</p>
        <p className="text-gray-600 mb-1"><strong>Phone:</strong> {phone}</p>
        <p className="text-gray-600 mb-1"><strong>Website:</strong> <a href={`http://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{website}</a></p>
        <div className="text-gray-600 mb-1">
            <strong>Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}  
            <br />
            <strong>Geo:</strong> Lat: {address.geo.lat}, Lng: {address.geo.lng}
        </div>
        <div className="text-gray-600">
            <strong>Company:</strong> {company.name} - {company.catchPhrase} ({company.bs}) 
        </div>
    </div>
  );
}
export default UserCard;