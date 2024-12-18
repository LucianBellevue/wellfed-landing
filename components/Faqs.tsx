import { Container } from '@/components/Container'
import Link from 'next/link'

const faqs = [
  [
    {
      question: 'How does WellFed choose recipes for me?',
      answer:
        'WellFed tailors recipes based on your dietary preferences, favorite cuisines, and nutritional goals, ensuring you always find options you’ll love.',
    },
    {
      question: 'Can I plan my meals for the entire week?',
      answer:
        'Absolutely. With our meal-planning feature, you can schedule your breakfast, lunch, dinner, and even snacks for the whole week. Adjust portion sizes and easily reorder meals to suit your routine.',
    },
    {
      question: 'What if I have dietary restrictions or allergies?',
      answer:
        'Simply update your profile with any dietary needs or allergies. WellFed filters recipes to accommodate your restrictions, ensuring you have safe and delicious options.',
    },
  ],
  [
    {
      question: 'Are nutritional facts available for each recipe?',
      answer:
        'Yes. Every recipe includes detailed nutritional information, including calories, macros, and key nutrients. This helps you make informed decisions about what you eat.',
    },
    {
      question: 'Can WellFed help me create a shopping list?',
      answer:
        'Certainly! After selecting your meals for the week, WellFed automatically generates a grocery list with all the required ingredients, making shopping simpler and more efficient.',
    },
    {
      question: 'How do I save my favorite recipes?',
      answer:
        'Tap the “Favorite” icon on any recipe to add it to your personal collection. You can easily access all your bookmarked recipes whenever you need them.',
    },
  ],
  [
    {
      question: 'Is WellFed free, or do I need a subscription?',
      answer:
        'WellFed offers a robust free version with essential features. For more advanced tools, in-depth nutritional analysis, and exclusive meal plans, you can upgrade to a premium subscription at any time.',
    },
    {
      question: 'Can I share meal plans with friends or family?',
      answer:
        'Yes! WellFed allows you to share your meal plans or individual recipes via links, email, or social media. It’s an easy way to keep everyone on the same page and share cooking inspiration.',
    },
    {
      question: 'How does WellFed protect my data and privacy?',
      answer:
        'Your privacy is a top priority. We securely store your personal and dietary information, using it only to enhance your experience. We never sell your data to third parties.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you’d like to know,{' '}
            <Link
              href="mailto:info@wellfedapp.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

