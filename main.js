const div = document.getElementById('content')
const button = document.getElementById('button')

// button.addEventListener(click, await getData())

async function getData() {
    const randomPage = Math.floor(Math.random() * 1000)
    // const text = document.createElement('p')
    // div.prependChild(text)



    // const img = document.createElement('img')
    // div.prependChild(img)


    const moviePromise = await fetch(`https://api.themoviedb.org/3/movie/${randomPage}?api_key=785a47261ff3fa9029fbc96bcbd37ca7&language=pt-br`)
    const movie = await moviePromise.json()
    var movieImg = movie.poster_path
    console.log(movieImg)

    console.log(movie)
    document.getElementById('title').innerHTML = movie.title
    document.getElementById('img').src = `https://image.tmdb.org/t/p/w300//${movieImg}`
    document.getElementById('text').innerHTML = movie.overview
    // div.appendChild(titleElement)


}