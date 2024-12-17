// components/Features.tsx
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: 'Personalized Recipes',
      description: 'Get meal recommendations based on your dietary preferences and ingredients on hand.',
      icon: '/icons/recipe.svg'
    },
    {
      title: 'Smart Ingredient Suggestions',
      description: 'Suggests groceries and pantry items to enhance your cooking.',
      icon: '/icons/ingredients.svg'
    },
    {
      title: 'Meal Planning',
      description: 'Plan weekly meals and track your nutrition easily.',
      icon: '/icons/meal-plan.svg'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center flex flex-col items-center">
              <Image src={feature.icon} alt={feature.title} width={64} height={64} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
