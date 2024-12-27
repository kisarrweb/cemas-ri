import { currentUser } from '@clerk/nextjs/server';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddChapitre from '@/components/AddChapitre';

const Page = async (props: {params: Promise<{id: number}>}) => {
  const params = await props.params;
  const user = await currentUser();
  const { id } = await params;
  return (
    <main>
      <h1>Welcome, {params.id}</h1>
         
      <AddChapitre />
    </main>
  );
};

export default Page;
