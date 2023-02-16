let animals = {
    monkey:{ 
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacolK45SnrgH9Jf4u4Ud3cwkvwOKA_BQe2Q&usqp=CAU',
      species: "Rhesus Macaque",
      desc: "I think they are smart, funny and communal.",
    },
    dolphin:{
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclORke4pAH5PShtVBhfGfE5jsEidwMrssyQ&usqp=CAU',
    species: "Common Bottlenose Dolphin",
    desc: "I love their adaptability. They can swim in both shallow and deep waters.",
  },
   snake:{
    url: 'https://a-z-animals.com/media/2020/01/Snake-Blue-viper.jpg',
    species: "Blue-lipped Sea Krait",
    desc: "Its blue color in one of the most rare colors in nature.",
  },
  elephant:{
    url:'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg',
    species: "African Savanna Elephant",
    desc: "I appreciate the symbolic meaning of elephants. They represent wisdom.",
}
}


  const animal1 = ()=>{
   let main = document.querySelector('.image')
   main.setAttribute('src', animals.monkey.url)
   let species = document.querySelector('.species')
   species.innerHTML = animals.monkey.species
   let desc = document.querySelector('.desc')
   desc.innerHTML = animals.monkey.desc
  }



  const animal2 = ()=>{
   let main = document.querySelector('.image')
   main.setAttribute('src', animals.dolphin.url)
   let species = document.querySelector('.species')
   species.innerHTML = animals.dolphin.species
   let desc = document.querySelector('.desc')
   desc.innerHTML = animals.dolphin.desc
  }


  const animal3 = ()=>{
    let main = document.querySelector('.image')
    main.setAttribute('src', animals.snake.url)
    let species = document.querySelector('.species')
    species.innerHTML = animals.snake.species
    let desc = document.querySelector('.desc')
    desc.innerHTML = animals.snake.desc
  }


  const animal4 = ()=>{
    let main = document.querySelector('.image')
   main.setAttribute('src', animals.elephant.url)
   let species = document.querySelector('.species')
   species.innerHTML = animals.elephant.species
   let desc = document.querySelector('.desc')
   desc.innerHTML = animals.elephant.desc
  }