import { useState, useEffect } from 'react';
import type { UseFetchUsersProps, UseFetchUsersResult, User } from '../pages/UserDetails/types';


const useFetchUsers = ({
  pagination,
  filters,
}: UseFetchUsersProps): UseFetchUsersResult => {
  const { offset = 0, limit = 20 } = pagination;
  const {
    organization,
    username,
    email,
    dateJoined,
    phone,
    status,
  } = filters || {};

  const [data, setData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);
      try {
        const res = await fetch(
          `https://my.api.mockaroo.com/users.json?key=9d034e40&offset=${offset}&limit=${limit}`
        );
        if (!res.ok) throw new Error('Failed to fetch users');
        const result: User[] = await res.json();
        setData(result);
      } catch (err: unknown | never ) {
        setErrorMessage(err instanceof Error ? err.message : 'An error occurred');
        alert(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [offset, limit]);

  useEffect(() => {
    let filtered = [...data];

    if (organization) {
      filtered = filtered.filter((item) => item.organization === organization);
    }
    if (username) {
      filtered = filtered.filter((item) =>
        item.username?.toLowerCase().includes(username.toLowerCase())
      );
    }
    if (email) {
      filtered = filtered.filter((item) =>
        item.email?.toLowerCase().includes(email.toLowerCase())
      );
    }
    if (dateJoined) {
      const targetdateJoined = new Date(dateJoined).toDateString();
      filtered = filtered.filter(
        (item) => new Date(item.dateJoined).toDateString() === targetdateJoined
      );
    }
    if (phone) {
      filtered = filtered.filter((item) =>
        item.phone?.includes(phone)
      );
    }
    if (status) {
      filtered = filtered.filter((item) => item.status === status);
    }

    setFilteredData(filtered);
  }, [data, organization, username, email, dateJoined, phone, status]);

  return {
    data: filteredData,
    loading,
    errorMessage,
  };
};

export default useFetchUsers;
