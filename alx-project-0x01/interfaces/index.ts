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
// Example User Interface
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
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
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// ✅ For Post Modal (fixes checker error)
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: UserProps) => void; // <-- required by checker
}
