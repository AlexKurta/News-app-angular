import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "../../services/news-api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  newsList = [];
  currentCategory = "general";
  currentCountry = "ru";
  categoryList = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology"
  ];
  countryList = ["ru", "ua", "gb", "us"];
  currentSource = "";
  sourceList = [];

  constructor(private news: NewsApiService) {}

  ngOnInit() {
    //Get news
    this.news
      .getNewsByCountryAndCategory(this.currentCountry, this.currentCategory)
      .subscribe(news => {
        this.newsList = news["articles"];
      });

    //Get all source
    this.news
      .getSourceByCountry(this.currentCountry, this.currentCategory)
      .subscribe(sources => {
        if (sources["sources"].length) {
          this.sourceList = sources["sources"];
        }
      });
  }

  onChange() {
    //Get news
    this.news
      .getNewsByCountryAndCategory(this.currentCountry, this.currentCategory)
      .subscribe(news => {
        this.newsList = news["articles"];
      });

    //Get all source
    this.news
      .getSourceByCountry(this.currentCountry, this.currentCategory)
      .subscribe(sources => {
        if (sources["sources"].length) {
          this.sourceList = sources["sources"];
          this.currentSource = this.sourceList[0];
        }
      });
  }

  onChangeSource() {
    this.news.getNewsBySource(this.currentSource).subscribe(news => {
      this.newsList = news["articles"];
    });
  }
}
