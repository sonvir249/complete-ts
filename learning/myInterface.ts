interface User {
  email: string;
  readonly userId: number;
  googleId?: string;
  getName?(): string;
  getDetails?(id: number): number;
}

interface newUser extends User {
  githubId: string;
}

const sonvir: User  = {
  email: 'sonvir@gmail.com',
  userId: 123,
  getName: () => "Sonvir",
  getDetails: (id: 123) => {return id}
}

const newSonvir: newUser = {
  email: 'sonvir@gmail.com',
  githubId: "sonvir249",
  userId: 123,
}

interface userRole extends newUser {
  role: "ADMIN" | "CONTENT_EDITOR" | "AUTHENTICATED",
}

