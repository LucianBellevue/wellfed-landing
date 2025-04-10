import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function ArticleOne() {
  return (
    <article className="mt-24 max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Paleo Vs. Keto: Spot the Difference
        </h1>
        <p className="text-gray-700 mt-2">
          The Paleolithic and Ketogenic diets are two popular lifestyle choices
          for those looking to improve their health. The Paleo diet focuses on
          maintaining physical health through foods humans consumed thousands of
          years ago as hunter-gatherers, while the Keto diet focuses on
          improving weight loss through high fat, low carb solutions that limit
          your body&apos;s production of glucose.{" "}
        </p>
      </header>

      {/* Hero / Room Image */}
      <div className="w-full h-64 relative mb-8">
        <Image
          src="/images/articles/size.jpeg" // A room-style image or environment image
          alt="a measuring tape"
          width={800}
          height={400}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>

      {/* Article Content */}
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <p>
          We spend a lot of time working on our health but what does that work
          mean if we don&apos;t know what we&apos;re measuring. These two diets
          both target different parts of the human diet to provide cleaner
          eating habits and improved wellness overall. This article will focus
          on the differences between the Paleolithic and Ketogenic diets and
          whether or not these lifestyles are the right fit for you.
        </p>
        <br></br>
        <ol className="space-y-1">
          <span className="font-bold text-xl">Table of Contents</span>
          <li>The Paleolithic Diet </li>
          <li>The Ketogenic Diet</li>
          <li>Similarities and Differences </li>
          <li>Major Takeaways </li>
        </ol>
        {/* ... Add more breakfast ideas ... */}
      </section>
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <h2 className="font-semibold text-2xl">The Paleolithic Diet</h2>
        {/* Another Room Image or Additional Visual */}
        <div className="w-full h-64 relative my-8">
          <Image
            src="/images/articles/paleo.jpeg" // Another environment/room-style image
            alt="an avocado and herbs and tomatoes tossed for contrast on a cutting board"
            width={800}
            height={400}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <p className="mb-6">
          The Paleo diet stands for Paleolithic which refers to that period in
          time where humans relied on the hunter-gatherer social structure to
          survive the harsh environments. The idea is to recreate the nutrients
          and meals humans were eating in this period 10,000 years ago. By
          following a diet of whole foods and leading physically active lives,
          hunter-gatherers presumably had much lower rates of lifestyle
          diseases, such as obesity, diabetes, and heart disease.
        </p>
        <h2 className="font-semibold text-2xl mb-2">The Ketogenic Diet</h2>
        <p className="mb-6">
          The Keto or Ketogenic diet represents a lifestyle based on increasing
          fats and decreasing carbohydrates in the body. This process, known as
          ketosis, can lead to your body switching out the glucose necessary
          for energy production for ketones that are produced in the liver. This
          diet allows for increased weight loss at an incredible rate because
          your body relies on its secondary source of power, ketones. As a
          result, the fat in your body burns more efficiently than it otherwise
          would under normal circumstances.
        </p>
        <h2 className="font-semibold text-2xl mb-2">
          Similarities and Differences{" "}
        </h2>
        <p className="mb-6">
          As you&apos;ve probably noticed, there are some key similarities and
          differences between these two diets and we&apos;re going to list out
          some of the key things to note. Here&apos;s our deep dive.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Dairy </h2>
        <p className="mb-6">
          Dairy is available to individuals on the Keto diet in the form of
          select cheeses. However, yogurts and milks are usually high carb items
          and won&apos;t be viable. As for Paleo individuals, dairy won&apos;t
          work if you want the desired results.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Fruits and Veggies </h2>
        <p className="mb-6">
          Paleo prefers a variety of fruits while Keto needs fruits with low
          carbohydrate amounts like blackberries and melons. Fruits are fair
          game in most diets and these two are no exception. When it comes to
          vegetables, the Keto lifestyle is limited to low carb substitutes
          like spinach and mushrooms. Think of anything that comes from the
          ground as being safe for the Ketogenic lifestyle. Almost all
          vegetables work well with Paleo seeing as it&apos;s a historically
          based diet from an era where most foods were naturally occurring.
          Exceptions include potatoes and corn.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Legumes</h2>
        <p className="mb-6">
          This one&apos;s a big no for both diets. You&apos;ve got to keep the
          beans to a minimum to stay true to your lifestyle goals. Foods like
          lentils, beans, peanuts and peas must be avoided.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Meats</h2>
        <p className="mb-6">
          This one is pretty straight forward. Both diets allow for most meats
          and seafood, however, Paleo meats need to be free-range, wild-caught,
          or grass-fed.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Grains</h2>
        <p className="mb-6">
          Simply put, no. There are ways to get creative, but most grains will
          put you outside the scope of these two lifestyles.
        </p>
        <h2 className="font-semibold text-2xl mb-2">Major Takeaways</h2>
        <p className="mb-6">
          For most, paleo is about more than just a diet. There is also a strong
          focus on lifestyle practices, the environmental impact of food choices
          and total body wellness within the framework of the paleo philosophy.
          Paleo focuses on the mentality of hunter-gatherers during the
          Paleolithic era and the stock they put into foods that would benefit
          the tribe for staying alive from one winter to the next. Keto spends a
          lot of time focusing on macronutrients (carbohydrates, fats, and
          proteins) which make up the largest portion of our energy providing
          foods. Targeting these ingredients helps to increase the way our body
          breaks down nutrition and distributes it throughout our body. Because
          both diets eliminate whole food groups, dietitians generally don&apos;t
          recommend either for long-term health, but both can be useful to help
          get a handle on carb cravings and increase the number of veggies you
          consume. These diets aren&apos;t for everyone and they often serve
          different roles for the phases of life you are in. It is important to
          do your own research and consult with your doctor to ensure the steps
          you take to live a cleaner lifestyle are right for you. We hope this
          article gives you more clarity on the differences between the Paleo
          and Keto diets and how committing to either one would put you one step
          further down your path to becoming WellFed. To learn more about these
          diets, please visit wellfed.us.
        </p>
      </section>

      {/* Citations Section */}
      <footer className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900">Citations</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Gunnars, K. and Kelly, E. (n.d.).&quot;The Paleo Diet — A Beginner&apos;s Guide Plus Meal Plan&quot;. <em>Healthline</em>. <Link href="https://www.healthline.com/nutrition/paleo-diet-meal-plan-and-menu" target="_blank" rel="noopener noreferrer">The Paleo Diet- Beginner&apos;s Guide Plus Meal Plan</Link>
          </li>
          <li>
            Ball, S. (n.d.). &quot;What&apos;s the Difference between the Keto and Paleo Diets?&quot;
            <em>Food Network.</em> <Link href="https://www.foodnetwork.com/healthy/articles/whats-difference-between-keto-paleo-diet" target="_blank" rel="noopener noreferrer">What&apos;s the Difference between the Keto and Paleo Diets?</Link>
          </li>
          <li>
            Hill, A. (2023).&quot;What&apos;s the Difference Between Paleo and Keto Diets?&quot;. <em>Healthline</em>. <Link href="https://www.healthline.com/nutrition/paleo-diet-meal-plan-and-menu" target="_blank" rel="noopener noreferrer">What&apos;s the Difference Between Paleo and Keto Diets?</Link>
          </li>
          {/* Add more citations as needed */}
        </ul>
      </footer>
    </article>
  );
}
