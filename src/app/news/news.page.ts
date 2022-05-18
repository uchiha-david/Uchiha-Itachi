import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

public news = [
  {title:"Isto é o titulo da primeira noticia", description:"Descricao da noticia", year:"2022", image:"link", icon:""},
  {title:"Isto é o titulo da primeira noticia", description:"Descricao da noticia", year:"2022", image:"link", icon:""},
  {title:"Isto é o titulo da primeira noticia", description:"Descricao da noticia", year:"2022", image:"link", icon:""},


];

  constructor() { }

  ngOnInit() {

  }

}
