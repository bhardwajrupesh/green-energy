function preload() {
	const imagesList = ["./img/solarpanel.jpg",
                       "./img/wind.jpg",
                     "./img/dam.jpg"];

	const images = [];
	for (let i = 0; i < imagesList.length; i++) {
		images[i] = new Image();
		images[i].src = imagesList[i];
	}

	console.log('Images preloaded : \n\t ${images[0].src} \n\t ${images[1].src} \n\t ${images[2].src}');
};

window.addEventListener("load", preload);

let btnlist = document.querySelectorAll("button");

const obj = {
	solarpanel: {
		headingcont: 'Solar Panel',
		bodytxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet augue et ipsum condimentum hendrerit. Nulla bibendum iaculis risus, a gravida ligula tempus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Ut velit risus, varius id mollis quis, faucibus a arcu. Maecenas dictum nisl in velit fermentum lacinia. Vivamus imperdiet ipsum neque, ut euismod nisl pharetra sed. Aliquam non elementum nulla. Donec id finibus massa. Praesent fringilla orci erat, et tempor nulla luctus quis. Suspendisse sit amet consectetur lectus. Donec ultricies id erat sed commodo. Nullam in sollicitudin mauris, ac bibendum nulla. Quisque sit amet orci non nulla porta eleifend. Duis facilisis eros at odio condimentum dictum. Integer tincidunt nibh non fermentum interdum. Vestibulum tellus nisl, molestie eget elementum sed, ultricies convallis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vestibulum quis elementum lorem. Ut iaculis ac velit sit amet tempor. In ut condimentum sapien, quis mollis purus. Curabitur in orci erat. Proin accumsan velit non urna eleifend, a scelerisque nisl ornare. Etiam a dignissim tortor, sed ultricies urna. In a arcu magna. Morbi odio lorem, aliquet vitae mauris quis, hendrerit dignissim nisl. Quisque eget sollicitudin massa. Mauris mauris nulla, dignissim vel tincidunt et, imperdiet eget orci. Vestibulum enim massa, aliquet non lobortis auctor, mattis eget velit. Suspendisse potenti. Mauris volutpat facilisis vestibulum. Duis nec orci vel quam pulvinar fringilla. Nulla tristique purus sed erat ullamcorper eleifend.",
		imgurl: './img/solarpanel.jpg',
		imgAlt: 'Solar Panel'
	},
	wind: {
		headingcont: 'Wind',
		bodytxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet augue et ipsum condimentum hendrerit. Nulla bibendum iaculis risus, a gravida ligula tempus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Ut velit risus, varius id mollis quis, faucibus a arcu. Maecenas dictum nisl in velit fermentum lacinia. Vivamus imperdiet ipsum neque, ut euismod nisl pharetra sed. Aliquam non elementum nulla. Donec id finibus massa. Praesent fringilla orci erat, et tempor nulla luctus quis. Suspendisse sit amet consectetur lectus. Donec ultricies id erat sed commodo. Nullam in sollicitudin mauris, ac bibendum nulla. Quisque sit amet orci non nulla porta eleifend. Duis facilisis eros at odio condimentum dictum. Integer tincidunt nibh non fermentum interdum. Vestibulum tellus nisl, molestie eget elementum sed, ultricies convallis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vestibulum quis elementum lorem. Ut iaculis ac velit sit amet tempor. In ut condimentum sapien, quis mollis purus. Curabitur in orci erat. Proin accumsan velit non urna eleifend, a scelerisque nisl ornare. Etiam a dignissim tortor, sed ultricies urna. In a arcu magna. Morbi odio lorem, aliquet vitae mauris quis, hendrerit dignissim nisl. Quisque eget sollicitudin massa. Mauris mauris nulla, dignissim vel tincidunt et, imperdiet eget orci. Vestibulum enim massa, aliquet non lobortis auctor, mattis eget velit. Suspendisse potenti. Mauris volutpat facilisis vestibulum. Duis nec orci vel quam pulvinar fringilla. Nulla tristique purus sed erat ullamcorper eleifend.",
		imgurl: './img/wind.jpg',
		imgAlt: 'Wind'
	},
	dam: {
		headingcont: 'Dam',
		bodytxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet augue et ipsum condimentum hendrerit. Nulla bibendum iaculis risus, a gravida ligula tempus at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Ut velit risus, varius id mollis quis, faucibus a arcu. Maecenas dictum nisl in velit fermentum lacinia. Vivamus imperdiet ipsum neque, ut euismod nisl pharetra sed. Aliquam non elementum nulla. Donec id finibus massa. Praesent fringilla orci erat, et tempor nulla luctus quis. Suspendisse sit amet consectetur lectus. Donec ultricies id erat sed commodo. Nullam in sollicitudin mauris, ac bibendum nulla. Quisque sit amet orci non nulla porta eleifend. Duis facilisis eros at odio condimentum dictum. Integer tincidunt nibh non fermentum interdum. Vestibulum tellus nisl, molestie eget elementum sed, ultricies convallis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vestibulum quis elementum lorem. Ut iaculis ac velit sit amet tempor. In ut condimentum sapien, quis mollis purus. Curabitur in orci erat. Proin accumsan velit non urna eleifend, a scelerisque nisl ornare. Etiam a dignissim tortor, sed ultricies urna. In a arcu magna. Morbi odio lorem, aliquet vitae mauris quis, hendrerit dignissim nisl. Quisque eget sollicitudin massa. Mauris mauris nulla, dignissim vel tincidunt et, imperdiet eget orci. Vestibulum enim massa, aliquet non lobortis auctor, mattis eget velit. Suspendisse potenti. Mauris volutpat facilisis vestibulum. Duis nec orci vel quam pulvinar fringilla. Nulla tristique purus sed erat ullamcorper eleifend.",
		imgurl: './img/dam.jpg',
		imgAlt: 'Dam'
	},
}
const container = document.querySelector(".content");

