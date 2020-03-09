import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { contactUsComponentMetadata } from 'src/app/core/components/public/contact-us/contact-us.component-metadata';
import { homeComponentMetadata } from 'src/app/core/components/public/home/home.component-metadata';
import { websiteMetadata } from 'src/constants/website-metadata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = websiteMetadata.name;

  // routes
  homeRoute = homeComponentMetadata.route;
  contactUsRoute = this.homeRoute + contactUsComponentMetadata.route;

  constructor(private meta: Meta,
              private titleService: Title) {

    this.setWebpageMetaTags();
  }

  ngOnInit(): void {

    // set page title
    this.titleService.setTitle(websiteMetadata.name);
  }

  private setWebpageMetaTags(): void {

    this.meta.addTags([
      { name: 'keywords', content: homeComponentMetadata.keywordMetaTag },
      { name: 'description', content: homeComponentMetadata.descriptionMetaTag }
    ]);
  }
}
