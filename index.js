//Dummy Data
console.clear();
const posts = [
  {
    title: "Mammals",
    body: "Mammals are vertebrates within the class Mammalia which have a neocortex ",
  },
  {
    title: "Birds",
    body: "Birds are a collection of warm-blooded vertebrates within the class Aves",
  },
  {
    title: "Reptiles",
    body: "Reptiles are four-limbed (aka tetrapod) animals",
  },
  {
    title: "Amphibians",
    body: "Amphibians are cold-blooded, four-limbed vertebrates within the class Amphibia.",
  },
  {
    title: "Fishes",
    body: "Fishes are the aquatic animals within the class Anatidae",
  },
  {
    title: "Insects",
    body: "Insects are the largest group of six-limbed (aka hexapod) invertebrates within the class Insecta.",
  },
  {
    title: "Echiniderms",
    body: "Echinoderms are marine animals classified under the class Echinodermata",
  },
  {
    title: "Worms",
    body: "Worms are animals with a long cylindrical tube-like body with no limbs.",
  },
];

// // console.log(axios);

// const fetchData = async (config) => {
//   try {
//     const res = await axios(config);
//     return res.data;
//   } catch (error) {
//     throw error("Error is detected");

//   }
// };




const postsElement = document.querySelector('.posts');
// const loadAlldata = async () => {

//   const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
const loadAlldata = () => {

  posts.map((post) => {
    //console.log(post);
    const postEle = document.createElement("div");
    postEle.classList.add("post");
    postEle.innerHTML = `
            <h4 class="post_title">${post.title}</h4>
            <p class="post_body">${post.body}</p>
    `;
    postsElement.appendChild(postEle);
  });
};

loadAlldata();



