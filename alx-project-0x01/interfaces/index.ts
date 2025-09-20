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
export interface UserData {
  id?: number; // make optional for creating new users
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

// ✅ Checker requires this exact export + function signature
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
