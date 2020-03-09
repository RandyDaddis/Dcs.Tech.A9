import { Component, OnInit } from '@angular/core';

import { contactUsComponentMetadata } from 'src/app/core/components/public/contact-us/contact-us.component-metadata';
import { homeComponentMetadata } from 'src/app/core/components/public/home/home.component-metadata';
import { servicesComponentMetadata } from 'src/app/core/components/public/services/services.component-metadata';
import { websiteMetadata } from 'src/constants/website-metadata';

@Component({
  selector: 'app-public-top-nav',
  templateUrl: './public-top-nav.component.html',
  styleUrls: ['./public-top-nav.component.scss']
})
export class PublicTopNavComponent implements OnInit {

  siteName = websiteMetadata.name;

  homeRoute = homeComponentMetadata.route;
  homeRouteAnchorText = homeComponentMetadata.anchorText;

  contactUsRoute = this.homeRoute + contactUsComponentMetadata.route;
  contactUsRouteAnchorText = contactUsComponentMetadata.anchorText;

  servicesRoute = this.homeRoute + servicesComponentMetadata.route;
  servicesRouteAnchorText = servicesComponentMetadata.anchorText;

  buttonId = '';
  containerIds = [];

  constructor() { }

  ngOnInit(): void { }

  collapseContainer(containerId) {
    let container = this.getContainer(containerId);
    if (container.classList.contains('show'))
      container.classList.remove('show');
  }

  expandContainer(containerId) {
    let container = this.getContainer(containerId);
    if (!container.classList.contains('show'))
      container.classList.add('show');
  }

  getButton = () => document.getElementById(this.buttonId);
  
  getContainer = (containerId) => document.getElementById(containerId);

  hide() {
    this.containerIds.forEach(containerId => this.collapseContainer(containerId)); // hide each container
    this.setButtonAttributeAndClassForCollapsedContainers();
  }

  isCollapsed() {
    if (this.containerIds.length > 0) {
      let container = this.getContainer(this.containerIds[0]);
      if (container.classList.contains('show'))
        return false;
    }
    return true;
  }

  setButtonAttributeAndClassForCollapsedContainers() {
    let button = this.getButton();
    if (!button.classList.contains('collapsed'))
      button.classList.add('collapsed');
    button.setAttribute('aria-expanded', 'false');
  }

  setButtonAttributeAndClassForExpandedContainers() {
    let button = this.getButton();
    if (button.classList.contains('collapsed'))
      button.classList.remove('collapsed');
    button.setAttribute('aria-expanded', 'true');
  }

  show() {   
    this.containerIds.forEach(containerId => this.expandContainer(containerId)); // show each container
    this.setButtonAttributeAndClassForExpandedContainers();
  }

  toggle(buttonId, containerIds) {
    this.buttonId = buttonId;
    this.containerIds = containerIds;
    if (this.isCollapsed()) {
      this.show();
    } else {
      this.hide();
    }
  }
}
