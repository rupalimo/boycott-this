var SPREADSHEET_ID_AND_TAB =
	'1W2MSTFVGcq4c3OO5rpfvUJbmktMpmMPu4M0_mgpwwgw/boycott';

$(document).ready(function () {
	$.getJSON(
		'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
		function (data) {
			console.log(data);

			data.forEach(function (entry, index) {
				console.log(entry);

				if (index == 0) return;

				let nav = $(
					`<a href="#` + entry.menuItems + `">` + entry.menuItems + `</a>`
				).appendTo('#menuItems');

				let div = $(
					`<p data-confirm="` + entry.letter + `">` + entry.letter + `</p>`
				).appendTo('#letter');

				let ul = $(
					`<li data-confirm="` +
						entry.signatories +
						`">` +
						entry.signatories +
						`</li>`
				).appendTo('#signatories');

				let pre = $(
					`<em data-confirm="` +
						entry.signatoriesTotal +
						`">` +
						entry.signatoriesTotal +
						`</em>`
				).appendTo('#signatoriesTotal');

				let a = $(
					`<a
						href="` +
						entry.signupLink +
						`">
						` +
						entry.signupButton +
						`</a>`
				).appendTo('#signUpHere');

				let details = $(
					`<details data-confirm="` +
						entry.faqTitle +
						`">
					<summary>
						
						` +
						entry.faqTitle +
						`
						</summary>
						<div><p class="faq">` +
						entry.faqSection +
						`</p></div>
						</details>`
				).appendTo('#faq');

				let article = $(
					`<p data-confirm="` + entry.about + `">` + entry.about + `</p>`
				).appendTo('#about');

				let ol = $(
					`<li data-confirm="` +
						entry.furtherReadingTitle +
						`"><a target="_blank" href="` +
						entry.furtherReadingLink +
						`" data-confirm="` +
						entry.furtherReadingTitle +
						`">` +
						entry.furtherReadingTitle +
						`</a></li>`
				).appendTo('#furtherReading');

				let footer = $(
					`<p data-confirm="` +
						entry.lastUpdated +
						`">` +
						entry.lastUpdated +
						`</p>`
				).appendTo('#lastUpdated');
			});
		}
	);
});
