import React, { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const debouncedSearch = useMemo(() =>
    debounce((searchTerm) => {
      setFilteredUsers(users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }, 300),
  [users]);

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">User List</h2>
      <div className="flex items-center border rounded-xl px-3 py-2 max-w-lg mx-auto bg-white shadow-sm">
        <svg className="h-5 w-5 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          type="search"
          required
          placeholder="Search Users..."
          className="w-full outline-none bg-transparent text-gray-700"
          onChange={(e) => {
            setQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
          value={query}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-medium">{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company?.name || "No Company"}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default User;
