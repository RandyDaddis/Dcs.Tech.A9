import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { websiteMetadata } from 'src/constants/website-metadata';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  pageTitle: 'Contact - Daddis Consulting Services';
  company = {
    name: websiteMetadata.name,
    addressLine1: websiteMetadata.addressline1,
    city: websiteMetadata.city,
    state: websiteMetadata.stateOrProvince,
    postalCode: websiteMetadata.postalCode,
    phoneNumber: websiteMetadata.phoneNumber,
    email: websiteMetadata.email,
    cardHeader: 'Contact Us'
  };

  constructor(private meta: Meta,
              private titleService: Title) {

    this.setWebpageMetaTags();
  }

  ngOnInit(): void {
    // set page title
    this.titleService.setTitle(this.pageTitle);
  }

  private setWebpageMetaTags(): void {

    this.meta.addTags([
      { name: 'keywords', content: 'accounting, custom software, website design, website development, managed services, consulting services, advisory services, custom program, software integration, business process improvement' },
      { name: 'description', content: 'Contact ' + this.company.name + ' for information on custom software development, managed IT services, and business process improvement.' }
    ]);
  }
}
