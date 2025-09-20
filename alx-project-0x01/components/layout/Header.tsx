import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
          <Link href="/">Daily Contents</Link>
        </h3>
        <nav className='align-middle text-lg font-medium '>
          <ul className="flex space-x-4">
            <li className="hover:underline txt-lg font-semibold ">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
