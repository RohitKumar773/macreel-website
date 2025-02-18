import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalMarketingRoutingModule } from './digital-marketing-routing.module';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { EmailMarketingComponent } from './email-marketing/email-marketing.component';
import { InternetMarketingComponent } from './internet-marketing/internet-marketing.component';
import { GooglePromotionServiceComponent } from './google-promotion-service/google-promotion-service.component';
import { GoogleRankingServiceComponent } from './google-ranking-service/google-ranking-service.component';
import { GoogleBrandingServiceComponent } from './google-branding-service/google-branding-service.component';
import { GoogleAdwordPromotionComponent } from './google-adword-promotion/google-adword-promotion.component';
import { GoogleAdwordCompanyComponent } from './google-adword-company/google-adword-company.component';
import { GoogleAdwordServicesComponent } from './google-adword-services/google-adword-services.component';
import { OnlineWebsitePromotionComponent } from './online-website-promotion/online-website-promotion.component';
import { WebsitePromotionCompanyComponent } from './website-promotion-company/website-promotion-company.component';
import { PromoteBusinessOnGoogleComponent } from './promote-business-on-google/promote-business-on-google.component';
import { GooglePaidPromotionComponent } from './google-paid-promotion/google-paid-promotion.component';
import { WebPromotionCompanyComponent } from './web-promotion-company/web-promotion-company.component';
import { SeoWebsitePromotionComponent } from './seo-website-promotion/seo-website-promotion.component';
import { LocalWebsitePromotionComponent } from './local-website-promotion/local-website-promotion.component';
import { GoogleShopingAdPromotionComponent } from './google-shoping-ad-promotion/google-shoping-ad-promotion.component';
import { GoogleMarketingServiceComponent } from './google-marketing-service/google-marketing-service.component';
import { FacebookPromotionComponent } from './facebook-promotion/facebook-promotion.component';
import { InstagramPromotionComponent } from './instagram-promotion/instagram-promotion.component';
import { GooglePlusPromotionComponent } from './google-plus-promotion/google-plus-promotion.component';
import { TwiterPromotionComponent } from './twiter-promotion/twiter-promotion.component';
import { LinkedinPromotionComponent } from './linkedin-promotion/linkedin-promotion.component';


@NgModule({
  declarations: [
    DigitalMarketingComponent,
    EmailMarketingComponent,
    InternetMarketingComponent,
    GooglePromotionServiceComponent,
    GoogleRankingServiceComponent,
    GoogleBrandingServiceComponent,
    GoogleAdwordPromotionComponent,
    GoogleAdwordCompanyComponent,
    GoogleAdwordServicesComponent,
    OnlineWebsitePromotionComponent,
    WebsitePromotionCompanyComponent,
    PromoteBusinessOnGoogleComponent,
    GooglePaidPromotionComponent,
    WebPromotionCompanyComponent,
    SeoWebsitePromotionComponent,
    LocalWebsitePromotionComponent,
    GoogleShopingAdPromotionComponent,
    GoogleMarketingServiceComponent,
    FacebookPromotionComponent,
    InstagramPromotionComponent,
    GooglePlusPromotionComponent,
    TwiterPromotionComponent,
    LinkedinPromotionComponent
  ],
  imports: [
    CommonModule,
    DigitalMarketingRoutingModule
  ]
})
export class DigitalMarketingModule { }
