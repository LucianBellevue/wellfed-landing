// pages/articles/article-one.tsx
import Image from "next/image";

export default function ArticleTwo() {
  return (
    <article className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          How to Make a Balanced Dinner Plate (Keto Edition)
        </h1>
        <p className="text-gray-700 mt-2">
          The Keto diet includes foods that are high in fat and low in
          carbohydrates like seafood, unprocessed cheese, meat and poultry and
          leafy vegetables. Your body switches from burning glucose to burning
          ketones which can lead to significant weight loss as well as other
          health benefits.
        </p>
      </header>

      {/* Hero / Room Image */}
      <div className="w-full h-64 relative mb-8">
        <Image
          src="/images/articles/plates.jpg"
          alt="a table with white plates and utensils on a wooden table"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Article Content */}
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <p>
          Eating on a ketogenic diet might seem difficult to some, but here at
          WellFed we believe in making the complex simple. So, here’s your guide
          to making a beautiful dinner plate that satisfies your keto diet,
          whether you’re new to the ketogenic lifestyle or a seasoned pro.
        </p>
        <br></br>
        <ol className="space-y-1">
          <span className="font-bold text-xl">Table of Contents</span>
          <li>Ketosis: What is it? </li>
          <li>Why choose a ketogenic diet?</li>
          <li>So what can I eat? </li>
          <li>MContinuing your WellFed journey </li>
        </ol>
        {/* ... Add more breakfast ideas ... */}
      </section>
      <section className="prose prose-lg max-w-none text-gray-800 mb-6">
        <h2 className="font-semibold text-2xl">Ketosis: What is it?</h2>
        <p className="mb-6">
          Ketosis is a metabolic state in which your body uses fat for fuel
          instead of carbs. Ketosis occurs when your body doesn’t have enough
          glucose in your blood to create energy. Instead, your body switches
          from being powered by glucose to being powered by ketones. These
          ketones come from your liver and act as a back-up energy source that
          takes over when you don’t have enough glucose to turn into energy to
          keep functioning throughout the day.
        </p>
        <p className="mb-6">
          Ketones, or ketone bodies, are acids your body makes when it’s using
          fat instead of glucose for energy. Your body typically gets most of
          its energy from glucose with ketones serving as your back-up energy
          source. Now that your body has switched over to burning fats instead
          of glucose, your metabolism increases, your hunger goes away, your
          muscle mass increases, and your risk of blood pressure and heart
          diseases goes down.
        </p>
        <h2 className="font-semibold text-2xl mb-2">
          Why Choose a Ketogenic Diet?
        </h2>
        <p className="mb-6">
          “Unlike other low-carb diets, which focus on protein, a keto plan
          centers on fat, which supplies as much as 90% of daily calories.” The
          goal of a ketogenic diet is to burn fats at a quicker rate than you
          would on glucose sugar. This makes it one of the go-to lifestyle
          choices for people trying to lose weight or drop their blood glucose
          levels. The keto diet aims to force your body into using a different
          type of fuel. Instead of relying on sugar (glucose) that comes from
          carbohydrates (such as grains, legumes, vegetables, and fruits), the
          keto diet relies on ketone bodies, a type of fuel that the liver
          produces from stored fat.
        </p>
        {/* Another Room Image or Additional Visual */}
        <div className="w-full h-64 relative my-8">
          <Image
            src="/images/articles/food_table.jpeg"
            alt="an outdoor food table with a variety of dishes"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="font-semibold text-2xl mb-2">So, What can I eat?</h2>
        <p className="mb-6">
          There are plenty of great recipes that rely on high fat, low
          carbohydrate makeups and they can range in complexity and cooking
          ease. Seafood, eggs, cauliflower, zucchini noodles, poultry, and
          unprocessed cheese are all examples of foods that fit the profile of a
          ketogenic lifestyle. Some favorites here at WellFed include the Keto
          Beef Stroganoff and Copycat Ground Chicken Lettuce Wraps. These
          recipes are just the tip of the iceberg in terms of what you can still
          eat while on your keto journey. Diet doesn’t mean gross, and the
          ketogenic diet is a great example of how you can bring delicious
          flavor and tasty experiences to the dinner table every time.
        </p>
        <h2 className="font-semibold text-2xl mb-2">
          Continuing Your WellFed Journey{" "}
        </h2>
        <p className="mb-6">
          Together with the help of curious readers like you, WellFed can
          achieve our goal of making the world a fun place to eat for all
          lifestyles. Your contributions help us make society more WellFed every
          time you support our content. To learn more about the ketogenic diet
          and other diets that can enhance your daily experiences and improve
          your health, visit wellfed.us
        </p>
        {/* Another Room Image or Additional Visual */}
        <div className="w-full h-screen relative my-8">
          <Image
            src="/images/articles/dishes.jpeg"
            alt="a kitchen sink with cups and dishes"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Citations Section */}
      <footer className="mt-10">
        <h3 className="text-xl font-semibold text-gray-900">Citations</h3>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Cleveland Clinic (2023).&quot;Ketones: What They Are, Function,
            Tests & Normal Levels.&quot;. <em>Cleveland Clinic.</em>{" "}
            <a href="https://my.clevelandclinic.org/health/body/25177-ketones">
              Ketones: What They Are, Function, Tests & Normal Levels
            </a>
          </li>
          <li>
            Cleveland Clinic (2022). &quot;What Is the Keto Diet and Should You
            Try It?&quot;
            <em>. Cleveland Clinic.</em>{" "}
            <a href="https://health.clevelandclinic.org/what-is-the-keto-diet-and-should-you-try-it">
              What Is the Keto Diet and Should You Try It?
            </a>
          </li>
          <li>
            Harvard Medical School (2024).&quot;Should You Try The Keto
            Diet?&quot;. <em>Harvard Health Publishing</em>.{" "}
            <a href="https://www.health.harvard.edu/staying-healthy/should-you-try-the-keto-diet">
              Should You Try The Keto Diet?{" "}
            </a>
          </li>
          <li>
            Rege, L. (2023).&quot;Keto Beef Stroganoff&quot;.{" "}
            <em>Delish.com</em>.{" "}
            <a href="https://www.delish.com/cooking/recipe-ideas/a30707105/keto-beef-stroganoff-recipe/">
              Keto Beef Stroganoff{" "}
            </a>
          </li>
          {/* Add more citations as needed */}
        </ul>
      </footer>
    </article>
  );
}
