// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-white">
      <Image
        src="/wellfed-logo.png"
        alt="Wellfed Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-primary mb-4">Wellfed</h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Discover delicious recipes, plan your meals, and get personalized ingredient suggestions. Eat smarter, live better.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="https://appstore.com/yourapp" className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition">
          Download on App Store
        </a>
        <a href="https://play.google.com/store/apps/details?id=yourapp" className="border border-secondary text-secondary px-6 py-3 rounded-md hover:bg-secondary hover:text-white transition">
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}
