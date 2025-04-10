import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function ArticleThree() {
  return (
    <article className="mt-24 max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Five Best Foods to Eat When You&apos;re Sick
        </h1>
        <p className="text-gray-700 mt-2">
          In this article, we discuss the five best foods to eat whether you
          have nausea, cold-like symptoms, dehydration, or the flu. Consuming
          these foods will consistently provide fast sickness relief and
          recovery.
        </p>
      </header>

      {/* Hero / Room Image */}
      <div className="w-full h-64 relative mb-8">
        <Image
          src="/images/articles/variety_food.jpeg"
          alt="a variety of fruits and vegetables in a crate"
          width={1200}
          height={600}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      {/* Article Content */}
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <ol className="space-y-1">
          <span className="font-bold text-xl">Table of Contents</span>
          <li>What Foods should I eat? </li>
          <li>What Foods should I Avoid? </li>
          <li>Frequently Asked Questions </li>
        </ol>
        {/* ... Add more breakfast ideas ... */}
      </section>
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <h2 className="font-semibold text-2xl">What Foods Should I Eat? </h2>
        <p className="mb-6">
          It may seem like you have no food options when you&apos;re sick but that&apos;s
          not true. Many options, like broths and fruits, are beneficial if you
          have the flu. Staying hydrated and nourished when sick with flu is
          important, so simple, nutrient-filled meals are best. When you&apos;re
          feeling under the weather, there&apos;s a tendency to eat foods that make
          you feel good but aren&apos;t good for you. Avoiding this is the key step
          to a speedy recovery.
        </p>
        <p className="mb-6">
          Chicken soup isn&apos;t just a comfort food; it&apos;s a great way to get
          nutrients when you&apos;re sick. The warm broth can help relieve congestion
          and it&apos;s an easy way to stay hydrated. Its rich flavor, warm broth, and soft vegetables
          allow you to gain all the required nutrients you need without any of
          the bad stuff.
        </p>
        <p className="mb-6">
          Garlic is another herb that&apos;s easy to find and is considered as a
          spice that promotes wellness. It&apos;s recommended that garlic be one of the first home remedies you try
          when you feel a sickness coming on. Promoting wellness oftentimes
          means preventing all sickness from the jump.
        </p>
        <p className="mb-6">
          Ginger has been used for thousands of years as a natural remedy for
          nausea and upset stomach. It&apos;s especially helpful if you&apos;re experiencing
          digestive issues. Its healing properties appear in ginger ale, ginger snaps, and even in
          hot tea which makes it perhaps the most versatile choice on this list.
          Some drinks that may help people with nausea include water, ginger
          ale, and herbal teas.

          Bananas are easy to digest and won&apos;t aggravate your stomach if you&apos;re
          feeling nauseous. They&apos;re also a good source of potassium, which can
          help if you&apos;re dehydrated. If you are dehydrated, try a drink
          with electrolytes, but stay away from sugary versions.

          Coconut water isn&apos;t just a trendy drink; it&apos;s a natural source of
          electrolytes that can help keep you hydrated when you&apos;re sick.
          
          Ginger is a great wellness option for nausea or headache symptoms. We&apos;ve all had
          those days where our head is killing us and ginger is often one of the
          first remedies we turn to. That fact remains a constant in getting
          well soon.
        </p>
        <h2 className="font-semibold text-2xl mb-2">
          What Foods Should I Avoid?
        </h2>
        <p className="mb-6">
          <b>Sugar</b> – causes inflammation which makes it harder for your body
          to recover. Sugar is a major culprit for sickness and feeling sluggish
          or slow to get up when you&apos;re under the weather. Taking care to drink
          things that are low in sugar or artificial sweetener while you recover
          is a good step to preventing further illness.
        </p>
        <p className="mb-6">
          <b>Caffeine</b> – can cause dehydration and is a stimulant that
          prevents your body from getting the rest it needs. Caffeine is often
          found in carbonated sodas, chocolate and most famously in coffee. All
          of these food sources are rotten ideas for curing sickness. Getting
          better sometimes requires that we sacrifice what&apos;s comfortable for
          what makes our body happy.
        </p>
        <p className="mb-6">
          <b>Alcohol</b> – weakens the immune system making it harder for your
          body to fight the illness. Alcohol has minimal healing properties and
          that becomes even more accurate when you&apos;re ill. Avoiding any and all
          spirits until your body fully overcomes its sickness is highly
          recommended.
        </p>
        {/* Another Room Image or Additional Visual */}
        <div className="w-full h-64 relative my-8">
          <Image
            src="/images/articles/soup.jpeg"
            alt="a bowl of carrot soup with a spoon on a wooden table"
            width={1200}
            height={600}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <h2 className="font-semibold text-2xl mb-2">
          Frequently Asked Questions
        </h2>
        <h2 className="font-semibold text-xl ml-4 m-2">
          1. How long will it take for me to get better?
        </h2>
        <p className="mb-6">
          This question is tough to answer because it depends on you. Your body
          and the sickness that it&apos;s fighting will often determine how long
          you&apos;re under wraps. That being said, don&apos;t rush this process. Only you
          truly know when you feel better, so trust your gut and have faith in
          your body&apos;s ability to heal.
        </p>
        <h2 className="font-semibold text-xl ml-4 m-2">
          2. When should I visit the doctor?
        </h2>
        <p className="mb-6">
          Severe reactions to sickness such as fainting or passing out, skin
          discoloration or sudden rashes, and high body temperature are all
          potential warning signs that you may need professional medical
          attention. Even so, following this guide is a great initial checklist
          to help determine your sickness levels before you take that emergency
          room trip
        </p>
        <h2 className="font-semibold text-xl ml-4 m-2">
          3. Why does my body shut down when I&apos;m sick?
        </h2>
        <p className="mb-6">
          It&apos;s all in your immune system. Your body often tasks the immune
          system with protecting itself from current and future sickness. This
          means that the coughing, runny nose, and stuffiness you experience
          when you&apos;re sick is on purpose. Your immune system flips its
          histamines switch and the internal fight begins. Once you&apos;ve fully
          recovered, these symptoms will clear up and you&apos;ll be thanking your
          immune system for the protection it provides. .
        </p>
        <p className="mb-6">
          Whether it&apos;s a common cold or a full-blown infection, keeping your
          body healthy year-round is a complicated task. Being health conscious
          is not. At WellFed, we boost your knowledge of all things wellness by
          meeting you where you are. To learn more about how we help you take
          care of you better, please visit <Link href="https://wellfed.us" target="_blank" rel="noopener noreferrer">wellfed.us.</Link> It&apos;s always a great day
          to become WellFed.
        </p>
      </section>

      {/* Citations Section */}
      <footer className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900">Citations</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Cleveland Clinic. (2024, August 12). <em>The Best Foods To Eat When You&apos;re Sick</em>.{" "}
            <Link href="https://health.clevelandclinic.org/the-best-foods-to-eat-when-youre-sick" target="_blank" rel="noopener noreferrer">
              The Best Foods To Eat When You&apos;re Sick
            </Link>
          </li>
          <li>
           Healthline. (n.d.).
            <em>The 15 Best Foods To Eat When You&apos;re Sick.</em>{" "}
            <Link href="https://www.healthline.com/nutrition/15-best-foods-when-sick#fa-qs" target="_blank" rel="noopener noreferrer">
              The 15 Best Foods To Eat When You&apos;re Sick
            </Link>
          </li>
          <li>
            University of Maryland Medical System. (2024, January 10). <em>Wondering What To Eat When You&apos;re Sick? Try These Comforting Foods. UMMS Health.</em>{" "}
            <Link href="https://health.umms.org/2024/01/10/what-to-eat-when-you-are-sick/" target="_blank" rel="noopener noreferrer">
              Wondering What to Eat When You&apos;re Sick? Try These Comforting Foods.
            </Link>
          </li>
          {/* Add more citations as needed */}
        </ul>
      </footer>
    </article>
  );
}
