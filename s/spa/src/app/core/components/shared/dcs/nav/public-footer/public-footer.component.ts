import { Component, OnInit } from '@angular/core';

import { contactUsComponentMetadata } from 'src/app/core/components/public/contact-us/contact-us.component-metadata';
import { homeComponentMetadata } from 'src/app/core/components/public/home/home.component-metadata';
import { servicesComponentMetadata } from 'src/app/core/components/public/services/services.component-metadata';
import { websiteMetadata } from 'src/constants/website-metadata';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.scss']
})
export class PublicFooterComponent implements OnInit {

  copyright = websiteMetadata.copyright;

  homeRoute = homeComponentMetadata.route;
  homeRouteAnchorText = homeComponentMetadata.anchorText;

  contactUsRoute = this.homeRoute + contactUsComponentMetadata.route;
  contactUsRouteAnchorText = contactUsComponentMetadata.anchorText;

  servicesRoute = this.homeRoute + servicesComponentMetadata.route;
  servicesRouteAnchorText = servicesComponentMetadata.anchorText;

  constructor() { }

  ngOnInit(): void { }

}
