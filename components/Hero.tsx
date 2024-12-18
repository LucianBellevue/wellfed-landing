// components/Hero.tsx
import { AppDemo } from "@/components/AppDemo";
import { AppStoreLink } from "@/components/AppStoreLink";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BackgroundIllustration } from "@/components/BackgroundIllustration";

function PlayIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Text Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-primary">
              Cook smarter, eat better with WellFed
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Discover nutritious recipes tailored to your tastes, schedule
              meals with ease, and enjoy personalized ingredient suggestions.
              WellFed helps you build healthy eating habits, one delicious meal
              at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
              <Button
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                variant="outline"
              >
                <PlayIcon className="h-6 w-6 flex-none" />
                <span className="ml-2.5">Watch how it works</span>
              </Button>
            </div>
          </div>

          {/* Phone Frame & Background */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration
              src="/hero-food-bg.jpeg"
              alt="A vibrant dish of healthy food"
            />
            <div
              className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]
                            sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"
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
