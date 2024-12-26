import { currentUser } from '@clerk/nextjs/server';
import React from "react";
//import { pizzas } from "@/components/data";
import Link from "next/link";
import Image from "next/image";
import { Chapitre } from "@/types/Chapitre";

type Props = {
  params: {
    id: number;
  };
};

const Page = async({ params }: Props) => {
  const user = await currentUser();
  return (
    <main>
      <h1>Welcome, {params.id}</h1>
    </main>
  );
};

export default Page;
