import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl lg:text-6xl text-center font-bold text-lime-600 mb-4">
          Bienvenue à la casa rural de la Portella
        </h1>
        <Image
          src="https://media.er2.co/es/lleida/0000000016775/635/516d1e8ae292b.jpg"
          alt="Casa Rural de la Portella"
          width={800}
          height={500}
        />
      </div>
    </main>
  );
}
