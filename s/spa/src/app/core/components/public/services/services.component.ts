import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { contactUsComponentMetadata } from 'src/app/core/components/public/contact-us/contact-us.component-metadata';
import { homeComponentMetadata } from 'src/app/core/components/public/home/home.component-metadata';
import { labels } from 'src/constants/labels';
import { servicesComponentMetadata } from 'src/app/core/components/public/services/services.component-metadata';
import { websiteMetadata } from 'src/constants/website-metadata';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  title = websiteMetadata.name;
  // routes
  homeRoute = homeComponentMetadata.route;
  contactUsRoute = this.homeRoute + contactUsComponentMetadata.route;
  // labels
  accountingTitle = labels.accounting;
  realEstateTitle = labels.realEstate;
  softwareTitle = labels.software;
  technologyTitle = labels.technology;

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
      { name: 'keywords', content: servicesComponentMetadata.keywordMetaTag },
      { name: 'description', content: servicesComponentMetadata.descriptionMetaTag }
    ]);
  }
}
