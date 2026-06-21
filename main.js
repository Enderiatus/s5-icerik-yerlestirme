// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

// Navbar yazıları
document.querySelector(".container header img").src =
  siteContent["images"]["logo-img"];
const navBar = document.querySelectorAll(".container header nav a");
const navContentText = Object.values(siteContent["nav"]);
for (let i = 0; i < navBar.length; i++) {
  navBar[i].textContent = navContentText[i];
  navBar[i].classList.add("italic");
}

// CTA otomasyon

const ctaSel = document.querySelector(".cta");
const ctaElements = ctaSel.querySelectorAll("h1, button, img");
const cta = siteContent["cta"];

ctaElements.forEach((el) => {
  const tagName = el.tagName.toLowerCase();

  if (cta[tagName]) {
    if (tagName === "img") {
      el.src = cta[tagName];
    } else {
      el.innerText = cta[tagName];
    }
  }
});

// Top content sol-sağ, resim
const topContent = siteContent["top-content"];
const topContentSel = document.querySelectorAll(".top-content .text-content");
// SOL
topContentSel[0].getElementsByTagName("h4")[0].textContent =
  topContent["left-h4"];
topContentSel[0].getElementsByTagName("p")[0].textContent =
  topContent["left-content"];
// SAĞ
topContentSel[1].getElementsByTagName("h4")[0].textContent =
  topContent["right-h4"];
topContentSel[1].getElementsByTagName("p")[0].textContent =
  topContent["right-content"];

document.querySelector(".main-content img").src =
  siteContent["images"]["accent-img"];

// Bottom content

const bottomContent = siteContent["bottom-content"];
const bottomContentSel = document.querySelectorAll(
  ".bottom-content .text-content",
);

// SOL
bottomContentSel[0].getElementsByTagName("h4")[0].textContent =
  bottomContent["left-h4"];
bottomContentSel[0].getElementsByTagName("p")[0].textContent =
  bottomContent["left-content"];
// ORTA
// SAĞ
bottomContentSel[1].getElementsByTagName("h4")[0].textContent =
  bottomContent["middle-h4"];
bottomContentSel[1].getElementsByTagName("p")[0].textContent =
  bottomContent["middle-content"];
// SAĞ
bottomContentSel[2].getElementsByTagName("h4")[0].textContent =
  bottomContent["right-h4"];
bottomContentSel[2].getElementsByTagName("p")[0].textContent =
  bottomContent["right-content"];

// CONTACT

const contactSel = document.querySelector(".contact");
const contact = siteContent["contact"];
const contactValues = [contact.address, contact.phone, contact.email];

Array.from(contactSel.children).forEach((child, index) => {
  const tagName = child.tagName.toLowerCase();

  if (tagName === "h4") {
    child.innerText = contact["contact-h4"];
  } else if (tagName === "p") {
    const pIndex = index - 1;
    if (contactValues[pIndex]) {
      child.innerText = contactValues[pIndex];
    }
  }
});

// FOOTER

document.querySelector("footer a").textContent =
  siteContent["footer"]["copyright"];
document.querySelector("footer a").classList.add("bold");
