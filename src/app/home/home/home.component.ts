import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  dummy_clients = [
    {
      id: 1,
      name: "Capmar",
      description: "Empresa de Capacitación Marítima",
      url_logo: "/assets/img/clients/capmar-logo.png",
      url_site: "https://nuevacapmar.cl",
    },
    {
      id: 2,
      name: "RK3",
      description: "Empresa de Calculo Estructural",
      url_logo: "/assets/img/clients/rk3-logo.png",
      url_site: "https://rk3.cl/",
    },
    {
      id: 3,
      name: "JEIT",
      description: "Negocio de venta de condimentos",
      url_logo: "/assets/img/clients/jeit-logo.png",
      url_site: "#",
    },
    {
      id: 4,
      name: "Colegio robles",
      description: "Corporación educacional colegio robles",
      url_logo: "/assets/img/clients/logo-colegio-robles-logo.png",
      url_site: "https://www.colegiorobles.cl",
    },
    {
      id: 5,
      name: "Red Cruz del Mar",
      description: "Empresa de servicios de ambulancia",
      url_logo: "/assets/img/clients/redcruzmar-logo.png",
      url_site: "https://www.redcruzdelmar.cl",
    },
  ];

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);

    var elements = [
      ".box",
      "#navbar nav",
      ".box-img",
      ".box h2",
      ".box p",
      ".box a",
    ];
    gsap.from(elements, {
      opacity: 0,
      y: "+=50",
      stagger: 0.3,
    });
    
    
    // this.verticalAnimation('#services', 'h1');
    // this.verticalAnimation('#rrss', 'h1');
    // this.verticalAnimation('#about', 'h1');

    gsap.from("#clients div", {
      scrollTrigger: {
        trigger: "#clients div",
        toggleActions: "play none resume reset",
      },
      y: "+=20",
      opacity: 0,
      duration: 2,
      stagger: 0.15,
    });

    gsap.from("#about .fade-horizontal", {
      scrollTrigger: {
        trigger: "#about h1",
        toggleActions: "play none resume reset",
      },
      x: "-=100",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from("#services .fade-vertical", {
      scrollTrigger: {
        trigger: "#services h1",
        toggleActions: "play none resume reset",
      },
      y: "+=50",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });

    gsap.from("#contact .fade-horizontal", {
      scrollTrigger: {
        trigger: "#contact h1",
        toggleActions: "play none resume reset",
      },
      x: "-=100",
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    gsap.from("#rrss .fade-vertical", {
      scrollTrigger: {
        trigger: "#rrss h1",
        toggleActions: "play none resume reset",
      },
      y: "+=50", //cambiar a 100
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }

  currentYear: number = new Date().getFullYear();
  menuActivo = false;

  toggleMenu() {
    this.menuActivo = !this.menuActivo;
  }

  verticalAnimation(id:String, label:String): void {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: id+' '+label,
        toggleActions: 'play none resume reset',
      },
    });

    animation.from(id+' .fade-vertical', {
      y: '+=100',
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }
}
