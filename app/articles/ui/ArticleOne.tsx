// pages/articles/article-one.tsx
import Image from 'next/image'

export default function ArticleOne() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Paleo Vs. Keto: Spot the Difference</h1>
        <p className="text-gray-700 mt-2">The Paleolithic and Ketogenic diets are two popular lifestyle choices for those looking to improve their health. The Paleo diet focuses on maintaining physical health through foods humans consumed thousands of years ago as hunter-gatherers, while the Keto diet focuses on improving weight loss through high fat, low carb solutions that limit your body’s production of glucose. </p>
      </header>

      {/* Hero / Room Image */}
      <div className="w-full h-64 relative mb-8">
        <Image
          src="/images/articles/size.jpeg" // A room-style image or environment image
          alt="a measuring tape"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/* Article Content */}
      <section className="prose prose-lg max-w-none text-gray-800">
        <p>
          We spend a lot of time working on our health but what does that work mean if we don’t know what we’re measuring. These two diets both target different parts of the human diet to provide cleaner eating habits and improved wellness overall. This article will focus on the differences between the Paleolithic and Ketogenic diets and whether or not these lifestyles are the right fit for you.
        </p>
        <br></br>
        <ol>Table of Contents
          <li>What is the Paleo Diet?</li>
          <li>What is the Keto Diet?</li>
          <li>Comparing the Two</li>
          <li>Which Diet is Right for You?</li>
        </ol>
        {/* ... Add more breakfast ideas ... */}
      </section>

      {/* Another Room Image or Additional Visual */}
      <div className="w-full h-64 relative my-8">
        <Image
          src="/images/articles/breakfast-table.jpg" // Another environment/room-style image
          alt="A breakfast table with various dishes"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/* Citations Section */}
      <footer className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900">Citations</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Smith, J. (2021). <em>The Complete Guide to Healthy Eating</em>. Wellness Press.
          </li>
          <li>
            Johnson, L. (2020). &quot;The Role of Breakfast in Maintaining a Healthy Metabolism,&quot;
            <em>Nutrition Journal</em>, 15(3), 45-58.
          </li>
          {/* Add more citations as needed */}
        </ul>
      </footer>
    </article>
  )
}
