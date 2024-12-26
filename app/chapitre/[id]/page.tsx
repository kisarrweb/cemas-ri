import { currentUser } from '@clerk/nextjs/server';
import React from "react";
//import { pizzas } from "@/components/data";
import Link from "next/link";
import Image from "next/image";
import { Chapitre } from "@/types/Chapitre";

const Page = async({ params }: {params:{id: number}}) => {
  const user = await currentUser();
  const { id } = await params;
  return (
    <main>
      <h1>Welcome, {params.id}</h1>
    </main>
  );
};

export default Page;
