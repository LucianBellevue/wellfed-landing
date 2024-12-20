import Image from "next/image";

export default function ArticleThree() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Understanding Macros</h1>
        <p className="text-gray-700 mt-2">
          Learn about the balance of protein, carbs, and fats for a healthier diet.
        </p>
      </header>

      {/* Hero / Room Image */}
      <div className="w-full h-64 relative mb-8">
        <Image
          src="/images/articles/breakfast-room.jpg" // A room-style image or environment image
          alt="A cozy kitchen setting"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>

      {/* Article Content */}
      <section className="prose prose-lg max-w-none text-gray-800">
        <p>
          Breakfast is often called the most important meal of the day. Below
          are ten simple breakfast ideas that are both delicious and nutritious.
          They can be prepared quickly, helping you maintain a healthy lifestyle
          even on busy mornings.
        </p>
        <h2>1. Overnight Oats</h2>
        <p>
          Prepare oats the night before with Greek yogurt, chia seeds, and
          berries...
        </p>
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
            Smith, J. (2021). <em>The Complete Guide to Healthy Eating</em>.
            Wellness Press.
          </li>
          <li>
            Johnson, L. (2020). &quot;The Role of Breakfast in Maintaining a
            Healthy Metabolism,&quot;
            <em>Nutrition Journal</em>, 15(3), 45-58.
          </li>
          {/* Add more citations as needed */}
        </ul>
      </footer>
    </article>
  );
}
