// components/Hero.tsx
import { AppDemo } from "@/components/AppDemo";
import { AppStoreLink } from "@/components/AppStoreLink";
import { GoogleStoreLink } from "@/components/GoogleStoreLink";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BackgroundIllustration } from "@/components/BackgroundIllustration";

function PlayIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#b64b29" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#b64b29"
        stroke="#b64b29"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <div
      className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 "
      style={{
        backgroundImage: "url('/images/hero-food-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient at the bottom to blend into gray-50 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-gray-50" />

      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20 relative">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-semibold tracking-tight text-primary drop-shadow-md">
              Cook smarter, eat better with WellFed
            </h1>
            <div className="mt-6 inline-block rounded-md bg-white/80 p-4 backdrop-blur-sm">
              <p className="text-lg text-gray-800">
                Discover nutritious recipes tailored to your tastes, schedule
                meals with ease, and enjoy personalized ingredient suggestions.
                WellFed helps you build healthy eating habits, one delicious meal
                at a time.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              <GoogleStoreLink url="https://play.google.com/store/apps/details?id=com.example.yourapp" />
              <Button
                href="https://biteable.com/watch/4277806/9bf1d2fc53a65d17b8f1e45a3e5bbc41"
                variant="outline"
                color="primary"
                className="relative z-10 border border-white/40 bg-white/30 backdrop-blur-sm text-primary hover:bg-white/40"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch how it works</span>
              </Button>
            </div>
          </div>

          {/* Phone Frame & Background */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration
              src="/images/hero-food-bg.jpeg"
              alt="A vibrant dish of healthy food"
              className="absolute inset-0"
              gradient={false}
            />
            <div
              className="-mx-4 h-[448px] px-9
                            sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 relative z-10"
            >
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>

          {/* Additional layout element if needed */}
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"></div>
        </div>
      </Container>
    </div>
  );
}
