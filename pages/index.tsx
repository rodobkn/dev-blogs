import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline text-gray-400">Hello world!</h1>
  );
}
