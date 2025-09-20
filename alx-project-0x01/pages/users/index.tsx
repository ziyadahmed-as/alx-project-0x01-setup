// pages/users/index.tsx
import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [userList, setUserList] = useState<UserProps[]>(users);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle adding a new user from the modal
  const handleAddUser = (user: UserProps) => {
    setUserList([...userList, user]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {userList.map((user: UserProps) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              company={user.company}
              address={user.address}
            />
          ))}
        </div>
      </main>

      {/* User Modal */}
      <UserModal
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser} // ✅ Updated to match UserModalProps interface
      />
    </div>
  );
};

// Fetch users from API at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
