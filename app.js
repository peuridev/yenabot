const Discord = require('discord.js') 
const client = new Discord.Client() 

client.on('ready', () => {
	require('daemon')();
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '예나야') {
    msg.reply('예나봇에는 여러 기능들이 있어요!\n-예나야 집합해 : 에브리온 태그로 모두에게 알림을 보냅니다.\n-예나야 사진줘 : 오늘의 베스트 사진을 보냅니다.\n-예나야 소개해줘 : 아이즈원 예나에 대한 소개를 합니다.\n-예나야 개발자 : 예나봇의 개발자를 알려줍니다.\n-예나야 최신곡 : 아이즈원의 최신곡 뮤비를 보냅니다.\n-예나야 이전곡 : 최신곡의 바로 전 곡의 뮤비를 보냅니다.\n-예나야 데뷔곡 : 아이즈원의 데뷔 곡 뮤비를 보냅니다.\n-예나야 프사 : 지금 공식 프로필 사진을 보냅니다.\n-예나야 데뷔일 : 아이즈원의 데뷔일을 알려줍니다.');
  }
	
	else   if (msg.content === '예나야 집합해') {
    msg.reply('님이 집합하라고 하셨습니다! @everyone\n악용금지, 악용하고제탓하지마세요.');
  }

	else   if (msg.content === '예나야 사진줘') {
    msg.reply('https://i.imgur.com/DZ3As2Z.gif');
  }
	
	else   if (msg.content === '예나야 소개해줘') {
    msg.reply('이름 : 최예나 (崔叡娜, Choi Ye-Na / チェ・イェナ)\n생일 : 1999년 9월 29일 (21세)\n162cm, A형, 230mm\n소속사 : 위에화엔터테인먼트\n공식색 : 옌로우 (#fcf695)\nhttps://oneoclock.kr/aboutyena.png\nhttps://oneoclock.kr/aboutyena2.png');
  }
	
		else   if (msg.content === '예나야 개발자') {
    msg.reply('예나봇은 김한시가 개발하였어요!\n한시 공식 사이트 : https://oneoclock.kr\n왜 예나봇이나요? : 저는 올팬입니다. 하지만 제가 모든 멤버의 정보를 넣기에는 일이 커져서 제 최애 멤버인 예나봇으로 정했습니다.\n문의하기 및 제안 : 김한시#816(디스코드)');
  }
	
		else   if (msg.content === '예나야 최신곡') {
    msg.reply('https://www.youtube.com/watch?v=R5zFbngjX-k');
  }
	
			else   if (msg.content === '예나야 이전곡') {
    msg.reply('https://www.youtube.com/watch?v=G8GaQdW2wHc');
  }
	
				else   if (msg.content === '예나야 데뷔일') {
    msg.reply('2018년 10월 29일 COLOR*IZ 타이틀곡 라비앙로즈로 데뷔하였습니다.');
  }
	
			else   if (msg.content === '예나야 프사') {
    msg.reply('https://oneoclock.kr/yenap.png');
  }
	
				else   if (msg.content === '잊지마넌흐린어둠사이왼손으로그린별하나') {
    msg.reply('https://www.youtube.com/watch?v=0-q1KafFCLU');
  }
	
					else   if (msg.content === '나도모르게어느새실없는웃음') {
    msg.reply('https://www.youtube.com/watch?v=3iM_06QeZi8');
  }

});

client.login('token');
