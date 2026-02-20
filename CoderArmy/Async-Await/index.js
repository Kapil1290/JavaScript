// async await
// async always return a promise
async function greet() {
    // return "Kapil";      // wrap-up if you passing normally

    return new Promise((resolve,reject)=>{    // if you are already passing the promise then no need of wrapping
        reject("error")
    })
}

const data = greet()
data
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

// const res = greet();
// res.then((data)=>{      //res is a promise
//     console.log(data);
// })


async function git(){
    const response = await fetch("https://api.github.com/users")
    const info = await response.json()
    const div = document.getElementById("first")
    for(let i=0; i<info.length; i++){
        const innerdiv = document.createElement('div');
        innerdiv.classList.add("user");
        innerdiv.id = "inner";

        const image = document.createElement('img');
        image.src = info[i].avatar_url;
        
        const name = document.createElement('h2');
        name.textContent = info[i].login;

        const anchor = document.createElement('a');
        anchor.href = info[i].url;
        anchor.textContent = "Visit Profile";

        innerdiv.append(image,name,anchor)

        div.append(innerdiv);
    }
}

git();
