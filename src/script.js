let main_body = document.getElementById("main_body");
let player = document.getElementById("songPlayer");
let info = document.getElementById("songinfo");

let fullData = [
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.AtAI0H9sQZpMmeRsGXHavQHaHa&pid=Api&P=0&h=180",
    title: "Kaavala,kavala",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/28b56d0f-ea8a-41eb-91c3-ba25e75def11",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/336/O-Kadhal-Kanmani-Tamil-2015-20200805153450-500x500.jpg",
    title:
      "Kaara Aatakara,Kara attakara,Kara atakara,KaaraAatakara,Karaattakara,Karaatakara",
    author: "A.R.Rahman,A R Rahman,A R Rahuman,A.R.Rahuman",
    link: "https://github.com/user-attachments/assets/6a584299-2390-449a-8482-cde1145263aa",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/929/Aayitha-Ezhutu-Tamil-2004-20190629140126-500x500.jpg",
    title: "Yaakai thiri,yakkai thiri,yakkaithiri,Yaakaithiri",
    author: "A.R.Rahman,A R Rahman,A R Rahuman,A.R.Rahuman",
    link: " https://github.com/user-attachments/assets/793a52ff-231e-427c-b142-a11b5da9929c",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/934/Golden-Sparrow-From-Nilavuku-En-Mel-Ennadi-Kobam-Tamil-2024-20241116194614-500x500.jpg",
    title: "Golden Sparrow,GoldenSparrow",
    author: "G.V.Prakash,G V Prakash",
    link: "https://github.com/user-attachments/assets/b9e2be71-62fb-485b-a4b4-47f037a22149",
    count: "0",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.Ud9K_U03B7OsBaSFQP9bpQHaHa&pid=Api&P=0&h=180",
    title: "Hey Minnale,heyminnale,aminnale,a minnale",
    author: "G.V.Prakash,G V Prakash",
    link: "https://github.com/user-attachments/assets/8ef9607e-9a52-4fcf-bfca-76fc2ebfe6ab",
    count: "0",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.QGJJ1dBEaR3OXtE3MdYGEwHaHa&pid=Api&P=0&h=180",
    title: "Manasilayo",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/68fc07af-90e0-4667-b855-e7306315ba2b",
    count: "0",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.u-KZxbEXgLYQoWOfG1Cp5QHaHa&pid=Api&P=0&h=180",
    title: "Arabic Kuthu,ArabicKuthu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/64de11e8-7690-4939-ba15-21dd0eb36046",
    count: "0",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.zbYhA0yQjDw0ByBCFRDhJAHaHa&pid=Api&P=0&h=180",
    title: "Boomi enna Suthudhe",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/6551f24e-f165-4666-bc8a-aaf236402f16",
    count: "0",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.afhGc8QJz2lK7dV7w5IxVQHaHa&pid=Api&P=0&h=180",
    title: "Thee Thalapathy",
    author: "Thaman S",
    link: "https://github.com/user-attachments/assets/5e02e994-fb47-4a06-9cf4-39669c0aa08c",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/984/Paiya-Tamil-2010-20200620134043-500x500.jpg",
    title: "Adada Mazhaida",
    author: "Yuvan Shankar Raja",
    link: "https://github.com/user-attachments/assets/38aacd1d-86b5-48bb-99c4-b0fa94b02325",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/274/Anegan-Tamil-2014-20190822152158-500x500.jpg",
    title: "Danga Maari Oodhari",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/a3e40a0a-96cd-4a88-a242-b281a44b5219",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/590/I-Tamil-2014-20190822153052-500x500.jpg",
    title: "Ennodu Nee Irundhal",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/96ac84ca-85d4-41ed-bfb7-50cfefcc9cd2",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/289/Pathu-Thala-Original-Motion-Picture-Soundtrack-Tamil-2023-20230320144505-500x500.jpg",
    title: "Pathu thala",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/217049a9-921e-4b75-ac88-615c7ca55cd4",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/224/Flag-Anthem-Tamilaga-Vettri-Kazhagam-Tamil-2024-20240823142028-500x500.jpg",
    title: "TVK Flag Anthem",
    author: "Thalapathy Vijay",
    link: "https://github.com/user-attachments/assets/239fc295-5424-43e2-be21-3d4a863cc284",
    count: "0",
  },
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.XdFL2PZHy4rpvnphuZmASQHaHa&pid=Api&P=0&h=180",
    title: "Illuminati",
    author: "Susin Shyam",
    link: "https://github.com/user-attachments/assets/0e63aea2-8f86-486e-b7b1-9f9ab4e7a3bd",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/113/Vidaamuyarchi-Tamil-2025-20250217133052-500x500.jpg",
    title: "Pathikichu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/0dfcbfa8-9c60-47cc-baa3-83400c5774ae",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg",
    title: "Baadas",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/7a8b15d1-571a-4ec1-a11b-0bc13ee8508b",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/492/Mersal-Tamil-2017-20170820120559-500x500.jpg",
    title: "Aalaporan Tamizhan",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/f72483e1-1b08-4989-81dd-ce77b24e0f98",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/377/Good-Night-Tamil-2023-20230520150605-500x500.jpg",
    title: "Naan Gaali",
    author: "Sean Roldan",
    link: "https://github.com/user-attachments/assets/2114a398-f9ee-45d0-92d1-c30edf19c239",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/470/David-2012-500x500.jpg",
    title: "Kanave Kanave",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/c979f779-b409-4fa3-9e66-58e0162d41fc",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/304/Meesaya-Murukku-Tamil-2017-20170822060308-500x500.jpg",
    title: "Vadi pulla vadi",
    author: "Hip Hop Tamizha",
    link: "https://github.com/user-attachments/assets/a44bf699-7d11-4c15-bfaa-c8aab5142197",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/573/Kaththi-Tamil-2014-20230701133540-500x500.jpg",
    title: "Aathi",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/eaed5020-f46d-4b81-9dc7-06a0cb7abdee",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/672/Matta-From-The-Greatest-Of-All-Time-Tamil-2024-20240831141002-500x500.jpg",
    title: "Matta",
    author: "Yuvan Shankar Raja",
    link: "https://github.com/user-attachments/assets/9816b677-f651-4855-be24-e23a1c55172a",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/651/Dheema-From-Love-Insurance-Kompany-Tamil-2024-20241015191442-500x500.jpg",
    title: "Dheema",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/75440cf6-033e-48e3-a792-2e4f5c656684",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/485/Velaiyilla-Pattathari-2014-500x500.jpg",
    title: "Udhungada Sangu",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/09086f80-a918-49db-b171-cb77ee0d2d35",
    count: "0",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.LhjQbX9w-Nesk_npRWUfOwHaI3&pid=Api&P=0&h=180",
    title: "Ranjithame",
    author: "Thaman S",
    link: "https://github.com/user-attachments/assets/fc5d9b12-dc38-4cf5-964b-30ec81ff4fd7",
    count: "0",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.FPjpUOVSJflctlyGeaELywHaHa&pid=Api&P=0&h=180",
    title: "Hukum",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/3dfd332b-9f03-43bb-a0ac-fe7506b2262e",
    count: "0",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.XKqEYmtXmOgtVmL390FpUAHaHa&pid=Api&P=0&h=180",
    title: "Naa Ready",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/200bbe1b-f832-4dbb-b862-d06ced398e37",
    count: "0",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/d4/0a/add40a42-ba24-88d0-b98d-8e288b5ea5d9/cover.jpg/800x800cc.jpg",
    title: "Makkamishi",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/2a50e2f2-757b-4de3-b015-acbad01b2dce",
    count: "0",
  },
  {
    img: "https://tse4.mm.bing.net/th?id=OIP.OrjelVpuIdielLYXBt6J5AHaHa&pid=Api&P=0&h=180",
    title: "Oh Shanthi Shanthi",
    author: "Harris Jeyaraj",
    link: "https://github.com/user-attachments/assets/a21f742e-815f-41f6-bb91-23619992f66c",
    count: "0",
  },

  {
    img: "https://a10.gaanacdn.com/gn_img/song/D0PKLrWGl9/PKL2kLGJWG/size_l_1562750622.webp",
    title: "Thaarame Thaarame",
    author: "Ghibran",
    link: "https://github.com/user-attachments/assets/1c2ace24-4027-4493-81b2-d6db69de233b",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/349/Kanimaa-From-Retro-Tamil-2025-20250321121003-500x500.jpg",
    title: "Kanimaa",
    author: "Santhosh Narayanan",
    link: "https://github.com/user-attachments/assets/6948b37e-f73a-4de7-9492-8e63047ebff1",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/590/I-Tamil-2014-20190822153052-500x500.jpg",
    title: "Mersalaayitten",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/8a57a572-89f7-4a98-b868-bfc31ae7c1a1",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/456/Enthiran-Tamil-2010-500x500.jpg",
    title: "Irumbile Oru Idhaiyam",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/533c03d8-e06e-4f9a-b199-3d1b12d6b771",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/435/Don-Tamil-2022-20220512162818-500x500.jpg",
    title: "Private Party",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/a20da6b8-6eac-4318-ab64-2978ad3f0746",
    count: "0",
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.thUkR3bqcRRX0FG0VTR-DwAAAA&pid=Api&P=0&h=180",
    title: "Chellama",
    author: "Anirudh",
    link: "https://github.com/user-attachments/assets/0c6b408b-a707-452f-b021-82e71efc826e",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/940/Enjoy-Enjaami-Tamil-2021-20240528125718-500x500.jpg",
    title: "Enjoy Enjaami",
    author: "Dhee, Arivu",
    link: "https://github.com/user-attachments/assets/c8c4afae-53e8-4302-ada9-dab6b996467f",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/432/Naadodigal-Tamil-2009-20200714115717-500x500.jpg",
    title: "Aadunga da",
    author: "Sundar C Babu",
    link: "https://github.com/user-attachments/assets/844587e7-7aa3-44cd-ac61-816fc60f6521",
    count: "0",
  },
  {
    img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8a/68/33/8a6833ad-7788-778e-e896-5258f8c1a95f/8903431853622_cover.jpg/1200x1200bf-60.jpg",
    title: "Naatu Koothu",
    author: "M. M. Keeravani",
    link: "https://github.com/user-attachments/assets/a2ddfac1-7b76-4caf-9584-af1e3290478b",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/658/Ayan-Tamil-2022-20220413100432-500x500.jpg",
    title: "Pala Palakura",
    author: "Hariharan",
    link: "https://github.com/user-attachments/assets/1384c0bd-d0ad-4229-86b3-21e0b0b66d16",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/478/Ghilli-Tamil-2004-20240808165324-500x500.jpg",
    title: "Kokkara Kokkarako",
    author: "Vidyasagar",
    link: "https://github.com/user-attachments/assets/dd5f4fb3-bc2e-495a-9c23-ad8285ec978f",
    count: "0",
  },
  {
    img: "https://c.saavncdn.com/880/Thug-Life-Tamil-Tamil-2025-20250604103629-500x500.jpg",
    title: "Muththa Mazhai",
    author: "A.R.Rahman",
    link: "https://github.com/user-attachments/assets/fd5be511-163c-4c5e-b5cb-274e9c61d6e7",
    count: "0",
  },
];
var data = [{}];
fullData.map((ele, index) => {
  data[index] = {
    id: index,
    img: ele.img,
    title: ele.title,
    author: ele.author,
    link: ele.link,
    count: ele.count,
  };
});
function initialLoader() {
  console.log(data);
  main_body.innerHTML = data
    .map((ele, index) => {
      let ele_title = ele.title.split(",");
      let ele_author = ele.author.split(",");
      return `
<div class="songs flex flex-col items-center m-3">
            <div
            id="${ele.id}"
              class="img_part w-[130px] h-[130px] flex justify-around items-center border-0 rounded-2xl"
              onclick="playing.apply(this,arguments)"
          style="background-image: url(${ele.img});"
            >
              <div
                id="${ele.id}"
                class="play_btn w-[40px] h-[40px] rounded-4xl flex items-center justify-center bg-red-500"
                
                >
                <i
                id="${ele.id}"
                  class="fa-solid fa-play fa-lg ml-3.5 mt-5"
                  style="color: #fff"
                  onclick="playing.apply(this,arguments)"
                ></i>
              </div>
            </div>
           ${
             ele_title[0].length < 11
               ? `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0]}</h1>`
               : `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0].slice(0, 10)}...</h1>`
           }
            <h1 class="h12 text-[12px]">${ele_author[0]}</h1>

          </div>
`;
    })
    .join("");

  searchUpdater();
}
function searchUpdater() {
  let inputs1 = document.getElementById("search");
  let inputs2 = document.getElementById("search_mobile");
  let options = document.getElementById("search_select");
  inputs1.innerHTML = `<div class="flex flex-row w-[100%] h-[35px]">
               <input
               id="searchbox1"
              type="text"
              class="border-2 h-[35px] w-[90%] text-center bg-gray-200 outline-0 border-r-0 rounded-l-3xl"
              placeholder="Search by ${options.value}"
              oninput="searchSong.apply(this,arguments)"/>
              <button class="h-[35px] w-[10%] bg-gray-400 outline-0 border-2 border-l-0 hover:cursor-pointer rounded-r-3xl" onclick="recorder()"><i class="fa-solid fa-microphone"></i></button>
              </div>`;
  inputs2.innerHTML = `<div class="flex flex-row w-[80%] h-[35px]">
            <input
            id="searchbox2"
            type="text"
            class="border-2 h-[35px] w-[85%] text-center bg-gray-200 outline-0 border-r-0 rounded-l-3xl""
            oninput="searchSong.apply(this,arguments)"
            placeholder="Search by ${options.value}"/>
            <button class="h-[35px] w-[15%] bg-gray-400 outline-0 border-2 border-l-0 hover:cursor-pointer rounded-r-3xl" onclick="recorder()"><i class="fa-solid fa-microphone"></i></button>
            </div>`;
}
const playing = (e) => {
  main_body.style.marginBottom = "120px";
  let ele_title = data[e.target.id].title.split(",");
  let ele_author = data[e.target.id].author.split(",");
  player.innerHTML = `
  <div id="mobile_song_info" class="flex w-[100%] h-[60px] bg-gray-700 items-center">
  <div class="ml-2">
  <img src=${data[e.target.id].img} alt=""  width="50px" class="rounded-4xl">
  </div>
  <div class="w-[100%]">
  <marquee class="text-amber-50 text-xl font-sans">${ele_title[0]} by ${
    ele_author[0]
  }</marquee>
  </div>
  </div>
  <div class="w-[100%] h-[60px] flex bg-[#F1F3F4] justify-between items-center">
  <div id="songinfo" class="flex h-[100%] items-center gap-[20px] ml-5">
  <img src=${data[e.target.id].img} alt="" width="50px" class="rounded-4xl">
  <div>
  <h1>Song: ${ele_title[0]}</h1>
  <h1>Author: ${ele_author[0]}</h1>
  </div>
  </div>
  <div h-[100%] w-[100%]>
    <audio id="songnav"  class="w-[63vw]" controls autoplay>
  <source src=${data[e.target.id].link} type="audio/ogg">
</audio></div></div>
`;
  let newindex = parseInt(e.target.id);
  newindex = newindex + 1;
  let songNav = document.getElementById("songnav");
  songNav.addEventListener("ended", () => {
    playerforindex(newindex);
  });
};
const playerforindex = (index) => {
  if (index === 41 || index === 42) index = 0;
  let ele_title = data[index].title.split(",");
  let ele_author = data[index].author.split(",");
  main_body.style.marginBottom = "120px";
  player.innerHTML = `
  <div id="mobile_song_info" class="flex w-[100%] h-[60px] bg-gray-700 items-center">
  <div class="ml-2">
  <img src=${data[index].img} alt=""  width="50px" class="rounded-4xl">
  </div>
  <div class="w-[100%]">
  <marquee class="text-amber-50 text-xl font-sans">${ele_title[0]} by ${ele_author[0]}</marquee>
  </div>
  </div>
  <div class="w-[100%] h-[60px] flex bg-[#F1F3F4] justify-between items-center">
  <div id="songinfo" class="flex h-[100%] items-center gap-[20px] ml-5">
  <img src=${data[index].img} alt="" width="50px" class="rounded-4xl">
  <div>
  <h1>Song: ${ele_title[0]}</h1>
  <h1>Author: ${ele_author[0]}</h1>
  </div>
  </div>
  <div h-[100%] w-[100%]>
    <audio id="songnav"  class="w-[63vw]" controls autoplay>
  <source src=${data[index].link} type="audio/ogg">
</audio></div></div>
`;
  let newindex = parseInt(index);
  newindex = newindex + 1;
  let songNav = document.getElementById("songnav");
  songNav.addEventListener("ended", () => {
    playerforindex(newindex);
  });
};
const searchSong = (e) => {
  let opt = document.getElementById("search_select");
  while (main_body.firstChild) {
    main_body.removeChild(main_body.firstChild);
  }
  let resultData;
  if (opt.value == "Song") {
    resultData = data.filter(({ title }) =>
      title.toLowerCase().includes(e.target.value.toLowerCase())
    );
  } else {
    resultData = data.filter(({ author }) =>
      author.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }
  main_body.innerHTML = resultData
    .map((ele) => {
      let ele_title = ele.title.split(",");
      let ele_author = ele.author.split(",");
      return `
<div class="songs flex flex-col items-center m-3">
            <div
            id="${ele.id}"
              class="img_part w-[130px] h-[130px] flex justify-around items-center rounded-2xl"
              onclick="playing.apply(this,arguments)"
          style="background-image: url(${ele.img});"
            >
              <div
                id="${ele.id}"
                class="play_btn w-[40px] h-[40px] rounded-4xl flex items-center justify-center bg-red-500"
                
                >
                <i
                id="${ele.id}"
                  class="fa-solid fa-play fa-lg ml-3.5 mt-5"
                  style="color: #fff"
                  
                ></i>
              </div>
            </div>
           
              ${
                ele_title[0].length < 11
                  ? `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0]}</h1>`
                  : `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0].slice(0, 10)}...</h1>`
              }
           
            <h1 class="text-[12px] h12">${ele_author[0]}</h1>

          </div>
`;
    })
    .join("");
};
function recorder() {
  let opt = document.getElementById("search_select");
  let searchBox1 = document.getElementById("searchbox1");
  let searchBox2 = document.getElementById("searchbox2");
  var SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    searchBox1.textContent =
      "Sorry, your browser does not support Speech Recognition.";
    return;
  }

  var recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  searchBox1.value = "Listening... Speak now.";
  searchBox2.value = "Listening... Speak now.";
  recognition.start();

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    searchBox1.value = transcript;
    searchBox2.value = transcript;

    while (main_body.firstChild) {
      main_body.removeChild(main_body.firstChild);
    }
    let resultData;
    if (opt.value == "Song") {
      resultData = data.filter(({ title }) =>
        title.toLowerCase().includes(transcript.toLowerCase())
      );
    } else {
      resultData = data.filter(({ author }) =>
        author.toLowerCase().includes(transcript.toLowerCase())
      );
    }
    main_body.innerHTML = resultData
      .map((ele) => {
        let ele_title = ele.title.split(",");
        let ele_author = ele.author.split(",");
        return `
<div class="songs flex flex-col items-center m-3">
            <div
            id="${ele.id}"
              class="img_part w-[130px] h-[130px] flex justify-around items-center rounded-2xl"
              onclick="playing.apply(this,arguments)"
          style="background-image: url(${ele.img});"
            >
              <div
                id="${ele.id}"
                class="play_btn w-[40px] h-[40px] rounded-4xl flex items-center justify-center bg-red-500"
                
                >
                <i
                id="${ele.id}"
                  class="fa-solid fa-play fa-lg ml-3.5 mt-5"
                  style="color: #fff"
                  
                ></i>
              </div>
            </div>
           
              ${
                ele_title[0].length < 11
                  ? `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0]}</h1>`
                  : `<h1
              class="text-[15px] h11"
              style="
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman',
                  serif;
              "
            >${ele_title[0].slice(0, 10)}...</h1>`
              }
           
            <h1 class="text-[12px] h12">${ele_author[0]}</h1>

          </div>
`;
      })
      .join("");
  };

  recognition.onerror = function (event) {
    alert("Error occurred: " + event.error);
  };
}
