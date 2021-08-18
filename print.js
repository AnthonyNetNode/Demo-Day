const body = document.querySelector("body");

const allTopics = [
    {source: "dolor sit ", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus quam. In hac habitasse platea dictumst. Ut ut iaculis tortor, eget lobortis arcu. Donec ligula nunc, pharetra et est ut, suscipit condimentum purus. Sed fringilla ligula non diam pellentesque, et faucibus ante porttitor. Donec viverra tellus at velit vestibulum aliquam id ac massa. Nulla vitae turpis eget urna eleifend accumsan. Aliquam luctus porta elit non fringilla. Phasellus at bibendum purus. Donec consectetur auctor augue semper egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis placerat orci.", topic: "BLM: Black Lives Matter"},
    {source: "Source", summary: "Summmary", topic: "Topic"},
    {source: "Source", summary: "Summary", topic: "Topic"},

    
]

function generate() {
    

    let rng = allTopics[Math.floor(Math.random() * allTopics.length)];
    console.log(rng.source)
    console.log(rng.summary)
    console.log(rng.topic)

    let newPostDiv = document.createElement("div");
    let newPostHeader = document.createElement("h1");
    newPostHeader.innerText = rng.topic;

    let newPostUser = document.createElement("h2");
    newPostUser.innerText = rng.source;

    let newPost = document.createElement('p');
    newPost.innerText = rng.summary;

    newPostDiv.style.textAlign = "center";
    newPostUser.style.textAlign = "left"
    newPostDiv.appendChild(newPostHeader);
    newPostDiv.appendChild(newPostUser);
    newPostDiv.appendChild(newPost);
    body.appendChild(newPostDiv);

}
generate()
