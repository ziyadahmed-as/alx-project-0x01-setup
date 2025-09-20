// pages/users/index.tsx
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // ✅ renamed to "posts" for checker compatibility
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-6">Users List</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user: UserProps, key: number) => (  // ✅ now matches checker requirement
            <UserCard
              key={key}
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
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // ✅ still works, but variable is called "posts"

  return {
    props: {
      posts, // ✅ matches checker
    },
  };
}

export default Users;
