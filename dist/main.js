(() => {
    "use strict";
    const e = document.querySelector("#content"),
        t = document.querySelector("#home"),
        n = document.querySelector("#menu"),
        c = document.querySelector("#order");

    function o() {
        e.innerHTML = ""
    }
    t.addEventListener("click", (() => {
        o(),
            function () {
                const e = document.querySelector("#content"),
                    t = document.createElement("div");
                t.classList.add("home"), t.setAttribute("id", "home");
                const n = document.createElement("span");
            n.textContent = "outstanding food", t.appendChild(n);
                const c = document.createElement("h3");
            c.textContent = "delicious cooking..... ", t.appendChild(c);
                const o = document.createElement("img");
            o.src = "images/about-img.png", t.appendChild(o), e.appendChild(t)
            }()
    })), n.addEventListener("click", (() => {
        o(),
            function () {
                const e = document.querySelector("#content"),
                    t = document.createElement("div"),
                    n = document.createElement("h1");
            n.textContent = "sweet dessets", t.appendChild(n);
                const c = document.createElement("p");
            c.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50", t.appendChild(c);
                const o = document.createElement("h1");
                o.textContent = "cold drinks", t.appendChild(o);
                const d = document.createElement("p");
            d.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50", t.appendChild(d);
                const i = document.createElement("h1");
            i.textContent = "delicious dinner", t.appendChild(i);
                const m = document.createElement("p");
            m.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, dolores. price : $50", t.appendChild(m), e.appendChild(t)
            }()
    })), c.addEventListener("click", (() => {
        o(),
            function () {
                const e = document.querySelector("#content"),
                    t = document.createElement("div"),
                    n = document.createElement("h1");
                n.textContent = "Order", t.appendChild(n);
                const c = document.createElement("h2");
                c.textContent = "Number", t.appendChild(c);
                const o = document.createElement("h2");
                o.textContent = "order details", t.appendChild(o), e.appendChild(t)
            }()
    }))
})();