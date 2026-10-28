export const users = [
    {
      name: "April",
      email: "april@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer",
    },
    {
      name: "Yani",
      email: "yani@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
    },
    {
      name: "Safitri",
      email: "safitri@gmail.com",
      street: "Jl. Pemuda",
      city: "Kendal",
    },
  ];

  export const newUsers = [
    {
      name: "New April",
      email: "april@gmail.com",
      street: "Jl. Indraprasta",
      city: "Semarang",
      age: 25,
      job: "Web Developer",
    },
    {
      name: "New Yani",
      email: "yani@gmail.com",
      street: "Jl. Imam Bonjol",
      city: "Ungaran",
    },
  ];

  const city ="jakarta";
  const street ="Jl Kebon Jeruk";

  export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
      city,
      street,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};