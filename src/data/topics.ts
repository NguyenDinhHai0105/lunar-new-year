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
      'Kỷ niệm tuổi thơ vui nhất của bạn là gì?',
      'Hồi nhỏ bạn hay chơi trò gì nhất?',
      'Bộ phim hoạt hình/chương trình TV nào bạn không bao giờ bỏ lỡ?',
      'Món ăn vặt sau giờ học bạn thích nhất là gì?',
      'Hồi nhỏ bạn thần tượng ai, vì sao?',
      'Một quy tắc trong nhà bạn vẫn nhớ rõ đến giờ là gì?',
      'Chuyện “ngố” nhất bạn từng làm ở trường hồi nhỏ là gì?',
      'Mùi hương hay âm thanh nào khiến bạn nhớ ngay về tuổi thơ?',
      'Hồi nhỏ bạn muốn lớn lên làm nghề gì?',
      'Một bài học tuổi thơ bạn vẫn giữ đến hôm nay là gì?',
    ],
  },
  {
    id: 'love',
    label: 'Tình Yêu',
    questions: [
      'Điều gì khiến bạn cảm thấy được yêu thương nhất?',
      'Một thói quen nhỏ nào của người yêu/đối phương làm bạn “tan chảy”?',
      'Bạn tin vào “yêu từ cái nhìn đầu tiên” không? Vì sao?',
      'Bạn muốn nhận lời xin lỗi theo cách nào nhất?',
      'Mối quan hệ lý tưởng trong mắt bạn trông như thế nào?',
      'Bạn thích hẹn hò kiểu ồn ào hay bình yên?',
      'Một điều bạn học được từ tình yêu/đổ vỡ trước đây là gì?',
      'Bạn nghĩ điều quan trọng nhất để giữ một mối quan hệ bền lâu là gì?',
      'Nếu phải mô tả bạn trong tình yêu bằng 3 từ, đó là gì?',
      'Bạn thích tỏ tình theo cách nào nhất?',
    ],
  },
  {
    id: 'friends',
    label: 'Bạn Bè',
    questions: [
      'Bạn nhớ nhất kỷ niệm nào với nhóm bạn thân?',
      'Một phẩm chất bạn trân trọng nhất ở bạn bè là gì?',
      'Bạn là kiểu bạn thân: hay lắng nghe hay hay đưa lời khuyên?',
      'Lần “cười xỉu” nhất với bạn bè là khi nào?',
      'Nếu được rủ một người bạn đi du lịch ngay ngày mai, bạn chọn ai?',
      'Bạn nghĩ tình bạn bền lâu cần điều gì nhất?',
      'Bạn thích nhóm bạn đông hay vài người thân? Vì sao?',
      'Một lần bạn bè giúp bạn vượt qua khó khăn mà bạn nhớ mãi?',
      'Bạn có “red flag” nào trong tình bạn không?',
      'Bạn muốn nói lời cảm ơn với ai trong hội bạn, và vì sao?',
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
