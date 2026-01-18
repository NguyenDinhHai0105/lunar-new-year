export type Topic = {
  id: string
  label: string
  questions: string[]
}

export const TOPICS: Topic[] = [
  {
    id: 'childhood',
    label: 'Childhood',
    questions: [
      'What is your happiest childhood memory?',
      'What game did you play the most as a kid?',
      'Which cartoon or TV show did you never miss?',
      'What was your favorite snack after school?',
      'Who was your childhood hero, and why?',
      'What was a rule at home you still remember clearly?',
      'What was the funniest thing you did at school?',
      'What smell or sound instantly brings you back to childhood?',
      'What did you want to be when you grew up?',
      'What is one childhood lesson you still carry today?',
    ],
  },
  {
    id: 'entertainment',
    label: 'Entertainment',
    questions: [
      'What movie can you rewatch anytime?',
      'Which song always lifts your mood?',
      'What is your current comfort show?',
      'If you could attend any concert, which one would it be?',
      'What is a book or comic you recommend to everyone?',
      'What is a game (video or board) you enjoy with friends?',
      'What trend did you love, and what trend did you hate?',
      'If your life had a soundtrack, what would be the opening song?',
      'Which actor/actress would you want to have dinner with?',
      'What’s the best comedy you’ve seen recently?',
    ],
  },
  {
    id: 'travel',
    label: 'Travel',
    questions: [
      'What is the most memorable place you have visited?',
      'Mountains, beach, or city — which do you prefer and why?',
      'What is a food you tried while traveling that surprised you?',
      'If you could travel tomorrow, where would you go?',
      'What is one travel mistake you learned from?',
      'Window seat or aisle seat — and why?',
      'What is your ideal trip length?',
      'What is a hidden gem you want to share?',
      'What is your best travel photo story?',
      'What travel habit do you always keep?',
    ],
  },
]

