export type Topic = {
  id: string
  label: string
  questions: string[]
}

export const TOPICS: Topic[] = [
  {
    id: 'childhood',
    label: 'Tuổi Thơ',
    questions: [
      'Hồi nhỏ bạn từng bị phạt oan vì chuyện gì?',
      'Lần đầu tiên bạn nói dối ba mẹ là khi nào?',
      'Có từng lấy trộm tiền lì xì của ai chưa?',
      'Tuổi thơ có một trò nghịch ngu mà giờ nghĩ lại thấy xấu hổ?',
      'Bạn sợ nhất điều gì hồi nhỏ?',
      'Có từng khóc lén vì bị mắng mà không dám nói?',
      'Hồi nhỏ thích nhất ai trong xóm?',
      'Có lần nào trốn học mà ba mẹ không biết?',
      'Món ăn Tết hồi nhỏ bạn ghét nhất?',
      'Kỷ niệm Tết vui nhất thời bé là gì?',
      'Có từng ganh tị với anh/chị/em họ vì được lì xì nhiều hơn?',
      'Nếu quay lại tuổi thơ, điều gì bạn muốn làm khác đi?'
    ]
  },
  {
    id: 'love',
    label: 'Tình Yêu',
    questions: [
      'Điều gì khiến bạn cảm thấy được yêu thương nhất?',
      'Một thói quen nhỏ nào của người yêu/đối phương làm bạn “tan chảy”?',
      'Bạn tin vào “yêu từ cái nhìn đầu tiên” không? Vì sao?',
      'Mối quan hệ lý tưởng trong mắt bạn trông như thế nào?',
      'Bạn thích hẹn hò kiểu ồn ào hay bình yên?',
      'Bạn là người chủ động hay bị động trong tình yêu?',
      'Bạn nghĩ điều quan trọng nhất để giữ một mối quan hệ bền lâu là gì?',
      'Một hành động nhỏ nào từ người đó có thể khiến bạn vui cả ngày?',
      'Bạn thích người yêu giống mình hay bù trừ với mình?',
      'Nếu phải mô tả bạn trong tình yêu bằng 3 từ, đó là gì?',
      'Bạn thích tỏ tình theo cách nào nhất?',
      'Hiện tại, bạn ưu tiên tình yêu hay sự nghiệp hơn?'
    ]
    ,
  },
  {
    id: 'friends',
    label: 'Bạn Bè',
    questions: [
      'Bạn nhớ nhất kỷ niệm nào với nhóm bạn thân?',
      'Bạn thích cùng hội bạn thân của mình chơi trò gì ?',
      'Bạn là kiểu bạn thân: hay lắng nghe hay hay đưa lời khuyên?',
      'Lần “cười xỉu” nhất với bạn bè là khi nào?',
      'Nếu được rủ một người bạn đi du lịch ngay ngày mai, bạn chọn ai?',
      'Điều gì ở bạn bè mà khiến bạn thấy bực mình nhất ?',
      'Bạn thích nhóm bạn đông hay vài người thân? Vì sao?',
      'Một lần bạn bè giúp bạn vượt qua khó khăn mà bạn nhớ mãi?',
      'Bạn có “red flag” nào trong tình bạn không?',
      'Điều gì khiến bạn cảm thấy "cay cú" nhất khi gặp bạn thân',
      'Ai là người bạn ghét chơi game cùng nhất ?'
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
