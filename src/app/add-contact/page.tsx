'use client'
import ContactCard from "@/components/ContactCard";
import { usePathname, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

interface UserData {
  firstName: string;
  lastName: string;
  isActive: boolean;
  uuid: string;
}

export default function Home() {
  const params = useSearchParams();
  const id = params.get('id');

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (id) {
      const storedValues = localStorage.getItem('inputValues');
      const existingValues: UserData[] = storedValues ? JSON.parse(storedValues) : [];
      const user = existingValues.find((value) => value.uuid === id);
      if (user) {
        setUserData(user);
      }
    }
  }, [id]);

  return (
    <div className="p-3 w-full">
      {id ? (
        <ContactCard userData={userData} isNewContact={false} />
      ) : (
        <ContactCard isNewContact={true} />
      )}
    </div>
  );
}
