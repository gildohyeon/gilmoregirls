
import { EpisodeMetadata } from './types';

const EP1_DATA = [
  {
    "Time": "25s",
    "Subtitle": "♪ There she goes ♪",
    "Human Translation": "좋은 음식 루크네"
  },
  {
    "Time": "29s",
    "Subtitle": "♪ There she goes again ♪",
    "Human Translation": "루크네"
  },
  {
    "Time": "48s",
    "Subtitle": "Please, Luke. Please, please, please.",
    "Human Translation": "부탁이에요, 루크"
  },
  {
    "Time": "50s",
    "Subtitle": "How many cups have you had today?",
    "Human Translation": "오늘 커피는 몇 잔 마셨죠?"
  },
  {
    "Time": "52s",
    "Subtitle": "- None. - 'Plus.'",
    "Human Translation": "- 전혀요 - 진실은?"
  },
  {
    "Time": "54s",
    "Subtitle": "Five, but yours is better.",
    "Human Translation": "5잔이오 하지만 여기가 더 맛있어요"
  },
  {
    "Time": "56s",
    "Subtitle": "- You have a problem. - Yes, I do.",
    "Human Translation": "- 심각하군요 - 알아요"
  },
  {
    "Time": "1:00",
    "Subtitle": "- 'Junkie.' - Angel.",
    "Human Translation": "- 중독자 - 천사님"
  },
  {
    "Time": "1:02",
    "Subtitle": "You've got wings, baby.",
    "Human Translation": "날개가 보여요"
  },
  {
    "Time": "1:07",
    "Subtitle": "Luke's? Yeah.",
    "Human Translation": "루크입니다, 네"
  },
  {
    "Time": "1:13",
    "Subtitle": "You make that look really good.",
    "Human Translation": "맛있게 드시네요"
  },
  {
    "Time": "1:15",
    "Subtitle": "Oh, it is really good. It's the best coffee in town.",
    "Human Translation": "진짜 맛있어요 동네 최고의 커피죠"
  },
  {
    "Time": "1:18",
    "Subtitle": "- Oh, yeah? I'll get a cup. - Good plan.",
    "Human Translation": "- 저도 마셔 볼게요 - 좋은 생각이네요"
  },
  {
    "Time": "1:21",
    "Subtitle": "Yeah, I've never been here before.",
    "Human Translation": "전 여기 처음이에요"
  },
  {
    "Time": "1:23",
    "Subtitle": "Just, uh, passing through on my way to Hartford.",
    "Human Translation": "하트포드 가는 길에 들린 거죠"
  },
  {
    "Time": "1:25",
    "Subtitle": "You're a regular Jack Kerouac.",
    "Human Translation": "완전히 모험가군요"
  },
  {
    "Time": "1:29",
    "Subtitle": "You mind if I sit down? Oh, you know what? Actually, I'm meeting someone so I..",
    "Human Translation": "- 앉아도 될까요? - 전 약속이 있어서…"
  },
  {
    "Time": "1:33",
    "Subtitle": "- I'm Joey. - Okay.",
    "Human Translation": "- 조이입니다 - 그렇군요"
  },
  {
    "Time": "1:36",
    "Subtitle": "- What, you don't have a name? - No, I do have a name.",
    "Human Translation": "이름도 없으세요? 이름은 있지만 정말 약속이 있어요"
  },
  {
    "Time": "1:39",
    "Subtitle": "I just, I'm really meeting someone, so..",
    "Human Translation": "이름은 있지만 정말 약속이 있어요"
  },
  {
    "Time": "1:40",
    "Subtitle": "So I guess I should get going.",
    "Human Translation": "일어서란 뜻이군요"
  },
  {
    "Time": "1:42",
    "Subtitle": "- So soon? - What?",
    "Human Translation": "- 벌써요? - 네?"
  },
  {
    "Time": "1:44",
    "Subtitle": "I'm just screwing with your mind.",
    "Human Translation": "그냥 장난이에요 만나서 반가웠어요"
  },
  {
    "Time": "1:46",
    "Subtitle": "It's nice to meet you. Enjoy Hartford.",
    "Human Translation": "그냥 장난이에요 만나서 반가웠어요 - 하트포드까지 잘 가요 - 커피 드세요, 신비의 여인"
  },
  {
    "Time": "1:48",
    "Subtitle": "Enjoy your coffee, mystery woman.",
    "Human Translation": "- 하트포드까지 잘 가요 - 커피 드세요, 신비의 여인"
  },
  {
    "Time": "1:51",
    "Subtitle": "Hm. I like that.",
    "Human Translation": "마음에 드네요"
  },
  {
    "Time": "1:55",
    "Subtitle": "Hey. It's freezing. Oh, what do you need? Hot tea, coffee?",
    "Human Translation": "- 추워 죽겠네 - 뜨거운 차나 커피라도 줄까?"
  },
  {
    "Time": "1:59",
    "Subtitle": "- Lip gloss. - Aha.",
    "Human Translation": "립글로스"
  },
  {
    "Time": "2:03",
    "Subtitle": "I have vanilla, chocolate, strawberry and toasted marshmallow.",
    "Human Translation": "바닐라, 초콜릿, 딸기하고 구운 마시맬로 향이야"
  },
  {
    "Time": "2:06",
    "Subtitle": "Anything in there not resembling a breakfast cereal?",
    "Human Translation": "아침 식사 맛 말고 다른 건 없어?"
  },
  {
    "Time": "2:08",
    "Subtitle": "Yes. It has no smell but it changes colors with your mood.",
    "Human Translation": "있어, 향은 없지만 기분에 따라 색이 변하는 거야"
  },
  {
    "Time": "2:12",
    "Subtitle": "RuPaul doesn't need this much makeup. You're crabby.",
    "Human Translation": "- 성전환자보다도 화장품이 많네 - 버릇없는 것"
  },
  {
    "Time": "2:16",
    "Subtitle": "I'm sorry. I lost my Macy Gray CD and I need caffeine.",
    "Human Translation": "메이시 그레이 CD가 사라졌어 카페인이 필요해"
  },
  {
    "Time": "2:19",
    "Subtitle": "- I have your CD. - Thief.",
    "Human Translation": "- CD는 여기 있어 - 도둑 같으니"
  },
  {
    "Time": "2:21",
    "Subtitle": "Sorry, I'll get you some coffee.",
    "Human Translation": "미안, 대신 커피를 갖다 줄게"
  },
  {
    "Time": "2:27",
    "Subtitle": "What? It's not for me. It's for Rory, I swear.",
    "Human Translation": "하늘에 맹세코 제가 아니라 로리 커피예요"
  },
  {
    "Time": "2:30",
    "Subtitle": "- You're shameless. - Look, Officer Krupke.",
    "Human Translation": "- 뻔뻔하군요 - 이것 봐요, 경찰 아저씨"
  },
  {
    "Time": "2:32",
    "Subtitle": "She's right at that table, right over there.",
    "Human Translation": "로리는 바로 저기 있잖아요"
  },
  {
    "Time": "2:36",
    "Subtitle": "Ah. He's got quite a pair, this guy. Thanks.",
    "Human Translation": "꽤나 대담한 양반이군 고마워요"
  },
  {
    "Time": "2:42",
    "Subtitle": "Yeah, I've never been through here before. Oh, you have, too.",
    "Human Translation": "- 전 여기 처음이에요 - 아까도 처음이었죠?"
  },
  {
    "Time": "2:45",
    "Subtitle": "- Oh, hi. - Oh, hi.",
    "Human Translation": "안녕하세요"
  },
  {
    "Time": "2:47",
    "Subtitle": "You really like my table, don't you? I was just, uh..",
    "Human Translation": "- 이 자리가 좋은가 보죠? - 전 단지…"
  },
  {
    "Time": "2:50",
    "Subtitle": "Getting to know my daughter.",
    "Human Translation": "제 딸과 좀 친해졌나요?"
  },
  {
    "Time": "2:51",
    "Subtitle": "- Your.. - Are you my new daddy?",
    "Human Translation": "제 딸과 좀 친해졌나요? 아저씨가 새아빠예요?"
  },
  {
    "Time": "2:54",
    "Subtitle": "Wow. You do not look old enough to have a daughter.",
    "Human Translation": "딸이 있을 나이로는 안 보이네요"
  },
  {
    "Time": "2:58",
    "Subtitle": "No, I mean it. And you do not look like a daughter.",
    "Human Translation": "진심이에요 그쪽도 따님처럼은 안 보여요"
  },
  {
    "Time": "3:02",
    "Subtitle": "That's possibly very sweet of you. Thanks.",
    "Human Translation": "고마운 말처럼 들리네요"
  },
  {
    "Time": "3:06",
    "Subtitle": "So...daughter.",
    "Human Translation": "딸이라고 하셨죠?"
  },
  {
    "Time": "3:10",
    "Subtitle": "You know, I am traveling with a friend. - She's sixteen. - Bye.",
    "Human Translation": "- 실은 동행이 하나 있는데… - 딸은 16살이에요"
  },
  {
    "Time": "3:14",
    "Subtitle": "Drive safe.",
    "Human Translation": "- 갈게요 - 운전 조심해요"
  },
  {
    "Time": "3:22",
    "Subtitle": "♪ If you're out on the road ♪",
    "Human Translation": "길모어 걸스"
  },
  {
    "Time": "3:31",
    "Subtitle": "♪ All you have to do is call my name ♪ ♪ And I'll be there on the next train ♪",
    "Human Translation": "로렌 그래험"
  },
  {
    "Time": "3:39",
    "Subtitle": "♪ Where you lead, I will follow ♪",
    "Human Translation": "알렉시스 블레델"
  },
  {
    "Time": "3:44",
    "Subtitle": "♪ Anywhere that you tell me to ♪",
    "Human Translation": "멜리사 맥카티"
  },
  {
    "Time": "3:48",
    "Subtitle": "♪ If you need, you need me to be with you ♪",
    "Human Translation": "멜리사 맥카티 케이코 아제나 야닉 트루스데일"
  },
  {
    "Time": "3:53",
    "Subtitle": "♪ I will follow ♪",
    "Human Translation": "야닉 트루스데일 스캇 패터슨"
  },
  {
    "Time": "3:57",
    "Subtitle": "♪ Where you lead ♪",
    "Human Translation": "켈리 비숍"
  },
  {
    "Time": "3:59",
    "Subtitle": "♪ I will follow anywhere ♪",
    "Human Translation": "에드워드 허먼"
  },
  {
    "Time": "4:30",
    "Subtitle": "- Here you go. - Thanks.",
    "Human Translation": "- 받아요 - 고맙습니다"
  },
  {
    "Time": "4:32",
    "Subtitle": "Independence Inn, Michel speaking.",
    "Human Translation": "인디펜던스 모텔의 미셸입니다"
  },
  {
    "Time": "4:36",
    "Subtitle": "No, I'm sorry, we're completely booked.",
    "Human Translation": "죄송합니다만 예약이 꽉 찼군요"
  },
  {
    "Time": "4:38",
    "Subtitle": "We have a wedding party here.",
    "Human Translation": "결혼식이 있거든요"
  },
  {
    "Time": "4:41",
    "Subtitle": "No, there is really nothing I can do.",
    "Human Translation": "아뇨, 도와드릴 수가 없네요"
  },
  {
    "Time": "4:43",
    "Subtitle": "Yes, I'm sure. Positive.",
    "Human Translation": "네, 정말입니다 확실하죠"
  },
  {
    "Time": "4:47",
    "Subtitle": "No, I don't have to look ma'am, I--",
    "Human Translation": "찾아볼 것도 없습니다 네, 찾아볼게요"
  },
  {
    "Time": "4:49",
    "Subtitle": "Yes, of course I'll look.",
    "Human Translation": "찾아볼 것도 없습니다 네, 찾아볼게요 감독: 레슬리 린카 글래터"
  },
  {
    "Time": "4:54",
    "Subtitle": "No, I'm sorry, we're completely booked.",
    "Human Translation": "죄송합니다만 빈방이 없네요"
  },
  {
    "Time": "4:57",
    "Subtitle": "(female #1) 'Oh, no, don't move.'",
    "Human Translation": "비키지 말아요"
  },
  {
    "Time": "4:58",
    "Subtitle": "Just ignore the tiny woman pushing the 200-pound instrument around.",
    "Human Translation": "큰 악기에 달라붙은 작은 여자 따위는 무시해야죠"
  },
  {
    "Time": "5:01",
    "Subtitle": "'No, this is good, I like this''",
    "Human Translation": "큰 악기에 달라붙은 작은 여자 따위는 무시해야죠 좋아요, 앞으로는 피아노를 역기 삼아 운동할게요"
  },
  {
    "Time": "5:03",
    "Subtitle": "After this I'll, uh, bench press a piano, huh?",
    "Human Translation": "좋아요, 앞으로는 피아노를 역기 삼아 운동할게요"
  },
  {
    "Time": "5:06",
    "Subtitle": "Oh, that's it, lady, tie your shoe now.",
    "Human Translation": "딱 거기서 끈을 묶다니 금상첨화네요"
  },
  {
    "Time": "5:09",
    "Subtitle": "Yeah, don't worry, I'll wait. ",
    "Human Translation": "기다릴 테니 천천히 해요"
  },
  {
    "Time": "5:12",
    "Subtitle": "Hi, Drella, hi.",
    "Human Translation": "- 왔어요, 드렐라? - 네"
  },
  {
    "Time": "5:13",
    "Subtitle": "I was just wondering, um, could you be, uh, nicer to the guests?",
    "Human Translation": "혹시 손님들에게 조금 친절하게 대할 수 있을까요?"
  },
  {
    "Time": "5:18",
    "Subtitle": "I'm sorry. Did you not want a harp player?",
    "Human Translation": "하프 연주자를 부른 게 아니었나요?"
  },
  {
    "Time": "5:20",
    "Subtitle": "Yes, I did.",
    "Human Translation": "하프 연주자를 부른 게 아니었나요? - 불렀죠 - 훌륭한 연주자를 불렀죠?"
  },
  {
    "Time": "5:21",
    "Subtitle": "And did you not want a great harp player?",
    "Human Translation": "- 불렀죠 - 훌륭한 연주자를 불렀죠?"
  },
  {
    "Time": "5:24",
    "Subtitle": "Yes, I did. Okay. I am a great harp player.",
    "Human Translation": "- 맞아요 - 내가 그 훌륭한 연주자예요"
  },
  {
    "Time": "5:28",
    "Subtitle": "And this is my great harp, okay?",
    "Human Translation": "이건 제 훌륭한 하프죠"
  },
  {
    "Time": "5:30",
    "Subtitle": "So if you're looking for someone to be nice to the guests",
    "Human Translation": "이건 제 훌륭한 하프죠 그러니 손님에게 친절한 연주자를 원한다면"
  },
  {
    "Time": "5:33",
    "Subtitle": "get a harmonica player.",
    "Human Translation": "그러니 손님에게 친절한 연주자를 원한다면 하모니카 연주자나 콧바람 연주자를 불러요"
  },
  {
    "Time": "5:35",
    "Subtitle": "Maybe someone who whistles through his nose.",
    "Human Translation": "하모니카 연주자나 콧바람 연주자를 불러요"
  },
  {
    "Time": "5:37",
    "Subtitle": "Okay? Capish?",
    "Human Translation": "알아들었죠?"
  },
  {
    "Time": "5:40",
    "Subtitle": "Oh, that is a great spot for a table. Decorator's a genius.",
    "Human Translation": "탁자 놓기 딱 좋은 자리네요 환상적인 인테리어에요"
  },
  {
    "Time": "5:44",
    "Subtitle": "Madame, you have no idea how desperately I'd like to help.",
    "Human Translation": "부인, 저도 죽고 싶을 만큼 도와드리고 싶습니다만"
  },
  {
    "Time": "5:47",
    "Subtitle": "But see, I'd have to build a room for you myself",
    "Human Translation": "그러려면 방을 하나 더 지어야 하는데"
  },
  {
    "Time": "5:50",
    "Subtitle": "and I'm a man who works with his hands.",
    "Human Translation": "전 육체노동은 절대 못해요"
  },
  {
    "Time": "5:52",
    "Subtitle": "So the best I can do is suggest that you",
    "Human Translation": "제가 최선을 다해 볼 테니"
  },
  {
    "Time": "5:54",
    "Subtitle": "please try for another weekend. Any weekend.",
    "Human Translation": "아무 때나 다른 주말을 골라 보세요"
  },
  {
    "Time": "5:58",
    "Subtitle": "Ah, good, fine, the twenty-first.",
    "Human Translation": "등록 좋습니다, 21일이요 찾아볼 테니 기다리세요"
  },
  {
    "Time": "6:01",
    "Subtitle": "Hold on, I'll look.",
    "Human Translation": "좋습니다, 21일이요 찾아볼 테니 기다리세요"
  },
  {
    "Time": "6:05",
    "Subtitle": "No, I'm sorry, we're completely booked.",
    "Human Translation": "죄송합니다만 예약이 꽉 찼군요"
  },
  {
    "Time": "6:11",
    "Subtitle": "Has the plumber attended to room four yet? He was here, he did nothing, it's a hundred dollars.",
    "Human Translation": "- 4호실에 배관공이 왔나요? - 그냥 보기만 하고 백 달러래요"
  },
  {
    "Time": "6:19",
    "Subtitle": "Hi, Marco, Lorelai. Talk to me about room four.",
    "Human Translation": "마르코, 로렐라이에요 4호실은 뭐가 문제였죠?"
  },
  {
    "Time": "6:22",
    "Subtitle": "What was wrong with it?",
    "Human Translation": "4호실은 뭐가 문제였죠?"
  },
  {
    "Time": "6:25",
    "Subtitle": "Uh-huh? I thought you replaced that already.",
    "Human Translation": "그건 전에 바꿨다면서요"
  },
  {
    "Time": "6:28",
    "Subtitle": "Well, because you told me you did and I never forget anything.",
    "Human Translation": "그건 전에 바꿨다면서요 분명 그렇게 얘기했고 전 기억력이 좋거든요"
  },
  {
    "Time": "6:31",
    "Subtitle": "So this one's on you, right?",
    "Human Translation": "그럼 이번엔 공짜죠?"
  },
  {
    "Time": "6:33",
    "Subtitle": "Pleasure doing business with you.",
    "Human Translation": "도와줘서 정말 고마웠어요"
  },
  {
    "Time": "6:35",
    "Subtitle": "- What is your offspring doing? - Need stamps. I'll take these?",
    "Human Translation": "- 애는 왜 데려왔죠? - 이 우표 써도 돼요?"
  },
  {
    "Time": "6:38",
    "Subtitle": "- No. - Take them.",
    "Human Translation": "- 안 돼 - 가져가"
  },
  {
    "Time": "6:40",
    "Subtitle": "- What's with the muumuu? - Stop.",
    "Human Translation": "- 원주민 의상이네? - 그만해"
  },
  {
    "Time": "6:41",
    "Subtitle": "I'm just saying, you couldn't find one made of metal",
    "Human Translation": "- 원주민 의상이네? - 그만해 투시하는 사람을 대비해서 철갑옷을 입지그래?"
  },
  {
    "Time": "6:44",
    "Subtitle": "in case anyone has X-ray eyes?",
    "Human Translation": "투시하는 사람을 대비해서 철갑옷을 입지그래?"
  },
  {
    "Time": "6:45",
    "Subtitle": "And now we say goodbye.",
    "Human Translation": "작별 인사나 해"
  },
  {
    "Time": "6:47",
    "Subtitle": "Hey, have Michel look at your French paper before you go.",
    "Human Translation": "가기 전에 미셸한테 불어 숙제를 맡겨"
  },
  {
    "Time": "6:50",
    "Subtitle": "- Excuse me? - That'd be great.",
    "Human Translation": "뭐라고요?"
  },
  {
    "Time": "6:52",
    "Subtitle": "- No. - Come on, Michel.",
    "Human Translation": "- 그럼 되겠네요 - 싫어 부탁해요, 여자들한테 미셸이 힘 좋다고 소문 낼게요"
  },
  {
    "Time": "6:54",
    "Subtitle": "I'll tell all the ladies what a stud you are.",
    "Human Translation": "부탁해요, 여자들한테 미셸이 힘 좋다고 소문 낼게요"
  },
  {
    "Time": "6:57",
    "Subtitle": "Hm. I believe that memo has already been sent.",
    "Human Translation": "이미 소문이 났을걸"
  },
  {
    "Time": "6:59",
    "Subtitle": "[French accent] Oh, please, Michel. Pretty please with sucre on top.",
    "Human Translation": "부탁이에요 딱 한 번만 도와주면 이런 말투는 멈출게요"
  },
  {
    "Time": "7:02",
    "Subtitle": "I will stop talking like this.",
    "Human Translation": "딱 한 번만 도와주면 이런 말투는 멈출게요"
  },
  {
    "Time": "7:04",
    "Subtitle": "Leave it. I'll look at it if I get a chance.",
    "Human Translation": "놓고 가 시간 나면 훑어볼게"
  },
  {
    "Time": "7:06",
    "Subtitle": "It's due tomorrow. And pay attention to the grammar.",
    "Human Translation": "내일까지예요 특히 문법에 신경 써줘요"
  },
  {
    "Time": "7:14",
    "Subtitle": "- I despise you. - Hm.",
    "Human Translation": "미워 죽겠네요"
  },
  {
    "Time": "7:22",
    "Subtitle": "When are you going to let your parents know",
    "Human Translation": "건초 마차 소풍 목요일 저녁 9시 악마의 록 음악 팬이라는 건 언제 부모님께 알릴 거야?"
  },
  {
    "Time": "7:24",
    "Subtitle": "that you listen to the evil rock music?",
    "Human Translation": "악마의 록 음악 팬이라는 건 언제 부모님께 알릴 거야?"
  },
  {
    "Time": "7:26",
    "Subtitle": "You're an American teenager, for God's sake.",
    "Human Translation": "미국 십 대는 다 그렇잖아"
  },
  {
    "Time": "7:29",
    "Subtitle": "Rory, if my parents still get upset over the obscene",
    "Human Translation": "미국 음식이 너무 크다고"
  },
  {
    "Time": "7:31",
    "Subtitle": "portion size of American food, I seriously doubt",
    "Human Translation": "화를 내는 부모님에겐 에미넴을 듣는다는 얘기도 꺼낼 수 없어"
  },
  {
    "Time": "7:34",
    "Subtitle": "I'm gonna make any inroads with Eminem.",
    "Human Translation": "에미넴을 듣는다는 얘기도 꺼낼 수 없어"
  },
  {
    "Time": "7:36",
    "Subtitle": "- I have to go to that. - The hayride? You're kidding",
    "Human Translation": "- 난 저기 가야 해 - 마차 소풍에? 설마…"
  },
  {
    "Time": "7:40",
    "Subtitle": "My parents set me up with the son of a business associate.",
    "Human Translation": "부모님이 사업가의 아들과 만남을 주선하셨어"
  },
  {
    "Time": "7:43",
    "Subtitle": "He's gonna be a doctor.",
    "Human Translation": "의사가 될 거래"
  },
  {
    "Time": "7:44",
    "Subtitle": "- How old is he? - Sixteen.",
    "Human Translation": "- 몇 살인데? - 16살"
  },
  {
    "Time": "7:47",
    "Subtitle": "So he's gonna be a doctor in a hundred years.",
    "Human Translation": "백 년 후에나 의사가 되겠네"
  },
  {
    "Time": "7:49",
    "Subtitle": "Well, my parents like to plan ahead.",
    "Human Translation": "인생설계가 빠르시거든"
  },
  {
    "Time": "7:52",
    "Subtitle": "God, you have to go to the hayride with him?",
    "Human Translation": "- 그 애와 같이 가는 거야? - 그 애 오빠도 같이야"
  },
  {
    "Time": "7:54",
    "Subtitle": "- And his older brother. - Oh, now you're kidding.",
    "Human Translation": "- 그 애와 같이 가는 거야? - 그 애 오빠도 같이야 - 나 놀리는 거야? - 한국인에겐 의사가 최고야"
  },
  {
    "Time": "7:57",
    "Subtitle": "Koreans never joke about future doctors.",
    "Human Translation": "- 나 놀리는 거야? - 한국인에겐 의사가 최고야"
  },
  {
    "Time": "7:59",
    "Subtitle": "So, I guess you're not going, huh?",
    "Human Translation": "넌 안 가겠지?"
  },
  {
    "Time": "8:01",
    "Subtitle": "No, I'm still fuzzy on what's fun about sitting in",
    "Human Translation": "2시간 동안 엉덩이에 건초나 묻히며 앉아있는 게"
  },
  {
    "Time": "8:04",
    "Subtitle": "the cold for two hours with some sticks up your butt.",
    "Human Translation": "2시간 동안 엉덩이에 건초나 묻히며 앉아있는 게 - 뭐가 재밌는지 모르겠어 - 나라고 그걸 알겠니?"
  },
  {
    "Time": "8:07",
    "Subtitle": "Don't expect me to clear it up for you.",
    "Human Translation": "- 뭐가 재밌는지 모르겠어 - 나라고 그걸 알겠니?"
  },
  {
    "Time": "8:13",
    "Subtitle": "For those of you who have not finished the final chapters of Huckleberry Finn",
    "Human Translation": "아직도 '허클베리 핀' 을 못 읽은 사람들은"
  },
  {
    "Time": "8:17",
    "Subtitle": "'you may use this time to do so.'",
    "Human Translation": "지금 읽도록 해요"
  },
  {
    "Time": "8:19",
    "Subtitle": "'For those of you who have, you can start on your essay now.'",
    "Human Translation": "다 읽은 사람들은 독후감을 쓰세요"
  },
  {
    "Time": "8:23",
    "Subtitle": "'Whichever task you choose, do it silently.'",
    "Human Translation": "둘 중에 뭘 하든지 정숙을 유지해요"
  },
  {
    "Time": "8:40",
    "Subtitle": "[softly] Maybe it's a love letter.",
    "Human Translation": "- 연애편지일 거야 - 아니면 일기겠지"
  },
  {
    "Time": "8:42",
    "Subtitle": "- Or her diary. - Could be a slam book.",
    "Human Translation": "- 연애편지일 거야 - 아니면 일기겠지 비밀 일기일 거야"
  },
  {
    "Time": "8:50",
    "Subtitle": "It's the assignment.",
    "Human Translation": "숙제하는 거야"
  },
  {
    "Time": "9:11",
    "Subtitle": "- Nice, huh? - Beautiful.",
    "Human Translation": "- 좋죠? - 아름답네요"
  },
  {
    "Time": "9:15",
    "Subtitle": "Yeah, well, tell it to the tip jar.",
    "Human Translation": "팁으로 보여주시죠"
  },
  {
    "Time": "9:17",
    "Subtitle": "Take Mrs. Langworthy's bags up to 314.",
    "Human Translation": "짐은 314호로 옮기고"
  },
  {
    "Time": "9:19",
    "Subtitle": "Make sure the drapes are closed and there's extra soap",
    "Human Translation": "커튼을 닫고 비누도 더 갖다 놓고"
  },
  {
    "Time": "9:21",
    "Subtitle": "and she wants her pillow mints now.",
    "Human Translation": "배개향도 지금 달래요"
  },
  {
    "Time": "9:26",
    "Subtitle": "- Sookie! - 'I'm okay, I'm okay.'",
    "Human Translation": "- 수키! - 난 괜찮아!"
  },
  {
    "Time": "9:29",
    "Subtitle": "'What did you do now?'",
    "Human Translation": "이번엔 또 무슨 일이야? 잘 좀 보지 그랬어요?"
  },
  {
    "Time": "9:31",
    "Subtitle": "Oh, why aren't you watching her?",
    "Human Translation": "이번엔 또 무슨 일이야? 잘 좀 보지 그랬어요? '감시를 잊지 말아요'"
  },
  {
    "Time": "9:34",
    "Subtitle": "Eh, no, she's this. Bad food in the head.",
    "Human Translation": "이건 자살행위에요 수키는 미쳤다고요!"
  },
  {
    "Time": "9:39",
    "Subtitle": "I need you to be more careful.",
    "Human Translation": "- 좀 더 조심해 - 알아, 미안해"
  },
  {
    "Time": "9:41",
    "Subtitle": "I know, I'm sorry. Hey, I fixed the peach sauce.",
    "Human Translation": "- 좀 더 조심해 - 알아, 미안해 복숭아 소스를 바꿔봤어"
  },
  {
    "Time": "9:44",
    "Subtitle": "That's blood, you're bleeding. Why are you bleeding?",
    "Human Translation": "- 피네, 왜 피가 났어? - 봉합이 터졌나봐"
  },
  {
    "Time": "9:46",
    "Subtitle": "Oh, my stitches opened. I was using too much maple syrup.",
    "Human Translation": "- 피네, 왜 피가 났어? - 봉합이 터졌나봐 메이플 시럽을 많이 써서 향이 날라갔었어"
  },
  {
    "Time": "9:49",
    "Subtitle": "- It strangled the fruit. - When did you get stitches?",
    "Human Translation": "메이플 시럽을 많이 써서 향이 날라갔었어 - 언제 꿰맸는데? - 금요일 밤, 장식에 벴어"
  },
  {
    "Time": "9:51",
    "Subtitle": "- Friday night. Radish roses. - Okay, stop moving.",
    "Human Translation": "- 언제 꿰맸는데? - 금요일 밤, 장식에 벴어 그만 움직여"
  },
  {
    "Time": "9:53",
    "Subtitle": "You gotta taste the sauce. You have to try it while it's warm.",
    "Human Translation": "아직 따뜻할 때 맛을 봐"
  },
  {
    "Time": "9:57",
    "Subtitle": "Okay. Oh, Sookie, I need you to be more careful.",
    "Human Translation": "수키, 앞으로는 더 조심해"
  },
  {
    "Time": "9:59",
    "Subtitle": "I need there to be fewer accidents. Yeah, yeah, yeah.",
    "Human Translation": "사고를 줄여야 해"
  },
  {
    "Time": "10:05",
    "Subtitle": "Oh, dear God Almighty. That's incredible.",
    "Human Translation": "이런 세상에! 너무 맛있다!"
  },
  {
    "Time": "10:08",
    "Subtitle": "I want to put it on the waffles for breakfast.",
    "Human Translation": "내일 아침식사에 와플 위에 뿌릴 거야"
  },
  {
    "Time": "10:11",
    "Subtitle": "- I wanna bathe in that sauce. - I will make more.",
    "Human Translation": "- 소스에 목욕하고 싶네 - 더 만들게"
  },
  {
    "Time": "10:13",
    "Subtitle": "Someday, when we open our own inn. Diabetics will line up to eat this sauce.",
    "Human Translation": "나중에 우리 둘이 모텔을 만들면 당뇨 환자들도 줄을 설 거야"
  },
  {
    "Time": "10:18",
    "Subtitle": "- Won't that be great? - Yeah.",
    "Human Translation": "정말 멋질 거야"
  },
  {
    "Time": "10:21",
    "Subtitle": "But the key to someday achieving that dream",
    "Human Translation": "그 꿈을 이루려면 수키가 살아남아서"
  },
  {
    "Time": "10:23",
    "Subtitle": "is for you to stay alive, so we can open an inn.",
    "Human Translation": "그 꿈을 이루려면 수키가 살아남아서 같이 모텔을 열어야 해 알겠지?"
  },
  {
    "Time": "10:26",
    "Subtitle": "- Do you understand? - Yes, I understand.",
    "Human Translation": "같이 모텔을 열어야 해 알겠지? - 알았어 - 좋아"
  },
  {
    "Time": "10:28",
    "Subtitle": "- Alright. - Mm-hm.",
    "Human Translation": "- 알았어 - 좋아"
  },
  {
    "Time": "10:29",
    "Subtitle": "So, now, let's get you up and to the doctor on three. - One, two, three. - Ow!",
    "Human Translation": "이제 일어나서 병원에 가자 하나, 둘, 셋!"
  },
  {
    "Time": "10:34",
    "Subtitle": "- What? - Stepped on my thumb. I'm fine.",
    "Human Translation": "뭐야? 엄지를 밟았어, 괜찮아 일어나자"
  },
  {
    "Time": "10:36",
    "Subtitle": "(Sookie) On three. Okay.",
    "Human Translation": "엄지를 밟았어, 괜찮아 일어나자"
  },
  {
    "Time": "10:39",
    "Subtitle": "Was it a good color at least? - It had sparkles in it. - Wow.",
    "Human Translation": "- 색깔이라도 좋았어? - 광채가 나던걸"
  },
  {
    "Time": "10:44",
    "Subtitle": "And it smelled like bubble gum when it dried.",
    "Human Translation": "마르면 풍선껌 냄새가 나"
  },
  {
    "Time": "10:46",
    "Subtitle": "Oh, well, there's no way Mark Twain can compete with that.",
    "Human Translation": "마크 트웨인 같으면 어림도 없겠는걸 김가네 골동품점"
  },
  {
    "Time": "10:52",
    "Subtitle": "Mom, we're home.",
    "Human Translation": "엄마, 저 왔어요!"
  },
  {
    "Time": "10:54",
    "Subtitle": "- Did you hear something? - I'm not sure.",
    "Human Translation": "- 무슨 소리 들려? - 잘 모르겠어"
  },
  {
    "Time": "10:57",
    "Subtitle": "Mom? Are you here?",
    "Human Translation": "엄마, 있어요?"
  },
  {
    "Time": "10:59",
    "Subtitle": "'We're open. Everything's half off.'",
    "Human Translation": "영업합니다! 전부 다 반값이에요!"
  },
  {
    "Time": "11:01",
    "Subtitle": "We have contact.",
    "Human Translation": "교신 성공이네"
  },
  {
    "Time": "11:03",
    "Subtitle": "- Mom? - 'Lane?'",
    "Human Translation": "- 엄마! - 레인?"
  },
  {
    "Time": "11:08",
    "Subtitle": "- Mom, where are you? - 'Lane, where are you?'",
    "Human Translation": "엄마, 어디 있어요? - 레인, 어디야? - 여기 뒤에요"
  },
  {
    "Time": "11:11",
    "Subtitle": "- Back here. - 'Over here!'",
    "Human Translation": "- 레인, 어디야? - 여기 뒤에요 이쪽이다"
  },
  {
    "Time": "11:15",
    "Subtitle": "I think she's that way.",
    "Human Translation": "저쪽에 계신 것 같은데"
  },
  {
    "Time": "11:18",
    "Subtitle": "- Are we closer? - 'I'm by the table!'",
    "Human Translation": "- 이 근처에요? - 탁자 옆에 있다"
  },
  {
    "Time": "11:21",
    "Subtitle": "She's kidding, right?",
    "Human Translation": "농담이시겠지?"
  },
  {
    "Time": "11:23",
    "Subtitle": "Look, we'll meet you in the kitchen!",
    "Human Translation": "부엌에서 만나요"
  },
  {
    "Time": "11:25",
    "Subtitle": "- 'What?' - The kitchen.",
    "Human Translation": "- 뭐라고? - 부엌이라고요!"
  },
  {
    "Time": "11:28",
    "Subtitle": "- 'Who's that?' - It's Rory, Mom.",
    "Human Translation": "- 누구야? - 로리에요, 엄마"
  },
  {
    "Time": "11:32",
    "Subtitle": "Wow, I could hear the disappointment from here.",
    "Human Translation": "실망하신 게 느껴지네"
  },
  {
    "Time": "11:34",
    "Subtitle": "Come on. Stop it.",
    "Human Translation": "그만 해"
  },
  {
    "Time": "11:36",
    "Subtitle": "It sucks that after all these years your mom still hates me.",
    "Human Translation": "시간이 이렇게나 흘렀는데 아직도 날 싫어하시네"
  },
  {
    "Time": "11:39",
    "Subtitle": "- She doesn't hate you. - She hates my mother.",
    "Human Translation": "- 싫어하진 않아 - 우리 엄마는 싫어하시잖아"
  },
  {
    "Time": "11:41",
    "Subtitle": "She doesn't trust unmarried women. You're unmarried.",
    "Human Translation": "- 독신은 안 믿으시거든 - 너도 독신이잖아"
  },
  {
    "Time": "11:45",
    "Subtitle": "I'm hay riding with a future proctologist. I have potential.",
    "Human Translation": "난 장래 의사를 만날 테니 결혼할 가능성이 있잖아"
  },
  {
    "Time": "11:48",
    "Subtitle": "Go upstairs. Tea is ready. I have muffins with no dairy, no sugar, no wheat.",
    "Human Translation": "차와 머핀을 준비했다 무설탕에 우유와 밀도 뺐어"
  },
  {
    "Time": "11:52",
    "Subtitle": "Have to soak them in tea to make them soft to bite",
    "Human Translation": "머핀은 차에 담가 연해져야 먹을 수 있지만"
  },
  {
    "Time": "11:56",
    "Subtitle": "but they're very healthy. So, how was school?",
    "Human Translation": "건강엔 아주 좋아 학교는 어땠지?"
  },
  {
    "Time": "12:00",
    "Subtitle": "None of the girls get pregnant, drop out?",
    "Human Translation": "임신이나 자퇴한 애들은 없지?"
  },
  {
    "Time": "12:02",
    "Subtitle": "Not that we know of.",
    "Human Translation": "제가 아는 한은요"
  },
  {
    "Time": "12:04",
    "Subtitle": "Come to think of it, Joanna Posner was glowing.",
    "Human Translation": "생각해보니 조애나가 얼굴이 붉었던 것 같네요"
  },
  {
    "Time": "12:07",
    "Subtitle": "- What? - Nothing, she's just kidding.",
    "Human Translation": "- 뭐라고? - 농담이니 걱정 마세요"
  },
  {
    "Time": "12:09",
    "Subtitle": "Boys don't like funny girls. Noted.",
    "Human Translation": "- 남자는 재밌는 여자는 싫어해 - 알겠습니다"
  },
  {
    "Time": "12:14",
    "Subtitle": "(male #1) 'Hello? Is Anybody here?'",
    "Human Translation": "가게에 누구 없소?"
  },
  {
    "Time": "12:16",
    "Subtitle": "We're here. We're coming!",
    "Human Translation": "여기 있습니다 곧 갈게요"
  },
  {
    "Time": "12:18",
    "Subtitle": "Have the muffins made from sprouted wheat.",
    "Human Translation": "머핀은 싹튼 밀로 만든 거다"
  },
  {
    "Time": "12:20",
    "Subtitle": "Only good 24 hours. Everything's half off!",
    "Human Translation": "24시간 안에 먹어야 해 전부 반값입니다!"
  },
  {
    "Time": "12:23",
    "Subtitle": "- 'Where are you?' - Over here.",
    "Human Translation": "- 어디 계세요? - 여기에요!"
  },
  {
    "Time": "12:25",
    "Subtitle": "- 'Where?' - 'By the chair!'",
    "Human Translation": "- 어디요? - 의자 옆에요!"
  },
  {
    "Time": "12:27",
    "Subtitle": "'What chair?'",
    "Human Translation": "무슨 의자요?"
  },
  {
    "Time": "12:29",
    "Subtitle": "- 'Careful!' - I'm okay.",
    "Human Translation": "- 조심해요! - 난 괜찮아"
  },
  {
    "Time": "12:31",
    "Subtitle": "- Peppers, peppers, peppers. - Mike!",
    "Human Translation": "우리 피망들… 마이크"
  },
  {
    "Time": "12:34",
    "Subtitle": "Okay, hello little vegetables, come with me.",
    "Human Translation": "안녕, 야채들아? 나랑 같이 가자"
  },
  {
    "Time": "12:37",
    "Subtitle": "I got that. Okay, where's my glaze?",
    "Human Translation": "안녕, 야채들아? 나랑 같이 가자 - 시럽은 어디 있지? - 조리대 안에요"
  },
  {
    "Time": "12:39",
    "Subtitle": "- In the counter. - On the counter.",
    "Human Translation": "- 시럽은 어디 있지? - 조리대 안에요 조리대 위겠지, 안이 아니야"
  },
  {
    "Time": "12:42",
    "Subtitle": "On, not in, not in the counter. Okay, good, alright. My sauce.",
    "Human Translation": "조리대 위겠지, 안이 아니야 좋아, 잘했어 우리 소스야 꽤 맛있네"
  },
  {
    "Time": "12:47",
    "Subtitle": "Who-o, that's pretty good. Hello, a little bit of greens.",
    "Human Translation": "우리 소스야 꽤 맛있네 안녕, 녹색 양반?"
  },
  {
    "Time": "12:51",
    "Subtitle": "Okay, okay. Hello, my little babies. You like that?",
    "Human Translation": "안녕, 녹색 양반? 안녕, 아가들아 마음에 들어? 과즙을 좀 넣고…"
  },
  {
    "Time": "12:56",
    "Subtitle": "A little bit of juice. Okay. You're very pretty. Okay.",
    "Human Translation": "과즙을 좀 넣고… 아주 예쁘게 생겼네"
  },
  {
    "Time": "13:05",
    "Subtitle": "O-oh, It's here. It happened. She did it.",
    "Human Translation": "드디어 도착했어 그 애가 해냈어!"
  },
  {
    "Time": "13:08",
    "Subtitle": "I'm gonna need a little bit longer sentence.",
    "Human Translation": "좀 자세하게 말해 봐"
  },
  {
    "Time": "13:10",
    "Subtitle": "The Chilton school. Rory got in.",
    "Human Translation": "칠튼 고등학교에 로리가 합격했어"
  },
  {
    "Time": "13:12",
    "Subtitle": "Oh my God! Oh my God! I know. Look.",
    "Human Translation": "- 세상에! - 이것 좀 봐"
  },
  {
    "Time": "13:16",
    "Subtitle": "\"Dear Ms. Gilmore, We are happy to inform you that we have",
    "Human Translation": "'길모어 씨, 칠튼 고등학교에 자리가 생겼음을 알려드립니다"
  },
  {
    "Time": "13:19",
    "Subtitle": "\"a vacancy at Chilton Preparatory starting immediately",
    "Human Translation": "'길모어 씨, 칠튼 고등학교에 자리가 생겼음을 알려드립니다 '로리 양의 뛰어난 학업 성적과…"
  },
  {
    "Time": "13:21",
    "Subtitle": "\"due to your daughter's excellent credentials",
    "Human Translation": "'로리 양의 뛰어난 학업 성적과…"
  },
  {
    "Time": "13:23",
    "Subtitle": "\"and your enthusiastic pursuit of her enrollment.",
    "Human Translation": "'학부모님의 열성적인 성원에 힘입어…'"
  },
  {
    "Time": "13:25",
    "Subtitle": "I offered to do the principal.",
    "Human Translation": "입학만 된다면 몸도 팔겠다고 했거든"
  },
  {
    "Time": "13:26",
    "Subtitle": "\"We'll be happy to accept her, once the first semester's tuition has been received.\"",
    "Human Translation": "'첫 학기 등록금이 납부되면 로리의 입학을 허가합니다'"
  },
  {
    "Time": "13:30",
    "Subtitle": "This is very exciting.",
    "Human Translation": "정말 좋은 일이야"
  },
  {
    "Time": "13:34",
    "Subtitle": "- Is something burning? - My bangs, earlier.",
    "Human Translation": "- 뭐가 타나? - 아까 머리가 좀 탔어"
  },
  {
    "Time": "13:36",
    "Subtitle": "- Go on, go on, go on. - This is it.",
    "Human Translation": "- 뭐가 타나? - 아까 머리가 좀 탔어 로리는 항상 원하던 하버드에 갈 수 있고"
  },
  {
    "Time": "13:38",
    "Subtitle": "She can go to Harvard and get the education I couldn't.",
    "Human Translation": "로리는 항상 원하던 하버드에 갈 수 있고 내가 받지 못했던 교육도 받을 수 있어"
  },
  {
    "Time": "13:42",
    "Subtitle": "Do things that I couldn't. Then I can resent her for it",
    "Human Translation": "내가 받지 못했던 교육도 받을 수 있어 그럼 난 그걸 질투하며"
  },
  {
    "Time": "13:45",
    "Subtitle": "and we can finally have a normal mother-daughter relationship. Oh, good.",
    "Human Translation": "마침내 평범한 엄마와 딸의 관계를 갖는 거야"
  },
  {
    "Time": "13:50",
    "Subtitle": "- 'Mom?' - Oh.",
    "Human Translation": "엄마?"
  },
  {
    "Time": "13:56",
    "Subtitle": "- You're happy. - Yeah.",
    "Human Translation": "- 행복해 보이네 - 그래"
  },
  {
    "Time": "13:58",
    "Subtitle": "- Did you do something slutty? - I'm not that happy.",
    "Human Translation": "- 남자라도 만났어? - 그 정도로 좋진 않아"
  },
  {
    "Time": "14:03",
    "Subtitle": "- Here. - What's going on?",
    "Human Translation": "받아 - 무슨 일이야? - 열어 봐"
  },
  {
    "Time": "14:05",
    "Subtitle": "Open it.",
    "Human Translation": "- 무슨 일이야? - 열어 봐"
  },
  {
    "Time": "14:09",
    "Subtitle": "I'm gonna be in a Britney Spears video? You're going to Chilton! Oh, sorry.",
    "Human Translation": "- 브리트니 스피어스가 되라고? - 칠튼에 합격했어! 미안"
  },
  {
    "Time": "14:13",
    "Subtitle": "- Mom? - You did it, babe. You got in.",
    "Human Translation": "정말이야? 네가 해냈어, 입학이야"
  },
  {
    "Time": "14:18",
    "Subtitle": "How did this happen? You didn't, with the principal, did you?",
    "Human Translation": "어쩌다 들어갔지? 정말 몸을 판 건 아니지?"
  },
  {
    "Time": "14:22",
    "Subtitle": "No, honey, that was a joke.",
    "Human Translation": "아니, 그건 농담이지"
  },
  {
    "Time": "14:23",
    "Subtitle": "They have an open spot. You're gonna start on Monday.",
    "Human Translation": "빈자리가 있대 월요일부터 시작이야"
  },
  {
    "Time": "14:26",
    "Subtitle": "- Really? - Really.",
    "Human Translation": "- 정말? - 그래"
  },
  {
    "Time": "14:28",
    "Subtitle": "I don't believe this. Oh my God, I'm going to Chilton! Yeah.",
    "Human Translation": "믿을 수가 없어 세상에, 내가 칠튼에?"
  },
  {
    "Time": "14:32",
    "Subtitle": "- Sookie, I'm going to Chilton. - I'll make cookies.",
    "Human Translation": "수키, 칠튼에 간대요! 난 쿠키를 만들게 신교도들은 오트밀을 좋아해"
  },
  {
    "Time": "14:34",
    "Subtitle": "- Protestants love oatmeal. - I have to call Lane.",
    "Human Translation": "난 쿠키를 만들게 신교도들은 오트밀을 좋아해 레인에게 알려줘야지"
  },
  {
    "Time": "14:40",
    "Subtitle": "- I love you. - I love you.",
    "Human Translation": "- 사랑해 - 나도 사랑한다"
  },
  {
    "Time": "14:46",
    "Subtitle": "- My girl's going to Chilton. - Yeah. Rory's going to Chilton!",
    "Human Translation": "내 딸이 칠튼에 간대 그래, 로리가 칠튼에 간다!"
  },
  {
    "Time": "15:07",
    "Subtitle": "- Michel, the phone. - Mm-hm. It rings.",
    "Human Translation": "미셸, 전화요 울리네요"
  },
  {
    "Time": "15:11",
    "Subtitle": "- Can you answer it? - No.",
    "Human Translation": "- 전화 받을래요? - 싫어요"
  },
  {
    "Time": "15:14",
    "Subtitle": "People are particularly stupid today. I can't talk anymore.",
    "Human Translation": "손님들이 오늘 특히 짜증 나니 더 이상은 상대 못 해요"
  },
  {
    "Time": "15:18",
    "Subtitle": "You know who's really nice to talk to?",
    "Human Translation": "손님들이 오늘 특히 짜증 나니 더 이상은 상대 못 해요 정말 상대하기 좋은 사람은 실업자 구제소 직원들이죠"
  },
  {
    "Time": "15:20",
    "Subtitle": "The people at the unemployment agency.",
    "Human Translation": "정말 상대하기 좋은 사람은 실업자 구제소 직원들이죠"
  },
  {
    "Time": "15:25",
    "Subtitle": "Independence Inn, Michel speaking.",
    "Human Translation": "인디펜던스 모텔, 미셸입니다"
  },
  {
    "Time": "15:29",
    "Subtitle": "No, I'm sorry, we're completely booked.",
    "Human Translation": "아뇨, 죄송합니다만 예약이 꽉 찼습니다"
  },
  {
    "Time": "15:31",
    "Subtitle": "I'm holding for Miss Bell. I've been trying all day.",
    "Human Translation": "벨 씨를 찾고 있습니다 하루 종일 전화했어요"
  },
  {
    "Time": "15:36",
    "Subtitle": "Lorelai Gilmore.",
    "Human Translation": "벨 씨를 찾고 있습니다 하루 종일 전화했어요 로렐라이 길모어요"
  },
  {
    "Time": "15:40",
    "Subtitle": "Hi! Oh, hi, hi. Yeah, uh, my daughter Rory has just been",
    "Human Translation": "안녕하세요 제 딸 로리가 입학 허가를 받았어요"
  },
  {
    "Time": "15:45",
    "Subtitle": "accepted, yay. Thank you, and, um",
    "Human Translation": "제 딸 로리가 입학 허가를 받았어요 고마워요"
  },
  {
    "Time": "15:49",
    "Subtitle": "I got the invoice for your enrollment fee.",
    "Human Translation": "등록금 고지서를 받았는데요"
  },
  {
    "Time": "15:52",
    "Subtitle": "Wow, that is a lot of zeros behind that five.",
    "Human Translation": "숫자 자릿수가 엄청나게 길더군요"
  },
  {
    "Time": "15:56",
    "Subtitle": "Uh-huh. Okay, well, I guess what I'm wondering is if you couldn't",
    "Human Translation": "이렇게 전화한 이유는…"
  },
  {
    "Time": "16:01",
    "Subtitle": "take, say, part of it now, just to get her going?",
    "Human Translation": "일단 수업을 받도록 등록금 일부만 내도 될까요?"
  },
  {
    "Time": "16:08",
    "Subtitle": "Well, but she's supposed to start Monday.",
    "Human Translation": "하지만 수업은 월요일부터 시작이에요"
  },
  {
    "Time": "16:11",
    "Subtitle": "It just doesn't give me a lot of time to pull a bank job.",
    "Human Translation": "하지만 수업은 월요일부터 시작이에요 은행을 털 계획을 세울 시간이 모자라잖아요"
  },
  {
    "Time": "16:15",
    "Subtitle": "Well, never mind, I was just kidding.",
    "Human Translation": "아뇨, 농담이었어요"
  },
  {
    "Time": "16:17",
    "Subtitle": "No, a bank job is robbing a bank but..",
    "Human Translation": "아뇨, 농담이었어요 아뇨, 은행 터는 거 말이에요"
  },
  {
    "Time": "16:23",
    "Subtitle": "Uh-huh. Oh, no. No, no, no. I don't want you to give up",
    "Human Translation": "아뇨, 입학을 취소하진 마세요"
  },
  {
    "Time": "16:28",
    "Subtitle": "her space. I'll just... I'll have to figure it out.",
    "Human Translation": "아뇨, 입학을 취소하진 마세요 방법을 찾아봐야죠"
  },
  {
    "Time": "16:34",
    "Subtitle": "Okay. No, thank you. It's been a real treat talking to you.",
    "Human Translation": "아뇨, 감사합니다 정말 즐거운 통화였어요"
  },
  {
    "Time": "16:39",
    "Subtitle": "Yeah. Bye-bye.",
    "Human Translation": "네, 안녕히 계세요"
  },
  {
    "Time": "16:50",
    "Subtitle": "What do I do? What do I do? What do I do?",
    "Human Translation": "어떡하지?"
  },
  {
    "Time": "16:53",
    "Subtitle": "You can have anything I own. My car! Sell my car.",
    "Human Translation": "어떡하지? 뭐든지 도와줄게 내 차를 파는 건 어때?"
  },
  {
    "Time": "16:56",
    "Subtitle": "- No one wants your car. - Yeah.",
    "Human Translation": "뭐든지 도와줄게 내 차를 파는 건 어때? 누가 자기 차를 사겠어"
  },
  {
    "Time": "17:00",
    "Subtitle": "There's something I haven't thought of, I know.",
    "Human Translation": "뭔가 생각지 못한 방법이 있을 거야"
  },
  {
    "Time": "17:02",
    "Subtitle": "There's something staring me right in the face.",
    "Human Translation": "뭔가 생각지 못한 방법이 있을 거야 분명 방법이 있을 거야 아직 못 찾았을 뿐이지"
  },
  {
    "Time": "17:04",
    "Subtitle": "I just...I haven't seen it.",
    "Human Translation": "분명 방법이 있을 거야 아직 못 찾았을 뿐이지"
  },
  {
    "Time": "17:06",
    "Subtitle": "You know, you might consider calling your--",
    "Human Translation": "분명 방법이 있을 거야 아직 못 찾았을 뿐이지 - 차라리 전화를… - 싫어"
  },
  {
    "Time": "17:08",
    "Subtitle": "- No. - But I don't think you--",
    "Human Translation": "- 차라리 전화를… - 싫어 - 그것 말고는… - 그만해"
  },
  {
    "Time": "17:10",
    "Subtitle": "- Stop. - You can at least go--",
    "Human Translation": "- 그것 말고는… - 그만해 일단 찾아가서…"
  },
  {
    "Time": "17:12",
    "Subtitle": "- Uh. - Okay.",
    "Human Translation": "일단 찾아가서… 한 마디만 더 할게 방법은 그것밖에 없어"
  },
  {
    "Time": "17:13",
    "Subtitle": "Can I say something? It's really your only option.",
    "Human Translation": "한 마디만 더 할게 방법은 그것밖에 없어"
  },
  {
    "Time": "17:16",
    "Subtitle": "Sookie, there are several chapters from",
    "Human Translation": "스티븐 킹의 공포소설을 끝없이 재연하더라도…"
  },
  {
    "Time": "17:18",
    "Subtitle": "a Stephen King novel, I'd reenact before I'd resort",
    "Human Translation": "스티븐 킹의 공포소설을 끝없이 재연하더라도… 그 방법은 싫어"
  },
  {
    "Time": "17:20",
    "Subtitle": "to that option.",
    "Human Translation": "그 방법은 싫어"
  },
  {
    "Time": "17:22",
    "Subtitle": "- Okay, dropped. Dropped. - Thank you.",
    "Human Translation": "- 알았어, 그만 할게 - 고마워"
  },
  {
    "Time": "17:24",
    "Subtitle": "(Rory) 'Mom?'",
    "Human Translation": "엄마! 나 어때?"
  },
  {
    "Time": "17:26",
    "Subtitle": "- So what do you think? - Wow, it makes you look smart.",
    "Human Translation": "엄마! 나 어때? 그걸 입으니 똑똑해 보이네"
  },
  {
    "Time": "17:29",
    "Subtitle": "Okay, no more wine for you. Mom?",
    "Human Translation": "와인 좀 그만 드세요 엄마는 어때?"
  },
  {
    "Time": "17:33",
    "Subtitle": "You look like you were swallowed by a kilt.",
    "Human Translation": "스코틀랜드 남자 치마 같아"
  },
  {
    "Time": "17:36",
    "Subtitle": "Fine, you can hem it. A little.",
    "Human Translation": "엄마가 수선해 줘 아주 조금만 해야 돼"
  },
  {
    "Time": "17:38",
    "Subtitle": "- Ooh. - Only a little.",
    "Human Translation": "아주 조금만 해야 돼"
  },
  {
    "Time": "17:40",
    "Subtitle": "- Or I could hem it a lot. - No. I don't want it too short.",
    "Human Translation": "그래, 아니면 많이 하던가 너무 짧은 건 싫어"
  },
  {
    "Time": "17:44",
    "Subtitle": "I can't believe tomorrow's my last day at Stars Hollow High.",
    "Human Translation": "스타즈 할로우 고등학교는 내일이 마지막이라니 못 믿겠어"
  },
  {
    "Time": "17:47",
    "Subtitle": "I know.",
    "Human Translation": "그러게"
  },
  {
    "Time": "17:48",
    "Subtitle": "I was so excited, I dressed for gym.",
    "Human Translation": "- 너무 좋아서 체육복도 입었어 - 설마!"
  },
  {
    "Time": "17:49",
    "Subtitle": "- You're kidding! - And I played volleyball.",
    "Human Translation": "- 너무 좋아서 체육복도 입었어 - 설마! - 또 배구도 했지 - 다른 학생들이랑?"
  },
  {
    "Time": "17:51",
    "Subtitle": "With other people?",
    "Human Translation": "- 또 배구도 했지 - 다른 학생들이랑?"
  },
  {
    "Time": "17:53",
    "Subtitle": "And all this time I was avoiding group sports?",
    "Human Translation": "- 또 배구도 했지 - 다른 학생들이랑? 지금까지 단체 운동을 피했던 건…"
  },
  {
    "Time": "17:55",
    "Subtitle": "- Yeah. - Was very smart 'cause I suck.",
    "Human Translation": "지금까지 단체 운동을 피했던 건… 똑똑한 선택이었어 난 운동엔 약해"
  },
  {
    "Time": "17:57",
    "Subtitle": "Well, yeah, you got that from me.",
    "Human Translation": "똑똑한 선택이었어 난 운동엔 약해 날 닮아서 그래"
  },
  {
    "Time": "18:00",
    "Subtitle": "- Where's your pate? - At Zsa Zsa Gabor's house.",
    "Human Translation": "- 파테 어디 있어? - 우리가 상류층이야?"
  },
  {
    "Time": "18:02",
    "Subtitle": "I'm going to the store because there's nothing.",
    "Human Translation": "가게에 갔다 올게 먹을 게 하나도 없잖아"
  },
  {
    "Time": "18:04",
    "Subtitle": "- You feel like duck? - If it's made with chicken.",
    "Human Translation": "가게에 갔다 올게 먹을 게 하나도 없잖아 - 오리 요리 좋지? - 닭으로 만든다면 좋겠지"
  },
  {
    "Time": "18:07",
    "Subtitle": "- I'll be back. - 'Bye.'",
    "Human Translation": "- 오리 요리 좋지? - 닭으로 만든다면 좋겠지 - 금방 올게 - 잘 가"
  },
  {
    "Time": "18:11",
    "Subtitle": "Alright. This will give you an idea.",
    "Human Translation": "좋아, 이러면 마음에 들 거야"
  },
  {
    "Time": "18:14",
    "Subtitle": "- Go see how you like it. - Okay.",
    "Human Translation": "- 가서 한번 보렴 - 알았어"
  },
  {
    "Time": "18:18",
    "Subtitle": "I love being a private school girl.",
    "Human Translation": "사립에 다닌다니 너무 좋아"
  },
  {
    "Time": "19:05",
    "Subtitle": "Lorelai, my goodness, this is a surprise.",
    "Human Translation": "로렐라이! 세상에, 깜짝 놀랐구나"
  },
  {
    "Time": "19:08",
    "Subtitle": "- Is it Easter already? - 'Ha, ha.'",
    "Human Translation": "벌써 부활절이니?"
  },
  {
    "Time": "19:10",
    "Subtitle": "No, I finished up my business class and thought I'd stop by.",
    "Human Translation": "아뇨, 경영 수업을 듣고 집에 가다가 들렸어요"
  },
  {
    "Time": "19:14",
    "Subtitle": "- To see me? - 'Yes.'",
    "Human Translation": "아뇨, 경영 수업을 듣고 집에 가다가 들렸어요 - 날 보려고? - 네"
  },
  {
    "Time": "19:17",
    "Subtitle": "Well, isn't that nice. Come in.",
    "Human Translation": "꽤나 고맙구나"
  },
  {
    "Time": "19:20",
    "Subtitle": "Thanks.",
    "Human Translation": "- 들어오렴 - 고마워요"
  },
  {
    "Time": "19:26",
    "Subtitle": "The place looks great.",
    "Human Translation": "- 집을 예쁘게 꾸며놨네요 - 바뀐 건 하나도 없어"
  },
  {
    "Time": "19:29",
    "Subtitle": "- It hasn't changed. - Well, there you go.",
    "Human Translation": "- 집을 예쁘게 꾸며놨네요 - 바뀐 건 하나도 없어 그래서 그런가 봐요"
  },
  {
    "Time": "19:34",
    "Subtitle": "How are the girls at the bridge club?",
    "Human Translation": "카드 모임의 친구분들은 다 어떠세요?"
  },
  {
    "Time": "19:37",
    "Subtitle": "Old.",
    "Human Translation": "늙었지"
  },
  {
    "Time": "19:38",
    "Subtitle": "Well...good.",
    "Human Translation": "다행이네요"
  },
  {
    "Time": "19:47",
    "Subtitle": "You said you were taking a business class?",
    "Human Translation": "경영 수업을 듣는다고?"
  },
  {
    "Time": "19:49",
    "Subtitle": "Yeah, mm-hmm, yeah. I'm taking a business class",
    "Human Translation": "경영 수업을 듣는다고? 대학에서 일주일에 두 번씩 들어요"
  },
  {
    "Time": "19:51",
    "Subtitle": "at the college twice a week. I'm sure I told you.",
    "Human Translation": "대학에서 일주일에 두 번씩 들어요"
  },
  {
    "Time": "19:54",
    "Subtitle": "Well, if you're sure then you must have.",
    "Human Translation": "얘기했잖아요 네가 얘기했다면 한 거겠지"
  },
  {
    "Time": "20:01",
    "Subtitle": "- Would you like some tea? - I would love some coffee.",
    "Human Translation": "- 차라도 마실래? - 커피 한잔 하고 싶네요"
  },
  {
    "Time": "20:03",
    "Subtitle": "(Richard) 'Emily? I'm home.'",
    "Human Translation": "- 차라도 마실래? - 커피 한잔 하고 싶네요 - 에밀리, 나 왔소 - 여기 있어요"
  },
  {
    "Time": "20:05",
    "Subtitle": "We're in here.",
    "Human Translation": "- 에밀리, 나 왔소 - 여기 있어요"
  },
  {
    "Time": "20:07",
    "Subtitle": "- 'Hi, Dad' - What is it, Christmas already?",
    "Human Translation": "안녕하세요, 아빠 벌써 크리스마스인가?"
  },
  {
    "Time": "20:12",
    "Subtitle": "Lorelai was taking a business class at the college",
    "Human Translation": "로렐라이가 오늘 대학에서 경영 수업을 듣고"
  },
  {
    "Time": "20:16",
    "Subtitle": "today and decided to drop in to see us.",
    "Human Translation": "우릴 보러 왔대요"
  },
  {
    "Time": "20:17",
    "Subtitle": "What business class?",
    "Human Translation": "우릴 보러 왔대요 무슨 경영 수업?"
  },
  {
    "Time": "20:19",
    "Subtitle": "Well, she told us about it, dear, remember?",
    "Human Translation": "무슨 경영 수업? - 전에 말했다는데 몰라요? - 모르겠군요"
  },
  {
    "Time": "20:21",
    "Subtitle": "No.",
    "Human Translation": "- 전에 말했다는데 몰라요? - 모르겠군요"
  },
  {
    "Time": "20:24",
    "Subtitle": "(Lorelai) 'Well, actually, I came here for a reason.'",
    "Human Translation": "사실 이유가 있어서 왔어요"
  },
  {
    "Time": "20:28",
    "Subtitle": "Dad, would you mind sitting down for a minute?",
    "Human Translation": "사실 이유가 있어서 왔어요 아빠, 잠시만 앉으실래요?"
  },
  {
    "Time": "20:30",
    "Subtitle": "- You need money. - 'I have a situation.'",
    "Human Translation": "- 돈이 필요하구나 - 문제가 생겼어요"
  },
  {
    "Time": "20:33",
    "Subtitle": "You need money. Dad, will you just please let me get this out, okay?",
    "Human Translation": "- 돈이 필요한 게야 - 끝까지 좀 들으세요"
  },
  {
    "Time": "20:37",
    "Subtitle": "Um, Rory has been accepted to Chilton.",
    "Human Translation": "- 돈이 필요한 게야 - 끝까지 좀 들으세요 로리가 칠튼에 합격했어요"
  },
  {
    "Time": "20:42",
    "Subtitle": "Chilton? Oh, that's a wonderful school.",
    "Human Translation": "칠튼? 정말 뛰어난 학교지"
  },
  {
    "Time": "20:46",
    "Subtitle": "It's only five minutes from here.",
    "Human Translation": "여기서 겨우 5분 거리야"
  },
  {
    "Time": "20:47",
    "Subtitle": "That's right, it is. She can start as early as Monday.",
    "Human Translation": "맞아요, 가깝죠 월요일에 입학이에요"
  },
  {
    "Time": "20:51",
    "Subtitle": "The problem is that they want me to put down an enrollment fee",
    "Human Translation": "문제는 학교에서 등록금과 첫 학기 학비를"
  },
  {
    "Time": "20:55",
    "Subtitle": "plus the first semester tuition and I have to do",
    "Human Translation": "납부하라고 했는데"
  },
  {
    "Time": "20:58",
    "Subtitle": "that immediately or she loses her spot.",
    "Human Translation": "바로 입금하지 않으면 합격을 취소한대요"
  },
  {
    "Time": "21:00",
    "Subtitle": "So, you need money.",
    "Human Translation": "그러니 돈이 필요하잖니"
  },
  {
    "Time": "21:03",
    "Subtitle": "Yeah.",
    "Human Translation": "맞아요"
  },
  {
    "Time": "21:06",
    "Subtitle": "But it's not for me, it's for Rory.",
    "Human Translation": "하지만 제가 아니라 로리를 위해서예요"
  },
  {
    "Time": "21:08",
    "Subtitle": "And I fully intend to pay you back every cent.",
    "Human Translation": "하지만 제가 아니라 로리를 위해서예요 돈은 갚을게요 전 빚지는 거 싫어하잖아요"
  },
  {
    "Time": "21:10",
    "Subtitle": "I don't ask for favors, you know that.",
    "Human Translation": "돈은 갚을게요 전 빚지는 거 싫어하잖아요"
  },
  {
    "Time": "21:13",
    "Subtitle": "- Oh, yes, we know. - I'll get the checkbook.",
    "Human Translation": "그야 물론 잘 알지 수표책을 가져오마"
  },
  {
    "Time": "21:17",
    "Subtitle": "Thank you. You have no idea. Thank you.",
    "Human Translation": "고마워요, 얼마나 감사한지 모르실 거예요"
  },
  {
    "Time": "21:21",
    "Subtitle": "- On one condition. - So close.",
    "Human Translation": "고마워요, 얼마나 감사한지 모르실 거예요 - 조건이 있어 - 그러면 그렇지"
  },
  {
    "Time": "21:24",
    "Subtitle": "Since we are now financially involved in your life.",
    "Human Translation": "이제 우리도 네게 경제적 도움을 주니"
  },
  {
    "Time": "21:27",
    "Subtitle": "I want to be actively involved in your life.",
    "Human Translation": "너희 인생을 함께하고 싶다"
  },
  {
    "Time": "21:32",
    "Subtitle": "What does that mean, mother?",
    "Human Translation": "그게 무슨 뜻이죠, 어머니?"
  },
  {
    "Time": "21:34",
    "Subtitle": "- I want a weekly dinner. - What?",
    "Human Translation": "- 매주 저녁을 먹자 - 뭐라고요?"
  },
  {
    "Time": "21:37",
    "Subtitle": "Friday nights, you and Rory will have dinner here.",
    "Human Translation": "금요일 밤마다 너와 로리가 여기서 저녁을 먹는 거야"
  },
  {
    "Time": "21:40",
    "Subtitle": "Mom--",
    "Human Translation": "금요일 밤마다 너와 로리가 여기서 저녁을 먹는 거야 농담도…"
  },
  {
    "Time": "21:42",
    "Subtitle": "And you have to call us once a week to give us an update",
    "Human Translation": "또 일주일에 한 번씩 전화를 하고 로리와 너의 일상을 보고해"
  },
  {
    "Time": "21:45",
    "Subtitle": "on her schooling and your life. That's it. That's the condition.",
    "Human Translation": "로리와 너의 일상을 보고해 그게 바로 조건이야"
  },
  {
    "Time": "21:50",
    "Subtitle": "If you agree, you'll come to dinner tomorrow night and leave",
    "Human Translation": "동의한다면 내일 저녁에 와서"
  },
  {
    "Time": "21:53",
    "Subtitle": "here with a check. Otherwise, I'm sorry, we can't help you.",
    "Human Translation": "수표를 받아가 그게 싫다면 미안하지만 도울 수 없어"
  },
  {
    "Time": "22:01",
    "Subtitle": "I don't want her to know that I borrowed money from you.",
    "Human Translation": "제가 부모님에게 돈을 빌린 건 로리가 몰랐으면 좋겠어요"
  },
  {
    "Time": "22:05",
    "Subtitle": "- 'Can that just be between us?' - Seven o'clock work for you?",
    "Human Translation": "우리만 아는 걸로 해주실래요? 7시면 되겠니?"
  },
  {
    "Time": "22:11",
    "Subtitle": "Perfect.",
    "Human Translation": "좋아요"
  },
  {
    "Time": "22:29",
    "Subtitle": "And we get to wear uniforms. No more having people check",
    "Human Translation": "교복도 입는대 이젠 서로 무슨 옷을 입었나 눈치 볼 필요도 없어"
  },
  {
    "Time": "22:31",
    "Subtitle": "you out to see what jeans you're wearing 'cause everyone's",
    "Human Translation": "이젠 서로 무슨 옷을 입었나 눈치 볼 필요도 없어"
  },
  {
    "Time": "22:33",
    "Subtitle": "dressed alike in boring clothes and just there to learn.",
    "Human Translation": "다들 똑같은 옷을 입고 공부만 하는 거야"
  },
  {
    "Time": "22:36",
    "Subtitle": "Okay, there's academic-minded and then there's Amish.",
    "Human Translation": "학구열과 변태는 구분을 해야지"
  },
  {
    "Time": "22:39",
    "Subtitle": "- Funny. - Thank you!",
    "Human Translation": "- 웃기네 - 고마워"
  },
  {
    "Time": "22:42",
    "Subtitle": "So, I told my mom you're changing schools.",
    "Human Translation": "- 엄마한테 너 전학 간다고 말했어 - 좋아하시지?"
  },
  {
    "Time": "22:44",
    "Subtitle": "- Was she thrilled? - The party's on Friday.",
    "Human Translation": "- 엄마한테 너 전학 간다고 말했어 - 좋아하시지? 금요일에 파티도 한대 난 가봐야겠다"
  },
  {
    "Time": "22:46",
    "Subtitle": "I got to go. I have to have a pre-hayride cup of tea",
    "Human Translation": "금요일에 파티도 한대 난 가봐야겠다 장래 의사랑 건초 소풍의 전야제에 가야해"
  },
  {
    "Time": "22:50",
    "Subtitle": "with a future doctor. How do I look? Korean?",
    "Human Translation": "장래 의사랑 건초 소풍의 전야제에 가야해 - 한국인처럼 보여? - 꼭 그래 보여"
  },
  {
    "Time": "22:52",
    "Subtitle": "- Spitting image. - Good. Bye.",
    "Human Translation": "- 한국인처럼 보여? - 꼭 그래 보여 - 좋아, 잘 가 - 그래"
  },
  {
    "Time": "22:54",
    "Subtitle": "Bye.",
    "Human Translation": "- 좋아, 잘 가 - 그래"
  },
  {
    "Time": "23:04",
    "Subtitle": "God! You're like Ruth Gordon just standing",
    "Human Translation": "깜짝이야! 갈색 뿌리를 든 루스 고든처럼 거기 서 있진 마라"
  },
  {
    "Time": "23:08",
    "Subtitle": "there with a tannis root. Make a noise.",
    "Human Translation": "갈색 뿌리를 든 루스 고든처럼 거기 서 있진 마라 - 소리라도 내라고 - '로즈메리의 아기' 구나"
  },
  {
    "Time": "23:11",
    "Subtitle": "Rosemary's Baby.",
    "Human Translation": "- 소리라도 내라고 - '로즈메리의 아기' 구나"
  },
  {
    "Time": "23:18",
    "Subtitle": "- Yeah. - Well, that's a great movie.",
    "Human Translation": "- 맞아 - 괜찮은 영화지"
  },
  {
    "Time": "23:21",
    "Subtitle": "You've got good taste.",
    "Human Translation": "좋은 취향이야"
  },
  {
    "Time": "23:25",
    "Subtitle": "Are you moving?",
    "Human Translation": "이사 가니?"
  },
  {
    "Time": "23:27",
    "Subtitle": "No, just my books are.",
    "Human Translation": "아니, 내 책만 이사 가"
  },
  {
    "Time": "23:29",
    "Subtitle": "My family just moved here from Chicago.",
    "Human Translation": "난 시카고에서 이사왔어"
  },
  {
    "Time": "23:31",
    "Subtitle": "Chicago. Windy. Oprah.",
    "Human Translation": "시카고가 유명한 건 바람과… 오프라지"
  },
  {
    "Time": "23:36",
    "Subtitle": "Yeah. Yeah, that's the place. I'm Dean.",
    "Human Translation": "맞아, 그런 곳이지 난 딘이야"
  },
  {
    "Time": "23:41",
    "Subtitle": "Hi.",
    "Human Translation": "안녕"
  },
  {
    "Time": "23:43",
    "Subtitle": "Oh, Rory. Me. That's-that's me.",
    "Human Translation": "아, 난 로리야 그게 나지"
  },
  {
    "Time": "23:47",
    "Subtitle": "- Rory. - Well, Lorelai technically.",
    "Human Translation": "- 원래는 로렐라이야 - 좋은 이름이네"
  },
  {
    "Time": "23:50",
    "Subtitle": "- Lorelai, I like that. - It's my mother's name, too.",
    "Human Translation": "- 원래는 로렐라이야 - 좋은 이름이네 우리 엄마 이름인데 같은 이름을 썼어"
  },
  {
    "Time": "23:53",
    "Subtitle": "She named me after herself. She was lying in the hospital",
    "Human Translation": "우리 엄마 이름인데 같은 이름을 썼어 남자들이 보통 아들에게 자기 이름을 붙이는 걸 보고"
  },
  {
    "Time": "23:55",
    "Subtitle": "thinking about how men name boys after themselves. So why couldn't women?",
    "Human Translation": "남자들이 보통 아들에게 자기 이름을 붙이는 걸 보고"
  },
  {
    "Time": "23:59",
    "Subtitle": "She says her feminism just kind of took over.",
    "Human Translation": "여자는 왜 못하냐며 지었대 페미니즘 탓이라고 하셨지"
  },
  {
    "Time": "24:01",
    "Subtitle": "Personally, I think a lot of Demerol also went into that decision.",
    "Human Translation": "내 생각엔 진통제 때문에 그랬던 것 같아"
  },
  {
    "Time": "24:05",
    "Subtitle": "I never talk this much.",
    "Human Translation": "난 원래는 말이 없어"
  },
  {
    "Time": "24:09",
    "Subtitle": "- Well, I better go. - Oh, sure.",
    "Human Translation": "난 가야 해"
  },
  {
    "Time": "24:11",
    "Subtitle": "- I have to go look for a job. - Okay, good.",
    "Human Translation": "- 그래 - 일을 알아보고 있거든 그렇구나"
  },
  {
    "Time": "24:18",
    "Subtitle": "You should check with Miss Patty.",
    "Human Translation": "- 패티 아줌마에게 물어봐 - 뭐라고?"
  },
  {
    "Time": "24:20",
    "Subtitle": "- What? - About the job.",
    "Human Translation": "- 패티 아줌마에게 물어봐 - 뭐라고? 일자리 말이야 패티 아줌마한테 물어보라고"
  },
  {
    "Time": "24:22",
    "Subtitle": "You should check with Miss Patty. She teaches dance.",
    "Human Translation": "일자리 말이야 패티 아줌마한테 물어보라고"
  },
  {
    "Time": "24:25",
    "Subtitle": "She was actually on Broadway once.",
    "Human Translation": "춤을 가르치시는데 예전엔 브로드웨이에도 있었대"
  },
  {
    "Time": "24:27",
    "Subtitle": "I-I don't really dance much.",
    "Human Translation": "난 춤은 못 추는데"
  },
  {
    "Time": "24:30",
    "Subtitle": "No, no, she just kind of knows everything that's going on in town.",
    "Human Translation": "아니, 패티 아줌마는 마을 일을 다 아시거든"
  },
  {
    "Time": "24:33",
    "Subtitle": "She'll know if someone's looking.",
    "Human Translation": "일자리가 있는지 알아봐 주실 거야"
  },
  {
    "Time": "24:35",
    "Subtitle": "Oh, great. Uh, thanks.",
    "Human Translation": "일자리가 있는지 알아봐 주실 거야 잘 됐네, 고마워"
  },
  {
    "Time": "24:42",
    "Subtitle": "Hey, what are you doing now? Nothing...much.",
    "Human Translation": "- 지금 할 일 있니? - 아니, 별로"
  },
  {
    "Time": "24:48",
    "Subtitle": "I should throw this away at some point.",
    "Human Translation": "이걸 버릴 일이 남았지"
  },
  {
    "Time": "24:51",
    "Subtitle": "Maybe you could show me where this Miss Patty's place is.",
    "Human Translation": "패티 아주머니가 계신 곳에 데려다 줄 수 있을까?"
  },
  {
    "Time": "24:54",
    "Subtitle": "Yeah, I guess so. I really don't have anything important to..",
    "Human Translation": "그래, 어차피 중요한 일도 없으니까"
  },
  {
    "Time": "24:58",
    "Subtitle": "Let's go.",
    "Human Translation": "가자"
  },
  {
    "Time": "25:07",
    "Subtitle": "So, have you lived here all your life?",
    "Human Translation": "스타즈 할로우 고등학교 - 평생 여기서 살았어? - 응, 그런 셈이지"
  },
  {
    "Time": "25:09",
    "Subtitle": "Yes. Well, pretty much. I was actually born in Hartford.",
    "Human Translation": "- 평생 여기서 살았어? - 응, 그런 셈이지 - 태어난 곳은 하트포드야 - 별로 멀진 않네"
  },
  {
    "Time": "25:13",
    "Subtitle": "- Well, that's not far. - 30 minutes with no traffic.",
    "Human Translation": "- 태어난 곳은 하트포드야 - 별로 멀진 않네 - 안 막히면 30분이지 - 정말?"
  },
  {
    "Time": "25:15",
    "Subtitle": "- Really? - I timed it.",
    "Human Translation": "- 안 막히면 30분이지 - 정말? - 시간도 쟀어 - 그럼 확실하겠네"
  },
  {
    "Time": "25:17",
    "Subtitle": "Okay, then.",
    "Human Translation": "- 시간도 쟀어 - 그럼 확실하겠네 스타즈 할로우 고등학교 1997-98년 지역 우승"
  },
  {
    "Time": "25:23",
    "Subtitle": "- So, do you like cake? - What?",
    "Human Translation": "- 케이크 좋아해? - 뭐라고?"
  },
  {
    "Time": "25:27",
    "Subtitle": "They make really good cakes here. They're very...round.",
    "Human Translation": "여기 케이크가 아주 좋아 정말 동그랗거든"
  },
  {
    "Time": "25:33",
    "Subtitle": "- Okay, I'll remember that. - Good, make a note.",
    "Human Translation": "그래, 기억해둘게 그래, 적어둬"
  },
  {
    "Time": "25:38",
    "Subtitle": "You wouldn't want to forget where the round cakes are.",
    "Human Translation": "둥그런 케이크가 있는 곳은 놓치지 말아야지"
  },
  {
    "Time": "25:42",
    "Subtitle": "So, how are you liking Moby Dick?",
    "Human Translation": "모비 딕은 재미있니?"
  },
  {
    "Time": "25:44",
    "Subtitle": "- Oh, it's really good. - Yeah?",
    "Human Translation": "- 아주 재밌어 - 그래?"
  },
  {
    "Time": "25:46",
    "Subtitle": "- It's my first Melville. - Cool.",
    "Human Translation": "- 멜빌 책은 처음이야 - 잘됐네"
  },
  {
    "Time": "25:48",
    "Subtitle": "I know it's kinda cliche to pick Moby Dick as your first Melville but..",
    "Human Translation": "멜빌 책 중에서 모비 딕을 처음 고른 건 좀 구태의연하지만…"
  },
  {
    "Time": "25:53",
    "Subtitle": "Hey, how did you know I was reading Moby Dick?",
    "Human Translation": "내가 모비 딕을 읽는 건 어떻게 알았어?"
  },
  {
    "Time": "25:57",
    "Subtitle": "- I've been watching you. - Watching me?",
    "Human Translation": "- 널 지켜봤거든 - 지켜봤다고?"
  },
  {
    "Time": "26:00",
    "Subtitle": "I mean, not in a creepy, like, \"I'm watching you\" sort of way.",
    "Human Translation": "스토킹처럼 훔쳐본 게 아니라 네가 눈에 띄었어"
  },
  {
    "Time": "26:03",
    "Subtitle": "- I just, I've noticed you. - Me?",
    "Human Translation": "스토킹처럼 훔쳐본 게 아니라 네가 눈에 띄었어 - 내가? - 그래"
  },
  {
    "Time": "26:06",
    "Subtitle": "- Yeah. - When?",
    "Human Translation": "- 내가? - 그래 언제?"
  },
  {
    "Time": "26:10",
    "Subtitle": "Every day. After school you come out and you sit under",
    "Human Translation": "매일 방과 후에 넌 밖에 나와 저 나무 아래서 독서를 하지"
  },
  {
    "Time": "26:14",
    "Subtitle": "that tree there and you read. Last week it was Madame Bovary.",
    "Human Translation": "방과 후에 넌 밖에 나와 저 나무 아래서 독서를 하지 지난주는 보바리 부인이었고 이번 주는 모비 딕이었어"
  },
  {
    "Time": "26:18",
    "Subtitle": "- This week it's Moby Dick. - But why would you--",
    "Human Translation": "지난주는 보바리 부인이었고 이번 주는 모비 딕이었어 - 하지만 왜… - 넌 예쁘니까"
  },
  {
    "Time": "26:21",
    "Subtitle": "Because you're nice to look at.",
    "Human Translation": "- 하지만 왜… - 넌 예쁘니까"
  },
  {
    "Time": "26:23",
    "Subtitle": "And because you've got unbelievable concentration. What?",
    "Human Translation": "또 놀라울 정도의 집중력도 갖고 있지"
  },
  {
    "Time": "26:26",
    "Subtitle": "Last Friday these two guys were tossing around a ball",
    "Human Translation": "뭐? 지난 금요일에 두 녀석이 공놀이를 하다가"
  },
  {
    "Time": "26:29",
    "Subtitle": "and one guy was nailed in the face.",
    "Human Translation": "한 녀석이 얼굴에 공을 맞았어"
  },
  {
    "Time": "26:31",
    "Subtitle": "I mean, it was a mess, blood everywhere, the nurse came out.",
    "Human Translation": "엄청났지, 피가 튀고 간호사도 뛰어나오고"
  },
  {
    "Time": "26:34",
    "Subtitle": "The place was in chaos, his girlfriend was all freaking out",
    "Human Translation": "여자 친구도 소리 지르고 아주 난장판이었는데"
  },
  {
    "Time": "26:37",
    "Subtitle": "and you just sat there and read. You never even looked up.",
    "Human Translation": "여자 친구도 소리 지르고 아주 난장판이었는데 넌 고개도 들지 않고 계속 책을 읽었지"
  },
  {
    "Time": "26:41",
    "Subtitle": "I thought, I have never seen anyone read so intensely",
    "Human Translation": "내 평생 그렇게 열심히 책을 읽는 사람은 처음이었고"
  },
  {
    "Time": "26:44",
    "Subtitle": "before in my entire life. I have to meet that girl.",
    "Human Translation": "내 평생 그렇게 열심히 책을 읽는 사람은 처음이었고 꼭 한번 만나고 싶었어"
  },
  {
    "Time": "26:49",
    "Subtitle": "I just didn't look up because I'm unbelievably self-centered.",
    "Human Translation": "내가 너무나 이기적이라서 고개도 안 들었을지 모르잖아"
  },
  {
    "Time": "26:53",
    "Subtitle": "Maybe, but I doubt it.",
    "Human Translation": "그럴 수도 있겠지만 그건 아닐 거야"
  },
  {
    "Time": "26:59",
    "Subtitle": "- Did I ask if you like cake? - Yeah, you did.",
    "Human Translation": "- 케이크 좋아하냐고 물었었나? - 응, 그랬어"
  },
  {
    "Time": "27:03",
    "Subtitle": "Oh, 'cause they have really good cake back there.",
    "Human Translation": "거기 케이크가 정말 맛있거든"
  },
  {
    "Time": "27:08",
    "Subtitle": "(male #2) 'Goodnight, George.'",
    "Human Translation": "윌리엄즈 철물점"
  },
  {
    "Time": "27:19",
    "Subtitle": "So, you were late getting home tonight.",
    "Human Translation": "오늘은 귀가가 늦네"
  },
  {
    "Time": "27:22",
    "Subtitle": "- Yeah, I went to the library. - Oh.",
    "Human Translation": "응, 도서관에 갔었어"
  },
  {
    "Time": "27:26",
    "Subtitle": "I forgot to tell we're having dinner with your grandparents. tomorrow night.",
    "Human Translation": "내일 밤에 외가집에서 저녁 약속이 있어"
  },
  {
    "Time": "27:30",
    "Subtitle": "- We are? - Mm-hmm.",
    "Human Translation": "정말? 아직 9월이잖아"
  },
  {
    "Time": "27:31",
    "Subtitle": "- But it's September. - So?",
    "Human Translation": "정말? 아직 9월이잖아 - 그래서? - 9월은 무슨 명절이야?"
  },
  {
    "Time": "27:33",
    "Subtitle": "- What holiday's in September? - It's not a holiday thing.",
    "Human Translation": "- 그래서? - 9월은 무슨 명절이야? 명절이라서가 아니라 그냥 저녁만 먹는 거야"
  },
  {
    "Time": "27:36",
    "Subtitle": "- It's just dinner, okay? - Fine, sorry.",
    "Human Translation": "명절이라서가 아니라 그냥 저녁만 먹는 거야 알았어, 미안해"
  },
  {
    "Time": "27:44",
    "Subtitle": "Red meat can kill you. Enjoy.",
    "Human Translation": "붉은 고기는 백해무익이죠 맛있게 드쇼"
  },
  {
    "Time": "27:52",
    "Subtitle": "So, I finished hemming your skirt today.",
    "Human Translation": "네 치마 손질을 끝냈어"
  },
  {
    "Time": "27:58",
    "Subtitle": "A grunt of acknowledgment might be nice.",
    "Human Translation": "대답이라도 하면 좋잖아"
  },
  {
    "Time": "28:00",
    "Subtitle": "I don't understand why we're going to dinner tomorrow night.",
    "Human Translation": "대답이라도 하면 좋잖아 내일 저녁 식사는 왜 가는 거야?"
  },
  {
    "Time": "28:02",
    "Subtitle": "What if I had plans? You didn't even ask me.",
    "Human Translation": "선약이 있으면 어쩌려고 내겐 묻지도 않았어?"
  },
  {
    "Time": "28:05",
    "Subtitle": "If you had plans, I would've known.",
    "Human Translation": "- 그랬다면 내가 알았겠지 - 어떻게?"
  },
  {
    "Time": "28:07",
    "Subtitle": "- How? - You would have told me.",
    "Human Translation": "네가 얘기했을 테니까"
  },
  {
    "Time": "28:08",
    "Subtitle": "I don't tell you everything. I have my own things.",
    "Human Translation": "나라고 다 얘기하진 않아 내 비밀도 있으니까"
  },
  {
    "Time": "28:11",
    "Subtitle": "- Fine, you have things. - That's right. I have things.",
    "Human Translation": "- 그래, 알았어 - 나만의 일도 있다고"
  },
  {
    "Time": "28:13",
    "Subtitle": "Hey, I had dibs on being the bitch tonight.",
    "Human Translation": "- 그래, 알았어 - 나만의 일도 있다고 - 오늘은 내가 구시렁댈 거야 - 오늘만 그러셔?"
  },
  {
    "Time": "28:16",
    "Subtitle": "- Just tonight? - What's wrong with you?",
    "Human Translation": "- 오늘은 내가 구시렁댈 거야 - 오늘만 그러셔? 너 대체 왜 그러니?"
  },
  {
    "Time": "28:22",
    "Subtitle": "I'm not sure I want to go to Chilton.",
    "Human Translation": "칠튼에 가고 싶은지 잘 모르겠어"
  },
  {
    "Time": "28:24",
    "Subtitle": "What?",
    "Human Translation": "- 뭐라고? - 시기가 안 좋아"
  },
  {
    "Time": "28:26",
    "Subtitle": "- The timing is just really bad. - The timing is bad?",
    "Human Translation": "- 뭐라고? - 시기가 안 좋아 시기가 안 좋다고?"
  },
  {
    "Time": "28:30",
    "Subtitle": "Bus ride to and from Hartford, it's like 30 minutes each way.",
    "Human Translation": "또 거기까지 버스를 타면 가는 데만 30분이잖아"
  },
  {
    "Time": "28:33",
    "Subtitle": "I can't believe what I'm hearing.",
    "Human Translation": "또 거기까지 버스를 타면 가는 데만 30분이잖아 그게 무슨 소리야?"
  },
  {
    "Time": "28:35",
    "Subtitle": "Plus, I don't think we should be spending that money right now.",
    "Human Translation": "그게 무슨 소리야? 지금 그렇게 많은 돈을 써야 하는지도 모르겠어"
  },
  {
    "Time": "28:38",
    "Subtitle": "I mean, I know Chilton's got to be costing you a lot.",
    "Human Translation": "칠튼은 학비가 비싸잖아"
  },
  {
    "Time": "28:41",
    "Subtitle": "Oh, you have no idea.",
    "Human Translation": "넌 상상도 못할 거야"
  },
  {
    "Time": "28:43",
    "Subtitle": "Use that money towards buying an inn with Sookie.",
    "Human Translation": "엄마랑 수키의 모텔을 위해 돈을 아껴야 하잖아"
  },
  {
    "Time": "28:45",
    "Subtitle": "What about college? What about Harvard?",
    "Human Translation": "대학은 어쩌고? 하버드가 꿈이잖아?"
  },
  {
    "Time": "28:47",
    "Subtitle": "We dunno that I can't get into Harvard if I stay where I am.",
    "Human Translation": "여기서 다닌다고 꼭 하버드에 못 가는 건 아니잖아"
  },
  {
    "Time": "28:51",
    "Subtitle": "Okay, enough. Enough of the crazy talk, okay?",
    "Human Translation": "쓸데없는 얘기는 그만하자"
  },
  {
    "Time": "28:53",
    "Subtitle": "I appreciate your concern but I have this covered.",
    "Human Translation": "걱정해주는 건 고맙지만 그건 다 해결했어"
  },
  {
    "Time": "28:57",
    "Subtitle": "- I still don't want to go. - Why?",
    "Human Translation": "- 그래도 가기 싫어 - 왜?"
  },
  {
    "Time": "28:59",
    "Subtitle": "- Because I don't. - I have to get out of here.",
    "Human Translation": "- 그냥 싫으니까 - 그만 나가야겠다"
  },
  {
    "Time": "29:06",
    "Subtitle": "We have to pay first.",
    "Human Translation": "먼저 돈을 내야지"
  },
  {
    "Time": "29:33",
    "Subtitle": "One-two-three. One-two-three. One-two-three. It's a waltz, ladies. Susie, do you have to tinkle?",
    "Human Translation": "하나, 둘, 셋, 이건 왈츠란다 수지, 화장실이 급하니?"
  },
  {
    "Time": "29:40",
    "Subtitle": "Then uncross your legs, darling.",
    "Human Translation": "아니면 다리는 꼬지 말아라"
  },
  {
    "Time": "29:42",
    "Subtitle": "Oh, Rory, good. I think I found a job for your male friend.",
    "Human Translation": "로리, 네 남자 친구에게 일을 구해줬단다"
  },
  {
    "Time": "29:46",
    "Subtitle": "What male friend?",
    "Human Translation": "남자 친구?"
  },
  {
    "Time": "29:47",
    "Subtitle": "They need a stock boy at the supermarket.",
    "Human Translation": "수퍼에서 점원을 구했거든"
  },
  {
    "Time": "29:49",
    "Subtitle": "I already talked to Taylor Doose about him.",
    "Human Translation": "테일러에게 이미 말해놨어"
  },
  {
    "Time": "29:51",
    "Subtitle": "You just send him around tomorrow.",
    "Human Translation": "내일 오라고 전해주렴"
  },
  {
    "Time": "29:53",
    "Subtitle": "- Okay, thanks. - What male friend?",
    "Human Translation": "- 네, 고마워요 - 무슨 남자 친구?"
  },
  {
    "Time": "29:56",
    "Subtitle": "Oh, he's very cute. You have good taste.",
    "Human Translation": "잘 생겼더구나 남자 보는 눈이 있어"
  },
  {
    "Time": "30:00",
    "Subtitle": "Hands in the air, not in the nose.",
    "Human Translation": "손은 코가 아니라 위로 뻗으렴"
  },
  {
    "Time": "30:04",
    "Subtitle": "You'll have to walk faster than that.",
    "Human Translation": "더 빨리 걷는 게 좋아"
  },
  {
    "Time": "30:07",
    "Subtitle": "You're gonna have to turn into Flo-Jo to get away from me.",
    "Human Translation": "전력으로 뛰어야 도망칠 수 있을 거야"
  },
  {
    "Time": "30:14",
    "Subtitle": "This is about a boy. Of course, can't believe, I didn't see it.",
    "Human Translation": "당연히 남자 문제겠지! 내가 왜 몰랐을까? 돈 얘기에 버스 얘기까지"
  },
  {
    "Time": "30:18",
    "Subtitle": "All those talk about money and bus rides, you got a thing",
    "Human Translation": "내가 왜 몰랐을까? 돈 얘기에 버스 얘기까지"
  },
  {
    "Time": "30:21",
    "Subtitle": "going with a guy, you don't wanna leave school.",
    "Human Translation": "남자가 생긴 거야 그래서 전학가기 싫은 거지"
  },
  {
    "Time": "30:23",
    "Subtitle": "- I'm going to bed. - God, I'm so dense.",
    "Human Translation": "- 난 잘 거야 - 내가 바보였어"
  },
  {
    "Time": "30:25",
    "Subtitle": "That should've been my first thought. After all, you're me.",
    "Human Translation": "처음부터 알았어야 해 결국 너도 내 핏줄이니까"
  },
  {
    "Time": "30:29",
    "Subtitle": "- I'm not you. - Really?",
    "Human Translation": "- 난 달라 - 정말?"
  },
  {
    "Time": "30:31",
    "Subtitle": "Someone willing to throw important life experiences",
    "Human Translation": "남자 때문에 인생의 중대사를 걷어차 버리는데도?"
  },
  {
    "Time": "30:33",
    "Subtitle": "outta the window to be with a guy. It sounds like me.",
    "Human Translation": "남자 때문에 인생의 중대사를 걷어차 버리는데도? - 내겐 나처럼 들리는데? - 마음대로 해"
  },
  {
    "Time": "30:36",
    "Subtitle": "Whatever.",
    "Human Translation": "- 내겐 나처럼 들리는데? - 마음대로 해"
  },
  {
    "Time": "30:37",
    "Subtitle": "- So, who is he? - There's no guy.",
    "Human Translation": "- 어떤 남자야? - 그런 거 없어"
  },
  {
    "Time": "30:39",
    "Subtitle": "Dark hair, romantic guy, looks a little dangerous.",
    "Human Translation": "검은 머리에 멋진 눈에 위험해 보이겠지?"
  },
  {
    "Time": "30:41",
    "Subtitle": "- This conversation is over. - Tattoos are good too.",
    "Human Translation": "- 얘기는 끝났어 - 물론 문신도 좋겠지"
  },
  {
    "Time": "30:44",
    "Subtitle": "I don't wanna change schools because of the reasons",
    "Human Translation": "전학 가기 싫은 이유는"
  },
  {
    "Time": "30:46",
    "Subtitle": "I've already told you a thousand times.",
    "Human Translation": "전학 가기 싫은 이유는 아까 수천 번도 넘게 말했어"
  },
  {
    "Time": "30:49",
    "Subtitle": "If you don't wanna believe me, that's fine. Goodnight.",
    "Human Translation": "내 말을 믿기 싫으면 마음대로 해, 난 잘 거야"
  },
  {
    "Time": "30:51",
    "Subtitle": "Does he have a motorcycle? 'Cause if you're gonna throw",
    "Human Translation": "오토바이도 있대?"
  },
  {
    "Time": "30:54",
    "Subtitle": "your life away, he better have a motorcycle!",
    "Human Translation": "인생을 내던질 거라면 오토바이 정도는 있어야지!"
  },
  {
    "Time": "31:02",
    "Subtitle": "I think that went well, don't you?",
    "Human Translation": "- 즐거운 대화였지? - 노크는 두고 왔어?"
  },
  {
    "Time": "31:04",
    "Subtitle": "- Thanks for the knock. - Can we just start all over?",
    "Human Translation": "- 즐거운 대화였지? - 노크는 두고 왔어? 처음부터 다시 얘기하자"
  },
  {
    "Time": "31:07",
    "Subtitle": "Tell me about the guy, I promise not to let my head explode, huh?",
    "Human Translation": "그 남자 얘기를 다 해주면 안 미치고 가만있을게"
  },
  {
    "Time": "31:13",
    "Subtitle": "Rory, please talk to me.",
    "Human Translation": "로리, 얘기 좀 해봐"
  },
  {
    "Time": "31:17",
    "Subtitle": "Okay, I'll talk.",
    "Human Translation": "그럼 내가 얘기할게"
  },
  {
    "Time": "31:19",
    "Subtitle": "Don't get me wrong. Guys are great. I am a huge fan of guys.",
    "Human Translation": "오해는 하지 마 남자도 좋아 나도 남자의 열성팬이야"
  },
  {
    "Time": "31:23",
    "Subtitle": "Don't get knocked up at sixteen being indifferent to guys.",
    "Human Translation": "남자에게 관심이 없으면 16살에 임신하지도 않아"
  },
  {
    "Time": "31:27",
    "Subtitle": "Babe, guys are always going to be there.",
    "Human Translation": "남자는 항상 있지만 학교는 그렇지 않아"
  },
  {
    "Time": "31:29",
    "Subtitle": "This school isn't. It's more important.",
    "Human Translation": "남자는 항상 있지만 학교는 그렇지 않아 학교가 더 중요해 더 중요하다고 여겨야 해"
  },
  {
    "Time": "31:31",
    "Subtitle": "It has to be more important.",
    "Human Translation": "학교가 더 중요해 더 중요하다고 여겨야 해"
  },
  {
    "Time": "31:34",
    "Subtitle": "I'm going to sleep.",
    "Human Translation": "난 잘 거야"
  },
  {
    "Time": "31:39",
    "Subtitle": "You've always been the sensible one in this house, huh?",
    "Human Translation": "우리 둘 중에 똑똑한 건 항상 너였잖니"
  },
  {
    "Time": "31:42",
    "Subtitle": "I need you to remember that feeling now.",
    "Human Translation": "그때 느낌을 되살려 봐"
  },
  {
    "Time": "31:44",
    "Subtitle": "You will kick your own butt later if you blow this.",
    "Human Translation": "지금 기회를 놓치면 평생 땅을 치고 후회할 거야"
  },
  {
    "Time": "31:47",
    "Subtitle": "- Well, it's my butt. - Good comeback.",
    "Human Translation": "- 내 땅이야 - 재치있는 대답이네"
  },
  {
    "Time": "31:50",
    "Subtitle": "- Thank you. - You're welcome.",
    "Human Translation": "- 고마워 - 천만에, 일어나 보라니까"
  },
  {
    "Time": "31:51",
    "Subtitle": "- Rory, come on. - I don't wanna talk about this.",
    "Human Translation": "- 고마워 - 천만에, 일어나 보라니까 그 얘기는 하기 싫으니까 제발 혼자 놔둬"
  },
  {
    "Time": "31:54",
    "Subtitle": "Could you please, please just leave me alone?",
    "Human Translation": "그 얘기는 하기 싫으니까 제발 혼자 놔둬"
  },
  {
    "Time": "31:58",
    "Subtitle": "Okay, fine.",
    "Human Translation": "좋아, 알았어"
  },
  {
    "Time": "32:03",
    "Subtitle": "We always had a democracy in this house.",
    "Human Translation": "지금까지 이 집에선 민주주의가 통했지"
  },
  {
    "Time": "32:06",
    "Subtitle": "We never did anything unless we both agreed.",
    "Human Translation": "무슨 일을 하든 우린 항상 서로 상의했어"
  },
  {
    "Time": "32:09",
    "Subtitle": "But now I guess I'm going to have to play the mom card.",
    "Human Translation": "하지만 지금은 내가 엄마 노릇을 해야겠다"
  },
  {
    "Time": "32:13",
    "Subtitle": "You're going to Chilton whether you want to or not.",
    "Human Translation": "네가 원하든 원치 않든 칠튼으로 전학 갈 거야"
  },
  {
    "Time": "32:15",
    "Subtitle": "Monday morning, you will be there, end of story.",
    "Human Translation": "월요일 아침부터 보내겠어 얘기 끝내자"
  },
  {
    "Time": "32:19",
    "Subtitle": "- We'll see. - Yeah, we will.",
    "Human Translation": "- 두고 봐야지 - 그래, 두고 보자"
  },
  {
    "Time": "32:48",
    "Subtitle": "(male #3) 'Okay. One, two.. Oh, jeez.",
    "Human Translation": "좋아, 하나, 둘…"
  },
  {
    "Time": "32:51",
    "Subtitle": "I swear, I don't know, what happened. It's not important.",
    "Human Translation": "- 정말 무슨 일인지 모르겠어 - 그건 중요치 않아"
  },
  {
    "Time": "32:55",
    "Subtitle": "I made that dish a hundred times. It never exploded.",
    "Human Translation": "수백 번을 만들어도 폭발한 적은 없었어"
  },
  {
    "Time": "32:58",
    "Subtitle": "Please, forget it.",
    "Human Translation": "- 그 일은 잊어 - 가스렌지는 내가 죽였어!"
  },
  {
    "Time": "32:59",
    "Subtitle": "Oh, God, I killed a Viking, you should fire me",
    "Human Translation": "- 그 일은 잊어 - 가스렌지는 내가 죽였어! 차라리 날 해고하든지 아니면 새 렌지 값을"
  },
  {
    "Time": "33:03",
    "Subtitle": "or make me pay the cost of a new stove out of my paycheck.",
    "Human Translation": "차라리 날 해고하든지 아니면 새 렌지 값을 - 내 월급에서 빼 - 그것도 좋겠네"
  },
  {
    "Time": "33:06",
    "Subtitle": "- Whatever you want. - Can't afford a new stove!",
    "Human Translation": "- 내 월급에서 빼 - 그것도 좋겠네 내가 어떻게 렌지를 사 엄청나게 비싸단 말이야"
  },
  {
    "Time": "33:08",
    "Subtitle": "- Those things are expensive. - Sookie, please.",
    "Human Translation": "내가 어떻게 렌지를 사 엄청나게 비싸단 말이야 수키, 제발 부탁이니 진정해"
  },
  {
    "Time": "33:10",
    "Subtitle": "I am begging you, pull yourself together, okay?",
    "Human Translation": "수키, 제발 부탁이니 진정해"
  },
  {
    "Time": "33:13",
    "Subtitle": "I got no sleep last night and I put my contacts in backwards.",
    "Human Translation": "어젯밤에 한숨도 못 자고 렌즈도 거꾸로 꼈어"
  },
  {
    "Time": "33:17",
    "Subtitle": "Rory's still mad at you, huh? Hey, I'm not so crazy about her either.",
    "Human Translation": "- 로리가 아직도 화났구나 - 나도 기분 좋지는 않아"
  },
  {
    "Time": "33:21",
    "Subtitle": "It was a fight. Mothers and daughters fight.",
    "Human Translation": "그건 싸움이었어 엄마와 딸의 싸움이라고"
  },
  {
    "Time": "33:23",
    "Subtitle": "No, we don't fight. We never fight.",
    "Human Translation": "우린 원래 안 싸워 절대 싸우지 않는다고"
  },
  {
    "Time": "33:26",
    "Subtitle": "You told me to tell you when your daughter arrived.",
    "Human Translation": "따님이 도착하면 전해달라고 했죠?"
  },
  {
    "Time": "33:28",
    "Subtitle": "She's here and she's sitting in my chair. Hold on just a minute.",
    "Human Translation": "- 지금 내 의자에 앉아있어요 - 잠깐만 기다려요"
  },
  {
    "Time": "33:36",
    "Subtitle": "And you are the one left standing.",
    "Human Translation": "혼자 서있군요"
  },
  {
    "Time": "33:38",
    "Subtitle": "That is a funny, funny thing, no?",
    "Human Translation": "인생이란 참 재미있죠?"
  },
  {
    "Time": "33:43",
    "Subtitle": "Hey, no muumuu today. You know what's weird, I kind of miss it.",
    "Human Translation": "오늘은 원주민이 아니네 이상하게 그 옷이 그립구나"
  },
  {
    "Time": "33:47",
    "Subtitle": "- You left a note to meet here. - Thought you might wanna work.",
    "Human Translation": "메모지에 오라고 써놨잖아 그래, 잠깐 여기서 일하고 용돈 좀 벌라고 불렀지"
  },
  {
    "Time": "33:50",
    "Subtitle": "- Make a little extra cash. - Fine.",
    "Human Translation": "그래, 잠깐 여기서 일하고 용돈 좀 벌라고 불렀지 - 알았어 - 설마 평생…"
  },
  {
    "Time": "33:54",
    "Subtitle": "You're not giving me the \"Mommy Dearest\" treatment ever, are ya?",
    "Human Translation": "날 계모 대하듯 하진 않을 거지?"
  },
  {
    "Time": "33:56",
    "Subtitle": "You wanted me here, I'm here. Should I do something or what?",
    "Human Translation": "오라고 해서 왔잖아 일은 언제 시킬 거야?"
  },
  {
    "Time": "34:00",
    "Subtitle": "Yeah, go home. Dinner's at seven. Be ready to go.",
    "Human Translation": "집에 가, 저녁은 7시니까 그때까지 준비 해"
  },
  {
    "Time": "34:04",
    "Subtitle": "- Fine. - Fine.",
    "Human Translation": "- 알았어 - 그래"
  },
  {
    "Time": "34:09",
    "Subtitle": "Ah, my chair.",
    "Human Translation": "의자를 찾았네"
  },
  {
    "Time": "34:23",
    "Subtitle": "So, do we go in or do we just stand here reenacting 'The Little Match Girl'?",
    "Human Translation": "들어갈 거야? 아니면 성냥팔이 소녀로 남을 거야?"
  },
  {
    "Time": "34:30",
    "Subtitle": "Okay, look, I know you and me are having a thing here",
    "Human Translation": "지금 우리가 냉전 중이고 내가 마음에 안 드는 것도 알아"
  },
  {
    "Time": "34:33",
    "Subtitle": "and I know you hate me but I need you to be civil.",
    "Human Translation": "지금 우리가 냉전 중이고 내가 마음에 안 드는 것도 알아 하지만 이 안에서는 예의를 지키고"
  },
  {
    "Time": "34:37",
    "Subtitle": "At least through dinner, on the way home you can pull Menendez.",
    "Human Translation": "하지만 이 안에서는 예의를 지키고 존속 살인은 집에 가는 길에 해, 알았니?"
  },
  {
    "Time": "34:40",
    "Subtitle": "- Deal? - Fine.",
    "Human Translation": "존속 살인은 집에 가는 길에 해, 알았니? 알았어"
  },
  {
    "Time": "34:50",
    "Subtitle": "- Hi, Grandma. - Well, you're right on time.",
    "Human Translation": "- 안녕하세요, 할머니 - 제시간에 왔구나"
  },
  {
    "Time": "34:52",
    "Subtitle": "Yeah, yeah, no traffic at all.",
    "Human Translation": "네, 차가 안 막혔어요"
  },
  {
    "Time": "34:56",
    "Subtitle": "I can't tell you what a treat it is to have you girls here.",
    "Human Translation": "너희들이 오니 얼마나 기쁜지 모를 거다"
  },
  {
    "Time": "34:59",
    "Subtitle": "Oh, well, we're excited, too.",
    "Human Translation": "우리도 정말 기뻐요"
  },
  {
    "Time": "35:03",
    "Subtitle": "Is that a collector's cup or can I throw it away for you?",
    "Human Translation": "그 컵은 수집하니? 아니면 내가 버려줄까?"
  },
  {
    "Time": "35:06",
    "Subtitle": "- In the kitchen, please. - Sorry.",
    "Human Translation": "- 부엌에 버려라 - 죄송해요"
  },
  {
    "Time": "35:10",
    "Subtitle": "So, I want to hear all about Chilton. Well, I haven't actually started yet.",
    "Human Translation": "- 칠튼 얘기를 다 해주렴 - 아직 시작도 안 했어요"
  },
  {
    "Time": "35:19",
    "Subtitle": "Richard, look who's here.",
    "Human Translation": "- 리처드, 누가 왔는지 봐요 - 로리구나"
  },
  {
    "Time": "35:22",
    "Subtitle": "Rory. You're tall.",
    "Human Translation": "- 리처드, 누가 왔는지 봐요 - 로리구나 - 키가 크구나? - 그런가 보죠"
  },
  {
    "Time": "35:26",
    "Subtitle": "- I guess. - What's your height?",
    "Human Translation": "- 키가 크구나? - 그런가 보죠 - 키가 몇이지? - 170cm이요"
  },
  {
    "Time": "35:28",
    "Subtitle": "- Five-seven. - That's tall. She's tall.",
    "Human Translation": "- 키가 몇이지? - 170cm이요 - 크구나, 로리가 커요 - 안녕하세요, 아빠"
  },
  {
    "Time": "35:32",
    "Subtitle": "- Hi, Dad. - Lorelai, your daughter's tall.",
    "Human Translation": "- 크구나, 로리가 커요 - 안녕하세요, 아빠 - 로렐라이, 네 딸이 크구나 - 알아요, 특이하죠"
  },
  {
    "Time": "35:35",
    "Subtitle": "Oh, I know. It's freakish.",
    "Human Translation": "- 로렐라이, 네 딸이 크구나 - 알아요, 특이하죠"
  },
  {
    "Time": "35:36",
    "Subtitle": "We're thinking of having her studied at M.I.T.",
    "Human Translation": "MIT에 연구용으로 보낼까 생각 중이에요"
  },
  {
    "Time": "35:40",
    "Subtitle": "- Champagne, anyone? - That's fancy.",
    "Human Translation": "- 샴페인 하겠니? - 비싸겠네요"
  },
  {
    "Time": "35:43",
    "Subtitle": "Well, it's not every day that I have my girls",
    "Human Translation": "너희들과 저녁을 함께 하는 건 쉽지 않잖니"
  },
  {
    "Time": "35:45",
    "Subtitle": "here for dinner on a day the banks are open.",
    "Human Translation": "너희들과 저녁을 함께 하는 건 쉽지 않잖니 명절 연휴도 아닌데 말이다"
  },
  {
    "Time": "35:48",
    "Subtitle": "A toast. To Rory entering Chilton",
    "Human Translation": "건배하자 칠튼에 입학한 로리를 위해"
  },
  {
    "Time": "35:52",
    "Subtitle": "and an exciting new phase in her life.",
    "Human Translation": "또 로리 인생의 새 역사를 위하여"
  },
  {
    "Time": "35:54",
    "Subtitle": "Here, here.",
    "Human Translation": "건배"
  },
  {
    "Time": "35:56",
    "Subtitle": "Mmm. Well, let's sit everyone.",
    "Human Translation": "다들 앉자꾸나"
  },
  {
    "Time": "36:02",
    "Subtitle": "This is just wonderful.",
    "Human Translation": "너무나 멋진 일이야"
  },
  {
    "Time": "36:04",
    "Subtitle": "An education is the most important thing, next to family.",
    "Human Translation": "교육은 가족 다음으로 중요한 거란다"
  },
  {
    "Time": "36:08",
    "Subtitle": "And pie.",
    "Human Translation": "파이도 있죠"
  },
  {
    "Time": "36:13",
    "Subtitle": "Joke, joke.",
    "Human Translation": "농담이에요"
  },
  {
    "Time": "36:33",
    "Subtitle": "- Rory, you like the lamb? - It's good.",
    "Human Translation": "- 로리, 양고기가 입에 맞니? - 좋은데요"
  },
  {
    "Time": "36:35",
    "Subtitle": "- Too dry? - No, it's perfect.",
    "Human Translation": "- 너무 바삭하니? - 아뇨, 딱 좋아요"
  },
  {
    "Time": "36:39",
    "Subtitle": "Potatoes could use a little salt, though.",
    "Human Translation": "감자는 약간 싱겁네요"
  },
  {
    "Time": "36:41",
    "Subtitle": "Excuse me?",
    "Human Translation": "감자는 약간 싱겁네요 뭐라고?"
  },
  {
    "Time": "36:43",
    "Subtitle": "So, Grandpa, how's the insurance biz?",
    "Human Translation": "할아버지, 보험 쪽은 요즘 어때요?"
  },
  {
    "Time": "36:46",
    "Subtitle": "Oh, people die, we pay. People crash cars, we pay.",
    "Human Translation": "사람이 죽으면 돈 주고 교통사고 나면 돈 주고"
  },
  {
    "Time": "36:50",
    "Subtitle": "People lose a foot, we pay. Well, at least you have your new slogan.",
    "Human Translation": "- 다리가 잘려도 돈을 주지 - 광고 문구로 써도 좋겠네요"
  },
  {
    "Time": "36:55",
    "Subtitle": "And how are things at the motel? The inn? They're great.",
    "Human Translation": "- 모텔 일은 어때? - 아주 잘 되고 있어요"
  },
  {
    "Time": "36:59",
    "Subtitle": "Lorelai's the executive manager now. Isn't that wonderful?",
    "Human Translation": "로렐라이가 호텔 매니저래요 참 잘됐죠?"
  },
  {
    "Time": "37:02",
    "Subtitle": "Speaking of which, Christopher called yesterday.",
    "Human Translation": "말이 나와서 말인데 어제 크리스토퍼가 전화했다"
  },
  {
    "Time": "37:05",
    "Subtitle": "Speaking of which? How is that a speaking of which?",
    "Human Translation": "말이 나왔다고요? 그게 어떻게 말이 나온 거죠?"
  },
  {
    "Time": "37:08",
    "Subtitle": "He's doing very well in California.",
    "Human Translation": "캘리포니아에서 잘 살고 있다더구나"
  },
  {
    "Time": "37:10",
    "Subtitle": "His Internet start-up goes public next month.",
    "Human Translation": "인터넷 회사가 곧 상장될 거라더군"
  },
  {
    "Time": "37:12",
    "Subtitle": "This could mean big things. Very talented man, your father.",
    "Human Translation": "아마 크게 성공할 거야 네 아버지는 참 유능하단다"
  },
  {
    "Time": "37:15",
    "Subtitle": "She knows.",
    "Human Translation": "아마 크게 성공할 거야 네 아버지는 참 유능하단다 - 얘도 알아요 - 항상 똑똑한 녀석이었지"
  },
  {
    "Time": "37:16",
    "Subtitle": "He always was a smart one, that boy. You must take after him.",
    "Human Translation": "- 얘도 알아요 - 항상 똑똑한 녀석이었지 너도 아빠를 닮은 게야"
  },
  {
    "Time": "37:20",
    "Subtitle": "Speaking of which, I'm gonna get a coke. Or a knife.",
    "Human Translation": "너도 아빠를 닮은 게야 말이 나와서 말인데 콜라 가져올게요, 아님 칼이나"
  },
  {
    "Time": "37:44",
    "Subtitle": "Hi, how are you doing?",
    "Human Translation": "안녕하세요?"
  },
  {
    "Time": "37:51",
    "Subtitle": "- I think I'm gonna go talk-- - No, I'll go.",
    "Human Translation": "- 엄마한테 가볼게요 - 아니, 내가 가마"
  },
  {
    "Time": "37:54",
    "Subtitle": "You stay and keep your grandfather company.",
    "Human Translation": "넌 여기서 할아버지 말 상대나 해 드리렴"
  },
  {
    "Time": "38:01",
    "Subtitle": "Lorelai, come back to the table.",
    "Human Translation": "로렐라이, 빨리 식탁으로 와"
  },
  {
    "Time": "38:03",
    "Subtitle": "Is this what it's gonna be like every Friday night?",
    "Human Translation": "이제 금요일마다 이런 식이 되겠죠?"
  },
  {
    "Time": "38:05",
    "Subtitle": "I come over and let you attack me?",
    "Human Translation": "제가 올 때마다 두 분이 절 공격하겠죠?"
  },
  {
    "Time": "38:07",
    "Subtitle": "You're being very dramatic.",
    "Human Translation": "- 과잉반응이야 - 뭐라고요?"
  },
  {
    "Time": "38:09",
    "Subtitle": "Dramatic? Were you at that table just now?",
    "Human Translation": "- 아까 못 봤어요? - 그래, 봤다"
  },
  {
    "Time": "38:11",
    "Subtitle": "Yes, I was, and you took what your father said the wrong way.",
    "Human Translation": "- 아까 못 봤어요? - 그래, 봤다 넌 아버지 말을 잘못 받아들인 거야"
  },
  {
    "Time": "38:15",
    "Subtitle": "The wrong way? How could I've? What was open to interpretation?",
    "Human Translation": "잘못 받아들여요? 그걸 어떻게 잘못 받아들여요? - 다른 해석이 뭐가 있죠? - 목소리를 낮춰라"
  },
  {
    "Time": "38:19",
    "Subtitle": "- 'Keep your voice down.' - 'No. I can't take it anymore''",
    "Human Translation": "- 다른 해석이 뭐가 있죠? - 목소리를 낮춰라 싫어요, 더 이상 못 참아요 악몽 같은 밤이잖아요"
  },
  {
    "Time": "38:22",
    "Subtitle": "(Lorelai) 'Tonight just seems like a nightmare.'",
    "Human Translation": "싫어요, 더 이상 못 참아요 악몽 같은 밤이잖아요"
  },
  {
    "Time": "38:23",
    "Subtitle": "(Emily) 'You're dripping all over the floor.'",
    "Human Translation": "바닥에 물 다 떨어진다"
  },
  {
    "Time": "38:26",
    "Subtitle": "Why do you pounce on every single thing I say?",
    "Human Translation": "왜 제가 말할 때마다 못 잡아먹어 안달이죠?"
  },
  {
    "Time": "38:28",
    "Subtitle": "That's absurd. You barely uttered a word all night.",
    "Human Translation": "말도 안 돼 넌 오늘 거의 말도 안 했잖니"
  },
  {
    "Time": "38:31",
    "Subtitle": "- 'That's not true.' - You said pie.",
    "Human Translation": "- 아니에요 - '파이' 라고는 했지"
  },
  {
    "Time": "38:33",
    "Subtitle": "- Oh, come on. - You did. All you said was pie.",
    "Human Translation": "- 그만해요 - 내가 들은 건 그것뿐이야"
  },
  {
    "Time": "38:35",
    "Subtitle": "Why would he bring him up? Was that really necessary?",
    "Human Translation": "왜 크리스토퍼 얘기를 꺼내죠? 꼭 그래야 했나요?"
  },
  {
    "Time": "38:38",
    "Subtitle": "He likes Christopher.",
    "Human Translation": "- 아빠가 좋아하시잖니 - 참 신기하네요"
  },
  {
    "Time": "38:40",
    "Subtitle": "Isn't that interesting? Because, as I remember, when Christopher",
    "Human Translation": "- 아빠가 좋아하시잖니 - 참 신기하네요 제 기억에 크리스토퍼가 절 임신시켰을 땐"
  },
  {
    "Time": "38:42",
    "Subtitle": "got me pregnant, Dad didn't like him so much.",
    "Human Translation": "제 기억에 크리스토퍼가 절 임신시켰을 땐 별로 안 좋아하시던데요"
  },
  {
    "Time": "38:44",
    "Subtitle": "Oh, please, you were sixteen. What were we supposed to do?",
    "Human Translation": "넌 16살이었잖아 파티라도 해주길 바랐니?"
  },
  {
    "Time": "38:47",
    "Subtitle": "Throw you a party? We were disappointed.",
    "Human Translation": "넌 16살이었잖아 파티라도 해주길 바랐니? 우린 실망이 컸어 너희 둘은 미래가 밝았잖아"
  },
  {
    "Time": "38:51",
    "Subtitle": "The two of you had such bright futures.",
    "Human Translation": "우린 실망이 컸어 너희 둘은 미래가 밝았잖아"
  },
  {
    "Time": "38:53",
    "Subtitle": "By not getting married we got to keep those bright futures.",
    "Human Translation": "맞아요, 결혼을 안 했기에 그 밝은 미래를 간직했죠"
  },
  {
    "Time": "38:57",
    "Subtitle": "When you get pregnant, you get married. A child needs a mother and a father.",
    "Human Translation": "임신을 하면 결혼을 해야지 아이에겐 부모가 필요해"
  },
  {
    "Time": "39:02",
    "Subtitle": "Mom, do you think that Christopher would have",
    "Human Translation": "우리가 결혼을 했다면 크리스토퍼가 회사를 차렸을까요?"
  },
  {
    "Time": "39:04",
    "Subtitle": "his own company right now if we'd gotten married?",
    "Human Translation": "우리가 결혼을 했다면 크리스토퍼가 회사를 차렸을까요? 그 사람이 크게 됐을 것 같아요?"
  },
  {
    "Time": "39:06",
    "Subtitle": "Do you think he would be anything?",
    "Human Translation": "그 사람이 크게 됐을 것 같아요?"
  },
  {
    "Time": "39:08",
    "Subtitle": "Yes, I do. Your father would have put him in the insurance",
    "Human Translation": "그랬겠지 네 아버지가 크리스토퍼에게 보험회사에 자리를 주고 너도 행복하게 살았을 거야"
  },
  {
    "Time": "39:11",
    "Subtitle": "business and you'd be living a lovely life right now.",
    "Human Translation": "보험회사에 자리를 주고 너도 행복하게 살았을 거야 그 사람은 보험을 싫어했어요"
  },
  {
    "Time": "39:14",
    "Subtitle": "He didn't like the insurance business",
    "Human Translation": "그 사람은 보험을 싫어했어요"
  },
  {
    "Time": "39:15",
    "Subtitle": "and I am living a lovely life right now.",
    "Human Translation": "또 전 지금도 행복해요"
  },
  {
    "Time": "39:18",
    "Subtitle": "- Right, far away from us. - Oh, here we go.",
    "Human Translation": "- 맞아, 우리를 떠나서 - 또 시작이군요"
  },
  {
    "Time": "39:21",
    "Subtitle": "You took that girl, completely shut us out of your life.",
    "Human Translation": "로리를 데려가서는 우리를 막아 버렸잖니"
  },
  {
    "Time": "39:24",
    "Subtitle": "- You wanted to control me. - You were still a child.",
    "Human Translation": "- 엄만 절 조종하려고 했어요 - 넌 아직 어린애였어"
  },
  {
    "Time": "39:27",
    "Subtitle": "I stopped being a child the minute the strip turned pink.",
    "Human Translation": "임신 사실을 안 순간부터 난 아이가 아니었어요"
  },
  {
    "Time": "39:30",
    "Subtitle": "I had to figure out how to live. I found a good job.",
    "Human Translation": "사는 법도 터득하고 일자리도 구했죠"
  },
  {
    "Time": "39:34",
    "Subtitle": "As a maid. With all your brains and talent.",
    "Human Translation": "청소부였지 그 머리와 재능을 두고…"
  },
  {
    "Time": "39:36",
    "Subtitle": "I worked my way up. I run the place now.",
    "Human Translation": "전 제 길을 갔어요 이젠 제가 매니저잖아요"
  },
  {
    "Time": "39:39",
    "Subtitle": "I built a life on my own with no help from anyone.",
    "Human Translation": "누구의 도움도 받지 않고 제 인생을 개척했어요"
  },
  {
    "Time": "39:42",
    "Subtitle": "Yes, and think where you'd be if you'd accepted a little help.",
    "Human Translation": "그래, 약간의 도움만 있었다면 더 성공할 수 있었을 테지"
  },
  {
    "Time": "39:46",
    "Subtitle": "And where Rory would have been.",
    "Human Translation": "로리도 지금쯤 달랐겠지"
  },
  {
    "Time": "39:48",
    "Subtitle": "But no, always too proud to accept anything from anyone.",
    "Human Translation": "하지만 넌 네 자존심에 누구의 도움도 다 거절했어"
  },
  {
    "Time": "39:52",
    "Subtitle": "Well, I wasn't too proud to come here to you two begging",
    "Human Translation": "그렇게 자존심이 강했다면 여기까지 찾아와서"
  },
  {
    "Time": "39:56",
    "Subtitle": "for money for my kid's school, was I?",
    "Human Translation": "딸애 등록금을 달라고 빌지도 않았겠죠!"
  },
  {
    "Time": "39:58",
    "Subtitle": "'No, you certainly weren't. But you're proud to tell her'",
    "Human Translation": "그 정도는 아니었지! 하지만 자존심 때문에 딸에겐 말도 못하잖니?"
  },
  {
    "Time": "40:00",
    "Subtitle": "'where you got it from, aren't you?'",
    "Human Translation": "하지만 자존심 때문에 딸에겐 말도 못하잖니?"
  },
  {
    "Time": "40:02",
    "Subtitle": "Well, fine. You have your precious pride and I have my weekly dinners.",
    "Human Translation": "넌 자존심을 지키며 살고 난 저녁 약속만 있으면 돼"
  },
  {
    "Time": "40:08",
    "Subtitle": "Isn't that nice? We both win.",
    "Human Translation": "잘 됐잖니? 둘 다 이기는 거야"
  },
  {
    "Time": "40:30",
    "Subtitle": "- Mom? - I'm okay. I just..",
    "Human Translation": "엄마? 난 괜찮아, 단지…"
  },
  {
    "Time": "40:34",
    "Subtitle": "Do I look shorter? 'Cause I feel shorter.",
    "Human Translation": "내가 작아 보이니? 작아진 느낌이야"
  },
  {
    "Time": "40:38",
    "Subtitle": "Hey, how about I buy you a cup of coffee?",
    "Human Translation": "내가 커피 한잔 살게"
  },
  {
    "Time": "40:45",
    "Subtitle": "You drive, though, okay, 'cause.. I don't think my feet will reach the pedals.",
    "Human Translation": "운전은 네가 하렴 발이 페달에 안 닿을 것 같아"
  },
  {
    "Time": "40:51",
    "Subtitle": "So, nice dinner at the grandparents' house. Oh, yeah, her dishes have never been cleaner.",
    "Human Translation": "- 즐거운 저녁이었네 - 그래, 그릇이 참 깨끗했어"
  },
  {
    "Time": "40:56",
    "Subtitle": "You and Grandma seemed to have a nice talk.",
    "Human Translation": "엄마랑 할머니랑 즐거운 대화를 나눴잖아"
  },
  {
    "Time": "40:59",
    "Subtitle": "- How much did you hear? - Not much. You know, snippets.",
    "Human Translation": "- 얼마나 들었어? - 별로"
  },
  {
    "Time": "41:01",
    "Subtitle": "- Snippets? - Little snippets.",
    "Human Translation": "- 조금만 - 조금? - 아주 조금만 - 다 들었다는 뜻이네?"
  },
  {
    "Time": "41:03",
    "Subtitle": "- So basically everything? - Basically, yes.",
    "Human Translation": "- 아주 조금만 - 다 들었다는 뜻이네? - 그런 셈이지 - 계획 성공이네"
  },
  {
    "Time": "41:05",
    "Subtitle": "Well, the best laid plans.",
    "Human Translation": "- 그런 셈이지 - 계획 성공이네"
  },
  {
    "Time": "41:12",
    "Subtitle": "I think it was really brave of you to ask them for money.",
    "Human Translation": "엄마가 외가에 손을 벌린 건 용감했던 것 같아"
  },
  {
    "Time": "41:15",
    "Subtitle": "Oh, I so do not want to talk about it.",
    "Human Translation": "그 얘긴 하기 싫구나"
  },
  {
    "Time": "41:19",
    "Subtitle": "So, how many meals is it gonna take till we're off the hook?",
    "Human Translation": "빚을 다 갚으려면 저녁을 얼마나 먹어야 해?"
  },
  {
    "Time": "41:22",
    "Subtitle": "I think the deli spread at my funeral will be the last one.",
    "Human Translation": "내 장례식에서의 식사가 마지막이 될 거야"
  },
  {
    "Time": "41:30",
    "Subtitle": "Wait, does that mean..",
    "Human Translation": "잠깐, 그럼 너…"
  },
  {
    "Time": "41:32",
    "Subtitle": "Can't let a perfectly good plaid skirt go to waste.",
    "Human Translation": "완벽한 체크무늬 치마를 버릴 수는 없잖아"
  },
  {
    "Time": "41:35",
    "Subtitle": "Aww, honey, you won't be sorry.",
    "Human Translation": "후회하지 않을 거야"
  },
  {
    "Time": "41:41",
    "Subtitle": "Wow! You-you look nice. Really nice.",
    "Human Translation": "멋있네요 정말 멋있어요"
  },
  {
    "Time": "41:46",
    "Subtitle": "I...had a meeting earlier at the bank. They-they like collars.",
    "Human Translation": "은행에 약속이 있었어요 거긴 정장을 좋아하잖아요"
  },
  {
    "Time": "41:52",
    "Subtitle": "You look nice, too.",
    "Human Translation": "당신도 예뻐요"
  },
  {
    "Time": "41:55",
    "Subtitle": "I had a flagellation to go to.",
    "Human Translation": "고문 약속이 있었거든요"
  },
  {
    "Time": "41:58",
    "Subtitle": "- So, what will you have? - Coffee, in a vat.",
    "Human Translation": "- 주문은? - 커피 한 드럼통"
  },
  {
    "Time": "42:03",
    "Subtitle": "I'll have coffee also. And chili fries.",
    "Human Translation": "저도 커피요 칠리프라이도요"
  },
  {
    "Time": "42:06",
    "Subtitle": "That's quite a refined palate you got there.",
    "Human Translation": "입맛이 세련됐구나"
  },
  {
    "Time": "42:13",
    "Subtitle": "Behold the healing powers of a bath.",
    "Human Translation": "목욕의 힘을 보라"
  },
  {
    "Time": "42:18",
    "Subtitle": "So, tell me about the guy.",
    "Human Translation": "이제 남자 얘기를 해봐"
  },
  {
    "Time": "42:20",
    "Subtitle": "You know what's really special about our relationship?",
    "Human Translation": "우리 사이에 특별한 점이 뭔지 알아?"
  },
  {
    "Time": "42:24",
    "Subtitle": "The total understanding about the need for one's privacy.",
    "Human Translation": "서로의 사생활을 완벽하게 이해한다는 거야"
  },
  {
    "Time": "42:26",
    "Subtitle": "I mean, you really understand boundaries.",
    "Human Translation": "엄마는 선을 잘 지키잖아"
  },
  {
    "Time": "42:29",
    "Subtitle": "- So tell me about the guy. - Mom!",
    "Human Translation": "- 이제 남자 얘기를 해봐 - 엄마!"
  },
  {
    "Time": "42:31",
    "Subtitle": "- Is he dreamy? - That's so 'Nick at Night'.",
    "Human Translation": "- 환상적인 남자야? - 애들 프로 같네"
  },
  {
    "Time": "42:34",
    "Subtitle": "- I'm gonna find out anyway. - Really? How?",
    "Human Translation": "- 어떻게든 알아낼 거야 - 정말? 어떻게"
  },
  {
    "Time": "42:37",
    "Subtitle": "Uh, I'll spy.",
    "Human Translation": "미행하지"
  },
  {
    "Time": "42:39",
    "Subtitle": "Coffee.",
    "Human Translation": "커피"
  },
  {
    "Time": "42:42",
    "Subtitle": "Fries.",
    "Human Translation": "프라이"
  },
  {
    "Time": "42:45",
    "Subtitle": "I can't stand it. This is so unhealthy. 'Please, put down that cup of coffee.'",
    "Human Translation": "안 되겠어, 몸에 너무 안 좋아 로리, 커피를 내려놔라"
  },
  {
    "Time": "42:49",
    "Subtitle": "You do not wanna grow up to be like your mom.",
    "Human Translation": "네 엄마처럼 되면 안 된다"
  },
  {
    "Time": "42:51",
    "Subtitle": "Sorry, too late.",
    "Human Translation": "죄송하지만 늦었네요"
  },
  {
    "Time": "43:00",
    "Subtitle": "So tell me about the guy. Check, please.",
    "Human Translation": "- 그 남자 얘기를 해봐 - 여기 계산서 주세요"
  },
  {
    "Time": "43:04",
    "Subtitle": "Are you embarrassed to bring him home?",
    "Human Translation": "- 집에 데려오긴 부끄럽니? - 부끄러운 거 없어"
  },
  {
    "Time": "43:06",
    "Subtitle": "- I'm not embarrassed. - Does he talk at all?",
    "Human Translation": "- 집에 데려오긴 부끄럽니? - 부끄러운 거 없어 - 말은 잘 하니? - 아니, 우린 마임으로 통해"
  },
  {
    "Time": "43:08",
    "Subtitle": "No, mom, he's a mime.",
    "Human Translation": "- 말은 잘 하니? - 아니, 우린 마임으로 통해"
  }
];

const EP2_DATA = [
  {
    "Time": "2s",
    "Subtitle": "THAT'S NICE. THANK YOU.",
    "Human Translation": "‎- 잘 마시네 ‎- 고마워"
  },
  {
    "Time": "4s",
    "Subtitle": "DON'T MOVE, PLEASE.",
    "Human Translation": "‎움직이지 마"
  },
  {
    "Time": "6s",
    "Subtitle": "SO, WHY ARE YOU INSISTING ON DOING THIS?",
    "Human Translation": "‎이걸 왜 하자는 건데?"
  },
  {
    "Time": "8s",
    "Subtitle": "WELL, BECAUSE YOU'RE STARTING PRIVATE SCHOOL TOMORROW.",
    "Human Translation": "‎이걸 왜 하자는 건데? ‎내일부터 사립학교에 가니까"
  },
  {
    "Time": "12s",
    "Subtitle": "YES, BUT I'M GOING TO BE WEARING SHOES.",
    "Human Translation": "‎내일부터 사립학교에 가니까 ‎하지만 신발을 신으면 ‎발은 아무도 못 보잖아"
  },
  {
    "Time": "14s",
    "Subtitle": "NOBODY'S GONNA SEE MY FEET.",
    "Human Translation": "‎하지만 신발을 신으면 ‎발은 아무도 못 보잖아"
  },
  {
    "Time": "16s",
    "Subtitle": "OKAY, BUT EVERYBODY KNOWS THAT PRIVATE-SCHOOL GIRLS ARE BAD.",
    "Human Translation": "‎사립학교 학생들은 ‎날라리로 유명하잖아"
  },
  {
    "Time": "19s",
    "Subtitle": "AND BAD GIRLS ALWAYS WEAR RED NAIL POLISH.",
    "Human Translation": "‎날라리라면 발톱에 ‎빨간색은 기본이지"
  },
  {
    "Time": "25s",
    "Subtitle": "ARE YOU NERVOUS?",
    "Human Translation": "‎긴장되니?"
  },
  {
    "Time": "26s",
    "Subtitle": "ABOUT WHAT? ABOUT STARTING CHILTON.",
    "Human Translation": "‎- 뭐가? ‎- 칠튼에 가는 거"
  },
  {
    "Time": "29s",
    "Subtitle": "WELL, I WASN'T UNTIL I HEARD ABOUT ALL THOSE BAD GIRLS.",
    "Human Translation": "‎날라리 얘기를 ‎듣기 전까지는 괜찮았어 ‎XTC의 '애플 비너스' ‎2집이 나왔어요!"
  },
  {
    "Time": "34s",
    "Subtitle": "GUYS, XTC -- \"APPLE VENUS VOLUME 2\"!",
    "Human Translation": "‎XTC의 '애플 비너스' ‎2집이 나왔어요!"
  },
  {
    "Time": "36s",
    "Subtitle": "BUT YOU ONLY FINISHED HALF MY TOES!",
    "Human Translation": "‎- 나도 들을래! ‎- 발톱이 반이나 남았잖아"
  },
  {
    "Time": "38s",
    "Subtitle": "Lorelai: WHO CARES?! YOU'RE GONNA BE WEARING SHOES ANYWAY!",
    "Human Translation": "‎- 나도 들을래! ‎- 발톱이 반이나 남았잖아 ‎누가 신경이나 쓰니? ‎어차피 신발 신을 거잖아!"
  },
  {
    "Time": "53s",
    "Subtitle": "♪ IF YOU'RE OUT ON THE ROAD ♪",
    "Human Translation": "‎길모어 걸스"
  },
  {
    "Time": "1:02",
    "Subtitle": "♪ ALL YOU HAVE TO DO IS CALL MY NAME ♪ ♪ AND I'LL BE THERE ON THE NEXT TRAIN ♪",
    "Human Translation": "‎로렌 그래험"
  },
  {
    "Time": "1:10",
    "Subtitle": "♪ WHERE YOU LEAD, I WILL FOLLOW ♪",
    "Human Translation": "‎알렉시스 블레델"
  },
  {
    "Time": "1:19",
    "Subtitle": "♪ IF YOU NEED IF YOU NEED ♪",
    "Human Translation": "‎멜리사 맥카티"
  },
  {
    "Time": "1:21",
    "Subtitle": "♪ YOU NEED ME TO BE WITH YOU ♪",
    "Human Translation": "‎케이코 아제나"
  },
  {
    "Time": "1:23",
    "Subtitle": "♪ I WILL FOLLOW ♪",
    "Human Translation": "‎야닉 트루스데일"
  },
  {
    "Time": "1:26",
    "Subtitle": "♪ OH, OH, OH ♪",
    "Human Translation": "‎스캇 패터슨"
  },
  {
    "Time": "1:28",
    "Subtitle": "♪ WHERE YOU LEAD, I WILL FOLLOW ♪",
    "Human Translation": "‎켈리 비숍 ‎에드워드 허먼"
  },
  {
    "Time": "1:33",
    "Subtitle": "♪ ANYWHERE THAT YOU TELL ME TO ♪",
    "Human Translation": "‎에드워드 허먼 ‎칠튼에서 보낸 로렐라이의 첫날"
  },
  {
    "Time": "1:54",
    "Subtitle": "[ GASPS ] WHAT? GOD. HI.",
    "Human Translation": "‎엄마! ‎아침부터 왜 그래?"
  },
  {
    "Time": "1:57",
    "Subtitle": "WHAT ARE YOU DOING?! HAVING A HEART ATTACK.",
    "Human Translation": "‎- 뭐하는 거야? ‎- 심장이 멎는 중이야"
  },
  {
    "Time": "2:00",
    "Subtitle": "I THOUGHT YOU WERE UP! IT'S 7:10!",
    "Human Translation": "‎일어난 줄 알았잖아 ‎지금 7시 10분이야"
  },
  {
    "Time": "2:02",
    "Subtitle": "WHAT? IT'S 7:10!",
    "Human Translation": "‎- 뭐? ‎- 7시 10분 ‎아니야"
  },
  {
    "Time": "2:06",
    "Subtitle": "STOP IT. IT'S A QUARTER TO 6:00.",
    "Human Translation": "‎그만해, 아직 5시 45분이야"
  },
  {
    "Time": "2:08",
    "Subtitle": "NO, IT'S NOT! YES, IT IS.",
    "Human Translation": "‎- 아니라니까! ‎- 맞아"
  },
  {
    "Time": "2:10",
    "Subtitle": "I SET THE CLOCK FOR A QUARTER TO 6:00, SO IT'S --",
    "Human Translation": "‎자명종을 5시 45분에 ‎맞춰 놨으니까 당연히…"
  },
  {
    "Time": "2:13",
    "Subtitle": "IT'S 7:10!",
    "Human Translation": "‎7시 10분이잖아"
  },
  {
    "Time": "2:16",
    "Subtitle": "I CAN'T BE LATE ON MY FIRST DAY OF SCHOOL!",
    "Human Translation": "‎등교 첫날부터 늦을 순 없어"
  },
  {
    "Time": "2:17",
    "Subtitle": "DO YOU KNOW WHAT HAPPENS TO PEOPLE WHEN THEY'RE LATE ON THEIR FIRST DAY?",
    "Human Translation": "‎첫날부터 늦은 애들은 ‎어떻게 되는지 알아?"
  },
  {
    "Time": "2:20",
    "Subtitle": "IT'S SHORTER?",
    "Human Translation": "‎하루가 짧아지나?"
  },
  {
    "Time": "2:21",
    "Subtitle": "THEY'RE LABELED \"THE LATE GIRL.\"",
    "Human Translation": "‎일 년 내내 '지각생' 으로 불려"
  },
  {
    "Time": "2:24",
    "Subtitle": "OHH! SO DRAMATIC.",
    "Human Translation": "‎일 년 내내 '지각생' 으로 불려 ‎오버하지 마 ‎화장실이 어디지?"
  },
  {
    "Time": "2:25",
    "Subtitle": "WHERE'S THE BATHROOM?",
    "Human Translation": "‎오버하지 마 ‎화장실이 어디지?"
  },
  {
    "Time": "2:27",
    "Subtitle": "WE HAVE TO GO! WHAT IF THERE'S TRAFFIC?!",
    "Human Translation": "‎빨리 가야해! ‎길이 막히면 어떡해?"
  },
  {
    "Time": "2:31",
    "Subtitle": "I HAD THIS ALL PLANNED.",
    "Human Translation": "‎계획을 다 세워놨었어 ‎아침에 일찍 일어나서"
  },
  {
    "Time": "2:34",
    "Subtitle": "I WAS GONNA GET UP EARLY. I WAS GONNA GET COFFEE.",
    "Human Translation": "‎계획을 다 세워놨었어 ‎아침에 일찍 일어나서 ‎커피를 마시고 샤워를 하고"
  },
  {
    "Time": "2:37",
    "Subtitle": "I WAS GONNA TAKE A SHOWER.",
    "Human Translation": "‎커피를 마시고 샤워를 하고"
  },
  {
    "Time": "2:39",
    "Subtitle": "I WAS GONNA PICK UP MY CLOTHES FROM THE DRY CLEANERS.",
    "Human Translation": "‎세탁소에서 옷을 ‎찾아오려고 했었다고 ‎감독: 알린 샌포드"
  },
  {
    "Time": "2:43",
    "Subtitle": "OH, MY GOD. MY CLOTHES. WHAT?!",
    "Human Translation": "‎- 세상에, 내 옷! ‎- 왜?"
  },
  {
    "Time": "2:47",
    "Subtitle": "I-I DON'T HAVE ANY CLEAN CLOTHES.",
    "Human Translation": "‎- 깨끗한 옷이 없어 ‎- 7시 15분이야"
  },
  {
    "Time": "2:50",
    "Subtitle": "IT'S 7:15. ALL MY NICE THINGS WERE DIRTY.",
    "Human Translation": "‎- 괜찮은 옷은 다 더러워 ‎- 7시 16분"
  },
  {
    "Time": "2:52",
    "Subtitle": "IT'S 7:16.",
    "Human Translation": "‎- 괜찮은 옷은 다 더러워 ‎- 7시 16분 ‎파란 셔츠와 통이 넓은 ‎치마를 입으려고 했어"
  },
  {
    "Time": "2:54",
    "Subtitle": "I WAS GONNA WEAR MY BLUE SUIT WITH THE FLIPPY SKIRT.",
    "Human Translation": "‎파란 셔츠와 통이 넓은 ‎치마를 입으려고 했어"
  },
  {
    "Time": "2:56",
    "Subtitle": "I LOOK SO GREAT IN THE FLIPPY SKIRT. IT'S 7:17.",
    "Human Translation": "‎- 그 치마가 잘 어울리잖아 ‎- 7시 17분이야"
  },
  {
    "Time": "2:58",
    "Subtitle": "YOU KNOW WHAT, TIME LADY?",
    "Human Translation": "‎그만 좀 해, 시계 양"
  },
  {
    "Time": "3:00",
    "Subtitle": "WHY DON'T YOU GO DOWNSTAIRS AND WARM UP THE CAR? THAT WOULD BE REALLY SUPER. THANK YOU.",
    "Human Translation": "‎차에 시동이라도 걸어 두면 ‎정말 고맙겠어"
  },
  {
    "Time": "3:04",
    "Subtitle": "JUST HURRY!",
    "Human Translation": "‎서둘러!"
  },
  {
    "Time": "3:06",
    "Subtitle": "THIS SUCKS! THIS SUCKS!",
    "Human Translation": "‎아침부터 이게 뭐야!"
  },
  {
    "Time": "3:07",
    "Subtitle": "IT'S 7:18. OH, FOR THE LOVE OF GOD!!",
    "Human Translation": "‎- 7시 18분 ‎- 제발 좀 그만해!"
  },
  {
    "Time": "3:10",
    "Subtitle": "[ SIGHS ] THIS IS THE LAST TIME I BUY ANYTHING JUST BECAUSE IT'S FURRY.",
    "Human Translation": "‎털 때문에 예쁘다고 사는 건 ‎이제 마지막이야!"
  },
  {
    "Time": "3:16",
    "Subtitle": "IT'S 7--",
    "Human Translation": "‎7시…"
  },
  {
    "Time": "3:18",
    "Subtitle": "DON'T EVEN THINK OF FINISHING THAT SENTENCE. [ SIGHS ] WHAT?!",
    "Human Translation": "‎거기까지만 해!"
  },
  {
    "Time": "3:22",
    "Subtitle": "NOTHING. I JUST DIDN'T KNOW THE RODEO WAS IN TOWN.",
    "Human Translation": "‎왜? ‎아니, 로데오 축제가 ‎지금인지 몰랐거든"
  },
  {
    "Time": "3:24",
    "Subtitle": "ALL RIGHT, THAT'S IT.",
    "Human Translation": "‎아니, 로데오 축제가 ‎지금인지 몰랐거든 ‎됐어, 네 어릴 적 사진도 ‎가져갈 거야"
  },
  {
    "Time": "3:25",
    "Subtitle": "I'M BRINGING THE BABY PICTURES.",
    "Human Translation": "‎됐어, 네 어릴 적 사진도 ‎가져갈 거야"
  },
  {
    "Time": "3:27",
    "Subtitle": "NO! I'M SORRY. I LOVE THE RODEO. THE RODEO RULES.",
    "Human Translation": "‎안돼! 죄송해요 ‎로데오가 제일 멋있어요"
  },
  {
    "Time": "3:41",
    "Subtitle": "♪ THAT I DON'T WANT TO DO ♪",
    "Human Translation": "‎스타즈 할로우"
  },
  {
    "Time": "4:04",
    "Subtitle": "♪ TO SAY GOODBYE TO YOU ♪",
    "Human Translation": "‎하트포드"
  },
  {
    "Time": "4:14",
    "Subtitle": "I REMEMBER IT BEING SMALLER. YEAH. AND LESS...",
    "Human Translation": "‎- 더 작았던 것 같은데 ‎- 맞아, 게다가…"
  },
  {
    "Time": "4:18",
    "Subtitle": "...OFF WITH THEIR HEADS. YEAH.",
    "Human Translation": "‎- 덜 무서웠지 ‎- 맞아"
  },
  {
    "Time": "4:24",
    "Subtitle": "WHAT ARE YOU LOOKING AT?",
    "Human Translation": "‎뭐 보는 거야?"
  },
  {
    "Time": "4:25",
    "Subtitle": "I'M JUST TRYING TO SEE",
    "Human Translation": "‎뭐 보는 거야? ‎종탑에 꼽추가 있나 해서"
  },
  {
    "Time": "4:26",
    "Subtitle": "IF THERE'S A HUNCHBACK UP IN THAT BELL TOWER.",
    "Human Translation": "‎종탑에 꼽추가 있나 해서"
  },
  {
    "Time": "4:29",
    "Subtitle": "SO, HOW DO I LOOK?",
    "Human Translation": "‎나 어때?"
  },
  {
    "Time": "4:33",
    "Subtitle": "YOU LOOK GREAT.",
    "Human Translation": "‎아주 예뻐"
  },
  {
    "Time": "4:35",
    "Subtitle": "REALLY?",
    "Human Translation": "‎- 정말? ‎- 그래"
  },
  {
    "Time": "4:37",
    "Subtitle": "YOU ARE AN AMAZING KID. YOU HAVE EARNED THIS.",
    "Human Translation": "‎넌 정말 멋진 아이야 ‎이 학교에 다닐 자격이 있어"
  },
  {
    "Time": "4:40",
    "Subtitle": "YOU JUST GO IN THERE AND SHOW THEM WHAT SMART REALLY IS.",
    "Human Translation": "‎어서 들어가서 ‎똑똑한 게 뭔지 보여줘"
  },
  {
    "Time": "4:44",
    "Subtitle": "I LOVE YOU. CALL ME IF YOU NEED ME.",
    "Human Translation": "‎사랑한다 ‎필요하면 전화해"
  },
  {
    "Time": "4:48",
    "Subtitle": "YOU'RE KIDDING, RIGHT? NO!",
    "Human Translation": "‎- 농담하는 거지? ‎- 그럴 리가?"
  },
  {
    "Time": "4:51",
    "Subtitle": "CALL ME IF YOU NEED ANYTHING. I'M GREAT AT MAKING UP DIRTY CHEERS.",
    "Human Translation": "‎뭐든 필요하면 전화해 ‎야한 얘기로 용기를 줄게"
  },
  {
    "Time": "4:55",
    "Subtitle": "YOU HAVE TO GO IN WITH ME. RORY, COME ON.",
    "Human Translation": "‎- 엄마도 같이 가야 해 ‎- 로리, 그건 봐줘"
  },
  {
    "Time": "4:59",
    "Subtitle": "YOU HAVE TO MEET THE HEADMASTER.",
    "Human Translation": "‎엄마가 교장선생님을 ‎만나야 하잖아"
  },
  {
    "Time": "5:00",
    "Subtitle": "WELL, LOOK AT ME.",
    "Human Translation": "‎엄마가 교장선생님을 ‎만나야 하잖아 ‎날 봐, 이 꼴로는 ‎학교 사람을 만날 순 없어"
  },
  {
    "Time": "5:02",
    "Subtitle": "I CAN'T MEET ANYBODY WHO DOES ANYTHING IN THERE.",
    "Human Translation": "‎날 봐, 이 꼴로는 ‎학교 사람을 만날 순 없어"
  },
  {
    "Time": "5:05",
    "Subtitle": "I LOOK LIKE THAT CHICK FROM \"THE DUKES OF HAZZARD.\"",
    "Human Translation": "‎수영장에 가는 옷차림이잖아!"
  },
  {
    "Time": "5:07",
    "Subtitle": "THIS IS MY FIRST DAY.",
    "Human Translation": "‎첫 등교일이잖아"
  },
  {
    "Time": "5:09",
    "Subtitle": "YOU ARE NOT GETTING OUT OF GOING IN THERE WITH ME.",
    "Human Translation": "‎첫 등교일이잖아 ‎같이 가는 걸 피할 순 없어 ‎얘기 끝이야"
  },
  {
    "Time": "5:19",
    "Subtitle": "GOOD MORNING.",
    "Human Translation": "‎안녕하세요"
  },
  {
    "Time": "5:23",
    "Subtitle": "OH, WELL, WE'RE GONNA BE BEST FRIENDS.",
    "Human Translation": "‎친구 사이처럼 굴어 ‎- 어디로 가지? ‎- 앰브로이스 건물"
  },
  {
    "Time": "5:26",
    "Subtitle": "SO, WHERE DO WE GO? UH, THE AMBROISE BUILDING.",
    "Human Translation": "‎- 어디로 가지? ‎- 앰브로이스 건물"
  },
  {
    "Time": "5:30",
    "Subtitle": "WHICH IS... THE BIG, SCARY ONE.",
    "Human Translation": "‎- 그게 어딘데? ‎- 크고 무서운 건물"
  },
  {
    "Time": "5:33",
    "Subtitle": "OH, GREAT. THANKS FOR THE INPUT.",
    "Human Translation": "‎잘됐네, 알려줘서 고마워"
  },
  {
    "Time": "5:36",
    "Subtitle": "LOST? OH. YEAH.",
    "Human Translation": "‎- 길을 잃었나요? ‎- 네"
  },
  {
    "Time": "5:38",
    "Subtitle": "WE'RE LOOKING FOR THE HEADMASTER'S OFFICE,",
    "Human Translation": "‎- 길을 잃었나요? ‎- 네 ‎교장선생님이 계신 ‎건물을 찾고 있어요"
  },
  {
    "Time": "5:40",
    "Subtitle": "THE AMBROISE BUILDING?",
    "Human Translation": "‎교장선생님이 계신 ‎건물을 찾고 있어요"
  },
  {
    "Time": "5:41",
    "Subtitle": "AH. OKAY. WELL, THIS IS IT RIGHT HERE.",
    "Human Translation": "‎바로 이 건물입니다"
  },
  {
    "Time": "5:45",
    "Subtitle": "DOWN THE STAIRS, MAKE A LEFT,",
    "Human Translation": "‎들어가셔서 계단을 내려가 ‎왼쪽으로 돌면"
  },
  {
    "Time": "5:47",
    "Subtitle": "AND THE HEADMASTER'S OFFICE IS AT THE END OF THE HALL.",
    "Human Translation": "‎복도 마지막 방이 ‎교장선생님 사무실입니다"
  },
  {
    "Time": "5:49",
    "Subtitle": "GREAT. THANK YOU.",
    "Human Translation": "‎복도 마지막 방이 ‎교장선생님 사무실입니다 ‎- 고마워요 ‎- 천만에요"
  },
  {
    "Time": "5:51",
    "Subtitle": "YOU'RE WELCOME.",
    "Human Translation": "‎- 고마워요 ‎- 천만에요"
  },
  {
    "Time": "5:52",
    "Subtitle": "I'M IAN JACK. MY DAUGHTER JULIA GOES TO SCHOOL HERE.",
    "Human Translation": "‎전 이안 잭입니다 ‎딸 줄리아가 여기 학생이죠"
  },
  {
    "Time": "5:55",
    "Subtitle": "HI. I'M LORELAI GILMORE. THIS IS MY DAUGHTER, RORY.",
    "Human Translation": "‎로렐라이 길모어예요 ‎이쪽은 제 딸인 로리죠"
  },
  {
    "Time": "6:01",
    "Subtitle": "YOUR DAUGHTER? REALLY?",
    "Human Translation": "‎- 정말 딸이에요? ‎- 네"
  },
  {
    "Time": "6:03",
    "Subtitle": "WOW, THAT'S GREAT. UH...",
    "Human Translation": "‎정말 대단하군요"
  },
  {
    "Time": "6:05",
    "Subtitle": "I MEAN, DAUGHTERS ARE A GREAT THING.",
    "Human Translation": "‎제 말은 딸이란 ‎대단한 존재라는 거죠"
  },
  {
    "Time": "6:07",
    "Subtitle": "WE'RE BIG FANS. [ Laughing ] YEAH.",
    "Human Translation": "‎- 요즘 딸이 인기죠 ‎- 맞아요"
  },
  {
    "Time": "6:12",
    "Subtitle": "SO, IS YOUR HUSBAND HERE? I'D LOVE TO MEET HIM.",
    "Human Translation": "‎남편도 오셨나요? ‎만나 뵙고 싶군요"
  },
  {
    "Time": "6:14",
    "Subtitle": "I'M NOT MARRIED.",
    "Human Translation": "‎전 독신이에요"
  },
  {
    "Time": "6:15",
    "Subtitle": "I'D LOVE TO MEET YOUR WIFE, THOUGH.",
    "Human Translation": "‎부인은 오셨나요?"
  },
  {
    "Time": "6:18",
    "Subtitle": "I'M DIVORCED. SHAME.",
    "Human Translation": "‎- 이혼했습니다 ‎- 아쉽네요"
  },
  {
    "Time": "6:20",
    "Subtitle": "I REALLY GOT TO --",
    "Human Translation": "‎- 죄송하지만 전 빨리… ‎- 그래"
  },
  {
    "Time": "6:22",
    "Subtitle": "RIGHT. WE GOTTA GO MEET THE BIG GUY. AND I GOTTA GET BACK TO WORK.",
    "Human Translation": "‎여기 대장을 만나고 ‎출근해야 하거든요"
  },
  {
    "Time": "6:24",
    "Subtitle": "WHERE DO YOU WORK?",
    "Human Translation": "‎- 어디서 일하시죠? ‎- 모텔에서요"
  },
  {
    "Time": "6:25",
    "Subtitle": "AT AN INN. THE INDEPENDENCE INN.",
    "Human Translation": "‎- 어디서 일하시죠? ‎- 모텔에서요 ‎- 인디펜던스 모텔 매니저예요 ‎- 그래요?"
  },
  {
    "Time": "6:29",
    "Subtitle": "I RUN IT. REALLY?",
    "Human Translation": "‎- 인디펜던스 모텔 매니저예요 ‎- 그래요?"
  },
  {
    "Time": "6:31",
    "Subtitle": "IN A DIFFERENT OUTFIT, OF COURSE.",
    "Human Translation": "‎물론 이 옷차림은 아니죠"
  },
  {
    "Time": "6:33",
    "Subtitle": "IT WAS NICE TO MEET YOU, LORELAI. GOOD LUCK IN SCHOOL, RORY.",
    "Human Translation": "‎반가웠습니다, 로렐라이 ‎학교 잘 다니렴, 로리"
  },
  {
    "Time": "6:37",
    "Subtitle": "I'LL TELL JULIA TO LOOK OUT FOR YOU. GREAT. THANKS.",
    "Human Translation": "‎- 줄리아에게 소개시키마 ‎- 네, 고마워요"
  },
  {
    "Time": "6:40",
    "Subtitle": "SEE YOU.",
    "Human Translation": "‎또 봐요"
  },
  {
    "Time": "6:43",
    "Subtitle": "WHAT A NICE, NICE MAN.",
    "Human Translation": "‎좋은 남자네"
  },
  {
    "Time": "6:45",
    "Subtitle": "YOU'RE FEELING PRETTY GOOD ABOUT YOURSELF RIGHT NOW,",
    "Human Translation": "‎좋은 남자네 ‎엄마 자신이 자랑스럽지?"
  },
  {
    "Time": "6:47",
    "Subtitle": "AREN'T YOU?",
    "Human Translation": "‎엄마 자신이 자랑스럽지?"
  },
  {
    "Time": "6:48",
    "Subtitle": "YEAH.",
    "Human Translation": "‎그래"
  },
  {
    "Time": "6:50",
    "Subtitle": "DO YOU WANT ME TO GET YOU A MIRROR? I'M BACK. LET'S GO.",
    "Human Translation": "‎- 거울 갖다 줄까? ‎- 정신 차렸어, 가자"
  },
  {
    "Time": "6:58",
    "Subtitle": "[ Sarcastically ] OH, GOOD. MORE BIG STUFF.",
    "Human Translation": "‎안은 더 크네"
  },
  {
    "Time": "7:32",
    "Subtitle": "YOU READY?",
    "Human Translation": "‎- 준비됐니? ‎- 아니"
  },
  {
    "Time": "7:34",
    "Subtitle": "NO.",
    "Human Translation": "‎찰스턴 교장실"
  },
  {
    "Time": "7:36",
    "Subtitle": "YOU READY?",
    "Human Translation": "‎찰스턴 교장실 ‎- 준비됐니? ‎- 응"
  },
  {
    "Time": "7:38",
    "Subtitle": "YES.",
    "Human Translation": "‎- 준비됐니? ‎- 응"
  },
  {
    "Time": "7:47",
    "Subtitle": "UM...EXCUSE ME.",
    "Human Translation": "‎실례합니다"
  },
  {
    "Time": "7:51",
    "Subtitle": "I-I'M LORELAI GILMORE.",
    "Human Translation": "‎안녕하세요? ‎로렐라이 길모어예요"
  },
  {
    "Time": "7:52",
    "Subtitle": "THIS IS MY DAUGHTER, LORELAI GILMORE.",
    "Human Translation": "‎안녕하세요? ‎로렐라이 길모어예요 ‎제 딸 로렐라이 길모어예요 ‎제 이름을 땄죠"
  },
  {
    "Time": "7:55",
    "Subtitle": "I NAMED HER AFTER ME.",
    "Human Translation": "‎제 딸 로렐라이 길모어예요 ‎제 이름을 땄죠"
  },
  {
    "Time": "7:56",
    "Subtitle": "I WAS IN THE HOSPITAL ALL WHACKED OUT ON DEMEROL.",
    "Human Translation": "‎제 딸 로렐라이 길모어예요 ‎제 이름을 땄죠 ‎산부인과에서 진정제에 취해… ‎그 얘긴 됐고…"
  },
  {
    "Time": "7:59",
    "Subtitle": "NEVER MIND.",
    "Human Translation": "‎산부인과에서 진정제에 취해… ‎그 얘긴 됐고…"
  },
  {
    "Time": "8:01",
    "Subtitle": "B-B-BUT WE CALL HER \"RORY.\" IT'S SHORT FOR LORELAI.",
    "Human Translation": "‎딸은 로렐라이를 줄여 ‎로리라고 부르지만"
  },
  {
    "Time": "8:04",
    "Subtitle": "SHE'LL ANSWER TO EITHER ONE OR EVEN \"HEY, YOU,\"",
    "Human Translation": "‎딸은 로렐라이를 줄여 ‎로리라고 부르지만 ‎두 이름 다 대답할 거예요 ‎때에 따라선 '야' 라고 불러도…"
  },
  {
    "Time": "8:07",
    "Subtitle": "DEPENDING ON THE -- IS THE HEADMASTER HERE?",
    "Human Translation": "‎두 이름 다 대답할 거예요 ‎때에 따라선 '야' 라고 불러도… ‎교장선생님 계세요?"
  },
  {
    "Time": "8:10",
    "Subtitle": "ONE MOMENT.",
    "Human Translation": "‎기다리세요"
  },
  {
    "Time": "8:18",
    "Subtitle": "See, that's what happens when you go to bed with your makeup on.",
    "Human Translation": "‎화장을 안 지우고 자면 ‎저렇게 되는 거야"
  },
  {
    "Time": "8:24",
    "Subtitle": "HEADMASTER CHARLESTON WILL SEE YOU NOW.",
    "Human Translation": "‎찰스턴 교장선생님이 ‎뵙자고 하십니다"
  },
  {
    "Time": "8:29",
    "Subtitle": "GREAT. GREAT. THANKS.",
    "Human Translation": "‎다행이네요, 고마워요"
  },
  {
    "Time": "8:32",
    "Subtitle": "MS. GILMORE, I'M HEADMASTER CHARLESTON.",
    "Human Translation": "‎길모어 씨 ‎제가 교장인 찰스턴입니다"
  },
  {
    "Time": "8:35",
    "Subtitle": "HI. WOW. IT'S REALLY NICE TO MEET --",
    "Human Translation": "‎안녕하세요, 만나서 반가…"
  },
  {
    "Time": "8:38",
    "Subtitle": "MOM.",
    "Human Translation": "‎엄마?"
  },
  {
    "Time": "8:44",
    "Subtitle": "WHAT ARE YOU DOING HERE?",
    "Human Translation": "‎여기서 뭐 해요?"
  },
  {
    "Time": "8:45",
    "Subtitle": "I CAME TO WISH MY GRANDDAUGHTER LUCK ON HER FIRST DAY OF SCHOOL.",
    "Human Translation": "‎손녀의 첫 등교일에 ‎행운을 빌어주려고 왔지"
  },
  {
    "Time": "8:48",
    "Subtitle": "RORY, YOU LOOK WONDERFUL IN THAT UNIFORM!",
    "Human Translation": "‎로리, 교복이 잘 어울리는구나"
  },
  {
    "Time": "8:50",
    "Subtitle": "YOU DIDN'T HAVE TO COME ALL THE WAY OUT HERE, MOM.",
    "Human Translation": "‎로리, 교복이 잘 어울리는구나 ‎여기까지 오실 필요는 ‎없었어요, 엄마"
  },
  {
    "Time": "8:53",
    "Subtitle": "THIS GAVE ME A CHANCE TO MAKE SURE THAT HANLIN HERE",
    "Human Translation": "‎여기까지 오실 필요는 ‎없었어요, 엄마 ‎핸린 씨에게 로리를 ‎잘 부탁한다고 말하려고 왔지"
  },
  {
    "Time": "8:56",
    "Subtitle": "TAKES GOOD CARE OF RORY.",
    "Human Translation": "‎핸린 씨에게 로리를 ‎잘 부탁한다고 말하려고 왔지"
  },
  {
    "Time": "8:57",
    "Subtitle": "YOU'RE HANLIN. HANLIN CHARLESTON.",
    "Human Translation": "‎- 선생님이 핸린 씨에요? ‎- 핸린 찰스턴입니다"
  },
  {
    "Time": "9:00",
    "Subtitle": "HANLIN'S WIFE AND I ARE ON THE SYMPHONY FUNDRAISING COMMITTEE TOGETHER.",
    "Human Translation": "‎핸린 씨 부인과 난 ‎자선 악단 위원회 친구란다"
  },
  {
    "Time": "9:04",
    "Subtitle": "WOW. THAT'S GREAT.",
    "Human Translation": "‎거참 잘됐네요"
  },
  {
    "Time": "9:05",
    "Subtitle": "YOUR FATHER AND I ARE GOLF RIVALS.",
    "Human Translation": "‎리처드와 난 ‎골프 라이벌이라오"
  },
  {
    "Time": "9:07",
    "Subtitle": "WE'RE STILL FIGHTING IT OUT TO SEE WHICH ONE IS WORSE.",
    "Human Translation": "‎누가 더 못 치는지 ‎아직도 싸우는 중이라오"
  },
  {
    "Time": "9:10",
    "Subtitle": "OH, YES. WE'RE ALL OLD FRIENDS.",
    "Human Translation": "‎우린 오랜 친구 사이란다"
  },
  {
    "Time": "9:12",
    "Subtitle": "WELL, THERE'S NOTHING LIKE FRIENDS...",
    "Human Translation": "‎친구만한 것도 없죠"
  },
  {
    "Time": "9:14",
    "Subtitle": "ESPECIALLY IF THEY'RE OLD. ONES.",
    "Human Translation": "‎특히 죽을 때… ‎죽마고우라면요"
  },
  {
    "Time": "9:19",
    "Subtitle": "WOULD YOU LIKE TO TAKE OFF YOUR COAT AND HAVE A SEAT?",
    "Human Translation": "‎코트를 벗고 자리에 ‎앉으시겠습니까?"
  },
  {
    "Time": "9:21",
    "Subtitle": "NO, I'M FINE.",
    "Human Translation": "‎아뇨, 괜찮아요"
  },
  {
    "Time": "9:23",
    "Subtitle": "I'M AFRAID THEY WERE A LITTLE OVERZEALOUS WITH THE FURNACE THIS MORNING.",
    "Human Translation": "‎아침부터 빌딩난방이 ‎너무 과해서"
  },
  {
    "Time": "9:26",
    "Subtitle": "IT'S QUITE WARM IN HERE. I LIKE IT WARM.",
    "Human Translation": "‎- 더우실 텐데요 ‎- 전 따뜻한 게 좋아요"
  },
  {
    "Time": "9:28",
    "Subtitle": "LORELAI, TAKE OFF YOUR COAT AND SIT DOWN.",
    "Human Translation": "‎- 더우실 텐데요 ‎- 전 따뜻한 게 좋아요 ‎코트 벗고 어서 앉아라"
  },
  {
    "Time": "9:30",
    "Subtitle": "YOU DON'T WANT HANLIN TO THINK YOU'RE RUDE.",
    "Human Translation": "‎코트 벗고 어서 앉아라 ‎핸린 씨에게 결례가 되잖니"
  },
  {
    "Time": "9:45",
    "Subtitle": "LAUNDRY DAY.",
    "Human Translation": "‎빨래하는 날이라서요"
  },
  {
    "Time": "9:48",
    "Subtitle": "HANLIN, DID YOU KNOW THAT RORY HAS A 4.0 GRADE AVERAGE?",
    "Human Translation": "‎핸린, 로리의 학점이 ‎평균 4.0이란 걸 아시나요?"
  },
  {
    "Time": "9:53",
    "Subtitle": "I'M SURE HE DOES, MOM.",
    "Human Translation": "‎핸린, 로리의 학점이 ‎평균 4.0이란 걸 아시나요? ‎아실 거예요, 엄마"
  },
  {
    "Time": "9:54",
    "Subtitle": "THIS IS A VERY SPECIAL GIRL. YOU TAKE GOOD CARE OF HER.",
    "Human Translation": "‎아주 특별한 아이니 ‎잘 돌봐주세요"
  },
  {
    "Time": "9:58",
    "Subtitle": "WE'LL DO OUR BEST, EMILY.",
    "Human Translation": "‎최선을 다하겠소, 에밀리"
  },
  {
    "Time": "10:00",
    "Subtitle": "RORY'S NOT GONNA BE A PROBLEM.",
    "Human Translation": "‎로리는 별문제 없을 거예요"
  },
  {
    "Time": "10:01",
    "Subtitle": "SHE'S TOTALLY LOW-MAINTENANCE. YOU KNOW, LIKE A HONDA.",
    "Human Translation": "‎자기관리가 철저하죠 ‎혼다 자동차처럼요"
  },
  {
    "Time": "10:04",
    "Subtitle": "[ Laughing ] YOU KNOW. THEY'RE JUST EASY, JUST...",
    "Human Translation": "‎관리도 쉽고…"
  },
  {
    "Time": "10:09",
    "Subtitle": "NICE OFFICE.",
    "Human Translation": "‎사무실이 좋네요"
  },
  {
    "Time": "10:10",
    "Subtitle": "WELL, I DON'T THINK",
    "Human Translation": "‎핸린 씨도 바쁘실 텐데 ‎우리도 어서 가보자꾸나"
  },
  {
    "Time": "10:12",
    "Subtitle": "WE SHOULD TAKE UP ANY MORE OF YOUR PRECIOUS TIME.",
    "Human Translation": "‎핸린 씨도 바쁘실 텐데 ‎우리도 어서 가보자꾸나 ‎핸린, 정말 반가웠어요 ‎비티에게 안부 전해요"
  },
  {
    "Time": "10:14",
    "Subtitle": "IT WAS LOVELY TO SEE YOU. GIVE BITTY OUR LOVE.",
    "Human Translation": "‎핸린, 정말 반가웠어요 ‎비티에게 안부 전해요"
  },
  {
    "Time": "10:17",
    "Subtitle": "TELL RICHARD I'LL SEE HIM AT THE CLUB SUNDAY.",
    "Human Translation": "‎리처드에게 일요일에 ‎클럽에서 보자고 전해요"
  },
  {
    "Time": "10:20",
    "Subtitle": "HAVE A WONDERFUL DAY, RORY. I WANT TO HEAR ALL ABOUT IT.",
    "Human Translation": "‎첫날 잘 지내고 ‎나중에 다 얘기해주렴"
  },
  {
    "Time": "10:22",
    "Subtitle": "DO YOU NEED A RIDE OR IS YOUR HORSE PARKED OUTSIDE?",
    "Human Translation": "‎태워다줄까? ‎혹시 밖에 말을 세워 놨니?"
  },
  {
    "Time": "10:27",
    "Subtitle": "Lorelai: IT'S SO NICE TO MEET YOU.",
    "Human Translation": "‎정말 반가웠습니다"
  },
  {
    "Time": "10:29",
    "Subtitle": "Have a great day.",
    "Human Translation": "‎오늘 잘 지내"
  },
  {
    "Time": "10:32",
    "Subtitle": "OH, YOU DON'T WANT TO FORGET YOUR COAT.",
    "Human Translation": "‎코트를 잊으시면 안 되죠"
  },
  {
    "Time": "10:35",
    "Subtitle": "OH. NO...'CAUSE THAT WOULD BE EMBARRASSING.",
    "Human Translation": "‎하마터면 창피당할 뻔했네요"
  },
  {
    "Time": "10:44",
    "Subtitle": "HOW DO YOU LEAVE THE HOUSE LOOKING LIKE THAT?",
    "Human Translation": "‎어떻게 그 꼴로 집을 나섰니? ‎이럴 계획은 아니었어요"
  },
  {
    "Time": "10:48",
    "Subtitle": "WHAT KIND OF AN IMPRESSION",
    "Human Translation": "‎그것도 로리의 첫날인데"
  },
  {
    "Time": "10:49",
    "Subtitle": "DID YOU THINK YOU WERE GONNA MAKE?",
    "Human Translation": "‎네 첫인상이 뭐가 되니?"
  },
  {
    "Time": "10:52",
    "Subtitle": "[ SIGHS ] WHAT ARE YOU DOING HERE, MOTHER?",
    "Human Translation": "‎여긴 왜 오셨죠?"
  },
  {
    "Time": "10:54",
    "Subtitle": "I TOLD YOU, I CAME TO PUT IN A GOOD WORD FOR RORY.",
    "Human Translation": "‎로리를 잘 부탁하러 왔다니까"
  },
  {
    "Time": "10:56",
    "Subtitle": "SHE DIDN'T NEED A GOOD WORD. I'M NOT ALLOWED HERE, IS THAT IT?",
    "Human Translation": "‎- 로리에게 부탁은 필요 없어요 ‎- 난 오지 말라고?"
  },
  {
    "Time": "10:59",
    "Subtitle": "I DIDN'T SAY THAT.",
    "Human Translation": "‎그런 말은 안 했어요"
  },
  {
    "Time": "11:00",
    "Subtitle": "I'M ALLOWED TO PAY FOR IT,",
    "Human Translation": "‎학비는 내도 되지만 ‎근처에 얼씬도 말라는 거지"
  },
  {
    "Time": "11:01",
    "Subtitle": "BUT I CAN'T ACTUALLY SET FOOT ON THE PREMISES.",
    "Human Translation": "‎학비는 내도 되지만 ‎근처에 얼씬도 말라는 거지 ‎- 네 진의를 알고 싶었다 ‎- 맙소사"
  },
  {
    "Time": "11:03",
    "Subtitle": "I JUST WANT TO GET THE RULES STRAIGHT.",
    "Human Translation": "‎- 네 진의를 알고 싶었다 ‎- 맙소사"
  },
  {
    "Time": "11:05",
    "Subtitle": "HOW ABOUT THE STREET? CAN I DRIVE DOWN THE STREET?",
    "Human Translation": "‎- 거리에서 운전은 어때? ‎- 그만해요"
  },
  {
    "Time": "11:07",
    "Subtitle": "FORGET IT.",
    "Human Translation": "‎- 거리에서 운전은 어때? ‎- 그만해요 ‎차라리 너희 동네엔 ‎얼씬도 말아야겠구나"
  },
  {
    "Time": "11:08",
    "Subtitle": "MAYBE I SHOULD JUST AVOID THIS NEIGHBORHOOD ALTOGETHER.",
    "Human Translation": "‎차라리 너희 동네엔 ‎얼씬도 말아야겠구나"
  },
  {
    "Time": "11:10",
    "Subtitle": "ALTHOUGH MY DOCTOR IS RIGHT DOWN THE BLOCK.",
    "Human Translation": "‎병원이 그 근처지만 말이야 ‎머리에 피라도 나면 ‎네 허락을 받도록 하마"
  },
  {
    "Time": "11:12",
    "Subtitle": "MAYBE I CAN GET SPECIAL PERMISSION IF I'M BLEEDING FROM THE HEAD.",
    "Human Translation": "‎머리에 피라도 나면 ‎네 허락을 받도록 하마"
  },
  {
    "Time": "11:15",
    "Subtitle": "I'M SORRY. I WAS JUST SURPRISED TO SEE YOU HERE.",
    "Human Translation": "‎죄송해요, 여기서 ‎엄마를 보고 놀랐을 뿐이에요"
  },
  {
    "Time": "11:19",
    "Subtitle": "I JUST THOUGHT IT WAS IMPORTANT FOR THIS SCHOOL TO KNOW THEY HAD A GILMORE AMONGST THEM.",
    "Human Translation": "‎길모어 가문이라는 걸 ‎학교에 확실히 하고 싶었다"
  },
  {
    "Time": "11:23",
    "Subtitle": "A VERY GOOD THOUGHT.",
    "Human Translation": "‎좋은 생각이네요"
  },
  {
    "Time": "11:24",
    "Subtitle": "AND THAT SOME OF THE GILMORES ACTUALLY OWN CLOTHING.",
    "Human Translation": "‎또 옷을 입고 다니는 사람도 ‎있다고 말이야"
  },
  {
    "Time": "11:27",
    "Subtitle": "AND ON THAT NOTE, I HAVE TO GET TO WORK. I'LL SEE YOU LATER.",
    "Human Translation": "‎출근하는 걸 깜빡했네요 ‎나중에 봐요"
  },
  {
    "Time": "11:30",
    "Subtitle": "DINNER, FRIDAY NIGHT. NO SPURS, PLEASE.",
    "Human Translation": "‎금요일 저녁 잊지 마라 ‎말은 집에 두고 와"
  },
  {
    "Time": "11:36",
    "Subtitle": "YOU'RE OBVIOUSLY A BRIGHT GIRL, MISS GILMORE.",
    "Human Translation": "‎정말 똑똑한 아이구나 ‎길모어 양"
  },
  {
    "Time": "11:38",
    "Subtitle": "THANK YOU. GOOD GRADES. TEACHERS LIKE YOU.",
    "Human Translation": "‎- 감사합니다 ‎- 성적도 좋고 신망도 깊구나"
  },
  {
    "Time": "11:41",
    "Subtitle": "NOT A LOT OF SOCIAL ACTIVITIES, THOUGH.",
    "Human Translation": "‎그런데 사회활동이 많지 않군"
  },
  {
    "Time": "11:44",
    "Subtitle": "OH, WELL, JUST LIVING AT STARS HOLLOW IS KIND OF A SOCIAL ACTIVITY, ACTUALLY.",
    "Human Translation": "‎스타즈 할로우에 사는 것 ‎자체가 사회활동이에요"
  },
  {
    "Time": "11:48",
    "Subtitle": "NOTHING IN YOUR SCHOOL APPEALED TO YOU?",
    "Human Translation": "‎학교활동은 끌리지 않았나?"
  },
  {
    "Time": "11:50",
    "Subtitle": "I WORK AT MY MOTHER'S INN AFTER SCHOOL SOMETIMES.",
    "Human Translation": "‎가끔 방과 후에 ‎엄마 모텔에서 일해요"
  },
  {
    "Time": "11:53",
    "Subtitle": "AND I WAS IN THE GERMAN CLUB FOR A WHILE,",
    "Human Translation": "‎잠깐 독일어 클럽도 했지만 ‎겨우 세 명뿐이었어요"
  },
  {
    "Time": "11:56",
    "Subtitle": "BUT THERE WERE ONLY THREE OF US.",
    "Human Translation": "‎잠깐 독일어 클럽도 했지만 ‎겨우 세 명뿐이었어요 ‎'쉰들러 리스트' 를 보고 ‎두 명이 불어 클럽으로 바꿨죠"
  },
  {
    "Time": "11:57",
    "Subtitle": "AND THEN TWO LEFT FOR FRENCH CLUB AFTER SEEING \"SCHINDLER'S LIST.\"",
    "Human Translation": "‎'쉰들러 리스트' 를 보고 ‎두 명이 불어 클럽으로 바꿨죠"
  },
  {
    "Time": "12:00",
    "Subtitle": "WHAT ARE YOUR ASPIRATIONS?",
    "Human Translation": "‎앞으로 꿈은 뭐지?"
  },
  {
    "Time": "12:02",
    "Subtitle": "I WANT TO GO TO HARVARD TO STUDY JOURNALISM AND POLITICAL SCIENCE.",
    "Human Translation": "‎하버드에서 저널리즘과 ‎정치학을 배우고 싶어요"
  },
  {
    "Time": "12:05",
    "Subtitle": "ON YOUR WAY TO BEING...",
    "Human Translation": "‎하버드에서 저널리즘과 ‎정치학을 배우고 싶어요 ‎- 되고 싶은 사람은… ‎- 크리스티안 아만포 기자죠"
  },
  {
    "Time": "12:07",
    "Subtitle": "CHRISTIANE AMANPOUR.",
    "Human Translation": "‎- 되고 싶은 사람은… ‎- 크리스티안 아만포 기자죠"
  },
  {
    "Time": "12:08",
    "Subtitle": "REALLY? YES.",
    "Human Translation": "‎- 정말이니? ‎- 네"
  },
  {
    "Time": "12:11",
    "Subtitle": "NOT COKIE ROBERTS? NO.",
    "Human Translation": "‎- 코키 로버츠 앵커는? ‎- 아니에요"
  },
  {
    "Time": "12:13",
    "Subtitle": "NOT OPRAH, ROSIE,",
    "Human Translation": "‎오프라, 로지 같은 ‎토크쇼 진행자는 아니고?"
  },
  {
    "Time": "12:15",
    "Subtitle": "OR ONE OF THE WOMEN FROM \"THE VIEW\"? NO.",
    "Human Translation": "‎오프라, 로지 같은 ‎토크쇼 진행자는 아니고? ‎네"
  },
  {
    "Time": "12:18",
    "Subtitle": "WHY DO YOU WISH TO BE CHRISTIANE AMANPOUR?",
    "Human Translation": "‎크리스티안 아만포가 ‎되고 싶은 이유는?"
  },
  {
    "Time": "12:20",
    "Subtitle": "I DON'T WISH TO BE HER, EXACTLY.",
    "Human Translation": "‎크리스티안 아만포가 ‎되고 싶은 이유는? ‎꼭 그 사람이 된다기보다"
  },
  {
    "Time": "12:23",
    "Subtitle": "I JUST WANT TO DO WHAT SHE DOES.",
    "Human Translation": "‎꼭 그 사람이 된다기보다 ‎- 그 직업을 원해요 ‎- 어떤 면에서?"
  },
  {
    "Time": "12:25",
    "Subtitle": "WHICH IS?",
    "Human Translation": "‎- 그 직업을 원해요 ‎- 어떤 면에서?"
  },
  {
    "Time": "12:27",
    "Subtitle": "TRAVEL, SEE THE WORLD UP CLOSE,",
    "Human Translation": "‎여행을 하고 ‎세계를 가까이서 보고"
  },
  {
    "Time": "12:30",
    "Subtitle": "REPORT ON WHAT'S REALLY GOING ON,",
    "Human Translation": "‎여행을 하고 ‎세계를 가까이서 보고 ‎세계의 실체를 전하는 ‎중요한 사람이 되는 거죠"
  },
  {
    "Time": "12:32",
    "Subtitle": "BE A PART OF SOMETHING BIG.",
    "Human Translation": "‎세계의 실체를 전하는 ‎중요한 사람이 되는 거죠"
  },
  {
    "Time": "12:34",
    "Subtitle": "AND TO BE PART OF SOMETHING BIG YOU HAVE TO BE ON TV?",
    "Human Translation": "‎중요한 사람이 되려면 ‎TV에 나와야 하나?"
  },
  {
    "Time": "12:37",
    "Subtitle": "WHY NOT LEAD THE POLICE ON A HIGH-SPEED CHASE?",
    "Human Translation": "‎고속도로 추격전의 ‎범인이 되는 건 어때?"
  },
  {
    "Time": "12:39",
    "Subtitle": "THAT'S A QUICKER WAY TO ACHIEVE THIS GOAL.",
    "Human Translation": "‎그게 더 빠른 길일 텐데"
  },
  {
    "Time": "12:41",
    "Subtitle": "BEING ON TV HAS NOTHING TO DO WITH IT.",
    "Human Translation": "‎TV는 상관없어요"
  },
  {
    "Time": "12:43",
    "Subtitle": "MAYBE I'LL BE A JOURNALIST",
    "Human Translation": "‎TV는 상관없어요 ‎기자가 되어 제가 본 것을 ‎책이나 기사로 쓸 수도 있죠"
  },
  {
    "Time": "12:44",
    "Subtitle": "AND WRITE BOOKS OR ARTICLES ABOUT WHAT I SEE.",
    "Human Translation": "‎기자가 되어 제가 본 것을 ‎책이나 기사로 쓸 수도 있죠"
  },
  {
    "Time": "12:47",
    "Subtitle": "I JUST WANT TO BE SURE THAT I SEE...SOMETHING.",
    "Human Translation": "‎제겐 무언가를 본다는 게 ‎가장 중요해요"
  },
  {
    "Time": "12:54",
    "Subtitle": "YOU'LL NOTICE THE DEBATING TEAM'S ALSO MISSING FROM MY RéSUMé.",
    "Human Translation": "‎이력서에 보시다시피 ‎토론도 제 특기는 아니에요"
  },
  {
    "Time": "13:00",
    "Subtitle": "I'VE KNOWN YOUR GRANDPARENTS FOR QUITE SOME TIME.",
    "Human Translation": "‎네 할아버지와 난 ‎알고 지낸 지가 오래됐다"
  },
  {
    "Time": "13:02",
    "Subtitle": "I KNOW.",
    "Human Translation": "‎네 할아버지와 난 ‎알고 지낸 지가 오래됐다 ‎알아요 ‎사실 지난주에도 ‎그 댁의 파티에 가서"
  },
  {
    "Time": "13:05",
    "Subtitle": "IN FACT, I WAS AT A PARTY AT THEIR HOUSE JUST LAST WEEK",
    "Human Translation": "‎사실 지난주에도 ‎그 댁의 파티에 가서"
  },
  {
    "Time": "13:08",
    "Subtitle": "WHERE I HAD THE MOST DELICIOUS LOBSTER PUFFS I'VE EVER EATEN.",
    "Human Translation": "‎내 평생 최고의 ‎랍스터 과자를 먹었지"
  },
  {
    "Time": "13:11",
    "Subtitle": "I'M VERY FOND OF THEM.",
    "Human Translation": "‎정말 좋은 친구란다"
  },
  {
    "Time": "13:13",
    "Subtitle": "THAT'S NICE.",
    "Human Translation": "‎다행이네요"
  },
  {
    "Time": "13:15",
    "Subtitle": "NONE OF THIS, HOWEVER, WILL BE OF ANY BENEFIT TO YOU.",
    "Human Translation": "‎다행이네요 ‎하지만 그렇다고 ‎네게 특혜는 없을 거야"
  },
  {
    "Time": "13:18",
    "Subtitle": "CHILTON HAS ONE OF THE HIGHEST ACADEMIC STANDARDS",
    "Human Translation": "‎하지만 그렇다고 ‎네게 특혜는 없을 거야 ‎칠튼의 교육 수준은"
  },
  {
    "Time": "13:21",
    "Subtitle": "OF ANY SCHOOL IN AMERICA.",
    "Human Translation": "‎미국 최고란다"
  },
  {
    "Time": "13:22",
    "Subtitle": "YOU MAY HAVE BEEN THE SMARTEST GIRL AT STARS HOLLOW,",
    "Human Translation": "‎스타즈 할로우에선 ‎제일 똑똑했을지 모르지만"
  },
  {
    "Time": "13:25",
    "Subtitle": "BUT THIS IS A DIFFERENT PLACE.",
    "Human Translation": "‎이곳은 전혀 달라"
  },
  {
    "Time": "13:27",
    "Subtitle": "THE PRESSURES ARE GREATER, THE RULES ARE STRICTER,",
    "Human Translation": "‎중압감도 높고 ‎규율도 더 엄격하며"
  },
  {
    "Time": "13:29",
    "Subtitle": "AND THE EXPECTATIONS ARE HIGHER.",
    "Human Translation": "‎기대치도 훨씬 높은 곳이지"
  },
  {
    "Time": "13:31",
    "Subtitle": "IF YOU MAKE IT THROUGH, YOU WILL HAVE RECEIVED",
    "Human Translation": "‎졸업을 한다면"
  },
  {
    "Time": "13:33",
    "Subtitle": "ONE OF THE FINEST EDUCATIONS ONE CAN GET,",
    "Human Translation": "‎어느 누구보다 ‎수준 높은 교육을 받게 될 거야"
  },
  {
    "Time": "13:35",
    "Subtitle": "AND THERE SHOULD BE NO REASON WHY YOU SHOULD NOT ACHIEVE ALL YOUR GOALS.",
    "Human Translation": "‎또한 너의 목표를 ‎못 이룰 이유도 없지"
  },
  {
    "Time": "13:39",
    "Subtitle": "HOWEVER, SINCE YOU ARE STARTING LATE",
    "Human Translation": "‎하지만 넌 시작이 늦었고"
  },
  {
    "Time": "13:41",
    "Subtitle": "AND ARE NOT USED TO THIS HIGHLY COMPETITIVE ATMOSPHERE,",
    "Human Translation": "‎치열한 경쟁에 익숙하지 않을 테니"
  },
  {
    "Time": "13:43",
    "Subtitle": "THERE IS A GOOD CHANCE YOU WILL FAIL.",
    "Human Translation": "‎낙제할 가능성도 많다"
  },
  {
    "Time": "13:48",
    "Subtitle": "FAILURE'S A PART OF LIFE...",
    "Human Translation": "‎그것도 괜찮겠지 ‎실패도 인생의 일부니까"
  },
  {
    "Time": "13:50",
    "Subtitle": "BUT NOT A PART OF CHILTON.",
    "Human Translation": "‎하지만 여기선 아니야"
  },
  {
    "Time": "13:53",
    "Subtitle": "UNDERSTAND?",
    "Human Translation": "‎알아듣겠니?"
  },
  {
    "Time": "13:57",
    "Subtitle": "SO YOU LIKED THE LOBSTER PUFFS, HUH?",
    "Human Translation": "‎랍스터 과자가 좋으셨다고요?"
  },
  {
    "Time": "14:03",
    "Subtitle": "TAKE THIS TO MISS JAMES IN THE ADMINISTRATION OFFICE ACROSS THE HALL.",
    "Human Translation": "‎복도 맞은 편 행정실의 ‎제임스 양에게 서류를 내거라"
  },
  {
    "Time": "14:24",
    "Subtitle": "HI. I'M LOOKING FOR MISS JAMES.",
    "Human Translation": "‎안녕하세요? ‎제임스 양을 찾는데요"
  },
  {
    "Time": "14:26",
    "Subtitle": "NAME? LORELAI GILMORE.",
    "Human Translation": "‎- 이름은? ‎- 로렐라이 길모어요"
  },
  {
    "Time": "14:30",
    "Subtitle": "BUT I GO BY \"RORY.\" FILL THIS OUT, PLEASE.",
    "Human Translation": "‎- 보통 로리라고 불러요 ‎- 이걸 써라"
  },
  {
    "Time": "14:46",
    "Subtitle": "WELL? SHUT UP.",
    "Human Translation": "‎- 어때? ‎- 조용히 해"
  },
  {
    "Time": "14:47",
    "Subtitle": "HURRY, PLEASE. SPIDERS. \"LORELAI GILMORE.\"",
    "Human Translation": "‎거미가 있으니 서둘러"
  },
  {
    "Time": "14:50",
    "Subtitle": "NICE STRIPPER NAME.",
    "Human Translation": "‎- 로렐라이 길모어 ‎- 스트리퍼 이름이네"
  },
  {
    "Time": "14:51",
    "Subtitle": "\"FORMERLY OF STARS HOLLOW HIGH SCHOOL.\" WHERE'S THAT?",
    "Human Translation": "‎- 스타즈 할로우 고등학교 ‎- 그게 어디야?"
  },
  {
    "Time": "14:54",
    "Subtitle": "MAKE A LEFT AT THE HAYSTACKS AND FOLLOW THE COWS.",
    "Human Translation": "‎서쪽으로 가다 건초가 보이면 ‎좌회전 후 소를 따라가면 나와"
  },
  {
    "Time": "14:56",
    "Subtitle": "OOH, A DIXIE CHICK.",
    "Human Translation": "‎서쪽으로 가다 건초가 보이면 ‎좌회전 후 소를 따라가면 나와 ‎촌구석 출신이네"
  },
  {
    "Time": "14:58",
    "Subtitle": "\"PERFECT ATTENDANCE. 4.0 GRADE POINT AVERAGE.\"",
    "Human Translation": "‎촌구석 출신이네 ‎전 학년 개근에 평점은 4.0"
  },
  {
    "Time": "15:00",
    "Subtitle": "BUGS, DIRT, TWIGS. SHE'S A JOURNALISM MAJOR.",
    "Human Translation": "‎벌레, 흙, 가지도 있어 ‎저널리즘 전공이네"
  },
  {
    "Time": "15:03",
    "Subtitle": "THAT MEANS SHE'S GONNA GO OUT FOR THE SCHOOL PAPER.",
    "Human Translation": "‎그럼 학교신문에 ‎지원한다는 뜻이네"
  },
  {
    "Time": "15:04",
    "Subtitle": "NOT NECESSARILY.",
    "Human Translation": "‎그럼 학교신문에 ‎지원한다는 뜻이네 ‎꼭 그런 건 아니지"
  },
  {
    "Time": "15:06",
    "Subtitle": "SHE'S GOT A THOUSAND RECOMMENDATIONS IN HERE.",
    "Human Translation": "‎꼭 그런 건 아니지 ‎추천서도 수없이 많아"
  },
  {
    "Time": "15:08",
    "Subtitle": "POPULAR WITH THE ADULTS",
    "Human Translation": "‎추천서도 수없이 많아 ‎어른에게 인기 있고 ‎학교신문사까지 노리네"
  },
  {
    "Time": "15:09",
    "Subtitle": "AND GOING OUT FOR THE SCHOOL PAPER?",
    "Human Translation": "‎어른에게 인기 있고 ‎학교신문사까지 노리네"
  },
  {
    "Time": "15:11",
    "Subtitle": "YOU DON'T KNOW SHE'S GOING OUT FOR THE PAPER.",
    "Human Translation": "‎그만 좀 해 ‎그건 아직 모르잖아 ‎- 뭔가 물었어 ‎- 조용"
  },
  {
    "Time": "15:14",
    "Subtitle": "SHE'LL NEVER CATCH UP. SHE'S A MONTH BEHIND ALREADY.",
    "Human Translation": "‎난 자연이 싫어 ‎한 달이나 처졌으니 ‎절대 못 따라올 거야"
  },
  {
    "Time": "15:17",
    "Subtitle": "YOU CAN TUTOR HER.",
    "Human Translation": "‎한 달이나 처졌으니 ‎절대 못 따라올 거야"
  },
  {
    "Time": "15:18",
    "Subtitle": "BE LIKE A BIG SISTER. YOU'RE FUNNY.",
    "Human Translation": "‎- 관대한 마음으로 가르쳐봐 ‎- 그게 재밌어?"
  },
  {
    "Time": "15:20",
    "Subtitle": "OKAY, LIZARD, GOODBYE.",
    "Human Translation": "‎도마뱀도 있어, 난 갈래"
  },
  {
    "Time": "15:22",
    "Subtitle": "WHY ARE THEY LETTING ALL THESE EXTRA PEOPLE IN?",
    "Human Translation": "‎왜 사람을 더 뽑는 거지?"
  },
  {
    "Time": "15:24",
    "Subtitle": "THEY JUST TAKE UP SPACE AND SCREW UP THE CURVE.",
    "Human Translation": "‎왜 사람을 더 뽑는 거지? ‎자리만 차지하고 ‎진학률도 떨어지잖아"
  },
  {
    "Time": "15:26",
    "Subtitle": "WE DON'T NEED ANY NEW KIDS HERE.",
    "Human Translation": "‎여기 전학생은 필요 없어"
  },
  {
    "Time": "15:28",
    "Subtitle": "TOO LATE.",
    "Human Translation": "‎여기 전학생은 필요 없어 ‎진작 말하지"
  },
  {
    "Time": "15:33",
    "Subtitle": "James: HERE'S THE DINING ROOM, THE SCIENCE ROOM.",
    "Human Translation": "‎식당, 과학실, 강당은 여기야"
  },
  {
    "Time": "15:35",
    "Subtitle": "HERE'S YOUR LOCKER NUMBER, HERE'S YOUR SCHEDULE.",
    "Human Translation": "‎사물함 번호와 시간표야 ‎지도도 가져가"
  },
  {
    "Time": "15:38",
    "Subtitle": "HERE'S THE RULES OF THE SCHOOL AND THE CHILTON HONOR CODE.",
    "Human Translation": "‎칠튼 고등학교의 윤리규정이다"
  },
  {
    "Time": "15:41",
    "Subtitle": "HERE ARE THE WORDS TO THE SCHOOL SONG, WHICH MUST BE RECITED UPON DEMAND.",
    "Human Translation": "‎지적당할 때마다 부르는 ‎교가의 가사야"
  },
  {
    "Time": "15:45",
    "Subtitle": "THIS CAN HAPPEN ANYPLACE, ANYTIME.",
    "Human Translation": "‎언제 어디서든 불러야 해"
  },
  {
    "Time": "15:47",
    "Subtitle": "IF YOU DO IT IN LATIN, YOU GET EXTRA CREDIT. DO YOU HAVE ANY QUESTIONS?",
    "Human Translation": "‎라틴어로 부르면 추가점이 있다 ‎질문 있어?"
  },
  {
    "Time": "15:50",
    "Subtitle": "UH, NOT AT THE MOMENT. IF YOU DO, YOU CAN MAKE AN APPOINTMENT",
    "Human Translation": "‎- 지금은 없어요 ‎- 나중에 질문이 생기면"
  },
  {
    "Time": "15:53",
    "Subtitle": "TO SEE YOUR GUIDANCE COUNSELOR, MR. WINTERS.",
    "Human Translation": "‎윈터스 상담 선생님과 ‎시간 약속을 해"
  },
  {
    "Time": "15:55",
    "Subtitle": "HE HANDLES EVERYTHING BUT BULIMIA AND PREGNANCY.",
    "Human Translation": "‎윈터스 상담 선생님과 ‎시간 약속을 해 ‎질병과 임신을 제외한 ‎모든 상담을 하시지"
  },
  {
    "Time": "15:57",
    "Subtitle": "FOR THAT, YOU HAVE TO GO TO THE NURSE OR COACH RUBENS.",
    "Human Translation": "‎질병과 임신을 제외한 ‎모든 상담을 하시지 ‎그런 상황이 생길 땐 ‎양호실이나 루벤스 코치를 찾아"
  },
  {
    "Time": "16:00",
    "Subtitle": "WELCOME TO CHILTON.",
    "Human Translation": "‎그런 상황이 생길 땐 ‎양호실이나 루벤스 코치를 찾아 ‎칠튼에 잘 왔다"
  },
  {
    "Time": "16:12",
    "Subtitle": "I ALREADY HAD THE LONGEST DAY OF MY LIFE, AND IT'S ONLY 10:00. THERE'S NO COFFEE.",
    "Human Translation": "‎고된 하루였는데 아직도 ‎10시라니, 좋아 죽겠네요"
  },
  {
    "Time": "16:16",
    "Subtitle": "THAT'S NOT FUNNY.",
    "Human Translation": "‎- 커피는 없어요 ‎- 그럼 재밌어요?"
  },
  {
    "Time": "16:17",
    "Subtitle": "I CAN GIVE YOU HERBAL TEA.",
    "Human Translation": "‎허브차는 있어요"
  },
  {
    "Time": "16:18",
    "Subtitle": "THIS IS NOT AN HERBAL TEA MORNING. THIS IS A COFFEE MORNING.",
    "Human Translation": "‎오늘 아침엔 허브차 말고 ‎커피로 풀어야 해요"
  },
  {
    "Time": "16:21",
    "Subtitle": "EVERY MORNING FOR YOU IS A COFFEE MORNING.",
    "Human Translation": "‎매일 아침마다 커피잖아요"
  },
  {
    "Time": "16:23",
    "Subtitle": "THIS IS A JUMBO COFFEE MORNING. I NEED COFFEE IN AN I.V.",
    "Human Translation": "‎오늘은 점보 커피예요 ‎커피 링겔을 놔줘요"
  },
  {
    "Time": "16:26",
    "Subtitle": "I CAN GIVE YOU TEA AND A BALANCE BAR.",
    "Human Translation": "‎허브차와 초코바는 있어요"
  },
  {
    "Time": "16:28",
    "Subtitle": "PLEASE, PLEASE, PLEASE TELL ME YOU'RE KIDDING. I'M KIDDING.",
    "Human Translation": "‎제발 농담이라고 해줘요"
  },
  {
    "Time": "16:31",
    "Subtitle": "YOU'RE SICK.",
    "Human Translation": "‎- 농담이오 ‎- 짜증 나요"
  },
  {
    "Time": "16:32",
    "Subtitle": "YEP. YOU'RE A FIEND!",
    "Human Translation": "‎- 맞아요 ‎- 가학증 걸린 마귀!"
  },
  {
    "Time": "16:35",
    "Subtitle": "FOR HERE OR TO GO? TO GO, PLEASE.",
    "Human Translation": "‎우리 예쁜이"
  },
  {
    "Time": "16:36",
    "Subtitle": "YOU WANT TO KNOW WHAT THIS STUFF DOES",
    "Human Translation": "‎- 어디서 마실 거요? ‎- 갖고 갈래요 ‎커피가 중추신경에 미치는 ‎악영향은 압니까?"
  },
  {
    "Time": "16:38",
    "Subtitle": "TO YOUR NERVOUS SYSTEM?",
    "Human Translation": "‎커피가 중추신경에 미치는 ‎악영향은 압니까?"
  },
  {
    "Time": "16:40",
    "Subtitle": "DO YOU HAVE A CHART? BECAUSE I LOVE CHARTS. FORGET IT. KILL YOURSELF.",
    "Human Translation": "‎- 차트로 설명해 줘요 ‎- 됐소, 그냥 죽어요"
  },
  {
    "Time": "16:43",
    "Subtitle": "WHAT HAPPENED THIS MORNING THAT WAS SO AWFUL?",
    "Human Translation": "‎무슨 일이 있었기에 ‎끔찍한 아침이라는 거요?"
  },
  {
    "Time": "16:46",
    "Subtitle": "RORY STARTED CHILTON. REALLY?",
    "Human Translation": "‎- 로리가 칠튼에 입학했어요 ‎- 정말이오?"
  },
  {
    "Time": "16:49",
    "Subtitle": "YEAH.",
    "Human Translation": "‎네"
  },
  {
    "Time": "16:50",
    "Subtitle": "WHAT?",
    "Human Translation": "‎왜요?"
  },
  {
    "Time": "16:52",
    "Subtitle": "THAT'S HOW YOU DRESSED TO TAKE RORY TO CHILTON? THAT'S A FANCY SCHOOL.",
    "Human Translation": "‎그렇게 입고 학교에 갔어요? ‎거긴 수준이 높잖아요"
  },
  {
    "Time": "16:55",
    "Subtitle": "MY CLOTHES WERE AT THE CLEANERS. I HAD THE FUZZY CLOCK, AND IT DIDN'T PURR ON TIME. IT DIDN'T PURR?",
    "Human Translation": "‎옷은 다 세탁소에 있고 ‎시계도 가르랑대지 않았어요"
  },
  {
    "Time": "17:00",
    "Subtitle": "IT'S FUZZY. IT PURRS.",
    "Human Translation": "‎- 가르랑? ‎- 털이 달리면 그렇게 울어요"
  },
  {
    "Time": "17:02",
    "Subtitle": "NEVER MIND. I GOTTA GO.",
    "Human Translation": "‎됐어요, 전 그냥 갈래요"
  },
  {
    "Time": "17:04",
    "Subtitle": "I HAD A PLAN, DAMN IT. ME TOO. NEXT TIME YOU'RE GETTING TEA.",
    "Human Translation": "‎- 계획도 세워놨는데… ‎- 나도요, 다음엔 차를 주겠소"
  },
  {
    "Time": "17:15",
    "Subtitle": "VISUALIZE, LADIES.",
    "Human Translation": "‎머릿속에 떠올리렴"
  },
  {
    "Time": "17:17",
    "Subtitle": "IT'S A THANKSGIVING DAY PARADE. YOU'RE STANDING ON 5th AVENUE.",
    "Human Translation": "‎추수감사절 행진이야 ‎5번가에 서 있지"
  },
  {
    "Time": "17:21",
    "Subtitle": "THERE'S 100 BEAUTIFUL BOYS MARCHING IN PLACE BEHIND YOU,",
    "Human Translation": "‎너희 뒤엔 멋진 남자애들이 ‎백 명이나 따르고 있어"
  },
  {
    "Time": "17:24",
    "Subtitle": "AND THERE YOU ARE.",
    "Human Translation": "‎그 앞에 서는 거야"
  },
  {
    "Time": "17:26",
    "Subtitle": "YOU ARE OUT IN FRONT WITH YOUR FABULOUS LEGS AND YOUR PERFECT TUSH.",
    "Human Translation": "‎잘 빠진 다리와 엉덩이를 내밀고 ‎앞에 서는 거지"
  },
  {
    "Time": "17:30",
    "Subtitle": "YOUR BATON IS ON FIRE AND THE CROWD GOES NUTS!",
    "Human Translation": "‎지휘봉에 불이 붙고 ‎관중들은 소리를 질러!"
  },
  {
    "Time": "17:35",
    "Subtitle": "OKAY. COOKIE TIME.",
    "Human Translation": "‎그만, 간식 시간이다"
  },
  {
    "Time": "17:38",
    "Subtitle": "LORELAI, HI. HEY, PATTY.",
    "Human Translation": "‎- 로렐라이 왔어요? ‎- 안녕하세요, 패티"
  },
  {
    "Time": "17:40",
    "Subtitle": "ISN'T TODAY RORY'S FIRST DAY AT CHILTON?",
    "Human Translation": "‎로리가 칠튼에 가는 날이 ‎오늘 아닌가요?"
  },
  {
    "Time": "17:43",
    "Subtitle": "OH, YEAH, SHE'S THERE NOW. I JUST GOT THROUGH DROPPING HER OFF.",
    "Human Translation": "‎네, 방금 데려다주고 왔어요"
  },
  {
    "Time": "17:46",
    "Subtitle": "IS THAT WHAT YOU WORE?",
    "Human Translation": "‎그걸 입고 갔어요?"
  },
  {
    "Time": "17:47",
    "Subtitle": "OH, LOOK AT THE TIME. SEE YOU, PATTY. BYE.",
    "Human Translation": "‎- 시간이 벌써! 또 봐요 ‎- 잘 가요"
  },
  {
    "Time": "17:52",
    "Subtitle": "LADIES, WHAT DO I SEE? NAKED GIRLS.",
    "Human Translation": "‎얘들아, 왜 옷을 벗었어?"
  },
  {
    "Time": "17:54",
    "Subtitle": "NO, NO, KEEP THOSE LEOTARDS ON. THIS IS NOT BRAZIL.",
    "Human Translation": "‎레오타드를 입어라 ‎우린 선진국민이잖니"
  },
  {
    "Time": "18:41",
    "Subtitle": "HELLO? Lorelai?",
    "Human Translation": "‎- 여보세요? ‎- 로렐라이니?"
  },
  {
    "Time": "18:43",
    "Subtitle": "MOM?",
    "Human Translation": "‎엄마?"
  },
  {
    "Time": "18:45",
    "Subtitle": "I'M GOING SHOPPING THIS AFTERNOON,",
    "Human Translation": "‎다행히 있었구나 ‎오후에 쇼핑을 갈 건데"
  },
  {
    "Time": "18:46",
    "Subtitle": "AND I THOUGHT I'D PICK UP A FEW THINGS FOR RORY.",
    "Human Translation": "‎다행히 있었구나 ‎오후에 쇼핑을 갈 건데 ‎로리 물건을 살까 해서 걸었다"
  },
  {
    "Time": "18:48",
    "Subtitle": "Like what?",
    "Human Translation": "‎로리 물건을 살까 해서 걸었다 ‎- 어떤 걸요? ‎- 교복을 몇 벌쯤"
  },
  {
    "Time": "18:50",
    "Subtitle": "A COUPLE OF EXTRA SKIRTS AND TOPS FOR SCHOOL.",
    "Human Translation": "‎- 어떤 걸요? ‎- 교복을 몇 벌쯤"
  },
  {
    "Time": "18:53",
    "Subtitle": "OKAY. I ALREADY TOOK CARE OF THAT, MOM. I GOT HER TWO SKIRTS AND A BUNCH OF TOPS.",
    "Human Translation": "‎그건 다 구해놨어요 ‎치마 두 개에 셔츠도 많아요"
  },
  {
    "Time": "18:57",
    "Subtitle": "BUT THERE ARE FIVE DAYS IN A SCHOOL WEEK.",
    "Human Translation": "‎학교 가는 날은 ‎일주일에 5일이잖아"
  },
  {
    "Time": "18:59",
    "Subtitle": "REALLY? ARE YOU SURE? BECAUSE MY \"DAYS OF THE WEEK\" UNDERWEAR ONLY GO TO THURSDAY.",
    "Human Translation": "‎그래요? 내 일주일용 속옷은 ‎4일이면 더러워지던데"
  },
  {
    "Time": "19:02",
    "Subtitle": "IS THAT A JOKE?",
    "Human Translation": "‎- 혹시 농담이니? ‎- 치마는 둘이면 충분해요"
  },
  {
    "Time": "19:04",
    "Subtitle": "TWO SKIRTS ARE FINE. DON'T BOTHER.",
    "Human Translation": "‎- 혹시 농담이니? ‎- 치마는 둘이면 충분해요 ‎- 넌 대체 알 수가 없구나 ‎- 정말 살 필요 없어요"
  },
  {
    "Time": "19:06",
    "Subtitle": "What if she gets one dirty?",
    "Human Translation": "‎- 넌 대체 알 수가 없구나 ‎- 정말 살 필요 없어요 ‎하나가 더러워지면?"
  },
  {
    "Time": "19:08",
    "Subtitle": "WELL, THEN, SHE'LL WEAR THE OTHER ONE.",
    "Human Translation": "‎하나가 더러워지면? ‎- 다른 걸 입죠 ‎- 두 개가 다 더러워지면?"
  },
  {
    "Time": "19:11",
    "Subtitle": "WHAT IF SHE GETS THEM BOTH DIRTY?",
    "Human Translation": "‎- 다른 걸 입죠 ‎- 두 개가 다 더러워지면?"
  },
  {
    "Time": "19:12",
    "Subtitle": "WE'LL USE THIS NEWFANGLED THING CALLED A WASHING MACHINE.",
    "Human Translation": "‎최신 발명품인 ‎세탁기라는 걸 써보죠"
  },
  {
    "Time": "19:15",
    "Subtitle": "THE TOWN JUST CHIPPED IN AND BOUGHT ONE. My turn's Tuesday.",
    "Human Translation": "‎마을 공동으로 한 대 샀는데 ‎화요일이 제 차례거든요"
  },
  {
    "Time": "19:17",
    "Subtitle": "WHAT ABOUT SOCKS? CHILTON HAS THESE SPECIAL LOGO SOCKS.",
    "Human Translation": "‎그럼 양말은 어때? ‎칠튼 로고를 단 양말도 있어"
  },
  {
    "Time": "19:21",
    "Subtitle": "RORY SHOULD HAVE THEM. Mom, please.",
    "Human Translation": "‎- 로리도 그걸 신어야지 ‎- 그만해요"
  },
  {
    "Time": "19:23",
    "Subtitle": "AND WHAT ABOUT THE SCHOOL SWEATER? SHE MIGHT LIKE THAT.",
    "Human Translation": "‎학교 스웨터는 어때? ‎로리도 좋아할 거다"
  },
  {
    "Time": "19:25",
    "Subtitle": "AND THERE'S A SWEATER VEST AND THE BOOK BAG.",
    "Human Translation": "‎조끼와 책가방도 있어"
  },
  {
    "Time": "19:28",
    "Subtitle": "ARE YOU GETTING A CUT OF THE MERCHANDISING?",
    "Human Translation": "‎가게에서 소개비라도 받아요?"
  },
  {
    "Time": "19:29",
    "Subtitle": "RORY SHOULD HAVE THESE THINGS. SHE'LL BE THE ONLY ONE WHO DOESN'T.",
    "Human Translation": "‎로리도 있어야지 ‎혼자만 없으면 쓰겠니?"
  },
  {
    "Time": "19:32",
    "Subtitle": "SHE'LL LIVE.",
    "Human Translation": "‎그래도 살아요"
  },
  {
    "Time": "19:33",
    "Subtitle": "I'M AT LEAST GETTING HER THE CHILTON COAT. IS SHE A SIZE 6?",
    "Human Translation": "‎적어도 칠튼 코트는 살 거야 ‎사이즈가 6이니?"
  },
  {
    "Time": "19:36",
    "Subtitle": "Mom, please.",
    "Human Translation": "‎엄마, 그만해요"
  },
  {
    "Time": "19:38",
    "Subtitle": "THIS IS A SIMPLE QUESTION, LORELAI.",
    "Human Translation": "‎간단한 질문이잖아, 로렐라이"
  },
  {
    "Time": "19:40",
    "Subtitle": "SHE'S A 6, BUT I'D GET AN 8 IN CASE SHE GROWS.",
    "Human Translation": "‎지금은 6이지만 ‎클 때를 대비해 8을 사세요"
  },
  {
    "Time": "19:43",
    "Subtitle": "If she grows, I'LL BUY ANOTHER.",
    "Human Translation": "‎키가 크면 하나 더 사면 돼"
  },
  {
    "Time": "19:45",
    "Subtitle": "OKAY. WELL, THEN, A 6 IS GREAT. I GOTTA GO, MOM. BYE.",
    "Human Translation": "‎그럼 6으로 해요 ‎전 가야 해요, 끊어요"
  },
  {
    "Time": "19:49",
    "Subtitle": "AND WHILE FRENCH CULTURE WAS THE DOMINANT OUTSIDE CULTURAL INFLUENCE,",
    "Human Translation": "‎외국에 영향을 끼친 건 ‎프랑스가 지배적이었지"
  },
  {
    "Time": "19:54",
    "Subtitle": "ESPECIALLY FOR RUSSIA'S MONEYED CLASS,",
    "Human Translation": "‎특히 러시아의 부유층에게 말이다"
  },
  {
    "Time": "19:56",
    "Subtitle": "ENGLISH CULTURE ALSO HAD ITS IMPACT.",
    "Human Translation": "‎하지만 영국 문화도 전파됐다"
  },
  {
    "Time": "19:58",
    "Subtitle": "TOLSTOY'S FAVORITE AUTHOR, FOR INSTANCE, WAS...",
    "Human Translation": "‎예를 들어 톨스토이가 ‎가장 좋아하는 작가는…"
  },
  {
    "Time": "20:01",
    "Subtitle": "DICKENS.",
    "Human Translation": "‎디킨스요"
  },
  {
    "Time": "20:02",
    "Subtitle": "YES. AND LAST WEEK, WE COVERED DOSTOEVSKI'S MAIN AUTHORIAL INFLUENCES.",
    "Human Translation": "‎맞다, 지난주에 배웠듯이 ‎도스토예프스키의 문체는…"
  },
  {
    "Time": "20:06",
    "Subtitle": "GEORGE SAND AND BALZAC.",
    "Human Translation": "‎- 조르주 상드와 발자크요 ‎- 잘했다"
  },
  {
    "Time": "20:09",
    "Subtitle": "GOOD. AS TOLSTOY COMMENCED WRITING",
    "Human Translation": "‎- 조르주 상드와 발자크요 ‎- 잘했다 ‎톨스토이는 '전쟁과 평화' 와 ‎'안나 카레리나' 를 집필하며"
  },
  {
    "Time": "20:11",
    "Subtitle": "BOTH \"WAR AND PEACE\" AND \"ANNA KARENINA,\"",
    "Human Translation": "‎톨스토이는 '전쟁과 평화' 와 ‎'안나 카레리나' 를 집필하며"
  },
  {
    "Time": "20:13",
    "Subtitle": "COUNT LEO WOULD TURN TO... \"DAVID COPPERFIELD.\"",
    "Human Translation": "‎- 영감을 얻은 건… ‎- '데이빗 코퍼필드' 죠"
  },
  {
    "Time": "20:17",
    "Subtitle": "CORRECT. HE WOULD TURN TO \"DAVID COPPERFIELD\" FOR INSPIRATION.",
    "Human Translation": "‎맞다, '데이빗 코퍼필드' 에서 ‎영감을 얻지"
  },
  {
    "Time": "20:21",
    "Subtitle": "AH, MR. DUGRAY. SIR.",
    "Human Translation": "‎- 더그레이 군 ‎- 네"
  },
  {
    "Time": "20:23",
    "Subtitle": "NICE TO HAVE YOU BACK.",
    "Human Translation": "‎잘 돌아왔네"
  },
  {
    "Time": "20:25",
    "Subtitle": "I HOPE YOUR GRANDFATHER'S BETTER. MUCH BETTER, SIR.",
    "Human Translation": "‎- 할아버지가 쾌차하셨나? ‎- 많이 나으셨어요"
  },
  {
    "Time": "20:28",
    "Subtitle": "GOOD. TAKE YOUR SEAT, PLEASE.",
    "Human Translation": "‎좋아, 가서 앉게"
  },
  {
    "Time": "20:30",
    "Subtitle": "\"GREAT EXPECTATIONS,\" \"A TALE OF TWO CITIES,\"",
    "Human Translation": "‎'위대한 유산', '두 도시 이야기' ‎'리틀 도리트'"
  },
  {
    "Time": "20:33",
    "Subtitle": "\"LITTLE DORRIT\" --",
    "Human Translation": "‎'위대한 유산', '두 도시 이야기' ‎'리틀 도리트' ‎모두 톨스토이에게 ‎큰 영향을 끼쳤다"
  },
  {
    "Time": "20:36",
    "Subtitle": "ALL MAJOR INFLUENCES ON LEO TOLSTOY.",
    "Human Translation": "‎모두 톨스토이에게 ‎큰 영향을 끼쳤다"
  },
  {
    "Time": "20:39",
    "Subtitle": "Who's that?",
    "Human Translation": "‎내일은…"
  },
  {
    "Time": "20:41",
    "Subtitle": "New girl.",
    "Human Translation": "‎- 저건 누구야? ‎- 전학생"
  },
  {
    "Time": "20:42",
    "Subtitle": "...OF THESE TWO LITERARY MASTERS, TOLSTOY AND DICKENS.",
    "Human Translation": "‎문학의 대가인 톨스토이와 ‎디킨스의 문체에 대해 배우겠다"
  },
  {
    "Time": "20:46",
    "Subtitle": "CLASS DISMISSED.",
    "Human Translation": "‎오늘 수업은 여기까지"
  },
  {
    "Time": "20:51",
    "Subtitle": "LOOKS LIKE WE GOT OURSELVES A MARY.",
    "Human Translation": "‎메리가 납신 것 같군"
  },
  {
    "Time": "20:54",
    "Subtitle": "MISS, UH, GILMORE, COULD YOU COME UP HERE PLEASE?",
    "Human Translation": "‎길모어 양, 앞으로 나오게"
  },
  {
    "Time": "20:58",
    "Subtitle": "THESE ARE LAST WEEK'S STUDY MATERIALS.",
    "Human Translation": "‎지난주 수업 자료야"
  },
  {
    "Time": "21:00",
    "Subtitle": "THERE'LL BE A TEST ON THEM TOMORROW,",
    "Human Translation": "‎지난주 수업 자료야 ‎내일 시험이 있지만 ‎자넨 전학생이니"
  },
  {
    "Time": "21:03",
    "Subtitle": "BUT SINCE YOU'RE NEW,",
    "Human Translation": "‎내일 시험이 있지만 ‎자넨 전학생이니"
  },
  {
    "Time": "21:04",
    "Subtitle": "YOU CAN TAKE A MAKEUP ON MONDAY. WILL THAT BE SUFFICIENT TIME?",
    "Human Translation": "‎월요일에 보충 시험을 보게 ‎시간은 충분하겠나?"
  },
  {
    "Time": "21:08",
    "Subtitle": "MONDAY? SURE, THAT'S FINE.",
    "Human Translation": "‎월요일요? ‎네, 괜찮아요"
  },
  {
    "Time": "21:10",
    "Subtitle": "THAT'S JUST AN OVERVIEW.",
    "Human Translation": "‎좋아, 그건 개요일 뿐이다"
  },
  {
    "Time": "21:11",
    "Subtitle": "IT WILL BE VERY HELPFUL TO YOU",
    "Human Translation": "‎좋아, 그건 개요일 뿐이다 ‎다른 학생들의 노트를 ‎빌리면 도움이 될 거야"
  },
  {
    "Time": "21:13",
    "Subtitle": "TO BORROW ONE OF THE OTHER STUDENT'S PERSONAL NOTES.",
    "Human Translation": "‎다른 학생들의 노트를 ‎빌리면 도움이 될 거야"
  },
  {
    "Time": "21:15",
    "Subtitle": "THEY TEND TO BE MORE DETAILED.",
    "Human Translation": "‎노트가 더욱 자세하니까"
  },
  {
    "Time": "21:16",
    "Subtitle": "MORE DETAILED THAN THIS?",
    "Human Translation": "‎이거보다 더 자세해요?"
  },
  {
    "Time": "21:18",
    "Subtitle": "IT SEEMS DAUNTING RIGHT NOW, I KNOW.",
    "Human Translation": "‎물론 지금은 놀랍겠지"
  },
  {
    "Time": "21:20",
    "Subtitle": "NO, NO. IT'S OKAY. IT'LL BE FINE.",
    "Human Translation": "‎하지만 곧 익숙해질 거에요"
  },
  {
    "Time": "21:24",
    "Subtitle": "REMEMBER TO GET THOSE NOTES. THEY'LL BE A LIFESAVER.",
    "Human Translation": "‎노트를 잊지 말아라 ‎큰 도움이 될 거야"
  },
  {
    "Time": "21:29",
    "Subtitle": "I'M PARIS.",
    "Human Translation": "‎난 패리스야"
  },
  {
    "Time": "21:31",
    "Subtitle": "I DIDN'T SEE YOU THERE. WHERE'D YOU COME FROM?",
    "Human Translation": "‎서 있는 줄 몰랐네 ‎어디서 왔어?"
  },
  {
    "Time": "21:34",
    "Subtitle": "I KNOW WHO YOU ARE, TOO.",
    "Human Translation": "‎난 네 정체도 알아"
  },
  {
    "Time": "21:35",
    "Subtitle": "LORELAI GILMORE FROM STARS HOLLOW.",
    "Human Translation": "‎스타즈 할로우에서 온 ‎로렐라이 길모어지"
  },
  {
    "Time": "21:37",
    "Subtitle": "YOU CAN CALL ME RORY.",
    "Human Translation": "‎로리라고 불러도 돼"
  },
  {
    "Time": "21:39",
    "Subtitle": "ARE YOU GOING OUT FOR \"THE FRANKLIN\"? THE WHAT?",
    "Human Translation": "‎- '프랭클린' 에 지원할 거야? ‎- 뭐라고?"
  },
  {
    "Time": "21:41",
    "Subtitle": "NICE INNOCENT ACT.",
    "Human Translation": "‎연기가 서투르네 ‎연극반은 아니니 다행이야"
  },
  {
    "Time": "21:43",
    "Subtitle": "AT LEAST I KNOW YOU'RE NOT GOING OUT FOR DRAMA CLUB.",
    "Human Translation": "‎연극반은 아니니 다행이야 ‎무슨 소리야?"
  },
  {
    "Time": "21:45",
    "Subtitle": "\"THE FRANKLIN\" -- THE SCHOOL PAPER --",
    "Human Translation": "‎무슨 소리야? ‎학교신문사 '프랭클린' 에 ‎지원할 거냐고?"
  },
  {
    "Time": "21:47",
    "Subtitle": "ARE YOU GOING OUT FOR IT?",
    "Human Translation": "‎학교신문사 '프랭클린' 에 ‎지원할 거냐고?"
  },
  {
    "Time": "21:49",
    "Subtitle": "I HAVE TO FIND MY LOCKER FIRST.",
    "Human Translation": "‎글쎄, 먼저 사물함을 찾아야 해"
  },
  {
    "Time": "21:51",
    "Subtitle": "I'M GONNA BE EDITOR NEXT YEAR.",
    "Human Translation": "‎글쎄, 먼저 사물함을 찾아야 해 ‎- 난 내년에 편집장이 될 거야 ‎- 좋겠네"
  },
  {
    "Time": "21:52",
    "Subtitle": "WELL, GOOD FOR YOU.",
    "Human Translation": "‎- 난 내년에 편집장이 될 거야 ‎- 좋겠네"
  },
  {
    "Time": "21:54",
    "Subtitle": "I'M ALSO THE TOP OF THE CLASS,",
    "Human Translation": "‎- 난 내년에 편집장이 될 거야 ‎- 좋겠네 ‎또 난 전교 일등이고"
  },
  {
    "Time": "21:56",
    "Subtitle": "AND I INTEND TO BE VALEDICTORIAN WHEN I GRADUATE.",
    "Human Translation": "‎졸업식에서 졸업생 대표로 설 거야"
  },
  {
    "Time": "21:58",
    "Subtitle": "OKAY. I'M GOING NOW.",
    "Human Translation": "‎그럼 난 갈게"
  },
  {
    "Time": "22:00",
    "Subtitle": "YOU'LL NEVER CATCH UP. YOU'LL NEVER BEAT ME.",
    "Human Translation": "‎넌 절대 못 따라와 ‎날 이길 수 없어"
  },
  {
    "Time": "22:02",
    "Subtitle": "THIS SCHOOL IS MY DOMAIN, AND \"THE FRANKLIN\" IS MY DOMAIN.",
    "Human Translation": "‎이 학교는 내 영역이고 ‎'프랭클린' 도 내 영역이야"
  },
  {
    "Time": "22:05",
    "Subtitle": "AND DON'T YOU EVER FORGET THAT.",
    "Human Translation": "‎절대 그걸 잊지 마"
  },
  {
    "Time": "22:11",
    "Subtitle": "I GUESS YOU'RE NOT GONNA LET ME BORROW YOUR NOTES, HUH?",
    "Human Translation": "‎노트를 빌려주진 않겠구나"
  },
  {
    "Time": "22:22",
    "Subtitle": "THEY'RE SMALLER THAN THE LAST BATCH.",
    "Human Translation": "‎아까 그 묶음보다 작네요"
  },
  {
    "Time": "22:23",
    "Subtitle": "NO, THEY'RE NOT.",
    "Human Translation": "‎아니에요"
  },
  {
    "Time": "22:25",
    "Subtitle": "SMALLER MEANS WATERY. NO GOOD PEACH TASTE.",
    "Human Translation": "‎아니에요 ‎작으면 물러져서 ‎복숭아 맛이 안 좋죠"
  },
  {
    "Time": "22:28",
    "Subtitle": "NO, THERE'S PLENTY OF PEACH TASTE",
    "Human Translation": "‎아뇨, 그 안의 복숭아는"
  },
  {
    "Time": "22:30",
    "Subtitle": "BEING AS THEY'RE, YOU KNOW, PEACHES.",
    "Human Translation": "‎대부분 복숭아 맛이에요"
  },
  {
    "Time": "22:33",
    "Subtitle": "WHAT ABOUT THE ONES ON THE BOTTOM?",
    "Human Translation": "‎- 바닥에 있는 건 어때요? ‎- 미치겠군"
  },
  {
    "Time": "22:34",
    "Subtitle": "OH, GREAT. BE SURE TO CHECK THEM ALL.",
    "Human Translation": "‎- 바닥에 있는 건 어때요? ‎- 미치겠군 ‎전부 다 검사해요 ‎바로 그거예요"
  },
  {
    "Time": "22:37",
    "Subtitle": "THAT'S IT.",
    "Human Translation": "‎전부 다 검사해요 ‎바로 그거예요"
  },
  {
    "Time": "22:39",
    "Subtitle": "GIVE EVERY LAST ONE OF THEM A NICE GOOD SQUEEZE.",
    "Human Translation": "‎마지막 하나까지 ‎몽땅 다 짜요"
  },
  {
    "Time": "22:41",
    "Subtitle": "YOU WOULDN'T WANT TO ACTUALLY LEAVE ME ONE THAT I COULD SELL TO SOMEBODY ELSE.",
    "Human Translation": "‎다른 사람에게 팔 복숭아를 ‎남길 순 없겠죠"
  },
  {
    "Time": "22:45",
    "Subtitle": "WAIT A MINUTE. YOU MISSED ONE. I'M NOT GONNA TELL YOU WHICH ONE IT IS.",
    "Human Translation": "‎잠깐, 하나 놓쳤네요 ‎어떤 건지는 말 안 할 겁니다"
  },
  {
    "Time": "22:48",
    "Subtitle": "I'M JUST GONNA LET YOUR IMPECCABLY GOOD RADAR -- THERE IT IS! YOU GOT IT!",
    "Human Translation": "‎그 완벽한 레이더로 찾을… ‎드디어 찾았군요!"
  },
  {
    "Time": "22:52",
    "Subtitle": "OKAY.",
    "Human Translation": "‎이것 봐"
  },
  {
    "Time": "22:53",
    "Subtitle": "I LOOK GREAT, RIGHT?",
    "Human Translation": "‎- 나 괜찮지? ‎- 응"
  },
  {
    "Time": "22:56",
    "Subtitle": "YES.",
    "Human Translation": "‎- 나 괜찮지? ‎- 응 ‎오늘 아침 내 모습은 ‎이래야 정상이었어"
  },
  {
    "Time": "22:57",
    "Subtitle": "THIS IS HOW I WAS SUPPOSED TO LOOK.",
    "Human Translation": "‎오늘 아침 내 모습은 ‎이래야 정상이었어"
  },
  {
    "Time": "23:00",
    "Subtitle": "GOOD MORNING, JACKSON. TODAY WAS RORY'S FIRST DAY.",
    "Human Translation": "‎- 안녕하세요, 잭슨 ‎- 맞다, 오늘이 로리의 첫날이지"
  },
  {
    "Time": "23:03",
    "Subtitle": "I WAS SUPPOSED TO LOOK FABULOUS",
    "Human Translation": "‎그래, 나도 차려 입으려고 했어"
  },
  {
    "Time": "23:05",
    "Subtitle": "AND NOT LIKE I'D BEEN UP ALL NIGHT PLAYING QUARTERS.",
    "Human Translation": "‎밤새 취한 모습이 아니었다고"
  },
  {
    "Time": "23:07",
    "Subtitle": "NOBODY CARES HOW YOU LOOKED. EVERYBODY CARED.",
    "Human Translation": "‎- 네 모습을 누가 신경 써? ‎- 다들 신경 썼어"
  },
  {
    "Time": "23:09",
    "Subtitle": "WHO? THE OTHER MOMS,",
    "Human Translation": "‎- 누가? ‎- 다른 학부모에 교장선생님…"
  },
  {
    "Time": "23:11",
    "Subtitle": "THE HEADMASTER, MY MOM, LUKE, MISS PATTY, THE NEW FIRE CHIEF WITH THE TINY HEAD.",
    "Human Translation": "‎엄마, 루크, 패티와 ‎머리 작은 새 소방관까지"
  },
  {
    "Time": "23:15",
    "Subtitle": "TASTE THIS.",
    "Human Translation": "‎엄마, 루크, 패티와 ‎머리 작은 새 소방관까지 ‎맛을 봐"
  },
  {
    "Time": "23:19",
    "Subtitle": "A LITTLE WATERY.",
    "Human Translation": "‎좀 물렀네"
  },
  {
    "Time": "23:21",
    "Subtitle": "OH! NOW, YOU PLANNED THIS.",
    "Human Translation": "‎둘이 짠 거잖아요"
  },
  {
    "Time": "23:22",
    "Subtitle": "DID YOU SAY SOMETHING ABOUT YOUR MOTHER?",
    "Human Translation": "‎- 엄마 얘기도 했지? ‎- 응"
  },
  {
    "Time": "23:25",
    "Subtitle": "I WALKED INTO THE HEADMASTER'S OFFICE, AND THERE SHE WAS.",
    "Human Translation": "‎교장실에 들어갔더니 ‎거기 계시잖아"
  },
  {
    "Time": "23:29",
    "Subtitle": "REALLY? WHY?",
    "Human Translation": "‎정말? 왜? ‎내가 늦잠 자고 옷도 촌스럽게 ‎입을 줄 알고 놀리려고 왔겠지"
  },
  {
    "Time": "23:30",
    "Subtitle": "SHE KNEW I'D WAKE UP LATE AND HUMILIATE MYSELF. WOW, SHE'S GOOD.",
    "Human Translation": "‎내가 늦잠 자고 옷도 촌스럽게 ‎입을 줄 알고 놀리려고 왔겠지"
  },
  {
    "Time": "23:34",
    "Subtitle": "SHE'S THE BEST.",
    "Human Translation": "‎- 실력 좋으시네 ‎- 그 방면엔 최고야"
  },
  {
    "Time": "23:35",
    "Subtitle": "OH, I WOULD LOVE TO KNOW WHAT YOU'RE DOING.",
    "Human Translation": "‎뭐 하는지 궁금해 죽겠네요"
  },
  {
    "Time": "23:38",
    "Subtitle": "THEY'RE ROLLING DIFFERENTLY, TOO.",
    "Human Translation": "‎뭐 하는지 궁금해 죽겠네요 ‎- 구르는 것도 다르네요 ‎- 너무 물러서 그렇겠죠"
  },
  {
    "Time": "23:40",
    "Subtitle": "BECAUSE OF THE EXTRA WATER.",
    "Human Translation": "‎- 구르는 것도 다르네요 ‎- 너무 물러서 그렇겠죠"
  },
  {
    "Time": "23:41",
    "Subtitle": "EXACTLY. MAKES PERFECT SENSE.",
    "Human Translation": "‎- 맞아요 ‎- 너무 상식적이네요"
  },
  {
    "Time": "23:44",
    "Subtitle": "I WOULD IGNORE THOSE WOMEN,",
    "Human Translation": "‎그 여자들은 잊어"
  },
  {
    "Time": "23:45",
    "Subtitle": "BECAUSE THE ONLY THING THAT MATTERS",
    "Human Translation": "‎중요한 건 로리가 드디어 ‎그 학교에 입학했다는 거니까"
  },
  {
    "Time": "23:47",
    "Subtitle": "IS THAT RORY GOT IN TO THAT GREAT SCHOOL.",
    "Human Translation": "‎중요한 건 로리가 드디어 ‎그 학교에 입학했다는 거니까 ‎알아, 교복이 너무 잘 어울렸어 ‎로리도 좋아하더라"
  },
  {
    "Time": "23:50",
    "Subtitle": "SHE LOOKED SO AMAZING IN HER UNIFORM. SHE WAS SO EXCITED.",
    "Human Translation": "‎알아, 교복이 너무 잘 어울렸어 ‎로리도 좋아하더라"
  },
  {
    "Time": "23:54",
    "Subtitle": "I JUST ADMIRE HER SO MUCH, JUMPING INTO A NEW SCHOOL.",
    "Human Translation": "‎전학을 기다리다니 ‎정말 내 딸이 존경스러워"
  },
  {
    "Time": "23:57",
    "Subtitle": "SHE'S MY HERO. MINE TOO.",
    "Human Translation": "‎- 내 영웅이야 ‎- 내게도 그래"
  },
  {
    "Time": "23:59",
    "Subtitle": "OH, YEAH, SIGN ME UP.",
    "Human Translation": "‎네, 저도 그래요 ‎수키, 복숭아 결제요"
  },
  {
    "Time": "24:01",
    "Subtitle": "SOOKIE, THE PEACHES, PLEASE.",
    "Human Translation": "‎수키, 복숭아 결제요"
  },
  {
    "Time": "24:03",
    "Subtitle": "[ French accent ] EXCUSE ME. THERE'S A PHONE CALL FOR YOU.",
    "Human Translation": "‎실례합니다만 전화가 왔어요"
  },
  {
    "Time": "24:07",
    "Subtitle": "IF I'M TO FETCH YOU LIKE A DOG, I'D LIKE A COOKIE AND A RAISE.",
    "Human Translation": "‎날 애완견처럼 대하려면 ‎과자나 월급 인상을 해줘요"
  },
  {
    "Time": "24:10",
    "Subtitle": "THANKS FOR THE PEACH.",
    "Human Translation": "‎날 애완견처럼 대하려면 ‎과자나 월급 인상을 해줘요 ‎복숭아 고마워요"
  },
  {
    "Time": "24:15",
    "Subtitle": "THIS WILL BE ABSOLUTELY WONDERFUL.",
    "Human Translation": "‎아주 즐거울 거예요"
  },
  {
    "Time": "24:17",
    "Subtitle": "THERE ARE SUPPOSED TO BE DARLING SHOPS",
    "Human Translation": "‎아주 즐거울 거예요 ‎이 거리엔 좋은 가게가 많거든요"
  },
  {
    "Time": "24:20",
    "Subtitle": "ALL UP AND DOWN THIS STREET.",
    "Human Translation": "‎이 거리엔 좋은 가게가 많거든요"
  },
  {
    "Time": "24:21",
    "Subtitle": "OH, EXCUSE ME, SIR. CAN YOU TELL ME WHERE WE CAN FIND THE BEST ANTIQUES?",
    "Human Translation": "‎실례합니다, 골동품이 ‎많은 곳이 어디죠?"
  },
  {
    "Time": "24:26",
    "Subtitle": "AT YOUR HOUSE, I'D GUESS.",
    "Human Translation": "‎손님 집에 많겠죠"
  },
  {
    "Time": "24:28",
    "Subtitle": "MOM, DID I GIVE YOU THIS NUMBER? BECAUSE I DON'T REMEMBER GIVING YOU THIS NUMBER.",
    "Human Translation": "‎엄마, 제가 여기 번호를 줬나요? ‎전혀 그런 기억이 없거든요"
  },
  {
    "Time": "24:32",
    "Subtitle": "YEAH, WELL, I MUST BE LOSING MY MIND.",
    "Human Translation": "‎제가 제정신이 아닌가 보죠 ‎무슨 일로…"
  },
  {
    "Time": "24:34",
    "Subtitle": "WHAT CAN I, UH... I'M SORRY, MOM.",
    "Human Translation": "‎제가 제정신이 아닌가 보죠 ‎무슨 일로… ‎죄송해요, 엄마 ‎잠깐만 기다려요"
  },
  {
    "Time": "24:35",
    "Subtitle": "CAN YOU HOLD ON ONE SECOND?",
    "Human Translation": "‎죄송해요, 엄마 ‎잠깐만 기다려요"
  },
  {
    "Time": "24:36",
    "Subtitle": "UM, DRELLA...",
    "Human Translation": "‎죄송해요, 엄마 ‎잠깐만 기다려요 ‎드렐라, 소리 좀 낮춰 줄래요?"
  },
  {
    "Time": "24:38",
    "Subtitle": "COULD YOU JUST TAKE IT DOWN JUST A NOTCH?",
    "Human Translation": "‎드렐라, 소리 좀 낮춰 줄래요?"
  },
  {
    "Time": "24:40",
    "Subtitle": "THANKS. OKAY, I'M BACK.",
    "Human Translation": "‎고마워요 ‎이제 말씀하세요"
  },
  {
    "Time": "24:43",
    "Subtitle": "I WANTED YOU TO KNOW THAT I JUST BOUGHT A PARKING SPACE FOR RORY AT CHILTON.",
    "Human Translation": "‎칠튼에 로리의 주차 자리를 ‎샀다는 걸 알려주려고 연락했다"
  },
  {
    "Time": "24:47",
    "Subtitle": "YOU WHAT? THEY ARE VERY HARD TO COME BY,",
    "Human Translation": "‎- 뭘 어쨌다고요? ‎- 잡아내기 힘든 자리야"
  },
  {
    "Time": "24:50",
    "Subtitle": "BUT I PULLED A FEW STRINGS AND IT'S ALL HERS. MOM, RORY DOESN'T HAVE A CAR.",
    "Human Translation": "‎- 엄마가 힘 좀 썼지 ‎- 로리는 차가 없어요"
  },
  {
    "Time": "24:53",
    "Subtitle": "NO, BUT SHE'S GOT A BIRTHDAY COMING UP SOON.",
    "Human Translation": "‎그래, 하지만 곧 생일이잖니"
  },
  {
    "Time": "24:55",
    "Subtitle": "[ DRELLA PLAYING LOUDLY ] OKAY, HOLD ON A SECOND.",
    "Human Translation": "‎잠깐 기다려요"
  },
  {
    "Time": "24:57",
    "Subtitle": "UM, DRELLA. DRELLA! PLEASE! A LITTLE SOFTER.",
    "Human Translation": "‎드렐라, 소리를 조금만 낮춰요"
  },
  {
    "Time": "25:02",
    "Subtitle": "HEY, DO I LOOK LIKE I GOT PANASONIC STAMPED ON MY ASS?",
    "Human Translation": "‎내가 카세트로 보여요?"
  },
  {
    "Time": "25:06",
    "Subtitle": "MOM, YOU ARE NOT BUYING RORY A CAR.",
    "Human Translation": "‎엄마, 차 선물은 안 돼요"
  },
  {
    "Time": "25:08",
    "Subtitle": "WHY NOT? SHE'S A SMART GIRL. SHE'S RESPONSIBLE.",
    "Human Translation": "‎왜 안 돼? ‎똑똑하고 책임감도 있잖니"
  },
  {
    "Time": "25:10",
    "Subtitle": "She doesn't need one. SHE NEEDS TO HAVE A WAY TO GET AROUND,",
    "Human Translation": "‎- 필요가 없으니까요 ‎- 차를 탈 일이 많잖니"
  },
  {
    "Time": "25:13",
    "Subtitle": "TO GET TO SCHOOL. SHE'LL BE TAKING THE BUS.",
    "Human Translation": "‎- 학교도 가야 하고 ‎- 버스를 타면 돼요"
  },
  {
    "Time": "25:16",
    "Subtitle": "I know. I hate that she takes the bus.",
    "Human Translation": "‎나도 들었다 ‎버스를 탄다니 끔찍하지"
  },
  {
    "Time": "25:17",
    "Subtitle": "DRUG DEALERS TAKE THE BUS.",
    "Human Translation": "‎버스는 마약쟁이나 타는 거야"
  },
  {
    "Time": "25:19",
    "Subtitle": "YOU KNOW WHAT, MOM? I GOTTA GO.",
    "Human Translation": "‎죄송하지만 전 바빠요"
  },
  {
    "Time": "25:20",
    "Subtitle": "FINE. WE'LL DISCUSS THIS AT A LATER DATE.",
    "Human Translation": "‎좋아, 나중에 다시 얘기하자"
  },
  {
    "Time": "25:23",
    "Subtitle": "OKAY. BYE.",
    "Human Translation": "‎네, 끊어요"
  },
  {
    "Time": "25:31",
    "Subtitle": "HEY, MARY.",
    "Human Translation": "‎메리"
  },
  {
    "Time": "25:34",
    "Subtitle": "ME? YEAH, YOU.",
    "Human Translation": "‎- 나? ‎- 그래, 너"
  },
  {
    "Time": "25:36",
    "Subtitle": "MY NAME IS RORY. I'M TRISTIN.",
    "Human Translation": "‎- 내 이름은 로리야 ‎- 난 트리스틴이야"
  },
  {
    "Time": "25:38",
    "Subtitle": "HI. SO, YOU NEW?",
    "Human Translation": "‎- 안녕 ‎- 전학생이라고?"
  },
  {
    "Time": "25:40",
    "Subtitle": "YEAH. FIRST DAY. REMMY'S CLASS IS ROUGH.",
    "Human Translation": "‎- 그래, 첫날이야 ‎- 레미 선생님 수업은 힘들지"
  },
  {
    "Time": "25:43",
    "Subtitle": "YEAH, IT SEEMED VERY INTENSE.",
    "Human Translation": "‎응, 수업이 진지하시던데"
  },
  {
    "Time": "25:45",
    "Subtitle": "I COULD LOAN YOU MY NOTES IF THAT WOULD HELP.",
    "Human Translation": "‎필요하다면 노트를 빌려줄게"
  },
  {
    "Time": "25:47",
    "Subtitle": "REALLY? THAT'D BE GREAT.",
    "Human Translation": "‎- 정말, 그럼 좋지 ‎- 그래?"
  },
  {
    "Time": "25:49",
    "Subtitle": "YEAH? HOW GREAT?",
    "Human Translation": "‎- 정말, 그럼 좋지 ‎- 그래? ‎얼마나 좋은데?"
  },
  {
    "Time": "25:52",
    "Subtitle": "I DON'T KNOW.",
    "Human Translation": "‎얼마나 좋은데? ‎모르지"
  },
  {
    "Time": "25:54",
    "Subtitle": "MR. REMMY SAID THAT GETTING SOMEONE'S NOTES WOULD BE --",
    "Human Translation": "‎레미 선생님도 노트를 빌리면…"
  },
  {
    "Time": "25:57",
    "Subtitle": "I COULD EVEN HELP YOU STUDY, IF YOU WANT.",
    "Human Translation": "‎공부도 도와줄 수 있어"
  },
  {
    "Time": "26:00",
    "Subtitle": "UM, I KIND OF VIEW STUDYING AS A SOLITARY ACTIVITY.",
    "Human Translation": "‎난 공부는 혼자 하는 거라고 봐"
  },
  {
    "Time": "26:05",
    "Subtitle": "BUT THANKS.",
    "Human Translation": "‎말은 고마워"
  },
  {
    "Time": "26:07",
    "Subtitle": "BYE, MARY.",
    "Human Translation": "‎안녕, 메리"
  },
  {
    "Time": "26:10",
    "Subtitle": "IT'S RORY.",
    "Human Translation": "‎로리라니까"
  },
  {
    "Time": "26:15",
    "Subtitle": "Lorelai: I COMPLETELY UNDERSTAND.",
    "Human Translation": "‎- 전적으로 이해해요 ‎- 완전 새 차란 말이오"
  },
  {
    "Time": "26:17",
    "Subtitle": "OH, DO YOU? BECAUSE THIS IS A BRAND-NEW CAR.",
    "Human Translation": "‎- 전적으로 이해해요 ‎- 완전 새 차란 말이오 ‎- 전 결백해요 ‎- 이 주차원이 긁었다오"
  },
  {
    "Time": "26:19",
    "Subtitle": "HE BRINGS THE CAR UP, AND IT'S SCRATCHED!",
    "Human Translation": "‎- 전 결백해요 ‎- 이 주차원이 긁었다오"
  },
  {
    "Time": "26:21",
    "Subtitle": "I JUST BACKED THE CAR UP.",
    "Human Translation": "‎전 후진만 했는데…"
  },
  {
    "Time": "26:23",
    "Subtitle": "I'D KNOW IF MY CAR WAS SCRATCHED BEFORE I PARKED IT OR NOT!",
    "Human Translation": "‎주차하기 전에 긁혔다면 ‎내가 알았을 거요"
  },
  {
    "Time": "26:26",
    "Subtitle": "LET'S CALM DOWN.",
    "Human Translation": "‎진정하세요"
  },
  {
    "Time": "26:28",
    "Subtitle": "SIR, WHY DON'T I HAVE YOUR CAR LOOKED AT TOMORROW?",
    "Human Translation": "‎내일 차를 정비소로 보내죠"
  },
  {
    "Time": "26:30",
    "Subtitle": "I'M SURE WE CAN FIND A WAY TO RESOLVE THIS.",
    "Human Translation": "‎- 해결할 방법이 있을 겁니다 ‎- 그건 안 돼요"
  },
  {
    "Time": "26:33",
    "Subtitle": "IN THE MEANTIME, I WOULD LOVE FOR YOU TO HAVE LUNCH HERE, ON ME.",
    "Human Translation": "‎대신 저희가 ‎점심을 제공하겠습니다"
  },
  {
    "Time": "26:37",
    "Subtitle": "DESSERT IS A MUST.",
    "Human Translation": "‎디저트도 꼭 드세요"
  },
  {
    "Time": "26:38",
    "Subtitle": "ANYTHING WITH OUR HOMEMADE ICE CREAM IS DELICIOUS.",
    "Human Translation": "‎저희가 만든 아이스크림도 ‎무척 맛있답니다"
  },
  {
    "Time": "26:41",
    "Subtitle": "LIFE AS YOU KNOW IT WILL NEVER BE THE SAME. WHAT DO YOU SAY? I THINK I WILL.",
    "Human Translation": "‎생애 최고의 맛일 거예요 ‎어떠세요?"
  },
  {
    "Time": "26:47",
    "Subtitle": "THANK YOU.",
    "Human Translation": "‎그렇게 하겠소"
  },
  {
    "Time": "26:48",
    "Subtitle": "THANK YOU.",
    "Human Translation": "‎- 고맙소 ‎- 감사합니다"
  },
  {
    "Time": "26:50",
    "Subtitle": "LORELAI, I SWEAR -- I DIDN'T SCRATCH HIS CAR.",
    "Human Translation": "‎- 전 정말 안 긁었어요 ‎- 데렉"
  },
  {
    "Time": "26:53",
    "Subtitle": "DEREK --",
    "Human Translation": "‎- 전 정말 안 긁었어요 ‎- 데렉 ‎저나 제 운전실력을 ‎못 믿으신다면…"
  },
  {
    "Time": "26:55",
    "Subtitle": "IF YOU THOUGHT I WAS UNRELIABLE OR A BAD DRIVER --",
    "Human Translation": "‎저나 제 운전실력을 ‎못 믿으신다면…"
  },
  {
    "Time": "26:57",
    "Subtitle": "IT'S OKAY.",
    "Human Translation": "‎괜찮아요"
  },
  {
    "Time": "26:58",
    "Subtitle": "'CAUSE I CAN DRIVE.",
    "Human Translation": "‎전 운전 잘해요"
  },
  {
    "Time": "27:01",
    "Subtitle": "OH, SWEETIE, I AM SURE YOU CAN.",
    "Human Translation": "‎물론 그건 알아요"
  },
  {
    "Time": "27:03",
    "Subtitle": "WE'LL JUST TAKE IT OVER TO MUSKY'S TOMORROW AND HAVE THE GUYS LOOK AT IT.",
    "Human Translation": "‎차는 내일 정비소에 보내 ‎검사를 하면 돼요"
  },
  {
    "Time": "27:06",
    "Subtitle": "I'M SURE THEY CAN BUFF IT OUT FOR NOTHING, OKAY?",
    "Human Translation": "‎금방 원상복구 될 거예요"
  },
  {
    "Time": "27:09",
    "Subtitle": "OKAY.",
    "Human Translation": "‎알았어요"
  },
  {
    "Time": "27:12",
    "Subtitle": "THAT'S A REAL NICE OUTFIT YOU'RE WEARING TODAY.",
    "Human Translation": "‎오늘 옷이 참 예쁘네요"
  },
  {
    "Time": "27:14",
    "Subtitle": "THANK YOU, DEREK.",
    "Human Translation": "‎고마워요, 데렉"
  },
  {
    "Time": "27:20",
    "Subtitle": "YOUR FAITHFUL POOCH IS HERE TO SAY,",
    "Human Translation": "‎또 강아지 대령이요"
  },
  {
    "Time": "27:22",
    "Subtitle": "\"SOMEONE NEEDS TO TALK WITH YOU.\"",
    "Human Translation": "‎'데스크에 기다리는 분이 있어요'"
  },
  {
    "Time": "27:24",
    "Subtitle": "IT'S NOT MY MOTHER, IS IT?",
    "Human Translation": "‎'데스크에 기다리는 분이 있어요' ‎- 또 엄마는 아니죠? ‎- 그럴 수도 있죠"
  },
  {
    "Time": "27:26",
    "Subtitle": "IT'S POSSIBLE.",
    "Human Translation": "‎- 또 엄마는 아니죠? ‎- 그럴 수도 있죠"
  },
  {
    "Time": "27:28",
    "Subtitle": "IT'S POSSIBLE? THERE'S A RESEMBLANCE.",
    "Human Translation": "‎- 그럴 수도 있다고요? ‎- 많이 닮았더군요"
  },
  {
    "Time": "27:31",
    "Subtitle": "HI. HI. IS THIS A BAD TIME?",
    "Human Translation": "‎- 안녕하세요? ‎- 네, 바쁘신가요?"
  },
  {
    "Time": "27:34",
    "Subtitle": "NO, NOT AT ALL. WHAT ARE YOU DOING HERE?",
    "Human Translation": "‎전혀 아니에요 ‎여긴 웬일이세요?"
  },
  {
    "Time": "27:36",
    "Subtitle": "WELL, I HAD TO MEET AN ASSOCIATE FOR LUNCH,",
    "Human Translation": "‎뉴욕에서 온 동료와 ‎점심 약속이 있었어요"
  },
  {
    "Time": "27:39",
    "Subtitle": "AND HE WAS COMING UP FROM NEW YORK,",
    "Human Translation": "‎뉴욕에서 온 동료와 ‎점심 약속이 있었어요 ‎그래서 아름다운 모텔에서 ‎만나기로 했죠"
  },
  {
    "Time": "27:40",
    "Subtitle": "SO I THOUGHT, \"WHY NOT MEET HIM IN A BEAUTIFUL INN?\"",
    "Human Translation": "‎그래서 아름다운 모텔에서 ‎만나기로 했죠"
  },
  {
    "Time": "27:42",
    "Subtitle": "GOOD. ENJOY YOUR LUNCH. THANKS. I WILL.",
    "Human Translation": "‎- 점심 맛있게 드세요 ‎- 감사합니다"
  },
  {
    "Time": "27:45",
    "Subtitle": "I WAS ALSO WONDERING",
    "Human Translation": "‎- 그럼 전… ‎- 또 한 가지…"
  },
  {
    "Time": "27:47",
    "Subtitle": "IF MAYBE I COULD TAKE YOU OUT TO DINNER SOMETIME.",
    "Human Translation": "‎언제 저녁이나 ‎함께 할 수 있을까요?"
  },
  {
    "Time": "27:49",
    "Subtitle": "WE'RE A LITTLE FOOD-OBSESSED, AREN'T WE?",
    "Human Translation": "‎역시 음식이 최고죠?"
  },
  {
    "Time": "27:52",
    "Subtitle": "IT'S THE COMPANY MORE THAN THE FOOD THAT INTERESTS ME.",
    "Human Translation": "‎음식보다는 같이 하는 ‎사람에 더 관심이 가는군요"
  },
  {
    "Time": "27:55",
    "Subtitle": "I'M FLATTERED.",
    "Human Translation": "‎음식보다는 같이 하는 ‎사람에 더 관심이 가는군요 ‎- 기쁘네요 ‎- 좋다는 뜻인가요?"
  },
  {
    "Time": "27:56",
    "Subtitle": "IS THAT A YES?",
    "Human Translation": "‎- 기쁘네요 ‎- 좋다는 뜻인가요?"
  },
  {
    "Time": "27:58",
    "Subtitle": "THAT'S A...YOU'RE A DAD.",
    "Human Translation": "‎이안 씨는 애 아빠란 뜻이죠"
  },
  {
    "Time": "28:00",
    "Subtitle": "AND YOU'RE A MOM.",
    "Human Translation": "‎로렐라이도 엄마죠"
  },
  {
    "Time": "28:02",
    "Subtitle": "ALTHOUGH, I'M STILL FINDING THAT REALLY HARD TO BELIEVE.",
    "Human Translation": "‎물론 아직도 믿기 힘들지만"
  },
  {
    "Time": "28:04",
    "Subtitle": "NO, I MEAN, YOU'RE A CHILTON DAD.",
    "Human Translation": "‎물론 아직도 믿기 힘들지만 ‎아니, 칠튼의 학부모잖아요"
  },
  {
    "Time": "28:07",
    "Subtitle": "OOH, THAT SOUNDS BAD. NOT BAD, JUST TRICKY.",
    "Human Translation": "‎- 불길한 얘기군요 ‎- 꼬였다고 할 수 있죠"
  },
  {
    "Time": "28:11",
    "Subtitle": "YOU KNOW, RORY JUST STARTED THERE,",
    "Human Translation": "‎로리는 방금 전학했고"
  },
  {
    "Time": "28:13",
    "Subtitle": "AND I THINK I SHOULD LET HER FALL IN WITH THE BAD CROWD",
    "Human Translation": "‎로리가 학생들과 ‎먼저 부대낄 때까진"
  },
  {
    "Time": "28:16",
    "Subtitle": "BEFORE I START HOOKING UP WITH THE P.T.A.",
    "Human Translation": "‎사친회 사람과의 데이트는 ‎자중해야죠"
  },
  {
    "Time": "28:18",
    "Subtitle": "WELL, I'M NOT ON THE P.T.A.",
    "Human Translation": "‎전 사친회가 아닙니다"
  },
  {
    "Time": "28:19",
    "Subtitle": "SEE? THERE YOU GO. I CAN'T DATE ANYBODY NOT ON THE P.T.A.",
    "Human Translation": "‎참 아쉽네요 ‎전 사친회 사람만 만나요"
  },
  {
    "Time": "28:22",
    "Subtitle": "IT'S JUST A CASUAL DINNER. SORRY.",
    "Human Translation": "‎- 그냥 저녁일 뿐인데요 ‎- 죄송해요"
  },
  {
    "Time": "28:29",
    "Subtitle": "OKAY. I'LL TELL YOU WHAT -- I'M GOING TO CHINA FOR A WEEK ON BUSINESS.",
    "Human Translation": "‎그럼 이렇게 하죠 ‎중국에 일주일간 출장을 갔다가"
  },
  {
    "Time": "28:33",
    "Subtitle": "WHEN I GET BACK, I'M GONNA TRY AGAIN.",
    "Human Translation": "‎돌아오면 다시 ‎데이트 신청하겠습니다"
  },
  {
    "Time": "28:35",
    "Subtitle": "CHINA. WOW.",
    "Human Translation": "‎중국이라니 부럽네요"
  },
  {
    "Time": "28:37",
    "Subtitle": "IMPRESSED?",
    "Human Translation": "‎- 놀랐나요? ‎- 아뇨"
  },
  {
    "Time": "28:38",
    "Subtitle": "NO. ROME, I'D BE IMPRESSED.",
    "Human Translation": "‎- 놀랐나요? ‎- 아뇨 ‎로마라면 놀랐겠지만 ‎중국은 부럽기만 하네요"
  },
  {
    "Time": "28:40",
    "Subtitle": "CHINA, I'M JUST, \"CHINA. WOW.\" OKAY.",
    "Human Translation": "‎로마라면 놀랐겠지만 ‎중국은 부럽기만 하네요"
  },
  {
    "Time": "28:45",
    "Subtitle": "LORELAI GILMORE, GENERAL MANAGER, I'LL TALK TO YOU SOON.",
    "Human Translation": "‎'호텔 매니저 로렐라이 씨' ‎곧 다시 뵙죠"
  },
  {
    "Time": "28:49",
    "Subtitle": "HAVE A SAFE TRIP. I WILL.",
    "Human Translation": "‎- 안전한 여행 되세요 ‎- 그러죠"
  },
  {
    "Time": "28:57",
    "Subtitle": "HE DOES THAT SO WELL. YOU ARE MAKING ME SICK.",
    "Human Translation": "‎- 뒷모습이 끝내주네요 ‎- 비위가 거슬리네요"
  },
  {
    "Time": "29:00",
    "Subtitle": "AW, NOW, HONEY, YOU TRY IT. I'LL WATCH YOU WALK AWAY, TOO.",
    "Human Translation": "‎미셸이 걸어봐요 ‎내가 뒤에서 봐 줄게요"
  },
  {
    "Time": "29:04",
    "Subtitle": "STOP IT.",
    "Human Translation": "‎- 그만해요 ‎- 어서 걸어봐요"
  },
  {
    "Time": "29:05",
    "Subtitle": "GO ON NOW, WALK. IT CAN'T BE THAT BAD.",
    "Human Translation": "‎- 그만해요 ‎- 어서 걸어봐요 ‎- 설마 그렇게 못 걷겠어요? ‎- 제발 관둬요"
  },
  {
    "Time": "29:08",
    "Subtitle": "LEAVE ME ALONE.",
    "Human Translation": "‎- 설마 그렇게 못 걷겠어요? ‎- 제발 관둬요"
  },
  {
    "Time": "29:10",
    "Subtitle": "NO. YOU HAVE TO DO IT WITH A LITTLE MORE ATTITUDE.",
    "Human Translation": "‎좀 더 집중해서 걸어야죠"
  },
  {
    "Time": "29:12",
    "Subtitle": "MAKE ME THINK YOU MEAN IT!",
    "Human Translation": "‎성의가 안 보이잖아요"
  },
  {
    "Time": "29:28",
    "Subtitle": "THAT'S LUNCH.",
    "Human Translation": "‎점심시간이에요"
  },
  {
    "Time": "29:50",
    "Subtitle": "I'M SORRY, BUT YOU'RE GOING TO OPEN.",
    "Human Translation": "‎미안하지만 열려줘야겠어"
  },
  {
    "Time": "29:58",
    "Subtitle": "OH, NO. I AM SO SORRY.",
    "Human Translation": "‎이런, 정말 미안해"
  },
  {
    "Time": "30:01",
    "Subtitle": "PARIS, PLEASE. I AM SO SORRY.",
    "Human Translation": "‎패리스, 너무 미안해"
  },
  {
    "Time": "30:04",
    "Subtitle": "IT WAS AN ACCIDENT. MY LOCKER -- IT JUST SLIPPED.",
    "Human Translation": "‎사고였어 ‎사물함 때문에 미끄러졌어"
  },
  {
    "Time": "30:06",
    "Subtitle": "I PULLED TOO HARD. I DIDN'T MEAN TO --",
    "Human Translation": "‎너무 세게 당겼나봐 ‎정말 이럴 생각은…"
  },
  {
    "Time": "30:09",
    "Subtitle": "IS THERE WATER IN THAT MOAT?",
    "Human Translation": "‎성곽에 물까지 있네?"
  },
  {
    "Time": "30:11",
    "Subtitle": "GET AWAY FROM ME.",
    "Human Translation": "‎저리 가"
  },
  {
    "Time": "30:20",
    "Subtitle": "EXCUSE ME, I NEED MRS. NESS, HISTORY?",
    "Human Translation": "‎잠깐, 네스 선생님의 ‎역사 수업이 어디야?"
  },
  {
    "Time": "30:23",
    "Subtitle": "IT'S BEHIND YOU.",
    "Human Translation": "‎바로 뒷교실이야"
  },
  {
    "Time": "30:26",
    "Subtitle": "OF COURSE IT IS.",
    "Human Translation": "‎물론 그렇겠지"
  },
  {
    "Time": "30:33",
    "Subtitle": "OH, YOU'VE GOT TO BE KIDDING ME.",
    "Human Translation": "‎미치다 팔짝 뛰겠네"
  },
  {
    "Time": "30:38",
    "Subtitle": "SEATS NOW, PLEASE.",
    "Human Translation": "‎다들 앉으렴"
  },
  {
    "Time": "30:40",
    "Subtitle": "HEY, MARY.",
    "Human Translation": "‎안녕, 메리"
  },
  {
    "Time": "30:43",
    "Subtitle": "OKAY.",
    "Human Translation": "‎좋아"
  },
  {
    "Time": "30:45",
    "Subtitle": "WE LEFT OUR PROJECTS OFF ON FRIDAY WITH MR. GAYNOR.",
    "Human Translation": "‎금요일에 게이너 군까지 ‎발표를 했으니"
  },
  {
    "Time": "30:48",
    "Subtitle": "SO TODAY WE WILL PICK UP WITH MISS GELLER.",
    "Human Translation": "‎금요일에 게이너 군까지 ‎발표를 했으니 ‎오늘은 겔러 양 차례구나"
  },
  {
    "Time": "30:54",
    "Subtitle": "I DON'T HAVE MY PROJECT.",
    "Human Translation": "‎발표물이 없습니다"
  },
  {
    "Time": "30:55",
    "Subtitle": "MISS GELLER...",
    "Human Translation": "‎발표물이 없습니다 ‎겔러 양, 준비할 시간은 ‎충분했니?"
  },
  {
    "Time": "30:56",
    "Subtitle": "DID YOU HAVE SUFFICIENT TIME TO COMPLETE YOUR PROJECT?",
    "Human Translation": "‎겔러 양, 준비할 시간은 ‎충분했니?"
  },
  {
    "Time": "30:59",
    "Subtitle": "YES. AND YET YOU DON'T HAVE IT DONE?",
    "Human Translation": "‎- 네 ‎- 그런데도 못 끝냈어?"
  },
  {
    "Time": "31:01",
    "Subtitle": "NO.",
    "Human Translation": "‎- 네 ‎- 좋아"
  },
  {
    "Time": "31:02",
    "Subtitle": "YOU WILL RECEIVE AN INCOMPLETE.",
    "Human Translation": "‎- 네 ‎- 좋아 ‎이번 발표는 ‎점수를 못 받을 거야"
  },
  {
    "Time": "31:06",
    "Subtitle": "IT'S MY FAULT. WHO ARE YOU?",
    "Human Translation": "‎- 제 실수 때문이에요 ‎- 누구지?"
  },
  {
    "Time": "31:08",
    "Subtitle": "RORY GILMORE. I WRECKED HER PROJECT. SHUT UP.",
    "Human Translation": "‎- 로리 길모어요, 제가 망쳤어요 ‎- 조용히 해"
  },
  {
    "Time": "31:10",
    "Subtitle": "I DON'T HAVE A RORY GILMORE. I HAVE A LORELAI GILMORE.",
    "Human Translation": "‎- 로리 길모어요, 제가 망쳤어요 ‎- 조용히 해 ‎로리 길모어는 없고 ‎로렐라이 길모어만 있구나"
  },
  {
    "Time": "31:15",
    "Subtitle": "THAT'S ME.",
    "Human Translation": "‎그게 저예요"
  },
  {
    "Time": "31:17",
    "Subtitle": "YOU ARE RORY AND LORELAI GILMORE?",
    "Human Translation": "‎학생 이름이 로리와 ‎로렐라이 길모어인가?"
  },
  {
    "Time": "31:18",
    "Subtitle": "YES, AND I WRECKED HER PROJECT. MY LOCKER GOT STUCK.",
    "Human Translation": "‎네, 제가 발표물을 망쳤어요 ‎사물함이 끼었거든요"
  },
  {
    "Time": "31:21",
    "Subtitle": "JUST STAY OUT OF THIS.",
    "Human Translation": "‎넌 빠져"
  },
  {
    "Time": "31:23",
    "Subtitle": "DO YOU GO BY RORY OR LORELAI?",
    "Human Translation": "‎- 로리니, 로렐라이니? ‎- 마음대로 하세요"
  },
  {
    "Time": "31:25",
    "Subtitle": "WHATEVER. IT'S NOT HER FAULT.",
    "Human Translation": "‎- 로리니, 로렐라이니? ‎- 마음대로 하세요 ‎패리스 잘못이 아니에요"
  },
  {
    "Time": "31:28",
    "Subtitle": "I NEED YOU TO PICK ONE. ONE WHAT?",
    "Human Translation": "‎- 하나를 고르렴 ‎- 뭘요?"
  },
  {
    "Time": "31:30",
    "Subtitle": "ONE NAME.",
    "Human Translation": "‎이름 말이다"
  },
  {
    "Time": "31:31",
    "Subtitle": "RORY. FINE. THANK YOU.",
    "Human Translation": "‎- 로리요 ‎- 그래, 고맙구나"
  },
  {
    "Time": "31:34",
    "Subtitle": "RORY, YOU WRECKED PARIS' PROJECT WHEN?",
    "Human Translation": "‎패리스의 발표물을 ‎언제 망가뜨렸다고?"
  },
  {
    "Time": "31:37",
    "Subtitle": "JUST BEFORE CLASS.",
    "Human Translation": "‎패리스의 발표물을 ‎언제 망가뜨렸다고? ‎- 수업 바로 전에요 ‎- 편리한 대답이구나"
  },
  {
    "Time": "31:39",
    "Subtitle": "VERY CONVENIENT.",
    "Human Translation": "‎- 수업 바로 전에요 ‎- 편리한 대답이구나 ‎정말이에요, 사물함이 ‎끼어서 그걸 열다가…"
  },
  {
    "Time": "31:41",
    "Subtitle": "NO, I DID. MY LOCKER GOT STUCK --",
    "Human Translation": "‎정말이에요, 사물함이 ‎끼어서 그걸 열다가…"
  },
  {
    "Time": "31:43",
    "Subtitle": "STOP IT!",
    "Human Translation": "‎그만 해! ‎길모어 양, 학생이 ‎패리스의 발표물을 깼다니"
  },
  {
    "Time": "31:45",
    "Subtitle": "MISS GILMORE, SINCE YOU SAY YOU WRECKED MISS GELLER'S PROJECT,",
    "Human Translation": "‎길모어 양, 학생이 ‎패리스의 발표물을 깼다니 ‎고치는 걸 도와야 마땅하지"
  },
  {
    "Time": "31:48",
    "Subtitle": "THEN YOU MAY HELP HER FIX IT.",
    "Human Translation": "‎고치는 걸 도와야 마땅하지"
  },
  {
    "Time": "31:50",
    "Subtitle": "YOU HAVE UNTIL TOMORROW.",
    "Human Translation": "‎내일까지 시간을 주마"
  },
  {
    "Time": "31:51",
    "Subtitle": "FINE. NO.",
    "Human Translation": "‎- 네 ‎- 싫어"
  },
  {
    "Time": "31:53",
    "Subtitle": "I DON'T WANT YOUR HELP!",
    "Human Translation": "‎- 왜 싫어? ‎- 네 도움은 필요 없어"
  },
  {
    "Time": "31:55",
    "Subtitle": "BUT I DON'T MIND DOING IT.",
    "Human Translation": "‎- 난 돕고 싶어 ‎- 넌 빠져"
  },
  {
    "Time": "31:57",
    "Subtitle": "JUST STAY OUT OF THIS.",
    "Human Translation": "‎- 난 돕고 싶어 ‎- 넌 빠져 ‎대체 왜 그래?"
  },
  {
    "Time": "31:58",
    "Subtitle": "WHAT IS WRONG WITH YOU? I'M TRYING TO HELP YOU.",
    "Human Translation": "‎대체 왜 그래? ‎- 도우려는 거잖아 ‎- 돕지 마"
  },
  {
    "Time": "32:00",
    "Subtitle": "WELL, DON'T. LADIES, ENOUGH.",
    "Human Translation": "‎- 도우려는 거잖아 ‎- 돕지 마 ‎둘 다 그만해"
  },
  {
    "Time": "32:03",
    "Subtitle": "MISS GELLER, IF YOU DON'T WANT MISS GILMORE'S HELP, THEN YOU MAY HAVE UNTIL TOMORROW.",
    "Human Translation": "‎길모어 양의 도움이 싫어도 ‎내일까지 준비해 오너라"
  },
  {
    "Time": "32:07",
    "Subtitle": "IF IT'S NOT DONE, YOU WILL RECEIVE AN INCOMPLETE.",
    "Human Translation": "‎준비를 못 하면 ‎발표 점수는 없다"
  },
  {
    "Time": "32:10",
    "Subtitle": "IS THAT UNDERSTOOD?",
    "Human Translation": "‎알겠니?"
  },
  {
    "Time": "32:12",
    "Subtitle": "YES.",
    "Human Translation": "‎네"
  },
  {
    "Time": "32:15",
    "Subtitle": "AS LONG AS YOU'RE STANDING --",
    "Human Translation": "‎기왕에 서 있으니 소개하마"
  },
  {
    "Time": "32:18",
    "Subtitle": "CLASS, WE HAVE A NEW STUDENT.",
    "Human Translation": "‎기왕에 서 있으니 소개하마 ‎전학생 로리 길모어에게 ‎모두 인사하렴"
  },
  {
    "Time": "32:20",
    "Subtitle": "SAY HELLO TO RORY GILMORE.",
    "Human Translation": "‎전학생 로리 길모어에게 ‎모두 인사하렴"
  },
  {
    "Time": "32:23",
    "Subtitle": "HELLO, MARY!",
    "Human Translation": "‎안녕, 메리"
  },
  {
    "Time": "32:31",
    "Subtitle": "WALK SMOOTH.",
    "Human Translation": "‎스타즈 할로우 ‎인구 9973명 ‎사뿐히 걸어, '해리 포터' 의 ‎새 책을 머리 위에 올렸잖니"
  },
  {
    "Time": "32:33",
    "Subtitle": "THAT'S THE NEW HARRY POTTER ON YOUR HEADS.",
    "Human Translation": "‎사뿐히 걸어, '해리 포터' 의 ‎새 책을 머리 위에 올렸잖니"
  },
  {
    "Time": "32:34",
    "Subtitle": "IF THEY SHOULD DROP, HARRY WILL DIE, AND THERE WON'T BE ANY MORE BOOKS.",
    "Human Translation": "‎책이 떨어지면 해리도 죽고 ‎시리즈도 끝날 거야"
  },
  {
    "Time": "32:38",
    "Subtitle": "NOW, THAT'S HOW YOU SHOULD'VE DRESSED THIS MORNING, MISSY.",
    "Human Translation": "‎아침에도 그렇게 입었어야죠"
  },
  {
    "Time": "32:43",
    "Subtitle": "WHAT ARE YOU DOING HERE?",
    "Human Translation": "‎여긴 웬일이에요?"
  },
  {
    "Time": "32:48",
    "Subtitle": "SEE? NOW, THAT'S WHY YOU WERE VOTED MR. PERSONALITY OF THE NEW MILLENNIUM.",
    "Human Translation": "‎이래서 루크가 새천년의 ‎착한 남자 1등을 한 거예요"
  },
  {
    "Time": "32:51",
    "Subtitle": "WHERE'S YOUR CROWN?",
    "Human Translation": "‎왕관은 어디 있죠?"
  },
  {
    "Time": "32:53",
    "Subtitle": "I JUST MEAN YOU DON'T USUALLY COME IN AT THIS TIME.",
    "Human Translation": "‎평소 이 시간엔 ‎안 오니까 하는 말이오"
  },
  {
    "Time": "32:55",
    "Subtitle": "I HAVE TO PICK UP RORY FROM SCHOOL. THANK YOU.",
    "Human Translation": "‎학교에서 로리를 데려와야 해요"
  },
  {
    "Time": "32:58",
    "Subtitle": "YOU'RE WELCOME.",
    "Human Translation": "‎- 고마워요 ‎- 별말씀을"
  },
  {
    "Time": "32:59",
    "Subtitle": "NO LECTURES?",
    "Human Translation": "‎연설 안 해요?"
  },
  {
    "Time": "33:00",
    "Subtitle": "MY BLOOD SUGAR'S LOW.",
    "Human Translation": "‎연설 안 해요? ‎혈당이 너무 낮으니 ‎사과 하나 먹고 해줄게요"
  },
  {
    "Time": "33:02",
    "Subtitle": "I'LL EAT AN APPLE AND GET BACK TO YOU.",
    "Human Translation": "‎혈당이 너무 낮으니 ‎사과 하나 먹고 해줄게요"
  },
  {
    "Time": "33:06",
    "Subtitle": "GOD, THIS HAS BEEN ONE HECTIC BIZZARO DAY FOR ME. YEAH?",
    "Human Translation": "‎정말 바쁘고 힘든 날이었어요 ‎그래요?"
  },
  {
    "Time": "33:10",
    "Subtitle": "YEAH, THIS MORNING WITH THE BEING LATE, AND MY MOTHER WITH HER EXISTING.",
    "Human Translation": "‎아침엔 지각과 엄마의 ‎존재 때문에 힘들었죠"
  },
  {
    "Time": "33:13",
    "Subtitle": "OH, AND THIS FATHER, THIS FATHER FROM CHILTON,",
    "Human Translation": "‎또 칠튼의 학부모인 남자가"
  },
  {
    "Time": "33:15",
    "Subtitle": "HE DROVE OUT TO THE INN ALL THE WAY FROM HARTFORD JUST TO ASK ME OUT.",
    "Human Translation": "‎하트포드에서 모텔까지 와서 ‎데이트 신청을 했어요"
  },
  {
    "Time": "33:19",
    "Subtitle": "REALLY? ARE YOU GOING?",
    "Human Translation": "‎그래요? 만날 건가요?"
  },
  {
    "Time": "33:21",
    "Subtitle": "NO. HE'S GOT A KID IN SCHOOL WITH RORY. THE WHOLE THING JUST SEEMED A LITTLE WEIRD.",
    "Human Translation": "‎아뇨, 두 아이가 같은 학교니 ‎이상할 것 같아서요"
  },
  {
    "Time": "33:26",
    "Subtitle": "GOOD. GOOD?",
    "Human Translation": "‎- 잘했어요 ‎- 잘해요?"
  },
  {
    "Time": "33:30",
    "Subtitle": "YEAH, I THINK IT'S GOOD THAT YOU TURNED HIM DOWN.",
    "Human Translation": "‎네, 잘 거절한 것 같아요"
  },
  {
    "Time": "33:33",
    "Subtitle": "OKAY.",
    "Human Translation": "‎그래요?"
  },
  {
    "Time": "33:34",
    "Subtitle": "I MEAN, HE'S PROBABLY OLD, RIGHT?",
    "Human Translation": "‎- 남자도 늙었겠죠? ‎- 늙어요?"
  },
  {
    "Time": "33:37",
    "Subtitle": "HE'S GOT A KID IN HIGH SCHOOL. SO DO I.",
    "Human Translation": "‎- 아이가 고등학생이잖아요 ‎- 저도 그런데요"
  },
  {
    "Time": "33:39",
    "Subtitle": "YEAH, BUT YOU WERE YOUNG WHEN YOU HAD RORY.",
    "Human Translation": "‎로렐라이는 어렸을 때 낳았지만 ‎보통은 그렇지 않잖아요"
  },
  {
    "Time": "33:41",
    "Subtitle": "MOST PEOPLE AREN'T THAT YOUNG. MOST PEOPLE ARE...",
    "Human Translation": "‎로렐라이는 어렸을 때 낳았지만 ‎보통은 그렇지 않잖아요 ‎- 보통 사람들은… ‎- 늙었죠"
  },
  {
    "Time": "33:44",
    "Subtitle": "OLD. YEAH.",
    "Human Translation": "‎- 보통 사람들은… ‎- 늙었죠 ‎네"
  },
  {
    "Time": "33:45",
    "Subtitle": "LIKE THIS GUY WHO ASKED ME OUT.",
    "Human Translation": "‎제게 데이트 신청한 사람처럼?"
  },
  {
    "Time": "33:48",
    "Subtitle": "BUT YOU'RE NOT GOING.",
    "Human Translation": "‎안 만날 거잖아요"
  },
  {
    "Time": "33:50",
    "Subtitle": "NO...I'M NOT GOING.",
    "Human Translation": "‎네, 안 만나요"
  },
  {
    "Time": "33:59",
    "Subtitle": "OH, THAT'S ME.",
    "Human Translation": "‎제 전화예요"
  },
  {
    "Time": "34:03",
    "Subtitle": "HELLO? HI, BABETTE.",
    "Human Translation": "‎여보세요? ‎안녕하세요, 바베트"
  },
  {
    "Time": "34:07",
    "Subtitle": "WHAT? OKAY.",
    "Human Translation": "‎네? ‎알았어요"
  },
  {
    "Time": "34:10",
    "Subtitle": "NO, NO, I'LL BE RIGHT THERE. THANKS.",
    "Human Translation": "‎아뇨, 곧 갈게요 ‎고마워요"
  },
  {
    "Time": "34:14",
    "Subtitle": "UM, I HAVE TO GO.",
    "Human Translation": "‎가야겠어요"
  },
  {
    "Time": "34:15",
    "Subtitle": "KEEP IT. I GAVE YOU DECAF.",
    "Human Translation": "‎돈은 됐어요 ‎그건 무카페인이니까"
  },
  {
    "Time": "34:32",
    "Subtitle": "HEY. OH, LORELAI, I'M SO SORRY I HAD TO CALL YOU LIKE THIS.",
    "Human Translation": "‎로렐라이, 이렇게 ‎불러내서 미안해요"
  },
  {
    "Time": "34:35",
    "Subtitle": "THAT'S OKAY, BABETTE. I APPRECIATE IT.",
    "Human Translation": "‎괜찮아요, 바베트 ‎정말 고마워요"
  },
  {
    "Time": "34:38",
    "Subtitle": "ALL OF A SUDDEN, THEY PULL UP, GET OUT OF THE TRUCK, AND START SNIFFING AROUND.",
    "Human Translation": "‎갑자기 들이닥쳐서는 ‎엿보고 있었어요"
  },
  {
    "Time": "34:42",
    "Subtitle": "IT'S VERY STRANGE. LET ME GO TALK TO THEM.",
    "Human Translation": "‎- 아주 수상해요 ‎- 제가 얘기해 볼게요"
  },
  {
    "Time": "34:44",
    "Subtitle": "TELL HER ABOUT THE GNOME. THEY KICKED A GNOME...",
    "Human Translation": "‎- 놈 얘기도 해 ‎- 저 사람들이 놈을 찼어요"
  },
  {
    "Time": "34:46",
    "Subtitle": "WHAT? RIGHT IN THE HEAD.",
    "Human Translation": "‎- 뭐라고요? ‎- 그것도 머리를"
  },
  {
    "Time": "34:48",
    "Subtitle": "THAT'S JUST NOT COOL. I'M VERY SORRY. IS THE GNOME OKAY?",
    "Human Translation": "‎- 이러면 못써요 ‎- 죄송해요, 놈은 괜찮아요?"
  },
  {
    "Time": "34:52",
    "Subtitle": "HE'S FINE, SUGAR. THANKS FOR ASKING.",
    "Human Translation": "‎이 아이는 괜찮아요 ‎물어봐줘서 고마워요"
  },
  {
    "Time": "34:53",
    "Subtitle": "BUT I WOULDN'T TRUST THESE BOYS.",
    "Human Translation": "‎못 믿을 사람들이에요"
  },
  {
    "Time": "34:55",
    "Subtitle": "GNOME-KICKING SAYS A LOT ABOUT A MAN'S CHARACTER.",
    "Human Translation": "‎고양이를 차는 걸 보면 ‎어떤 사람들인지 알만해요"
  },
  {
    "Time": "34:58",
    "Subtitle": "YES. WELL, I'M GONNA GO TAKE CARE OF THIS.",
    "Human Translation": "‎고양이를 차는 걸 보면 ‎어떤 사람들인지 알만해요 ‎제가 가서 처리할게요 ‎고마워요"
  },
  {
    "Time": "35:00",
    "Subtitle": "THANKS.",
    "Human Translation": "‎제가 가서 처리할게요 ‎고마워요"
  },
  {
    "Time": "35:07",
    "Subtitle": "YOU LIVE HERE?",
    "Human Translation": "‎뭐하는 거죠? ‎- 여기 사세요? ‎- 맞아요"
  },
  {
    "Time": "35:09",
    "Subtitle": "I'M SUPPOSED TO INSTALL A DSL FOR A LORELAI GILMORE.",
    "Human Translation": "‎로렐라이 길모어 댁에 DSL을 ‎설치하려는데, 댁이 맞나요?"
  },
  {
    "Time": "35:12",
    "Subtitle": "IS THAT YOU? YES, BUT --",
    "Human Translation": "‎로렐라이 길모어 댁에 DSL을 ‎설치하려는데, 댁이 맞나요? ‎- 네, 맞아요 ‎- 전 믹입니다"
  },
  {
    "Time": "35:14",
    "Subtitle": "I'M MICK.",
    "Human Translation": "‎- 네, 맞아요 ‎- 전 믹입니다 ‎만나서 반가워요 ‎이제 현관에서 내려오시죠"
  },
  {
    "Time": "35:15",
    "Subtitle": "NICE TO MEET YOU. COULD YOU GET OFF MY PORCH?",
    "Human Translation": "‎만나서 반가워요 ‎이제 현관에서 내려오시죠"
  },
  {
    "Time": "35:17",
    "Subtitle": "I WAS TOLD THAT YOU WOULDN'T BE HERE,",
    "Human Translation": "‎손님이 없을 땐 개구리 도자기에 ‎열쇠가 있을 거라던데요"
  },
  {
    "Time": "35:19",
    "Subtitle": "BUT TO LOOK FOR A CERAMIC FROG WITH A KEY IN IT.",
    "Human Translation": "‎손님이 없을 땐 개구리 도자기에 ‎열쇠가 있을 거라던데요 ‎- 무슨 소리죠? ‎- 개구리를 못 찾겠어요"
  },
  {
    "Time": "35:21",
    "Subtitle": "WE CAN'T FIND THE FROG.",
    "Human Translation": "‎- 무슨 소리죠? ‎- 개구리를 못 찾겠어요"
  },
  {
    "Time": "35:22",
    "Subtitle": "I DIDN'T ORDER A DSL. THE ORDER WAS PLACED BY AN...EMILY GILMORE. OH, NO!",
    "Human Translation": "‎- DSL은 주문 안 했어요 ‎- 주문자는 에밀리 길모어군요"
  },
  {
    "Time": "35:27",
    "Subtitle": "WE WOULD'VE BEEN DONE BY NOW,",
    "Human Translation": "‎또! ‎벌써 끝났어야 하는데 ‎개구리를 찾다가 지체됐죠"
  },
  {
    "Time": "35:29",
    "Subtitle": "BUT THE FROG SEARCH PUT US WAY BEHIND.",
    "Human Translation": "‎벌써 끝났어야 하는데 ‎개구리를 찾다가 지체됐죠 ‎이것 봐요"
  },
  {
    "Time": "35:32",
    "Subtitle": "HEY, MICK, FOUND IT.",
    "Human Translation": "‎이것 봐요"
  },
  {
    "Time": "35:34",
    "Subtitle": "YOU FOUND THE FROG?",
    "Human Translation": "‎- 찾았어 ‎- 개구리를 찾았어?"
  },
  {
    "Time": "35:35",
    "Subtitle": "IT WASN'T A FROG. IT WAS A TURTLE. IT SAYS HERE IT'S A FROG. TURTLE.",
    "Human Translation": "‎- 개구리가 아니라 거북이야 ‎- 개구리라고 써있는데"
  },
  {
    "Time": "35:38",
    "Subtitle": "REALLY? TRUST ME.",
    "Human Translation": "‎- 거북이 맞아요 ‎- 그래요? ‎네, 죄송하지만 DSL은 ‎취소해야 할 것 같네요"
  },
  {
    "Time": "35:40",
    "Subtitle": "I'M GONNA HAVE TO CANCEL THAT DSL ORDER.",
    "Human Translation": "‎네, 죄송하지만 DSL은 ‎취소해야 할 것 같네요"
  },
  {
    "Time": "35:42",
    "Subtitle": "YOU SURE? IT'S ALREADY PAID FOR.",
    "Human Translation": "‎진심입니까? ‎벌써 대금도 치렀는데요"
  },
  {
    "Time": "35:43",
    "Subtitle": "YEAH, I KNOW,",
    "Human Translation": "‎진심입니까? ‎벌써 대금도 치렀는데요 ‎네, 하지만 DSL은 필요 없어요"
  },
  {
    "Time": "35:45",
    "Subtitle": "BUT WE DON'T NEED A DSL, SO THANKS FOR COMING,",
    "Human Translation": "‎네, 하지만 DSL은 필요 없어요 ‎와주셔서 감사하고 ‎이젠 가셔도 돼요"
  },
  {
    "Time": "35:47",
    "Subtitle": "AND YOU GUYS CAN JUST GO.",
    "Human Translation": "‎와주셔서 감사하고 ‎이젠 가셔도 돼요"
  },
  {
    "Time": "35:50",
    "Subtitle": "IS THERE A PROBLEM?",
    "Human Translation": "‎문제가 있나요?"
  },
  {
    "Time": "35:52",
    "Subtitle": "OH, NOTHING SHAKESPEARE COULDN'T TURN INTO A REALLY GOOD PLAY.",
    "Human Translation": "‎셰익스피어가 ‎희곡으로 쓸 만한 일이죠"
  },
  {
    "Time": "35:59",
    "Subtitle": "Ness: LET'S TRY ANOTHER PASSAGE.",
    "Human Translation": "‎다른 글을 읽어보자 ‎패리스, 미안해 ‎나도 돕고 싶어"
  },
  {
    "Time": "36:02",
    "Subtitle": "THE ROMANISTS HAVE, WITH GREAT ADROITNESS,",
    "Human Translation": "‎'기독교도가 자기 주위에"
  },
  {
    "Time": "36:04",
    "Subtitle": "DRAWN THREE WALLS AROUND THEMSELVES",
    "Human Translation": "‎'삼면의 벽을 빈틈없이 쌓고"
  },
  {
    "Time": "36:07",
    "Subtitle": "WITH WHICH THEY HAVE HITHERTO PROTECTED THEMSELVES,",
    "Human Translation": "‎'개혁조차 불가능할 정도로"
  },
  {
    "Time": "36:11",
    "Subtitle": "SO THAT NO ONE COULD REFORM THEM, WHEREBY CHRISTENDOM HAS FALLEN TERRIBLY.",
    "Human Translation": "‎'자신들을 보호했기 때문에 ‎기독교 국가가 몰락한 것이다'"
  },
  {
    "Time": "36:16",
    "Subtitle": "WHO SAID THIS?",
    "Human Translation": "‎- 이건 누구 말이지? ‎- 마틴 루터요"
  },
  {
    "Time": "36:18",
    "Subtitle": "MARTIN LUTHER.",
    "Human Translation": "‎- 이건 누구 말이지? ‎- 마틴 루터요 ‎아주 잘했다, 길모어 양"
  },
  {
    "Time": "36:20",
    "Subtitle": "VERY GOOD, MISS GILMORE.",
    "Human Translation": "‎아주 잘했다, 길모어 양"
  },
  {
    "Time": "36:22",
    "Subtitle": "AND WHAT YEAR DID MARTIN LUTHER ADDRESS THE CHRISTIAN NOBILITY? 1520.",
    "Human Translation": "‎그럼 기독교 귀족에게 ‎마틴 루터가 글을 쓴 연도는?"
  },
  {
    "Time": "36:25",
    "Subtitle": "VERY GOOD, MISS GILMORE.",
    "Human Translation": "‎- 1520년이죠 ‎- 잘했다, 길모어 양"
  },
  {
    "Time": "36:28",
    "Subtitle": "UNTIL NEXT TIME, CLASS.",
    "Human Translation": "‎다음 시간에 보자"
  },
  {
    "Time": "36:37",
    "Subtitle": "STAY OUT OF MY WAY.",
    "Human Translation": "‎내 앞을 막지 마"
  },
  {
    "Time": "36:38",
    "Subtitle": "I WILL MAKE THIS SCHOOL A LIVING HELL FOR YOU.",
    "Human Translation": "‎내 앞을 막지 마 ‎네 학교생활을 끔찍하게 ‎만들어 줄 수도 있어"
  },
  {
    "Time": "36:43",
    "Subtitle": "SEE YOU TOMORROW, MARY.",
    "Human Translation": "‎내일 보자, 메리"
  },
  {
    "Time": "36:46",
    "Subtitle": "THE NAME IS RORY.",
    "Human Translation": "‎내 이름은 로리라니까"
  },
  {
    "Time": "37:00",
    "Subtitle": "CAN I HELP YOU? GOD, I WISH.",
    "Human Translation": "‎- 도와드릴까요? ‎- 그럼 좋게요"
  },
  {
    "Time": "37:05",
    "Subtitle": "WHAT ON EARTH?",
    "Human Translation": "‎대체 이게…"
  },
  {
    "Time": "37:06",
    "Subtitle": "YOU'RE NOT BUYING US A DSL. LORELAI, THIS IS HARDLY THE PLACE.",
    "Human Translation": "‎- DSL은 거절하겠어요 ‎- 장소를 가려서 말하렴"
  },
  {
    "Time": "37:11",
    "Subtitle": "I CANCELED THE ORDER, AND IT'S NOT HAPPENING.",
    "Human Translation": "‎주문은 취소했으니 ‎마음대로 안 될 거예요"
  },
  {
    "Time": "37:13",
    "Subtitle": "BUT RORY NEEDS THE INTERNET FOR HER SCHOOL.",
    "Human Translation": "‎로리도 학교에 다니려면 ‎인터넷을 써야잖니"
  },
  {
    "Time": "37:15",
    "Subtitle": "WE HAVE THE INTERNET.",
    "Human Translation": "‎인터넷은 돼요"
  },
  {
    "Time": "37:16",
    "Subtitle": "THIS IS FASTER. WE LIKE OUR INTERNET SLOW.",
    "Human Translation": "‎- DSL이 더 빠르잖니 ‎- 느린 인터넷이 더 좋아요"
  },
  {
    "Time": "37:19",
    "Subtitle": "WE CAN TURN IT ON, WALK AROUND, DANCE, MAKE A SANDWICH.",
    "Human Translation": "‎페이지를 열고 산책도 하고 ‎춤도 추고 샌드위치도 만들죠"
  },
  {
    "Time": "37:22",
    "Subtitle": "WITH DSL, THERE'S NO DANCING, NO WALKING, AND WE'D STARVE.",
    "Human Translation": "‎페이지를 열고 산책도 하고 ‎춤도 추고 샌드위치도 만들죠 ‎DSL이 있으면 산책도 ‎춤도 없고 굶어죽을 거예요"
  },
  {
    "Time": "37:25",
    "Subtitle": "IT'D BE ALL WORK AND NO PLAY. HAVE YOU NOT SEEN \"THE SHINING\"?",
    "Human Translation": "‎DSL이 있으면 산책도 ‎춤도 없고 굶어죽을 거예요 ‎일만 하고 놀지도 못하겠죠 ‎그런 공포영화도 있잖아요?"
  },
  {
    "Time": "37:28",
    "Subtitle": "WHAT ON EARTH ARE YOU TALKING ABOUT?",
    "Human Translation": "‎대체 그게 무슨 소리야?"
  },
  {
    "Time": "37:30",
    "Subtitle": "ALSO, THERE WILL BE NO CARS, NO PARKING SPACES,",
    "Human Translation": "‎또 차나 주차공간도 안 돼요"
  },
  {
    "Time": "37:33",
    "Subtitle": "AND ALL THE UNIFORMS WILL BE SUPPLIED BY ME.",
    "Human Translation": "‎교복도 전부 제가 알아서 해요 ‎엄마니까요"
  },
  {
    "Time": "37:35",
    "Subtitle": "THAT'S FINAL. THERE WILL BE NO DISCUSSION.",
    "Human Translation": "‎교복도 전부 제가 알아서 해요 ‎엄마니까요 ‎이걸로 끝이에요 ‎협상은 없어요"
  },
  {
    "Time": "37:38",
    "Subtitle": "YOU'RE BEING STUBBORN, AS USUAL.",
    "Human Translation": "‎- 또 고집부리는구나 ‎- 아뇨, 고집이 아니에요"
  },
  {
    "Time": "37:40",
    "Subtitle": "I'M NOT BEING STUBBORN! I'M BEING ME!",
    "Human Translation": "‎- 또 고집부리는구나 ‎- 아뇨, 고집이 아니에요 ‎이게 저예요"
  },
  {
    "Time": "37:42",
    "Subtitle": "THE SAME PERSON WHO ALWAYS NEEDED TO WORK OUT HER OWN PROBLEMS",
    "Human Translation": "‎제 문제는 항상 ‎저 혼자서 해결했고"
  },
  {
    "Time": "37:45",
    "Subtitle": "AND TAKE CARE OF HERSELF, BECAUSE THAT'S THE WAY I WAS BORN!",
    "Human Translation": "‎혼자 알아서 했어요 ‎전 그렇게 태어났으니까요"
  },
  {
    "Time": "37:48",
    "Subtitle": "THAT'S HOW I AM! FLORENCE, I'M DRIPPING.",
    "Human Translation": "‎- 그게 저예요! ‎- 염색약이 흘러요"
  },
  {
    "Time": "37:51",
    "Subtitle": "I APPRECIATE WHAT YOU HAVE DONE FOR RORY IN PAYING FOR THIS SCHOOL.",
    "Human Translation": "‎로리의 학비를 내주신 건 ‎정말 감사드려요"
  },
  {
    "Time": "37:55",
    "Subtitle": "THAT WILL NOT BE FORGOTTEN. YOU WON'T LET IT.",
    "Human Translation": "‎절대 안 잊을 거예요 ‎엄마가 가만있지 않겠죠"
  },
  {
    "Time": "37:59",
    "Subtitle": "BUT SHE IS MY DAUGHTER.",
    "Human Translation": "‎로리는 제 딸이에요"
  },
  {
    "Time": "38:00",
    "Subtitle": "AND I DECIDE HOW WE LIVE, NOT YOU.",
    "Human Translation": "‎우리가 사는 법은 ‎엄마가 아니라 제가 정해요"
  },
  {
    "Time": "38:07",
    "Subtitle": "NOW, THEN...DO THEY VALIDATE PARKING HERE?",
    "Human Translation": "‎할 말은 다 했어요 ‎여기 주차표 끊어주나요?"
  },
  {
    "Time": "38:12",
    "Subtitle": "THERE'S A STAMP AT THE DESK.",
    "Human Translation": "‎데스크에서 도장을 찍어준다"
  },
  {
    "Time": "38:15",
    "Subtitle": "THANK YOU.",
    "Human Translation": "‎고마워요"
  },
  {
    "Time": "38:34",
    "Subtitle": "MM. HEY, YOU.",
    "Human Translation": "‎우리 딸"
  },
  {
    "Time": "38:40",
    "Subtitle": "SO, THIS WHOLE PLAID-SKIRT THING -- MY IDEA?",
    "Human Translation": "‎이 교복을 입는 건 ‎내 생각이었어?"
  },
  {
    "Time": "38:43",
    "Subtitle": "MY DAY SUCKED, TOO.",
    "Human Translation": "‎내 하루도 힘들었어"
  },
  {
    "Time": "38:44",
    "Subtitle": "PROMISE?",
    "Human Translation": "‎내 하루도 힘들었어 ‎- 정말이야? ‎- 할머니 목숨을 걸고 맹세해"
  },
  {
    "Time": "38:46",
    "Subtitle": "I SWEAR ON MY MOTHER'S LIFE.",
    "Human Translation": "‎- 정말이야? ‎- 할머니 목숨을 걸고 맹세해"
  },
  {
    "Time": "38:47",
    "Subtitle": "NOT YET. STILL HUGGING.",
    "Human Translation": "‎- 아직이야 ‎- 계속 안고 있어"
  },
  {
    "Time": "38:51",
    "Subtitle": "SO, I BROUGHT US SOME COFFEE. WHY, I'M SHOCKED.",
    "Human Translation": "‎- 커피를 가져왔어 ‎- 충격적이네"
  },
  {
    "Time": "38:54",
    "Subtitle": "TRIPLE CAPS, EASY FOAM.",
    "Human Translation": "‎그것도 대형으로 샀어"
  },
  {
    "Time": "38:55",
    "Subtitle": "IF THAT DOESN'T WORK, WE'LL STICK OUR FINGERS IN A LIGHT SOCKET.",
    "Human Translation": "‎이걸로도 속이 안 풀리면 ‎콘센트에 젓가락 꽂고 죽자"
  },
  {
    "Time": "38:59",
    "Subtitle": "COME HERE.",
    "Human Translation": "‎가자"
  },
  {
    "Time": "39:01",
    "Subtitle": "UH! WOW. WHAT, DO THEY EXPECT YOU TO GET SMART ALL IN ONE DAY?",
    "Human Translation": "‎하루 만에 똑똑해지라고 하데?"
  },
  {
    "Time": "39:05",
    "Subtitle": "OH, THEY EXPECT A LOT OF THINGS.",
    "Human Translation": "‎- 하라는 건 아주 많아 ‎- 말해봐"
  },
  {
    "Time": "39:09",
    "Subtitle": "I DON'T KNOW.",
    "Human Translation": "‎글쎄, 어쨌든 길고 무섭고"
  },
  {
    "Time": "39:10",
    "Subtitle": "IT WAS JUST ONE BIG, LONG, SCARY, TWEEDY,",
    "Human Translation": "‎글쎄, 어쨌든 길고 무섭고 ‎배배 꼬인 하루였어"
  },
  {
    "Time": "39:13",
    "Subtitle": "BAD EIGHT HOURS.",
    "Human Translation": "‎배배 꼬인 하루였어"
  },
  {
    "Time": "39:15",
    "Subtitle": "ADD SOME HAIR SPRAY AND YOU GOT MY DAY.",
    "Human Translation": "‎거기 헤어스프레이만 뿌리면 ‎내 하루와 똑같겠네"
  },
  {
    "Time": "39:18",
    "Subtitle": "ONE OF THE GIRLS ALREADY HATES ME, THE GUYS ARE WEIRD.",
    "Human Translation": "‎여자애 하나는 벌써 날 미워하고 ‎남자애들은 이상해"
  },
  {
    "Time": "39:21",
    "Subtitle": "WEIRDER THAN OTHER GUYS? YEAH. THEY KEPT CALLING ME \"MARY.\"",
    "Human Translation": "‎- 남자는 다 이상하잖아 ‎- 날 메리라고 불렀어"
  },
  {
    "Time": "39:24",
    "Subtitle": "YOU'RE KIDDING ME.",
    "Human Translation": "‎정말이야?"
  },
  {
    "Time": "39:25",
    "Subtitle": "WOW. I CAN'T BELIEVE THEY STILL SAY THAT.",
    "Human Translation": "‎아직도 그렇게 부른다니 ‎믿을 수가 없네"
  },
  {
    "Time": "39:28",
    "Subtitle": "WHY? WHAT DOES IT MEAN? LIKE VIRGIN MARY.",
    "Human Translation": "‎- 왜, 무슨 뜻인데? ‎- 성모 마리아란 뜻이야"
  },
  {
    "Time": "39:32",
    "Subtitle": "IT MEANS THEY THINK YOU LOOK LIKE A GOODY-GOODY.",
    "Human Translation": "‎네가 예쁘다고 한 소리야 ‎- 말도 안 돼 ‎- 아니야"
  },
  {
    "Time": "39:36",
    "Subtitle": "WHAT WOULD THEY HAVE CALLED ME IF THEY THOUGHT I LOOKED LIKE A SLUT?",
    "Human Translation": "‎내가 헤픈 여자로 보이면 ‎뭐라고 불러?"
  },
  {
    "Time": "39:40",
    "Subtitle": "WELL, THEY MIGHT HAVE ADDED A \"MAGDALENE\" TO IT.",
    "Human Translation": "‎'막달라 마리아' 라고 불렀겠지"
  },
  {
    "Time": "39:42",
    "Subtitle": "WOW. BIBLICAL INSULTS. THIS IS AN ADVANCED SCHOOL.",
    "Human Translation": "‎성경을 이용한 욕이라니 ‎정말 수준이 높은 학교네"
  },
  {
    "Time": "39:51",
    "Subtitle": "IT WAS SO WEIRD NOT HAVING YOU IN SCHOOL TODAY.",
    "Human Translation": "‎오늘 학교에 네가 없으니 ‎기분이 이상했어"
  },
  {
    "Time": "39:55",
    "Subtitle": "I MEAN, I FINALLY NOTICED SOME OF THE OTHER KIDS.",
    "Human Translation": "‎다른 애들도 ‎눈에 들어오더라니까"
  },
  {
    "Time": "39:57",
    "Subtitle": "LET ME JUST SAY, THEY ARE A SAD LOT.",
    "Human Translation": "‎정말 지루한 애들이야"
  },
  {
    "Time": "40:00",
    "Subtitle": "ADD A COUPLE PLAID SKIRTS AND YOU'VE GOT THE CHILTON FREAKS.",
    "Human Translation": "‎체크 치마만 입히면 ‎칠튼 애들과 똑같아"
  },
  {
    "Time": "40:04",
    "Subtitle": "I TOTALLY MISS YOU. I MISS YOU.",
    "Human Translation": "‎- 네가 보고 싶었어 ‎- 나도"
  },
  {
    "Time": "40:07",
    "Subtitle": "I HAVE AN IDEA.",
    "Human Translation": "‎내게 좋은 생각이 있어"
  },
  {
    "Time": "40:09",
    "Subtitle": "WHAT ABOUT ON TUESDAYS AND THURSDAYS,",
    "Human Translation": "‎화요일과 목요일마다"
  },
  {
    "Time": "40:11",
    "Subtitle": "WHEN I GO INTO HARTFORD FOR MY BUSINESS CLASS,",
    "Human Translation": "‎내가 하트포드에 ‎경영 수업을 받으러 갈 때"
  },
  {
    "Time": "40:13",
    "Subtitle": "WHAT IF LANE COMES ALONG, AND YOU GUYS CAN SHOP AND STUDY,",
    "Human Translation": "‎레인도 같이 가서 ‎둘이 쇼핑과 공부도 하고"
  },
  {
    "Time": "40:16",
    "Subtitle": "AND JOIN A CULT, AND SHAVE YOUR HEADS?",
    "Human Translation": "‎이단교에 들어가 ‎머리도 미는 게 어때?"
  },
  {
    "Time": "40:17",
    "Subtitle": "REALLY? ALL EXCEPT THE \"SHAVING YOUR HEADS\" PART.",
    "Human Translation": "‎- 정말이에요? ‎- 머리를 미는 것만 빼고"
  },
  {
    "Time": "40:21",
    "Subtitle": "OH, NO. WHAT TIME IS IT?",
    "Human Translation": "‎이런, 지금 몇 시야?"
  },
  {
    "Time": "40:24",
    "Subtitle": "6:30.",
    "Human Translation": "‎6시 30분"
  },
  {
    "Time": "40:25",
    "Subtitle": "I'M LATE FOR DINNER.",
    "Human Translation": "‎- 저녁식사에 늦었네 ‎- 또?"
  },
  {
    "Time": "40:27",
    "Subtitle": "AGAIN? LANE, YOUR MOTHER IS GONNA KILL ME",
    "Human Translation": "‎- 저녁식사에 늦었네 ‎- 또? ‎계속 널 배불리 먹이면 ‎네 엄마가 날 죽일지도 몰라"
  },
  {
    "Time": "40:29",
    "Subtitle": "IF I KEEP SENDING YOU HOME FAT AND HAPPY.",
    "Human Translation": "‎계속 널 배불리 먹이면 ‎네 엄마가 날 죽일지도 몰라"
  },
  {
    "Time": "40:31",
    "Subtitle": "I'M SORRY.",
    "Human Translation": "‎계속 널 배불리 먹이면 ‎네 엄마가 날 죽일지도 몰라 ‎엄마가 두부 대량 판매 ‎사이트를 찾아서 그래요"
  },
  {
    "Time": "40:32",
    "Subtitle": "BUT SHE FOUND A WEB SITE THAT SELLS TOFU IN BULK.",
    "Human Translation": "‎엄마가 두부 대량 판매 ‎사이트를 찾아서 그래요"
  },
  {
    "Time": "40:35",
    "Subtitle": "YOU'RE KIDDING, RIGHT?",
    "Human Translation": "‎설마, 농담이겠지?"
  },
  {
    "Time": "40:36",
    "Subtitle": "YESTERDAY SHE WENT OUT AND BOUGHT A BIGGER FRIDGE.",
    "Human Translation": "‎어젠 두부를 넣을 ‎대형 냉장고도 사셨어요"
  },
  {
    "Time": "40:39",
    "Subtitle": "BOY, HONEY, YOUR LIFE IS SCARY.",
    "Human Translation": "‎네 인생은 정말 무서워"
  },
  {
    "Time": "40:41",
    "Subtitle": "CAN I HAVE YOUR CRUST? IT'S THE LEAST I CAN DO.",
    "Human Translation": "‎- 그 빵 나 줄래? ‎- 이것밖에 해 줄 게 없네"
  },
  {
    "Time": "40:44",
    "Subtitle": "THANKS. BYE.",
    "Human Translation": "‎고마워, 안녕"
  },
  {
    "Time": "40:56",
    "Subtitle": "A PIZZA FOR YOUR THOUGHTS.",
    "Human Translation": "‎무슨 생각하는지 토해봐"
  },
  {
    "Time": "40:59",
    "Subtitle": "I WISH I COULD FIGURE OUT A WAY TO GET PARIS OFF MY BACK.",
    "Human Translation": "‎패리스를 쫓을 방법을 찾고 있어"
  },
  {
    "Time": "41:03",
    "Subtitle": "YEAH. ANGRY CHICKS ARE THE WORST.",
    "Human Translation": "‎화난 계집애가 제일 무섭지"
  },
  {
    "Time": "41:05",
    "Subtitle": "WHEN I WAS IN HIGH SCHOOL, I HAD A PARIS.",
    "Human Translation": "‎나도 고등학생 때 ‎패리스 같은 애가 있었어"
  },
  {
    "Time": "41:08",
    "Subtitle": "YEAH? SHE WAS HORRIBLE.",
    "Human Translation": "‎- 진짜? ‎- 그래, 끔찍했지"
  },
  {
    "Time": "41:10",
    "Subtitle": "HOW'D YOU GET RID OF HER? I GOT PREGNANT AND DROPPED OUT.",
    "Human Translation": "‎- 어떻게 쫓았는데? ‎- 임신하고 자퇴했지"
  },
  {
    "Time": "41:13",
    "Subtitle": "WHAT IF I JUST LEARN TO FRENCH BRAID HER HAIR? EVEN BETTER.",
    "Human Translation": "‎- 디스코 머리를 만들어 버릴까? ‎- 그게 더 좋겠네"
  },
  {
    "Time": "41:17",
    "Subtitle": "SWEETIE, YOU CAN'T LET THOSE KIDS GET YOU DOWN.",
    "Human Translation": "‎애들 때문에 기죽으면 안 돼"
  },
  {
    "Time": "41:20",
    "Subtitle": "I KNOW.",
    "Human Translation": "‎나도 알아"
  },
  {
    "Time": "41:21",
    "Subtitle": "DO YOU WANT ME TO TALK TO ANYBODY?",
    "Human Translation": "‎내가 얘기를 해볼까?"
  },
  {
    "Time": "41:23",
    "Subtitle": "A PARENT, A TEACHER, A BIG GUY NAMED MOOSE?",
    "Human Translation": "‎학부모나 선생님이나 ‎가제트 형사에게?"
  },
  {
    "Time": "41:26",
    "Subtitle": "I'LL JUST FIGURE IT OUT FOR MYSELF. OKAY.",
    "Human Translation": "‎- 그냥 내가 알아서 할게 ‎- 그래"
  },
  {
    "Time": "41:31",
    "Subtitle": "WHAT?",
    "Human Translation": "‎왜?"
  },
  {
    "Time": "41:32",
    "Subtitle": "I WAS JUST THINKING ABOUT THE WAY PARIS' FACE LOOKED",
    "Human Translation": "‎마틴 루터 질문에서 ‎패리스를 이겼을 때"
  },
  {
    "Time": "41:35",
    "Subtitle": "WHEN I BEAT HER TO THAT MARTIN LUTHER QUESTION.",
    "Human Translation": "‎마틴 루터 질문에서 ‎패리스를 이겼을 때 ‎그 애 얼굴이 떠올랐어"
  },
  {
    "Time": "41:38",
    "Subtitle": "GOOD, HUH? 14 SHADES OF PURPLE.",
    "Human Translation": "‎- 좋았어? ‎- 붉으락푸르락 해졌지"
  },
  {
    "Time": "41:40",
    "Subtitle": "COOL. TOMORROW I'M SHOOTING FOR 15.",
    "Human Translation": "‎- 멋지네 ‎- 내일은 더 빨개질 거야"
  },
  {
    "Time": "41:44",
    "Subtitle": "HEY, WHAT DO YOU THINK OF LUKE?",
    "Human Translation": "‎루크를 어떻게 생각해?"
  },
  {
    "Time": "41:46",
    "Subtitle": "WHAT DO YOU MEAN?",
    "Human Translation": "‎루크를 어떻게 생각해? ‎- 무슨 뜻이야? ‎- 루크가 잘 생긴 것 같아?"
  },
  {
    "Time": "41:47",
    "Subtitle": "I MEAN, DO YOU THINK HE'S CUTE?",
    "Human Translation": "‎- 무슨 뜻이야? ‎- 루크가 잘 생긴 것 같아?"
  },
  {
    "Time": "41:49",
    "Subtitle": "OH, NO. NO WAY. NO WAY WHAT?",
    "Human Translation": "‎- 무슨 뜻이야? ‎- 루크가 잘 생긴 것 같아? ‎- 아니, 그건 안 돼 ‎- 뭐가 안 된다는 거야?"
  },
  {
    "Time": "41:51",
    "Subtitle": "YOU CANNOT DATE LUKE.",
    "Human Translation": "‎- 아니, 그건 안 돼 ‎- 뭐가 안 된다는 거야? ‎- 루크랑 데이트는 안 돼 ‎- 누가 데이트한대?"
  },
  {
    "Time": "41:53",
    "Subtitle": "I SAID NOTHING ABOUT DATING LUKE.",
    "Human Translation": "‎- 루크랑 데이트는 안 돼 ‎- 누가 데이트한대?"
  },
  {
    "Time": "41:55",
    "Subtitle": "IF YOU DATE HIM, YOU'LL BREAK UP,",
    "Human Translation": "‎- 루크랑 데이트는 안 돼 ‎- 누가 데이트한대? ‎그러다 헤어지면 ‎다시는 저기서 못 먹잖아"
  },
  {
    "Time": "41:57",
    "Subtitle": "AND WE'LL NEVER BE ABLE TO EAT THERE AGAIN.",
    "Human Translation": "‎그러다 헤어지면 ‎다시는 저기서 못 먹잖아"
  },
  {
    "Time": "41:59",
    "Subtitle": "I REPEAT, I SAID NOTHING ABOUT DATING LUKE.",
    "Human Translation": "‎다시 말하지만 ‎데이트한다는 말은 안 했어"
  },
  {
    "Time": "42:02",
    "Subtitle": "DATE AL FROM PANCAKE WORLD. HIS FOOD STINKS.",
    "Human Translation": "‎팬케이크 가게의 앨을 만나 ‎거기 음식은 냄새도 나잖아"
  },
  {
    "Time": "42:05",
    "Subtitle": "I CANNOT BELIEVE WHAT I'M HEARING.",
    "Human Translation": "‎그게 무슨 소리야?"
  },
  {
    "Time": "42:07",
    "Subtitle": "AL'S FOOD DOES NOT STINK. AL STINKS.",
    "Human Translation": "‎냄새는 음식이 아니라 ‎앨한테서 나는 거야"
  }
];

const EP3_DATA = [
  {
    "Time": "1s",
    "Subtitle": "DINNER WAS LOVELY, EMILY. MIRA DOES MAKE A PERFECT CASSOULET.",
    "Human Translation": "- 맛있는 저녁이었소, 에밀리 - 미라의 카술레는 별미죠"
  },
  {
    "Time": "5s",
    "Subtitle": "WHO'S MIRA? OUR COOK.",
    "Human Translation": "- 미라가 누구죠? - 요리사지"
  },
  {
    "Time": "8s",
    "Subtitle": "I THOUGHT THE COOK WAS HEIDI. WE LET HEIDI GO MONTHS AGO.",
    "Human Translation": "- 요리사는 하이디였잖아요 - 하이디는 몇 달 전에 잘랐어"
  },
  {
    "Time": "12s",
    "Subtitle": "SHE HAD A PROBLEM CLOSING THINGS -- THE DOOR, THE REFRIGERATOR...",
    "Human Translation": "닫는 데 서툴렀거든 문이나 냉장고나…"
  },
  {
    "Time": "15s",
    "Subtitle": "THE LIQUOR BOTTLE.",
    "Human Translation": "술병까지"
  },
  {
    "Time": "17s",
    "Subtitle": "THEN IT WAS TRINA, THEN SOPHIA. I LIKED SOPHIA.",
    "Human Translation": "- 그 후엔 트리나, 소피아였지 - 소피아가 괜찮았죠"
  },
  {
    "Time": "21s",
    "Subtitle": "YOU DID NOT. I DIDN'T?",
    "Human Translation": "- 아니었어요 - 아니라고요?"
  },
  {
    "Time": "23s",
    "Subtitle": "SHE WAS THE ONE WHO SANG. THAT'S RIGHT -- TERRIBLE WOMAN.",
    "Human Translation": "- 노래하던 게 그 여자예요 - 그렇군, 지독한 여자였죠"
  },
  {
    "Time": "28s",
    "Subtitle": "AND AFTER SOPHIA, WE HAD ANTON.",
    "Human Translation": "소피아 다음엔 안톤이었어"
  },
  {
    "Time": "30s",
    "Subtitle": "THAT'S RIGHT. ANTON WAS THE ONE THAT I LIKED.",
    "Human Translation": "맞아, 진짜 괜찮았던 건 안톤이었어요"
  },
  {
    "Time": "33s",
    "Subtitle": "I'M SORRY, DAD. HOW DO YOU MIX UP ANTON AND SOPHIA?",
    "Human Translation": "아빠, 어떻게 안톤과 소피아를 혼동할 수가 있죠?"
  },
  {
    "Time": "37s",
    "Subtitle": "WHAT DO YOU MEAN? ONE IS A MAN, AND ONE IS A WOMAN.",
    "Human Translation": "- 무슨 뜻이지? - 남자와 여자란 차이가 있잖아요"
  },
  {
    "Time": "41s",
    "Subtitle": "AND YOUR POINT BEING? THAT ONE IS A MAN AND ONE IS A WOMAN.",
    "Human Translation": "- 요점이 뭐야? - 남자와 여자란 차이가 있다고요"
  },
  {
    "Time": "45s",
    "Subtitle": "I HAVE A LOT TO DO IN A DAY, LORELAI.",
    "Human Translation": "난 아주 바쁜 사람이란다"
  },
  {
    "Time": "47s",
    "Subtitle": "I DON'T HAVE TIME TO KEEP UP WITH THE MULTITUDES OF PEOPLE YOUR MOTHER EMPLOYS.",
    "Human Translation": "네 엄마가 고용하는… 수많은 사람들을 일일이 기억할 순 없어"
  },
  {
    "Time": "53s",
    "Subtitle": "BUT ONE IS A MAN, AND ONE IS A WOMAN.",
    "Human Translation": "하지만 남자와 여자라는 차이가 있잖아요"
  },
  {
    "Time": "59s",
    "Subtitle": "THE DINNER WAS SO WONDERFUL, MIRA. IT'S SARAH.",
    "Human Translation": "- 저녁 맛있었어요, 미라 - 전 사라예요"
  },
  {
    "Time": "1:03",
    "Subtitle": "OH, I'M SORRY.",
    "Human Translation": "죄송해요"
  },
  {
    "Time": "1:06",
    "Subtitle": "MOM, HER NAME IS SARAH.",
    "Human Translation": "엄마, 이름이 사라라잖아요"
  },
  {
    "Time": "1:09",
    "Subtitle": "I THOUGHT SHE SAID MIRA. UGH!",
    "Human Translation": "미라라고 한 줄 알았어"
  },
  {
    "Time": "1:12",
    "Subtitle": "GRANDMA, THESE PLATES ARE REALLY PRETTY.",
    "Human Translation": "할머니, 접시가 정말 예쁘네요"
  },
  {
    "Time": "1:16",
    "Subtitle": "THANK YOU. THEY WERE YOUR GREAT-GRANDMOTHER'S.",
    "Human Translation": "고맙다, 로리 네 증조모의 접시란다"
  },
  {
    "Time": "1:19",
    "Subtitle": "LORELAI THE FIRST. I THOUGHT MOM WAS THE FIRST.",
    "Human Translation": "- 로렐라이 1세지 - 엄마가 처음 아닌가요?"
  },
  {
    "Time": "1:22",
    "Subtitle": "NOT IN THE NAME.",
    "Human Translation": "이름은 아니야"
  },
  {
    "Time": "1:24",
    "Subtitle": "BUT IN MANY OTHER THINGS, I WAS A TRAILBLAZER.",
    "Human Translation": "그래, 하지만 다른 면에서 난 뭐든지 선구자였지"
  },
  {
    "Time": "1:28",
    "Subtitle": "JUST FINISHING YOUR THOUGHT, MOM.",
    "Human Translation": "엄마 대신 말했어요"
  },
  {
    "Time": "1:29",
    "Subtitle": "LORELAI THE FIRST WAS MY MOTHER.",
    "Human Translation": "로렐라이 1세는 내 어머니란다"
  },
  {
    "Time": "1:31",
    "Subtitle": "SHE WAS AN EXTREMELY ACCOMPLISHED EQUESTRIAN,",
    "Human Translation": "어머님은 승마에도 재능이 있고…"
  },
  {
    "Time": "1:33",
    "Subtitle": "A DISTINGUISHED PATRON OF THE ARTS,",
    "Human Translation": "저명한 예술 후원가이자…"
  },
  {
    "Time": "1:35",
    "Subtitle": "AND SHE WAS ALSO WORLD-FAMOUS FOR HER MASQUERADE BALLS.",
    "Human Translation": "세계에서 가장 유명한 가장무도회의 주최자셨지"
  },
  {
    "Time": "1:39",
    "Subtitle": "SHE WAS QUITE A WOMAN.",
    "Human Translation": "어머님은 대단한 분이셨단다"
  },
  {
    "Time": "1:40",
    "Subtitle": "YES, SHE WAS. MIRA, CUT THE CAKE!",
    "Human Translation": "맞아요 미라, 케이크를 잘라 줘요"
  },
  {
    "Time": "1:43",
    "Subtitle": "YES, AND WHY DON'T YOU BRING SARAH OUT HERE WITH YOU?!",
    "Human Translation": "올 때 사라랑 같이 와요"
  },
  {
    "Time": "1:50",
    "Subtitle": "♪ IF YOU'RE OUT ON THE ROAD ♪",
    "Human Translation": "길모어 걸스"
  },
  {
    "Time": "1:59",
    "Subtitle": "♪ ALL YOU HAVE TO DO IS CALL MY NAME ♪ ♪ AND I'LL BE THERE ON THE NEXT TRAIN ♪",
    "Human Translation": "로렌 그래험"
  },
  {
    "Time": "2:08",
    "Subtitle": "♪ WHERE YOU LEAD, I WILL FOLLOW ♪",
    "Human Translation": "알렉시스 블레델"
  },
  {
    "Time": "2:16",
    "Subtitle": "♪ IF YOU NEED ♪ ♪ IF YOU NEED ♪",
    "Human Translation": "멜리사 맥카티"
  },
  {
    "Time": "2:18",
    "Subtitle": "♪ YOU NEED ME TO BE WITH YOU ♪",
    "Human Translation": "케이코 아제나 야닉 트루스데일"
  },
  {
    "Time": "2:21",
    "Subtitle": "♪ I WILL FOLLOW ♪",
    "Human Translation": "야닉 트루스데일 스캇 패터슨"
  },
  {
    "Time": "2:25",
    "Subtitle": "♪ WHERE YOU LEAD ♪",
    "Human Translation": "켈리 비숍"
  },
  {
    "Time": "2:28",
    "Subtitle": "♪ I WILL FOLLOW ♪ ♪ ANYWHERE ♪ ♪ ANYWHERE ♪",
    "Human Translation": "에드워드 허먼"
  },
  {
    "Time": "2:46",
    "Subtitle": "SO, LORELAI, HOW ARE THINGS AT THAT CHARMING LITTLE INN OF YOURS?",
    "Human Translation": "로렐라이, 그 작고 예쁜 모텔은 요즘 어떠니?"
  },
  {
    "Time": "2:50",
    "Subtitle": "THEY'RE STILL CHARMING AND LITTLE.",
    "Human Translation": "아직도 작고 예뻐요"
  },
  {
    "Time": "2:52",
    "Subtitle": "WE'RE CROSSING OUR FINGERS IT DOESN'T BECOME RUDE AND LARGE.",
    "Human Translation": "모텔이 건방을 떨며 크지 않길 바랄 뿐이죠"
  },
  {
    "Time": "2:56",
    "Subtitle": "MOM'S HAVING A HUGE WEDDING THERE THIS WEEK.",
    "Human Translation": "이번 주에 모텔에서 큰 결혼식이 있을 거예요"
  },
  {
    "Time": "2:58",
    "Subtitle": "REALLY? YEAH.",
    "Human Translation": "- 그래? - 네"
  },
  {
    "Time": "2:59",
    "Subtitle": "THERE'S PEOPLE COMING FROM ALL OVER THE COUNTRY.",
    "Human Translation": "전국 각지에서 사람들이 모여들 거예요"
  },
  {
    "Time": "3:02",
    "Subtitle": "WELL, ISN'T THAT NICE?",
    "Human Translation": "- 정말 다행이구나 - 네"
  },
  {
    "Time": "3:03",
    "Subtitle": "YEAH. RORY, HOW'S CHILTON?",
    "Human Translation": "- 정말 다행이구나 - 네 - 로리, 칠튼은 어떠니? - 내 상대는 끝이군요"
  },
  {
    "Time": "3:05",
    "Subtitle": "DONE WITH ME NOW.",
    "Human Translation": "- 로리, 칠튼은 어떠니? - 내 상대는 끝이군요"
  },
  {
    "Time": "3:07",
    "Subtitle": "I'M SORRY. WAS THERE MORE?",
    "Human Translation": "미안하다 아직 얘기가 남았니?"
  },
  {
    "Time": "3:09",
    "Subtitle": "UH, RORY HAS TO PICK A TEAM SPORT TO PLAY. IT'S A REQUIREMENT.",
    "Human Translation": "- 로리가 운동부에 가입한대요 - 필수거든요"
  },
  {
    "Time": "3:13",
    "Subtitle": "PHYSICAL FITNESS IS AS IMPORTANT AS INTELLECTUAL FITNESS.",
    "Human Translation": "'체력도 지적 능력만큼 중요한 것이다'"
  },
  {
    "Time": "3:16",
    "Subtitle": "SO SAYS PLATO, AND SO SAY I. WHAT SPORT ARE YOU GOING TO PICK?",
    "Human Translation": "- 플라톤의 말이다, 나도 동감이지 - 어떤 운동을 고를 거니?"
  },
  {
    "Time": "3:20",
    "Subtitle": "I'M NOT SURE. I'M NOT REALLY THE ATHLETIC TYPE.",
    "Human Translation": "잘 모르겠어요 운동엔 소질이 없거든요"
  },
  {
    "Time": "3:23",
    "Subtitle": "I TOLD HER GO FOR THE DEBATING TEAM.",
    "Human Translation": "전 토론부에 가입하라고 했어요"
  },
  {
    "Time": "3:25",
    "Subtitle": "THAT'S NOT A SPORT. IT IS THE WAY GILMORES PLAY.",
    "Human Translation": "- 운동이 아니잖아 - 우리처럼 하면 운동도 돼"
  },
  {
    "Time": "3:29",
    "Subtitle": "WHAT ARE YOUR CHOICES? GOD, THERE'S, LIKE, A THOUSAND OF THEM --",
    "Human Translation": "- 부서가 뭐 뭐 있지? - 수천 개나 돼요"
  },
  {
    "Time": "3:33",
    "Subtitle": "BASKETBALL, LACROSSE, SWIMMING, TRACK, GOLF.",
    "Human Translation": "농구, 라크로스, 수영 육상, 골프…"
  },
  {
    "Time": "3:37",
    "Subtitle": "GOLF? YEAH.",
    "Human Translation": "- 골프라고? - 네"
  },
  {
    "Time": "3:39",
    "Subtitle": "YOUR GRANDFATHER IS A GOLF PLAYER.",
    "Human Translation": "네 할아버지도 골프를 하신단다"
  },
  {
    "Time": "3:41",
    "Subtitle": "HE PLAYS EVERY WEEK AT THE CLUB. HE COULD TEACH YOU TO PLAY LIKE A PRO.",
    "Human Translation": "매주 클럽에 나가시니 널 가르쳐 주실 수도 있어"
  },
  {
    "Time": "3:45",
    "Subtitle": "EMILY... HE COULD TAKE YOU SUNDAY.",
    "Human Translation": "일요일에 같이 가면 되겠구나 더할 나위 없네"
  },
  {
    "Time": "3:48",
    "Subtitle": "IT'S NOT SOMETHING YOU CAN TEACH IN AN AFTERNOON.",
    "Human Translation": "골프를 하루 만에 배울 순 없어요"
  },
  {
    "Time": "3:50",
    "Subtitle": "THAT'S OKAY. RORY CAN PICK SOMETHING ELSE.",
    "Human Translation": "괜찮아요 다른 걸 고르면 되죠"
  },
  {
    "Time": "3:52",
    "Subtitle": "WHY SHOULD SHE PICK SOMETHING ELSE?",
    "Human Translation": "왜 다른 걸 골라?"
  },
  {
    "Time": "3:54",
    "Subtitle": "SHE NEEDS TO LEARN A SPORT, AND RICHARD CAN TEACH HER A SPORT.",
    "Human Translation": "운동을 배워야 하니 할아버지께 배우면 되잖니"
  },
  {
    "Time": "3:57",
    "Subtitle": "YOU CAN USE YOUR MOTHER'S OLD GOLF CLUBS.",
    "Human Translation": "네 엄마의 골프채를 쓰거라"
  },
  {
    "Time": "3:59",
    "Subtitle": "THEY'RE GATHERING DUST ALONG WITH THE REST OF HER POTENTIAL.",
    "Human Translation": "위층에서 다른 짐과 함께 먼지에 파묻혀 있으니 말이다"
  },
  {
    "Time": "4:02",
    "Subtitle": "OKAY. MOM, COULD I MAYBE TALK TO YOU FOR A MINUTE?",
    "Human Translation": "엄마, 잠깐 얘기 좀 할까요?"
  },
  {
    "Time": "4:05",
    "Subtitle": "WE'RE HAVING DESSERT. I'D LIKE TO TALK TO YOU",
    "Human Translation": "- 디저트를 먹어야지 - 그 전에 얘기하고 싶어요"
  },
  {
    "Time": "4:08",
    "Subtitle": "BEFORE THE SUGAR SETS IN AND MAKES ME CRAZY.",
    "Human Translation": "당분 때문에 제가 미쳐 버리기 전에요"
  },
  {
    "Time": "4:10",
    "Subtitle": "YOU ARE THE ODDEST PERSON. Yeah -- too easy.",
    "Human Translation": "- 너 참 이상하구나 - 꼭 한마디 해야죠"
  },
  {
    "Time": "4:14",
    "Subtitle": "WHAT IS SO IMPORTANT THAT IT CAN'T WAIT FOR CAKE?",
    "Human Translation": "케이크도 못 기다릴 정도로 중요한 일이 뭐니?"
  },
  {
    "Time": "4:16",
    "Subtitle": "KEEP MOVIN'.",
    "Human Translation": "계속 걸어요"
  },
  {
    "Time": "4:19",
    "Subtitle": "I CAN'T GO FURTHER, UNLESS YOU'D LIKE ME TO BORE MY WAY THROUGH THE WALL.",
    "Human Translation": "여기까지가 끝이야 아니면 벽이라도 뚫을까?"
  },
  {
    "Time": "4:23",
    "Subtitle": "DON'T DO THIS, MOM. DO WHAT?",
    "Human Translation": "- 이러지 말아요, 엄마 - 뭘?"
  },
  {
    "Time": "4:25",
    "Subtitle": "FORCE RORY AND DAD TO GO GOLFING. I'M NOT FORCING ANYBODY.",
    "Human Translation": "- 로리와 아빠에게 한 강요요 - 강요라니?"
  },
  {
    "Time": "4:28",
    "Subtitle": "YOU'RE MANIPULATING THE SITUATION IN A WAY",
    "Human Translation": "둘 다 난처하게 만들었잖아요"
  },
  {
    "Time": "4:30",
    "Subtitle": "THAT GIVES NO ONE A WAY OUT. THAT'S FORCE.",
    "Human Translation": "둘 다 난처하게 만들었잖아요 그게 강요죠 사전에도 있어요"
  },
  {
    "Time": "4:33",
    "Subtitle": "I'M JUST TRYING TO HELP YOUR DAUGHTER.",
    "Human Translation": "로리에게 배울 기회를 주고 싶은 것뿐이야"
  },
  {
    "Time": "4:35",
    "Subtitle": "SHE'LL FIND ANOTHER SPORT. WHY SHOULD SHE?",
    "Human Translation": "- 고맙지만 딴 걸 찾을 거예요 - 왜 그래야 하지?"
  },
  {
    "Time": "4:37",
    "Subtitle": "SHE DOESN'T WANT TO GO AND DAD DOESN'T WANT TO TAKE HER.",
    "Human Translation": "로리는 가기 싫고 아빠도 탐탁지 않아 하시니까요 네 아빠는 내가 말만 하면 푸줏간에서도 이발할 양반이야"
  },
  {
    "Time": "4:40",
    "Subtitle": "YOUR FATHER DOESN'T KNOW WHAT HE WANTS.",
    "Human Translation": "네 아빠는 내가 말만 하면 푸줏간에서도 이발할 양반이야"
  },
  {
    "Time": "4:43",
    "Subtitle": "JUST LET IT GO -- PLEASE.",
    "Human Translation": "네 아빠는 내가 말만 하면 푸줏간에서도 이발할 양반이야 제발 포기하세요"
  },
  {
    "Time": "4:46",
    "Subtitle": "WELL, ISN'T THIS INTERESTING? YOU'RE AFRAID.",
    "Human Translation": "정말 재미있구나 - 넌 두려운 거야 - 뭐가요?"
  },
  {
    "Time": "4:50",
    "Subtitle": "OF WHAT?",
    "Human Translation": "- 넌 두려운 거야 - 뭐가요?"
  },
  {
    "Time": "4:52",
    "Subtitle": "THAT RORY WILL ENJOY THE CLUB AND HAVE A GOOD TIME WITHOUT YOU.",
    "Human Translation": "로리가 너도 없는데 클럽을 좋아할까 봐"
  },
  {
    "Time": "4:55",
    "Subtitle": "THAT'S CRAZY. I AGREE.",
    "Human Translation": "- 말도 안 돼요 - 맞아"
  },
  {
    "Time": "4:57",
    "Subtitle": "I'M NOT AFRAID. THEN LET HER GO.",
    "Human Translation": "- 전 두렵지 않아요 - 그럼 보내 주렴"
  },
  {
    "Time": "4:59",
    "Subtitle": "SHE WON'T ENJOY IT, MOM. WHY DON'T WE JUST LET RORY DECIDE?",
    "Human Translation": "- 로리도 싫어할 거예요 - 그건 로리가 결정해야지"
  },
  {
    "Time": "5:04",
    "Subtitle": "RORY IS THE SWEETEST KID AND SHE WON'T TELL YOU THAT SHE DOESN'T WANT TO GO",
    "Human Translation": "이 세상에 로리처럼 착한 애는 없어요 엄마가 마음 상할까 봐 안 가겠단 말도 못한다고요"
  },
  {
    "Time": "5:07",
    "Subtitle": "BECAUSE SHE'S AFRAID OF HURTING YOUR FEELINGS.",
    "Human Translation": "엄마가 마음 상할까 봐 안 가겠단 말도 못한다고요"
  },
  {
    "Time": "5:09",
    "Subtitle": "YOU COULD GIVE HER SOME COACHING TO GET OVER THAT.",
    "Human Translation": "네가 조금만 도와주면 그 성격도 금방 고치겠지"
  },
  {
    "Time": "5:12",
    "Subtitle": "I'M NOT TRYING TO HURT YOUR FEELINGS. THIS IS NOT ABOUT YOU.",
    "Human Translation": "믿거나 말거나 이건 엄마랑 상관없어요"
  },
  {
    "Time": "5:16",
    "Subtitle": "OF COURSE IT'S ABOUT ME.",
    "Human Translation": "당연히 나랑 상관있지"
  },
  {
    "Time": "5:18",
    "Subtitle": "IF RORY GOES AND HAS A GOOD TIME WITHOUT YOU, THEN I WIN.",
    "Human Translation": "로리가 가서 재밌게 논다면 내가 이기는 거잖니"
  },
  {
    "Time": "5:21",
    "Subtitle": "OKAY, BOB BARKER. LISTEN, RORY KNOCKS HERSELF OUT ALL WEEK AT CHILTON.",
    "Human Translation": "그만해요, 사회자 양반 로리는 학교에서도 시달려요"
  },
  {
    "Time": "5:25",
    "Subtitle": "THE WEEKENDS ARE THE ONLY TIME SHE HAS TO UNWIND AND HAVE FUN.",
    "Human Translation": "휴식을 취하고 재밌게 노는 건 주말뿐이에요"
  },
  {
    "Time": "5:29",
    "Subtitle": "WITH YOU. I'M THERE.",
    "Human Translation": "- 너와 함께 말이지 - 집에 있으니까요"
  },
  {
    "Time": "5:31",
    "Subtitle": "SO LET ME GET THIS STRAIGHT --",
    "Human Translation": "그럼 정리해 보자"
  },
  {
    "Time": "5:33",
    "Subtitle": "THERE'S NO WAY THAT RORY COULD POSSIBLY ENJOY",
    "Human Translation": "네 아빠와 로리가 함께 즐겁게 지낼 가능성은…"
  },
  {
    "Time": "5:36",
    "Subtitle": "A WEEKEND DAY WITH HER GRANDFATHER.",
    "Human Translation": "전혀 없는 거구나"
  },
  {
    "Time": "5:37",
    "Subtitle": "YOU'RE JUST GONNA TWIST IT ALL AROUND.",
    "Human Translation": "꼭 그렇게 비꼬셔야만 직성이 풀려요?"
  },
  {
    "Time": "5:39",
    "Subtitle": "YOU KNOW YOUR DAUGHTER SO WELL, YOU DON'T EVEN HAVE TO ASK HER OPINION.",
    "Human Translation": "넌 딸을 그렇게 잘 아니 로리 의견도 안 물어보잖아?"
  },
  {
    "Time": "5:43",
    "Subtitle": "SHE'D BE MISERABLE, AND YOU KNOW IT.",
    "Human Translation": "로리가 싫어한다는 건 너도 아니까"
  },
  {
    "Time": "5:45",
    "Subtitle": "I'M SETTING MYSELF UP, BUT YES, SHE WOULD BE MISERABLE.",
    "Human Translation": "이것도 덫이겠지만 대답하죠 맞아요, 싫어할 거예요"
  },
  {
    "Time": "5:49",
    "Subtitle": "THAT SOUNDS A LITTLE CONTROLLING TO ME. I WALKED RIGHT INTO THAT.",
    "Human Translation": "- 딸이 네 인형이니? - 덫인 줄 알았어요"
  },
  {
    "Time": "5:52",
    "Subtitle": "INTERESTING, ISN'T IT -- YOU BEING THE ONE WHO'S CONTROLLING?",
    "Human Translation": "정말 재미있잖니? 네가 딸을 조종한다니"
  },
  {
    "Time": "5:56",
    "Subtitle": "I AM NOT BEING -- ACCORDING TO YOU,",
    "Human Translation": "- 전… - 네 말에 따르면…"
  },
  {
    "Time": "5:57",
    "Subtitle": "I WAS THE ONE IN THE FAMILY WITH THAT GIFT.",
    "Human Translation": "그런 재능은 내게만 있는 거잖니?"
  },
  {
    "Time": "6:00",
    "Subtitle": "I NEVER SAID --",
    "Human Translation": "난 그런 말 안했어요!"
  },
  {
    "Time": "6:01",
    "Subtitle": "WE'RE MORE ALIKE THAN YOU THOUGHT, AREN'T WE?",
    "Human Translation": "결국 너와 난 똑같아, 그렇지?"
  },
  {
    "Time": "6:06",
    "Subtitle": "YOU WIN.",
    "Human Translation": "엄마가 이겼어요"
  },
  {
    "Time": "6:09",
    "Subtitle": "THANK YOU.",
    "Human Translation": "고맙다"
  },
  {
    "Time": "6:17",
    "Subtitle": "MAN, DID YOU GET BLINDSIDED? I'M SO SORRY. THAT'S OKAY.",
    "Human Translation": "- 걸려들어서 미안해 - 괜찮아"
  },
  {
    "Time": "6:21",
    "Subtitle": "I TRIED TO STOP IT -- I SWEAR.",
    "Human Translation": "- 나도 막아 보려 했어 - 알아"
  },
  {
    "Time": "6:23",
    "Subtitle": "MAYBE IT WON'T BE THAT BAD. MAYBE I'LL LIKE IT.",
    "Human Translation": "- 그리 나쁘진 않을 거야 - 맞아 - 나도 좋아할지 모르잖아 - 맞아"
  },
  {
    "Time": "6:26",
    "Subtitle": "MAYBE YOU WILL. MAYBE YOU COULD COME WITH ME.",
    "Human Translation": "- 나도 좋아할지 모르잖아 - 맞아 - 엄마도 같이 가자 - '착각 공주' 란 팀이 있니?"
  },
  {
    "Time": "6:28",
    "Subtitle": "IS THERE A \"YOU'RE CRAZY\" TEAM? BECAUSE I THINK THEY'D MAKE YOU CAPTAIN.",
    "Human Translation": "- 엄마도 같이 가자 - '착각 공주' 란 팀이 있니? - 네가 딱 주장 감인데 - 부탁이야"
  },
  {
    "Time": "6:32",
    "Subtitle": "RORY, I LOVE YOU. I'D TAKE A BULLET FOR YOU.",
    "Human Translation": "엄마는 널 사랑해 총알도 막아줄 수 있어"
  },
  {
    "Time": "6:34",
    "Subtitle": "I'D STICK SOMETHING SHARP IN MY EAR THAN GO CLUBBING WITH YOU.",
    "Human Translation": "하지만 클럽에 가느니 차라리 자살할 거야"
  },
  {
    "Time": "6:37",
    "Subtitle": "FINE.",
    "Human Translation": "알았어"
  },
  {
    "Time": "6:39",
    "Subtitle": "I'D RATHER SLIDE DOWN A BANISTER OF RAZOR BLADES.",
    "Human Translation": "면도날 난간에서 미끄러지고…"
  },
  {
    "Time": "6:41",
    "Subtitle": "LAND IN A POOL OF ALCOHOL THAN GO TO THE CLUB WITH YOU.",
    "Human Translation": "술독에서 수영을 하더라도 클럽은 가기 싫어 - 알아들었어 - 리듬 탔으니 막지 마"
  },
  {
    "Time": "6:44",
    "Subtitle": "I'M ON A ROLL.",
    "Human Translation": "- 알아들었어 - 리듬 탔으니 막지 마"
  },
  {
    "Time": "6:46",
    "Subtitle": "I'D RATHER EAT MY HAND THAN GO CLUBBING WITH YOU.",
    "Human Translation": "차라리 내 손을 먹더라도 클럽은 가기 싫어"
  },
  {
    "Time": "6:49",
    "Subtitle": "I'D RATHER GET MY FACE SURGICALLY ALTERED TO LOOK LIKE THAT RICH LADY WITH THE LION HEAD",
    "Human Translation": "사자 머리의 이상한 얼굴로 성형수술을 하더라도…"
  },
  {
    "Time": "6:53",
    "Subtitle": "THAN GO TO THE CLUB WITH YOU.",
    "Human Translation": "클럽은 가기 싫어"
  },
  {
    "Time": "6:55",
    "Subtitle": "SHOULD I DRIVE SO YOU CAN CONTINUE?",
    "Human Translation": "계속 약 올릴 수 있게 운전은 내가 할까?"
  },
  {
    "Time": "6:57",
    "Subtitle": "WOULD YOU? THANKS. I'D RATHER CUT OFF MY HEAD, USE IT AS A PUNCH BOWL",
    "Human Translation": "고마워, 머리를 잘라서 그릇으로 쓴다고 해도…"
  },
  {
    "Time": "7:01",
    "Subtitle": "THAN GO TO THE CLUB WITH YOU.",
    "Human Translation": "클럽은 가기 싫어 인디펜던스 모텔"
  },
  {
    "Time": "7:10",
    "Subtitle": "AND YOU'LL WALK DOWN HERE OVER THE BRIDGE",
    "Human Translation": "이 다리를 건널 거예요"
  },
  {
    "Time": "7:12",
    "Subtitle": "WITH THE SWANS FLOATING BY AND THE MUSIC PLAYING.",
    "Human Translation": "백조가 헤엄치고 음악을 연주하겠죠"
  },
  {
    "Time": "7:15",
    "Subtitle": "WHAT ARE THEY DOING WITH THOSE PURPLE FLOWERS?",
    "Human Translation": "보라색 꽃은 왜 가져왔죠?"
  },
  {
    "Time": "7:17",
    "Subtitle": "DECORATING THE BRIDGE.",
    "Human Translation": "다리를 꾸밀 거예요"
  },
  {
    "Time": "7:18",
    "Subtitle": "I DIDN'T WANT PURPLE FLOWERS -- I WANTED PINK.",
    "Human Translation": "난 보라색이 아니라 분홍색 꽃이라고 했어요"
  },
  {
    "Time": "7:21",
    "Subtitle": "AND I WANTED BLUE.",
    "Human Translation": "전 파란 꽃이고요"
  },
  {
    "Time": "7:22",
    "Subtitle": "I THOUGHT VIOLET WOULD BE A NICE COMPROMISE.",
    "Human Translation": "합치면 보라색이잖아요"
  },
  {
    "Time": "7:24",
    "Subtitle": "WE PAID FOR PINK FLOWERS. AND BLUE FLOWERS.",
    "Human Translation": "- 분홍색 꽃 값을 줬잖아요 - 파란색하고요"
  },
  {
    "Time": "7:27",
    "Subtitle": "YOU DID NOT PAY FOR ANYTHING. I TOLD HER TO DECORATE WITH VIOLET FLOWERS.",
    "Human Translation": "돈은 너희가 안 냈고 보라색 꽃은 내가 주문했어"
  },
  {
    "Time": "7:31",
    "Subtitle": "IT'S VERY NICE OF HER TO TRY TO TAKE THE HEAT FOR ME.",
    "Human Translation": "나 대신 책임을 지신 거야 그러실 필요는 없었는데"
  },
  {
    "Time": "7:34",
    "Subtitle": "IF YOU DON'T LIKE IT, BUY YOUR OWN FLOWERS.",
    "Human Translation": "마음에 안 들면 꽃은 너희가 사렴"
  },
  {
    "Time": "7:41",
    "Subtitle": "YES. I THOUGHT SO.",
    "Human Translation": "그럴 줄 알았다"
  },
  {
    "Time": "7:44",
    "Subtitle": "NOW, GO AWAY. MY ADVIL IS WEARING OFF.",
    "Human Translation": "이제 저리 가 두통약 효과가 다 떨어졌다"
  },
  {
    "Time": "7:53",
    "Subtitle": "THEIR FATHER SPOILED THEM. OH, THEY'RE JUST EXCITED.",
    "Human Translation": "- 애 아빠가 애들을 망쳤어요 - 결혼식 때문에 그렇겠죠"
  },
  {
    "Time": "7:56",
    "Subtitle": "THEY'RE SPOILED...",
    "Human Translation": "버릇없는 애들이에요"
  },
  {
    "Time": "7:58",
    "Subtitle": "AND THEY WON'T MOVE AWAY.",
    "Human Translation": "절대 사라지지도 않겠죠"
  },
  {
    "Time": "8:04",
    "Subtitle": "WHAT IF IT RAINS? WE'LL PUT UP TENTS.",
    "Human Translation": "- 비가 내리면 어쩌죠? - 텐트를 칠 거예요"
  },
  {
    "Time": "8:07",
    "Subtitle": "WHAT IF IT'S TOO WINDY? WE'LL SECURE EVERYTHING",
    "Human Translation": "- 바람이 많이 불면? - 물건을 다 고정시키고…"
  },
  {
    "Time": "8:09",
    "Subtitle": "AND PUT EXTRA HAIR SPRAY IN EVERYBODY'S HAIR.",
    "Human Translation": "헤어스프레이를 더 뿌려야겠죠"
  },
  {
    "Time": "8:11",
    "Subtitle": "TOO HOT?",
    "Human Translation": "너무 더우면?"
  },
  {
    "Time": "8:12",
    "Subtitle": "WE'LL USE FANS THAT WON'T CAUSE DAMAGE,",
    "Human Translation": "양산과 선풍기만 있으면 괜찮을 거예요"
  },
  {
    "Time": "8:14",
    "Subtitle": "BECAUSE THE THINGS HAVE BEEN SECURED AND THE HAIR HAS BEEN SPRAYED.",
    "Human Translation": "물건도 다 고정했고 헤어스프레이도 뿌렸으니까요"
  },
  {
    "Time": "8:17",
    "Subtitle": "SO...I HAVE NOTHING TO WORRY ABOUT?",
    "Human Translation": "물건도 다 고정했고 헤어스프레이도 뿌렸으니까요 - 그럼 걱정할 게 없는 거죠? - 네"
  },
  {
    "Time": "8:19",
    "Subtitle": "NOPE.",
    "Human Translation": "- 그럼 걱정할 게 없는 거죠? - 네"
  },
  {
    "Time": "8:20",
    "Subtitle": "OH, THERE MUST BE SOMETHING. LISTEN, I HAVE EVERYTHING UNDER CONTROL.",
    "Human Translation": "- 분명 뭔가 있을 거예요 - 모든 준비를 끝냈어요"
  },
  {
    "Time": "8:24",
    "Subtitle": "GO HAVE A FABULOUS BUBBLE BATH, AND I'LL SEND UP SOME WINE",
    "Human Translation": "방에 가셔서 거품 목욕이라도 하세요 와인을 갖다 드리고…"
  },
  {
    "Time": "8:27",
    "Subtitle": "AND A MASSEUSE WHO BEARS A REMARKABLE RESEMBLANCE TO ANTONIO BANDERAS?",
    "Human Translation": "안토니오 반데라스를 닮은 마사지 전문가를 보낼게요"
  },
  {
    "Time": "8:32",
    "Subtitle": "HOW REMARKABLE? GET READY TO APPLAUD.",
    "Human Translation": "- 얼마나 닮았죠? - 박수 칠 준비나 하세요"
  },
  {
    "Time": "8:35",
    "Subtitle": "THIS IS MY FAVORITE PLACE IN THE WHOLE WORLD.",
    "Human Translation": "여기가 바로 지상낙원이군요"
  },
  {
    "Time": "8:53",
    "Subtitle": "COULD YOU SEND RORY UP TO ROOM 12 IN ABOUT 20 MINUTES? THANKS.",
    "Human Translation": "20분 후에 모리를 12호실로 보내요, 고마워요"
  },
  {
    "Time": "8:57",
    "Subtitle": "SO, ANY PROBLEMS?",
    "Human Translation": "- 문제 있나요? - 결혼식이오? 내 인생이오?"
  },
  {
    "Time": "8:59",
    "Subtitle": "[ French accent ] WITH THE WEDDING OR MY LIFE?",
    "Human Translation": "- 문제 있나요? - 결혼식이오? 내 인생이오? 힌트 하나 드리죠 미셸 인생은 아니에요"
  },
  {
    "Time": "9:01",
    "Subtitle": "I'LL GIVE YOU A HINT -- IT'S NOT YOUR LIFE!",
    "Human Translation": "힌트 하나 드리죠 미셸 인생은 아니에요"
  },
  {
    "Time": "9:03",
    "Subtitle": "DO YOU STAGE THESE EVENTS TO TORTURE ME? YES.",
    "Human Translation": "- 날 고문하려고 결혼식을 맡았죠? - 맞아요"
  },
  {
    "Time": "9:06",
    "Subtitle": "JOB WELL DONE. OKAY. LET'S START AGAIN. ANY PROBLEMS?",
    "Human Translation": "- 훌륭하게 해냈군요 - 다시 묻죠, 문제 있어요?"
  },
  {
    "Time": "9:11",
    "Subtitle": "GUESTS ARE CHECKED IN, BASKETS ARE GIVEN OUT,",
    "Human Translation": "하객들의 방 배정도 끝났고 선물도 나눠 드렸고…"
  },
  {
    "Time": "9:13",
    "Subtitle": "AND 200,000 TONS OF JORDAN ALMONDS HAVE BEEN DELIVERED.",
    "Human Translation": "아몬드 캔디 20만 톤도 도착했습니다"
  },
  {
    "Time": "9:18",
    "Subtitle": "OKAY, GOOD. DID RORY CALL? NO.",
    "Human Translation": "- 좋아요, 로리 전화는요? - 없었어요"
  },
  {
    "Time": "9:20",
    "Subtitle": "HMM. SHE'S GOLFING ALL DAY WITH MY FATHER,",
    "Human Translation": "로리가 할아버지와 골프장에 갔으니…"
  },
  {
    "Time": "9:23",
    "Subtitle": "AND I'M HALF-EXPECTING THIS BIG \"SAVE ME\" CALL TO COME IN --",
    "Human Translation": "로리가 할아버지와 골프장에 갔으니… 구조 요청이 올 거예요 전혀 신경 안 쓰죠?"
  },
  {
    "Time": "9:26",
    "Subtitle": "YOU DON'T CARE AT ALL.",
    "Human Translation": "구조 요청이 올 거예요 전혀 신경 안 쓰죠?"
  },
  {
    "Time": "9:28",
    "Subtitle": "TO ME YOU ARE THE TEACHER IN A CHARLIE BROWN CARTOON.",
    "Human Translation": "내게 로렐라이는 찰리 브라운 만화의 말 없는 선생이에요"
  },
  {
    "Time": "9:31",
    "Subtitle": "HAVE THE GROOMS ARRIVED? THEIR PLANE WAS SUPPOSED TO GET IN AT 7:30.",
    "Human Translation": "됐어요, 신랑들은 도착했어요? 7시 30분 비행기니 지금쯤 도착해야 하잖아요"
  },
  {
    "Time": "9:35",
    "Subtitle": "I'M SURPRISED THEY'RE NOT HERE BY NOW.",
    "Human Translation": "7시 30분 비행기니 지금쯤 도착해야 하잖아요"
  },
  {
    "Time": "9:37",
    "Subtitle": "MAYBE THEY MADE A RUN FOR IT. OOH, SOMEBODY GOT STOOD UP AT THE PROM.",
    "Human Translation": "- 도망쳤나 보죠 - 바람맞은 적 많죠?"
  },
  {
    "Time": "9:43",
    "Subtitle": "OH...DEAR.",
    "Human Translation": "- 이런 세상에 - 왜요?"
  },
  {
    "Time": "9:52",
    "Subtitle": "ARE THOSE -- No. It would be too...",
    "Human Translation": "- 혹시 저 사람들이… - 설마요, 그럼 너무…"
  },
  {
    "Time": "9:55",
    "Subtitle": "SCHMOOPIES!",
    "Human Translation": "자기야!"
  },
  {
    "Time": "9:58",
    "Subtitle": "Weird.",
    "Human Translation": "괴상하잖아요"
  },
  {
    "Time": "10:00",
    "Subtitle": "YOU KEPT THIS FROM ME ON PURPOSE.",
    "Human Translation": "일부러 내게 비밀로 했군요"
  },
  {
    "Time": "10:02",
    "Subtitle": "It's like a really snooty Doublemint commercial.",
    "Human Translation": "꼭 풍선껌 광고 같죠?"
  },
  {
    "Time": "10:05",
    "Subtitle": "JUST LET ME KNOW WHEN THE MIDGETS AND CLOWNS ARRIVE.",
    "Human Translation": "난쟁이와 어릿광대가 오면 알려줘요"
  },
  {
    "Time": "10:09",
    "Subtitle": "OH, NO -- NO, NO.",
    "Human Translation": "안돼요"
  },
  {
    "Time": "10:11",
    "Subtitle": "YOU HAVE TO GET THEM ALL SETTLED IN.",
    "Human Translation": "먼저 손님을 받아야죠"
  },
  {
    "Time": "10:14",
    "Subtitle": "I'M NOT TALKING TO THEM. YES, YOU ARE.",
    "Human Translation": "- 상대하기 싫어요 - 손님 받아요"
  },
  {
    "Time": "10:16",
    "Subtitle": "WELL, I'M NOT TALKING TO THEM NICELY.",
    "Human Translation": "부드럽게 대하진 않을 겁니다"
  },
  {
    "Time": "10:19",
    "Subtitle": "IT'S AFTER 8:00. SHE SHOULD BE HERE ALREADY.",
    "Human Translation": "8시가 지났어요, 너무 늦었잖아"
  },
  {
    "Time": "10:21",
    "Subtitle": "SHE'LL BE HERE.",
    "Human Translation": "곧 올 거예요"
  },
  {
    "Time": "10:23",
    "Subtitle": "YOU'RE SUPPOSED TO TEE OFF AT YOUR DESIGNATED TIME.",
    "Human Translation": "정해진 시간에 시작해야 해요"
  },
  {
    "Time": "10:25",
    "Subtitle": "YOU PAY GOOD MONEY TO THAT PLACE. YOU'LL TEE OFF WHEN YOU TEE OFF.",
    "Human Translation": "클럽에 쏟은 돈이 얼만데 그 정도는 봐줄 거예요"
  },
  {
    "Time": "10:29",
    "Subtitle": "IS THAT WHAT YOU'RE WEARING? YES. HMM.",
    "Human Translation": "- 그렇게 입고 갈 거예요? - 그래요"
  },
  {
    "Time": "10:32",
    "Subtitle": "WHAT'S WRONG WITH WHAT I'M WEARING?! NOTHING. IT'S FINE.",
    "Human Translation": "- 이 옷이 어때서요? - 아뇨, 괜찮네요"
  },
  {
    "Time": "10:36",
    "Subtitle": "THIS IS ABSURD! SHE'S YOUR GRANDDAUGHTER.",
    "Human Translation": "- 이건 다 터무니없는 짓이에요 - 당신 손녀딸이잖아요"
  },
  {
    "Time": "10:39",
    "Subtitle": "SHE'S A 16-YEAR-OLD WHO WOULD RATHER BE AT THE MALL.",
    "Human Translation": "백화점을 더 좋아하는 16살짜리 여자애잖아요!"
  },
  {
    "Time": "10:42",
    "Subtitle": "SHOW HER ALL AROUND THE CLUB -- ESPECIALLY THE ROSE GARDEN.",
    "Human Translation": "클럽 구석구석을 보여줘요 특히 그 장미 정원도요"
  },
  {
    "Time": "10:44",
    "Subtitle": "I AM NOT A GUIDE.",
    "Human Translation": "- 내가 여행 가이드요? - 점심도 꼭 사주고…"
  },
  {
    "Time": "10:46",
    "Subtitle": "TAKE HER TO LUNCH, AND HAVE HER GET DESSERT.",
    "Human Translation": "- 내가 여행 가이드요? - 점심도 꼭 사주고… - 디저트도 챙겨줘요 - 점심 얘기는 없었잖소"
  },
  {
    "Time": "10:48",
    "Subtitle": "NO ONE SAID ANYTHING ABOUT LUNCH.",
    "Human Translation": "- 디저트도 챙겨줘요 - 점심 얘기는 없었잖소"
  },
  {
    "Time": "10:50",
    "Subtitle": "I HOPE LORELAI'S CLUBS ARE STILL GOOD.",
    "Human Translation": "로렐라이의 골프채 상태가 좋아야 할 텐데"
  },
  {
    "Time": "10:52",
    "Subtitle": "EMILY, YOU ARE NOT LISTENING TO ME.",
    "Human Translation": "에밀리, 내 말은 안 듣는 거요?"
  },
  {
    "Time": "10:54",
    "Subtitle": "I WILL TEACH HER TO GOLF, AS PROMISED BY YOU,",
    "Human Translation": "당신이 약속한 대로 골프는 가르치겠소"
  },
  {
    "Time": "10:58",
    "Subtitle": "BUT LUNCH IS OUT OF THE QUESTION.",
    "Human Translation": "하지만 점심은 안 돼요"
  },
  {
    "Time": "10:59",
    "Subtitle": "YOU HAVE TO EAT, SO YOU'LL EAT TOGETHER. DO YOU HAVE SUNSCREEN? EMILY...",
    "Human Translation": "당신도 점심은 먹을 테니 같이 먹어요, 선크림 챙겼어요?"
  },
  {
    "Time": "11:04",
    "Subtitle": "[ DOOR BELL RINGS] SHE'S HERE.",
    "Human Translation": "- 왔네요 - 8시 30분이군"
  },
  {
    "Time": "11:05",
    "Subtitle": "OH. 8:30. WE MUST REMEMBER TO BUY HER A WATCH.",
    "Human Translation": "- 왔네요 - 8시 30분이군 시계라도 사줘야겠어요"
  },
  {
    "Time": "11:09",
    "Subtitle": "RICHARD, SO HELP ME GOD, YOU WILL BE SWEET",
    "Human Translation": "리처드, 오늘 로리에게 잘 대해주고"
  },
  {
    "Time": "11:12",
    "Subtitle": "AND MAKE THIS A MEMORABLE DAY FOR HER.",
    "Human Translation": "리처드, 오늘 로리에게 잘 대해주고 좋은 기억이 되게 해줘야 해요"
  },
  {
    "Time": "11:14",
    "Subtitle": "THIS IS THE FIRST TIME WE'VE GOTTEN TO SHOW OUR GRANDDAUGHTER OFF AT THE CLUB,",
    "Human Translation": "로리를 클럽에서 처음 소개하는 자리예요"
  },
  {
    "Time": "11:17",
    "Subtitle": "AND IT MEANS A GREAT DEAL TO MY HAPPINESS -- AND YOURS --",
    "Human Translation": "우리 부부의 행복을 위해서…"
  },
  {
    "Time": "11:21",
    "Subtitle": "THAT THIS DAY GO WELL.",
    "Human Translation": "오늘 꼭 성공하세요"
  },
  {
    "Time": "11:23",
    "Subtitle": "ARE WE CLEAR?",
    "Human Translation": "알아 들었어요?"
  },
  {
    "Time": "11:28",
    "Subtitle": "RORY! HELLO! SORRY I'M LATE.",
    "Human Translation": "- 로리, 왔구나! - 늦어서 죄송해요"
  },
  {
    "Time": "11:30",
    "Subtitle": "NONSENSE. YOU'RE RIGHT ON TIME.",
    "Human Translation": "무슨 소리, 딱 맞춰서 왔잖니"
  },
  {
    "Time": "11:33",
    "Subtitle": "HI, GRANDPA. RORY, NICE TO SEE YOU.",
    "Human Translation": "- 안녕하세요 - 잘 왔다"
  },
  {
    "Time": "11:35",
    "Subtitle": "THIS IS A PERFECT DAY FOR GOLFING, ISN'T IT?",
    "Human Translation": "- 골프 하기 좋은 날이죠? - 8시엔 더 시원하죠"
  },
  {
    "Time": "11:37",
    "Subtitle": "IT'S COOLER AT 8:00. AM I DRESSED OKAY?",
    "Human Translation": "- 골프 하기 좋은 날이죠? - 8시엔 더 시원하죠 이 옷도 괜찮나요?"
  },
  {
    "Time": "11:39",
    "Subtitle": "I DIDN'T HAVE ANY OF THOSE SHORT PANT THINGS.",
    "Human Translation": "반바지 같은 골프복은 없거든요"
  },
  {
    "Time": "11:42",
    "Subtitle": "ACTUALLY, THERE IS SOMETHING MISSING. OH, WAIT A MINUTE.",
    "Human Translation": "뭔가 부족한 것 같구나 잠깐만 기다리렴"
  },
  {
    "Time": "11:51",
    "Subtitle": "HERE WE GO.",
    "Human Translation": "자, 됐다"
  },
  {
    "Time": "11:52",
    "Subtitle": "NOW YOU LOOK JUST LIKE TIGER WOODS. WOW! THAT'S SOME HAT.",
    "Human Translation": "- 꼭 타이거 우즈 같구나 - 멋진 모자네요"
  },
  {
    "Time": "11:56",
    "Subtitle": "OKAY, OFF YOU GO, YOU TWO. HAVE A WONDERFUL TIME.",
    "Human Translation": "좋아, 그럼 둘이 잘 다녀와요 - 재미있는 하루 보내렴 - 재미있을 거예요"
  },
  {
    "Time": "11:59",
    "Subtitle": "WE WILL.",
    "Human Translation": "- 재미있는 하루 보내렴 - 재미있을 거예요"
  },
  {
    "Time": "12:00",
    "Subtitle": "YOU BET.",
    "Human Translation": "그렇겠지"
  },
  {
    "Time": "12:18",
    "Subtitle": "IS IT HARD TO BECOME A MEMBER HERE?",
    "Human Translation": "여기 회원이 되는 게 어렵나요?"
  },
  {
    "Time": "12:20",
    "Subtitle": "EVERYONE HAS TO GO THROUGH A THOROUGH SCREENING PROCESS.",
    "Human Translation": "지원자는 모두 검사를 받지"
  },
  {
    "Time": "12:23",
    "Subtitle": "KIND OF LIKE THE FBI? WE'RE MUCH MORE THOROUGH THAN THAT.",
    "Human Translation": "- FBI처럼요? - 그보다 더 엄격하지"
  },
  {
    "Time": "12:27",
    "Subtitle": "WOW! YES.",
    "Human Translation": "- 대단하네요 - 그래"
  },
  {
    "Time": "12:30",
    "Subtitle": "DO YOU KNOW THE MERGER OF FORSCAPE AND D.S.S.",
    "Human Translation": "포스케이프와 DSS라는 두 대기업의 합병이…"
  },
  {
    "Time": "12:33",
    "Subtitle": "HAPPENED RIGHT HERE ON THIS LAWN? REALLY?",
    "Human Translation": "- 바로 여기서 이뤄졌단다 - 정말이에요?"
  },
  {
    "Time": "12:36",
    "Subtitle": "INTERNATIONAL FINANCE WILL NEVER BE THE SAME,",
    "Human Translation": "국제 금융 판도가 뒤바뀐 이유가 모두…"
  },
  {
    "Time": "12:38",
    "Subtitle": "ALL BECAUSE OF A LOST GOLFING BET.",
    "Human Translation": "내기 골프 때문이지"
  },
  {
    "Time": "12:41",
    "Subtitle": "THAT'S CRAZY. THAT'S HIGH FINANCE.",
    "Human Translation": "- 말도 안 돼요 - 판돈이 높았단다"
  },
  {
    "Time": "12:45",
    "Subtitle": "WELL, HERE WE ARE.",
    "Human Translation": "다 왔다"
  },
  {
    "Time": "12:48",
    "Subtitle": "NOW...",
    "Human Translation": "좋아"
  },
  {
    "Time": "12:51",
    "Subtitle": "WHAT DO YOU KNOW ABOUT GOLF?",
    "Human Translation": "골프에 대해 뭘 알고 있지?"
  },
  {
    "Time": "12:54",
    "Subtitle": "THAT IT'S A GOOD WALK SPOILED.",
    "Human Translation": "산책은 끝났다는 정도요"
  },
  {
    "Time": "13:00",
    "Subtitle": "WELL, YOUR DRIVER IS THE MOST POWERFUL CLUB IN YOUR BAG,",
    "Human Translation": "드라이버의 비거리가 가장 길지"
  },
  {
    "Time": "13:05",
    "Subtitle": "AND AS SUCH, IT CAN BE YOUR MOST VALUABLE ASSET",
    "Human Translation": "그렇기 때문에 가장 소중한 재산인 동시에…"
  },
  {
    "Time": "13:09",
    "Subtitle": "OR YOUR GREATEST LIABILITY.",
    "Human Translation": "가장 부담스러운 녀석이지"
  },
  {
    "Time": "13:11",
    "Subtitle": "TO WIELD IT PROPERLY REQUIRES A PRECISE COMBINATION",
    "Human Translation": "드라이버를 제대로 다루기 위해선…"
  },
  {
    "Time": "13:15",
    "Subtitle": "OF CONFIDENCE AND HUMILITY.",
    "Human Translation": "자신감과 겸손이 필요하단다"
  },
  {
    "Time": "13:18",
    "Subtitle": "CONFIDENCE AND HUMILITY -- GOT IT.",
    "Human Translation": "- 자신감과 겸손, 알았어요 - 한번 해 보렴"
  },
  {
    "Time": "13:20",
    "Subtitle": "THERE YOU ARE. THAT'S A PRETTY GOOD NATURAL GRIP.",
    "Human Translation": "- 자신감과 겸손, 알았어요 - 한번 해 보렴 잡는 폼은 괜찮구나"
  },
  {
    "Time": "13:22",
    "Subtitle": "NOW LINE THE TOE OF YOUR LEFT FOOT",
    "Human Translation": "잡는 폼은 괜찮구나 이제 왼발 끝을 공 앞에 맞추거라"
  },
  {
    "Time": "13:26",
    "Subtitle": "UP WITH THE BALL. THAT'S RIGHT.",
    "Human Translation": "이제 왼발 끝을 공 앞에 맞추거라 좋아, 이제 어깨를 약간 내리고"
  },
  {
    "Time": "13:28",
    "Subtitle": "NOW DROP THIS SHOULDER A LITTLE BIT.",
    "Human Translation": "좋아, 이제 어깨를 약간 내리고"
  },
  {
    "Time": "13:30",
    "Subtitle": "NOW, KEEPING YOUR LEFT ARM FIRM, DRAW THE CLUB BACK,",
    "Human Translation": "왼손은 힘을 주고 클럽을 당긴 다음…"
  },
  {
    "Time": "13:34",
    "Subtitle": "AND SWING IT CLEANLY THROUGH THE BALL.",
    "Human Translation": "공을 향해 힘껏 휘두르거라"
  },
  {
    "Time": "13:40",
    "Subtitle": "I'M BETTING THAT WAS WRONG.",
    "Human Translation": "아마 이러면 틀리겠죠?"
  },
  {
    "Time": "13:42",
    "Subtitle": "THERE ARE NO RIGHTS AND WRONGS TO THE LEARNING PROCESS.",
    "Human Translation": "배우는 사람에게 옮고 그름은 중요치 않아"
  },
  {
    "Time": "13:51",
    "Subtitle": "TRY THAT AGAIN.",
    "Human Translation": "다시 해보렴"
  },
  {
    "Time": "14:00",
    "Subtitle": "I'M BETTING THAT WAS WRONG.",
    "Human Translation": "이번엔 정말 틀렸겠죠?"
  },
  {
    "Time": "14:06",
    "Subtitle": "THESE ARE BLUEBERRIES.",
    "Human Translation": "이건 블루베리잖아요 난 딸기를 주문했어요"
  },
  {
    "Time": "14:07",
    "Subtitle": "I THINK I ORDERED STRAWBERRIES.",
    "Human Translation": "이건 블루베리잖아요 난 딸기를 주문했어요 - 알아요 - 주문서도 복사해놨어요"
  },
  {
    "Time": "14:09",
    "Subtitle": "I DID. I WROTE IT DOWN. I GOT A COPY.",
    "Human Translation": "- 알아요 - 주문서도 복사해놨어요"
  },
  {
    "Time": "14:11",
    "Subtitle": "SOOKIE, LISTEN --",
    "Human Translation": "- 수키, 들어봐요 - 봐요, 버섯, 멜론…"
  },
  {
    "Time": "14:13",
    "Subtitle": "\"MUSHROOMS, MELON, ENDIVE, PEACHES, KIWI.\"",
    "Human Translation": "- 수키, 들어봐요 - 봐요, 버섯, 멜론… - 꽃상추, 복숭아, 키위 - 정신 차려요, 수키"
  },
  {
    "Time": "14:16",
    "Subtitle": "EXCUSE ME. CRAZY LADY...",
    "Human Translation": "- 꽃상추, 복숭아, 키위 - 정신 차려요, 수키"
  },
  {
    "Time": "14:18",
    "Subtitle": "I SHOULD MAKE KIWI ICE CREAM --",
    "Human Translation": "키위로 아이스크림을 만들면 맛있겠네"
  },
  {
    "Time": "14:19",
    "Subtitle": "SOOKIE! WHAT?",
    "Human Translation": "- 수키, 잠깐만요! - 뭘요?"
  },
  {
    "Time": "14:21",
    "Subtitle": "I KNOW YOU ORDERED STRAWBERRIES, BUT THEY WEREN'T ANY GOOD.",
    "Human Translation": "딸기를 주문한 건 알지만 쓸만한 게 없었어요"
  },
  {
    "Time": "14:24",
    "Subtitle": "SO INSTEAD OF SELLING YOU SUBSTANDARD STRAWBERRIES,",
    "Human Translation": "그래서 수준 이하의 딸기 대신…"
  },
  {
    "Time": "14:26",
    "Subtitle": "I BROUGHT YOU BLUEBERRIES.",
    "Human Translation": "블루베리를 가져왔어요"
  },
  {
    "Time": "14:29",
    "Subtitle": "I'VE GOTTA MAKE STRAWBERRY SHORTCAKE FOR 200 PEOPLE,",
    "Human Translation": "2백 명 분의 딸기 쇼트케이크를 만들어야 하니…"
  },
  {
    "Time": "14:31",
    "Subtitle": "SO I THINK I'M GONNA NEED STRAWBERRIES.",
    "Human Translation": "딸기가 필요해요"
  },
  {
    "Time": "14:33",
    "Subtitle": "USE THE BLUEBERRIES. TO MAKE WHAT?!",
    "Human Translation": "- 블루베리를 써요 - 그걸로 뭘 만들죠?"
  },
  {
    "Time": "14:35",
    "Subtitle": "BLUEBERRY SHORTCAKE. THERE'S NO SUCH THING.",
    "Human Translation": "- 블루베리 쇼트케이크 - 세상에 그런 게 어딨어요?"
  },
  {
    "Time": "14:37",
    "Subtitle": "THE WORLD WAS FLAT UNTIL SOMEONE TOOK A BOAT TRIP.",
    "Human Translation": "옛날엔 다들 지구가 평평한 줄 알았잖아요"
  },
  {
    "Time": "14:40",
    "Subtitle": "CAN I SEE THESE STRAWBERRIES? NO.",
    "Human Translation": "- 딸기를 보여 줄래요? - 싫어요"
  },
  {
    "Time": "14:43",
    "Subtitle": "JUST ONE? NO.",
    "Human Translation": "- 하나만 - 안돼요"
  },
  {
    "Time": "14:44",
    "Subtitle": "HOW ABOUT A POLAROID?",
    "Human Translation": "사진도 안 돼요?"
  },
  {
    "Time": "14:46",
    "Subtitle": "COFFEE, COFFEE, COFFEE.",
    "Human Translation": "커피가 어디 있지?"
  },
  {
    "Time": "14:49",
    "Subtitle": "OOH, SOOKIE, CAN I TAKE SOME OF THIS CAKE HOME TO RORY?",
    "Human Translation": "수키, 이 케이크 로리 좀 갖다 줘도 될까?"
  },
  {
    "Time": "14:52",
    "Subtitle": "SHE'S GONNA NEED A SPECIAL TREAT TONIGHT.",
    "Human Translation": "오늘 밤엔 특효약이 필요하거든"
  },
  {
    "Time": "14:54",
    "Subtitle": "SHE IS SPENDING THE ENTIRE DAY WITH MY FATHER GOLFING AT THE CLUB.",
    "Human Translation": "오늘 하루를 할아버지와 골프 클럽에서 지내거든"
  },
  {
    "Time": "14:58",
    "Subtitle": "NO.",
    "Human Translation": "힘들겠다"
  },
  {
    "Time": "14:59",
    "Subtitle": "TAKE THE BLUEBERRIES! NO!",
    "Human Translation": "- 블루베리로 해요! - 싫어요!"
  },
  {
    "Time": "15:02",
    "Subtitle": "THE WHOLE THING WAS MASTERMINDED BY MY MOTHER.",
    "Human Translation": "전부 엄마의 치밀한 계획이야"
  },
  {
    "Time": "15:04",
    "Subtitle": "ONE MINUTE WE'RE HAVING AN EXCRUCIATING FAMILY DINNER,",
    "Human Translation": "안 그래도 고통스러운 저녁식사를 하는데…"
  },
  {
    "Time": "15:06",
    "Subtitle": "AND THE NEXT MINUTE SHE'S MANIPULATED MY KID",
    "Human Translation": "갑자기 로리를 최면에 걸어…"
  },
  {
    "Time": "15:08",
    "Subtitle": "INTO SPENDING HER SUNDAY WITH MY FATHER",
    "Human Translation": "갑자기 로리를 최면에 걸어… 일요일에 아빠와 골프 클럽에 보낸 거야"
  },
  {
    "Time": "15:10",
    "Subtitle": "AT THE COUNTRY CLUB.",
    "Human Translation": "일요일에 아빠와 골프 클럽에 보낸 거야"
  },
  {
    "Time": "15:12",
    "Subtitle": "I CAN'T TALK ABOUT IT ANYMORE.",
    "Human Translation": "생각만으로도 화가 나서 더 이상 얘기도 못하겠어"
  },
  {
    "Time": "15:13",
    "Subtitle": "IT'S MAKING ME TOO UPSET. TELL ME SOMETHING HAPPY.",
    "Human Translation": "생각만으로도 화가 나서 더 이상 얘기도 못하겠어 - 행복한 얘기를 해 줘 - 딸기 쇼트케이크를 못 만들어"
  },
  {
    "Time": "15:17",
    "Subtitle": "[ Voice breaking ] I CAN'T MAKE THE STRAWBERRY SHORTCAKE.",
    "Human Translation": "- 행복한 얘기를 해 줘 - 딸기 쇼트케이크를 못 만들어"
  },
  {
    "Time": "15:20",
    "Subtitle": "YOU SUCK AT THIS GAME.",
    "Human Translation": "이 게임에 약하구나"
  },
  {
    "Time": "15:22",
    "Subtitle": "THE BATTLE FOR SOUP VERSUS SALAD IS RAGING IN THE OTHER ROOM.",
    "Human Translation": "옆방에서 수프와 샐러드의 전쟁이 시작됐어요"
  },
  {
    "Time": "15:25",
    "Subtitle": "COME QUICK AND SETTLE IT, I'M RUNNING OUT OF",
    "Human Translation": "빨리 와서 중재해 줘요 사람들이 못 알아듣는 불어 욕도 바닥났어요"
  },
  {
    "Time": "15:28",
    "Subtitle": "FRENCH CURSE WORDS THAT THEY WON'T UNDERSTAND.",
    "Human Translation": "사람들이 못 알아듣는 불어 욕도 바닥났어요"
  },
  {
    "Time": "15:37",
    "Subtitle": "SALAD... SOUP...",
    "Human Translation": "- 수프로 해야 돼 - 난 샐러드가 좋아"
  },
  {
    "Time": "15:38",
    "Subtitle": "...BEFORE A TRADITIONAL MEAL...",
    "Human Translation": "- 수프로 해야 돼 - 난 샐러드가 좋아 - 식사 전엔 샐러드야 - 왜 이 야단이야?"
  },
  {
    "Time": "15:40",
    "Subtitle": "...WHY ARE YOU MAKING SUCH A SCENE, JESSICA?",
    "Human Translation": "- 식사 전엔 샐러드야 - 왜 이 야단이야? - 내 결혼식이니까 - 아무리 그래도…"
  },
  {
    "Time": "15:43",
    "Subtitle": "IT'S BEEN 45 MINUTES OF \"SOUP OR SALAD?\" --",
    "Human Translation": "45분째 저러고 있어요"
  },
  {
    "Time": "15:45",
    "Subtitle": "SOUP OR SALAD -- I CAN'T DO IT ANYMORE.",
    "Human Translation": "45분째 저러고 있어요 도저히 못 참겠으니 택시를 불러 줘요"
  },
  {
    "Time": "15:48",
    "Subtitle": "I'M GOING TO GO FAR AWAY AND NEVER COME BACK.",
    "Human Translation": "도저히 못 참겠으니 택시를 불러 줘요 멀리 도망가서 다신 돌아오지 않겠어요"
  },
  {
    "Time": "15:51",
    "Subtitle": "HOW ABOUT IF GUESTS GET A CHOICE OF SOUP OR SALAD?",
    "Human Translation": "하객이 수프와 샐러드 중에 고르게 하면 어떨까요?"
  },
  {
    "Time": "15:56",
    "Subtitle": "THAT -- THAT -- WILL WORK.",
    "Human Translation": "그럼 되겠네요"
  },
  {
    "Time": "15:59",
    "Subtitle": "...JESSICA, YOU ALWAYS GET WHAT YOU WANT... CHOICE OF SOUP OR SALAD. GOT IT.",
    "Human Translation": "- 수프와 샐러드 다 만들어 - 알았어"
  },
  {
    "Time": "16:04",
    "Subtitle": "SO WEIRD. WHICH ONE IS WHICH?",
    "Human Translation": "- 정말 신기하네 - 누가 누구야?"
  },
  {
    "Time": "16:06",
    "Subtitle": "I THINK THE ONE ON THE RIGHT IS MATT.",
    "Human Translation": "오른쪽 남자가 매트 같아 아뇨, 왼쪽 남자예요 오른쪽은 마크예요"
  },
  {
    "Time": "16:09",
    "Subtitle": "NO, THE ONE ON THE RIGHT IS MARK.",
    "Human Translation": "아뇨, 왼쪽 남자예요 오른쪽은 마크예요"
  },
  {
    "Time": "16:11",
    "Subtitle": "THAT'S IMPRESSIVE. I'M VERY GOOD AT OBSERVING PEOPLE --",
    "Human Translation": "- 대단한 실력이네요 - 전 관찰을 잘해요"
  },
  {
    "Time": "16:15",
    "Subtitle": "LEARNING THEIR TICS AND TRAITS, THE SOUND OF THEIR VOICES.",
    "Human Translation": "사람들의 버릇과 목소리를 잘 구별하는 재능이죠"
  },
  {
    "Time": "16:19",
    "Subtitle": "THAT ONE HAS A POST-IT ON HIS BACK.",
    "Human Translation": "- 저 사람 등에 메모지가 붙었네 - 그럼 그 사람이 마크고"
  },
  {
    "Time": "16:21",
    "Subtitle": "THEN THAT'S MARK. THE ONE ON THE RIGHT IS MATT.",
    "Human Translation": "- 저 사람 등에 메모지가 붙었네 - 그럼 그 사람이 마크고 오른쪽이 매트예요 - 가서 빨리 떼요 - 싫어요"
  },
  {
    "Time": "16:24",
    "Subtitle": "TAKE THAT OFF OF HIM. I WON'T.",
    "Human Translation": "- 가서 빨리 떼요 - 싫어요"
  },
  {
    "Time": "16:26",
    "Subtitle": "WE CAN CALL EVERYONE \"SWEETIE\" AND GET AWAY WITH IT.",
    "Human Translation": "둘 다 손님이라고 부르며 안심할 순 없어요"
  },
  {
    "Time": "16:28",
    "Subtitle": "GO WITH ME HERE, BUT LET'S SAY MARK WALKS INTO A HOTEL ROOM",
    "Human Translation": "내 얘기를 들어 봐 마크가 호텔 방에 들어가서…"
  },
  {
    "Time": "16:32",
    "Subtitle": "AND HE SEES HIS WIFE NAKED, BUT IT'S NOT HIS WIFE, IT'S HIS NAKED SISTER-IN-LAW,",
    "Human Translation": "벌거벗은 아내를 봤는데 실은 자기 아내가 아니라… 자기 처제인데도 둘이 관계를 가졌어"
  },
  {
    "Time": "16:36",
    "Subtitle": "AND HE HAS SEX WITH HER.",
    "Human Translation": "자기 처제인데도 둘이 관계를 가졌어"
  },
  {
    "Time": "16:37",
    "Subtitle": "WOULD THAT BE CHEATING? MY HEAD HURTS.",
    "Human Translation": "- 그것도 불륜인가? - 머리가 아프네요"
  },
  {
    "Time": "16:40",
    "Subtitle": "I THINK NO. REALLY? LUCKY.",
    "Human Translation": "- 아닐 것 같아 - 정말? 좋겠다"
  },
  {
    "Time": "16:43",
    "Subtitle": "THIS UNION BELONGS ON A PUBLIC-ACCESS STATION.",
    "Human Translation": "기인열전에 나가도 될 것 같네요"
  },
  {
    "Time": "16:46",
    "Subtitle": "IT'S AGAINST THE LAWS OF NATURE AND JUST THIS SHORT OF COMPLETELY OBSCENE.",
    "Human Translation": "자연의 섭리에 역행하고 너무나 역겨운 일이에요"
  },
  {
    "Time": "16:49",
    "Subtitle": "WELL, YOU WON'T BE GIVING THE WEDDING TOAST.",
    "Human Translation": "결혼식 축사는 하지 말아요"
  },
  {
    "Time": "16:54",
    "Subtitle": "HOW'D EVERYTHING WORK OUT? DO YOU HAVE CHILDREN?",
    "Human Translation": "- 일은 잘 풀렸나요? - 혹시 아이 있어요?"
  },
  {
    "Time": "16:57",
    "Subtitle": "A DAUGHTER. DO YOU HATE HER?",
    "Human Translation": "- 딸이 있어요 - 딸을 미워하나요?"
  },
  {
    "Time": "17:00",
    "Subtitle": "NO. NOT EVER?",
    "Human Translation": "- 아뇨 - 한번도요?"
  },
  {
    "Time": "17:01",
    "Subtitle": "UH, WELL, I WASN'T WILDLY FOND OF HER DURING LABOR.",
    "Human Translation": "출산할 때는 그리 사랑스럽지 않았죠"
  },
  {
    "Time": "17:05",
    "Subtitle": "THAT WAS THE HIGH POINT FOR ME.",
    "Human Translation": "전 그때가 가장 좋았어요"
  },
  {
    "Time": "17:12",
    "Subtitle": "Rory: I CAN'T BELIEVE I HIT THE BALL. Richard: IT'S QUITE IMPRESSIVE.",
    "Human Translation": "- 제가 공을 쳤다니 놀라워요 - 아주 잘하더구나"
  },
  {
    "Time": "17:15",
    "Subtitle": "IT LANDED IN THE WATER. YES, BUT THE SPLASH WAS QUITE IMPRESSIVE.",
    "Human Translation": "- 호수에 떨어졌잖아요 - 물이 멋지게 튀겼잖니"
  },
  {
    "Time": "17:19",
    "Subtitle": "THIS PLACE IS SO BEAUTIFUL.",
    "Human Translation": "여긴 정말 아름답네요"
  },
  {
    "Time": "17:21",
    "Subtitle": "I COULD SEE JUST COMING HERE TO THINK OR READ,",
    "Human Translation": "생각을 하거나 책을 읽기에도 좋은 곳 같아요"
  },
  {
    "Time": "17:24",
    "Subtitle": "THAT PROBABLY DEFEATS THE PURPOSE OF THE HOLES WITH THE FLAGS IN THEM.",
    "Human Translation": "하지만 그건 골프장의 도리에 어긋나겠죠"
  },
  {
    "Time": "17:27",
    "Subtitle": "THERE IS SOMETHING RATHER SERENE ABOUT WALKING AROUND HERE.",
    "Human Translation": "이곳에서의 산책은 뭔가 고요한 면이 있지"
  },
  {
    "Time": "17:30",
    "Subtitle": "DO YOU COME HERE EVERY WEEK?",
    "Human Translation": "- 여기 매주 오세요? - 아니, 시간이 있을 때만"
  },
  {
    "Time": "17:32",
    "Subtitle": "NO. WHEN I CAN. I'M OFTEN WORKING ON THE WEEKENDS.",
    "Human Translation": "- 여기 매주 오세요? - 아니, 시간이 있을 때만 주말에도 일할 때가 많단다"
  },
  {
    "Time": "17:35",
    "Subtitle": "BUMMER. ISN'T IT?",
    "Human Translation": "- 아쉽겠네요 - 그렇지"
  },
  {
    "Time": "17:41",
    "Subtitle": "HI, RICHARD. HELLO.",
    "Human Translation": "안녕하세요, 리처드"
  },
  {
    "Time": "17:44",
    "Subtitle": "CAN I ASK YOU A QUESTION? GO AHEAD.",
    "Human Translation": "- 하나 여쭤봐도 돼요? - 그러렴"
  },
  {
    "Time": "17:47",
    "Subtitle": "WHAT DO YOU DO? I'M THE EXECUTIVE VICE-PRESIDENT",
    "Human Translation": "- 어떤 일을 하시죠? - 난 부사장이란다"
  },
  {
    "Time": "17:50",
    "Subtitle": "OF THE GEHRMAN-DRISCOLL INSURANCE CORPORATION.",
    "Human Translation": "게어만-드리스콜 보험 회사에서 일한단다"
  },
  {
    "Time": "17:52",
    "Subtitle": "WOW! YES.",
    "Human Translation": "- 대단해요 - 그래?"
  },
  {
    "Time": "17:54",
    "Subtitle": "AND AS EXECUTIVE VICE-PRESIDENT, WHAT DO YOU DO?",
    "Human Translation": "그럼 부사장으로서 하시는 일은요?"
  },
  {
    "Time": "17:58",
    "Subtitle": "WELL, IT'S A VERY BIG COMPANY -- ONE OF THE LARGEST IN THE UNITED STATES.",
    "Human Translation": "미국에서도 큰 편에 속하는 회사지"
  },
  {
    "Time": "18:02",
    "Subtitle": "I HAVE A MYRIAD OF DUTIES",
    "Human Translation": "내 직무는 아주 많지만…"
  },
  {
    "Time": "18:04",
    "Subtitle": "WHICH WOULD BORE YOU GREATLY TO HEAR ABOUT.",
    "Human Translation": "네겐 너무 지루한 얘기일 거야"
  },
  {
    "Time": "18:07",
    "Subtitle": "OH. OKAY.",
    "Human Translation": "알겠어요"
  },
  {
    "Time": "18:11",
    "Subtitle": "I OVERSEE OUR INTERNATIONAL DIVISION. THAT SOUNDS IMPORTANT.",
    "Human Translation": "- 국제부를 감독한다 - 중요한 자리 같네요"
  },
  {
    "Time": "18:15",
    "Subtitle": "WELL, IT RATES A PARKING SPOT.",
    "Human Translation": "전용 주차 공간도 있지"
  },
  {
    "Time": "18:18",
    "Subtitle": "DO YOU GET TO TRAVEL A LOT?",
    "Human Translation": "- 여행도 자주 하세요? - 꽤 하지"
  },
  {
    "Time": "18:20",
    "Subtitle": "QUITE A BIT. LUCKY.",
    "Human Translation": "- 여행도 자주 하세요? - 꽤 하지 부럽네요"
  },
  {
    "Time": "18:23",
    "Subtitle": "I SUSPECT YOU HAVE A YEN FOR TRAVEL. I'M UP TO MY EARS IN YENS.",
    "Human Translation": "- 너도 여행을 좋아하는구나 - 여행에 목숨을 걸었어요"
  },
  {
    "Time": "18:27",
    "Subtitle": "ANY PARTICULAR PLACE YOU'D LIKE TO GO?",
    "Human Translation": "- 꼭 가고 싶은 곳은? - 수도 없이 많아요"
  },
  {
    "Time": "18:28",
    "Subtitle": "HUNDREDS OF PLACES -- PARIS, ROME, LONDON, PRAGUE,",
    "Human Translation": "- 꼭 가고 싶은 곳은? - 수도 없이 많아요 파리, 로마, 런던 프라하, 이스탄불, 페즈"
  },
  {
    "Time": "18:32",
    "Subtitle": "ISTANBUL, FEZ -- HAVE YOU EVER BEEN TO FEZ?",
    "Human Translation": "파리, 로마, 런던 프라하, 이스탄불, 페즈 - 페즈에도 가 보셨어요? - 못 가 봤다"
  },
  {
    "Time": "18:35",
    "Subtitle": "I CAN'T SAY THAT I HAVE.",
    "Human Translation": "- 페즈에도 가 보셨어요? - 못 가 봤다"
  },
  {
    "Time": "18:36",
    "Subtitle": "I WANT TO GO TO FEZ.",
    "Human Translation": "전 페즈에 가고 싶어요"
  },
  {
    "Time": "18:38",
    "Subtitle": "I THINK TRAVELING FOR A YOUNG GIRL IS A VERY IMPORTANT THING.",
    "Human Translation": "젊은이에게 여행은 중요한 거란다"
  },
  {
    "Time": "18:42",
    "Subtitle": "YOUR MOTHER NEVER GOT A CHANCE TO TRAVEL MUCH.",
    "Human Translation": "네 엄마는 그럴 기회가 별로 없었지"
  },
  {
    "Time": "18:44",
    "Subtitle": "I KNOW. SHE TALKS ABOUT THAT ALL THE TIME. SHE DOES?",
    "Human Translation": "- 알아요, 항상 얘기하거든요 - 네 엄마가?"
  },
  {
    "Time": "18:48",
    "Subtitle": "WE'VE GOT A DEAL. WHEN I GRADUATE FROM HIGH SCHOOL,",
    "Human Translation": "둘이 목표를 세웠죠 제가 고등학교를 졸업하면…"
  },
  {
    "Time": "18:50",
    "Subtitle": "WE'RE GONNA GO BACKPACKING THROUGH EUROPE TOGETHER --",
    "Human Translation": "둘이 유럽으로 배낭여행을 갈 거예요"
  },
  {
    "Time": "18:53",
    "Subtitle": "YOU KNOW, DO THE WHOLE HOSTEL THING.",
    "Human Translation": "잠은 호스텔에서 자고요"
  },
  {
    "Time": "18:56",
    "Subtitle": "I JUST HOPE IT REALLY HAPPENS. WELL, WE'LL JUST HAVE TO MAKE SURE THAT IT DOES.",
    "Human Translation": "- 꼭 그러고 싶어요 - 꼭 그랬으면 좋겠구나"
  },
  {
    "Time": "19:01",
    "Subtitle": "RICHARD!",
    "Human Translation": "리처드!"
  },
  {
    "Time": "19:03",
    "Subtitle": "GLORIA!",
    "Human Translation": "글로리아!"
  },
  {
    "Time": "19:05",
    "Subtitle": "YOU LOOK WONDERFUL. AREN'T YOU SWEET? IS EMILY HERE?",
    "Human Translation": "- 좋아 보이는군요 - 고마워요, 에밀리도 왔나요?"
  },
  {
    "Time": "19:08",
    "Subtitle": "NO. I'M TAKING MY GRANDDAUGHTER FOR A ROUND OF GOLF.",
    "Human Translation": "아뇨, 오늘은 손녀와 골프를 치러 왔소"
  },
  {
    "Time": "19:12",
    "Subtitle": "WELL, WE MUST GET TOGETHER. ABSOLUTELY.",
    "Human Translation": "- 언제 한번 봐요 - 물론이오"
  },
  {
    "Time": "19:21",
    "Subtitle": "THE MOST ODIOUS WOMAN ALIVE.",
    "Human Translation": "정말 밉살스러운 여자지"
  },
  {
    "Time": "19:34",
    "Subtitle": "WE'LL MEET BACK HERE IN 40 MINUTES? OKAY.",
    "Human Translation": "- 40분 후에 여기서 볼까? - 네"
  },
  {
    "Time": "19:38",
    "Subtitle": "AND THEN, IF YOU LIKE, WE CAN GET SOME LUNCH.",
    "Human Translation": "그리고 너만 좋다면 점심을 같이 하자꾸나"
  },
  {
    "Time": "19:40",
    "Subtitle": "THAT WOULD BE GREAT.",
    "Human Translation": "- 그것도 좋죠 - 그래"
  },
  {
    "Time": "19:42",
    "Subtitle": "FINE. COOL.",
    "Human Translation": "- 그것도 좋죠 - 그래 - 알았어요 - 좋아"
  },
  {
    "Time": "19:44",
    "Subtitle": "YES.",
    "Human Translation": "- 알았어요 - 좋아"
  },
  {
    "Time": "19:53",
    "Subtitle": "AND I'M TELLING HIM,",
    "Human Translation": "그래서 내가 말했지 '난 여기 20년을 다녔어"
  },
  {
    "Time": "19:54",
    "Subtitle": "\"I'VE BEEN COMING HERE FOR 20 YEARS, MY YOUNG FRIEND,",
    "Human Translation": "그래서 내가 말했지 '난 여기 20년을 다녔어 '20년을 다녔다고, 이 친구야"
  },
  {
    "Time": "19:57",
    "Subtitle": "\"AND FOR 20 YEARS THAT CART, NUMBER 43,",
    "Human Translation": "'20년을 다녔다고, 이 친구야 '43번 카트는 항상 내 카트였다고'"
  },
  {
    "Time": "20:00",
    "Subtitle": "HAS BEEN MY GOLF CART.\"",
    "Human Translation": "'43번 카트는 항상 내 카트였다고'"
  },
  {
    "Time": "20:02",
    "Subtitle": "HE SHOULD HAVE KNOWN THAT.",
    "Human Translation": "- 녀석도 그 정도는 알았어야지 - 모르는 사람이 없잖아"
  },
  {
    "Time": "20:03",
    "Subtitle": "EVERYBODY KNOWS IT. DID HE GIVE YOU THE CART?",
    "Human Translation": "- 녀석도 그 정도는 알았어야지 - 모르는 사람이 없잖아 - 카트는 돌려주던가? - 당연히 돌려줬지"
  },
  {
    "Time": "20:06",
    "Subtitle": "DAMN RIGHT HE GAVE ME THAT CART.",
    "Human Translation": "- 카트는 돌려주던가? - 당연히 돌려줬지"
  },
  {
    "Time": "20:08",
    "Subtitle": "YOU SHOULD HAVE NEVER HAD TO ASK, BECAUSE HE SHOULD HAVE KNOWN THAT.",
    "Human Translation": "자네가 물어볼 필요도 없었어 녀석이 응당 알고 있었어야지"
  },
  {
    "Time": "20:12",
    "Subtitle": "HELLO, GENTLEMEN. RICHARD, GOOD TO SEE YOU.",
    "Human Translation": "- 안녕한가, 친구들 - 리처드, 반갑네"
  },
  {
    "Time": "20:15",
    "Subtitle": "I HEARD ABOUT YOUR GOLF CART -- TOO BAD. WELL, I'M STILL ANGRY ABOUT IT.",
    "Human Translation": "- 카트 얘기는 들었네, 유감이야 - 아직도 화가 안 풀린다네"
  },
  {
    "Time": "20:19",
    "Subtitle": "RICHARD, WHO WAS THAT YOUNG LADY I SAW YOU ON THE GOLF COURSE WITH?",
    "Human Translation": "골프장에서 같이 있던 그 여자는 누군가?"
  },
  {
    "Time": "20:23",
    "Subtitle": "THAT IS MY GRANDDAUGHTER. SHE'S LOVELY.",
    "Human Translation": "- 내 손녀딸이네 - 그래? 귀엽더군"
  },
  {
    "Time": "20:26",
    "Subtitle": "LORELAI'S GIRL.",
    "Human Translation": "로렐라이의 딸이군"
  },
  {
    "Time": "20:28",
    "Subtitle": "MY GRANDDAUGHTER LOOKS LIKE SHE JUST FELL OFF A POTATO TRUCK.",
    "Human Translation": "자넨 행운아야, 내 손녀는 트럭에 깔린 얼굴이라네"
  },
  {
    "Time": "20:33",
    "Subtitle": "MY GRANDDAUGHTER WOULD NEVER BE CAUGHT HERE.",
    "Human Translation": "내 손녀는 여기엔 절대 오지 않을 거야"
  },
  {
    "Time": "20:36",
    "Subtitle": "IT MIGHT GET IN THE WAY OF THE TATTOO PARLOR",
    "Human Translation": "문신 가게에도 가야 하고…"
  },
  {
    "Time": "20:39",
    "Subtitle": "OR GETTING SOMETHING PIERCED OR DOING WHATEVER SHE DOES",
    "Human Translation": "피어싱을 하거나 제멋대로 놀든가…"
  },
  {
    "Time": "20:42",
    "Subtitle": "WHILE SHE RUNS WILD THROUGH THE STREETS LIKE A RABID DOG.",
    "Human Translation": "미친개처럼 뛰어다니느라 바쁘니까"
  },
  {
    "Time": "20:45",
    "Subtitle": "CUT HER OFF! THAT'LL GET HER ATTENTION! I CAN HELP YOU WITH THE LITIGATION.",
    "Human Translation": "- 상속인에서 제외하면 돼 - 소송은 내가 도와주지"
  },
  {
    "Time": "20:50",
    "Subtitle": "ACTUALLY, RORY JUST STARTED CHILTON.",
    "Human Translation": "이번에 로리가 칠튼에 입학했네"
  },
  {
    "Time": "20:52",
    "Subtitle": "DAMN FINE SCHOOL.",
    "Human Translation": "- 그런가? - 정말 좋은 학교지"
  },
  {
    "Time": "20:54",
    "Subtitle": "SHE WANTED TO LEARN GOLF. I THINK SHE'S TAKEN TO IT QUITE WELL.",
    "Human Translation": "골프를 배우고 싶다더군 적응이 빠른 것 같아"
  },
  {
    "Time": "20:58",
    "Subtitle": "YEAH, JUST AS LONG AS SHE'S NOT TAKEN WITH A CERTAIN GOLF CART.",
    "Human Translation": "그래, 골프 카트만 뺏기지 않으면 잘할 거야"
  },
  {
    "Time": "21:02",
    "Subtitle": "I'M WRITING A LETTER TO THE BOARD. I WISH YOU WOULD.",
    "Human Translation": "- 클럽에 불만을 접수하겠어 - 그야 당연하지"
  },
  {
    "Time": "21:08",
    "Subtitle": "Woman: SHE TOOK THE HOUSE.",
    "Human Translation": "그 여자는 아마갠셋의 집을 받는데"
  },
  {
    "Time": "21:10",
    "Subtitle": "SHE DESERVED IT -- PUTTING UP WITH THAT TRAMP ALL THOSE YEARS.",
    "Human Translation": "그 정도는 받아야지 정부가 있는데도 견뎠잖아"
  },
  {
    "Time": "21:13",
    "Subtitle": "LAST CHRISTMAS HE BOUGHT THEM THE SAME BRACELET.",
    "Human Translation": "작년 크리스마스엔 남편이 둘에게 똑같은 팔찌를 선물했대"
  },
  {
    "Time": "21:16",
    "Subtitle": "SHE SHOULD HAVE JUST SHOT HIM LIKE HIS FIRST WIFE DID.",
    "Human Translation": "첫 부인이 했던 것처럼 남편을 쐈어야 해"
  },
  {
    "Time": "21:19",
    "Subtitle": "I LOVE JANIE. IS SHE OUT YET?",
    "Human Translation": "제인이 그립네 출소는 아직 멀었나?"
  },
  {
    "Time": "21:23",
    "Subtitle": "GLORIA, HI. GOOD GAME?",
    "Human Translation": "글로리아, 안녕? 골프는 잘 쳤어요?"
  },
  {
    "Time": "21:25",
    "Subtitle": "NOT BAD. YOU? I JUST CAME FOR THE STEAM.",
    "Human Translation": "- 괜찮았죠, 당신은요? - 난 사우나 하러 왔어요"
  },
  {
    "Time": "21:28",
    "Subtitle": "WE MUST PLAY SOON.",
    "Human Translation": "언제 한번 같이 골프 쳐요"
  },
  {
    "Time": "21:30",
    "Subtitle": "NEXT WEEK? I'LL CALL YOU.",
    "Human Translation": "- 다음 주 어때요? - 전화할게요"
  },
  {
    "Time": "21:36",
    "Subtitle": "The most odious woman alive.",
    "Human Translation": "정말 밉살스러운 여자야"
  },
  {
    "Time": "21:48",
    "Subtitle": "OKAY. I NEED MORE TULLE HERE. I NEED THE FEELING OF A MAJOR TUTU, OKAY?",
    "Human Translation": "여기 망사를 더 달아요 발레 스커트 느낌이 나도록"
  },
  {
    "Time": "21:54",
    "Subtitle": "OOH. UH, HEY, GARY, THE RIBBONS GO ON THE CHAIRS, NOT ON THE TREES.",
    "Human Translation": "게리, 리본은 나무가 아니라 의자에 달아야죠"
  },
  {
    "Time": "22:03",
    "Subtitle": "OH! GREAT.",
    "Human Translation": "마침 잘됐네"
  },
  {
    "Time": "22:09",
    "Subtitle": "WHERE DO YOU WANT THE SWANS?",
    "Human Translation": "백조는 어디 둘까요?"
  },
  {
    "Time": "22:11",
    "Subtitle": "WELL, DO YOU KNOW WHERE THE POND IS? NOPE.",
    "Human Translation": "- 연못 위치 아세요? - 아뇨"
  },
  {
    "Time": "22:14",
    "Subtitle": "YOU KNOW THAT LITTLE ROAD YOU CAME UP?",
    "Human Translation": "- 방금 올라온 작은 길 알죠? - 아뇨"
  },
  {
    "Time": "22:17",
    "Subtitle": "DO YOU KNOW HOW TO SAY \"BIG HELP\" IN CHINESE?",
    "Human Translation": "그럼 '도와줘요' 를 중국어로 할줄 알아요?"
  },
  {
    "Time": "22:20",
    "Subtitle": "MICHEL!",
    "Human Translation": "- 아뇨 - 미셸!"
  },
  {
    "Time": "22:22",
    "Subtitle": "THIS IS 20 SWANS?",
    "Human Translation": "이게 백조 20마리에요?"
  },
  {
    "Time": "22:25",
    "Subtitle": "SURE. WHY NOT?",
    "Human Translation": "그런 셈 치죠"
  },
  {
    "Time": "22:28",
    "Subtitle": "YOU SCREECHED?",
    "Human Translation": "아까 비명 질렀나요?"
  },
  {
    "Time": "22:30",
    "Subtitle": "SHOW THIS GUY WHERE TO PUT THE SWANS.",
    "Human Translation": "이 사람에게 연못을 알려줘요"
  },
  {
    "Time": "22:32",
    "Subtitle": "ABSOLUTELY NOT.",
    "Human Translation": "절대 싫어요"
  },
  {
    "Time": "22:33",
    "Subtitle": "I CAN'T LEAVE. I'VE GOT A TULLE FESTIVAL OUT HERE.",
    "Human Translation": "전 자리를 못 비워요 여기 망사도 큰일이라고요"
  },
  {
    "Time": "22:37",
    "Subtitle": "I WILL NEVER GO NEAR THOSE FILTHY BIRDS.",
    "Human Translation": "- 저 새 근처가 갈 수 없어요 - 왜요?"
  },
  {
    "Time": "22:39",
    "Subtitle": "WHY? I HATE THE SWANS.",
    "Human Translation": "- 저 새 근처가 갈 수 없어요 - 왜요? - 난 백조가 싫어요 - 특히 저 백조가요?"
  },
  {
    "Time": "22:41",
    "Subtitle": "THESE PARTICULAR SWANS? NO, ALL SWANS.",
    "Human Translation": "- 난 백조가 싫어요 - 특히 저 백조가요? 백조는 다 싫어요"
  },
  {
    "Time": "22:44",
    "Subtitle": "I WAS ATTACKED BY A BAND OF SWANS IN THE LUXEMBOURG GARDENS WHEN I WAS A BOY.",
    "Human Translation": "어렸을 때 룩셈부르크 공원에서 백조 무리에게… 공격당했어요 절대 잊을 수 없죠"
  },
  {
    "Time": "22:48",
    "Subtitle": "NO ONE FORGETS THAT.",
    "Human Translation": "공격당했어요 절대 잊을 수 없죠 그럼요, 백조 무리에게 공격을 당했으니…"
  },
  {
    "Time": "22:50",
    "Subtitle": "OH, NO -- NOT BEING ATTACKED BY A BAND OF SWANS.",
    "Human Translation": "그럼요, 백조 무리에게 공격을 당했으니…"
  },
  {
    "Time": "22:53",
    "Subtitle": "WAS IT AN ALL-BOY BAND -- KIND OF A SCARY, FEATHERY, 'NSYNC KIND OF FIASCO?",
    "Human Translation": "무섭고 깃털이 날리는 수컷 백조 댄스 그룹이었나요?"
  },
  {
    "Time": "22:58",
    "Subtitle": "THIS IS NOT FUNNY. NO. I'M SORRY.",
    "Human Translation": "- 재미있자고 한 말 아니에요 - 아, 보기보다 심각하군요"
  },
  {
    "Time": "23:03",
    "Subtitle": "[ Laughing ] YOU HAVE TO ADMIT THAT'S A LITTLE FUNNY.",
    "Human Translation": "약간은 재밌는 거 알잖아요 거기, 스컹크 아저씨 이것 좀 도와주시죠?"
  },
  {
    "Time": "23:06",
    "Subtitle": "PEPE le PEW, GIVE ME A HAND WITH THIS.",
    "Human Translation": "거기, 스컹크 아저씨 이것 좀 도와주시죠?"
  },
  {
    "Time": "23:08",
    "Subtitle": "NO.",
    "Human Translation": "싫어요"
  },
  {
    "Time": "23:10",
    "Subtitle": "LISTEN, IT'S DRELLA OR THE SWANS.",
    "Human Translation": "드렐라나 백조 중에 골라요"
  },
  {
    "Time": "23:12",
    "Subtitle": "SO EITHER ONE BEAST OF TERROR OR ANOTHER?",
    "Human Translation": "두 괴물 중에 고르라고요?"
  },
  {
    "Time": "23:15",
    "Subtitle": "Drella: WHAT THE HELL IS HE BABBLING ABOUT?",
    "Human Translation": "- 뭐라고 소곤댔죠? - 말하지 말아요 - 백조가 무섭대요 - 고맙군요"
  },
  {
    "Time": "23:17",
    "Subtitle": "HE'S AFRAID OF SWANS.",
    "Human Translation": "- 백조가 무섭대요 - 고맙군요"
  },
  {
    "Time": "23:18",
    "Subtitle": "HE'S FRENCH.",
    "Human Translation": "당연히 무섭겠죠 프랑스 사람이잖아요"
  },
  {
    "Time": "23:20",
    "Subtitle": "OKAY, I'LL TAKE YOU TO THE POND. THANK YOU.",
    "Human Translation": "- 연못까지 안내할게요 - 고마워요"
  },
  {
    "Time": "23:26",
    "Subtitle": "BUT STAY FAR AWAY FROM ME.",
    "Human Translation": "멀리 떨어져서 따라와요"
  },
  {
    "Time": "23:34",
    "Subtitle": "CAN'T STAND THE TALK -- LOVE TO WATCH THE WALK.",
    "Human Translation": "말하는 건 짜증 나도 걸음걸이는 보기 좋군요"
  },
  {
    "Time": "23:40",
    "Subtitle": "SHE CAUGHT HIM IN THE POOL HOUSE WITH THE TENNIS PRO,",
    "Human Translation": "남편이 테니스 선수와 함께 있는 걸 잡았는데… 원래 전임강사가 아니었대요"
  },
  {
    "Time": "23:43",
    "Subtitle": "NOT THE RIDING INSTRUCTOR.",
    "Human Translation": "원래 전임강사가 아니었대요"
  },
  {
    "Time": "23:44",
    "Subtitle": "I HAD NO IDEA.",
    "Human Translation": "난 전혀 몰랐구나 할아버지가 말씀하신 것처럼 검열이 심하진 않나 봐요"
  },
  {
    "Time": "23:46",
    "Subtitle": "THAT COMMITTEE IS NOT LOOKING AT PEOPLE AS MUCH AS YOU THINK.",
    "Human Translation": "할아버지가 말씀하신 것처럼 검열이 심하진 않나 봐요"
  },
  {
    "Time": "23:49",
    "Subtitle": "WHY WOULD THEY?",
    "Human Translation": "왜 아니겠니? 네 말을 들어보니…"
  },
  {
    "Time": "23:51",
    "Subtitle": "THEY'RE ALL INVOLVED IN ONE NEFARIOUS ACTIVITY AFTER ANOTHER.",
    "Human Translation": "여기 회원들 모두 사악한 면이 있지 않니"
  },
  {
    "Time": "23:54",
    "Subtitle": "IT'S A CONSPIRACY.",
    "Human Translation": "- 의혹이 많아요 - 꼭 드라마 같구나"
  },
  {
    "Time": "23:55",
    "Subtitle": "IT'S \"PEYTON PLACE.\" IS THERE MORE?",
    "Human Translation": "- 의혹이 많아요 - 꼭 드라마 같구나 - 더 없니? - 견딜 수 있겠어요?"
  },
  {
    "Time": "23:59",
    "Subtitle": "CAN YOU HANDLE IT?",
    "Human Translation": "- 더 없니? - 견딜 수 있겠어요?"
  },
  {
    "Time": "24:00",
    "Subtitle": "I'LL STEEL MYSELF.",
    "Human Translation": "참도록 노력해 보마"
  },
  {
    "Time": "24:02",
    "Subtitle": "OKAY. MR. NEVILLE LIKES ALL THINGS FRILLY.",
    "Human Translation": "네빌 씨는 주름 치마 입는 걸 좋아한대요"
  },
  {
    "Time": "24:05",
    "Subtitle": "GOOD GOD. HE'S MY BROKER.",
    "Human Translation": "세상에, 그 사람은 내 브로커인데"
  },
  {
    "Time": "24:08",
    "Subtitle": "I DON'T THINK ONE WILL AFFECT THE OTHER.",
    "Human Translation": "일에는 영향이 없을 거예요"
  },
  {
    "Time": "24:11",
    "Subtitle": "MIND IF WE BARGE IN? WELL, LOOK WHO'S HERE.",
    "Human Translation": "- 내가 앉아도 되겠나? - 이게 누구야?"
  },
  {
    "Time": "24:14",
    "Subtitle": "AH, RORY, THIS IS JULIAN JOHNSON AND EDWARD JAMES.",
    "Human Translation": "로리, 줄리안 존슨과 에드워드 제임스란다"
  },
  {
    "Time": "24:18",
    "Subtitle": "CALL ME \"ED.\" YOU CAN CALL ME \"ED,\" TOO.",
    "Human Translation": "- 에드라고 부르렴 - 나도 에드라고 부르렴"
  },
  {
    "Time": "24:22",
    "Subtitle": "IT'S NICE TO MEET YOU. WOULD YOU CARE TO JOIN US?",
    "Human Translation": "- 만나 봬서 반가워요 - 같이 앉겠나?"
  },
  {
    "Time": "24:25",
    "Subtitle": "IF RORY DOESN'T MIND US INTRUDING.",
    "Human Translation": "할아버지와의 시간을 방해하는 것만 아니라면"
  },
  {
    "Time": "24:29",
    "Subtitle": "NO, THAT'S FINE. AH, GREAT.",
    "Human Translation": "- 아뇨, 괜찮아요 - 잘됐구나"
  },
  {
    "Time": "24:32",
    "Subtitle": "SO, WE HEAR YOU'RE ATTENDING CHILTON. I JUST STARTED.",
    "Human Translation": "- 칠튼에 다닌다면서? - 이제 시작했어요"
  },
  {
    "Time": "24:35",
    "Subtitle": "THAT'S A HARD SCHOOL. YES, SIR",
    "Human Translation": "- 아주 힘든 학교지 - 맞아요"
  },
  {
    "Time": "24:37",
    "Subtitle": "RORY IS AN EXCELLENT STUDENT --",
    "Human Translation": "- 로리는 훌륭한 학생이라네 - 그런가?"
  },
  {
    "Time": "24:39",
    "Subtitle": "4.0 GRADE-POINT AVERAGE.",
    "Human Translation": "평점이 4.0이지"
  },
  {
    "Time": "24:41",
    "Subtitle": "WHOA! THAT'S GOT ME BEAT!",
    "Human Translation": "나보다도 높군"
  },
  {
    "Time": "24:47",
    "Subtitle": "SHE'S GOING TO FEZ SOMEDAY.",
    "Human Translation": "페즈에 가고 싶다더군"
  },
  {
    "Time": "24:49",
    "Subtitle": "FEZ? WHAT THE HELL IS IN FEZ?",
    "Human Translation": "페즈에 뭐가 있기에?"
  },
  {
    "Time": "24:52",
    "Subtitle": "THAT'S FOR HER TO FIND OUT.",
    "Human Translation": "그건 로리가 알아내겠지"
  },
  {
    "Time": "25:06",
    "Subtitle": "INTERESTING HAT.",
    "Human Translation": "신기한 모자네"
  },
  {
    "Time": "25:08",
    "Subtitle": "I WENT GOLFING WITH MY GRANDFATHER TODAY.",
    "Human Translation": "오늘 할아버지와 골프장에 갔어요"
  },
  {
    "Time": "25:10",
    "Subtitle": "DID YOU KNOW THAT GOLF COURSES ARE AN ENVIRONMENTAL BLIGHT",
    "Human Translation": "골프장이 환경을 오염시키는 걸 알고 있니?"
  },
  {
    "Time": "25:13",
    "Subtitle": "BECAUSE OF THE CHEMICALS THEY USE TO KEEP THE GRASS GREEN?",
    "Human Translation": "녹색 잔디를 유지하려고 농약을 친단 말이야"
  },
  {
    "Time": "25:16",
    "Subtitle": "ACTUALLY, I DID.",
    "Human Translation": "당연히 알죠"
  },
  {
    "Time": "25:19",
    "Subtitle": "BAD JOKE. SORRY.",
    "Human Translation": "괜한 농담이네요, 죄송해요"
  },
  {
    "Time": "25:28",
    "Subtitle": "MY GOD -- THIS DAY -- THE SWANS, THE TULLE, MY HEAD.",
    "Human Translation": "백조에, 망사에… 힘들어서 머리가 다 아파"
  },
  {
    "Time": "25:32",
    "Subtitle": "LUKE, I NEED THE LARGEST CHEESEBURGER IN THE WORLD.",
    "Human Translation": "루크, 세계 최대의 치즈버거를 줘요"
  },
  {
    "Time": "25:35",
    "Subtitle": "LET'S BREAK A RECORD, MISTER.",
    "Human Translation": "신기록을 세워 봐요"
  },
  {
    "Time": "25:36",
    "Subtitle": "SO THE WEDDING IS A NIGHTMARE. WE GOT THESE 10 BOXES OF CREEPY LARVAE",
    "Human Translation": "결혼식 준비는 엉망이야 애벌레 10박스를 사서…"
  },
  {
    "Time": "25:41",
    "Subtitle": "THAT ARE SUPPOSED TO SWARM INTO BUTTERFLIES",
    "Human Translation": "결혼식을 예쁜 나비로 가득 채우려고 했었거든"
  },
  {
    "Time": "25:43",
    "Subtitle": "ON THE WEDDING DAY. THEY SWARMED EARLY.",
    "Human Translation": "결혼식을 예쁜 나비로 가득 채우려고 했었거든 근데 너무 빨리 나비가 됐어 그 모자는 뭐야?"
  },
  {
    "Time": "25:45",
    "Subtitle": "WHAT'S WITH THE HAT?",
    "Human Translation": "근데 너무 빨리 나비가 됐어 그 모자는 뭐야?"
  },
  {
    "Time": "25:46",
    "Subtitle": "GRANDMA GAVE IT TO ME. OH, NOW, THAT'S JUST MEAN.",
    "Human Translation": "할머니가 줬어 - 너무 심했네 - 그렇게 심하진 않잖아"
  },
  {
    "Time": "25:49",
    "Subtitle": "IT'S NOT THAT BAD.",
    "Human Translation": "- 너무 심했네 - 그렇게 심하진 않잖아"
  },
  {
    "Time": "25:51",
    "Subtitle": "DO YOU WANT A MIRROR? I'M TAKING IT OFF.",
    "Human Translation": "- 거울 보여 줄까? - 벗으면 되잖아"
  },
  {
    "Time": "25:53",
    "Subtitle": "SO, RORY'S GOLFING ADVENTURE -- TELL ME!",
    "Human Translation": "- 골프 모험을 얘기해 봐 - 괜찮았어"
  },
  {
    "Time": "25:56",
    "Subtitle": "IT WAS FINE.",
    "Human Translation": "- 골프 모험을 얘기해 봐 - 괜찮았어 기분전환용으로 수키의 초콜릿 케이크도 가져왔어"
  },
  {
    "Time": "25:58",
    "Subtitle": "I BROUGHT YOU CHOCOLATE CAKE TO MAKE YOU FEEL BETTER.",
    "Human Translation": "기분전환용으로 수키의 초콜릿 케이크도 가져왔어"
  },
  {
    "Time": "26:00",
    "Subtitle": "IT REALLY WASN'T THAT BAD.",
    "Human Translation": "기분전환용으로 수키의 초콜릿 케이크도 가져왔어 정말 괜찮았어"
  },
  {
    "Time": "26:02",
    "Subtitle": "YOU ARE THE SWEETEST KID IN THE WORLD. WHERE DID YOU GET THAT FROM?",
    "Human Translation": "너만큼 착한 애는 세상에 또 없을 거야 대체 누굴 닮았니?"
  },
  {
    "Time": "26:06",
    "Subtitle": "LUKE, AM I MISTAKEN, OR DID THE SIGN ON THE DOOR SAY \"OPEN\"?",
    "Human Translation": "루크, 저기 문에 '영업중' 이라고 쓴 거 맞죠?"
  },
  {
    "Time": "26:09",
    "Subtitle": "SO, WHERE WERE WE? ME GOLFING.",
    "Human Translation": "- 어디까지 했지? - 골프 얘기"
  },
  {
    "Time": "26:11",
    "Subtitle": "RIGHT. GO.",
    "Human Translation": "- 어디까지 했지? - 골프 얘기 - 맞다, 계속해 - 알았어"
  },
  {
    "Time": "26:13",
    "Subtitle": "OKAY. WELL, UM, BY THE END OF THE DAY",
    "Human Translation": "- 맞다, 계속해 - 알았어"
  },
  {
    "Time": "26:15",
    "Subtitle": "I COULD EVEN HIT THE BALL.",
    "Human Translation": "끝날 때쯤엔 공도 맞혔어"
  },
  {
    "Time": "26:17",
    "Subtitle": "SOMETIMES IT WASN'T MY BALL, BUT THE INTENTIONS WERE GOOD.",
    "Human Translation": "내 공이 아닐 때도 있었지만 그래도 취지는 좋았잖아"
  },
  {
    "Time": "26:20",
    "Subtitle": "WELL, GOOD INTENTIONS AND NO PHYSICAL EXERTION WHATSOEVER",
    "Human Translation": "취지만 좋고 운동은 하나도 안 하는 게…"
  },
  {
    "Time": "26:22",
    "Subtitle": "IS WHAT THE GAME OF GOLF WAS BUILT ON. SO, DID YOU ORDER?",
    "Human Translation": "바로 골프의 목적이야 주문은 했어?"
  },
  {
    "Time": "26:26",
    "Subtitle": "I'M NOT HUNGRY. I HAD A BIG LUNCH AT THE CLUB.",
    "Human Translation": "배가 안 고파 클럽에서 점심을 많이 먹었어"
  },
  {
    "Time": "26:29",
    "Subtitle": "WITH ALL THE OTHER DEVASTATORS OF OUR LAND.",
    "Human Translation": "다른 토지 파괴자들과 함께 말이지"
  },
  {
    "Time": "26:31",
    "Subtitle": "LUKE, I'M REALLY SORRY. I DIDN'T KNOW.",
    "Human Translation": "루크, 정말 죄송해요 몰랐단 말이에요"
  },
  {
    "Time": "26:35",
    "Subtitle": "YOU HAD A BIG LUNCH AT THE CLUB? YEP. IT WAS QUITE GOOD.",
    "Human Translation": "- 클럽에서 점심을 먹었어? - 응, 꽤 맛있었어"
  },
  {
    "Time": "26:38",
    "Subtitle": "WHAT'S WITH THE \"QUITE\"? WHAT DO YOU MEAN?",
    "Human Translation": "- '꽤' 라니 무슨 뜻이야? - 왜 그래?"
  },
  {
    "Time": "26:42",
    "Subtitle": "YOU DON'T EVER SAY \"QUITE.\"",
    "Human Translation": "넌 '꽤' 라는 말은 안 하잖아"
  },
  {
    "Time": "26:43",
    "Subtitle": "I'VE SAID \"QUITE\" PLENTY OF TIMES.",
    "Human Translation": "- '꽤' 라는 말은 꽤 했어 - 그러시겠지"
  },
  {
    "Time": "26:45",
    "Subtitle": "WHATEVER. SO, BESIDES THE \"QUITE GOOD\" LUNCH YOU HAD,",
    "Human Translation": "- '꽤' 라는 말은 꽤 했어 - 그러시겠지 '꽤' 괜찮은 음식 말고 또 무슨 일이 있었어?"
  },
  {
    "Time": "26:47",
    "Subtitle": "WHAT ELSE HAPPENED?",
    "Human Translation": "'꽤' 괜찮은 음식 말고 또 무슨 일이 있었어?"
  },
  {
    "Time": "26:49",
    "Subtitle": "NOTHING. WE PLAYED. I MET HIS FRIENDS.",
    "Human Translation": "별로, 골프 치고 할아버지의 친구도 만나고 사우나도 했어"
  },
  {
    "Time": "26:52",
    "Subtitle": "I TOOK A STEAM. YOU TOOK A STEAM?",
    "Human Translation": "별로, 골프 치고 할아버지의 친구도 만나고 사우나도 했어 - 사우나를 했다고? - 그래"
  },
  {
    "Time": "26:54",
    "Subtitle": "YEAH. I SWEATED OUT ALL MY TOXINS,",
    "Human Translation": "- 사우나를 했다고? - 그래 몸의 독기를 쫙 빼내고 수건도 한 장 훔쳤어"
  },
  {
    "Time": "26:56",
    "Subtitle": "AND I STOLE A TOWEL.",
    "Human Translation": "몸의 독기를 쫙 빼내고 수건도 한 장 훔쳤어"
  },
  {
    "Time": "26:58",
    "Subtitle": "WOW! SOUNDS LIKE YOU REALLY HAD A GOOD TIME. I DID.",
    "Human Translation": "- 정말 재밌었던 것 같구나 - 맞아"
  },
  {
    "Time": "27:02",
    "Subtitle": "REALLY? REALLY.",
    "Human Translation": "- 정말? - 그래"
  },
  {
    "Time": "27:03",
    "Subtitle": "REALLY? REALLY.",
    "Human Translation": "- 정말? - 그렇다니까"
  },
  {
    "Time": "27:04",
    "Subtitle": "REALLY? OKAY -- NEW WORD. SORRY. I'M SURPRISED.",
    "Human Translation": "- 이제 다른 말 좀 해 - 미안, 너무 놀라서 그래"
  },
  {
    "Time": "27:08",
    "Subtitle": "I THOUGHT YOU WERE GONNA BE BORED. I WAS KIND OF SURPRISED, TOO.",
    "Human Translation": "- 지루할 줄 알았거든 - 실은 나도 놀랐어"
  },
  {
    "Time": "27:12",
    "Subtitle": "I DON'T KNOW. IT WAS PRETTY. GRANDPA AND I TALKED A LOT.",
    "Human Translation": "골프장도 예뻤고 할아버지와 얘기도 많이 했어"
  },
  {
    "Time": "27:15",
    "Subtitle": "YOU TALKED? REALLY? YOU'RE DOING IT AGAIN.",
    "Human Translation": "- 얘기를 했다고? 정말? - 또 그 소리네"
  },
  {
    "Time": "27:18",
    "Subtitle": "SORRY. YOU TALKED?",
    "Human Translation": "미안, 얘기를 했어?"
  },
  {
    "Time": "27:20",
    "Subtitle": "WE TALKED ABOUT FEZ. AND HE THOUGHT IT WAS A HAT.",
    "Human Translation": "- 페즈 얘기를 했어 - 아빤 모자 얘긴 줄 아셨지?"
  },
  {
    "Time": "27:24",
    "Subtitle": "I TOLD HIM ABOUT OUR TRIP, AND HE THOUGHT IT WAS GREAT.",
    "Human Translation": "배낭여행 얘기를 했더니 좋은 생각이라고 하셨어"
  },
  {
    "Time": "27:30",
    "Subtitle": "SO YOU REALLY HAD FUN?",
    "Human Translation": "그럼 정말 재밌었구나?"
  },
  {
    "Time": "27:34",
    "Subtitle": "THAT'S GREAT.",
    "Human Translation": "다행이네"
  },
  {
    "Time": "27:36",
    "Subtitle": "THAT IS REALLY, REALLY GREAT.",
    "Human Translation": "정말 진짜 다행이야"
  },
  {
    "Time": "27:41",
    "Subtitle": "I THOUGHT YOU WERE STARVING. THINGS CHANGE. MOVE ON.",
    "Human Translation": "- 배고프다면서요 - 변화하는 세상에 적응해요"
  },
  {
    "Time": "27:46",
    "Subtitle": "DOES THIS HAT REALLY LOOK BAD ON ME?",
    "Human Translation": "모자가 정말 이상해?"
  },
  {
    "Time": "27:55",
    "Subtitle": "NO. I THINK IT LOOKS KINDA CUTE.",
    "Human Translation": "아니, 귀여운 것 같네"
  },
  {
    "Time": "28:04",
    "Subtitle": "IT'S YOUR WEDDING DAY. FEEL EACH OTHER.",
    "Human Translation": "결혼식이잖아요 서로를 느껴 봐요"
  },
  {
    "Time": "28:07",
    "Subtitle": "USE THE THUMPING OF YOUR HEART AS YOUR METRONOME.",
    "Human Translation": "심장의 박동에 리듬을 맞춰요"
  },
  {
    "Time": "28:10",
    "Subtitle": "LET PASSION BE YOUR CHOREOGRAPHER.",
    "Human Translation": "열정이 춤을 알려 줄 거예요"
  },
  {
    "Time": "28:13",
    "Subtitle": "BE AS LIGHT ON YOUR TOES AS YOU ARE IN YOUR HEART.",
    "Human Translation": "가벼운 마음만큼 발가락도 가볍게 해요"
  },
  {
    "Time": "28:17",
    "Subtitle": "NO, NO, LET ME SHOW YOU.",
    "Human Translation": "이런, 그게 아니에요 내가 보여 줄게요"
  },
  {
    "Time": "28:20",
    "Subtitle": "AGAIN?",
    "Human Translation": "또요?"
  },
  {
    "Time": "28:23",
    "Subtitle": "YOU KNOW, IN SOME COUNTRIES,",
    "Human Translation": "나라에 따라선 이렇게 가깝게 춤을 추면…"
  },
  {
    "Time": "28:25",
    "Subtitle": "IF YOU DANCE THIS CLOSE, YOU'RE CHEATING ON YOUR WIFE.",
    "Human Translation": "나라에 따라선 이렇게 가깝게 춤을 추면… 불륜으로 여길 때도 있어요"
  },
  {
    "Time": "28:28",
    "Subtitle": "YOU'RE NEXT. TAKE YOUR TIME.",
    "Human Translation": "- 다음은 너야 - 천천히 해"
  },
  {
    "Time": "28:46",
    "Subtitle": "OH, MY GOD, YOU HAVE GOOD HANDWRITING.",
    "Human Translation": "- 글씨가 참 예쁘구나 - 고마워"
  },
  {
    "Time": "28:49",
    "Subtitle": "YOU DID NOT GET THAT FROM ME. YOUR FABULOUS FLAIR YOU GOT FROM ME.",
    "Human Translation": "글씨는 날 안 닮았네 재능은 날 닮은 거야"
  },
  {
    "Time": "28:52",
    "Subtitle": "I ALSO GOT MY DEVIATED SEPTUM FROM YOU. HEY, FOCUS ON THE FLAIR.",
    "Human Translation": "- 축농증도 엄마를 닮았지 - 재능만 생각해"
  },
  {
    "Time": "28:56",
    "Subtitle": "IT'S FOR YOU. HE SAYS HE'S YOUR FATHER,",
    "Human Translation": "로렐라이 전화예요 아버지라고 하더군요"
  },
  {
    "Time": "28:58",
    "Subtitle": "THOUGH WHY HE'D VOLUNTEER THAT FREELY, I DON'T KNOW.",
    "Human Translation": "묻지도 않은 걸 왜 얘기하는지 모르겠군요"
  },
  {
    "Time": "29:01",
    "Subtitle": "MY FATHER? ARE YOU SURE?",
    "Human Translation": "- 아빠라고요? - 네"
  },
  {
    "Time": "29:02",
    "Subtitle": "PLEASE JUST TAKE THE PHONE. THANK YOU.",
    "Human Translation": "- 확실해요? - 그냥 전화나 받아요"
  },
  {
    "Time": "29:06",
    "Subtitle": "DAD?",
    "Human Translation": "아빠?"
  },
  {
    "Time": "29:07",
    "Subtitle": "YEAH, IT'S LORELAI. WHO ELSE CALLS YOU \"DAD\"?",
    "Human Translation": "네, 로렐라이예요 아빠 자식이 또 있어요?"
  },
  {
    "Time": "29:12",
    "Subtitle": "YEAH, SHE'S RIGHT HERE. HOLD ON. IT'S FOR YOU.",
    "Human Translation": "여기 있어요, 잠깐만요 네 전화야"
  },
  {
    "Time": "29:16",
    "Subtitle": "THANKS.",
    "Human Translation": "고마워, 여보세요?"
  },
  {
    "Time": "29:19",
    "Subtitle": "HEY, GRANDPA. THAT'S GREAT.",
    "Human Translation": "네, 할아버지 그거 다행이네요"
  },
  {
    "Time": "29:23",
    "Subtitle": "JACKIE WANTS SAMUEL BARBER, JOHN CAGE, AND PHILIP GLASS,",
    "Human Translation": "재키는 사뮤엘 바버, 존 케이지 필립 글래스를 원하고…"
  },
  {
    "Time": "29:27",
    "Subtitle": "AND JESSICA WANTS SHANIA TWAIN'S \"I FEEL LIKE A WOMAN.\"",
    "Human Translation": "제시카는 샤니아 트웨인의 '아이 필 라이크 어 우먼' 을 원해요"
  },
  {
    "Time": "29:29",
    "Subtitle": "I'M NOT A JUKEBOX. OH, PLEASE.",
    "Human Translation": "- 내가 주크박스예요? - 부탁할게요"
  },
  {
    "Time": "29:31",
    "Subtitle": "YOU THINK I STARTED PLAYING THE HARP",
    "Human Translation": "제가 하프를 시작한 이유가…"
  },
  {
    "Time": "29:33",
    "Subtitle": "BECAUSE I THOUGHT IT WOULD MAKE ME COOL -- FINALLY GET ME IN WITH THE IN-CROWD?",
    "Human Translation": "멋지게 보이거나 유행을 좇기 위해서인 줄 아세요?"
  },
  {
    "Time": "29:37",
    "Subtitle": "MAYBE I'D MAKE FOR SOME GREAT HAPPY-HOUR CONVERSATION.",
    "Human Translation": "차라리 호프 집에서 연주나 해야겠군요"
  },
  {
    "Time": "29:39",
    "Subtitle": "NO, ALRIGHT? THE MUSIC DRIVES ME, LADY.",
    "Human Translation": "싫어요, 음악이 절 이끌어요"
  },
  {
    "Time": "29:42",
    "Subtitle": "I WILL PLAY WHAT I FEEL, AND YOU WILL LOVE IT.",
    "Human Translation": "내 감정을 연주하면 당신도 마음에 들 거예요"
  },
  {
    "Time": "29:45",
    "Subtitle": "I'LL GIVE YOU AN EXTRA $100. YOU JUST GOT YOURSELF A JUKEBOX.",
    "Human Translation": "- 백 달러 더 줄게요 - 주크박스가 돼 드릴게요"
  },
  {
    "Time": "29:54",
    "Subtitle": "YEAH, YEAH, I'D LOVE TO SEE IT.",
    "Human Translation": "네, 그건 보고 싶네요"
  },
  {
    "Time": "29:57",
    "Subtitle": "NO, IF YOU WANT TO.",
    "Human Translation": "아뇨, 할아버지가 좋다면요"
  },
  {
    "Time": "30:00",
    "Subtitle": "SURE. THAT SOUNDS GOOD. YEAH.",
    "Human Translation": "네, 재밌을 것 같네요"
  },
  {
    "Time": "30:14",
    "Subtitle": "SHOULD I LEAVE YOU TWO ALONE?",
    "Human Translation": "거울이랑 둘이 살래?"
  },
  {
    "Time": "30:17",
    "Subtitle": "I THINK I WANT TO CHANGE MY HAIR.",
    "Human Translation": "- 머리를 바꾸고 싶어 - 정말?"
  },
  {
    "Time": "30:19",
    "Subtitle": "REALLY? I THINK IT LOOKS QUITE GOOD.",
    "Human Translation": "- 머리를 바꾸고 싶어 - 정말? - 지금도 '꽤' 예쁜데 - 재미없어"
  },
  {
    "Time": "30:22",
    "Subtitle": "YOU'RE FUNNY.",
    "Human Translation": "- 지금도 '꽤' 예쁜데 - 재미없어"
  },
  {
    "Time": "30:23",
    "Subtitle": "DO YOU WANT SOMETHING TO DRINK? OH, YEAH -- WATER.",
    "Human Translation": "- 마실 거 줄까? - 그래, 물"
  },
  {
    "Time": "30:32",
    "Subtitle": "SO YOU TALKED TO GRANDPA TODAY?! WHAT?!",
    "Human Translation": "- 오늘 할아버지랑 얘기했지? - 응?"
  },
  {
    "Time": "30:35",
    "Subtitle": "GRANDPA -- HE CALLED?!",
    "Human Translation": "- 할아버지가 전화했잖아? - 응"
  },
  {
    "Time": "30:37",
    "Subtitle": "YEP! ANYTHING WRONG?!",
    "Human Translation": "- 할아버지가 전화했잖아? - 응 뭐가 잘못됐대?"
  },
  {
    "Time": "30:40",
    "Subtitle": "NO. HE JUST FOUND THIS BOOK WE WERE TALKING ABOUT.",
    "Human Translation": "아니, 우리가 얘기하던 책을 찾으셨대"
  },
  {
    "Time": "30:45",
    "Subtitle": "AND HE JUST CALLED TO TELL YOU? YEAH. WHY?",
    "Human Translation": "- 그것 때문에 전화하셨다고? - 응, 왜?"
  },
  {
    "Time": "30:48",
    "Subtitle": "NOTHING. IT'S JUST WEIRD. HE DOESN'T CALL THE INN THAT MUCH --",
    "Human Translation": "그냥 좀 이상해서 모텔엔 전화 잘 안 하시잖아"
  },
  {
    "Time": "30:52",
    "Subtitle": "OR EVER, ACTUALLY.",
    "Human Translation": "사실 이번이 처음이지"
  },
  {
    "Time": "30:54",
    "Subtitle": "HE KNEW THAT I WAS LOOKING FOR IT, SO --",
    "Human Translation": "- 내가 찾던 책인 걸 아셨으니… - 물론 그렇겠지"
  },
  {
    "Time": "30:57",
    "Subtitle": "OH, SURE. WHAT BOOK IS IT?",
    "Human Translation": "- 내가 찾던 책인 걸 아셨으니… - 물론 그렇겠지 - 무슨 책인데? - 멘켄의 '명문집' 이야"
  },
  {
    "Time": "30:59",
    "Subtitle": "MENCKEN'S \"CHRESTOMATHY.\"",
    "Human Translation": "- 무슨 책인데? - 멘켄의 '명문집' 이야"
  },
  {
    "Time": "31:01",
    "Subtitle": "OH, THAT ONE. YEAH.",
    "Human Translation": "- 아, 그 책? - 응"
  },
  {
    "Time": "31:04",
    "Subtitle": "CINNAMON IS STUCK UNDER OUR FRONT PORCH AGAIN.",
    "Human Translation": "시나몬이 또 현관 밑에 끼었어요"
  },
  {
    "Time": "31:08",
    "Subtitle": "CAN I BORROW SOME VEGETABLE OIL AND A SHOEHORN?",
    "Human Translation": "야채 기름하고 구둣주걱 좀 빌릴 수 있을까?"
  },
  {
    "Time": "31:10",
    "Subtitle": "I'LL GET IT.",
    "Human Translation": "- 갖고 올게요 - 계속해서 불러 댔어요"
  },
  {
    "Time": "31:12",
    "Subtitle": "I'M CALLIN' HIM AND CALLIN' HIM, AND I GO AROUND THE PORCH,",
    "Human Translation": "- 갖고 올게요 - 계속해서 불러 댔어요 현관을 돌아갔더니…"
  },
  {
    "Time": "31:15",
    "Subtitle": "AND THIS BIG, ORANGE TUSH IS JUST STARIN' ME IN THE FACE.",
    "Human Translation": "노란 엉덩이가 눈앞에 보였어요"
  },
  {
    "Time": "31:18",
    "Subtitle": "I HATE WHEN THAT HAPPENS.",
    "Human Translation": "그럴 땐 정말 싫죠 네, 한 시간은 울었을 텐데…"
  },
  {
    "Time": "31:20",
    "Subtitle": "YEAH. HE MUST HAVE BEEN MEOWING FOR AN HOUR,",
    "Human Translation": "네, 한 시간은 울었을 텐데…"
  },
  {
    "Time": "31:22",
    "Subtitle": "BUT MOREY WAS PLAYING SOME THELONIOUS ON THE STEINWAY,",
    "Human Translation": "모레이가 피아노로 재즈를 연주했거든요"
  },
  {
    "Time": "31:26",
    "Subtitle": "AND WHEN MOREY PLAYS, I GO INTO THIS TRANCE",
    "Human Translation": "모레이가 연주할 때면 난 환상에 빠져…"
  },
  {
    "Time": "31:29",
    "Subtitle": "WHERE ALL I CAN SEE IS BLUE AND MOON AND STARS.",
    "Human Translation": "눈에 보이는 거라고는 파란 달과 별뿐이에요"
  },
  {
    "Time": "31:35",
    "Subtitle": "OH. NEVER MIND, SUGAR. PLAY ME HOME, BABY!",
    "Human Translation": "이제 괜찮다네요 집에 갈 테니 연주해요!"
  },
  {
    "Time": "31:44",
    "Subtitle": "BYE.",
    "Human Translation": "잘 가세요"
  },
  {
    "Time": "31:47",
    "Subtitle": "OH, GOD! IT'S KILLIN' ME!",
    "Human Translation": "세상에! 죽을 것 같아요!"
  },
  {
    "Time": "31:55",
    "Subtitle": "BABETTE DIDN'T TAKE HER OIL.",
    "Human Translation": "- 기름을 안 가져가셨네 - 그냥 둬"
  },
  {
    "Time": "31:57",
    "Subtitle": "AH, KEEP IT. CHRISTMAS IS EARLY THIS YEAR.",
    "Human Translation": "- 기름을 안 가져가셨네 - 그냥 둬 네 크리스마스 선물이야"
  },
  {
    "Time": "32:00",
    "Subtitle": "SO YOU KNOW WHAT I WAS THINKING?",
    "Human Translation": "무슨 생각 했는지 알아?"
  },
  {
    "Time": "32:02",
    "Subtitle": "MADONNA AND SEAN PENN SHOULD GET REMARRIED?",
    "Human Translation": "마돈나랑 숀펜이 결혼해야 한다고? 그거 말고"
  },
  {
    "Time": "32:05",
    "Subtitle": "I WAS THINKING YOUR GOLFING EXPEDITION SHOULD TOTALLY COUNT AS A DINNER.",
    "Human Translation": "네 골프 모험으로 저녁식사를 때우는 거야"
  },
  {
    "Time": "32:08",
    "Subtitle": "I THINK I CAN GET US OUT OF DINNER AT THE GRANDPARENTS' ON FRIDAY.",
    "Human Translation": "- 무슨 뜻이야? - 금요일 약속을 건너뛰고… 저녁에 둘이서 영화라도 보자고"
  },
  {
    "Time": "32:12",
    "Subtitle": "MAYBE WE COULD GRAB A MOVIE.",
    "Human Translation": "저녁에 둘이서 영화라도 보자고"
  },
  {
    "Time": "32:14",
    "Subtitle": "OH. WELL, THAT'S OKAY. IT'S NO BIG DEAL, REALLY.",
    "Human Translation": "- 난 괜찮아 - 아주 쉬울 거야"
  },
  {
    "Time": "32:19",
    "Subtitle": "NO. IT'S JUST GONNA GET GRANDMA ALL FREAKED OUT.",
    "Human Translation": "싫어, 할머니가 화내실 거야"
  },
  {
    "Time": "32:21",
    "Subtitle": "I CAN HANDLE THOSE FREAKOUTS. I'VE DONE THAT.",
    "Human Translation": "그 정도는 내가 알아서 해 경험도 많잖아"
  },
  {
    "Time": "32:26",
    "Subtitle": "I HAVE TO GET THE BOOK FROM GRANDPA ANYWAY. LET'S JUST GO.",
    "Human Translation": "할아버지한테 책도 받아야 하니 그냥 가자"
  },
  {
    "Time": "32:30",
    "Subtitle": "OH. ALRIGHT, IF YOU REALLY WANT TO. I DO.",
    "Human Translation": "- 그래, 네가 원한다면 - 가고 싶어"
  },
  {
    "Time": "32:35",
    "Subtitle": "OKAY. FINE.",
    "Human Translation": "그래 좋아"
  },
  {
    "Time": "32:39",
    "Subtitle": "IS THAT MY SWEATER? WHAT?",
    "Human Translation": "- 그거 내 스웨터야? - 응?"
  },
  {
    "Time": "32:41",
    "Subtitle": "YOU'RE WEARING MY SWEATER. SO?",
    "Human Translation": "- 내 스웨터를 입고 있잖아 - 그래서?"
  },
  {
    "Time": "32:44",
    "Subtitle": "NO, IT'S OKAY.",
    "Human Translation": "아니, 그냥…"
  },
  {
    "Time": "32:46",
    "Subtitle": "IT'S JUST I THOUGHT I ASKED YOU TO AT LEAST ASK",
    "Human Translation": "아니, 그냥… 내 물건을 빌리기 전에 먼저 물어보라고 했잖아"
  },
  {
    "Time": "32:49",
    "Subtitle": "BEFORE YOU BORROW MY STUFF.",
    "Human Translation": "내 물건을 빌리기 전에 먼저 물어보라고 했잖아"
  },
  {
    "Time": "32:50",
    "Subtitle": "I'M SORRY. IT'S OKAY.",
    "Human Translation": "- 미안해 - 괜찮아"
  },
  {
    "Time": "32:54",
    "Subtitle": "IT'S JUST NOT TOO MUCH FOR A SIMPLE \"CAN I BORROW IT, MOM,\" IS IT?",
    "Human Translation": "'빌려줘' 라고 말하는 게 어렵진 않잖아?"
  },
  {
    "Time": "32:57",
    "Subtitle": "NO, IT'S NOT. JEEZ. LIGHTEN UP.",
    "Human Translation": "그래, 알았어 별걸 다 갖고 그래"
  },
  {
    "Time": "33:01",
    "Subtitle": "IT'S MY FAVORITE SWEATER, TOO.",
    "Human Translation": "내가 제일 좋아하는 스웨터잖아"
  },
  {
    "Time": "33:03",
    "Subtitle": "SINCE WHEN? SINCE ALWAYS.",
    "Human Translation": "- 언제부터? - 옛날부터"
  },
  {
    "Time": "33:05",
    "Subtitle": "THIS IS NOT YOUR FAVORITE.",
    "Human Translation": "- 이거 안 좋아하잖아 - 좋아했어"
  },
  {
    "Time": "33:07",
    "Subtitle": "YES, IT IS, AND IT'S GOING TO BE STRETCHED OUT,",
    "Human Translation": "- 이거 안 좋아하잖아 - 좋아했어 이젠 다 늘어났겠지 네가 입으면 다 그렇게 되니까"
  },
  {
    "Time": "33:09",
    "Subtitle": "LIKE EVERYTHING YOU BORROW.",
    "Human Translation": "이젠 다 늘어났겠지 네가 입으면 다 그렇게 되니까"
  },
  {
    "Time": "33:11",
    "Subtitle": "WHAT ARE YOU TALKING ABOUT?",
    "Human Translation": "대체 무슨 소리야? 그러니까 내 말은 네가 내 스웨터를 가져가고…"
  },
  {
    "Time": "33:12",
    "Subtitle": "YOU TAKE MY SWEATERS",
    "Human Translation": "그러니까 내 말은 네가 내 스웨터를 가져가고…"
  },
  {
    "Time": "33:14",
    "Subtitle": "AND WEAR THEM AND STRETCH THEM OUT.",
    "Human Translation": "입은 다음에 다 늘려 놓는다는 뜻이야"
  },
  {
    "Time": "33:16",
    "Subtitle": "I COULDN'T POSSIBLY STRETCH THEM OUT! YOUR BOOBS ARE WAY BIGGER THAN MINE!",
    "Human Translation": "내가 어떻게 늘려 놔 엄마 가슴이 훨씬 더 크잖아"
  },
  {
    "Time": "33:20",
    "Subtitle": "THAT IS NOT TRUE. YES, IT IS.",
    "Human Translation": "- 거짓말 마 - 사실이야"
  },
  {
    "Time": "33:22",
    "Subtitle": "YOUR BOOBS ARE TOTALLY BIGGER THAN MINE! YOU'RE CRAZY!",
    "Human Translation": "- 네 가슴이 나보다 더 커 - 말도 안 돼!"
  },
  {
    "Time": "33:25",
    "Subtitle": "DO YOU WANT TO MEASURE? WHAT?",
    "Human Translation": "- 한번 재 볼까? - 뭐라고?"
  },
  {
    "Time": "33:27",
    "Subtitle": "I'M SERIOUS. GET THE MEASURING TAPE RIGHT NOW!",
    "Human Translation": "진짜야, 가서 줄자를 가져와"
  },
  {
    "Time": "33:29",
    "Subtitle": "I AM NOT GOING TO MEASURE MY BOOBS!",
    "Human Translation": "내가 가슴을 잴 거 같아?"
  },
  {
    "Time": "33:31",
    "Subtitle": "BECAUSE YOU KNOW THAT YOU ARE TOTALLY BIGGER!",
    "Human Translation": "네 가슴이 나보다 큰 걸 아니까 그렇지"
  },
  {
    "Time": "33:34",
    "Subtitle": "I'M GOING INSIDE.",
    "Human Translation": "- 난 들어갈래 - 좋아"
  },
  {
    "Time": "33:35",
    "Subtitle": "FINE. WE'LL JUST COMPARE BRAS.",
    "Human Translation": "- 그럼 브라를 비교하면 되겠네 - 그만해"
  },
  {
    "Time": "33:37",
    "Subtitle": "STOP IT!",
    "Human Translation": "- 그럼 브라를 비교하면 되겠네 - 그만해 내 물건을 그만 훔치면 나도 그만할게"
  },
  {
    "Time": "33:39",
    "Subtitle": "I'LL STOP IT WHEN YOU QUIT STEALING MY STUFF!",
    "Human Translation": "내 물건을 그만 훔치면 나도 그만할게"
  },
  {
    "Time": "33:40",
    "Subtitle": "YOU'RE CRACKED!",
    "Human Translation": "엄만 미쳤어!"
  },
  {
    "Time": "33:42",
    "Subtitle": "YOU'RE...BIGGER!",
    "Human Translation": "넌 더 커!"
  },
  {
    "Time": "33:55",
    "Subtitle": "\"YOUR BOOBS ARE BIGGER THAN MINE?\" I'M A MENTAL CASE.",
    "Human Translation": "'네 가슴이 더 커' 라니 정신병자 같아"
  },
  {
    "Time": "33:58",
    "Subtitle": "APOLOGIZE.",
    "Human Translation": "그럼 사과해"
  },
  {
    "Time": "33:59",
    "Subtitle": "I WAS TOO STUPID TO APOLOGIZE LAST NIGHT,",
    "Human Translation": "어젯밤에 사과하기엔 너무 화가 났었고…"
  },
  {
    "Time": "34:01",
    "Subtitle": "AND SHE WAS GONE BEFORE I GOT UP THIS MORNING.",
    "Human Translation": "어젯밤에 사과하기엔 너무 화가 났었고… 오늘 아침에 일어나 보니 로리는 이미 없었어"
  },
  {
    "Time": "34:03",
    "Subtitle": "WHAT IS WRONG WITH ME? YOU'RE VERY POSSESSIVE OF YOUR SWEATERS.",
    "Human Translation": "- 난 왜 이러지? - 스웨터에 목숨 걸었으니까"
  },
  {
    "Time": "34:07",
    "Subtitle": "IF SOMEBODY EVEN BREATHES TOO HARD ON MY PARING KNIFE,",
    "Human Translation": "난 이해해, 누가 내 과도에 숨이라도 세게 쉴 땐…"
  },
  {
    "Time": "34:10",
    "Subtitle": "I'M LIKE A CRAZY SPIDER MONKEY.",
    "Human Translation": "거미원숭이처럼 화를 내거든"
  },
  {
    "Time": "34:12",
    "Subtitle": "IT'S NOT ABOUT THE SWEATER.",
    "Human Translation": "거미원숭이처럼 화를 내거든 스웨터가 문제가 아니야"
  },
  {
    "Time": "34:14",
    "Subtitle": "IT'S ABOUT THE GOLFING THING AND THE LIKING IT THING.",
    "Human Translation": "골프 클럽에 가서 좋았다는 게 문제지"
  },
  {
    "Time": "34:18",
    "Subtitle": "SHE HAD FUN, SOOKIE, JUST LIKE MY MOTHER SAID SHE WOULD.",
    "Human Translation": "재미가 있었대, 수키 엄마가 말한 대로였어"
  },
  {
    "Time": "34:21",
    "Subtitle": "YEAH, THAT'S GOTTA HURT. SHE SHOULD HAVE FUN.",
    "Human Translation": "- 가슴이 아프겠네 - 재밌게 노는 게 맞아"
  },
  {
    "Time": "34:24",
    "Subtitle": "I WANT HER TO HAVE A GOOD RELATIONSHIP WITH HER GRANDPARENTS.",
    "Human Translation": "로리가 우리 부모님과 좋게 지냈으면 좋겠어"
  },
  {
    "Time": "34:27",
    "Subtitle": "JUST BECAUSE I DON'T DOESN'T MEAN SHE SHOULDN'T. RIGHT? RIGHT.",
    "Human Translation": "내가 싫어한다고 로리까지 그럴 필요는 없잖아?"
  },
  {
    "Time": "34:31",
    "Subtitle": "RIGHT. SO WHY WAS I TRYING TO GET HER OUT OF DINNER?",
    "Human Translation": "맞아 근데 나는 왜 저녁식사에 로리를 못 가게 하려는 걸까?"
  },
  {
    "Time": "34:35",
    "Subtitle": "WHAT AM I TRYING TO DO, UNDERMINE THEIR RELATIONSHIP?",
    "Human Translation": "내가 세 사람의 관계를 망치려고 그런 걸까?"
  },
  {
    "Time": "34:38",
    "Subtitle": "YOU WEREN'T. YES, I WAS.",
    "Human Translation": "- 아닐 거야 - 맞아"
  },
  {
    "Time": "34:39",
    "Subtitle": "YES, YOU WERE. I'M 4-YEARS-OLD.",
    "Human Translation": "- 그래, 맞아 - 난 4살만도 못해"
  },
  {
    "Time": "34:40",
    "Subtitle": "YOU'RE JEALOUS. I'M NOT JEALOUS.",
    "Human Translation": "- 질투해서 그래 - 질투는 아냐"
  },
  {
    "Time": "34:43",
    "Subtitle": "YOU'RE JEALOUS BECAUSE THEY LIKE RORY BETTER THAN YOU.",
    "Human Translation": "부모님이 너보다 로리를 더 좋아하니까 질투 나서 그래"
  },
  {
    "Time": "34:46",
    "Subtitle": "OH, THANK YOU FOR THE HUG.",
    "Human Translation": "위로해 줘서 고마워"
  },
  {
    "Time": "34:47",
    "Subtitle": "SEE, I'M BAD AT ADVICE TALKS.",
    "Human Translation": "난 위로에 약하다고 했잖아"
  },
  {
    "Time": "34:49",
    "Subtitle": "CAN WE TALK ABOUT SOUP? I'M GOOD WITH SOUP.",
    "Human Translation": "수프 얘기나 하자 수프는 자신 있어"
  },
  {
    "Time": "34:51",
    "Subtitle": "I'M SORRY. YOU'RE FINE. I'M ALL MIXED UP.",
    "Human Translation": "미안, 네 잘못이 아냐 내가 요즘 엉망이야"
  },
  {
    "Time": "34:54",
    "Subtitle": "I LEFT THAT LIFE, YOU KNOW -- THE CLUB AND MY PARENTS.",
    "Human Translation": "난 그런 인생을 떠났잖아 골프 클럽이나 우리 부모님을"
  },
  {
    "Time": "34:57",
    "Subtitle": "I RAN FROM IT AS SOON AS I COULD.",
    "Human Translation": "난 그런 인생을 떠났잖아 골프 클럽이나 우리 부모님을 철이 들자마자 도망쳤어"
  },
  {
    "Time": "34:59",
    "Subtitle": "IT JUST NEVER OCCURRED TO ME THAT SHE MIGHT WANT IT.",
    "Human Translation": "로리가 그걸 원할 거라고는 생각도 못했어"
  },
  {
    "Time": "35:03",
    "Subtitle": "IT OCCURRED TO MY MOTHER, THOUGH. GOD, I HATE THAT SHE WAS RIGHT.",
    "Human Translation": "엄마는 거기까지 생각했지 엄마 말이 맞을 땐 화가 나"
  },
  {
    "Time": "35:06",
    "Subtitle": "YOU DON'T KNOW THAT SH-- OOH! OH, MY GOD.",
    "Human Translation": "누가 맞는지는 아직… 세상에! 조심해요!"
  },
  {
    "Time": "35:10",
    "Subtitle": "OHH! AAH!",
    "Human Translation": "스탁!"
  },
  {
    "Time": "35:13",
    "Subtitle": "ARE YOU OKAY? OKAY.",
    "Human Translation": "괜찮아요?"
  },
  {
    "Time": "35:17",
    "Subtitle": "LOOK AT YOU! YOU'RE BEAUTIFUL!",
    "Human Translation": "어디 보자, 이 예쁜 것들!"
  },
  {
    "Time": "35:22",
    "Subtitle": "I HAVE TO BE MORE ADULT ABOUT THIS.",
    "Human Translation": "좀 더 어른스럽게 생각할래"
  },
  {
    "Time": "35:24",
    "Subtitle": "I MEAN, IF THE COUNTRY CLUB LIFE IS WHAT SHE WANTS,",
    "Human Translation": "골프 클럽 같은 생활이 로리가 원하는 거라면…"
  },
  {
    "Time": "35:26",
    "Subtitle": "MORE POWER TO HER, RIGHT?",
    "Human Translation": "그것도 대단한 거잖아"
  },
  {
    "Time": "35:28",
    "Subtitle": "YOU KNOW, LITTLE WHITE GLOVES AND COMING-OUT PARTIES --",
    "Human Translation": "흰 장갑을 끼고 사교계에 입문하는 거지"
  },
  {
    "Time": "35:31",
    "Subtitle": "THAT MAKES SOME GIRLS HAPPY, RIGHT?",
    "Human Translation": "흰 장갑을 끼고 사교계에 입문하는 거지 - 그걸 좋아하는 애들도 있잖아 - 그래, 맞아"
  },
  {
    "Time": "35:32",
    "Subtitle": "SURE. YEAH -- IF THEY'RE ON PROZAC, ABSOLUTELY.",
    "Human Translation": "- 그걸 좋아하는 애들도 있잖아 - 그래, 맞아 항우울제를 너무 먹으면 그렇지"
  },
  {
    "Time": "35:36",
    "Subtitle": "I JUST NEVER THOUGHT I RAISED THAT KIND OF KID --",
    "Human Translation": "내 손으로 그런 아이를 키울 거란 생각은 못해 봤어"
  },
  {
    "Time": "35:39",
    "Subtitle": "NOT THAT THERE'S ANYTHING WRONG WITH THAT KIND OF KID.",
    "Human Translation": "내 손으로 그런 아이를 키울 거란 생각은 못해 봤어 물론 그런 애들이 잘못됐다는 뜻은 아니지만"
  },
  {
    "Time": "35:41",
    "Subtitle": "I JUST DIDN'T THINK THAT WAS RORY.",
    "Human Translation": "물론 그런 애들이 잘못됐다는 뜻은 아니지만 로리가 그럴 줄은 몰랐어 아닐 수도 있지, 모르겠어"
  },
  {
    "Time": "35:43",
    "Subtitle": "MAYBE IT'S NOT. I DON'T KNOW. AM I OBSESSING? SOOKIE? HELLO?",
    "Human Translation": "로리가 그럴 줄은 몰랐어 아닐 수도 있지, 모르겠어 내가 신경과민인가? 수키? 안 들려?"
  },
  {
    "Time": "35:48",
    "Subtitle": "DO I HAVE TO PUT ON MY STRAWBERRY COSTUME TO GET YOUR ATTENTION?",
    "Human Translation": "내가 딸기 옷을 입어야 말을 들어줄 거야?"
  },
  {
    "Time": "35:51",
    "Subtitle": "I'M SORRY. YOU HAVE A STRAWBERRY COSTUME?",
    "Human Translation": "아니, 미안해 딸기 옷도 있어?"
  },
  {
    "Time": "35:54",
    "Subtitle": "UNBELIEVABLE! JACKSON...",
    "Human Translation": "- 믿을 수가 없군! - 잭슨!"
  },
  {
    "Time": "35:58",
    "Subtitle": "SO THIS IS WHAT WE'VE COME TO --",
    "Human Translation": "우리 사이가 이런 겁니까?"
  },
  {
    "Time": "36:00",
    "Subtitle": "YOU SNEAKING AROUND BEHIND MY BACK, BUYING SOMEBODY ELSE'S STRAWBERRIES?!",
    "Human Translation": "나 모르게 뒤에서 다른 딸기를 사요?"
  },
  {
    "Time": "36:03",
    "Subtitle": "I WAS DESPERATE! YOU DISGUST ME!",
    "Human Translation": "- 너무 힘들었어요! - 난 이렇겐 못 살아요!"
  },
  {
    "Time": "36:06",
    "Subtitle": "I NEEDED THE STRAWBERRIES!",
    "Human Translation": "- 딸기가 필요했어요 - 필요한 걸 찾았군요"
  },
  {
    "Time": "36:08",
    "Subtitle": "WELL, NOW YOU HAVE 'EM! I HOPE YOU'RE HAPPY TOGETHER!",
    "Human Translation": "- 딸기가 필요했어요 - 필요한 걸 찾았군요 둘이 행복하길 바라요"
  },
  {
    "Time": "36:11",
    "Subtitle": "JACKSON, WAIT! NO!",
    "Human Translation": "- 잭슨, 기다려요! - 싫어요!"
  },
  {
    "Time": "36:14",
    "Subtitle": "COME ON, JACKSON! NO!",
    "Human Translation": "- 말 들어요, 잭슨! - 싫어요!"
  },
  {
    "Time": "36:16",
    "Subtitle": "WE CAN TALK ABOUT IT. NO.",
    "Human Translation": "- 잭슨, 대화로 해결해요 - 싫어요!"
  },
  {
    "Time": "36:18",
    "Subtitle": "GET BACK!",
    "Human Translation": "- 이리 돌아와요! - 저리 가요! 왜 따라오는 거요?"
  },
  {
    "Time": "37:19",
    "Subtitle": "OH, PARDON ME. HERE YOU ARE.",
    "Human Translation": "실례해요, 거기 있었군요"
  },
  {
    "Time": "37:24",
    "Subtitle": "WE DID IT. WE SURE DID.",
    "Human Translation": "- 우리가 해냈어요 - 완벽하게 해냈어요"
  },
  {
    "Time": "37:28",
    "Subtitle": "OH, GOD, I FEEL WONDERFUL!",
    "Human Translation": "기분이 너무 좋아요"
  },
  {
    "Time": "37:30",
    "Subtitle": "I'M SO GLAD IT TURNED OUT THE WAY YOU WANTED IT TO.",
    "Human Translation": "일이 원하시는 대로 풀려서 다행이에요"
  },
  {
    "Time": "37:33",
    "Subtitle": "YOU HAVE NO IDEA. THEY JUST TOLD ME",
    "Human Translation": "상상도 못할 거예요 둘이 아리조나의 콘도를 같이 쓰겠다고 했어요"
  },
  {
    "Time": "37:35",
    "Subtitle": "THEY'RE GOING TO SHARE A CONDO IN TUCSON, ARIZONA.",
    "Human Translation": "둘이 아리조나의 콘도를 같이 쓰겠다고 했어요"
  },
  {
    "Time": "37:38",
    "Subtitle": "THAT'S HUNDREDS OF MILES AWAY!",
    "Human Translation": "멀고 먼 곳으로 가는 거예요"
  },
  {
    "Time": "37:41",
    "Subtitle": "CONGRATULATIONS.",
    "Human Translation": "- 축하드려요 - 고마워요"
  },
  {
    "Time": "37:42",
    "Subtitle": "THANK YOU! SISTER SLEDGE!",
    "Human Translation": "- 축하드려요 - 고마워요 춤추러 가야겠네요 실례해요"
  },
  {
    "Time": "37:44",
    "Subtitle": "EXCUSE ME!",
    "Human Translation": "춤추러 가야겠네요 실례해요"
  },
  {
    "Time": "38:00",
    "Subtitle": "HEY, STRANGER. HEY.",
    "Human Translation": "- 안녕, 이방인 - 그래"
  },
  {
    "Time": "38:03",
    "Subtitle": "GOOD TURNOUT? YEP.",
    "Human Translation": "- 사람이 많지? - 그래"
  },
  {
    "Time": "38:05",
    "Subtitle": "DO YOU WANT SOMETHING TO DRINK?",
    "Human Translation": "- 뭐 하나 마실래? - 화해하자는 거야?"
  },
  {
    "Time": "38:06",
    "Subtitle": "ARE YOU TRYING TO MAKE UP?",
    "Human Translation": "- 뭐 하나 마실래? - 화해하자는 거야? - 아니, 물 먹이려는 거야 - 난 괜찮아"
  },
  {
    "Time": "38:08",
    "Subtitle": "NO. I'M TRYING TO HYDRATE YOU. I'M FINE, THANKS.",
    "Human Translation": "- 아니, 물 먹이려는 거야 - 난 괜찮아"
  },
  {
    "Time": "38:13",
    "Subtitle": "I'M SORRY. IT'S OKAY.",
    "Human Translation": "- 미안해 - 괜찮아"
  },
  {
    "Time": "38:15",
    "Subtitle": "A CRAZY, EVIL SPIRIT OBSESSED WITH BRA SIZE",
    "Human Translation": "브라 크기에 집착한 악마가 몸에 씌었었나봐"
  },
  {
    "Time": "38:17",
    "Subtitle": "TOOK OVER MY BODY. IT HAPPENS.",
    "Human Translation": "브라 크기에 집착한 악마가 몸에 씌었었나봐 - 그럴 때도 있지 - 악마는 쫓았어"
  },
  {
    "Time": "38:19",
    "Subtitle": "SHE'S GONE NOW. GOOD TO KNOW.",
    "Human Translation": "- 그럴 때도 있지 - 악마는 쫓았어 다행이네"
  },
  {
    "Time": "38:23",
    "Subtitle": "YOU KNOW, I'M GLAD YOU'RE BONDING WITH YOUR GRANDPARENTS.",
    "Human Translation": "네가 할머니 할아버지와 잘 지내서 기뻐"
  },
  {
    "Time": "38:25",
    "Subtitle": "NO, YOU'RE NOT. YES, I AM.",
    "Human Translation": "- 아니잖아 - 기쁘다니까"
  },
  {
    "Time": "38:27",
    "Subtitle": "IT'S JUST WEIRD FOR ME, IS ALL. I CAN'T RELATE TO IT.",
    "Human Translation": "느낌이 이상해서 그랬어 적응하기 힘드니까"
  },
  {
    "Time": "38:31",
    "Subtitle": "YOU COULD IF YOU TRIED. NO. WE'RE TOO --",
    "Human Translation": "- 노력하면 되잖아 - 아니, 우린 너무…"
  },
  {
    "Time": "38:34",
    "Subtitle": "[ SIGHS ] TOO MUCH HAS HAPPENED.",
    "Human Translation": "너무 많은 일이 있었어"
  },
  {
    "Time": "38:39",
    "Subtitle": "I'M GLAD YOU ARE, ANYWAY.",
    "Human Translation": "너라도 잘 지내니 기뻐"
  },
  {
    "Time": "38:40",
    "Subtitle": "OKAY.",
    "Human Translation": "알았어"
  },
  {
    "Time": "38:43",
    "Subtitle": "I DIDN'T MEAN TO CUT YOU OFF FROM THEM SO COMPLETELY.",
    "Human Translation": "내 부모님과 널 완전히 떼어 놓을 생각은 없었어"
  },
  {
    "Time": "38:45",
    "Subtitle": "IT JUST HAPPENED.",
    "Human Translation": "그냥 그렇게 된 거지"
  },
  {
    "Time": "38:47",
    "Subtitle": "NOT HAVING THEM IN MY LIFE JUST FELT SO RIGHT,",
    "Human Translation": "내 인생에 부모님이 없는 게 너무나 익숙했어"
  },
  {
    "Time": "38:50",
    "Subtitle": "I JUST NEVER THOUGHT...",
    "Human Translation": "난 정말 네가…"
  },
  {
    "Time": "38:53",
    "Subtitle": "I'M SORRY.",
    "Human Translation": "미안해"
  },
  {
    "Time": "38:55",
    "Subtitle": "I DID NOT PAY $500 FOR THIS DRESS",
    "Human Translation": "5백 달러나 준 드레스인데…"
  },
  {
    "Time": "38:58",
    "Subtitle": "SO YOU COULD RUN AROUND AND MESS IT UP. SIT AND BE STILL.",
    "Human Translation": "뛰어다니면서 망치면 안 돼 여기 가만히 앉아 있어"
  },
  {
    "Time": "39:02",
    "Subtitle": "CROSS YOUR LEGS. YOU'RE A LADY.",
    "Human Translation": "숙녀답게 다리를 꼬아야지"
  },
  {
    "Time": "39:08",
    "Subtitle": "GOD. I MUST HAVE HAD A MILLION DRESSES LIKE THAT WHEN I WAS A KID.",
    "Human Translation": "나도 어렸을 땐 저런 드레스가 백만 벌은 있었지"
  },
  {
    "Time": "39:13",
    "Subtitle": "IT DOESN'T REALLY SCREAM \"YOU.\"",
    "Human Translation": "- 엄마한텐 안 어울리는데 - 그래"
  },
  {
    "Time": "39:14",
    "Subtitle": "NO. I DID ALL THE SCREAMING.",
    "Human Translation": "- 엄마한텐 안 어울리는데 - 그래 나도 거기 못 어울렸지"
  },
  {
    "Time": "39:21",
    "Subtitle": "THANK YOU FOR NOT PUTTING ME IN A DRESS LIKE THAT.",
    "Human Translation": "내게 저런 드레스를 입히지 않아서 고마워"
  },
  {
    "Time": "39:25",
    "Subtitle": "YOU'RE WELCOME.",
    "Human Translation": "천만에"
  },
  {
    "Time": "39:27",
    "Subtitle": "OF COURSE, WEARING THOSE DRESSES -- NOT ALL BAD.",
    "Human Translation": "저런 드레스를 입는 게 완전히 나쁘진 않았어"
  },
  {
    "Time": "39:29",
    "Subtitle": "NO? NO. THEY REALLY FLY UP WHEN YOU TWIRL AROUND.",
    "Human Translation": "회전하면 치마가 올라가거든"
  },
  {
    "Time": "39:33",
    "Subtitle": "AND IF YOU'RE WEARING THAT RUFFLED UNDERWEAR -- BIG CROWD-PLEASER.",
    "Human Translation": "게다가 주름 속옷까지 입으면 관중의 박수가 터지지"
  },
  {
    "Time": "39:40",
    "Subtitle": "IF IT MAKES YOU FEEL BETTER, I THINK I GOT A FUNGUS FROM THE STEAM ROOM.",
    "Human Translation": "기분이 좋아질진 모르겠지만 사우나 때문에 피부가 간지러워"
  },
  {
    "Time": "39:44",
    "Subtitle": "IT DOES. THANK YOU.",
    "Human Translation": "좋아졌어, 고마워"
  },
  {
    "Time": "40:08",
    "Subtitle": "OH, GOOD. YOU'RE HERE.",
    "Human Translation": "너희들 왔구나"
  },
  {
    "Time": "40:10",
    "Subtitle": "HEY! HI, GRANDMA.",
    "Human Translation": "너희들 왔구나 안녕하세요, 할머니"
  },
  {
    "Time": "40:12",
    "Subtitle": "MY GOODNESS. WHAT'S THAT? WE BROUGHT DESSERT.",
    "Human Translation": "- 세상에, 그건 뭐니? - 디저트를 가져왔어요"
  },
  {
    "Time": "40:14",
    "Subtitle": "REALLY? HOW THOUGHTFUL. WHAT IS IT? BLUEBERRY SHORTCAKE.",
    "Human Translation": "- 고맙구나! 이게 뭔데? - 블루베리 쇼트케이크에요"
  },
  {
    "Time": "40:17",
    "Subtitle": "I'VE NEVER HEARD OF BLUEBERRY SHORTCAKE. IT'S A STARS HOLLOW SPECIALTY.",
    "Human Translation": "- 그런 건 처음 들어보는데 - 스타즈 할로우 특별식이에요"
  },
  {
    "Time": "40:21",
    "Subtitle": "WHY IS IT ALREADY CUT?",
    "Human Translation": "- 왜 케이크가 잘려 있지? - 남은 거예요"
  },
  {
    "Time": "40:22",
    "Subtitle": "IT'S LEFT OVER... FROM THE WEDDING...",
    "Human Translation": "- 왜 케이크가 잘려 있지? - 남은 거예요 결혼식에서요"
  },
  {
    "Time": "40:26",
    "Subtitle": "AT THE INN.",
    "Human Translation": "모텔에서"
  },
  {
    "Time": "40:27",
    "Subtitle": "YES, I KNOW WHERE THE WEDDING WAS.",
    "Human Translation": "결혼식은 나도 안다"
  },
  {
    "Time": "40:29",
    "Subtitle": "SORRY. YOU WERE JUST DOING THAT STARING THING.",
    "Human Translation": "죄송해요 또 그렇게 쳐다보시길래…"
  },
  {
    "Time": "40:31",
    "Subtitle": "YOU BROUGHT US USED DESSERT? IT'S NOT USED. IT'S LEFT OVER.",
    "Human Translation": "- 먹던 디저트를 가져왔어? - 먹던 게 아니라 남은 거예요"
  },
  {
    "Time": "40:34",
    "Subtitle": "HOW NICE. I'LL JUST PUT IT IN THE KITCHEN NEXT",
    "Human Translation": "정말 고맙구나 부엌에 있는 반만 남은 '고마워' 상자 옆에 둬야겠구나"
  },
  {
    "Time": "40:37",
    "Subtitle": "TO MY HALF-EMPTY BOX OF CHEER.",
    "Human Translation": "부엌에 있는 반만 남은 '고마워' 상자 옆에 둬야겠구나"
  },
  {
    "Time": "40:40",
    "Subtitle": "She's in a good mood tonight.",
    "Human Translation": "기분이 좋으신가 봐"
  },
  {
    "Time": "40:42",
    "Subtitle": "CAN I GET YOU A DRINK?",
    "Human Translation": "마실 거 줄까?"
  },
  {
    "Time": "40:44",
    "Subtitle": "UH, WHITE WINE WOULD BE GREAT. COKE.",
    "Human Translation": "- 백포도주로 할래요 - 콜라요"
  },
  {
    "Time": "40:47",
    "Subtitle": "SO, LORELAI, DID RORY TELL YOU ALL ABOUT THE WONDERFUL TIME SHE HAD AT THE CLUB?",
    "Human Translation": "로리가 클럽에서 재밌었다고 얘기했니?"
  },
  {
    "Time": "40:51",
    "Subtitle": "SHE SURE DID. YOUR FATHER WAS SIMPLY FLYING ALL WEEK.",
    "Human Translation": "- 물론이죠 - 아빠도 한 주 내내 즐거우셨어"
  },
  {
    "Time": "40:54",
    "Subtitle": "SHE REALLY CHARMED HIM. AW. WELL, IF ANYBODY COULD, IT WOULD BE HER.",
    "Human Translation": "- 로리에게 반하셨지 - 그건 로리 밖에 못하죠"
  },
  {
    "Time": "40:58",
    "Subtitle": "IN THIS AGE OF MTV AND 100 CHANNELS,",
    "Human Translation": "MTV 세대에다 TV 채널이 백 개도 넘는 세상에…"
  },
  {
    "Time": "41:01",
    "Subtitle": "WHO WOULD HAVE IMAGINED THAT A YOUNG GIRL COULD STILL GET A THRILL",
    "Human Translation": "할아버지와 조촐한 오후를 보내는 걸…"
  },
  {
    "Time": "41:04",
    "Subtitle": "SPENDING A SIMPLE AFTERNOON WITH HER GRANDFATHER?",
    "Human Translation": "좋아하는 여자아이가 있다고 누가 상상이나 하겠니?"
  },
  {
    "Time": "41:06",
    "Subtitle": "THAT WINE WOULD BE REAL GOOD RIGHT NOW.",
    "Human Translation": "와인을 빨리 주셨으면 좋겠네요"
  },
  {
    "Time": "41:08",
    "Subtitle": "I THINK WE SHOULD GET HER A MEMBERSHIP, DON'T YOU?",
    "Human Translation": "로리에게 클럽 회원증을 주는 것도 생각해 보자"
  },
  {
    "Time": "41:11",
    "Subtitle": "IF SHE WANTS -- SURE.",
    "Human Translation": "로리가 원한다면요"
  },
  {
    "Time": "41:13",
    "Subtitle": "TO HAVE A PLACE TO SOCIALIZE --",
    "Human Translation": "사교의 장을 가진다는 건"
  },
  {
    "Time": "41:15",
    "Subtitle": "THAT'S IMPORTANT TO A YOUNG GIRL.",
    "Human Translation": "젊은 아가씨에겐 아주 중요한 일이지"
  },
  {
    "Time": "41:17",
    "Subtitle": "NOW THAT THE CRACK DEN HAS CLOSED DOWN ON THE CORNER,",
    "Human Translation": "물론 동네 마약 소굴이 문을 닫아 버렸으니…"
  },
  {
    "Time": "41:20",
    "Subtitle": "ALL HER REALLY GOOD FRIENDS ARE GONE.",
    "Human Translation": "로리에겐 남은 친구가 없을 테니까 말이죠"
  },
  {
    "Time": "41:24",
    "Subtitle": "WHAT DO YOU THINK, MOM, SHOULD I PURSUE THE CAREER IN COMEDY?",
    "Human Translation": "어때요? 차라리 코미디 업계로 진출해 볼까요?"
  },
  {
    "Time": "41:28",
    "Subtitle": "IT'S JUST VERY INTERESTING THE WAY THINGS TURN OUT, ISN'T IT?",
    "Human Translation": "일이 참 재미있게 됐지?"
  },
  {
    "Time": "41:33",
    "Subtitle": "YOU'RE HERE. LORELAI...",
    "Human Translation": "왔구나"
  },
  {
    "Time": "41:35",
    "Subtitle": "DAD.",
    "Human Translation": "- 로렐라이 - 아빠"
  },
  {
    "Time": "41:37",
    "Subtitle": "RORY, I HAVE A SURPRISE. NOT ONLY DID I FIND THAT COPY",
    "Human Translation": "로리, 놀랄 일이 있다 멘켄의 '명문집' 을 찾은 데다가…"
  },
  {
    "Time": "41:40",
    "Subtitle": "OF MENCKEN'S \"CHRESTOMATHY\" WE DISCUSSED,",
    "Human Translation": "멘켄의 '명문집' 을 찾은 데다가…"
  },
  {
    "Time": "41:42",
    "Subtitle": "I ALSO FOUND A FIRST EDITION OF HIS MEMOIRS AS WELL.",
    "Human Translation": "회고록의 초판도 찾았지 뭐냐"
  },
  {
    "Time": "41:45",
    "Subtitle": "YOU'RE KIDDING.",
    "Human Translation": "- 농담이시죠? - 지금 내 서재에 있단다"
  },
  {
    "Time": "41:46",
    "Subtitle": "IT'S IN MY OFFICE IF YOU WANNA SEE THEM.",
    "Human Translation": "- 농담이시죠? - 지금 내 서재에 있단다 세상에, 빨리 보고 싶어요"
  },
  {
    "Time": "41:49",
    "Subtitle": "OH, MY GOD! I TOTALLY WOULD!",
    "Human Translation": "세상에, 빨리 보고 싶어요"
  },
  {
    "Time": "41:52",
    "Subtitle": "I'D LIKE TO TAKE A LOOK AT THOSE MYSELF.",
    "Human Translation": "저도 보고 싶네요"
  }
];

const EP4_DATA = [
  {
    "Time": "2s",
    "Subtitle": "NOBODY DEMANDED THAT YOU COME. ARE YOU KIDDING?",
    "Human Translation": "‎- 학용품 쇼핑이라, 완전히 파티네 ‎- 엄마한테 같이 가자고 안 했어"
  },
  {
    "Time": "4s",
    "Subtitle": "HOW OFTEN DO YOU GET TO DO THIS?",
    "Human Translation": "‎무슨 소리야? ‎이런 거 할 기회가 많은 줄 알아?"
  },
  {
    "Time": "6s",
    "Subtitle": "WHILE WE'RE GOING CRAZY, WE SHOULD GET TOILET PAPER AND A PLUNGER.",
    "Human Translation": "‎이왕 이렇게 된 김에 ‎화장실 휴지하고 변기 뚫는 것도 사자"
  },
  {
    "Time": "10s",
    "Subtitle": "I'LL DO THIS LATER. NO. I'M TEASING.",
    "Human Translation": "‎나중에 올래"
  },
  {
    "Time": "12s",
    "Subtitle": "GET THAT LIST OF YOURS. OKAY. AHEM.",
    "Human Translation": "‎- 장난친 거야, 쇼핑 목록 줘 봐 ‎- 좋아"
  },
  {
    "Time": "16s",
    "Subtitle": "I NEED LEGAL PADS. GOT IT.",
    "Human Translation": "‎- 연습장하고… ‎- 알았어"
  },
  {
    "Time": "18s",
    "Subtitle": "TONS OF PENS. RIGHT. SOME PENCILS, THREE HIGHLIGHTERS, AN ERASER,",
    "Human Translation": "‎연필 잔뜩, H2 연필 약간 ‎형광펜 세 개, 지우개…"
  },
  {
    "Time": "22s",
    "Subtitle": "A STAPLE REMOVER, AND A FOLDER.",
    "Human Translation": "‎스테이플 빼는 거 하고 파일이야"
  },
  {
    "Time": "25s",
    "Subtitle": "YOU NEED THREE HIGHLIGHTERS? THREE? YES.",
    "Human Translation": "‎- 형광펜 세 개? ‎- 응"
  },
  {
    "Time": "27s",
    "Subtitle": "THAT'S A VERY RANDOM NUMBER. THREE IS NOT A RANDOM NUMBER.",
    "Human Translation": "‎- 왜 하필이면 세 개야? ‎- 세 개가 뭐 어때서?"
  },
  {
    "Time": "30s",
    "Subtitle": "HOW'D YOU GET THE THREE?",
    "Human Translation": "‎하필이면 왜 세 개야?"
  },
  {
    "Time": "31s",
    "Subtitle": "ONE DRIES UP, ONE GETS LOST, I HAVE ONE LEFT.",
    "Human Translation": "‎하나씩 마르고 잃어버려도 ‎하나가 남잖아"
  },
  {
    "Time": "34s",
    "Subtitle": "YOU'VE REALLY THOUGHT THIS OUT.",
    "Human Translation": "‎- 고심한 흔적이 보이네 ‎- 맞아"
  },
  {
    "Time": "35s",
    "Subtitle": "WHAT CAME FIRST -- THE CHICKEN OR THE EGG?",
    "Human Translation": "‎닭이 먼절까? 계란이 먼절까?"
  },
  {
    "Time": "37s",
    "Subtitle": "CAN WE GET BACK TO THE LIST? ALRIGHT. OOH, HEY -- LEGAL PADS.",
    "Human Translation": "‎- 필요한 것부터 사면 안 될까? ‎- 그래, 맞아, 연습장"
  },
  {
    "Time": "41s",
    "Subtitle": "NO. THOSE ARE PURPLE. PURPLE IS FESTIVE. I CAN'T HAVE PURPLE.",
    "Human Translation": "‎- 보라색은 안 돼 ‎- 보라색은 화려하잖아"
  },
  {
    "Time": "45s",
    "Subtitle": "YES, YOU CAN. THEY'RE ON SALE.",
    "Human Translation": "‎- 보라색은 못 써 ‎- 왜? 싸게 팔잖아"
  },
  {
    "Time": "46s",
    "Subtitle": "I'M GOING TO A SERIOUS SCHOOL. I NEED SERIOUS PAPER.",
    "Human Translation": "‎분위기가 진지한 학교라 ‎진지한 연습장을 써야 해"
  },
  {
    "Time": "49s",
    "Subtitle": "PAPER IS PAPER. NOT AT CHILTON.",
    "Human Translation": "‎- 그래 봐야 종이잖아 ‎- 칠튼에선 아냐"
  },
  {
    "Time": "51s",
    "Subtitle": "ALRIGHT, FINE. HERE'S YOUR SERIOUS PAPER. THANK YOU.",
    "Human Translation": "‎- 좋아, 그럼 진지한 연습장으로 ‎- 고마워"
  },
  {
    "Time": "54s",
    "Subtitle": "OOH, AND HERE ARE YOUR SOMBER HIGHLIGHTERS,",
    "Human Translation": "‎어두컴컴한 형광펜하고 ‎감상적인 연필…"
  },
  {
    "Time": "57s",
    "Subtitle": "YOUR MAUDLIN PENCILS, YOUR MANIC-DEPRESSIVE PENS. MOM.",
    "Human Translation": "‎어두컴컴한 형광펜하고 ‎감상적인 연필… ‎- 조울증에 걸린 연필이 있네 ‎- 엄마"
  },
  {
    "Time": "1:01",
    "Subtitle": "THESE ERASERS ARE ON LITHIUM, SO THEY SEEM CHEERFUL,",
    "Human Translation": "‎지우개는 항우울제의 재료인 ‎리튬이 원료기 때문에…"
  },
  {
    "Time": "1:04",
    "Subtitle": "BUT WE CAUGHT THEM TRYING TO SHOVE THEMSELVES IN THE PENCIL SHARPENER.",
    "Human Translation": "‎명랑해 보일지는 몰라도 ‎연필깎이에 머리를 들이밀기도 해"
  },
  {
    "Time": "1:07",
    "Subtitle": "I'M GOING HOME. NO, WAIT.",
    "Human Translation": "‎- 집에 갈래 ‎- 기다려"
  },
  {
    "Time": "1:09",
    "Subtitle": "WE'RE GONNA STAGE AN INTERVENTION WITH THE NEON POST-ITS",
    "Human Translation": "‎이제 형광 포스트잇과 ‎상담을 하고…"
  },
  {
    "Time": "1:12",
    "Subtitle": "AND MAKE THEM GIVE UP THEIR WACKY, CRAZY WAYS.",
    "Human Translation": "‎녀석의 특이한 성격을 ‎고쳐 줘야지"
  },
  {
    "Time": "1:14",
    "Subtitle": "YOU'RE NEVER COMING SHOPPING WITH ME AGAIN.",
    "Human Translation": "‎다시는 엄마랑 쇼핑 안 해"
  },
  {
    "Time": "1:16",
    "Subtitle": "OH, HERE'S A CARD...",
    "Human Translation": "‎카드 정리 상자네 ‎이 녀석 성격은 정말…"
  },
  {
    "Time": "1:19",
    "Subtitle": "♪ IF YOU'RE OUT ON THE ROAD ♪",
    "Human Translation": "‎길모어 걸스"
  },
  {
    "Time": "1:28",
    "Subtitle": "♪ ALL YOU HAVE TO DO IS CALL MY NAME ♪ ♪ AND I'LL BE THERE ON THE NEXT TRAIN ♪",
    "Human Translation": "‎로렌 그래험"
  },
  {
    "Time": "1:36",
    "Subtitle": "♪ WHERE YOU LEAD, I WILL FOLLOW ♪",
    "Human Translation": "‎알렉시스 블레델"
  },
  {
    "Time": "1:45",
    "Subtitle": "♪ IF YOU NEED IF YOU NEED ♪",
    "Human Translation": "‎멜리사 맥카티"
  },
  {
    "Time": "1:47",
    "Subtitle": "♪ YOU NEED ME TO BE WITH YOU ♪",
    "Human Translation": "‎케이코 아제나 ‎야닉 트루스데일"
  },
  {
    "Time": "1:50",
    "Subtitle": "♪ I WILL FOLLOW ♪",
    "Human Translation": "‎야닉 트루스데일 ‎스캇 패터슨"
  },
  {
    "Time": "1:52",
    "Subtitle": "♪ OH, OH, OH ♪",
    "Human Translation": "‎스캇 패터슨"
  },
  {
    "Time": "1:54",
    "Subtitle": "♪ WHERE YOU LEAD, I WILL FOLLOW ♪",
    "Human Translation": "‎켈리 비숍 ‎에드워드 허먼"
  },
  {
    "Time": "2:48",
    "Subtitle": "Man: DECENT EFFORT BY MOST, GOOD EFFORT BY SOME,",
    "Human Translation": "‎‘대부분 괜찮은 성적이고 ‎잘한 학생들도 조금 있고’"
  },
  {
    "Time": "2:51",
    "Subtitle": "EXCEPTIONAL EFFORT BY TWO --",
    "Human Translation": "‎두 명은 탁월했다"
  },
  {
    "Time": "2:54",
    "Subtitle": "MISS GELLER... MISS GRANT...",
    "Human Translation": "‎겔러 양, 그랜트 양"
  },
  {
    "Time": "2:59",
    "Subtitle": "MR. GRAHAM...",
    "Human Translation": "‎그래험 양 ‎앨런 마이어슨"
  },
  {
    "Time": "3:03",
    "Subtitle": "MISS GILMORE, TAKE THESE HOME. LEARN FROM YOUR MISTAKES.",
    "Human Translation": "‎길모어 양, 집에 가서 ‎틀린 문제를 복습하도록 해"
  },
  {
    "Time": "3:08",
    "Subtitle": "LOOK AT THE LARGE, RED CIRCLES AROUND VARIOUS PARTS OF YOUR PAPER",
    "Human Translation": "‎시험지 곳곳에 표시되어 있는 ‎커다란 빨간색 동그라미를 보며…"
  },
  {
    "Time": "3:12",
    "Subtitle": "AS FRIENDLY REMINDERS THAT TO ERR IS HUMAN",
    "Human Translation": "‎인간은 실수의 동물이라는 걸 배우도록"
  },
  {
    "Time": "3:15",
    "Subtitle": "AND THAT HERE AT CHILTON WE TRY TO BEAT THAT HUMANITY OUT OF YOU.",
    "Human Translation": "‎그리고 그런 인간적인 면이 ‎사라지는 곳이 바로 칠튼이다"
  },
  {
    "Time": "3:19",
    "Subtitle": "OKAY. NEXT UP, THE TEST -- THE DREADED TEST.",
    "Human Translation": "‎좋아, 다음 시험을 말해 주겠다 ‎끔찍한 시험, 셰익스피어!"
  },
  {
    "Time": "3:24",
    "Subtitle": "SHAKESPEARE -- THE MAN WE'VE BEEN DRONING ON ABOUT",
    "Human Translation": "‎끔찍한 시험, 셰익스피어! ‎우리가 지난 3주간 지겹게 배운 ‎악몽의 주인공께서…"
  },
  {
    "Time": "3:26",
    "Subtitle": "FOR THE LAST THREE WEEKS --",
    "Human Translation": "‎우리가 지난 3주간 지겹게 배운 ‎악몽의 주인공께서…"
  },
  {
    "Time": "3:28",
    "Subtitle": "FINALLY COMES BACK TO HAUNT US ON FRIDAY.",
    "Human Translation": "‎금요일에 강림하신다"
  },
  {
    "Time": "3:31",
    "Subtitle": "THIS IS A BIG ONE, MY FRIENDS -- MULTIPLE CHOICE WITH AN ESSAY SECTION",
    "Human Translation": "‎이번 시험은 상당히 어렵다 ‎객관식과 주관식 모두 다 있다"
  },
  {
    "Time": "3:35",
    "Subtitle": "THAT WILL COUNT FOR 20% OF YOUR GRADE THIS SEMESTER.",
    "Human Translation": "‎이번 시험은 이번 학기 성적의 ‎20퍼센트에 해당한다"
  },
  {
    "Time": "3:38",
    "Subtitle": "DON'T BE FOOLED BY MY KIND FACE AND CHARMING PERSONALITY.",
    "Human Translation": "‎내가 자상하고 친절하다고 ‎방심하지 말기 바란다"
  },
  {
    "Time": "3:41",
    "Subtitle": "THIS TEST WILL BE HARD, AND THERE WILL BE NO MAKEUPS.",
    "Human Translation": "‎시험은 상당히 어려울 것이고 ‎보충 시험은 절대 없다"
  },
  {
    "Time": "3:45",
    "Subtitle": "REFER TO THE STUDY MATERIALS THAT I GAVE YOU AT THE BEGINNING OF THE MONTH",
    "Human Translation": "‎월초에 너희들에게 나눠 준 교재와…"
  },
  {
    "Time": "3:49",
    "Subtitle": "AND THOSE EXTENSIVE NOTES I KNOW YOU'VE BEEN TAKING.",
    "Human Translation": "‎지금까지 열심히 필기한 ‎노트를 참고하도록"
  },
  {
    "Time": "3:53",
    "Subtitle": "HARD PAPER. KILLER.",
    "Human Translation": "‎- 어렵겠네 ‎- 죽인다"
  },
  {
    "Time": "3:55",
    "Subtitle": "HOW'D YOU DO? \"A.\"",
    "Human Translation": "‎- 뭐 받았어? ‎- A"
  },
  {
    "Time": "3:56",
    "Subtitle": "ME TOO! SMALL WORLD.",
    "Human Translation": "‎나도! ‎- 세상 좁네 ‎- 그렇지?"
  },
  {
    "Time": "3:58",
    "Subtitle": "ISN'T IT? MADELINE, WHAT'D YOU GET?",
    "Human Translation": "‎- 세상 좁네 ‎- 그렇지? ‎- 마델린, 넌 뭐 받았어? ‎- B받은 거 알잖아"
  },
  {
    "Time": "4:00",
    "Subtitle": "YOU KNOW I GOT A \"B.\" A \"B's\" NOT BAD.",
    "Human Translation": "‎- 마델린, 넌 뭐 받았어? ‎- B받은 거 알잖아 ‎- B정도면 좋네, 충분하지 ‎- 그럼"
  },
  {
    "Time": "4:03",
    "Subtitle": "RESPECTABLE EVEN. I'D BE PROUD.",
    "Human Translation": "‎- B정도면 좋네, 충분하지 ‎- 그럼 ‎잘한 거야"
  },
  {
    "Time": "4:05",
    "Subtitle": "A \"D,\" HOWEVER, WOULD BE CAUSE FOR CONCERN.",
    "Human Translation": "‎그렇지만, D를 받았다면 ‎문제가 달라지지"
  },
  {
    "Time": "4:09",
    "Subtitle": "A CRY FOR HELP.",
    "Human Translation": "‎절망적이군"
  },
  {
    "Time": "4:10",
    "Subtitle": "A JOB APPLICATION AT McDONALD'S.",
    "Human Translation": "‎맥도날드에나 취직해야지, 뭐"
  },
  {
    "Time": "4:12",
    "Subtitle": "WOULD YOU LIKE FRIES WITH THAT?",
    "Human Translation": "‎‘감자튀김도 드릴까요?’"
  },
  {
    "Time": "4:14",
    "Subtitle": "HEY, YOU KNOW, NOT EVERYBODY CAN BE SMART.",
    "Human Translation": "‎하지만 누구나 다 똑똑한 건 아니니까"
  },
  {
    "Time": "4:16",
    "Subtitle": "AS MY MOTHER ALWAYS SAYS, SOMEBODY HAS TO ANSWER THE PHONES.",
    "Human Translation": "‎우리 엄마가 항상 말씀하시는 것처럼 ‎‘누군가가 전화는 받아야 하잖아’"
  },
  {
    "Time": "4:19",
    "Subtitle": "OKAY, I HAVE NO IDEA WHAT YOU TWO ARE TALKING ABOUT.",
    "Human Translation": "‎도대체 무슨 말을 하는 건지 ‎하나도 모르겠어"
  },
  {
    "Time": "4:22",
    "Subtitle": "NO, BUT RORY DOES.",
    "Human Translation": "‎로리는 무슨 말인지 알 거야"
  },
  {
    "Time": "4:29",
    "Subtitle": "HEY, MARY!",
    "Human Translation": "‎안녕, 메리!"
  },
  {
    "Time": "4:30",
    "Subtitle": "AND IT JUST KEEPS GETTING BETTER.",
    "Human Translation": "‎점점 더 능구렁이가 되는구나"
  },
  {
    "Time": "4:32",
    "Subtitle": "YOU LOOK SAD. I'M FINE.",
    "Human Translation": "‎- 기분이 안 좋은가 봐 ‎- 괜찮아"
  },
  {
    "Time": "4:34",
    "Subtitle": "BAD GRADE? I HAVE TO GO.",
    "Human Translation": "‎- 시험 망쳤어? ‎- 가 봐야 해"
  },
  {
    "Time": "4:36",
    "Subtitle": "MARY, I CAN'T FIGURE OUT WHY WE'RE NOT FRIENDS.",
    "Human Translation": "‎메리, 우린 무슨 이유로 ‎친해지지 못하는 걸까?"
  },
  {
    "Time": "4:38",
    "Subtitle": "I THINK IT'S BECAUSE I MAKE YOU NERVOUS.",
    "Human Translation": "‎메리, 우린 무슨 이유로 ‎친해지지 못하는 걸까? ‎내가 신경 쓰여서 그래?"
  },
  {
    "Time": "4:41",
    "Subtitle": "IT'S BECAUSE YOU CAN'T LEARN MY NAME. DO YOU HAVE A BOYFRIEND?",
    "Human Translation": "‎내 이름도 제대로 모르니까 그렇겠지 ‎- 남자 친구 있어? ‎- 신경 꺼"
  },
  {
    "Time": "4:44",
    "Subtitle": "NONE OF YOUR BUSINESS. IS THAT A NO?",
    "Human Translation": "‎- 남자 친구 있어? ‎- 신경 꺼 ‎- 없다는 말이겠지? ‎- 왜 나만 귀찮게 하는 거야?"
  },
  {
    "Time": "4:46",
    "Subtitle": "IS THERE NO ONE ELSE YOU CAN BOTHER? I THINK YOU LIKE ME.",
    "Human Translation": "‎- 없다는 말이겠지? ‎- 왜 나만 귀찮게 하는 거야? ‎너도 날 좋아하는데 ‎말로 하기 부끄러워서 그러는 거잖아"
  },
  {
    "Time": "4:50",
    "Subtitle": "OH, BOY! WHAT ARE YOU DOING FRIDAY NIGHT?",
    "Human Translation": "‎너도 날 좋아하는데 ‎말로 하기 부끄러워서 그러는 거잖아 ‎- 금요일 밤에 뭐 해? ‎- 바빠"
  },
  {
    "Time": "4:53",
    "Subtitle": "I'M BUSY. WHAT, YOU GOTTA BE BACK AT THE CONVENT BY 5:00?",
    "Human Translation": "‎- 금요일 밤에 뭐 해? ‎- 바빠 ‎수녀원에 5시까지는 ‎돌아가 봐야 하는 거야?"
  },
  {
    "Time": "4:56",
    "Subtitle": "PLEASE LEAVE ME ALONE.",
    "Human Translation": "‎제발 귀찮게 하지 말아 줘"
  },
  {
    "Time": "4:58",
    "Subtitle": "ALRIGHT. WELL... SINCE YOU SAID PLEASE.",
    "Human Translation": "‎‘제발’ 이라고 했으니 그만둘게"
  },
  {
    "Time": "5:01",
    "Subtitle": "LATER...MARY.",
    "Human Translation": "‎잘 가, 메리"
  },
  {
    "Time": "5:09",
    "Subtitle": "[ French accent ] AAAH! YOU IMBECILE! BACK OFF, CHEVALIER.",
    "Human Translation": "‎- 무슨 짓이오! ‎- 비켜요, 기사 양반"
  },
  {
    "Time": "5:13",
    "Subtitle": "YOU'RE STUPID, BLIND, AND CLUMSY.",
    "Human Translation": "‎- 멍청하고, 장님에, 서툴러 ‎- 적어도 프랑스인은 아니지"
  },
  {
    "Time": "5:15",
    "Subtitle": "AT LEAST I'M NOT FRENCH. WHAT'S GOIN' ON?",
    "Human Translation": "‎- 멍청하고, 장님에, 서툴러 ‎- 적어도 프랑스인은 아니지 ‎- 왜 그래요? ‎- 내 구두를 밟았어요"
  },
  {
    "Time": "5:17",
    "Subtitle": "SHE RAN OVER MY SHOE. HE GOT IN THE WAY.",
    "Human Translation": "‎- 왜 그래요? ‎- 내 구두를 밟았어요 ‎- 길을 막은 거죠 ‎- 날 겨냥했잖아요"
  },
  {
    "Time": "5:19",
    "Subtitle": "YOU AIMED FOR ME.",
    "Human Translation": "‎- 길을 막은 거죠 ‎- 날 겨냥했잖아요"
  },
  {
    "Time": "5:21",
    "Subtitle": "HOLD ON. SHE SCRATCHED MY SHOES.",
    "Human Translation": "‎- 잠깐 ‎- 구두가 긁혔어요"
  },
  {
    "Time": "5:23",
    "Subtitle": "WHAT A BABY. THESE ARE $300 ITALIAN LOAFERS.",
    "Human Translation": "‎- 애 같긴 ‎- 3백 달러짜리 이탈리아 구두예요"
  },
  {
    "Time": "5:27",
    "Subtitle": "I WONDER IF VERSACE MAKES A PACIFIER.",
    "Human Translation": "‎베르사체가 젖꼭지도 만드나 보죠?"
  },
  {
    "Time": "5:29",
    "Subtitle": "YOU'RE FIRED! EXCUSE ME?",
    "Human Translation": "‎- 해고야! ‎- 당신이 뭔데 해고해요?"
  },
  {
    "Time": "5:31",
    "Subtitle": "YOU CAN'T FIRE ME. THEN I DOCK YOUR PAY.",
    "Human Translation": "‎- 해고야! ‎- 당신이 뭔데 해고해요? ‎- 그럼 감봉이야, 없애도 될까요? ‎- 차 파티에서 연주부터 시키고요"
  },
  {
    "Time": "5:34",
    "Subtitle": "CAN I KILL HER? NOT BEFORE HIGH TEA.",
    "Human Translation": "‎- 그럼 감봉이야, 없애도 될까요? ‎- 차 파티에서 연주부터 시키고요"
  },
  {
    "Time": "5:36",
    "Subtitle": "FINE. THEN I WILL CURSE YOU CONSTANTLY AND IN SEVERAL LANGUAGES.",
    "Human Translation": "‎좋아, 그럼 다양한 언어로 ‎끊임없이 저주해 주지"
  },
  {
    "Time": "5:40",
    "Subtitle": "I'M GOIN' FOR THE OTHER FOOT. DON'T! DRELLA, TO YOUR CORNER -- NOW!",
    "Human Translation": "‎- 반대쪽 발도 밟아야겠군 ‎- 안 돼요! 드렐라, 자리로 가요"
  },
  {
    "Time": "5:45",
    "Subtitle": "I WIN. MICHEL, YOU'RE A GROWN MAN.",
    "Human Translation": "‎내가 이겼어요 ‎미셸, 다 큰 성인이라면 ‎데스크에 가서 어른답게 굴어요"
  },
  {
    "Time": "5:47",
    "Subtitle": "NOW GO TO YOUR DESK AND ACT LIKE ONE.",
    "Human Translation": "‎미셸, 다 큰 성인이라면 ‎데스크에 가서 어른답게 굴어요"
  },
  {
    "Time": "5:53",
    "Subtitle": "OH, MY GOD.",
    "Human Translation": "‎어머나"
  },
  {
    "Time": "5:59",
    "Subtitle": "SOOKIE! SOOKIE! OKAY, JUST A MINUTE!",
    "Human Translation": "‎수키! ‎- 알았어, 잠시만 ‎- 찾았어"
  },
  {
    "Time": "6:02",
    "Subtitle": "I'VE GOT IT. THE REVIEW?",
    "Human Translation": "‎- 알았어, 잠시만 ‎- 찾았어 ‎그 평론?"
  },
  {
    "Time": "6:05",
    "Subtitle": "IT'S HERE. OOH! WHERE IS IT?",
    "Human Translation": "‎- 여기 있어 ‎- 어디?"
  },
  {
    "Time": "6:07",
    "Subtitle": "I'M LOOKING. HURRY.",
    "Human Translation": "‎- 찾는 중이야 ‎- 빨리 찾아봐"
  },
  {
    "Time": "6:11",
    "Subtitle": "BEHOLD -- IN THEATERS NOW, THE THING THAT READS A LOT.",
    "Human Translation": "‎보라, 절찬리에 상영 중이니라 ‎‘독서광 악몽’"
  },
  {
    "Time": "6:16",
    "Subtitle": "CHOCOLATE? GLASS MEASURING CUP.",
    "Human Translation": "‎- 초콜렛? ‎- 계량컵에 있어"
  },
  {
    "Time": "6:18",
    "Subtitle": "LORELAI, LOOK, LOOK. I'M SORRY.",
    "Human Translation": "‎- 로렐라이, 어서 ‎- 미안"
  },
  {
    "Time": "6:21",
    "Subtitle": "JEEZ, WHO'S NAKED? UH, LUCIEN MILLS -- FOOD CRITIC.",
    "Human Translation": "‎- 누가 벗기라도 했어? ‎- 루시엔 밀즈, 식품 평론가"
  },
  {
    "Time": "6:24",
    "Subtitle": "YEAH? HOW'S HIS BUTT?",
    "Human Translation": "‎엉덩이 멋있어?"
  },
  {
    "Time": "6:26",
    "Subtitle": "HE WAS SUPPOSED TO REVIEW THE RESTAURANT -- OH! HERE IT IS.",
    "Human Translation": "‎그 사람은 식당 평론가야 ‎여기 있다"
  },
  {
    "Time": "6:29",
    "Subtitle": "IS IT -- IS IT GOOD? IS HE MEAN? SHOULD I CRY?",
    "Human Translation": "‎호평이야? 아니면 악평? ‎나, 울어야 돼?"
  },
  {
    "Time": "6:33",
    "Subtitle": "HERE WE GO.",
    "Human Translation": "‎읽어 줄게"
  },
  {
    "Time": "6:34",
    "Subtitle": "\"THE WORDS 'DIVINE,' 'DELECTABLE,' AND 'DELIRIOUS'",
    "Human Translation": "‎‘‘고귀한’, ‘유쾌한’, ‘열광한’ ‎이라는 단어는…’"
  },
  {
    "Time": "6:37",
    "Subtitle": "\"DON'T BEGIN TO DESCRIBE THE DELICIOUS EXPERIENCE",
    "Human Translation": "‎‘인디펜던스 모텔에서 먹은 ‎식사를 평하는 이 글의…’"
  },
  {
    "Time": "6:39",
    "Subtitle": "OF DINING AT THE INDEPENDENCE INN.\"",
    "Human Translation": "‎‘서두를 장식하는 말이 아니다’ ‎정말 멋진데"
  },
  {
    "Time": "6:41",
    "Subtitle": "I'M SMELLING A RAVE. REALLY?",
    "Human Translation": "‎‘서두를 장식하는 말이 아니다’ ‎정말 멋진데 ‎정말?"
  },
  {
    "Time": "6:44",
    "Subtitle": "\"ONLY CHEF SOOKIE ST. JAMES COULD MAKE A SIMPLE SALAD",
    "Human Translation": "‎‘주방장, 수키 제임스가 준비한 ‎온실 재배 토마토와…’"
  },
  {
    "Time": "6:46",
    "Subtitle": "\"OF HOTHOUSE TOMATOES AND ASSORTED FRESH HERBS \"SEEM LIKE A RELIGIOUS EXPERIENCE.",
    "Human Translation": "‎‘신선한 허브로 만든 샐러드는 ‎거의 종교적 체험에 가깝다’"
  },
  {
    "Time": "6:51",
    "Subtitle": "\"HER LOBSTER BISQUE IS WORTH EVERY SINFUL, CREAM-FILLED SIP.\"",
    "Human Translation": "‎‘크림을 넣어서 만든 바닷가재 ‎수프는 악마의 유혹과 같다’"
  },
  {
    "Time": "6:55",
    "Subtitle": "SEE, I DON'T USE THAT MUCH CREAM. I JUST USE A VERY CONCENTRATED LOBSTER STOCK,",
    "Human Translation": "‎크림을 많이 쓰지는 않았어 ‎바닷가재 농축액을 썼을 뿐이야"
  },
  {
    "Time": "6:58",
    "Subtitle": "AND IT REALLY MAKES IT --",
    "Human Translation": "‎- 그게 그렇게나… ‎- 그 사람은 지금 여기 없어"
  },
  {
    "Time": "7:00",
    "Subtitle": "SOOKIE, HE'S NOT HERE. OKAY, GO ON.",
    "Human Translation": "‎- 그게 그렇게나… ‎- 그 사람은 지금 여기 없어 ‎계속 읽어 봐"
  },
  {
    "Time": "7:02",
    "Subtitle": "\"THE ENTREES ARE AS HEAVENLY AS THE STARTERS.",
    "Human Translation": "‎‘앙트레와 전채 모두 훌륭했다’"
  },
  {
    "Time": "7:04",
    "Subtitle": "\"THOUGH THE MUCH-LAUDED RISOTTO WAS PERFECTLY FINE,",
    "Human Translation": "‎‘소문이 자자한 리조토도 ‎이름값을 했지만…’"
  },
  {
    "Time": "7:06",
    "Subtitle": "\"IT WAS THE SIMPLE HANDKERCHIEF PASTA \"WITH BROWN SAGE IN A BUTTER SAUCE",
    "Human Translation": "‎‘무엇보다 버터 소스를 곁들인 ‎갈색 세이지의 소박한 파스타가…’"
  },
  {
    "Time": "7:10",
    "Subtitle": "THAT SENT ME THROUGH THE ROOF.\"",
    "Human Translation": "‎‘진정 날 감동시켰다’"
  },
  {
    "Time": "7:12",
    "Subtitle": "THIS IS UNBELIEVABLE! I'M GONNA HAVE THIS FRAMED FOR THE DINING ROOM!",
    "Human Translation": "‎믿을 수가 없어! ‎액자에 넣어서 벽에 걸어 놓을래!"
  },
  {
    "Time": "7:15",
    "Subtitle": "OH, YEAH. THAT'D BE SWELL. CAN I SEE THAT AGAIN?",
    "Human Translation": "‎그거 정말 멋있겠네 ‎내가 읽어보면 안 될까?"
  },
  {
    "Time": "7:19",
    "Subtitle": "SO WE SHOULD CELEBRATE TONIGHT, HUH -- GIRLS ON THE TOWN?",
    "Human Translation": "‎오늘 저녁에 축하 파티를 해야겠어 ‎화끈하게 놀아볼까?"
  },
  {
    "Time": "7:22",
    "Subtitle": "I CAN'T. I HAVE TO STUDY.",
    "Human Translation": "‎난 공부 때문에 안 돼"
  },
  {
    "Time": "7:24",
    "Subtitle": "I SHOULD REALLY GET STARTED ON THIS SHOPPING LIST.",
    "Human Translation": "‎난 식재료 사러 장 보러 ‎가야 할 것 같아"
  },
  {
    "Time": "7:27",
    "Subtitle": "WHAT IS GOING ON HERE? WE ARE YOUNG AND FIERY WOMEN.",
    "Human Translation": "‎대체 다들 왜 그래? ‎우린 젊고 혈기왕성한 여인들이잖아"
  },
  {
    "Time": "7:31",
    "Subtitle": "STUDYING? SHOPPING LISTS?",
    "Human Translation": "‎공부? 식재료 장보기?"
  },
  {
    "Time": "7:33",
    "Subtitle": "WHERE'S \"TO HELL WITH IT ALL\"? WHERE'S \"THROWING CAUTION TO THE WIND\"?",
    "Human Translation": "‎‘갈 데까지 가 보자’, ‘마시고 죽자’ ‎정신은 다 어디 간 거야?"
  },
  {
    "Time": "7:38",
    "Subtitle": "WHERE -- OH, SHOOT -- THE LINEN DELIVERY.",
    "Human Translation": "‎도대체가… ‎이런, 식탁보 배달"
  },
  {
    "Time": "7:41",
    "Subtitle": "YOU GO, GIRL.",
    "Human Translation": "‎다녀와"
  },
  {
    "Time": "7:47",
    "Subtitle": "NEWS IS ON! ONE SEC.",
    "Human Translation": "‎- 뉴스 시간이다! ‎- 잠깐만"
  },
  {
    "Time": "7:51",
    "Subtitle": "FOR OUR TOP STORY TONIGHT, A GRISLY, HORRIBLE THING HAPPENED IN A SMALL TOWN",
    "Human Translation": "‎오늘 밤의 첫 뉴스로는 ‎지금까지 끔찍하고 소름끼치는 일이…"
  },
  {
    "Time": "7:56",
    "Subtitle": "WHERE NO GRISLY, HORRIBLE THINGS EVER HAPPEN. EVERYONE SHOCKED.",
    "Human Translation": "‎한 번도 일어난 적이 없는 곳에서 ‎일어난 끔찍한 사건, 모두 경악하다!"
  },
  {
    "Time": "7:59",
    "Subtitle": "HOUSE SLIDES DOWN HILL. LIPOSUCTION KILLS. STAY FAT.",
    "Human Translation": "‎언덕에 있던 집이 무너져 내렸어 ‎지방 흡입술로 인한 사망, 뚱보가 제일"
  },
  {
    "Time": "8:06",
    "Subtitle": "HEY, LET'S GET ICE CREAM! I'M BORED.",
    "Human Translation": "‎아이스크림 먹자, 나 심심해"
  },
  {
    "Time": "8:11",
    "Subtitle": "HELLO?",
    "Human Translation": "‎어이?"
  },
  {
    "Time": "8:13",
    "Subtitle": "MOM, I'M STUDYING. I'M TALKING ICE CREAM.",
    "Human Translation": "‎공부하는 중이야 ‎아이스크림 먹자고 ‎잠시 쉬면 안 될까?"
  },
  {
    "Time": "8:15",
    "Subtitle": "CAN'T YOU TAKE A BREAK? I CAN'T RIGHT NOW.",
    "Human Translation": "‎아이스크림 먹자고 ‎잠시 쉬면 안 될까? ‎- 지금은 쉴 수 없어 ‎- 좋아, 그럼 언제?"
  },
  {
    "Time": "8:18",
    "Subtitle": "OKAY. WHEN?",
    "Human Translation": "‎- 지금은 쉴 수 없어 ‎- 좋아, 그럼 언제?"
  },
  {
    "Time": "8:20",
    "Subtitle": "ARE YOU 4?",
    "Human Translation": "‎- 4살짜리 어린애야? ‎- 아니, 나 배고파"
  },
  {
    "Time": "8:21",
    "Subtitle": "NO! I'M HUNGRY! HAVE SOME MORE PIZZA.",
    "Human Translation": "‎- 4살짜리 어린애야? ‎- 아니, 나 배고파 ‎- 피자라도 더 먹어 ‎- 다 식었잖아"
  },
  {
    "Time": "8:25",
    "Subtitle": "IT'S COLD. HEAT IT UP.",
    "Human Translation": "‎- 피자라도 더 먹어 ‎- 다 식었잖아 ‎- 데워 먹어 ‎- 그 맛하곤 다르지"
  },
  {
    "Time": "8:27",
    "Subtitle": "IT'S NOT THE SAME.",
    "Human Translation": "‎- 데워 먹어 ‎- 그 맛하곤 다르지"
  },
  {
    "Time": "8:28",
    "Subtitle": "LORELAI, GO TO YOUR ROOM.",
    "Human Translation": "‎로렐라이, 네 방으로 가!"
  },
  {
    "Time": "8:29",
    "Subtitle": "WOW! SMART GIRLS ARE MEAN!",
    "Human Translation": "‎와, 똑똑한 애가 더 비열하구나"
  },
  {
    "Time": "8:32",
    "Subtitle": "IF YOU LET ME STUDY NOW,",
    "Human Translation": "‎지금 공부하게 내버려 두면 ‎이번 주말에 같이 놀아 줄게"
  },
  {
    "Time": "8:34",
    "Subtitle": "I'LL PLAY WITH YOU THIS WEEKEND. PROMISE.",
    "Human Translation": "‎지금 공부하게 내버려 두면 ‎이번 주말에 같이 놀아 줄게 ‎- 약속해? ‎- 그럼, 원하는 건 뭐든지 다"
  },
  {
    "Time": "8:35",
    "Subtitle": "YES. WE CAN DO ANYTHING YOU WANT.",
    "Human Translation": "‎- 약속해? ‎- 그럼, 원하는 건 뭐든지 다"
  },
  {
    "Time": "8:37",
    "Subtitle": "WILL YOU GO TO THE SHOE SALE WITH ME?",
    "Human Translation": "‎- 구두 사러 같이 갈 거지? ‎- 그럼"
  },
  {
    "Time": "8:40",
    "Subtitle": "WILL YOU LET ME TRY ON ANYTHING I WANT?",
    "Human Translation": "‎- 마음대로 신어 봐도 돼? ‎- 그럼"
  },
  {
    "Time": "8:42",
    "Subtitle": "WILL YOU HELP ME PUSH PEOPLE OUT OF THE WAY?",
    "Human Translation": "‎내 사이즈를 노리는 사람들까지 ‎다 막아 줄 거야?"
  },
  {
    "Time": "8:44",
    "Subtitle": "I'LL EVEN RUN INTERFERENCE FOR YOU.",
    "Human Translation": "‎전부 다 막아 줄게"
  },
  {
    "Time": "8:46",
    "Subtitle": "ALRIGHT. YOU'VE GOT A DEAL. GOOD.",
    "Human Translation": "‎- 좋아, 그럼 약속한 거다 ‎- 그래"
  },
  {
    "Time": "8:55",
    "Subtitle": "SO -- I'M SORRY -- WHERE DID WE LAND ON THE WHOLE ICE-CREAM ISSUE?",
    "Human Translation": "‎미안하지만, 아이스크림 얘긴데 ‎먹을 거야? 안 먹을 거야?"
  },
  {
    "Time": "9:03",
    "Subtitle": "WHAT?",
    "Human Translation": "‎왜?"
  },
  {
    "Time": "9:24",
    "Subtitle": "LANE?!",
    "Human Translation": "‎- 레인? ‎- 로리?"
  },
  {
    "Time": "9:28",
    "Subtitle": "RIGHT OR LEFT?! LEFT!",
    "Human Translation": "‎- 오른쪽 왼쪽? ‎- 왼쪽"
  },
  {
    "Time": "9:40",
    "Subtitle": "I THOUGHT YOU SAID LEFT!",
    "Human Translation": "‎왼쪽이라고 하지 않았어?"
  },
  {
    "Time": "9:41",
    "Subtitle": "SORRY -- MY LEFT, YOUR RIGHT! OKAY!",
    "Human Translation": "‎- 미안, 내 왼쪽이니까 오른쪽 ‎- 알았어"
  },
  {
    "Time": "9:50",
    "Subtitle": "MARCO...",
    "Human Translation": "‎마르코"
  },
  {
    "Time": "9:52",
    "Subtitle": "POLO!",
    "Human Translation": "‎폴로"
  },
  {
    "Time": "9:59",
    "Subtitle": "HEY, MARCO.",
    "Human Translation": "‎안녕, 마르코"
  },
  {
    "Time": "10:00",
    "Subtitle": "HEY, POLO. YOU'RE LATE.",
    "Human Translation": "‎안녕, 폴로 ‎- 늦었네 ‎- 미안"
  },
  {
    "Time": "10:03",
    "Subtitle": "SORRY.",
    "Human Translation": "‎- 늦었네 ‎- 미안"
  },
  {
    "Time": "10:06",
    "Subtitle": "WHAT IS THAT?",
    "Human Translation": "‎그건 뭐야?"
  },
  {
    "Time": "10:08",
    "Subtitle": "12 CALORIES.",
    "Human Translation": "‎12칼로리"
  },
  {
    "Time": "10:10",
    "Subtitle": "HERE. OH, MY GOD. BLESS YOU.",
    "Human Translation": "‎- 여기 ‎- 세상에, 정말 고마워"
  },
  {
    "Time": "10:16",
    "Subtitle": "MAN, WHAT'S THAT?",
    "Human Translation": "‎- 저런, 그건 뭐야? ‎- 내 노트"
  },
  {
    "Time": "10:18",
    "Subtitle": "MY NOTES. REALLY?",
    "Human Translation": "‎- 저런, 그건 뭐야? ‎- 내 노트 ‎정말?"
  },
  {
    "Time": "10:20",
    "Subtitle": "I DON'T THINK SHAKESPEARE KNEW HIMSELF THIS WELL.",
    "Human Translation": "‎셰익스피어도 본인에 대해 ‎이만큼은 몰랐을 거야"
  },
  {
    "Time": "10:23",
    "Subtitle": "OOH, I LIKE. HOW MUCH?",
    "Human Translation": "‎좋네요, 얼마죠?"
  },
  {
    "Time": "10:26",
    "Subtitle": "$500. IS THAT THE BEST YOU CAN DO?",
    "Human Translation": "‎- 500달러요 ‎- 그게 최저가인가요?"
  },
  {
    "Time": "10:28",
    "Subtitle": "$450. I'M NOT SO SURE.",
    "Human Translation": "‎- 450달러 ‎- 잘 모르겠네요"
  },
  {
    "Time": "10:30",
    "Subtitle": "$375 AND YOU TAKE IT RIGHT NOW.",
    "Human Translation": "‎375달러 내고 지금 사가세요"
  },
  {
    "Time": "10:33",
    "Subtitle": "SOLD. WE APPRECIATE YOUR BUSINESS.",
    "Human Translation": "‎- 좋아요 ‎- 구입해 주셔서 감사합니다"
  },
  {
    "Time": "10:35",
    "Subtitle": "MOVE.",
    "Human Translation": "‎비켜"
  },
  {
    "Time": "10:40",
    "Subtitle": "I REALLY MISS STARS HOLLOW HIGH.",
    "Human Translation": "‎스타즈 할로우 고등학교가 정말 그리워"
  },
  {
    "Time": "10:42",
    "Subtitle": "YOU'RE KIDDING, RIGHT? NO. CHILTON'S JUST --",
    "Human Translation": "‎- 농담이지? 정말이야? ‎- 그래, 칠튼은 정말…"
  },
  {
    "Time": "10:46",
    "Subtitle": "I DON'T KNOW -- HARD. WHAT DO YOU CARE?",
    "Human Translation": "‎모르겠어, 힘들어 ‎무슨 상관이야? 스타즈 할로우에선 ‎잘 나가는 학생이었잖아"
  },
  {
    "Time": "10:50",
    "Subtitle": "YOU WERE ALWAYS MISS EVERYTHING'S-SO-EASY-AT-SCHOOL.",
    "Human Translation": "‎무슨 상관이야? 스타즈 할로우에선 ‎잘 나가는 학생이었잖아"
  },
  {
    "Time": "10:53",
    "Subtitle": "THIS SHOULD BE A SNAP FOR YOU.",
    "Human Translation": "‎너한테는 식은 죽 먹기일 텐데"
  },
  {
    "Time": "10:56",
    "Subtitle": "NOPE. THIS IS SOLD. MOVE.",
    "Human Translation": "‎이것도 팔렸어, 비켜"
  },
  {
    "Time": "10:58",
    "Subtitle": "WHAT'S THAT? OH, THAT'S MINE.",
    "Human Translation": "‎- 그게 뭐냐? ‎- 제 거예요"
  },
  {
    "Time": "11:01",
    "Subtitle": "THAT IS CHOCOLATE-COVERED DEATH.",
    "Human Translation": "‎그건 초콜릿을 바른 죽음이야"
  },
  {
    "Time": "11:04",
    "Subtitle": "WITH A CREAMY CARAMEL SURPRISE.",
    "Human Translation": "‎캐러멜 크림도 들어 있어요"
  },
  {
    "Time": "11:10",
    "Subtitle": "UM, SO...THIS GUY ASKED ABOUT YOU TODAY.",
    "Human Translation": "‎- 그 애가 너에 대해 묻더라 ‎- 어떤 애?"
  },
  {
    "Time": "11:13",
    "Subtitle": "WHAT GUY? THE NEW KID --",
    "Human Translation": "‎- 그 애가 너에 대해 묻더라 ‎- 어떤 애? ‎키가 크고 완벽한 새로 온 애"
  },
  {
    "Time": "11:15",
    "Subtitle": "TALL, PERFECT. WHAT DID HE WANT TO KNOW?",
    "Human Translation": "‎키가 크고 완벽한 새로 온 애 ‎- 뭘 알고 싶다던? ‎- 너 어디 있냐고 묻더라"
  },
  {
    "Time": "11:18",
    "Subtitle": "WHERE YOU WERE. WHAT DID YOU SAY?",
    "Human Translation": "‎- 뭘 알고 싶다던? ‎- 너 어디 있냐고 묻더라 ‎그래서 뭐랬어?"
  },
  {
    "Time": "11:20",
    "Subtitle": "I TOLD HIM YOU WERE TOO SMART FOR US AND YOU HAD TO GO TO GENIUS SCHOOL.",
    "Human Translation": "‎우리와 다니기엔 너무 똑똑해서 ‎천재 학교로 갔다고 했어"
  },
  {
    "Time": "11:25",
    "Subtitle": "OH. HE REALLY LIKED THAT. I GUESS HE'S INTO BRAINY CHICKS.",
    "Human Translation": "‎정말 좋아하더라 ‎똑똑한 여자애를 좋아하나 봐"
  },
  {
    "Time": "11:29",
    "Subtitle": "WELL, I'LL KEEP MY EYES OPEN FOR ONE FOR HIM.",
    "Human Translation": "‎걔한테 어울리는 애나 찾아봐야겠네"
  },
  {
    "Time": "11:32",
    "Subtitle": "NO -- SOLD. MOVE. MOM.",
    "Human Translation": "‎- 그것도 팔린 거야, 비켜 ‎- 엄마"
  },
  {
    "Time": "11:35",
    "Subtitle": "WELL, WHERE DO YOU WANT US TO GO?! LIBRARY.",
    "Human Translation": "‎- 도대체 어디로 가라고요? ‎- 도서관"
  },
  {
    "Time": "11:38",
    "Subtitle": "I HATE SALES!",
    "Human Translation": "‎난 장사가 싫어"
  },
  {
    "Time": "11:45",
    "Subtitle": "NO BLACK SABBATH.",
    "Human Translation": "‎블랙 사바스는 안 돼요"
  },
  {
    "Time": "11:47",
    "Subtitle": "NO ONE IS LISTENING.",
    "Human Translation": "‎아무도 안 듣잖아요"
  },
  {
    "Time": "11:48",
    "Subtitle": "NO BLACK SABBATH, NO STEELY DAN, NO BOSTON, AND NO QUEEN.",
    "Human Translation": "‎블랙 사바스, 스틸리 댄 ‎보스턴, 퀸, 전부 안 돼요"
  },
  {
    "Time": "11:51",
    "Subtitle": "[ SIGHS ] WHAT HAPPENED TO MAKE YOU SO COLD?",
    "Human Translation": "‎왜 이리 내게 차갑게 대할까?"
  },
  {
    "Time": "11:54",
    "Subtitle": "YOU LIKE THAT MOZART. I AM THE ARTIE SHAW OF HARPISTS.",
    "Human Translation": "‎- 모짜르트 좋아하잖아 ‎- 내가 하프계의 이단아예요?"
  },
  {
    "Time": "12:00",
    "Subtitle": "SOOKIE, I NEED COFFEE TO GO. THERE'S FRESH OVER THERE.",
    "Human Translation": "‎- 수키, 커피 한 잔 줘 ‎- 거기 방금 내린 커피 있어"
  },
  {
    "Time": "12:03",
    "Subtitle": "OOH, GOOD.",
    "Human Translation": "‎잘됐네"
  },
  {
    "Time": "12:08",
    "Subtitle": "FRESH IN MY FIRST LIFETIME AS JOAN OF ARC.",
    "Human Translation": "‎내가 전생에 잔다르크였을 때 ‎내린 커피인가 보네"
  },
  {
    "Time": "12:11",
    "Subtitle": "OH, SORRY. I THOUGHT I MADE FRESH. HERE.",
    "Human Translation": "‎미안, 방금 내린 건 줄 알았어"
  },
  {
    "Time": "12:15",
    "Subtitle": "BLESS YOU. I'M SO EXHAUSTED. AND I HAVE TO DRIVE TO HARTFORD TONIGHT",
    "Human Translation": "‎나도 맥빠지긴 마찬가지야 ‎오늘밤 사친회 모임 때문에…"
  },
  {
    "Time": "12:19",
    "Subtitle": "TO GO TO A PARENT/TEACHER MEETING. SOUNDS GREAT.",
    "Human Translation": "‎- 하트포드에 가야 돼 ‎- 재미있겠네"
  },
  {
    "Time": "12:22",
    "Subtitle": "THIS SCHOOL IS SO DIFFERENT FROM STARS HOLLOW.",
    "Human Translation": "‎이번 학교는 스타즈 할로우하고는 ‎정말 달라"
  },
  {
    "Time": "12:24",
    "Subtitle": "THEY SEND HOME A THOUSAND PAGES OF UPDATES EVERY WEEK.",
    "Human Translation": "‎매주 보내는 가정 통신문이 ‎천 페이지가 넘는다니까"
  },
  {
    "Time": "12:27",
    "Subtitle": "IT'S A VERY INTENSE PLACE. UH-HUH!",
    "Human Translation": "‎경쟁이 정말 치열한 학교야"
  },
  {
    "Time": "12:30",
    "Subtitle": "LAST WEEK THERE WAS THIS HUGE DEBATE",
    "Human Translation": "‎지난주에는 격자무늬 ‎헤어 밴드가…"
  },
  {
    "Time": "12:32",
    "Subtitle": "OVER WHETHER PLAID SCRUNCHIES WERE ACCEPTABLE HEADWEAR.",
    "Human Translation": "‎학생들에게 어울리나를 놓고 ‎격론을 벌이더라니까"
  },
  {
    "Time": "12:35",
    "Subtitle": "PEOPLE TOOK SIDES. THINGS GOT UGLY. THE SCRUNCHIE MOTION FINALLY PASSED,",
    "Human Translation": "‎패가 갈려 격렬하게 싸우다 ‎결국 허용하기로 결정했는데…"
  },
  {
    "Time": "12:38",
    "Subtitle": "AND I LIKE TO THINK I WAS THE TIEBREAKER. THAT'S NICE.",
    "Human Translation": "‎- 나 때문에 성사된 것 같아 ‎- 잘됐네"
  },
  {
    "Time": "12:42",
    "Subtitle": "HEY, WHAT'S THE MATTER, SWEETIE?",
    "Human Translation": "‎왜 그래? 괜찮아?"
  },
  {
    "Time": "12:44",
    "Subtitle": "HE SAID IT WAS FINE. WHO SAID IT WAS FINE?",
    "Human Translation": "‎- 좋다잖아 ‎- 좋다니, 누가?"
  },
  {
    "Time": "12:47",
    "Subtitle": "LUCIEN MILLS. THE RESTAURANT CRITIC?",
    "Human Translation": "‎- 루시엔 밀즈 ‎- 그 식당 평론가?"
  },
  {
    "Time": "12:49",
    "Subtitle": "HE SAID MY RISOTTO WAS FINE.",
    "Human Translation": "‎- 내 리조토가 좋다고 했잖아 ‎- 그럼 안 좋아?"
  },
  {
    "Time": "12:51",
    "Subtitle": "ISN'T IT? NO, IT'S NOT FINE.",
    "Human Translation": "‎- 내 리조토가 좋다고 했잖아 ‎- 그럼 안 좋아? ‎좋으면 안 돼"
  },
  {
    "Time": "12:52",
    "Subtitle": "\"FINE\" IS A WORD YOU USE WHEN SOMEONE STOPS YOU ON THE STREET",
    "Human Translation": "‎좋으면 안 돼 ‎좋다는 말은 상대하기 싫은 사람을 ‎길에서 만났는데…"
  },
  {
    "Time": "12:56",
    "Subtitle": "THAT YOU SORT OF KNOW BUT YOU DON'T WANT TO TALK TO.",
    "Human Translation": "‎좋다는 말은 상대하기 싫은 사람을 ‎길에서 만났는데… ‎긴 대화를 피하고 싶어질 때…"
  },
  {
    "Time": "12:59",
    "Subtitle": "THEY ASK YOU HOW YOU ARE, AND YOU SAY, \"FINE.\"",
    "Human Translation": "‎가볍게 던지는 말이야 ‎말하기도 싫으니 ‎말 붙이지 말라고 하는 말이야"
  },
  {
    "Time": "13:01",
    "Subtitle": "THAT'S ENOUGH SO THEY DON'T HAVE TO KEEP TALKING TO YOU.",
    "Human Translation": "‎말하기도 싫으니 ‎말 붙이지 말라고 하는 말이야"
  },
  {
    "Time": "13:04",
    "Subtitle": "THEN THEY CAN FEEL GOOD BECAUSE THEY'VE BEEN CONSIDERATE ENOUGH TO ASK,",
    "Human Translation": "‎친절하게 안부라도 물었으니까 ‎자기들은 떳떳할 수 있고…"
  },
  {
    "Time": "13:08",
    "Subtitle": "AND THEN IF SOMETHING ACTUALLY IS WRONG,",
    "Human Translation": "‎혹시라도 안 좋은 일이 있었다면…"
  },
  {
    "Time": "13:10",
    "Subtitle": "THEY'LL ACTUALLY SIT DOWN AND LISTEN, EVEN THOUGH THEY DON'T WANT TO.",
    "Human Translation": "‎싫어도 앉아서 차분히 ‎이야기나 들어줄 수 있잖아"
  },
  {
    "Time": "13:14",
    "Subtitle": "I DON'T THINK HE MEANT \"FINE\" AS A SLAM OR AS A MONOLOGUE.",
    "Human Translation": "‎비난이나 빈말로 ‎좋다고 하진 않았을 거야"
  },
  {
    "Time": "13:18",
    "Subtitle": "HE COULDN'T HAVE MEANT ANY OTHER WAY.",
    "Human Translation": "‎다른 뜻은 있을 수도 없어"
  },
  {
    "Time": "13:20",
    "Subtitle": "I HATE TO SEE YOU GET SO UPSET OVER ONE LITTLE REVIEW.",
    "Human Translation": "‎그까짓 기사 하나 가지고 ‎흥분할 필요는 없잖아"
  },
  {
    "Time": "13:23",
    "Subtitle": "THIS IS PRIDE, LORELAI. I MEAN, YOU KNOW ABOUT THIS RISOTTO.",
    "Human Translation": "‎로렐라이, 이건 내 자존심이야 ‎내 리조토를 잘 알잖아"
  },
  {
    "Time": "13:27",
    "Subtitle": "ON MY MOTHER'S DEATHBED --",
    "Human Translation": "‎- 어머니께서 돌아가실 때… ‎- 리조토를 만들어 드렸더니…"
  },
  {
    "Time": "13:29",
    "Subtitle": "YOU MADE THE RISOTTO, AND SHE LIVED THREE MORE YEARS.",
    "Human Translation": "‎- 어머니께서 돌아가실 때… ‎- 리조토를 만들어 드렸더니… ‎- 3년이나 더 살다 가셨지 ‎- 오늘내일하는 상황이었어"
  },
  {
    "Time": "13:32",
    "Subtitle": "THE DOCTOR SAID SHE WOULDN'T MAKE IT THROUGH THE NIGHT.",
    "Human Translation": "‎의사는 그날 밤을 넘기지 ‎못할 거라고 했다고"
  },
  {
    "Time": "13:35",
    "Subtitle": "AND SHE LIVED BECAUSE OF THE RISOTTO -- THE MAGIC RISOTTO.",
    "Human Translation": "‎그 리조토, 마법의 리조토 때문에 ‎기력을 회복하신 거지"
  },
  {
    "Time": "13:39",
    "Subtitle": "AND THIS GUY HAD THE NERVE TO SAY IT WAS FINE.",
    "Human Translation": "‎그런데 이 사람은 감히 ‎좋다고만 썼잖아"
  },
  {
    "Time": "13:42",
    "Subtitle": "I DON'T THINK HE KNEW THE STORY.",
    "Human Translation": "‎깊은 사연을 몰라서 그랬겠지"
  },
  {
    "Time": "13:45",
    "Subtitle": "OKAY. NOW, BEFORE YOU GET ALL GOOFY ON ME,",
    "Human Translation": "‎화내기 전에 먼저 들어요 ‎돌버섯은 없어요"
  },
  {
    "Time": "13:48",
    "Subtitle": "I DON'T HAVE YOUR PORCINIS. I FORGOT THEM.",
    "Human Translation": "‎화내기 전에 먼저 들어요 ‎돌버섯은 없어요 ‎깜빡했습니다"
  },
  {
    "Time": "13:51",
    "Subtitle": "I DON'T HAVE ANY OTHER EXCUSE OTHER THAN PLAIN, OLD, STUPID HUMAN ERROR.",
    "Human Translation": "‎인간은 망각의 동물이라는 ‎뻔한 핑계 말고는 할 말이 없네요"
  },
  {
    "Time": "13:54",
    "Subtitle": "AND I HAVE THE MORELS, WHICH I KNOW YOU DON'T WANT, SO COME ON -- LET ME HAVE IT.",
    "Human Translation": "‎대신 곰보버섯을 가져왔으니 ‎싫다면 마음껏 호통치세요"
  },
  {
    "Time": "13:59",
    "Subtitle": "MORELS ARE FINE.",
    "Human Translation": "‎곰보버섯도 좋아요"
  },
  {
    "Time": "14:02",
    "Subtitle": "DID ANYONE ELSE FEEL THE SHIFT IN THE SPACE-TIME CONTINUUM?",
    "Human Translation": "‎지금 천지가 뒤바뀐 걸 ‎나만 느끼는 건가요?"
  },
  {
    "Time": "14:05",
    "Subtitle": "A REVIEWER DIDN'T LIKE THE RISOTTO. THE MAGIC RISOTTO? YOU'RE KIDDING.",
    "Human Translation": "‎- 평론가는 리조토가 별로래요 ‎- 마법의 리조토가? 설마요"
  },
  {
    "Time": "14:10",
    "Subtitle": "I gotta go. TRY AND CHEER HER UP, WOULD YA?",
    "Human Translation": "‎난 가 봐야 하니 ‎당신이 좀 다독여 주세요"
  },
  {
    "Time": "14:13",
    "Subtitle": "UH, SURE. OKAY.",
    "Human Translation": "‎걱정 마세요"
  },
  {
    "Time": "14:17",
    "Subtitle": "SWEETIE, PLEASE DON'T WORRY ABOUT IT. EVERYONE KNOWS YOU'RE THE BEST.",
    "Human Translation": "‎다들 수키가 만든 리조토가 ‎최고라고 생각하니 걱정 마"
  },
  {
    "Time": "14:24",
    "Subtitle": "SO...",
    "Human Translation": "‎그래…"
  },
  {
    "Time": "14:27",
    "Subtitle": "I HEAR THE HUCKLEBERRY CROP'S GONNA TOTALLY SUCK THIS YEAR!",
    "Human Translation": "‎이번 월귤나무 농사는 ‎완전히 흉작이라면서요?"
  },
  {
    "Time": "14:33",
    "Subtitle": "WE ARE GONNA BE FOCUSING ON ELIZABETHAN LITERATURE --",
    "Human Translation": "‎엘리자베스 여왕 시대의 ‎문학에 집중할 겁니다"
  },
  {
    "Time": "14:36",
    "Subtitle": "SHAKESPEARE, MARLOWE, BACON, BEN JONSON, JOHN WEBSTER --",
    "Human Translation": "‎셰익스피어, 말로우, 베이컨 ‎벤 존슨, 존 웹스터죠"
  },
  {
    "Time": "14:41",
    "Subtitle": "IS MARLOWE REALLY THAT SIGNIFICANT?",
    "Human Translation": "‎말로우가 그만큼 중요한가요?"
  },
  {
    "Time": "14:43",
    "Subtitle": "WE WANT TO GIVE AS COMPLETE AN OVERVIEW AS POSSIBLE.",
    "Human Translation": "‎최대한 상세한 범위를 ‎가르치려고 노력 중입니다"
  },
  {
    "Time": "14:46",
    "Subtitle": "YES, BUT WILL HE BE INCLUDED ON THE ADVANCED-PLACEMENT TEST?",
    "Human Translation": "‎그럼 말로우가 상급 배치 고사에 ‎출제된다는 말씀이세요?"
  },
  {
    "Time": "14:49",
    "Subtitle": "WE CAN'T KNOW EXACTLY WHAT WILL BE ON THE TEST,",
    "Human Translation": "‎시험에 누가 출제될지 ‎정확히 알 수는 없지만…"
  },
  {
    "Time": "14:52",
    "Subtitle": "BUT IT WILL BE IMPORTANT WHEN YOUR KIDS HIT UNIVERSITIES.",
    "Human Translation": "‎아이들이 대학교에 진학하면 ‎큰 도움이 될 영역입니다"
  },
  {
    "Time": "14:55",
    "Subtitle": "BUT TO GET THERE, THEY NEED TO PASS THE A.P. TEST.",
    "Human Translation": "‎하지만 대학에 가려면 ‎시험에 통과해야 하잖소"
  },
  {
    "Time": "14:58",
    "Subtitle": "IT COULD ALL BE ON THE TEST.",
    "Human Translation": "‎그럼요, 모두 중요하기 때문에 ‎시험에 출제될 수 있습니다"
  },
  {
    "Time": "15:01",
    "Subtitle": "HOW DO WE FIND OUT?",
    "Human Translation": "‎어떻게 하면 알 수 있죠?"
  },
  {
    "Time": "15:02",
    "Subtitle": "YOU COULD BRIBE SOMEBODY ON THE A.P. COMMITTEE.",
    "Human Translation": "‎출제 위원들에게 뇌물을 ‎주면 알 수 있을 겁니다"
  },
  {
    "Time": "15:06",
    "Subtitle": "I WAS KIDDING. I'M JUST KIDDING.",
    "Human Translation": "‎농담이에요, 농담입니다"
  },
  {
    "Time": "15:08",
    "Subtitle": "I'M SO SORRY. I HAD A TERRIBLE POTHOLE INCIDENT.",
    "Human Translation": "‎도로에 구멍이 나 있어서 늦었어요 ‎정말 죄송합니다"
  },
  {
    "Time": "15:13",
    "Subtitle": "YOU DON'T CARE. PLEASE, GO ON.",
    "Human Translation": "‎중요한 일은 아니죠 ‎계속하세요"
  },
  {
    "Time": "15:18",
    "Subtitle": "WHAT IN THE WORLD?",
    "Human Translation": "‎어머, 세상에!"
  },
  {
    "Time": "15:22",
    "Subtitle": "YOU OKAY? UH-HUH.",
    "Human Translation": "‎괜찮으세요?"
  },
  {
    "Time": "15:23",
    "Subtitle": "I'LL JUST SIT NOW. I DON'T THINK WE'VE MET.",
    "Human Translation": "‎- 가서 앉을게요 ‎- 초면인 것 같습니다"
  },
  {
    "Time": "15:27",
    "Subtitle": "OH. I'M LORELAI GILMORE -- RORY'S MOM.",
    "Human Translation": "‎로렐라이 길모어예요 ‎로리의 엄마죠"
  },
  {
    "Time": "15:30",
    "Subtitle": "GLAD YOU COULD JOIN US. RORY'S ONE OF OUR NEW STUDENTS.",
    "Human Translation": "‎만나서 정말 반갑습니다 ‎로리는 새로 온 전학생입니다"
  },
  {
    "Time": "15:33",
    "Subtitle": "HOW NICE. NOW, THE TEST --",
    "Human Translation": "‎반가워요, 그럼 시험 말인데요"
  },
  {
    "Time": "15:36",
    "Subtitle": "RIGHT. WELL, WE ARE PREPARING THEM AS BEST WE CAN.",
    "Human Translation": "‎저희도 최선을 다해 ‎학생들을 가르치고 있습니다"
  },
  {
    "Time": "15:39",
    "Subtitle": "Man: I'VE HIRED A TUTOR FOR BETHANY.",
    "Human Translation": "‎베타니에게 가정 교사를 붙였어요"
  },
  {
    "Time": "15:41",
    "Subtitle": "ALWAYS A VALID OPTION.",
    "Human Translation": "‎효과적인 방법이죠"
  },
  {
    "Time": "15:42",
    "Subtitle": "JESUS, MARY, JOSEPH, AND THE CAMEL.",
    "Human Translation": "‎세상에, 커피가 무슨!"
  },
  {
    "Time": "15:47",
    "Subtitle": "That was really bad coffee.",
    "Human Translation": "‎커피 맛이 별로예요"
  },
  {
    "Time": "15:51",
    "Subtitle": "SO [CLEARS THROAT] THIS A.P. TEST -- WHAT ARE WE GONNA DO ABOUT IT, HUH?",
    "Human Translation": "‎시험 때문에 말인데요 ‎어떻게 해야 하는 거죠?"
  },
  {
    "Time": "15:55",
    "Subtitle": "WELL, THE NEXT TEST IS SCHEDULED FOR NEXT MONTH --",
    "Human Translation": "‎내달에 다음 시험이 있습니다"
  },
  {
    "Time": "15:57",
    "Subtitle": "UM, THE 25th, SATURDAY, AT 7:00 A.M.",
    "Human Translation": "‎25일, 토요일 오전 7시죠"
  },
  {
    "Time": "16:03",
    "Subtitle": "MS. GILMORE? UH, WHERE IS THE TEST?",
    "Human Translation": "‎- 길모어 부인? ‎- 시험은 어디서 치나요?"
  },
  {
    "Time": "16:06",
    "Subtitle": "IT WILL BE GIVEN HERE.",
    "Human Translation": "‎- 여기서 치르게 됩니다 ‎- 여기요?"
  },
  {
    "Time": "16:08",
    "Subtitle": "HERE? RIGHT.",
    "Human Translation": "‎- 여기서 치르게 됩니다 ‎- 여기요? ‎- 네 ‎- 그렇군요"
  },
  {
    "Time": "16:10",
    "Subtitle": "GREAT.",
    "Human Translation": "‎- 네 ‎- 그렇군요"
  },
  {
    "Time": "16:11",
    "Subtitle": "GREAT. ANY OTHER QUESTIONS? UM, YEAH.",
    "Human Translation": "‎- 다른 질문 있으십니까? ‎- 네"
  },
  {
    "Time": "16:15",
    "Subtitle": "UM, CAN PARENTS COME?",
    "Human Translation": "‎부모도 참관할 수 있나요?"
  },
  {
    "Time": "16:19",
    "Subtitle": "WHAT?!",
    "Human Translation": "‎뭐라고요?"
  },
  {
    "Time": "16:20",
    "Subtitle": "YEAH. IT'S A BIG, EXCITING TEST.",
    "Human Translation": "‎기대되는 중요한 시험이니 ‎부모도 참관하면…"
  },
  {
    "Time": "16:22",
    "Subtitle": "I JUST THOUGHT -- SORRY. IS THAT STUPID?",
    "Human Translation": "‎기대되는 중요한 시험이니 ‎부모도 참관하면… ‎- 바보 같은 질문이었나요? ‎- 아뇨, 전혀 아닙니다"
  },
  {
    "Time": "16:24",
    "Subtitle": "NO, IT'S NOT STUPID.",
    "Human Translation": "‎- 바보 같은 질문이었나요? ‎- 아뇨, 전혀 아닙니다"
  },
  {
    "Time": "16:26",
    "Subtitle": "I JUST THOUGHT I'D LIKE TO SEE THE EXCITEMENT.",
    "Human Translation": "‎그냥 저도 그 짜릿함을 ‎함께할 수 없을까 해서요"
  },
  {
    "Time": "16:28",
    "Subtitle": "IT'S A TEST. I KNOW.",
    "Human Translation": "‎- 이건 시험입니다 ‎- 알아요"
  },
  {
    "Time": "16:30",
    "Subtitle": "WHAT'S EXCITING ABOUT A TEST?",
    "Human Translation": "‎시험이 뭐가 짜릿하죠?"
  },
  {
    "Time": "16:31",
    "Subtitle": "DO YOU PLAY GOLF? YES, I DO.",
    "Human Translation": "‎- 골프 좋아하세요? ‎- 네"
  },
  {
    "Time": "16:33",
    "Subtitle": "YOU EXPLAIN YOURS, I'LL EXPLAIN MINE. BACK TO THE MEETING.",
    "Human Translation": "‎- 그게 왜 재밌는지 말해주면, 말하죠 ‎- 다시 본론으로 돌아갈까요?"
  },
  {
    "Time": "16:37",
    "Subtitle": "That one voted for the scrunchies.",
    "Human Translation": "‎저 여자가 헤어 밴드에 ‎지지표를 보냈어"
  },
  {
    "Time": "16:39",
    "Subtitle": "Must be a scholarship student.",
    "Human Translation": "‎근로 장학생인가 보지?"
  },
  {
    "Time": "16:41",
    "Subtitle": "UM, EXCUSE ME.",
    "Human Translation": "‎뭐라고 하셨어요?"
  },
  {
    "Time": "16:43",
    "Subtitle": "I THINK THIS WOULD BE A GOOD TIME FOR A BREAK.",
    "Human Translation": "‎잠시 쉬는 시간을 ‎갖도록 하겠습니다"
  },
  {
    "Time": "16:46",
    "Subtitle": "THERE'S COFFEE IN THE BACK.",
    "Human Translation": "‎뒤에 커피가 준비되어 있습니다"
  },
  {
    "Time": "16:59",
    "Subtitle": "WHAT WERE YOU GONNA DO -- HIT HER?",
    "Human Translation": "‎어쩌겠어요? 때려 줄 건가요?"
  },
  {
    "Time": "17:01",
    "Subtitle": "NO. I JUST -- I HAD SOME GOOD VERBAL COMEBACKS READY.",
    "Human Translation": "‎아뇨, 화끈한 반론이 ‎머릿속에 떠올라서요"
  },
  {
    "Time": "17:07",
    "Subtitle": "IT -- IT JUST KEEPS GETTING WORSE. NOT DRINKING IT IS ALWAYS AN OPTION.",
    "Human Translation": "‎- 정말 맛이 없네요 ‎- 마시지 않는 것도 좋은 방법이죠"
  },
  {
    "Time": "17:12",
    "Subtitle": "NOT IN MY WORLD.",
    "Human Translation": "‎전 그렇게 못해요"
  },
  {
    "Time": "17:13",
    "Subtitle": "I'M MAX MEDINA. NICE TO MEET YOU.",
    "Human Translation": "‎- 전 맥스 메디나입니다 ‎- 만나서 반가워요"
  },
  {
    "Time": "17:17",
    "Subtitle": "I APOLOGIZE FOR THE BEHAVIOR OF SOME OF OUR GUESTS.",
    "Human Translation": "‎다른 학부형들의 무례를 ‎용서해 주시기 바랍니다"
  },
  {
    "Time": "17:19",
    "Subtitle": "IT'S A TENSE TIME FOR SOME PEOPLE.",
    "Human Translation": "‎예민해지는 분들도 계시죠"
  },
  {
    "Time": "17:21",
    "Subtitle": "THE S.A.T. SEASON? THE WAKING HOURS.",
    "Human Translation": "‎- 입시 때문이겠죠? ‎- 예민해지는 시기죠"
  },
  {
    "Time": "17:25",
    "Subtitle": "ARE YOU THIS NICE TO MY KID?",
    "Human Translation": "‎- 로리에게도 이렇게 잘해 주나요? ‎- 별거 아닙니다"
  },
  {
    "Time": "17:27",
    "Subtitle": "AH, IT'S EASY. RORY'S A SWEET GIRL.",
    "Human Translation": "‎- 로리에게도 이렇게 잘해 주나요? ‎- 별거 아닙니다 ‎- 로이는 착한 아이니까요 ‎- 네, 착하죠"
  },
  {
    "Time": "17:30",
    "Subtitle": "YEAH, SHE IS.",
    "Human Translation": "‎- 로이는 착한 아이니까요 ‎- 네, 착하죠"
  },
  {
    "Time": "17:34",
    "Subtitle": "HOW IS SHE LIKING CHILTON?",
    "Human Translation": "‎칠튼이 마음에 든답니까?"
  },
  {
    "Time": "17:37",
    "Subtitle": "OH, SHE LOVES IT. REALLY?",
    "Human Translation": "‎- 좋아해요 ‎- 그래요?"
  },
  {
    "Time": "17:40",
    "Subtitle": "YEAH. IT'S AN ADJUSTMENT, BUT SHE'S ALWAYS WANTED TO GO TO HARVARD,",
    "Human Translation": "‎물론 적응할 시간이 필요하겠지만 ‎항상 하버드에 가고 싶어했거든요"
  },
  {
    "Time": "17:44",
    "Subtitle": "AND THIS IS HOW SHE'LL GET THERE. HARVARD? YEAH.",
    "Human Translation": "‎- 그러려고 전학 온 겁니다 ‎- 하버드?"
  },
  {
    "Time": "17:47",
    "Subtitle": "EVER SINCE SHE COULD CRAWL, I've really wanted her to go there.",
    "Human Translation": "‎그 애가 기어다닐 때부터 ‎하버드에 보내고 싶었어요"
  },
  {
    "Time": "17:51",
    "Subtitle": "IT'S A GREAT SCHOOL.",
    "Human Translation": "‎좋은 학교죠"
  },
  {
    "Time": "17:52",
    "Subtitle": "I BOUGHT HER A HARVARD SWEAT SHIRT WHEN SHE WAS 4,",
    "Human Translation": "‎애가 4살 때 하버드 스웨터를 ‎사주기까지 했는걸요"
  },
  {
    "Time": "17:55",
    "Subtitle": "WHICH WAS WAY TOO BIG FOR HER, SO SHE USED IT AS A BLANKET",
    "Human Translation": "‎물론 애한테는 너무 컸죠 ‎그래서 한동안 담요로 썼고…"
  },
  {
    "Time": "17:59",
    "Subtitle": "AND THEN AS A DIAPER ON THIS SHOPPING TRIP,",
    "Human Translation": "‎나중에는 쇼핑 나갈 때를 대비해 ‎대용 기저귀로 쓰기도 했어요"
  },
  {
    "Time": "18:01",
    "Subtitle": "NOW I'VE TOLD YOU A STORY THAT WOULD SO MORTIFY HER,",
    "Human Translation": "‎이 얘기를 하는 것도 ‎로리에겐 굴욕이니…"
  },
  {
    "Time": "18:04",
    "Subtitle": "SHE'LL KILL ME WHEN SHE FINDS OUT.",
    "Human Translation": "‎알면 절 죽이려 들 거에요"
  },
  {
    "Time": "18:06",
    "Subtitle": "DON'T TELL HER, THEN. IT'LL BE OUR SECRET. I APPRECIATE THAT.",
    "Human Translation": "‎- 비밀로 할 테니 걱정 마세요 ‎- 고마워요"
  },
  {
    "Time": "18:12",
    "Subtitle": "SO, ARE YOU A B-52's GIRL?",
    "Human Translation": "‎80년대 B 52의 팬이었나요?"
  },
  {
    "Time": "18:16",
    "Subtitle": "WHAT?",
    "Human Translation": "‎네?"
  },
  {
    "Time": "18:19",
    "Subtitle": "NO, I'M A KLUTZ GIRL WHO SHOULD NOT DRIVE WITH COFFEE IN HER HAND.",
    "Human Translation": "‎아직도 운전할 때 커피도 ‎못 마시는 순진한 소녀예요"
  },
  {
    "Time": "18:25",
    "Subtitle": "I, UM, HAD THIS IN THE CAR.",
    "Human Translation": "‎커피는 차에서 마셨어요"
  },
  {
    "Time": "18:29",
    "Subtitle": "YOU KNOW, I HOPE RORY ADJUSTS TO THIS PLACE. WE NEED HER HERE.",
    "Human Translation": "‎로리가 학교에 ‎잘 적응했으면 좋겠습니다"
  },
  {
    "Time": "18:33",
    "Subtitle": "THANK YOU. THAT'S SO NICE.",
    "Human Translation": "‎감사해요, 정말 친절하시네요"
  },
  {
    "Time": "18:35",
    "Subtitle": "I HOPE SHE'S NOT TOO DISAPPOINTED ABOUT HER PAPER.",
    "Human Translation": "‎성적 때문에 너무 낙담하지 ‎않았으면 좋겠습니다"
  },
  {
    "Time": "18:37",
    "Subtitle": "IT'S VERY HARD TO CATCH UP ON ALL THAT READING MATERIAL.",
    "Human Translation": "‎그 많은 교재를 처음부터 ‎다 읽는다는 건 어려운 일이죠"
  },
  {
    "Time": "18:40",
    "Subtitle": "I KNOW A \"D\" SEEMS DISMAL -- RORY GOT A \"D?\"",
    "Human Translation": "‎- 로리가 D학점을… ‎- 로리가 D를 받아요?"
  },
  {
    "Time": "18:43",
    "Subtitle": "YEAH, BUT -- SHE'S NEVER GOTTEN A \"D.\"",
    "Human Translation": "‎- 네… ‎- D라니"
  },
  {
    "Time": "18:45",
    "Subtitle": "IT'S THE FIRST PAPER SHE'S HAD TO TURN IN. SHE'S BOUND TO FALTER A LITTLE.",
    "Human Translation": "‎처음 제출한 과제물이었으니 ‎부담스러웠을 겁니다"
  },
  {
    "Time": "18:49",
    "Subtitle": "MAN, THIS TOTALLY EXPLAINS THE \"NO ICE CREAM\" THING.",
    "Human Translation": "‎그래서 아이스크림을 ‎먹지 않겠다고 한 거구나"
  },
  {
    "Time": "18:51",
    "Subtitle": "GOD, I'M SUCH AN IDIOT. THE ICE-CREAM THING?",
    "Human Translation": "‎- 세상에, 이렇게 바보 같다니 ‎- 아이스크림이라뇨? ‎가 봐야 할 것 같네요"
  },
  {
    "Time": "18:54",
    "Subtitle": "I'VE GOTTA GO.",
    "Human Translation": "‎가 봐야 할 것 같네요"
  },
  {
    "Time": "18:56",
    "Subtitle": "I'M SORRY IF I SAID SOMETHING TO OFFEND YOU.",
    "Human Translation": "‎기분 나쁘셨다면 죄송합니다"
  },
  {
    "Time": "18:59",
    "Subtitle": "OH, NO. IF RORY GOT A \"D,\" SHE'S NOT FEELING TOO GOOD,",
    "Human Translation": "‎아뇨, 로리가 D를 받았다면 ‎낙심해 있을 게 틀림없어요"
  },
  {
    "Time": "19:02",
    "Subtitle": "AND I'D LIKE TO BE THERE. I UNDERSTAND.",
    "Human Translation": "‎- 그래서 가 봐야 할 것 같아요 ‎- 잘 알겠습니다"
  },
  {
    "Time": "19:05",
    "Subtitle": "SO... IT WAS NICE MEETING YOU.",
    "Human Translation": "‎만나서 정말 반가웠어요"
  },
  {
    "Time": "19:08",
    "Subtitle": "YOU TOO.",
    "Human Translation": "‎저도 반가웠습니다"
  },
  {
    "Time": "19:10",
    "Subtitle": "KEEP UP THE GOOD WORK. I WILL.",
    "Human Translation": "‎- 앞으로도 잘 부탁드립니다 ‎- 그러죠"
  },
  {
    "Time": "19:12",
    "Subtitle": "DON'T EVER MAKE COFFEE EVER AGAIN. I WON'T, I PROMISE. OH --",
    "Human Translation": "‎- 다시는 커피 끓이지 마세요 ‎- 네, 약속하죠"
  },
  {
    "Time": "19:18",
    "Subtitle": "OH. HA HA HA. THANKS.",
    "Human Translation": "‎고마워요"
  },
  {
    "Time": "19:20",
    "Subtitle": "[ CLEARS THROAT ] BYE.",
    "Human Translation": "‎- 잘 있어요 ‎- 잘 가요"
  },
  {
    "Time": "19:40",
    "Subtitle": "HERE. WHAT'S THAT?",
    "Human Translation": "‎- 자 ‎- 이게 뭐죠?"
  },
  {
    "Time": "19:42",
    "Subtitle": "YOU NEED PIE. I DO?",
    "Human Translation": "‎- 파이를 원하는 얼굴이야 ‎- 제가요?"
  },
  {
    "Time": "19:44",
    "Subtitle": "VIOLENT PENCIL-TOSSING USUALLY SIGNALS A NEED FOR PIE.",
    "Human Translation": "‎연필을 집어던지는 건 ‎파이를 먹고 싶다는 징조야"
  },
  {
    "Time": "19:47",
    "Subtitle": "WHAT IF I HAD THROWN A PEN? I'D BRING A TROUT.",
    "Human Translation": "‎펜을 던지면요? ‎- 송어를 가져왔겠지 ‎- 네?"
  },
  {
    "Time": "19:50",
    "Subtitle": "WHAT? I DON'T MAKE THE RULES. I JUST CARRY THEM OUT.",
    "Human Translation": "‎그 규칙은 내가 정한 게 아니야 ‎난 가져왔을 뿐이야"
  },
  {
    "Time": "20:00",
    "Subtitle": "HEY. BACKWARDS BASEBALL HAT -- NEW LOOK FOR YOU.",
    "Human Translation": "‎거꾸로 쓴 야구모자 ‎새로운 분위기네요"
  },
  {
    "Time": "20:05",
    "Subtitle": "SHE'S EATING PIE? DID SHE EVEN HAVE DINNER?",
    "Human Translation": "‎파이를 먹네? ‎저녁도 안 먹었대요?"
  },
  {
    "Time": "20:07",
    "Subtitle": "YOU RAISED HER. I JUST SERVE.",
    "Human Translation": "‎키운 건 당신이고 ‎난 서빙만 할 뿐이에요"
  },
  {
    "Time": "20:14",
    "Subtitle": "OH, HELLO, BOOKWORM.",
    "Human Translation": "‎- 안녕, 책벌레 ‎- 드디어 왔네"
  },
  {
    "Time": "20:16",
    "Subtitle": "FINALLY. WHERE WERE YOU? WELL, UM, ACTUALLY, I WAS IN HARTFORD.",
    "Human Translation": "‎- 어디 갔었어? ‎- 실은 하트포드에 갔었어"
  },
  {
    "Time": "20:22",
    "Subtitle": "WHY?",
    "Human Translation": "‎왜?"
  },
  {
    "Time": "20:23",
    "Subtitle": "I WAS THERE FOR THE...",
    "Human Translation": "‎거기 간 목적은…"
  },
  {
    "Time": "20:25",
    "Subtitle": "PARENT/TEACHER MEETING. OH, MY GOD. YEAH.",
    "Human Translation": "‎사친회 모임 ‎세상에, 깜빡했어"
  },
  {
    "Time": "20:29",
    "Subtitle": "I FORGOT. IT WENT VERY WELL.",
    "Human Translation": "‎별일 없었어"
  },
  {
    "Time": "20:31",
    "Subtitle": "I WAS EXTREMELY CHARMING. I WON THE WHOLE CROWD OVER.",
    "Human Translation": "‎내가 한 건 올렸지 ‎인기 만점이었다니까"
  },
  {
    "Time": "20:35",
    "Subtitle": "THEY MADE ME QUEEN.",
    "Human Translation": "‎완전히 독무대였지"
  },
  {
    "Time": "20:36",
    "Subtitle": "SO I GUESS YOU TALKED TO MR. MEDINA.",
    "Human Translation": "‎메디나 선생님을 만났겠구나"
  },
  {
    "Time": "20:40",
    "Subtitle": "WHY DID YOU LET ME WHINE ABOUT ICE CREAM AND SHOE SALES",
    "Human Translation": "‎그런 상황이었는데도 ‎왜 내가 아이스크림이나…"
  },
  {
    "Time": "20:44",
    "Subtitle": "WHEN YOU HAD SOMETHING MAJOR GOING ON?",
    "Human Translation": "‎신발 타령하게 놔둔 거니?"
  },
  {
    "Time": "20:46",
    "Subtitle": "I KNOW.",
    "Human Translation": "‎그러게"
  },
  {
    "Time": "20:47",
    "Subtitle": "I HATE WHEN I'M AN IDIOT AND DON'T KNOW IT.",
    "Human Translation": "‎바보짓을 하더라도 최소한 ‎알고나 해야 하는 거 아냐?"
  },
  {
    "Time": "20:50",
    "Subtitle": "I LIKE TO BE AWARE OF MY IDIOCY. TO REVEL IN IT, TAKE PICTURES.",
    "Human Translation": "‎바보짓을 하더라도 최소한 ‎알고나 해야 하는 거 아냐? ‎한껏 웃으며 사진을 찍어 ‎크리스마스 카드를 만들어야지"
  },
  {
    "Time": "20:53",
    "Subtitle": "WE'VE MISSED A PRIME CHRISTMAS CARD OPPORTUNITY.",
    "Human Translation": "‎한껏 웃으며 사진을 찍어 ‎크리스마스 카드를 만들어야지"
  },
  {
    "Time": "20:55",
    "Subtitle": "I'M SORRY.",
    "Human Translation": "‎미안해"
  },
  {
    "Time": "20:57",
    "Subtitle": "YOU SHOULD HAVE TOLD ME.",
    "Human Translation": "‎말해 주지 그랬어"
  },
  {
    "Time": "20:59",
    "Subtitle": "I COULDN'T.",
    "Human Translation": "‎할 수 없었어"
  },
  {
    "Time": "21:00",
    "Subtitle": "YOU COULDN'T TELL ME? YOU TELL ME EVERYTHING.",
    "Human Translation": "‎말할 수 없었다고? ‎넌 다 이야기하잖아"
  },
  {
    "Time": "21:03",
    "Subtitle": "IT WAS TOO HUMILIATING. OH, HONEY.",
    "Human Translation": "‎너무 창피했어 ‎‘베이사이드 얄개들’ 을 ‎좋아한다고 말한 적도 있잖아"
  },
  {
    "Time": "21:06",
    "Subtitle": "YOU ONCE TOLD ME THAT YOU LOVE \"SAVED BY THE BELL.\"",
    "Human Translation": "‎‘베이사이드 얄개들’ 을 ‎좋아한다고 말한 적도 있잖아"
  },
  {
    "Time": "21:09",
    "Subtitle": "WHAT COULD BE MORE HUMILIATING THAN THAT?",
    "Human Translation": "‎그보다 더 창피한 일이 어디 있어?"
  },
  {
    "Time": "21:10",
    "Subtitle": "I COULDN'T FORM THE WORDS. I COULDN'T EVEN SAY IT.",
    "Human Translation": "‎단어도 생각나지 않았고 ‎표현할 수도 없었어 ‎무슨 말인지 이해도 못했어"
  },
  {
    "Time": "21:14",
    "Subtitle": "I COULDN'T EVEN COMPREHEND IT.",
    "Human Translation": "‎표현할 수도 없었어 ‎무슨 말인지 이해도 못했어"
  },
  {
    "Time": "21:17",
    "Subtitle": "IT WAS...A \"D.\" I GOT A \"D.\"",
    "Human Translation": "‎D야, D를 받았다고"
  },
  {
    "Time": "21:20",
    "Subtitle": "I'VE NEVER GOTTEN A \"D\". EVER. I KNOW.",
    "Human Translation": "‎- D는 받아 본 적이 없어 ‎- 알아"
  },
  {
    "Time": "21:23",
    "Subtitle": "EVEN WHEN I BROKE MY ARM AND COULDN'T WRITE FOR A MONTH,",
    "Human Translation": "‎팔이 부러져서 한 달 동안 ‎쓰지도 못했을 때도…"
  },
  {
    "Time": "21:26",
    "Subtitle": "I GOT AN \"A\" MINUS.",
    "Human Translation": "‎A-를 받았는데"
  },
  {
    "Time": "21:27",
    "Subtitle": "THAT WAS A DIFFERENT SCHOOL. I KNOW. IT WAS STARS HOLLOW HIGH.",
    "Human Translation": "‎- 여긴 다른 학교잖아 ‎- 알아, 거긴 스타즈 할로우였어"
  },
  {
    "Time": "21:31",
    "Subtitle": "A \"D\" AT STARS HOLLOW IS LIKE AN \"F\" AT CHILTON.",
    "Human Translation": "‎스타즈 할로우의 D는 ‎칠튼의 F와 같을 거야"
  },
  {
    "Time": "21:34",
    "Subtitle": "IT'S WORSE -- IT'S LIKE A \"G\" OR A \"W.\"",
    "Human Translation": "‎아냐, G나 W쯤 될걸"
  },
  {
    "Time": "21:38",
    "Subtitle": "SO THE SPELLING TEST DIDN'T GO WELL EITHER?",
    "Human Translation": "‎그럼 철자법 시험에서도 ‎성적이 나빴다는 말이네?"
  },
  {
    "Time": "21:42",
    "Subtitle": "A \"D.\" I SUCK.",
    "Human Translation": "‎D야 ‎꼴 좋다"
  },
  {
    "Time": "21:45",
    "Subtitle": "YOU DON'T SUCK.",
    "Human Translation": "‎아냐, 그렇지 않아"
  },
  {
    "Time": "21:47",
    "Subtitle": "I CAN'T DO THIS. LISTEN, A \"D\" IS BAD. OKAY?",
    "Human Translation": "‎- 난 가망이 없어 ‎- 그래, D는 나빠"
  },
  {
    "Time": "21:51",
    "Subtitle": "BUT ALL THIS TALK ABOUT \"I SUCK\" AND \"I CAN'T DO THIS\"",
    "Human Translation": "‎하지만 ‘꼴 좋다’ 는 둥 ‎‘가망이 없다’ 는 둥 하는 식의…"
  },
  {
    "Time": "21:54",
    "Subtitle": "AND SELF-PITY, THAT'S WORSE. NOT YOU. YOU DIDN'T FEEL SORRY FOR YOURSELF",
    "Human Translation": "‎자책은 더 나빠, 너답지 않아 ‎넌 석 달이나 걸려…"
  },
  {
    "Time": "21:57",
    "Subtitle": "WHEN IT TOOK YOU THREE MONTHS TO LEARN TO RIDE A BIKE.",
    "Human Translation": "‎자전거를 배웠을 때도 ‎그렇게 자책하지 않았잖아"
  },
  {
    "Time": "22:00",
    "Subtitle": "FOUR MONTHS. HUH?",
    "Human Translation": "‎넉 달이었어"
  },
  {
    "Time": "22:02",
    "Subtitle": "TOOK ME FOUR MONTHS TO LEARN TO RIDE A BIKE.",
    "Human Translation": "‎자전거를 탈 수 있을 때까지 ‎넉 달이나 걸렸다고"
  },
  {
    "Time": "22:05",
    "Subtitle": "REALLY? FOUR MONTHS?",
    "Human Translation": "‎정말? 넉 달이었어?"
  },
  {
    "Time": "22:06",
    "Subtitle": "YEAH. YOU WANNA BELABOR THE CONVERSATION?",
    "Human Translation": "‎응, 내기라도 하고 싶어?"
  },
  {
    "Time": "22:08",
    "Subtitle": "ALRIGHT, FORGET ABOUT THE BIKE.",
    "Human Translation": "‎좋아, 그 얘긴 그만하자"
  },
  {
    "Time": "22:10",
    "Subtitle": "A \"D\" IS ONE GRADE, NOT THE END OF THE WORLD.",
    "Human Translation": "‎D는 학점일 뿐이야 ‎그렇다고 끝장나는 건 아니야"
  },
  {
    "Time": "22:13",
    "Subtitle": "YOU'LL CATCH UP AND DO BETTER. YOU ARE OF HARDY, STUBBORN STOCK, MY DEAR.",
    "Human Translation": "‎나중에 더 잘하면 되잖아 ‎넌 강하고 고집도 세니까"
  },
  {
    "Time": "22:16",
    "Subtitle": "IF THERE'S ONE THING I GAVE YOU, IT'S STUBBORNNESS.",
    "Human Translation": "‎내가 네게 물려준 게 있다면 ‎고집일 거야"
  },
  {
    "Time": "22:19",
    "Subtitle": "I'M NOT STUBBORN. YOU ARE.",
    "Human Translation": "‎- 고집 안 세 ‎- 맞잖아"
  },
  {
    "Time": "22:20",
    "Subtitle": "I'M NOT. FINE. YOU'RE NOT.",
    "Human Translation": "‎- 아니라니까 ‎- 아니라고 하자"
  },
  {
    "Time": "22:22",
    "Subtitle": "THANK YOU. WELCOME.",
    "Human Translation": "‎- 고마워 ‎- 천만에"
  },
  {
    "Time": "22:23",
    "Subtitle": "YOU CAN DO THIS, AND I WILL HELP YOU.",
    "Human Translation": "‎넌 할 수 있어, 내가 도와줄게 ‎넌 잘할 수 있어"
  },
  {
    "Time": "22:26",
    "Subtitle": "I'LL GET YOU THROUGH THIS. NOW PUT THE \"D\" BEHIND YOU.",
    "Human Translation": "‎넌 할 수 있어, 내가 도와줄게 ‎넌 잘할 수 있어 ‎그러니 D는 잊어버려"
  },
  {
    "Time": "22:29",
    "Subtitle": "WHAT'S NEXT? I HAVE A TEST ON FRIDAY.",
    "Human Translation": "‎- 다음 건 뭐야? ‎- 금요일에 시험이 있어"
  },
  {
    "Time": "22:31",
    "Subtitle": "OOH, A TEST! GREAT! ON SHAKESPEARE.",
    "Human Translation": "‎- 시험, 멋지다! ‎- 셰익스피어 시험이야"
  },
  {
    "Time": "22:34",
    "Subtitle": "THE BARD WITH A BEARD. LOVE IT. IT'S 20% OF MY GRADE.",
    "Human Translation": "‎턱수염 기른 시인, 멋지지 ‎- 20퍼센트 짜리야 ‎- 역시 인생은 이래서 멋져"
  },
  {
    "Time": "22:37",
    "Subtitle": "WHAT DO WE HAVE TO DO TO GET YOU AN \"A\"?",
    "Human Translation": "‎- 20퍼센트 짜리야 ‎- 역시 인생은 이래서 멋져 ‎네가 시험에서 A를 받으려면 ‎어떻게 해야 하지?"
  },
  {
    "Time": "22:42",
    "Subtitle": "DO YOU REALLY THINK I CAN DO THIS?",
    "Human Translation": "‎내가 할 수 있을 거라고 생각해?"
  },
  {
    "Time": "22:45",
    "Subtitle": "I BET YOU A DOLLAR. THAT'S IT?",
    "Human Translation": "‎할 수 있다에 1달러 걸게 ‎그게 다야? ‎내 장래가 겨우 1달러짜리야?"
  },
  {
    "Time": "22:47",
    "Subtitle": "THAT'S ALL MY FUTURE'S WORTH -- $1?",
    "Human Translation": "‎그게 다야? ‎내 장래가 겨우 1달러짜리야?"
  },
  {
    "Time": "22:50",
    "Subtitle": "WELL, YOU DID GET A \"D.\"",
    "Human Translation": "‎뭐, D도 받아 봤잖아"
  },
  {
    "Time": "22:58",
    "Subtitle": "\"LET ME NOT TO THE MARRIAGE OF TRUE MINDS ADMIT IMPEDIMENTS.",
    "Human Translation": "‎‘진실한 마음의 결혼을 반대하게 하라 ‎결혼의 장애를 인정하노라’"
  },
  {
    "Time": "23:02",
    "Subtitle": "\"LOVE IS NOT LOVE WHICH ALTERS WHEN IT ALTERATION FINDS",
    "Human Translation": "‎‘변화가 있을 때마다 변하는 사랑은 ‎사랑이 아니니’"
  },
  {
    "Time": "23:06",
    "Subtitle": "\"OR BENDS WITH THE REMOVER TO REMOVE --",
    "Human Translation": "‎‘방해가 있을 때 방해를 받는 사랑도 ‎사랑이 아니니’"
  },
  {
    "Time": "23:08",
    "Subtitle": "\"OH, NO! IT IS AN EVER-FIXED MARK",
    "Human Translation": "‎‘아, 그대의 영원한 낙인’"
  },
  {
    "Time": "23:11",
    "Subtitle": "\"THAT LOOKS ON TEMPESTS AND IS NEVER SHAKEN.",
    "Human Translation": "‎‘휘몰아치는 폭풍우 속에서도 ‎흔들리지 않는’"
  },
  {
    "Time": "23:13",
    "Subtitle": "\"IT IS THE STAR TO EVERY WANDERING BARK,",
    "Human Translation": "‎‘그것은 모든 방황하는 배들의 별’"
  },
  {
    "Time": "23:16",
    "Subtitle": "WHOSE WORTH'S UNKNOWN, ALTHOUGH HIS HEIGHT BE TAKEN.\"",
    "Human Translation": "‎‘높이는 알 수 있으나 ‎가치는 알 수 없는’"
  },
  {
    "Time": "23:20",
    "Subtitle": "YOU'RE GOING DOWN.",
    "Human Translation": "‎넌 낙제할 거야"
  },
  {
    "Time": "23:28",
    "Subtitle": "HEY, SOOKIE, DO YOU KNOW WHAT THE MENU'S GONNA BE --",
    "Human Translation": "‎수키, 메뉴는 어떻게 할 생각이…"
  },
  {
    "Time": "23:32",
    "Subtitle": "GOOD? HOT.",
    "Human Translation": "‎- 맛있어? ‎- 뜨겁네"
  },
  {
    "Time": "23:33",
    "Subtitle": "WAIT. I GOT ANOTHER ONE.",
    "Human Translation": "‎잠깐만, 다른 것도 있어"
  },
  {
    "Time": "23:36",
    "Subtitle": "BETTER? HOTTER.",
    "Human Translation": "‎- 이건? ‎- 더 뜨거워"
  },
  {
    "Time": "23:37",
    "Subtitle": "WAIT. I GOT ONE MORE -- ONE MORE.",
    "Human Translation": "‎잠깐, 하나 더 있어"
  },
  {
    "Time": "23:40",
    "Subtitle": "SOOKIE, WHAT'S WITH ALL THE RISOTTO? HAVE WE GONE \"THEME\" NOW?",
    "Human Translation": "‎이 리조토는 다 뭐야? ‎테마 식당이라도 하려는 거야?"
  },
  {
    "Time": "23:44",
    "Subtitle": "IS IT GONNA BE LIKE THE SCOTCH TAPE STORE?",
    "Human Translation": "‎스카치 테이프 가게처럼 ‎꾸밀 거야?"
  },
  {
    "Time": "23:47",
    "Subtitle": "LOOK, I'VE MADE 40 RECIPES, OKAY?",
    "Human Translation": "‎40가지 조리법을 써 봤어, 40개나"
  },
  {
    "Time": "23:50",
    "Subtitle": "40 -- AND EVERY SINGLE TIME, I COME BACK TO THE SAME CONCLUSION.",
    "Human Translation": "‎하나씩 먹어 봐도 ‎항상 결론은 하나였다고"
  },
  {
    "Time": "23:53",
    "Subtitle": "THAT YOURS IS BETTER? YES.",
    "Human Translation": "‎네 요리가 더 맛있다?"
  },
  {
    "Time": "23:55",
    "Subtitle": "IT IS! LOOKIN' FOR ME?",
    "Human Translation": "‎- 응 ‎- 알아 ‎- 저 찾았어요? ‎- 그래요"
  },
  {
    "Time": "23:56",
    "Subtitle": "YES. GREAT. THREE WEEKS AGO,",
    "Human Translation": "‎- 저 찾았어요? ‎- 그래요 ‎3주 전에 루세인 밀즈라는 ‎사람이 와서…"
  },
  {
    "Time": "23:58",
    "Subtitle": "A GUY COMES IN HERE -- LUCIEN MILLS --",
    "Human Translation": "‎3주 전에 루세인 밀즈라는 ‎사람이 와서…"
  },
  {
    "Time": "24:00",
    "Subtitle": "ORDERS THE RISOTTO, DOESN'T LIKE IT.",
    "Human Translation": "‎리조토를 먹어 보곤 ‎맛이 없다고 했어요"
  },
  {
    "Time": "24:02",
    "Subtitle": "THE MAGIC RISOTTO? YOU'RE KIDDING.",
    "Human Translation": "‎- 마법의 리조토를? 말도 안 돼 ‎- 그게 아니라니까"
  },
  {
    "Time": "24:03",
    "Subtitle": "NOT HELPING. HE'S A RESTAURANT CRITIC.",
    "Human Translation": "‎- 마법의 리조토를? 말도 안 돼 ‎- 그게 아니라니까 ‎그는 식당 평론가예요"
  },
  {
    "Time": "24:06",
    "Subtitle": "HE ORDERED LOTS OF THINGS -- PROBABLY DIDN'T FINISH THEM.",
    "Human Translation": "‎여러가지 음식을 시켜 놓고 ‎다 먹지도 않았겠죠"
  },
  {
    "Time": "24:09",
    "Subtitle": "IN HIS REVIEW, HE SAID HIS WAITER HAD A GOATEE.",
    "Human Translation": "‎그런데 웨이터가 염소수염을 ‎길렀다고 썼어요"
  },
  {
    "Time": "24:12",
    "Subtitle": "YOU'VE GOT A GOATEE, AND I NEED INFO!",
    "Human Translation": "‎염소수염은 당신밖에 없으니까 ‎어서 다 말해 봐요"
  },
  {
    "Time": "24:14",
    "Subtitle": "WELL, WHAT DID HE LOOK LIKE? LIKE HE WAS UNHAPPY WITH THE RISOTTO!",
    "Human Translation": "‎- 어떻게 생겼는데요? ‎- 리조토가 안 좋아하게 생겼죠"
  },
  {
    "Time": "24:18",
    "Subtitle": "MAYBE HE HAD A COMPANION THAT WOULDN'T LET HIM CONCENTRATE.",
    "Human Translation": "‎아니면 옆에 앉은 사람이… ‎신경 거슬리게 해서 ‎맛을 제대로 못 봤던지"
  },
  {
    "Time": "24:21",
    "Subtitle": "I SERVE A LOT OF PEOPLE.",
    "Human Translation": "‎- 손님이 한둘이어야죠 ‎- 턱수염에, 고르지 못한 이, 가발…"
  },
  {
    "Time": "24:22",
    "Subtitle": "HE HAD A BEARD, FALSE TEETH, WIG,",
    "Human Translation": "‎- 손님이 한둘이어야죠 ‎- 턱수염에, 고르지 못한 이, 가발… ‎큰 코에 안경을 썼을 거예요"
  },
  {
    "Time": "24:25",
    "Subtitle": "THOSE GLASSES WITH THE BIG NOSE.",
    "Human Translation": "‎큰 코에 안경을 썼을 거예요"
  },
  {
    "Time": "24:27",
    "Subtitle": "MAY I BE FIRED NOW? ABSOLUTELY.",
    "Human Translation": "‎- 나 해고되는 거 맞죠? ‎- 물론이죠"
  },
  {
    "Time": "24:29",
    "Subtitle": "WHAT ABOUT A GUY WITH AN ANNOYING COMPANION",
    "Human Translation": "‎만약 그 사람이 가발을 쓰고 ‎신경 거슬리게 하는 사람과…"
  },
  {
    "Time": "24:31",
    "Subtitle": "WHO WAS SITTING UNDERNEATH AN AIR-CONDITIONING VENT",
    "Human Translation": "‎같이 앉았는데 ‎향수를 잔뜩 바른 여자가…"
  },
  {
    "Time": "24:34",
    "Subtitle": "NEXT TO A WOMAN WITH TOO MUCH PERFUME ON?",
    "Human Translation": "‎에어컨 앞에 앉아 있었다면?"
  },
  {
    "Time": "24:36",
    "Subtitle": "\"THE COMEDY OF ERRORS\" -- WRITTEN? 1590.",
    "Human Translation": "‎- ‘실수연발’ 은 언제? ‎- 1590년"
  },
  {
    "Time": "24:41",
    "Subtitle": "PUBLISHED? 1698.",
    "Human Translation": "‎- 출판된 해는? ‎- 1698년"
  },
  {
    "Time": "24:43",
    "Subtitle": "1623. CLOSE. HOW IS 1623 CLOSE?",
    "Human Translation": "‎- 1623년, 비슷했네 ‎- 1623년이 뭐가 비슷해?"
  },
  {
    "Time": "24:47",
    "Subtitle": "YOU GOT THE \"16\" PART RIGHT. I WAS OFF BY 75 YEARS.",
    "Human Translation": "‎- 16까지는 맞았잖아 ‎- 75년이나 틀렸어"
  },
  {
    "Time": "24:50",
    "Subtitle": "WELL, ANYTHING UNDER 100 IS CLOSE.",
    "Human Translation": "‎100이하면 비슷한 거야"
  },
  {
    "Time": "24:52",
    "Subtitle": "WHAT KIND OF A RULE IS THAT? I'M RUNNING THE STUDY SESSION HERE.",
    "Human Translation": "‎- 무슨 계산이 그래? ‎- 지금은 수업 중인데"
  },
  {
    "Time": "24:56",
    "Subtitle": "OKAY. \"RICHARD III.\" 1591.",
    "Human Translation": "‎- 좋아, ‘리처드 3세’ ‎- 1591년"
  },
  {
    "Time": "24:59",
    "Subtitle": "[ IMITATES BUZZER ] '93? [ IMITATES BUZZER ] '96?",
    "Human Translation": "‎93년? 96년?"
  },
  {
    "Time": "25:03",
    "Subtitle": "[ IMITATES BUZZER ] THAT'S REALLY ANNOYING.",
    "Human Translation": "‎됐어, 짜증 나니까 그만 좀 해"
  },
  {
    "Time": "25:11",
    "Subtitle": "GO ON. I'M LISTENING.",
    "Human Translation": "‎듣고 있으니까 계속해"
  },
  {
    "Time": "25:13",
    "Subtitle": "THE SONNETS ARE 154 POEMS OF 14 LINES.",
    "Human Translation": "‎소네트는 14행으로 구성된 ‎154개의 시"
  },
  {
    "Time": "25:15",
    "Subtitle": "EXCEPT? EXCEPT FOR 126, WHICH IS 12 LINES.",
    "Human Translation": "‎- 예외는? ‎- 12행으로 구성된 시 126개"
  },
  {
    "Time": "25:19",
    "Subtitle": "GOOD.",
    "Human Translation": "‎좋아"
  },
  {
    "Time": "25:21",
    "Subtitle": "THEY'RE WRITTEN IN IAMBIC PENTAMETER.",
    "Human Translation": "‎모두 약강격 오보격으로 쓰여졌어"
  },
  {
    "Time": "25:24",
    "Subtitle": "EXCEPT? EXCEPT FOR 145, WHICH IS IN TETRAMETER.",
    "Human Translation": "‎- 예외는? ‎- 사보격으로 구성된 145개 제외"
  },
  {
    "Time": "25:29",
    "Subtitle": "ROCK ON, SISTER. REALLY?",
    "Human Translation": "‎- 잘한다, 우리 딸 ‎- 정말?"
  },
  {
    "Time": "25:31",
    "Subtitle": "NOT ONE MISTAKE. WOW!",
    "Human Translation": "‎- 하나도 안 틀렸어, 기분이 어때? ‎- 구역질 나"
  },
  {
    "Time": "25:32",
    "Subtitle": "HOW DO YOU FEEL? NAUSEOUS.",
    "Human Translation": "‎- 하나도 안 틀렸어, 기분이 어때? ‎- 구역질 나 ‎튀김과 서양 고추냉이 소스는…"
  },
  {
    "Time": "25:35",
    "Subtitle": "WELL, I DON'T THINK THE FRIES AND HORSERADISH SAUCE",
    "Human Translation": "‎튀김과 서양 고추냉이 소스는…"
  },
  {
    "Time": "25:37",
    "Subtitle": "WAS THE BEST IDEA WE HAD.",
    "Human Translation": "‎좋은 생각이 아니었나 봐"
  },
  {
    "Time": "25:39",
    "Subtitle": "IT WAS SATISFYING IN THE MOMENT, THOUGH.",
    "Human Translation": "‎적어도 먹을 때는 좋았잖아"
  },
  {
    "Time": "25:41",
    "Subtitle": "YOU'RE GONNA BLOW THAT CLASS AWAY TOMORROW.",
    "Human Translation": "‎내일 시험에서 일등할 수 있을 거야"
  },
  {
    "Time": "25:43",
    "Subtitle": "YOU THINK? I THINK.",
    "Human Translation": "‎- 정말? ‎- 그럼"
  },
  {
    "Time": "25:45",
    "Subtitle": "WHAT DO YOU SAY WE CALL IT A NIGHT AND GET SOME SLEEP?",
    "Human Translation": "‎이제 그만하고 잠자리에 ‎드는 게 어떨까?"
  },
  {
    "Time": "25:48",
    "Subtitle": "YOU GO. I WANNA REVIEW MY NOTES ONE MORE TIME.",
    "Human Translation": "‎먼저 가서 자 ‎난 한 번만 더 읽어보고 잘게"
  },
  {
    "Time": "25:51",
    "Subtitle": "OH, THAT'S OKAY. I'LL STAY UP.",
    "Human Translation": "‎- 괜찮아, 나도 기다릴게 ‎- 엄마, 먼저 자"
  },
  {
    "Time": "25:52",
    "Subtitle": "MOM, GO TO SLEEP. NO. I'M NOT EVEN TIRED.",
    "Human Translation": "‎- 괜찮아, 나도 기다릴게 ‎- 엄마, 먼저 자 ‎별로 피곤하지도 않아 ‎네 걱정이 돼서 그렇지"
  },
  {
    "Time": "25:55",
    "Subtitle": "I WAS JUST THINKING OF YOU!",
    "Human Translation": "‎별로 피곤하지도 않아 ‎네 걱정이 돼서 그렇지"
  },
  {
    "Time": "27:32",
    "Subtitle": "NO! OH, NO!",
    "Human Translation": "‎안 돼!"
  },
  {
    "Time": "27:36",
    "Subtitle": "Oh, jeez. This was such a bad sleeping idea.",
    "Human Translation": "‎오, 젠장 ‎이렇게 자는 게 아니었어"
  },
  {
    "Time": "27:41",
    "Subtitle": "I'M LATE! WHAT?",
    "Human Translation": "‎- 늦었어! ‎- 뭐?"
  },
  {
    "Time": "27:43",
    "Subtitle": "I'M LATE! I'M LATE! I WOKE UP LATE! RORY, CALM DOWN.",
    "Human Translation": "‎- 늦었다고, 늦잠 잤어 ‎- 로리, 침착해"
  },
  {
    "Time": "27:47",
    "Subtitle": "I CAN'T CALM DOWN! I MISSED MY BUS! GET UP!",
    "Human Translation": "‎버스를 놓쳤는데 어떻게 침착해? ‎일어나!"
  },
  {
    "Time": "27:50",
    "Subtitle": "SWEETIE, MOMMY CAN'T GET UP RIGHT NOW.",
    "Human Translation": "‎엄마는 지금 못 일어나"
  },
  {
    "Time": "27:51",
    "Subtitle": "MOMMY'S BEEN SLEEPING AT A RIGHT ANGLE ALL NIGHT.",
    "Human Translation": "‎한쪽으로 기대서 밤새 잤더니 ‎목이 다 뻐근하다고"
  },
  {
    "Time": "27:55",
    "Subtitle": "I'M GONNA MISS THE TEST! NO. NO, YOU'RE NOT.",
    "Human Translation": "‎- 시험 못 보게 될지도 몰라! ‎- 아냐, 걱정 마"
  },
  {
    "Time": "27:59",
    "Subtitle": "I'LL GET THE KEYS. WE'LL GO RIGHT NOW. LET'S GO. LET'S GO!",
    "Human Translation": "‎열쇠 가져올게 ‎금방 갈 수 있어, 가자!"
  },
  {
    "Time": "28:05",
    "Subtitle": "I CAN'T TAKE YOU. YOU HAVE TO!",
    "Human Translation": "‎- 너 못 데려다줘 ‎- 데려다줘야 해"
  },
  {
    "Time": "28:07",
    "Subtitle": "I'VE A MEETING AT 8:00! MOM!",
    "Human Translation": "‎- 8시에 모텔에서 회의가 있어 ‎- 엄마!"
  },
  {
    "Time": "28:09",
    "Subtitle": "OKAY, WAIT. OKAY. THINK. LISTEN. HERE. YOU DRIVE.",
    "Human Translation": "‎잠깐, 침착해, 자, 여기 ‎네가 운전해"
  },
  {
    "Time": "28:13",
    "Subtitle": "WHAT? I'LL GET A RIDE FROM SOOKIE.",
    "Human Translation": "‎- 뭐? ‎- 난 수키하고 같이 갈 테니, 넌 가"
  },
  {
    "Time": "28:16",
    "Subtitle": "TAKE THE PHONE. TAKE THE KEYS. GO, GO, GO, GO!",
    "Human Translation": "‎핸드폰하고 열쇠 가져가, 어서! ‎- 정말? ‎- 가!"
  },
  {
    "Time": "28:19",
    "Subtitle": "I'M GONE! GOOD LUCK!",
    "Human Translation": "‎- 간다! ‎- 시험 잘 봐!"
  },
  {
    "Time": "28:41",
    "Subtitle": "HELLO?",
    "Human Translation": "‎여보세요?"
  },
  {
    "Time": "28:43",
    "Subtitle": "DID I LEAVE A SET OF NOTES AT YOUR HOUSE?",
    "Human Translation": "‎내가 혹시 노트 두고 갔니?"
  },
  {
    "Time": "28:45",
    "Subtitle": "WHERE ARE YOU? I'M DRIVING TO SCHOOL.",
    "Human Translation": "‎- 너 어디야? ‎- 차 몰고 학교 가"
  },
  {
    "Time": "28:47",
    "Subtitle": "I NEED TO CHECK SOMETHING AND I CAN'T FIND MY NOTES.",
    "Human Translation": "‎확인할 게 있는데 ‎노트가 보이지 않아"
  },
  {
    "Time": "28:50",
    "Subtitle": "OKAY. HOLD ON. LET ME CHECK.",
    "Human Translation": "‎내가 확인해 볼 테니 기다려"
  },
  {
    "Time": "28:57",
    "Subtitle": "I DON'T SEE ANYTHING. What did I do with them?!",
    "Human Translation": "‎- 안 보이는데 ‎- ‘내가 어디다 둔 거지?’"
  },
  {
    "Time": "29:01",
    "Subtitle": "WELL, MAYBE IT'S DOWNSTAIRS IN THE STORE? MAYBE. I JUST --",
    "Human Translation": "‎- 아래층 상점에 둔 거 아닐까? ‎- 아마도…"
  },
  {
    "Time": "29:05",
    "Subtitle": "[ THUD ] OH, MY GOD! Are you alright?",
    "Human Translation": "‎- 오, 이런! ‎- ‘괜찮아?’"
  },
  {
    "Time": "29:08",
    "Subtitle": "I JUST GOT HIT BY A DEER! YOU HIT A DEER?",
    "Human Translation": "‎- 사슴이 부딪쳤어! ‎- 사슴을 쳤다고?"
  },
  {
    "Time": "29:11",
    "Subtitle": "NO! I GOT HIT BY A DEER! HOW DO YOU GET HIT BY A DEER?",
    "Human Translation": "‎- 아니, 사슴이 부딪쳤다고 ‎- 어떻게 사슴이 부딪쳐?"
  },
  {
    "Time": "29:15",
    "Subtitle": "I WAS AT A STOP SIGN, AND HE HIT ME! OH, MY GOD!",
    "Human Translation": "‎서있는데 사슴이 와서 쳤어 ‎오, 세상에!"
  },
  {
    "Time": "29:20",
    "Subtitle": "Was it a 4-way stop? WHAT DOES THAT MATTER?",
    "Human Translation": "‎‘사거리 교차로였니?’ ‎- 그게 무슨 상관이야? ‎- ‘몰라’"
  },
  {
    "Time": "29:23",
    "Subtitle": "I don't know. I don't know what to ask after you've been hit by a deer.",
    "Human Translation": "‎‘사슴이 와서 부딪쳤다는데 ‎무슨 소리를 하겠어?’"
  },
  {
    "Time": "29:27",
    "Subtitle": "I DON'T SEE HIM. WELL, PUT SALT DOWN. DEER LOVE SALT.",
    "Human Translation": "‎- 안 보여 ‎- 소금을 뿌려 봐, 사슴이 좋아한대"
  },
  {
    "Time": "29:31",
    "Subtitle": "WHERE AM I GONNA GET SALT? DO YOU HAVE A LUNCH?",
    "Human Translation": "‎- 대체 소금을 어디서 구해? ‎- 점심 싸 왔어?"
  },
  {
    "Time": "29:34",
    "Subtitle": "LANE! Sorry.",
    "Human Translation": "‎- 레인! ‎- ‘미안’"
  },
  {
    "Time": "29:35",
    "Subtitle": "I DON'T SEE HIM ANYWHERE. WHAT IF HE'S HURT?",
    "Human Translation": "‎어디에도 안 보여 ‎다쳤으면 어쩌지?"
  },
  {
    "Time": "29:39",
    "Subtitle": "RORY, YOUR TEST.",
    "Human Translation": "‎로리, 시험"
  },
  {
    "Time": "29:41",
    "Subtitle": "WHAT TIME IS IT? IT'S 7:40.",
    "Human Translation": "‎- 지금 몇 시야? ‎- 7시 40분"
  },
  {
    "Time": "29:43",
    "Subtitle": "NO!!",
    "Human Translation": "‎안 돼!"
  },
  {
    "Time": "30:01",
    "Subtitle": "I'M SORRY.",
    "Human Translation": "‎죄송해요"
  },
  {
    "Time": "30:03",
    "Subtitle": "MISS GILMORE, YOU'RE GONNA HAVE TO WAIT IN THE LIBRARY.",
    "Human Translation": "‎모두 계속해 ‎- 도서관에서 기다리도록 해 ‎- 시험은요?"
  },
  {
    "Time": "30:05",
    "Subtitle": "WHAT ABOUT THE TEST?",
    "Human Translation": "‎- 도서관에서 기다리도록 해 ‎- 시험은요?"
  },
  {
    "Time": "30:07",
    "Subtitle": "YOU'VE MISSED THE TEST.",
    "Human Translation": "‎- 너무 늦었다 ‎- 아니에요"
  },
  {
    "Time": "30:08",
    "Subtitle": "WE START CLASS AT 8:05. THAT'S WHEN I NEED PEOPLE IN THEIR SEATS.",
    "Human Translation": "‎수업은 8시 5분에 시작해 ‎그때까지 들어와야 해"
  },
  {
    "Time": "30:12",
    "Subtitle": "I'M SORRY. IT'S THE RULES. BUT YOU DON'T UNDERSTAND.",
    "Human Translation": "‎- 제발 ‎- 미안하다, 규정상 안 돼 ‎실은 어젯밤 늦게까지 ‎공부를 하다가 늦잠을 자는 바람에…"
  },
  {
    "Time": "30:15",
    "Subtitle": "I WAS UP ALL NIGHT STUDYING, AND THEN I MISSED MY BUS.",
    "Human Translation": "‎실은 어젯밤 늦게까지 ‎공부를 하다가 늦잠을 자는 바람에… ‎버스를 놓쳤어요 ‎그래서 차를 몰고 왔다고요"
  },
  {
    "Time": "30:18",
    "Subtitle": "SO I HAD TO DRIVE. LET'S DISCUSS THIS OUTSIDE.",
    "Human Translation": "‎버스를 놓쳤어요 ‎그래서 차를 몰고 왔다고요 ‎- 나가서 이야기하자 ‎- 그런데 사슴이 와서 부딪쳤어요"
  },
  {
    "Time": "30:20",
    "Subtitle": "I'M DRIVING, I STOP AND I GET HIT BY A DEER.",
    "Human Translation": "‎- 나가서 이야기하자 ‎- 그런데 사슴이 와서 부딪쳤어요"
  },
  {
    "Time": "30:23",
    "Subtitle": "YOU HIT A DEER? I GOT HIT BY A DEER.",
    "Human Translation": "‎- 사슴을 쳤다고? ‎- 아뇨, 사슴이 와서 부딪쳤어요"
  },
  {
    "Time": "30:26",
    "Subtitle": "YOU DON'T BELIEVE ME? I'VE GOT ANTLER PRINTS",
    "Human Translation": "‎못 믿으시겠어요? ‎차 옆에 부딪힌 자국이 있다니까요"
  },
  {
    "Time": "30:28",
    "Subtitle": "ON THE SIDE OF MY MOTHER'S CAR.",
    "Human Translation": "‎못 믿으시겠어요? ‎차 옆에 부딪힌 자국이 있다니까요 ‎그만 해라"
  },
  {
    "Time": "30:30",
    "Subtitle": "NO! YOU HAVE TO LET ME TAKE THIS TEST!",
    "Human Translation": "‎저도 시험을 쳐야만 해요 ‎준비 다 됐다고요"
  },
  {
    "Time": "30:32",
    "Subtitle": "I KNOW EVERYTHING ABOUT SHAKESPEARE. CALM DOWN.",
    "Human Translation": "‎- 셰익스피어에 대해서는 다 알아요 ‎- 좀 침착해라"
  },
  {
    "Time": "30:35",
    "Subtitle": "I KNOW HIS BIRTHDAY, HIS MOTHER'S NAME... Loser.",
    "Human Translation": "‎- 생일도 알고 엄마의 이름도… ‎- 바보"
  },
  {
    "Time": "30:39",
    "Subtitle": "JUST WHAT IS WRONG WITH YOU, HUH?!",
    "Human Translation": "‎대체 넌 뭐가 문제야?"
  },
  {
    "Time": "30:41",
    "Subtitle": "YOU HAVE EVERYTHING! YOU HAVE THE GRADES AND THE STATUS!",
    "Human Translation": "‎넌 성적에 연줄에 ‎뭐든지 다 가졌잖아"
  },
  {
    "Time": "30:44",
    "Subtitle": "WHAT IS WRONG WITH YOU THAT YOU HAVE THIS CONSTANT NEED",
    "Human Translation": "‎그런데… ‎넌 뭐가 아쉬워서 ‎끝까지 바보짓을 하는 거니?"
  },
  {
    "Time": "30:47",
    "Subtitle": "TO BE THE BIGGEST JERK IN THE WORLD?",
    "Human Translation": "‎넌 뭐가 아쉬워서 ‎끝까지 바보짓을 하는 거니?"
  },
  {
    "Time": "30:49",
    "Subtitle": "LET'S GO. HUH? WHAT'S UP?",
    "Human Translation": "‎가자 ‎왜 그래, 떠버리? ‎왜 말을 안해?"
  },
  {
    "Time": "30:52",
    "Subtitle": "WHAT'S UP, QUIPPY? WHY SO SILENT?",
    "Human Translation": "‎왜 그래, 떠버리? ‎왜 말을 안해?"
  },
  {
    "Time": "30:53",
    "Subtitle": "OUTSIDE -- NOW.",
    "Human Translation": "‎나가자, 어서"
  },
  {
    "Time": "30:57",
    "Subtitle": "AND, FOR THE LAST TIME, THE NAME IS RORY!",
    "Human Translation": "‎마지막으로 말하는데 ‎내 이름은 로리야!"
  },
  {
    "Time": "31:05",
    "Subtitle": "MAKE SURE THAT CARPET IS REPLACED PERFECTLY --",
    "Human Translation": "‎끝내기 전에 카펫을 ‎완벽히 교체하라고 일러요"
  },
  {
    "Time": "31:07",
    "Subtitle": "PERFECTLY -- NAILED DOWN AND EVERYTHING.",
    "Human Translation": "‎- 알았어요 ‎- 못질과 마무리 전부 다요"
  },
  {
    "Time": "31:09",
    "Subtitle": "OH, YOU MEAN THAT \"PERFECTLY.\"",
    "Human Translation": "‎- 알았어요 ‎- 못질과 마무리 전부 다요 ‎그런 식으로 완벽하게요? ‎다른 식을 말하는 줄 알았죠"
  },
  {
    "Time": "31:10",
    "Subtitle": "I THOUGHT YOU MEANT THE OTHER \"PERFECTLY.\"",
    "Human Translation": "‎그런 식으로 완벽하게요? ‎다른 식을 말하는 줄 알았죠"
  },
  {
    "Time": "31:12",
    "Subtitle": "THE ONE THAT COULD BE MISINTERPRETED BY THE OTHER MICHEL --",
    "Human Translation": "‎다른 미셸이 자주 오해하는 ‎완벽함인 줄 알았죠"
  },
  {
    "Time": "31:16",
    "Subtitle": "THE ONE WHO COULDN'T UNDERSTAND WHAT YOU MEANT BY \"PERFECTLY.\"",
    "Human Translation": "‎있잖아요, 완벽함이 뭔지도 ‎잘 모르는 그 사람"
  },
  {
    "Time": "31:22",
    "Subtitle": "HEY, WHAT DO YOU THINK ABOUT PAT BENATAR? GREAT IDEA. CAN SHE PLAY THE HARP?",
    "Human Translation": "‎- 팻 베나타 좋아해요? ‎- 하프 연주자를 바꾸자고요?"
  },
  {
    "Time": "31:30",
    "Subtitle": "WHOO! I KNEW IT! I KNEW IT! I KNEW IT! I FOUND IT! I FOUND IT!",
    "Human Translation": "‎그럴 줄 알았어! ‎드디어 찾았어!"
  },
  {
    "Time": "31:35",
    "Subtitle": "FOUND WHAT? HIS BILL!",
    "Human Translation": "‎- 뭘 찾아? ‎- 영수증을 찾았어"
  },
  {
    "Time": "31:36",
    "Subtitle": "WHAT ARE YOU TALKIN' ABOUT?",
    "Human Translation": "‎- 뭘 찾아? ‎- 영수증을 찾았어 ‎무슨 소리야?"
  },
  {
    "Time": "31:38",
    "Subtitle": "IT WASN'T THE RISOTTO. HE ORDERED THE WRONG WINE!",
    "Human Translation": "‎리조토가 아니라 포도주였어 ‎잘못된 포도주를 시켰다고"
  },
  {
    "Time": "31:41",
    "Subtitle": "OH. WELL, GREAT.",
    "Human Translation": "‎잘 됐네"
  },
  {
    "Time": "31:43",
    "Subtitle": "HE MENTIONED SOMETHING ABOUT A SUMMER TOMATO SALAD,",
    "Human Translation": "‎기사에는 여름 토마토 샐러드를 ‎언급했는데…"
  },
  {
    "Time": "31:45",
    "Subtitle": "WHICH I MADE ONCE IN THREE WEEKS BECAUSE JACKSON DECIDES",
    "Human Translation": "‎잭슨이 토마토 농장 주인하고 ‎대판 주먹질을 벌여서… ‎지난 3주간 딱 한 번 밖에 ‎만들지 않았어"
  },
  {
    "Time": "31:49",
    "Subtitle": "TO GET IN A FISTFIGHT WITH HIS TOMATO GROWER --",
    "Human Translation": "‎지난 3주간 딱 한 번 밖에 ‎만들지 않았어"
  },
  {
    "Time": "31:51",
    "Subtitle": "THAT'S A DIFFERENT STORY. YES. SAVE IT FOR CHRISTMAS TIME.",
    "Human Translation": "‎- 물론 그건 다른 얘기지 ‎- 그건 나중에 얘기하자"
  },
  {
    "Time": "31:54",
    "Subtitle": "BRIAN, THE WAITER, WORKED ONE SHIFT LAST WEEK",
    "Human Translation": "‎염소수염 브라이언은 ‎지난주에 딱 한 번 일 했는데…"
  },
  {
    "Time": "31:57",
    "Subtitle": "BECAUSE HIS GIRLFRIEND KICKED HIM OUT.",
    "Human Translation": "‎여자 친구에게 쫓겨나서 ‎이사를 갔대"
  },
  {
    "Time": "31:59",
    "Subtitle": "CELIA KICKED HIM OUT? HE DIDN'T WANT KIDS.",
    "Human Translation": "‎- 실리아가 찼어? ‎- 애가 싫다고 그랬대"
  },
  {
    "Time": "32:01",
    "Subtitle": "SHE KNEW THAT. WOMEN THINK THEY CAN CHANGE MEN.",
    "Human Translation": "‎- 동거할 때부터 알았잖아 ‎- 남잔 여자 하기 나름인 줄 믿었나 봐 ‎말도 안 돼"
  },
  {
    "Time": "32:05",
    "Subtitle": "I CHECKED THE DATES, NARROWED THE DAY DOWN,",
    "Human Translation": "‎그래서 날짜를 확인하고 ‎폭을 좁혀 나가다 보니까…"
  },
  {
    "Time": "32:08",
    "Subtitle": "AND FOUND A PARTY THAT HAD ORDERED PRACTICALLY EVERYTHING ON THE MENU, INCLUDING...",
    "Human Translation": "‎식당의 음식을 모조리 다 시킨 ‎파티가 있었다는 걸 알게 됐어"
  },
  {
    "Time": "32:11",
    "Subtitle": "THE MAGIC RISOTTO. YES, AND A RIESLING.",
    "Human Translation": "‎- 마법의 리조토까지 ‎- 리조토와 리슬링, 리슬링이라고!"
  },
  {
    "Time": "32:14",
    "Subtitle": "HA! A RIESLING. WHY NOT DRINK BATTERY ACID?",
    "Human Translation": "‎- 마법의 리조토까지 ‎- 리조토와 리슬링, 리슬링이라고! ‎차라리 배터리액을 마셔라?"
  },
  {
    "Time": "32:17",
    "Subtitle": "CHANGES THE ENTIRE FLAVOR OF THE DISH.",
    "Human Translation": "‎바로 그거야 ‎음식의 풍미가 달라진다고"
  },
  {
    "Time": "32:19",
    "Subtitle": "THE FACT THAT BRIAN SERVED IT",
    "Human Translation": "‎브라이언이…"
  },
  {
    "Time": "32:21",
    "Subtitle": "MAKES ME THINK CELIA IS BETTER OFF WITHOUT HIM.",
    "Human Translation": "‎서빙한 걸 보면 ‎실리아의 결정은 옳았어"
  },
  {
    "Time": "32:23",
    "Subtitle": "I'M SO GLAD, HON. OH!",
    "Human Translation": "‎다행이야"
  },
  {
    "Time": "32:27",
    "Subtitle": "OKAY. HERE ARE THE ZUCCHINI.",
    "Human Translation": "‎호박이 왔습니다"
  },
  {
    "Time": "32:32",
    "Subtitle": "TOO SMALL -- TAKE 'EM AWAY.",
    "Human Translation": "‎너무 작아, 다 가져가요"
  },
  {
    "Time": "32:37",
    "Subtitle": "OH, IT'S GOOD TO HAVE HER BACK, HUH? YEAH. YEAH.",
    "Human Translation": "‎- 활기를 되찾아서 기쁘죠? ‎- 물론이죠"
  },
  {
    "Time": "32:42",
    "Subtitle": "YOU'RE STILL GONNA HAVE TO PAY FOR THE ZUCCHINI.",
    "Human Translation": "‎그래도 호박 값은 주셔야 합니다"
  },
  {
    "Time": "32:45",
    "Subtitle": "THERE'S A MAN WITH A FUNNY ACCENT ON THE PHONE ASKING FOR YOU.",
    "Human Translation": "‎억양이 이상한 분으로부터 ‎전화가 와있습니다"
  },
  {
    "Time": "32:50",
    "Subtitle": "REALLY? DID YOU GUYS EXCHANGE THE SECRET HANDSHAKE?",
    "Human Translation": "‎둘이 친척이라도 되나요?"
  },
  {
    "Time": "32:56",
    "Subtitle": "LORELAI HERE.",
    "Human Translation": "‎로렐라이입니다"
  },
  {
    "Time": "32:58",
    "Subtitle": "RORY, WHAT HAPPENED?",
    "Human Translation": "‎로리, 무슨 일이야?"
  },
  {
    "Time": "33:00",
    "Subtitle": "I GOT HIT BY A DEER. YOU GOT WHAT?",
    "Human Translation": "‎- 사슴이 와서 부딪쳤어 ‎- 뭐가 어쨌다고?"
  },
  {
    "Time": "33:03",
    "Subtitle": "AND THEN I WAS LATE, AND THEY WOULDN'T LET ME TAKE THE TEST.",
    "Human Translation": "‎그래서 늦었는데 ‎시험을 못 보게 했어 ‎- 뭐? ‎- 시험을 못 보게 해서…"
  },
  {
    "Time": "33:07",
    "Subtitle": "OH, NO, YOU'RE KIDDING ME! MOM...",
    "Human Translation": "‎- 말도 안 돼 ‎- 엄마…"
  },
  {
    "Time": "33:09",
    "Subtitle": "NO, IT'S OKAY. JUST SIT RIGHT HERE. I'LL HANDLE THIS.",
    "Human Translation": "‎괜찮아, 여기 앉아 있어 ‎내가 해결할게"
  },
  {
    "Time": "33:21",
    "Subtitle": "EXCUSE ME. HELLO. MS. GILMORE, PLEASE COME IN.",
    "Human Translation": "‎실례합니다 ‎- 길모어 부인, 들어오세요 ‎- 감사합니다"
  },
  {
    "Time": "33:23",
    "Subtitle": "THANK YOU. HAVE A SEAT.",
    "Human Translation": "‎- 길모어 부인, 들어오세요 ‎- 감사합니다 ‎앉으시죠"
  },
  {
    "Time": "33:25",
    "Subtitle": "UM, I THINK THERE'S BEEN A TERRIBLE MISTAKE.",
    "Human Translation": "‎뭔가 오해가 있었나 봅니다"
  },
  {
    "Time": "33:29",
    "Subtitle": "RORY TOLD ME THAT SHE WASN'T ALLOWED TO TAKE HER TEST.",
    "Human Translation": "‎로리 말로는 시험을 ‎못 보게 했다던데요"
  },
  {
    "Time": "33:33",
    "Subtitle": "SHE WAS LATE. RIGHT. WELL.",
    "Human Translation": "‎- 지각했으니까요 ‎- 물론 알지만…"
  },
  {
    "Time": "33:35",
    "Subtitle": "SEE, THERE WERE CIRCUMSTANCES BEYOND HER CONTROL.",
    "Human Translation": "‎늦을 수밖에 없는 상황이었어요"
  },
  {
    "Time": "33:37",
    "Subtitle": "RORY IS NEVER LATE. SHE'S ANNOYINGLY ON TIME.",
    "Human Translation": "‎로리는 절대 지각하지 않아요 ‎시간 관념이 정말 철저하거든요"
  },
  {
    "Time": "33:40",
    "Subtitle": "I THINK IF YOU CHECKED YOUR RECORDS --",
    "Human Translation": "‎생활 기록을…"
  },
  {
    "Time": "33:42",
    "Subtitle": "PAST PERFORMANCE HAS NOTHING TO DO WITH TODAY.",
    "Human Translation": "‎오늘 아침의 사건은 ‎생활 기록과 상관없는 일입니다"
  },
  {
    "Time": "33:45",
    "Subtitle": "OKAY. BUT SHE WAS UP ALL NIGHT STUDYING.",
    "Human Translation": "‎네, 하지만 밤늦게까지 ‎공부를 했습니다"
  },
  {
    "Time": "33:48",
    "Subtitle": "I WAS THERE. SHE HAS A WITNESS.",
    "Human Translation": "‎제가 봐서 잘 압니다"
  },
  {
    "Time": "33:50",
    "Subtitle": "SHE'S NOT ON TRIAL. WELL, YOUR HONOR...",
    "Human Translation": "‎- 이건 재판이 아닙니다 ‎- 물론이죠, 재판장님…"
  },
  {
    "Time": "33:54",
    "Subtitle": "JUST A LITTLE TRIAL HUMOR. THAT WON'T HAPPEN AGAIN.",
    "Human Translation": "‎농담이에요 ‎농담은 그만 할게요"
  },
  {
    "Time": "33:57",
    "Subtitle": "UM, SEE, SHE GOT UP LATE. SHE BROKE HER NECK TO GET HERE.",
    "Human Translation": "‎늦잠을 자는 바람에 ‎부리나케 달려온 겁니다"
  },
  {
    "Time": "34:00",
    "Subtitle": "WE DON'T LIVE LOCALLY -- THE DOG ATE MY HOMEWORK.",
    "Human Translation": "‎집이 좀 먼 편이라… ‎- 개가 숙제를 먹었습니다 ‎- 네?"
  },
  {
    "Time": "34:03",
    "Subtitle": "MY COMPUTER CRASHED, AND I LOST MY MIDTERM.",
    "Human Translation": "‎컴퓨터가 멈추는 바람에 ‎과제를 날려버렸습니다"
  },
  {
    "Time": "34:06",
    "Subtitle": "I WASN'T MAKING EXCUSES.",
    "Human Translation": "‎핑계가 아닙니다"
  },
  {
    "Time": "34:07",
    "Subtitle": "MY GRANDMOTHER AND FIRST COUSIN DIED.",
    "Human Translation": "‎할머니와 사촌이 돌아가셨어요"
  },
  {
    "Time": "34:09",
    "Subtitle": "MY SISTER TOOK MY REPORT TO SCHOOL.",
    "Human Translation": "‎제 동생이 자기 숙제 대신 ‎제 숙제를 가지고 갔어요"
  },
  {
    "Time": "34:12",
    "Subtitle": "MY RELIGION PROHIBITS STUDYING AFTER SUNDOWN.",
    "Human Translation": "‎종교상의 이유로 해가 지면 ‎공부를 하지 않습니다"
  },
  {
    "Time": "34:14",
    "Subtitle": "I WENT BLIND LAST NIGHT, BUT I'M FINE NOW.",
    "Human Translation": "‎지난밤 눈이 멀었지만 ‎지금은 말짱합니다"
  },
  {
    "Time": "34:18",
    "Subtitle": "THAT'S NOT RORY. MISS GILMORE, RULES ARE RULES.",
    "Human Translation": "‎로리는 아니에요 ‎규정은 규정입니다"
  },
  {
    "Time": "34:22",
    "Subtitle": "WHEN YOU'RE LATE, YOU FORFEIT THE RIGHT TO TAKE THE TEST.",
    "Human Translation": "‎지각을 했다면 ‎시험을 볼 자격을 상실하게 됩니다"
  },
  {
    "Time": "34:25",
    "Subtitle": "WHERE ARE YOU GOING? WHERE IS HE GOING?",
    "Human Translation": "‎어디 가십니까? ‎지금 어디 가시는 거죠?"
  },
  {
    "Time": "34:28",
    "Subtitle": "LORELAI, IF I COULD DO ANYTHING, I WOULD.",
    "Human Translation": "‎제가 도와드릴 수 있다면 ‎도와드리겠지만, 이건 아닙니다"
  },
  {
    "Time": "34:31",
    "Subtitle": "YOU COULD LET HER TAKE THE TEST.",
    "Human Translation": "‎- 시험을 보게 해 주세요 ‎- 불가능합니다"
  },
  {
    "Time": "34:32",
    "Subtitle": "I CAN'T. THAT'S NOT FAIR.",
    "Human Translation": "‎- 시험을 보게 해 주세요 ‎- 불가능합니다 ‎불공평해요"
  },
  {
    "Time": "34:34",
    "Subtitle": "WE'RE NOT HERE TO BE FAIR. WE'RE HERE TO EDUCATE.",
    "Human Translation": "‎우리 학교는 공평이 아니라 ‎교육을 지향합니다"
  },
  {
    "Time": "34:37",
    "Subtitle": "YES, AND I'M ASKING YOU TO PLEASE EDUCATE MY KID.",
    "Human Translation": "‎알아요, 그래서 제 딸을 ‎가르쳐 달라고 하는 겁니다"
  },
  {
    "Time": "34:40",
    "Subtitle": "WE WILL WHEN SHE'S ON TIME.",
    "Human Translation": "‎제시간에 온다면 가르치겠습니다"
  },
  {
    "Time": "34:43",
    "Subtitle": "HAVE A NICE DAY.",
    "Human Translation": "‎안녕히 가십시오"
  },
  {
    "Time": "34:45",
    "Subtitle": "ARE YOU HOLDING THAT DOOR FOR A REASON?",
    "Human Translation": "‎대체 무슨 이유로 ‎문을 여신 거죠?"
  },
  {
    "Time": "34:47",
    "Subtitle": "OUR MEETING IS OVER. LIKE HELL IT IS.",
    "Human Translation": "‎- 면담은 끝났습니다 ‎- 끝나기는 무슨"
  },
  {
    "Time": "34:50",
    "Subtitle": "DO YOU HAVE ANY IDEA WHAT WE HAVE GONE THROUGH THIS WEEK?",
    "Human Translation": "‎우리가 지난주 내내 ‎어떻게 보냈는지 아세요?"
  },
  {
    "Time": "34:54",
    "Subtitle": "WE HAVE BEEN UP ALL NIGHT EVERY NIGHT STUDYING.",
    "Human Translation": "‎매일 밤을 새워 가며 공부했어요 ‎잠도 못 잤어요"
  },
  {
    "Time": "34:57",
    "Subtitle": "WE HAVEN'T SLEPT. WE HAVEN'T TALKED ABOUT ANYTHING ELSE",
    "Human Translation": "‎매일 밤을 새워 가며 공부했어요 ‎잠도 못 잤어요 ‎일주일 내내 시험 얘기를 빼면…"
  },
  {
    "Time": "34:59",
    "Subtitle": "EXCEPT THIS SCHOOL AND THIS TEST FOR SEVEN DAYS.",
    "Human Translation": "‎다른 얘기는 꺼내지도 못했다고요"
  },
  {
    "Time": "35:02",
    "Subtitle": "WE HAVE STRETCHED OURSELVES AS THIN AS HUMANLY POSSIBLE",
    "Human Translation": "‎인간이 발휘할 수 있는 ‎최대한의 능력을 발휘해…"
  },
  {
    "Time": "35:05",
    "Subtitle": "WITHOUT GOING COMPLETELY POSTAL. MY GOD! WE'RE JUST ONE PERSON!",
    "Human Translation": "‎돌아 버리기 일보 직전까지 갔었어요 ‎일심동체로 준비했다고요!"
  },
  {
    "Time": "35:09",
    "Subtitle": "WHY DON'T WE NARROW OUR CONVERSATION DOWN TO RORY?",
    "Human Translation": "‎이야기의 주제를 로리에게 ‎한정시키면 안 되겠습니까?"
  },
  {
    "Time": "35:12",
    "Subtitle": "OKAY. WHY DON'T WE?",
    "Human Translation": "‎좋아요, 그러죠"
  },
  {
    "Time": "35:14",
    "Subtitle": "YOU SIT HERE IN YOUR SNOTTY LITTLE SCHOOL",
    "Human Translation": "‎당신들은 별 볼 일 없는 학교에…"
  },
  {
    "Time": "35:16",
    "Subtitle": "THAT'S IN DESPERATE NEED OF EXTRA HEATING VENTS,",
    "Human Translation": "‎오만하게 자리를 잡고 앉아서…"
  },
  {
    "Time": "35:18",
    "Subtitle": "AND YOU NURTURE HORRIBLE KIDS WHO TREAT EACH OTHER LIKE MORTAL ENEMIES.",
    "Human Translation": "‎아이들을 서로의 적으로 ‎만들어 놓고 있잖아요"
  },
  {
    "Time": "35:21",
    "Subtitle": "YOU SET IMPOSSIBLE STANDARDS",
    "Human Translation": "‎불가능한 학칙을 내세워…"
  },
  {
    "Time": "35:23",
    "Subtitle": "THAT MAKE NORMAL PEOPLE FEEL LESS THAN EVERYBODY,",
    "Human Translation": "‎평범한 학생들이 스스로 ‎자괴감을 갖게 하고 있어요"
  },
  {
    "Time": "35:25",
    "Subtitle": "AND YOU TAKE A GREAT KID LIKE RORY AND TEAR HER APART!",
    "Human Translation": "‎평범한 학생들이 스스로 ‎자괴감을 갖게 하고 있어요 ‎로리처럼 훌륭한 학생을 ‎이렇게 만들다니요!"
  },
  {
    "Time": "35:28",
    "Subtitle": "I DON'T THINK THAT'S COMPLETELY FAIR.",
    "Human Translation": "‎말씀이 지나치신 것 같습니다"
  },
  {
    "Time": "35:29",
    "Subtitle": "YOU SAY SHE'S SMART AND SHE'LL DO FINE",
    "Human Translation": "‎당신도 로리가 ‎잘 해낼 거라고 말했어요"
  },
  {
    "Time": "35:32",
    "Subtitle": "THIS ROTTING, STODGY RAT-HOLE COULD USE SOMEBODY LIKE HER,",
    "Human Translation": "‎이따위 썩은 쥐구멍에 ‎필요한 학생이라고 했잖아요"
  },
  {
    "Time": "35:35",
    "Subtitle": "AND THEN YOU SHUT HER OUT OF A TEST SHE'S CRAMMED FOR",
    "Human Translation": "‎그런데 로리가 마땅히 치러야 할 ‎시험을 보지도 못하게…"
  },
  {
    "Time": "35:38",
    "Subtitle": "THAT SHE COMPLETELY DESERVES TO TAKE!",
    "Human Translation": "‎기회를 빼앗아 갔잖아요!"
  },
  {
    "Time": "35:40",
    "Subtitle": "I DIDN'T CALL THIS PLACE A RAT-HOLE. THAT'S TRUE. I ADDED THAT.",
    "Human Translation": "‎- 난 쥐구멍이라고 한 적 없어요 ‎- 맞아요, 내가 붙인 말이에요"
  },
  {
    "Time": "35:44",
    "Subtitle": "WOULDN'T WANT YOU TO GET IN TROUBLE WITH IL DUCE.",
    "Human Translation": "‎저기 서있는 무솔리니의 신경을 ‎건들긴 싫은가 보죠?"
  },
  {
    "Time": "35:46",
    "Subtitle": "I THOUGHT THIS PLACE WAS GONNA BE SO GREAT,",
    "Human Translation": "‎난 여기가 좋은 학교라고 생각했어요"
  },
  {
    "Time": "35:49",
    "Subtitle": "AND NOW THIS GOES ON THE \"BOY, WAS I WRONG\" LIST --",
    "Human Translation": "‎하지만 외형만 중시하고 ‎내면은 부족한…"
  },
  {
    "Time": "35:51",
    "Subtitle": "RIGHT ABOVE GAUCHOS BUT JUST BELOW THE \"FLASHDANCE\" PHASE.",
    "Human Translation": "‎‘생각 잘못했군’ 목록에 ‎오를 만한 곳이로군요"
  },
  {
    "Time": "35:54",
    "Subtitle": "MY GOODNESS. YOU DO LIKE TO THROW FITS IN YOUR FAMILY.",
    "Human Translation": "‎부인 가족은 정말 ‎흥분을 잘하시는군요"
  },
  {
    "Time": "35:57",
    "Subtitle": "WHAT ARE YOU TALKING ABOUT?",
    "Human Translation": "‎무슨 말이죠?"
  },
  {
    "Time": "35:58",
    "Subtitle": "YOUR DAUGHTER THREW A SIMILAR IF NOT AS MANIC FIT OF HER OWN THIS MORNING.",
    "Human Translation": "‎부인 따님도 오늘 아침 ‎똑같은 행동을 했습니다"
  },
  {
    "Time": "36:02",
    "Subtitle": "OH, PLEASE. RORY DOESN'T THROW FITS.",
    "Human Translation": "‎로리는 흥분하지 않아요"
  },
  {
    "Time": "36:05",
    "Subtitle": "SHE'S THE MOST EVEN-TEMPERED PERSON I KNOW.",
    "Human Translation": "‎제가 아는 한 ‎가장 이성적인 아이라고요"
  },
  {
    "Time": "36:07",
    "Subtitle": "WELL, THEN, SHE DID A LOVELY IMPRESSION OF YOU.",
    "Human Translation": "‎그렇다면, 부인을 꼭 빼다 박은 ‎모양이로군요"
  },
  {
    "Time": "36:09",
    "Subtitle": "MS. GILMORE, EVERYTHING YOU SAID IN YOUR RANT WAS ABSOLUTELY TRUE --",
    "Human Translation": "‎부인께서 고함치며 말씀하신 내용은 ‎물론 화려한 미사여구를 제외한다면…"
  },
  {
    "Time": "36:14",
    "Subtitle": "WITHOUT THE COLORFUL EMBELLISHMENTS.",
    "Human Translation": "‎지극히 옳으신 말씀입니다"
  },
  {
    "Time": "36:16",
    "Subtitle": "WE DO SET IMPOSSIBLE STANDARDS,",
    "Human Translation": "‎우리는 불가능한 기준을 제시하고…"
  },
  {
    "Time": "36:18",
    "Subtitle": "AND SUCH STANDARDS DO FOSTER HIGHLY COMPETITIVE CHILDREN.",
    "Human Translation": "‎그런 불가능한 기준이 최고로 ‎유능한 학생을 양성하는 법입니다"
  },
  {
    "Time": "36:21",
    "Subtitle": "HOWEVER, THAT IS LIFE, AND THAT IS CHILTON.",
    "Human Translation": "‎하지만 그게 인생이고, 칠튼입니다"
  },
  {
    "Time": "36:25",
    "Subtitle": "RULES CAN CHANGE. YOU CAN CHANGE THEM.",
    "Human Translation": "‎규칙은 바꾸라고 있는 겁니다 ‎바꿔 보세요"
  },
  {
    "Time": "36:27",
    "Subtitle": "I TOLD YOUR DAUGHTER THAT THIS PLACE WAS NOT FOR EVERYONE",
    "Human Translation": "‎따님이 이 학교에 왔을 때 ‎이 학교가 따님 자신에게…"
  },
  {
    "Time": "36:31",
    "Subtitle": "AND MIGHT NOT BE FOR HER. I WILL NOW TELL YOU THE SAME THING.",
    "Human Translation": "‎맞지 않을 수 있다고 말했습니다 ‎지금 다시 한 번 더 말씀드리죠"
  },
  {
    "Time": "36:34",
    "Subtitle": "SHE DOESN'T HAVE TO BE HERE.",
    "Human Translation": "‎다니지 않아도 상관없습니다"
  },
  {
    "Time": "36:36",
    "Subtitle": "SHE DOESN'T HAVE TO GO TO HARVARD.",
    "Human Translation": "‎하버드에 꼭 가야 할 이유도 없어요 ‎가지 말아야 하는지도 모르죠"
  },
  {
    "Time": "36:39",
    "Subtitle": "IF SHE CAN'T HANDLE THE PRESSURE, SHE SHOULD LEAVE.",
    "Human Translation": "‎그런 중압감을 견딜 수 없다면 ‎학교를 떠나면 됩니다"
  },
  {
    "Time": "36:42",
    "Subtitle": "TAKE YOUR DAUGHTER HOME NOW AND DECIDE WHAT IT IS YOU INTEND TO DO.",
    "Human Translation": "‎그러니 제발 따님과 함께 집에 가셔서 ‎어떻게 할 건지 심사숙고해 보십시오"
  },
  {
    "Time": "36:47",
    "Subtitle": "HOWEVER, ANOTHER OUTBURST LIKE THIS FROM EITHER OF YOU",
    "Human Translation": "‎앞으로 두 사람 중 하나라도 ‎이런 일을 다시 일으키는 경우…"
  },
  {
    "Time": "36:50",
    "Subtitle": "WILL NOT BE ON THE OPTIONS LIST.",
    "Human Translation": "‎묵과하지 않겠습니다"
  },
  {
    "Time": "36:52",
    "Subtitle": "THANK YOU FOR COMING IN.",
    "Human Translation": "‎와 주셔서 감사했습니다"
  },
  {
    "Time": "36:55",
    "Subtitle": "THAT WILL BE ALL.",
    "Human Translation": "‎할 말은 여기까집니다"
  },
  {
    "Time": "37:04",
    "Subtitle": "YOU GOT HIT BY A DEER?",
    "Human Translation": "‎사슴이 와서 부딪쳤다고?"
  },
  {
    "Time": "37:10",
    "Subtitle": "YOU DID. YOU GOT HIT BY A DEER.",
    "Human Translation": "‎그러네, 사슴이 와서 부딪쳤네"
  },
  {
    "Time": "37:12",
    "Subtitle": "IT JUST CAME OUT OF NOWHERE.",
    "Human Translation": "‎갑자기 나타났어"
  },
  {
    "Time": "37:14",
    "Subtitle": "YOU COULDN'T JUST RUN INTO A WALL LIKE OTHER KIDS?",
    "Human Translation": "‎너도 다른 애들처럼 ‎벽이나 들이받으면 안 될까?"
  },
  {
    "Time": "37:17",
    "Subtitle": "CAN WE JUST GO HOME, PLEASE? YEAH, SURE. JUMP IN.",
    "Human Translation": "‎- 집에나 가자, 응? ‎- 그래, 올라타"
  },
  {
    "Time": "37:30",
    "Subtitle": "Man: MAY I HELP YOU?",
    "Human Translation": "‎- 도와드릴 일이라도? ‎- 네"
  },
  {
    "Time": "37:32",
    "Subtitle": "YES. HELLO. MY NAME IS SOOKIE ST. JAMES.",
    "Human Translation": "‎- 도와드릴 일이라도? ‎- 네 ‎안녕하세요, 전 수키 제임스예요 ‎인디펜던트 모텔의 주방장입니다"
  },
  {
    "Time": "37:35",
    "Subtitle": "I'M THE CHEF AT THE INDEPENDENCE INN.",
    "Human Translation": "‎안녕하세요, 전 수키 제임스예요 ‎인디펜던트 모텔의 주방장입니다"
  },
  {
    "Time": "37:37",
    "Subtitle": "I KNOW WHO YOU ARE. YOU DO?",
    "Human Translation": "‎- 누구신지 잘 압니다 ‎- 그러세요?"
  },
  {
    "Time": "37:40",
    "Subtitle": "WELL, I'M FLATTERED. YOU WRITE ABOUT A LOT OF CHEFS --",
    "Human Translation": "‎기분은 좋네요 ‎주방장들에 대해서 기사를 많이…"
  },
  {
    "Time": "37:44",
    "Subtitle": "WHAT ARE YOU DOING HERE? RIGHT.",
    "Human Translation": "‎- 여긴 무슨 일로 오셨죠? ‎- 그게"
  },
  {
    "Time": "37:46",
    "Subtitle": "WELL, I KNOW THAT THIS IS A TERRIBLE INTRUSION, BUT --",
    "Human Translation": "‎이렇게 불쑥 찾아와서 ‎정말 죄송스럽지만…"
  },
  {
    "Time": "37:50",
    "Subtitle": "ARE YOU COOKING? I'M MAKING CHICKEN.",
    "Human Translation": "‎- 요리 중이신가요? ‎- 닭 요리를 하는 중입니다"
  },
  {
    "Time": "37:52",
    "Subtitle": "YOU USED TOO MUCH SALT.",
    "Human Translation": "‎- 소금을 너무 많이 넣으셨네요 ‎- 아닙니다"
  },
  {
    "Time": "37:54",
    "Subtitle": "I DID NOT. IT SMELLS SALTY.",
    "Human Translation": "‎- 소금을 너무 많이 넣으셨네요 ‎- 아닙니다 ‎소금 냄새가 나요"
  },
  {
    "Time": "37:56",
    "Subtitle": "I'M CLOSING THE DOOR NOW. NO, WAIT!",
    "Human Translation": "‎- 문 닫겠습니다 ‎- 잠깐만요"
  },
  {
    "Time": "37:58",
    "Subtitle": "I FOUND OUT YOUR ADDRESS FROM MY NETWORK OF CULINARY FRIENDS --",
    "Human Translation": "‎제가 아는 주방장들을 총동원해서 ‎선생님 댁 주소를 알아냈어요"
  },
  {
    "Time": "38:01",
    "Subtitle": "THIS IS REALLY INAPPROPRIATE. I GAVE YOU A GOOD REVIEW.",
    "Human Translation": "‎정말 불편하군요 ‎전 평을 잘 써드렸습니다"
  },
  {
    "Time": "38:04",
    "Subtitle": "I SUGGEST YOU GO HOME.",
    "Human Translation": "‎어서 돌아가세요"
  },
  {
    "Time": "38:06",
    "Subtitle": "I DON'T CARE ABOUT THE REVIEW.",
    "Human Translation": "‎글에 불만이 있는 게 아니라, 단지… ‎이 요리를 이 포도주와 함께…"
  },
  {
    "Time": "38:09",
    "Subtitle": "I JUST WANT YOU TO TRY THIS DISH...",
    "Human Translation": "‎이 요리를 이 포도주와 함께…"
  },
  {
    "Time": "38:12",
    "Subtitle": "WITH THIS WINE...",
    "Human Translation": "‎드셔 보세요"
  },
  {
    "Time": "38:15",
    "Subtitle": "AND I'LL WAIT.",
    "Human Translation": "‎기다릴게요"
  },
  {
    "Time": "38:22",
    "Subtitle": "QUITE A DAY, HUH? I DON'T WANT TO TALK --",
    "Human Translation": "‎- 대단한 하루였지? ‎- 말하고 싶지 않아"
  },
  {
    "Time": "38:25",
    "Subtitle": "PLEASE. OKAY.",
    "Human Translation": "‎- 대단한 하루였지? ‎- 말하고 싶지 않아 ‎좋아"
  },
  {
    "Time": "38:28",
    "Subtitle": "YOU KNOW, I JUST THINK THAT WE SHOULD TALK ABOUT IT.",
    "Human Translation": "‎그래도 대화를 좀 해야 할 것 같은데"
  },
  {
    "Time": "38:30",
    "Subtitle": "STOP THE CAR. HERE -- STOP HERE!",
    "Human Translation": "‎- 차 세워 ‎- 왜? ‎여기, 여기 세워"
  },
  {
    "Time": "38:34",
    "Subtitle": "YOU'RE JUST FEELING LIKE AN IMPROMPTU NATURE WALK?",
    "Human Translation": "‎갑자기 숲 속을 산책하고 싶어서 그래?"
  },
  {
    "Time": "38:36",
    "Subtitle": "I WANNA SEE IF IT'S ALRIGHT. IF WHAT'S ALRIGHT?",
    "Human Translation": "‎무사한지 확인하려고 ‎- 뭐가 무사하다고? ‎- 사슴"
  },
  {
    "Time": "38:39",
    "Subtitle": "THE DEER.",
    "Human Translation": "‎- 뭐가 무사하다고? ‎- 사슴"
  },
  {
    "Time": "38:40",
    "Subtitle": "SWEETIE, YOU'RE NEVER GONNA FIND THE DEER!",
    "Human Translation": "‎- 사슴을 어떻게 찾아? ‎- 그래도 찾아볼 거야"
  },
  {
    "Time": "38:42",
    "Subtitle": "I'M GONNA TRY. I'M IN HEELS.",
    "Human Translation": "‎- 사슴을 어떻게 찾아? ‎- 그래도 찾아볼 거야 ‎- 난 하이힐 신었어 ‎- 차에서 기다려"
  },
  {
    "Time": "38:43",
    "Subtitle": "STAY IN THE CAR.",
    "Human Translation": "‎- 난 하이힐 신었어 ‎- 차에서 기다려"
  },
  {
    "Time": "38:45",
    "Subtitle": "IT'S DANGEROUS IN THE CAR WITH ALL THE KAMIKAZE DEER AROUND.",
    "Human Translation": "‎가미가제 사슴들이 돌아다니는데 ‎차에 있으면 위험하잖아"
  },
  {
    "Time": "38:48",
    "Subtitle": "I HAVE TO FIND IT.",
    "Human Translation": "‎그래도 찾아봐야 해"
  },
  {
    "Time": "38:50",
    "Subtitle": "ALRIGHT. WAIT UP!",
    "Human Translation": "‎알았어, 같이 가!"
  },
  {
    "Time": "38:53",
    "Subtitle": "SO WHAT DOES THE DEER LOOK LIKE?",
    "Human Translation": "‎어떻게 생긴 사슴이었어?"
  },
  {
    "Time": "38:55",
    "Subtitle": "DOES HE HAVE ANY DISTINGUISHING MARKS --",
    "Human Translation": "‎이마에 ‘지프’ 라고 찍힌 자국 말고…"
  },
  {
    "Time": "38:57",
    "Subtitle": "BESIDES THE WORD \"JEEP\" IMPRINTED ON HIS FOREHEAD?",
    "Human Translation": "‎다른 특징 같은 거 없어?"
  },
  {
    "Time": "39:00",
    "Subtitle": "HE'S JUST A DEER.",
    "Human Translation": "‎그냥 사슴이야"
  },
  {
    "Time": "39:04",
    "Subtitle": "SO I HAD A NICE CHAT WITH HEADMASTER CHARLESTON.",
    "Human Translation": "‎오늘 찰스턴 교장 선생님과 ‎면담을 나눴어"
  },
  {
    "Time": "39:07",
    "Subtitle": "HE SAID YOU WENT BALLISTIC IN CLASS.",
    "Human Translation": "‎네가 시험 시간에 난동을 피웠다더라"
  },
  {
    "Time": "39:10",
    "Subtitle": "I WAS JUST TIRED.",
    "Human Translation": "‎피곤했을 뿐이야"
  },
  {
    "Time": "39:11",
    "Subtitle": "YOU WOULDN'T HAVE BEEN TIRED IF YOU HADN'T BEEN KILLING YOURSELF ALL WEEK.",
    "Human Translation": "‎일주일 내내 무리만 하지 않았어도 ‎그렇게 피곤하진 않았을 거야"
  },
  {
    "Time": "39:15",
    "Subtitle": "I WAS STUDYING. I DIDN'T HAVE A CHOICE.",
    "Human Translation": "‎공부했잖아 ‎선택의 여지가 없었어"
  },
  {
    "Time": "39:17",
    "Subtitle": "MAYBE YOU SHOULDN'T BE STUDYING THAT HARD.",
    "Human Translation": "‎그렇게 열심히 공부할 ‎필요가 있는지 모르겠다"
  },
  {
    "Time": "39:19",
    "Subtitle": "WHAT ARE YOU TALKING ABOUT? YOU'RE 16.",
    "Human Translation": "‎- 무슨 소리야? ‎- 넌 이제 16살이야"
  },
  {
    "Time": "39:21",
    "Subtitle": "YOU SHOULD GET SOME SLEEP AND EAT A REAL MEAL",
    "Human Translation": "‎넌 잠을 잘 자고 ‎제대로 된 음식을 먹으며…"
  },
  {
    "Time": "39:24",
    "Subtitle": "AND COME UP FOR AIR ONCE IN A WHILE.",
    "Human Translation": "‎가끔 바깥 공기도 쐬야 할 나이야"
  },
  {
    "Time": "39:27",
    "Subtitle": "THEY KICKED ME OUT. OF COURSE NOT. THEY LOVE YOU.",
    "Human Translation": "‎나 퇴학당했어? ‎아냐, 절대 아니야 ‎걱정돼서 하는 소리야"
  },
  {
    "Time": "39:30",
    "Subtitle": "THIS IS COMING FROM ME.",
    "Human Translation": "‎아냐, 절대 아니야 ‎걱정돼서 하는 소리야"
  },
  {
    "Time": "39:32",
    "Subtitle": "ARE YOU SAYING I SHOULD QUIT?",
    "Human Translation": "‎그럼 그만두라고? ‎그러니까, 다시 레인과 함께 ‎이전 학교로 돌아가고 싶다 해도…"
  },
  {
    "Time": "39:34",
    "Subtitle": "IF YOU WANTED TO GO BACK TO YOUR OTHER SCHOOL,",
    "Human Translation": "‎그러니까, 다시 레인과 함께 ‎이전 학교로 돌아가고 싶다 해도…"
  },
  {
    "Time": "39:37",
    "Subtitle": "THAT WOULD BE FINE WITH ME.",
    "Human Translation": "‎난 상관하지 않겠다는 말이야"
  },
  {
    "Time": "39:38",
    "Subtitle": "YOU DON'T THINK I CAN DO IT.",
    "Human Translation": "‎- 날 못 믿는구나 ‎- 그게 아니란 거 너도 알잖아"
  },
  {
    "Time": "39:40",
    "Subtitle": "THAT'S NOT TRUE. I THINK YOU CAN DO ANYTHING.",
    "Human Translation": "‎- 날 못 믿는구나 ‎- 그게 아니란 거 너도 알잖아 ‎넌 뭐든지 다 할 수 있어 ‎하지만 학교에서 화내지는 마"
  },
  {
    "Time": "39:43",
    "Subtitle": "BUT YOU DON'T LOSE IT IN CLASS.",
    "Human Translation": "‎넌 뭐든지 다 할 수 있어 ‎하지만 학교에서 화내지는 마"
  },
  {
    "Time": "39:44",
    "Subtitle": "THAT'S NOT PART OF THE RORY PERSONALITY.",
    "Human Translation": "‎그런 건 내가 아는 ‎로리의 모습이 아니야"
  },
  {
    "Time": "39:47",
    "Subtitle": "IF YOU'RE LOSING IT IN CLASS BECAUSE YOU'RE TIRED",
    "Human Translation": "‎만약 피곤하고 지쳐서… ‎아니면 너무 힘들어서 ‎학교에서 화를 내는 거라면…"
  },
  {
    "Time": "39:49",
    "Subtitle": "OR STRESSED OUT OR WORKING TOO HARD,",
    "Human Translation": "‎아니면 너무 힘들어서 ‎학교에서 화를 내는 거라면…"
  },
  {
    "Time": "39:51",
    "Subtitle": "I'M WORRIED ABOUT THAT. I HAVE TO BE.",
    "Human Translation": "‎난 걱정할 수밖에 없어"
  },
  {
    "Time": "39:54",
    "Subtitle": "I LOST IT ONCE. OKAY. FINE.",
    "Human Translation": "‎- 딱 한 번이잖아 ‎- 그럼 됐어"
  },
  {
    "Time": "40:00",
    "Subtitle": "IT'S JUST I CAN'T REMEMBER A TIME",
    "Human Translation": "‎단지 네가 스스로 하버드에…"
  },
  {
    "Time": "40:03",
    "Subtitle": "WHEN WE WEREN'T TALKING ABOUT YOU GOING TO HARVARD.",
    "Human Translation": "‎가겠다는 말을 한 적이 ‎없었던 것 같아서 그래"
  },
  {
    "Time": "40:05",
    "Subtitle": "IT WAS JUST A GIVEN. THAT WAS WHAT WE WERE WORKING FOR.",
    "Human Translation": "‎당연하다고 생각한 거야 ‎그래서 여기까지 온 거잖아"
  },
  {
    "Time": "40:09",
    "Subtitle": "EVERYTHING WENT IN THAT DIRECTION. I KNOW.",
    "Human Translation": "‎- 그 목표를 위해서 여기까지 왔어 ‎- 나도 알아"
  },
  {
    "Time": "40:11",
    "Subtitle": "AND I'M FORGETTING WHERE THAT ALL STARTED.",
    "Human Translation": "‎누구의 생각이었는지 ‎다 잊어버렸어"
  },
  {
    "Time": "40:14",
    "Subtitle": "WHAT ARE YOU TALKING ABOUT?",
    "Human Translation": "‎- 무슨 소리야? ‎- 내 말은…"
  },
  {
    "Time": "40:16",
    "Subtitle": "I'M TALKING ABOUT DID IT START WITH ME",
    "Human Translation": "‎- 무슨 소리야? ‎- 내 말은… ‎하버드에 가고 싶다는 건 ‎너였니? 나였니?"
  },
  {
    "Time": "40:18",
    "Subtitle": "OR DID IT START WITH YOU?",
    "Human Translation": "‎하버드에 가고 싶다는 건 ‎너였니? 나였니?"
  },
  {
    "Time": "40:20",
    "Subtitle": "WAS IT MY DREAM THAT YOU WENT TO HARVARD? MOM.",
    "Human Translation": "‎하버드 진학이 내 희망이었니? ‎엄마"
  },
  {
    "Time": "40:23",
    "Subtitle": "BECAUSE I NEVER GOT TO DO THE BIG, FANCY COLLEGE THING?",
    "Human Translation": "‎물론 나야 그렇게 좋은 대학교를 ‎졸업하지 못했으니까"
  },
  {
    "Time": "40:27",
    "Subtitle": "MAYBE ALL THIS TIME I'M THINKING IT'S ALL FOR RORY",
    "Human Translation": "‎난 지금까지 로리 네가 ‎원했던 거라고 생각했는데…"
  },
  {
    "Time": "40:30",
    "Subtitle": "WHEN REALLY IT WASN'T. I'M NOT DOING THIS BECAUSE OF YOU.",
    "Human Translation": "‎그게 아니었는지도 몰라 ‎- 엄마 때문에 그러는 게 아니야 ‎- 만약 그렇다면 안 그래도 돼"
  },
  {
    "Time": "40:34",
    "Subtitle": "IF YOU ARE, YOU DON'T HAVE TO.",
    "Human Translation": "‎- 엄마 때문에 그러는 게 아니야 ‎- 만약 그렇다면 안 그래도 돼 ‎- 알아 ‎- 난 네가 나중에…"
  },
  {
    "Time": "40:36",
    "Subtitle": "I'LL STILL LOVE YOU. EVEN IF YOU CAN'T SUPPORT ME IN MY OLD AGE",
    "Human Translation": "‎- 알아 ‎- 난 네가 나중에… ‎지금 내가 꿈꾸고 있는 것처럼…"
  },
  {
    "Time": "40:40",
    "Subtitle": "IN THE FABULOUS MANNER WHICH I PLAN ON GROWING ACCUSTOMED.",
    "Human Translation": "‎날 화려하게 모시지 않아도 ‎널 사랑할 거야"
  },
  {
    "Time": "40:42",
    "Subtitle": "I'LL REMEMBER THAT SELFLESS GESTURE. THANK YOU.",
    "Human Translation": "‎그 이기적인 위안은 기억할게 ‎고마워"
  },
  {
    "Time": "40:45",
    "Subtitle": "I JUST WANT YOU TO BE HAPPY. I AM.",
    "Human Translation": "‎- 난 네가 행복하기를 원해 ‎- 나도 그래"
  },
  {
    "Time": "40:48",
    "Subtitle": "NO, I WANT YOU TO BE \"DANCING THROUGH THE WOODS, CRAZY\" HAPPY.",
    "Human Translation": "‎아니, 난 네가… ‎숲 속을 뛰어다닐 만큼 행복하길 원해"
  },
  {
    "Time": "40:52",
    "Subtitle": "IF HARVARD AND CHILTON IS NOT GONNA DO THAT FOR YOU,",
    "Human Translation": "‎하버드와 칠튼에서 ‎행복을 찾을 수 없을 것 같다면…"
  },
  {
    "Time": "40:55",
    "Subtitle": "THEN FORGET ABOUT THEM.",
    "Human Translation": "‎가차 없이 포기해"
  },
  {
    "Time": "40:57",
    "Subtitle": "I WAS JUST BEHIND. I NEVER CAUGHT UP ON THE READING.",
    "Human Translation": "‎단지 뒤처진 것뿐이야 ‎시험 범위를 다 못 읽어서 그랬어 ‎그래서 D를 받은 거야"
  },
  {
    "Time": "41:00",
    "Subtitle": "THAT'S WHY I GOT A \"D.\"",
    "Human Translation": "‎시험 범위를 다 못 읽어서 그랬어 ‎그래서 D를 받은 거야"
  },
  {
    "Time": "41:02",
    "Subtitle": "I CAN CATCH UP. I WILL CATCH UP. WHEN I DO, EVERYTHING WILL BE FINE.",
    "Human Translation": "‎따라잡을 수 있고 또 그럴 거야 ‎그럼 다 괜찮아질 거야"
  },
  {
    "Time": "41:08",
    "Subtitle": "NO. HARVARD IS MY DREAM.",
    "Human Translation": "‎하버드는 내 꿈이야"
  },
  {
    "Time": "41:10",
    "Subtitle": "I WANT IT MORE THAN ANYTHING. I SWEAR.",
    "Human Translation": "‎- 그 무엇보다도 간절히 원해 ‎- 알았어, 하지만…"
  },
  {
    "Time": "41:13",
    "Subtitle": "YEAH, BUT -- I APPRECIATE ALL THAT YOU'RE SAYING.",
    "Human Translation": "‎- 그 무엇보다도 간절히 원해 ‎- 알았어, 하지만… ‎엄마의 마음도 잘 알았어, 고마워"
  },
  {
    "Time": "41:16",
    "Subtitle": "BUT I'M NOT READY TO GIVE UP ON CHILTON YET.",
    "Human Translation": "‎하지만 벌써부터 포기할 생각은 없어"
  },
  {
    "Time": "41:20",
    "Subtitle": "FAIR ENOUGH.",
    "Human Translation": "‎알았다"
  },
  {
    "Time": "41:22",
    "Subtitle": "I DO, HOWEVER, RESERVE THE RIGHT TO CHANGE MY MIND.",
    "Human Translation": "‎그렇게 말하기는 했지만 ‎결정은 내가 하는 거야"
  },
  {
    "Time": "41:25",
    "Subtitle": "THAT'S YOUR PREROGATIVE AS LONG AS YOU REMAIN A WOMAN.",
    "Human Translation": "‎변덕은 여자의 특권이니까"
  },
  {
    "Time": "41:30",
    "Subtitle": "THANKS, THOUGH. FOR WHAT?",
    "Human Translation": "‎- 어쨌든 고마워 ‎- 뭐가?"
  },
  {
    "Time": "41:32",
    "Subtitle": "FOR YELLING AT THE HEADMASTER THE WAY YOU DID.",
    "Human Translation": "‎교장 선생님에게 ‎그런 식으로 소리 지른 거"
  },
  {
    "Time": "41:34",
    "Subtitle": "OH, I DIDN'T YELL AT HIM.",
    "Human Translation": "‎소리 지르지 않았어"
  },
  {
    "Time": "41:36",
    "Subtitle": "YOU CALLED HIM IL DUCE.",
    "Human Translation": "‎무솔리니라고 했잖아"
  },
  {
    "Time": "41:38",
    "Subtitle": "WHICH MEANS \"KIND SIR\" IN CANTONESE.",
    "Human Translation": "‎홍콩 말로 ‘선생님’ 이라는 뜻이야"
  },
  {
    "Time": "41:42",
    "Subtitle": "THANK YOU. YOU'RE WELCOME.",
    "Human Translation": "‎- 고마워 ‎- 천만에"
  },
  {
    "Time": "41:45",
    "Subtitle": "HOW MUCH LONGER ARE WE GONNA LOOK FOR THIS CRAZY DEER?",
    "Human Translation": "‎이 사슴은 도대체 얼마나 더 ‎찾아야 만날 수 있는 거야?"
  },
  {
    "Time": "41:48",
    "Subtitle": "JUST A LITTLE FURTHER.",
    "Human Translation": "‎조금만 더"
  },
  {
    "Time": "41:50",
    "Subtitle": "I JUST HOPE HE DIDN'T HURT HIMSELF. I JUST HOPE HE HAS INSURANCE.",
    "Human Translation": "‎- 다치지 않았으면 좋겠는데 ‎- 보험에 가입했으면 좋겠네"
  },
  {
    "Time": "41:55",
    "Subtitle": "GO GET THAT PLAID SKIRT OFF AND GRAB YOUR BOOKS.",
    "Human Translation": "‎가서 교복 벗고 책이나 가져와"
  },
  {
    "Time": "41:58",
    "Subtitle": "WE'RE GOING TO LUKE'S. DON'T YOU HAVE TO GET TO WORK?",
    "Human Translation": "‎루크네 식당에 가자 ‎- 식당에 다시 안 나가도 돼? ‎- 내가 없어도 그 정도는 버틸 수 있어"
  },
  {
    "Time": "42:01",
    "Subtitle": "THEY CAN LAST A LITTLE LONGER WITHOUT ME.",
    "Human Translation": "‎- 식당에 다시 안 나가도 돼? ‎- 내가 없어도 그 정도는 버틸 수 있어"
  },
  {
    "Time": "42:03",
    "Subtitle": "PLUS MICHEL GETS SO CUTE WHEN HE FEELS HE'S BEEN OVERWORKED.",
    "Human Translation": "‎미셸은 과로하면 더 귀여워진다고"
  },
  {
    "Time": "42:06",
    "Subtitle": "HIS EARS PUFF OUT, HIS NOSTRILS FLARE. GO.",
    "Human Translation": "‎귀도 커지고 콧구멍도 번쩍거리지 ‎아주 재밌어"
  },
  {
    "Time": "42:08",
    "Subtitle": "I'M GONE.",
    "Human Translation": "‎- 가 ‎- 알았어"
  },
  {
    "Time": "42:15",
    "Subtitle": "Lorelai: IT'S US. WE'RE NOT HERE. WE HAVE A LIFE. GET OVER IT.",
    "Human Translation": "‎‘우리는 집에 없어요 ‎우리도 살아야죠, 참아요’"
  },
  {
    "Time": "42:19",
    "Subtitle": "Hi. This is a message for Rory. It's Max Medina calling.",
    "Human Translation": "‎‘안녕하세요, 맥스 메디나입니다 ‎로리에게 남기는 메세지입니다’"
  },
  {
    "Time": "42:23",
    "Subtitle": "I just wanted to say that I talked to Headmaster Charleston,",
    "Human Translation": "‎‘방금 전에 길모어 가정에서는 ‎무솔리니로 더 잘 알려져 있는…’"
  },
  {
    "Time": "42:25",
    "Subtitle": "or il duce, as he's more affectionately known",
    "Human Translation": "‎‘찰스턴 교장 선생님과 ‎이 문제로 상의를 한 끝에…‘"
  },
  {
    "Time": "42:27",
    "Subtitle": "in the Gilmore household, and he's agreed to let you do",
    "Human Translation": "‎‘찰스턴 교장 선생님과 ‎이 문제로 상의를 한 끝에…‘ ‎‘로리, 네가 보지 못한 시험을 ‎대체할 수 있도록…’"
  },
  {
    "Time": "42:31",
    "Subtitle": "some extra-credit work to help make up for the missed test.",
    "Human Translation": "‎‘로리, 네가 보지 못한 시험을 ‎대체할 수 있도록…’ ‎‘과제를 내주기로 결정했다’"
  },
  {
    "Time": "42:34",
    "Subtitle": "Now, I'm not sure what the extra-credit work is yet,",
    "Human Translation": "‎‘그 과제가 무엇이 될지는 ‎지금으로써는 알 수 없지만…’"
  },
  {
    "Time": "42:37",
    "Subtitle": "but it probably will be time-consuming and extremely painful.",
    "Human Translation": "‎‘시간이 오래 걸리고 ‎무척 힘든 과제가 될 거다’"
  },
  {
    "Time": "42:41",
    "Subtitle": "It will, however, get you back up to where I think you rightly belong, Rory.",
    "Human Translation": "‎‘로리, 네게는 제자리를 ‎찾을 수 있는 기회가 되겠지’"
  },
  {
    "Time": "42:46",
    "Subtitle": "Don't lose heart. Make this work.",
    "Human Translation": "‎‘용기를 내서 잘 헤쳐 나가기 바란다’"
  },
  {
    "Time": "42:49",
    "Subtitle": "And if your mother's listening,",
    "Human Translation": "‎‘어머니께서 듣고 계신다면…’"
  },
  {
    "Time": "42:51",
    "Subtitle": "Lorelai, it was a pleasure encountering you.",
    "Human Translation": "‎‘로렐라이, 오늘 이렇게 ‎만나서 즐거웠습니다’"
  },
  {
    "Time": "42:54",
    "Subtitle": "I hope it happens again.",
    "Human Translation": "‎‘다시 뵙게 되길 바랍니다’"
  },
  {
    "Time": "42:56",
    "Subtitle": "Anyway, see you in class. Bye.",
    "Human Translation": "‎‘어쨌든 학교에서 보자, 안녕’"
  }
];

export const EPISODES: EpisodeMetadata[] = [
  {
    id: "s01e01",
    name: "Pilot",
    data: EP1_DATA
  },
  {
    id: "s01e02",
    name: "The Lorelais' First Day at Chilton",
    data: EP2_DATA
  },
  {
    id: "s01e03",
    name: "Kill Me Now",
    data: EP3_DATA
  },
  {
    id: "s01e04",
    name: "The Deer Hunters",
    data: EP4_DATA
  }
];
