let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
/*你好，我叫小刘
 *接下来我要做出一个八卦
 *请看！*/

#bagua{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

#bagua::before,
#bagua::after {
    content: '';
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

#bagua::before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}

#bagua::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}

/* 让八卦转起来吧！*/

@keyframes rotate { 
    from{transform: rotate(0deg)
    }
    to{transform: rotate(360deg)}
}
#bagua {
    animation: 4s linear 0s infinite rotate;
}
#text {
    color: #333;
}
`
console.log(string.length)
let n = 0
let string2 = ""
let step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车，就直接照搬
        if (string[n] === '\n') {
            string2 += "<br>"
        } else if (string[n] === ' ') {
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        // string2 += string[n] === "\n" ? "<br>" : string[n]
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        html.scrollTo(0, 99999)
        window.scrollTo(0, 99999)
        // console.log("当前字符是--" + string[n] + n);
        if (n < string.length - 1) {
            // 如果 n 不是最后一个，就继续
            n += 1
            step()
        }
    }, 0)
}
step()
