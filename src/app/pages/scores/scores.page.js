const feedDisplay = document.querySelector('#feed')
fetch('http://localhost:8000/results')
    .then(response => response.json())
    .then(data => {
        data.forEach(article => {
            const articleItem = '<div><h2>' + article.team +  '</h2><h3>' + article.result1 + article.result2 + " " + article.score + '</h3><p>' + article.url + '</p></div>'
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))