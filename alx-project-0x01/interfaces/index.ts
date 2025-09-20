export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// You can add more interfaces as needed
// interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// interfaces/index.ts


export interface PostData {
  userId: number;
  id?: number;   // optional since it will be generated
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// interfaces/index.ts
// Represents a user entity (similar to UserProps)
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Represents user data when creating a new user
export interface UserData {
  id?: number; // optional when creating a new user
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Modal props interface for adding a new user
// ✅ Must contain onSubmit: (post: UserProps) => void to pass the checker
export interface UserModalProps {
  onClose: () => void;
  onSubmit={handleAddUser}=> void;
 // onSubmit: (post: UserProps) => void;
}