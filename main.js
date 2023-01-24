let loadingFlag = false;
const button = document.querySelector('p');
const nameData = document.querySelector('.nameData');
button.addEventListener('mouseover', () => {
    if (loadingFlag === false) {
        // console.log('hover');
        const url = './main.json';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const data = xhr.responseText
                const json = JSON.parse(data);
                json.charas.forEach(element => {
                    console.log(element.id);
                    const p_tag = document.createElement('p')
                    p_tag.innerText = `${element.id} : ${element.chara}`;
                    nameData.appendChild(p_tag);
                });
                loadingFlag = true;
            }
        }
    }
})