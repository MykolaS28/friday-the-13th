(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuLinks:document.querySelectorAll("[data-menu-link]")};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLinks.forEach(l=>l.addEventListener("click",n));function t(){e.menu.classList.toggle("is-open"),e.menu.classList.contains("is-open")?document.body.style.overflow="hidden":document.body.style.overflow=""}function n(){t()}})();var i=document.querySelectorAll(".js-open-modal"),s=document.querySelector(".js-overlay-modal"),d=document.querySelectorAll(".js-modal-close"),r=document.querySelector(".go-top");i.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+n+'"]');document.body.classList.add("modal-for-html-body"),l.classList.add("active"),s.classList.add("active"),r.style.display="none"})});d.forEach(function(e){e.addEventListener("click",function(t){var n=this.closest(".modal");n.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("modal-for-html-body"),document.querySelector(".modal.active")||(r.style.display="block")})});document.body.addEventListener("keyup",function(e){var t=e.keyCode;t==27&&(document.querySelector(".modal.active").classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("modal-for-html-body"),document.querySelector(".modal.active")||(r.style.display="block"))},!1);s.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-for-html-body"),document.querySelector(".modal.active")||(r.style.display="block")});$(document).ready(function(){const e=$(".go-top");$(window).on("scroll",function(){t()}),e.on("click",function(n){n.preventDefault(),$("html, body").animate({scrollTop:0},800)}),$("a[href^='#']").on("click",function(n){n.preventDefault();var l=$($(this).attr("href")),o=l.offset().top;$("html, body").animate({scrollTop:o},{duration:800,start:function(){e.removeClass("go-top--show")},complete:function(){window.location.hash=l.selector,e.addClass("go-top--show")}})});function t(){const n=$(window).scrollTop(),l=$(window).height();n>l/2?e.addClass("go-top--show"):e.removeClass("go-top--show")}});
