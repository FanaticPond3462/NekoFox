document.querySelector("#ahoge").style.left = "871px";
document.querySelector("#ahoge").style.top = "253px";
document.querySelector("#ARM_LEFT").style.left = "714px";
document.querySelector("#ARM_LEFT").style.top = "565px";
document.querySelector("#ARM_RIGHT").style.left = "978px";
document.querySelector("#ARM_RIGHT").style.top = "493px";
document.querySelector("#ASHI").style.left = "825px";
document.querySelector("#ASHI").style.top = "1000px";
document.querySelector("#BACK_1").style.left = "720px";
document.querySelector("#BACK_1").style.top = "364px";
document.querySelector("#BACK_2").style.left = "762px";
document.querySelector("#BACK_2").style.top = "384px";
document.querySelector("#BACK_3").style.left = "842px";
document.querySelector("#BACK_3").style.top = "384px";
document.querySelector("#BACK_4").style.left = "913px";
document.querySelector("#BACK_4").style.top = "410px";
document.querySelector("#BACK_5").style.left = "977px";
document.querySelector("#BACK_5").style.top = "417px";
document.querySelector("#BASE").style.left = "814px";
document.querySelector("#BASE").style.top = "404px";
document.querySelector("#ERI").style.left = "832px";
document.querySelector("#ERI").style.top = "530px";
document.querySelector("#FORNT_CENTER").style.left = "857px";
document.querySelector("#FORNT_CENTER").style.top = "339px";
document.querySelector("#FORNT_LEFT").style.left = "891px";
document.querySelector("#FORNT_LEFT").style.top = "350px";
document.querySelector("#FRONT_RIGHT").style.left = "807px";
document.querySelector("#FRONT_RIGHT").style.top = "346px";
document.querySelector("#FUKU").style.left = "726px";
document.querySelector("#FUKU").style.top = "556px";
document.querySelector("#KUBI").style.left = "818px";
document.querySelector("#KUBI").style.top = "502px";
document.querySelector("#left_highlight").style.left = "842px";
document.querySelector("#left_highlight").style.top = "437px";
document.querySelector("#left_matuge").style.left = "829px";
document.querySelector("#left_matuge").style.top = "410px";
document.querySelector("#left_mayuge").style.left = "833px";
document.querySelector("#left_mayuge").style.top = "428px";
document.querySelector("#left_mayuge_color").style.left = "823px";
document.querySelector("#left_mayuge_color").style.top = "400px";
document.querySelector("#left_me").style.left = "840px";
document.querySelector("#left_me").style.top = "428px";
document.querySelector("#MIDDLE").style.left = "950px";
document.querySelector("#MIDDLE").style.top = "350px";
document.querySelector("#MOUTH").style.left = "879px";
document.querySelector("#MOUTH").style.top = "485px";
document.querySelector("#nekomimi_left").style.left = "789px";
document.querySelector("#nekomimi_left").style.top = "279px";
document.querySelector("#nekomimi_right").style.left = "927px";
document.querySelector("#nekomimi_right").style.top = "290px";
document.querySelector("#nyo").style.left = "763px";
document.querySelector("#nyo").style.top = "337px";
document.querySelector("#right_highlight").style.left = "923px";
document.querySelector("#right_highlight").style.top = "439px";
document.querySelector("#right_matuge").style.left = "921px";
document.querySelector("#right_matuge").style.top = "414px";
document.querySelector("#right_mayuge").style.left = "917px";
document.querySelector("#right_mayuge").style.top = "431px";
document.querySelector("#right_mayuge_color").style.left = "897px";
document.querySelector("#right_mayuge_color").style.top = "401px";
document.querySelector("#right_me").style.left = "922px";
document.querySelector("#right_me").style.top = "428px";
document.querySelector("#SKIRT_0").style.left = "771px";
document.querySelector("#SKIRT_0").style.top = "778px";
document.querySelector("#SKIRT_1").style.left = "798px";
document.querySelector("#SKIRT_1").style.top = "790px";
document.querySelector("#SKIRT_2").style.left = "849px";
document.querySelector("#SKIRT_2").style.top = "789px";
document.querySelector("#SKIRT_3").style.left = "893px";
document.querySelector("#SKIRT_3").style.top = "774px";
document.querySelector("#SKIRT_4").style.left = "925px";
document.querySelector("#SKIRT_4").style.top = "773px";
document.querySelector("#SKIRT_5").style.left = "959px";
document.querySelector("#SKIRT_5").style.top = "779px";
document.querySelector("#TAIL").style.left = "980px";
document.querySelector("#TAIL").style.top = "760px";
document.querySelector("#TOP").style.left = "796px";
document.querySelector("#TOP").style.top = "318px";

window.addEventListener('load', () => {
    var objects = document.querySelectorAll("img");

    objects.forEach((element) => {
        const position_info = { x: parseInt(element.style.left.replace("px", "")), y: parseInt(element.style.top.replace("px", "")) }
        const mouse_info = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        element.style["aspect-ratio"] = `${element.naturalWidth}/${element.naturalHeight}`;
        var ver, hor, sign
        if (element.classList.contains("tuiteiku") || element.classList.contains("inverted_tuiteiku")) {
            ver = 20
            hor = 3
            sign = -1
            if (element.classList.contains("inverted_tuiteiku")) {
                sign = 1
            }
        } else if (element.classList.contains("more_tuiteiku")  || element.classList.contains("inverted_more_tuiteiku")) {
            ver = 30
            hor = 8
            sign = -1
            if (element.classList.contains("inverted_more_tuiteiku")) {
                sign = 1
            }
        } else if (element.classList.contains("middle_tuiteiku")) {
            ver = 5
            hor = 3
            sign = -1
        } else {
            ver = 0
            hor = 0
            sign = 0
        }

        var down = 0

        const mainloop = () => {
            const multiplyer = window.innerHeight / 1200;

            element.height = element.naturalHeight * multiplyer;

            let y = position_info.y + (Math.min(hor, Math.abs((position_info.y - mouse_info.y) / window.innerHeight) * hor) * Math.sign(position_info.y - mouse_info.y)) * sign;
            let x = position_info.x + (Math.min(ver, Math.abs((position_info.x - mouse_info.x) / window.innerWidth) * ver) * Math.sign(position_info.x - mouse_info.x)) * sign;

            y += down
            element.style.top = `${y * multiplyer}px`;
            element.style.left = `${x * multiplyer}px`;
            requestAnimationFrame(mainloop)
        }
        requestAnimationFrame(mainloop)

        // ポインターを追ってみる。
        if (sign != 0) {
            document.addEventListener('pointermove', ((ev) => {
                mouse_info.x = ev.clientX
                mouse_info.y = ev.clientY
            }))
        }
        function increment(){
            down = Math.min(25, down + 1)
        }
        function decrement(){
            down = Math.max(0, down - 1)
        }

        // 目をつむる
        document.addEventListener('pointerdown', () => {
            if (element.id === "left_mayuge" || element.id === "left_mayuge_color" || element.id === "right_mayuge" || element.id === "right_mayuge_color"){
                console.log("increment")
                const increment_id = setInterval(increment, 20)

                // document要素にイベント登録することで、クリックした後ボタンから動かしてもOK
                // once: true を指定して一度発火したらイベントを削除する
                document.addEventListener('pointerup', () => {        
                    clearInterval(increment_id)
                    console.log("decrement")
                    const decrement_id = setInterval(decrement, 20)
                    document.addEventListener('pointerdown', () => {
                        clearInterval(decrement_id)
                    })
                }, { once: true })
            }
            
        })
    });
})