function pageLoad() {
	container.innerHTML = `<h1>${obj.solarpanel.headingcont}</h1>
                      <img src ="${obj.solarpanel.imgurl}" alt="${obj.solarpanel.imgAlt}" style="width:350px; height:350px">;
                      <p>${obj.solarpanel.bodytxt}</p>`;
}

window.addEventListener("load", pageLoad);

function contenthandler(ev) {
	let button = ev.target;

	for (let i = 0; i < btnlist.length; i++) {
		btnlist[i].removeAttribute("id");
	}

	button.setAttribute("id", "active-button");

	let btnLabel = ev.target.textContent;
	/*
	   Use the element-object method setAttribute() to set the id active-button
	   to the currently clicked button. */

	if (btnLabel === "Wind") {
		container.innerHTML = `<h1>${obj.wind.headingcont}</h1>
                              <img src ="${obj.wind.imgurl}" alt="${obj.wind.imgAlt}" >;
                              <p>${obj.wind.bodytxt}</p>`;
	} else if (btnLabel === "Water") {
		container.innerHTML = `<h1>${obj.dam.headingcont}</h1>
                              <img src ="${obj.dam.imgurl}" alt="${obj.dam.imgAlt}" >;
                              <p>${obj.dam.bodytxt}</p>`;
	} else {
		container.innerHTML = `<h1>${obj.solarpanel.headingcont}</h1>
                      <img src ="${obj.solarpanel.imgurl}" alt="${obj.solarpanel.imgAlt}" style="width:350px; height:350px">;
                      <p>${obj.solarpanel.bodytxt}</p>`;
	}

}

/*
Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:
`<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>`
Assign this content to to your HTML-container that will
be dynamically loaded (you already got the reference to
this container before you started the function handleSelection) */

for (let btn of btnlist) {
	btn.addEventListener("click", contenthandler);
}