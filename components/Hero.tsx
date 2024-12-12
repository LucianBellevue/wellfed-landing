// components/Hero.tsx
import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";
import { AppDemo } from "./AppDemo";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4
                 bg-gradient-to-b from-white via-[rgba(255,255,255,0.9)] to-[#fffaf7] overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-food.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none"></div>

      <Image
        src="/wellfed-logo.png"
        alt="Wellfed Logo"
        width={100}
        height={100}
        className="mb-6 animate-fade-in"
      />
      <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight leading-tight animate-fade-in">
        Wellfed
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed animate-fade-in delay-200">
        Discover delicious recipes, plan your meals, and get personalized
        ingredient suggestions. Eat smarter, live better.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
        <a
          href="https://appstore.com/yourapp"
          className="inline-block bg-secondary text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#d8844b] transition-transform transform hover:scale-105"
        >
          Download on App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=yourapp"
          className="inline-block border border-secondary text-secondary px-6 py-3 rounded-md hover:bg-secondary hover:text-white transition-transform transform hover:scale-105 shadow-sm"
        >
          Get it on Google Play
        </a>
      </div>

      {/* Device preview section */}
      <div className="relative mt-16 w-full max-w-[366px] mx-auto">
        {/* Decorative element suggesting freshness */}
        <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[#fff2ed] to-[#ffebd6] blur-3xl scale-150"></div>

        <PhoneFrame className="relative mx-auto max-w-[366px] shadow-2xl border border-gray-200 rounded-lg overflow-hidden" priority>
          <AppDemo />
        </PhoneFrame>
      </div>
    </section>
  );
}
