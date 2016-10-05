module.exports =
{
	birthdayWish: function(name)
	{
		var param = {};
		var wishLines = 
			[
				'Happy birthday ' + '@' + name + '! ' + 'I\'m so nice I didn\'t even list your age! -Bday wishing bot.' ,
				'Exercise your lungs today by blowing candles. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Watch out for birthdays, too many can kill you. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'I hope the candles don\'t cost more than the cake! Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Birthday=nature\'s way of telling us to eat more cake. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Happy birthday to you... any many more!' + '@' + name + '! -Bday wishing bot.',
				'Not getting older, just becoming vintage. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Happy 24 hours constant Facebook notification day ' + '@' + name + '! -Bday wishing bot.',
				'Happy birthday ' + '@' + name + '! It\'s like your own Christmas! -Bday wishing bot.',
				'Happy birthday ' + '@' + name + '! May your FB be filled with people you never talk to. -Bday wishing bot.',
				'Age gets better like and with wine. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'One year closer to them senior benefits. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Check for wrinkles before wearing your birthday suit! Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'An old fart is as good as a new one... Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'You look great for a person who is by one year closer to death. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Happy Birthday, but what\’s your secret'+'@' +name +' ? A time machine or something? -Bday wishing bot.' ,
				'You would have loved the gift I didn\'t bother giving you. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Ur birthday reminds me of the great Chinese scholar, Yung No Mo. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'May you live so long your entire body resembles a scrotum. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'If you were a dog you\'d be dead by now. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'This tweet makes you look more popular than you really are. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'However old you are is the new 18. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Today is the anniversary of u being expelled from ur mom\'s uterus. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'FB isn\'t gonna type all those thank yous by itself. Get to it! Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'What a perfect day to thank me for wishing you happy bday. Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'Do something special for youself and then feel guilty about it, Happy birthday ' + '@' + name + '! -Bday wishing bot.',
				'May your bday be as exciting as you portray it on social media. Happy birthday ' + '@' + name + '! -Bday wishing bot.'
			];
		var wish = wishLines[Math.floor(Math.random()*wishLines.length)];
		param.status = wish;
		return param;
	}
}