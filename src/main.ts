const linksEl = document.getElementById("links-wrapper");
const links = ["GitHub",  "Frontend Mentor", "LinkedIn",  "Twitter", "Instagram"]

const linksMkup = links.map(
    link => (
        `
        <li class="card__link">
            <a href="#">
                ${link}
            </a>
        </li>
        `
    )
)

if (linksEl){
    linksEl.innerHTML = linksMkup.join("")
}